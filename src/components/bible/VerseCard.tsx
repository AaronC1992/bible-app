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
      onClick={() => onClick(verse)}
      className={`group cursor-pointer rounded px-2 py-1 leading-relaxed transition-colors ${
        isSelected
          ? 'bg-scripture-100 ring-2 ring-scripture-400'
          : `hover:bg-gray-100 ${highlightClass}`
      }`}
    >
      <sup className={`mr-1 text-xs font-bold select-none ${isSelected ? 'text-scripture-600' : 'text-gray-400 group-hover:text-scripture-500'}`}>
        {verse.verse}
      </sup>
      <span className="font-serif text-gray-800">{verse.text}</span>
    </p>
  );
}
