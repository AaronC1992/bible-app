/**
 * bibleApi.ts
 * Bible API service — uses the Free Use Bible API (bible.helloao.org)
 * All API logic lives here so the app can swap sources without touching components.
 *
 * Base URL: https://bible.helloao.org/api
 * No API key required. Fully open, no usage limits.
 */

import type { BibleTranslation, BibleBook, BibleChapter, BibleVerse, SearchResult, VerseReference } from '../types/bible';
import { BIBLE_BOOKS } from '../data/bibleBooks';

// ── Configuration ──────────────────────────────────────────────────────────
const BASE_URL = 'https://bible.helloao.org/api';

// Default translation — BSB is the featured translation for this API
const FALLBACK_TRANSLATION_ID = 'BSB';

// ── Internal helpers ────────────────────────────────────────────────────────

async function apiFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}: ${res.statusText}`);
  return res.json() as Promise<T>;
}

// Extract plain text from a verse content array.
// Items can be a string, FormattedText {text}, InlineHeading {heading},
// InlineLineBreak {lineBreak}, or footnote ref {noteId}.
type VerseContentItem =
  | string
  | { text: string; poem?: number; wordsOfJesus?: boolean }
  | { heading: string }
  | { lineBreak: true }
  | { noteId: number };

function extractVerseText(content: VerseContentItem[]): string {
  return content
    .map(item => {
      if (typeof item === 'string') return item;
      if ('text' in item) return (item as { text: string }).text;
      if ('lineBreak' in item) return ' ';
      return '';
    })
    .join('')
    .trim();
}

// ── Sample data for offline / no-key development ───────────────────────────

const SAMPLE_VERSES: Record<string, BibleVerse[]> = {
  'BSB-GEN-1': [
    { id: 'BSB-GEN-1-1', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 1, text: 'In the beginning God created the heavens and the earth.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-2', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 2, text: 'Now the earth was formless and void, and darkness was over the surface of the deep. And the Spirit of God was hovering over the surface of the waters.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-3', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 3, text: 'And God said, “Let there be light,” and there was light.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-4', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 4, text: 'And God saw that the light was good, and He separated the light from the darkness.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-5', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 5, text: 'God called the light “day,” and the darkness He called “night.” And there was evening, and there was morning—the first day.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-26', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 26, text: 'Then God said, “Let Us make man in Our image, after Our likeness, to rule over the fish of the sea and the birds of the air, over the livestock, and over all the earth itself and every creature that crawls upon it.”', translationId: 'BSB' },
    { id: 'BSB-GEN-1-27', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 27, text: 'So God created man in His own image; in the image of God He created him; male and female He created them.', translationId: 'BSB' },
    { id: 'BSB-GEN-1-31', bookId: 'GEN', bookName: 'Genesis', chapter: 1, verse: 31, text: 'And God looked upon all that He had made, and indeed, it was very good. And there was evening, and there was morning—the sixth day.', translationId: 'BSB' },
  ],
  'BSB-PSA-23': [
    { id: 'BSB-PSA-23-1', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 1, text: 'The LORD is my shepherd; I shall not want.', translationId: 'BSB' },
    { id: 'BSB-PSA-23-2', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 2, text: 'He makes me lie down in green pastures; He leads me beside still waters.', translationId: 'BSB' },
    { id: 'BSB-PSA-23-3', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 3, text: 'He restores my soul; He guides me in the paths of righteousness for the sake of His name.', translationId: 'BSB' },
    { id: 'BSB-PSA-23-4', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 4, text: 'Even though I walk through the valley of the shadow of death, I will fear no evil, for You are with me; Your rod and Your staff, they comfort me.', translationId: 'BSB' },
    { id: 'BSB-PSA-23-5', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 5, text: 'You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows.', translationId: 'BSB' },
    { id: 'BSB-PSA-23-6', bookId: 'PSA', bookName: 'Psalms', chapter: 23, verse: 6, text: 'Surely goodness and mercy will follow me all the days of my life, and I will dwell in the house of the LORD forever.', translationId: 'BSB' },
  ],
  'BSB-JHN-3': [
    { id: 'BSB-JHN-3-1', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 1, text: 'Now there was a Pharisee named Nicodemus, who was a leader of the Jews.', translationId: 'BSB' },
    { id: 'BSB-JHN-3-2', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 2, text: 'He came to Jesus at night and said, “Rabbi, we know that You are a teacher who has come from God. For no one could perform the signs You are doing if God were not with him.”', translationId: 'BSB' },
    { id: 'BSB-JHN-3-3', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 3, text: 'Jesus replied, “Truly, truly, I tell you, no one can see the kingdom of God unless he is born again.”', translationId: 'BSB' },
    { id: 'BSB-JHN-3-14', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 14, text: 'Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up,', translationId: 'BSB' },
    { id: 'BSB-JHN-3-15', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 15, text: 'that everyone who believes in Him may have eternal life.', translationId: 'BSB' },
    { id: 'BSB-JHN-3-16', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 16, text: 'For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life.', translationId: 'BSB' },
    { id: 'BSB-JHN-3-17', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 17, text: 'For God did not send His Son into the world to condemn the world, but to save the world through Him.', translationId: 'BSB' },
    { id: 'BSB-JHN-3-36', bookId: 'JHN', bookName: 'John', chapter: 3, verse: 36, text: 'Whoever believes in the Son has eternal life. Whoever rejects the Son will not see life. Instead, the wrath of God remains on him.', translationId: 'BSB' },
  ],
  'BSB-ROM-8': [
    { id: 'BSB-ROM-8-1', bookId: 'ROM', bookName: 'Romans', chapter: 8, verse: 1, text: 'Therefore, there is now no condemnation for those who are in Christ Jesus,', translationId: 'BSB' },
    { id: 'BSB-ROM-8-28', bookId: 'ROM', bookName: 'Romans', chapter: 8, verse: 28, text: 'And we know that all things work together for the good of those who love God, who are called according to His purpose.', translationId: 'BSB' },
    { id: 'BSB-ROM-8-31', bookId: 'ROM', bookName: 'Romans', chapter: 8, verse: 31, text: 'What then shall we say in response to these things? If God is for us, who can be against us?', translationId: 'BSB' },
    { id: 'BSB-ROM-8-38', bookId: 'ROM', bookName: 'Romans', chapter: 8, verse: 38, text: 'For I am convinced that neither death nor life, neither angels nor principalities, neither the present nor the future, nor any powers,', translationId: 'BSB' },
    { id: 'BSB-ROM-8-39', bookId: 'ROM', bookName: 'Romans', chapter: 8, verse: 39, text: 'neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', translationId: 'BSB' },
  ],
};

function getSampleChapter(translationId: string, bookId: string, chapter: number): BibleChapter {
  const key = `${translationId}-${bookId}-${chapter}`;
  const book = BIBLE_BOOKS.find(b => b.id === bookId);
  const bookName = book?.name ?? bookId;

  const sampleVerses = SAMPLE_VERSES[key];
  if (sampleVerses) {
    return { bookId, bookName, chapter, translationId, verses: sampleVerses };
  }

  // Generic placeholder verses when no sample exists
  const placeholderVerses: BibleVerse[] = Array.from({ length: 5 }, (_, i) => ({
    id: `${translationId}-${bookId}-${chapter}-${i + 1}`,
    bookId,
    bookName,
    chapter,
    verse: i + 1,
    text: `[Verse ${i + 1} — Unable to load. Check your network connection.]`,
    translationId,
  }));
  return { bookId, bookName, chapter, translationId, verses: placeholderVerses };
}

// ── Public API functions ─────────────────────────────────────────────────────

export async function getTranslations(): Promise<BibleTranslation[]> {
  try {
    interface ApiTranslation {
      id: string;
      englishName: string;
      shortName: string;
      language: string;
      languageEnglishName?: string;
    }
    interface ApiTranslations { translations: ApiTranslation[] }
    const data = await apiFetch<ApiTranslations>('/available_translations.json');
    return data.translations
      .filter(t => t.language === 'eng')
      .slice(0, 20)
      .map(t => ({
        id: t.id,
        name: t.englishName,
        abbreviation: t.shortName,
        language: t.languageEnglishName ?? 'English',
      }));
  } catch {
    return [
      { id: 'BSB', name: 'Berean Standard Bible', abbreviation: 'BSB', language: 'English' },
      { id: 'KJV', name: 'King James Version', abbreviation: 'KJV', language: 'English' },
      { id: 'WEB', name: 'World English Bible', abbreviation: 'WEB', language: 'English' },
    ];
  }
}

export async function getBooks(translationId: string): Promise<BibleBook[]> {
  try {
    interface ApiBook {
      id: string;
      name: string;
      commonName: string;
      order: number;
      numberOfChapters: number;
    }
    interface ApiBooks { books: ApiBook[] }
    const data = await apiFetch<ApiBooks>(`/${translationId}/books.json`);
    return data.books.map(b => {
      const local = BIBLE_BOOKS.find(lb => lb.id === b.id);
      return {
        id: b.id,
        name: b.name,
        abbreviation: local?.abbreviation ?? b.commonName,
        testament: (local?.testament ?? (b.order <= 39 ? 'OT' : 'NT')) as 'OT' | 'NT',
        chapters: b.numberOfChapters,
        order: b.order,
      };
    });
  } catch {
    return BIBLE_BOOKS;
  }
}

export async function getChapter(
  translationId: string,
  bookId: string,
  chapterNumber: number
): Promise<BibleChapter> {
  try {
    interface ApiChapterContent {
      type: string;
      number?: number;
      content?: VerseContentItem[];
    }
    interface ApiChapterData { content: ApiChapterContent[] }
    interface ApiChapterResponse {
      book: { name: string };
      chapter: ApiChapterData;
    }
    const data = await apiFetch<ApiChapterResponse>(
      `/${translationId}/${bookId}/${chapterNumber}.json`
    );
    const bookName = data.book?.name ?? (BIBLE_BOOKS.find(b => b.id === bookId)?.name ?? bookId);
    const verses: BibleVerse[] = [];
    for (const item of data.chapter.content) {
      if (item.type === 'verse' && item.number != null && item.content) {
        const text = extractVerseText(item.content);
        if (text) {
          verses.push({
            id: `${bookId}.${chapterNumber}.${item.number}`,
            bookId,
            bookName,
            chapter: chapterNumber,
            verse: item.number,
            text,
            translationId,
          });
        }
      }
    }
    if (verses.length === 0) throw new Error('No verses found in chapter');
    return { bookId, bookName, chapter: chapterNumber, translationId, verses };
  } catch {
    return getSampleChapter(translationId, bookId, chapterNumber);
  }
}

export async function getVerse(
  translationId: string,
  bookId: string,
  chapterNumber: number,
  verseNumber: number
): Promise<BibleVerse | null> {
  try {
    const chapter = await getChapter(translationId, bookId, chapterNumber);
    return chapter.verses.find(v => v.verse === verseNumber) ?? null;
  } catch {
    return null;
  }
}

export async function searchBible(
  translationId: string,
  query: string
): Promise<SearchResult[]> {
  // Reference search (e.g. "John 3:16", "Romans 8")
  const refMatch = parseReference(query);
  if (refMatch) {
    try {
      const chapter = await getChapter(translationId, refMatch.bookId, refMatch.chapter);
      if (refMatch.verse) {
        const verse = chapter.verses.find(v => v.verse === refMatch.verse);
        if (verse) {
          return [{
            reference: { bookId: refMatch.bookId, bookName: chapter.bookName, chapter: refMatch.chapter, verse: refMatch.verse, translationId },
            text: verse.text,
            matchType: 'reference',
          }];
        }
      }
      return chapter.verses.map(v => ({
        reference: { bookId: v.bookId, bookName: v.bookName, chapter: v.chapter, verse: v.verse, translationId },
        text: v.text,
        matchType: 'reference' as const,
      }));
    } catch {
      return [];
    }
  }

  // Keyword search: match within sample data (this API has no full-text search endpoint)
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  for (const verses of Object.values(SAMPLE_VERSES)) {
    for (const v of verses) {
      if (v.text.toLowerCase().includes(lowerQuery)) {
        results.push({
          reference: { bookId: v.bookId, bookName: v.bookName, chapter: v.chapter, verse: v.verse, translationId },
          text: v.text,
          matchType: 'keyword',
        });
      }
    }
  }
  return results;
}

// ── Reference parser ─────────────────────────────────────────────────────────

function parseReference(query: string): { bookId: string; chapter: number; verse?: number } | null {
  const q = query.trim();
  // Match patterns like "John 3:16", "Romans 8", "1 Corinthians 13:4"
  const pattern = /^(\d?\s*[A-Za-z]+(?:\s[A-Za-z]+)?)\s+(\d+)(?::(\d+))?$/;
  const m = q.match(pattern);
  if (!m) return null;

  const bookPart = m[1]?.trim() ?? '';
  const chapter = parseInt(m[2] ?? '1', 10);
  const verse = m[3] ? parseInt(m[3], 10) : undefined;

  const { BIBLE_BOOKS: books } = { BIBLE_BOOKS };
  const found = books.find(b =>
    b.name.toLowerCase() === bookPart.toLowerCase() ||
    b.abbreviation.toLowerCase() === bookPart.toLowerCase()
  );
  if (!found) return null;
  return { bookId: found.id, chapter, verse };
}

export const DEFAULT_TRANSLATION: BibleTranslation = {
  id: FALLBACK_TRANSLATION_ID,
  name: 'Berean Standard Bible',
  abbreviation: 'BSB',
  language: 'English',
};

export function buildVerseRef(ref: VerseReference): string {
  return `${ref.bookName} ${ref.chapter}:${ref.verse}`;
}
