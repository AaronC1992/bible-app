import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useBibleReader } from '../hooks/useBibleReader';
import { getTranslations } from '../services/bibleApi';
import type { BibleTranslation } from '../types/bible';
import BookSelector from '../components/bible/BookSelector';
import ChapterSelector from '../components/bible/ChapterSelector';
import TranslationSelector from '../components/bible/TranslationSelector';
import BibleChapterView from '../components/bible/BibleChapterView';
import StudyContextPanel from '../components/study/StudyContextPanel';

export default function ReaderPage() {
  const [searchParams] = useSearchParams();
  const [translations, setTranslations] = useState<BibleTranslation[]>([]);
  const [panelOpen, setPanelOpen] = useState(false);
  // Verse to scroll to on initial load (from URL param); cleared after first use
  const targetVerseRef = useRef<string | null>(searchParams.get('verse'));

  const {
    translationId, setTranslationId,
    bookId, setBookId,
    chapterNumber, setChapterNumber,
    chapter, selectedVerse, setSelectedVerse,
    loading, error, loadChapter,
  } = useBibleReader();

  // Load translations once
  useEffect(() => {
    void getTranslations().then(setTranslations);
  }, []);

  // Parse URL params and load initial chapter
  useEffect(() => {
    const book = searchParams.get('book') ?? bookId;
    const ch = parseInt(searchParams.get('chapter') ?? String(chapterNumber), 10);
    setBookId(book);
    setChapterNumber(ch);
    void loadChapter(translationId, book, ch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll to and highlight the target verse once chapter data has loaded
  useEffect(() => {
    if (!chapter || !targetVerseRef.current) return;
    const verseNum = targetVerseRef.current;
    targetVerseRef.current = null; // only fire once
    const verseObj = chapter.verses.find(v => String(v.verse) === verseNum);
    if (verseObj) {
      setSelectedVerse(verseObj);
      setPanelOpen(true);
      setTimeout(() => {
        document.getElementById(`verse-${verseNum}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter]);

  const handleGo = () => {
    void loadChapter(translationId, bookId, chapterNumber);
    setPanelOpen(false);
  };

  const handleVerseClick = (verse: Parameters<typeof setSelectedVerse>[0]) => {
    setSelectedVerse(verse);
    setPanelOpen(true);
  };

  const handleTranslationChange = (id: string) => {
    setTranslationId(id);
    void loadChapter(id, bookId, chapterNumber);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">

      {/* Controls bar */}
      <div className="flex flex-wrap gap-2 mb-4 items-end">
        <div className="flex-1 min-w-[160px]">
          <label className="block text-xs text-gray-500 mb-1 font-medium">Book</label>
          <BookSelector selectedBookId={bookId} onChange={id => { setBookId(id); setChapterNumber(1); }} />
        </div>
        <div className="w-36">
          <label className="block text-xs text-gray-500 mb-1 font-medium">Chapter</label>
          <ChapterSelector bookId={bookId} selectedChapter={chapterNumber} onChange={setChapterNumber} />
        </div>
        <div className="flex-1 min-w-[180px]">
          <label className="block text-xs text-gray-500 mb-1 font-medium">Translation</label>
          <TranslationSelector
            translations={translations.length ? translations : [{ id: 'WEB', name: 'World English Bible', abbreviation: 'WEB', language: 'English' }]}
            selectedId={translationId}
            onChange={handleTranslationChange}
          />
        </div>
        <button
          onClick={handleGo}
          className="h-10 px-4 bg-scripture-600 text-white text-sm font-medium rounded-lg hover:bg-scripture-700 transition-colors"
        >
          Go
        </button>
      </div>

      {/* Main content area */}
      <div className="flex gap-4">

        {/* Bible text */}
        <div className={`flex-1 min-w-0 ${panelOpen ? 'hidden md:block' : ''}`}>
          {loading && (
            <div className="flex items-center justify-center py-16 text-gray-400">
              <span className="text-4xl animate-pulse">📖</span>
              <span className="ml-3 text-sm">Loading…</span>
            </div>
          )}
          {error && (
            <div className="bg-red-50 text-red-700 rounded-lg p-4 text-sm">
              <p className="font-medium">Failed to load passage</p>
              <p className="mt-1">{error}</p>
            </div>
          )}
          {!loading && !error && chapter && (
            <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
              <BibleChapterView
                chapter={chapter}
                selectedVerse={selectedVerse}
                onVerseClick={handleVerseClick}
              />
              {/* Chapter navigation */}
              <div className="flex justify-between mt-6 pt-4 border-t border-gray-100">
                <button
                  disabled={chapterNumber <= 1}
                  onClick={() => { const prev = chapterNumber - 1; setChapterNumber(prev); void loadChapter(translationId, bookId, prev); }}
                  className="text-sm text-scripture-600 hover:text-scripture-800 disabled:text-gray-300 font-medium"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => { const next = chapterNumber + 1; setChapterNumber(next); void loadChapter(translationId, bookId, next); }}
                  className="text-sm text-scripture-600 hover:text-scripture-800 font-medium"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
          {!loading && !error && !chapter && (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-400">
              <p className="text-4xl mb-3">📖</p>
              <p className="font-medium text-gray-600">Select a book and chapter to begin reading</p>
            </div>
          )}
        </div>

        {/* Study panel (desktop sidebar / mobile overlay) */}
        {panelOpen && selectedVerse && (
          <>
            {/* Mobile: full-screen overlay */}
            <div className="fixed inset-0 z-30 bg-white md:hidden overflow-y-auto">
              <StudyContextPanel verse={selectedVerse} onClose={() => setPanelOpen(false)} />
            </div>
            {/* Desktop: sidebar */}
            <div className="hidden md:flex md:w-96 lg:w-[420px] shrink-0 flex-col border border-gray-200 rounded-xl overflow-hidden" style={{ maxHeight: 'calc(100vh - 120px)', position: 'sticky', top: '72px' }}>
              <StudyContextPanel verse={selectedVerse} onClose={() => setPanelOpen(false)} />
            </div>
          </>
        )}
      </div>

      {/* Hint */}
      {!panelOpen && chapter && (
        <p className="text-center text-xs text-gray-400 mt-4">
          Tap any verse to open the Study Context Panel
        </p>
      )}
    </div>
  );
}
