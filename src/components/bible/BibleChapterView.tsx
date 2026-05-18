import type { BibleChapter, BibleVerse } from '../../types/bible';
import VerseCard from './VerseCard';

interface BibleChapterViewProps {
  chapter: BibleChapter;
  selectedVerse: BibleVerse | null;
  onVerseClick: (verse: BibleVerse) => void;
}

export default function BibleChapterView({ chapter, selectedVerse, onVerseClick }: BibleChapterViewProps) {
  return (
    <article className="space-y-1">
      <h2 className="font-serif text-xl font-semibold text-scripture-800 mb-4">
        {chapter.bookName} {chapter.chapter}
      </h2>
      {chapter.verses.map(verse => (
        <VerseCard
          key={verse.id}
          verse={verse}
          isSelected={selectedVerse?.id === verse.id}
          onClick={onVerseClick}
        />
      ))}
    </article>
  );
}
