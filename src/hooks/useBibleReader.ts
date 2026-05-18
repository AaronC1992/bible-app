import { useState, useCallback } from 'react';
import type { BibleChapter, BibleVerse, VerseReference } from '../types/bible';
import { getChapter } from '../services/bibleApi';
import { setLastRead } from '../services/storageService';
import { BIBLE_BOOKS } from '../data/bibleBooks';

const DEFAULT_BOOK_ID = 'JHN';
const DEFAULT_CHAPTER = 1;
const DEFAULT_TRANSLATION = 'BSB';

export function useBibleReader() {
  const [translationId, setTranslationId] = useState(DEFAULT_TRANSLATION);
  const [bookId, setBookId] = useState(DEFAULT_BOOK_ID);
  const [chapterNumber, setChapterNumber] = useState(DEFAULT_CHAPTER);
  const [chapter, setChapter] = useState<BibleChapter | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadChapter = useCallback(
    async (tId: string, bId: string, ch: number) => {
      setLoading(true);
      setError(null);
      setSelectedVerse(null);
      try {
        const data = await getChapter(tId, bId, ch);
        setChapter(data);
        const book = BIBLE_BOOKS.find(b => b.id === bId);
        setLastRead({
          bookId: bId,
          bookName: book?.name ?? bId,
          chapter: ch,
          translationId: tId,
          timestamp: new Date().toISOString(),
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load chapter');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const navigateToPassage = useCallback(
    (ref: VerseReference) => {
      setBookId(ref.bookId);
      setChapterNumber(ref.chapter);
      const tid = ref.translationId ?? translationId;
      setTranslationId(tid);
      void loadChapter(tid, ref.bookId, ref.chapter);
    },
    [loadChapter, translationId]
  );

  return {
    translationId,
    setTranslationId,
    bookId,
    setBookId,
    chapterNumber,
    setChapterNumber,
    chapter,
    selectedVerse,
    setSelectedVerse,
    loading,
    error,
    loadChapter,
    navigateToPassage,
  };
}
