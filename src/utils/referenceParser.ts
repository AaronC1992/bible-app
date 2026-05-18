import { BIBLE_BOOKS } from '../data/bibleBooks';

export interface ParsedReference {
  bookId: string;
  bookName: string;
  chapter: number;
  verse?: number;
}

/**
 * Parses user-entered text like "John 3:16", "Romans 8", "Gen 1"
 * into a structured reference object.
 */
export function parseReference(input: string): ParsedReference | null {
  const q = input.trim();
  // Pattern: optional leading digit (e.g. "1 Cor"), book name(s), chapter, optional :verse
  const pattern = /^(\d?\s*[A-Za-z]+(?:\s+[A-Za-z]+)?)\s+(\d+)(?::(\d+))?$/;
  const m = q.match(pattern);
  if (!m) return null;

  const bookPart = (m[1] ?? '').trim().toLowerCase();
  const chapter = parseInt(m[2] ?? '1', 10);
  const verse = m[3] ? parseInt(m[3], 10) : undefined;

  const book = BIBLE_BOOKS.find(
    b =>
      b.name.toLowerCase() === bookPart ||
      b.abbreviation.toLowerCase() === bookPart ||
      b.name.toLowerCase().startsWith(bookPart)
  );
  if (!book) return null;
  return { bookId: book.id, bookName: book.name, chapter, verse };
}

export function formatVerseRef(bookName: string, chapter: number, verse: number): string {
  return `${bookName} ${chapter}:${verse}`;
}
