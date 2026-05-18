import { BIBLE_BOOKS } from '../../data/bibleBooks';

interface ChapterSelectorProps {
  bookId: string;
  selectedChapter: number;
  onChange: (chapter: number) => void;
}

export default function ChapterSelector({ bookId, selectedChapter, onChange }: ChapterSelectorProps) {
  const book = BIBLE_BOOKS.find(b => b.id === bookId);
  const chapterCount = book?.chapters ?? 1;

  return (
    <select
      value={selectedChapter}
      onChange={e => onChange(parseInt(e.target.value, 10))}
      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-scripture-500"
    >
      {Array.from({ length: chapterCount }, (_, i) => i + 1).map(ch => (
        <option key={ch} value={ch}>
          Chapter {ch}
        </option>
      ))}
    </select>
  );
}
