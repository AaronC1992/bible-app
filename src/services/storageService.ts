/**
 * storageService.ts
 * All localStorage persistence lives here.
 * Designed to be swappable with Supabase or another backend later.
 */

import type { FavoriteVerse, HighlightedVerse, UserNote, LastReadPassage, HighlightColor } from '../types/storage';
import type { VerseReference } from '../types/bible';
import { READING_PLANS } from '../data/readingPlans';
import type { ReadingPlan } from '../types/storage';

// ── Storage keys ──────────────────────────────────────────────────────────

const KEYS = {
  FAVORITES: 'cb_favorites',
  NOTES: 'cb_notes',
  HIGHLIGHTS: 'cb_highlights',
  LAST_READ: 'cb_last_read',
  READING_PLANS: 'cb_reading_plans',
} as const;

// ── Generic helpers ────────────────────────────────────────────────────────

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.error('localStorage write failed', key);
  }
}

function verseRefKey(ref: VerseReference): string {
  return `${ref.bookId}-${ref.chapter}-${ref.verse}`;
}

// ── Favorites ───────────────────────────────────────────────────────────────

export function getFavorites(): FavoriteVerse[] {
  return load<FavoriteVerse[]>(KEYS.FAVORITES, []);
}

export function addFavorite(ref: VerseReference, verseText: string): void {
  const favs = getFavorites();
  const id = verseRefKey(ref);
  if (favs.find(f => f.id === id)) return;
  favs.push({ id, verseRef: buildVerseLabel(ref), reference: ref, verseText, savedAt: new Date().toISOString() });
  save(KEYS.FAVORITES, favs);
}

export function removeFavorite(ref: VerseReference): void {
  const favs = getFavorites().filter(f => f.id !== verseRefKey(ref));
  save(KEYS.FAVORITES, favs);
}

export function isFavorite(ref: VerseReference): boolean {
  return getFavorites().some(f => f.id === verseRefKey(ref));
}

// ── Notes ────────────────────────────────────────────────────────────────────

export function getNotes(): UserNote[] {
  return load<UserNote[]>(KEYS.NOTES, []);
}

export function saveNote(ref: VerseReference, verseText: string, content: string): UserNote {
  const notes = getNotes();
  const id = verseRefKey(ref);
  const now = new Date().toISOString();
  const existing = notes.findIndex(n => n.id === id);
  const note: UserNote = { id, verseRef: buildVerseLabel(ref), reference: ref, verseText, content, createdAt: now, updatedAt: now };
  if (existing >= 0) {
    notes[existing] = { ...notes[existing]!, ...note, createdAt: notes[existing]!.createdAt };
  } else {
    notes.push(note);
  }
  save(KEYS.NOTES, notes);
  return note;
}

export function deleteNote(ref: VerseReference): void {
  const notes = getNotes().filter(n => n.id !== verseRefKey(ref));
  save(KEYS.NOTES, notes);
}

export function getNote(ref: VerseReference): UserNote | undefined {
  return getNotes().find(n => n.id === verseRefKey(ref));
}

// ── Highlights ────────────────────────────────────────────────────────────────

export function getHighlights(): HighlightedVerse[] {
  return load<HighlightedVerse[]>(KEYS.HIGHLIGHTS, []);
}

export function addHighlight(ref: VerseReference, verseText: string, color: HighlightColor): void {
  const highlights = getHighlights();
  const id = verseRefKey(ref);
  const filtered = highlights.filter(h => h.id !== id);
  filtered.push({ id, verseRef: buildVerseLabel(ref), reference: ref, verseText, color, savedAt: new Date().toISOString() });
  save(KEYS.HIGHLIGHTS, filtered);
}

export function removeHighlight(ref: VerseReference): void {
  const highlights = getHighlights().filter(h => h.id !== verseRefKey(ref));
  save(KEYS.HIGHLIGHTS, highlights);
}

export function getHighlight(ref: VerseReference): HighlightedVerse | undefined {
  return getHighlights().find(h => h.id === verseRefKey(ref));
}

// ── Last read ─────────────────────────────────────────────────────────────────

export function getLastRead(): LastReadPassage | null {
  return load<LastReadPassage | null>(KEYS.LAST_READ, null);
}

export function setLastRead(passage: LastReadPassage): void {
  save(KEYS.LAST_READ, passage);
}

// ── Reading plans ────────────────────────────────────────────────────────────

export function getReadingPlans(): ReadingPlan[] {
  const saved = load<ReadingPlan[] | null>(KEYS.READING_PLANS, null);
  if (saved) return saved;
  // First time: seed from static data
  save(KEYS.READING_PLANS, READING_PLANS);
  return READING_PLANS;
}

export function markPlanDayComplete(planId: string, day: number, complete: boolean): void {
  const plans = getReadingPlans();
  const plan = plans.find(p => p.id === planId);
  if (!plan) return;
  const planDay = plan.days.find(d => d.day === day);
  if (!planDay) return;
  planDay.completed = complete;
  planDay.completedAt = complete ? new Date().toISOString() : undefined;
  save(KEYS.READING_PLANS, plans);
}

// ── Utilities ────────────────────────────────────────────────────────────────

function buildVerseLabel(ref: VerseReference): string {
  return `${ref.bookName} ${ref.chapter}:${ref.verse}`;
}
