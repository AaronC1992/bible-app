import type { VerseReference } from './bible';

export interface UserNote {
  id: string;
  verseRef: string;
  reference: VerseReference;
  verseText: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface FavoriteVerse {
  id: string;
  verseRef: string;
  reference: VerseReference;
  verseText: string;
  savedAt: string;
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'purple';

export interface HighlightedVerse {
  id: string;
  verseRef: string;
  reference: VerseReference;
  verseText: string;
  color: HighlightColor;
  savedAt: string;
}

export interface ReadingPlanDay {
  day: number;
  title: string;
  reference: string;
  bookId: string;
  chapter: number;
  completed: boolean;
  completedAt?: string;
}

export interface ReadingPlan {
  id: string;
  name: string;
  description: string;
  days: ReadingPlanDay[];
}

export interface LastReadPassage {
  bookId: string;
  bookName: string;
  chapter: number;
  translationId: string;
  timestamp: string;
}
