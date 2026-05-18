import { useState, useEffect } from 'react';
import type { BibleVerse } from '../../types/bible';
import { getStudyContext } from '../../services/studyContextService';
import {
  isFavorite, addFavorite, removeFavorite,
  getHighlight, addHighlight, removeHighlight,
  getNote, saveNote,
} from '../../services/storageService';
import type { HighlightColor } from '../../types/storage';
import StudySection from './StudySection';
import CrossReferenceList from './CrossReferenceList';
import ThemeTags from './ThemeTags';
import { HIGHLIGHT_COLORS } from '../../utils/formatters';

interface StudyContextPanelProps {
  verse: BibleVerse;
  onClose: () => void;
}

export default function StudyContextPanel({ verse, onClose }: StudyContextPanelProps) {
  const ref = { bookId: verse.bookId, bookName: verse.bookName, chapter: verse.chapter, verse: verse.verse };
  const ctx = getStudyContext(verse.bookId, verse.chapter, verse.verse);

  const [fav, setFav] = useState(isFavorite(ref));
  const [highlight, setHighlight] = useState(getHighlight(ref));
  const [noteText, setNoteText] = useState(getNote(ref)?.content ?? '');
  const [noteSaved, setNoteSaved] = useState(false);

  useEffect(() => {
    setFav(isFavorite(ref));
    setHighlight(getHighlight(ref));
    setNoteText(getNote(ref)?.content ?? '');
    setNoteSaved(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verse.id]);

  const toggleFav = () => {
    if (fav) {
      removeFavorite(ref);
      setFav(false);
    } else {
      addFavorite(ref, verse.text);
      setFav(true);
    }
  };

  const handleHighlight = (color: HighlightColor) => {
    if (highlight?.color === color) {
      removeHighlight(ref);
      setHighlight(undefined);
    } else {
      addHighlight(ref, verse.text, color);
      setHighlight(getHighlight(ref));
    }
  };

  const handleSaveNote = () => {
    saveNote(ref, verse.text, noteText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  const verseRef = `${verse.bookName} ${verse.chapter}:${verse.verse}`;
  const hasStudyData = !!(ctx.verseContext || ctx.chapterContext || ctx.bookContext);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-scripture-50">
        <div>
          <p className="text-xs text-scripture-500 font-medium uppercase tracking-wide">Study Context</p>
          <h3 className="font-serif font-semibold text-scripture-800">{verseRef}</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none px-1" aria-label="Close panel">✕</button>
      </div>

      {/* Verse text */}
      <div className="px-4 py-3 bg-parchment-50 border-b">
        <p className="font-serif text-gray-800 leading-relaxed italic">"{verse.text}"</p>
        <p className="text-xs text-gray-500 mt-1">{verseRef}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 px-4 py-2 border-b flex-wrap">
        <button
          onClick={toggleFav}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            fav ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
          }`}
        >
          {fav ? '♥' : '♡'} {fav ? 'Saved' : 'Favorite'}
        </button>
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500 mr-1">Highlight:</span>
          {(Object.keys(HIGHLIGHT_COLORS) as HighlightColor[]).map(color => (
            <button
              key={color}
              onClick={() => handleHighlight(color)}
              title={HIGHLIGHT_COLORS[color]?.label}
              className={`w-5 h-5 rounded-full border-2 transition-transform ${
                HIGHLIGHT_COLORS[color]?.bg ?? ''
              } ${highlight?.color === color ? 'border-gray-600 scale-110' : 'border-transparent hover:scale-105'}`}
            />
          ))}
          {highlight && (
            <button onClick={() => handleHighlight(highlight.color)} className="text-xs text-gray-400 ml-1 hover:text-red-500">✕</button>
          )}
        </div>
      </div>

      {/* Scrollable study content */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">

        {!hasStudyData && (
          <div className="text-center py-8 text-gray-400">
            <p className="text-2xl mb-2">📖</p>
            <p className="font-medium text-gray-500">No study notes for this verse yet</p>
            <p className="text-sm mt-1">Sample study data is available for Genesis 1, Psalm 23, Isaiah 53, Matthew 5, John 3, and Romans 8.</p>
          </div>
        )}

        {/* Verse context */}
        {ctx.verseContext && (
          <>
            <StudySection title="Verse Explanation">
              <p>{ctx.verseContext.explanation}</p>
            </StudySection>

            <StudySection title="Paragraph Context">
              <p>{ctx.verseContext.paragraphContext}</p>
            </StudySection>

            {ctx.verseContext.keyThemes.length > 0 && (
              <StudySection title="Key Themes">
                <ThemeTags themes={ctx.verseContext.keyThemes} />
              </StudySection>
            )}

            {ctx.verseContext.commonMisunderstandings && (
              <StudySection title="Common Misunderstandings" defaultOpen={false}>
                <p>{ctx.verseContext.commonMisunderstandings}</p>
              </StudySection>
            )}

            {ctx.verseContext.studyQuestions.length > 0 && (
              <StudySection title="Study Questions">
                <ol className="list-decimal list-inside space-y-2">
                  {ctx.verseContext.studyQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
              </StudySection>
            )}

            {ctx.verseContext.crossReferences.length > 0 && (
              <StudySection title="Cross References" badge={String(ctx.verseContext.crossReferences.length)}>
                <CrossReferenceList references={ctx.verseContext.crossReferences} />
              </StudySection>
            )}
          </>
        )}

        {/* Chapter context */}
        {ctx.chapterContext && (
          <>
            <StudySection title="Chapter Context" defaultOpen={!ctx.verseContext}>
              <p>{ctx.chapterContext.summary}</p>
              {ctx.chapterContext.literaryStructure && (
                <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                  <span className="font-medium">Literary structure: </span>
                  {ctx.chapterContext.literaryStructure}
                </div>
              )}
            </StudySection>
            <StudySection title="Chapter Themes" defaultOpen={false}>
              <ThemeTags themes={ctx.chapterContext.mainThemes} />
            </StudySection>
          </>
        )}

        {/* Book context */}
        {ctx.bookContext && (
          <>
            <StudySection title="Historical Background" defaultOpen={false}>
              <p>{ctx.bookContext.historicalBackground}</p>
              {ctx.bookContext.dateWritten && (
                <p className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Date written:</span> {ctx.bookContext.dateWritten}
                </p>
              )}
            </StudySection>

            <StudySection title="Cultural Background" defaultOpen={false}>
              <p>{ctx.bookContext.culturalBackground}</p>
            </StudySection>

            <StudySection title="Genre & Literary Style" defaultOpen={false}>
              <p className="font-medium text-gray-700 mb-1">{ctx.bookContext.genre}</p>
              <p>{ctx.bookContext.genreNotes}</p>
            </StudySection>

            <StudySection title="Original Audience" defaultOpen={false}>
              <p>{ctx.bookContext.originalAudience}</p>
              {ctx.bookContext.author && (
                <p className="mt-1 text-xs text-gray-500">
                  <span className="font-medium">Author:</span> {ctx.bookContext.author}
                </p>
              )}
            </StudySection>

            <StudySection title="Book Overview & Themes" defaultOpen={false}>
              <p>{ctx.bookContext.theologicalSignificance}</p>
              <div className="mt-2">
                <ThemeTags themes={ctx.bookContext.mainThemes} />
              </div>
            </StudySection>
          </>
        )}

        {/* Personal notes */}
        <StudySection title="My Notes">
          <textarea
            value={noteText}
            onChange={e => setNoteText(e.target.value)}
            placeholder="Write your personal reflection or notes here…"
            className="w-full min-h-[100px] text-sm border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-scripture-400 resize-y"
          />
          <div className="flex items-center justify-between mt-2">
            <button
              onClick={handleSaveNote}
              className="px-3 py-1.5 bg-scripture-600 text-white text-xs font-medium rounded hover:bg-scripture-700 transition-colors"
            >
              Save Note
            </button>
            {noteSaved && <span className="text-xs text-green-600 font-medium">Saved ✓</span>}
          </div>
        </StudySection>
      </div>
    </div>
  );
}
