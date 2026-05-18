/**
 * studyContextService.ts
 * Provides study context data for a given verse/chapter/book.
 * Currently backed by static starter data; can later call an AI or CMS API.
 */

import type { StudyContext } from '../types/study';
import { getBookContext, getChapterContext, getVerseContext } from '../data/starterStudyData';

export function getStudyContext(
  bookId: string,
  chapter: number,
  verse: number
): StudyContext {
  return {
    verseContext: getVerseContext(bookId, chapter, verse),
    chapterContext: getChapterContext(bookId, chapter),
    bookContext: getBookContext(bookId),
  };
}

export function hasStudyData(bookId: string, chapter: number, verse: number): boolean {
  const ctx = getStudyContext(bookId, chapter, verse);
  return !!(ctx.verseContext || ctx.chapterContext || ctx.bookContext);
}
