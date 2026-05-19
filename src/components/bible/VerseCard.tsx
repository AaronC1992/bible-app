import type { BibleVerse } from '../../types/bible';
import { getHighlight } from '../../services/storageService';
import { HIGHLIGHT_COLORS } from '../../utils/formatters';

interface VerseCardProps {
  verse: BibleVerse;
  isSelected: boolean;
  onClick: (verse: BibleVerse) => void;
}

export default function VerseCard({ verse, isSelected, onClick }: VerseCardProps) {
  const highlight = getHighlight({ bookId: verse.bookId, bookName: verse.bookName, chapter: verse.chapter, verse: verse.verse });
  const highlightClass = highlight ? HIGHLIGHT_COLORS[highlight.color]?.bg ?? '' : '';

  return (
    <p
      id={`verse-${verse.verse}`}
      onClick={() => onClick(verse)}
      className={`group cursor-pointer rounded px-2 py-1 leading-relaxed transition-colors ${
        isSelected
          ? 'bg-scripture-100 dark:bg-scripture-900/40 ring-2 ring-scripture-400 dark:ring-scripture-600'
          : `hover:bg-gray-100 dark:hover:bg-gray-700 ${highlightClass}`
      }`}
    >
      <sup className={`mr-1 text-xs font-bold select-none ${isSelected ? 'text-scripture-600 dark:text-scripture-300' : 'text-gray-400 dark:text-gray-600 group-hover:text-scripture-500 dark:group-hover:text-scripture-400'}`}>
        {verse.verse}
      </sup>
      <span className="font-serif text-gray-800 dark:text-gray-100">{verse.text}</span>
    </p>
  );
}
