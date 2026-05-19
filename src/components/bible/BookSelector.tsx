import { OT_BOOKS, NT_BOOKS } from '../../data/bibleBooks';
import type { BibleBook } from '../../types/bible';

interface BookSelectorProps {
  selectedBookId: string;
  onChange: (bookId: string) => void;
}

export default function BookSelector({ selectedBookId, onChange }: BookSelectorProps) {
  const renderOptions = (books: BibleBook[]) =>
    books.map(b => (
      <option key={b.id} value={b.id}>
        {b.name}
      </option>
    ));

  return (
    <select
      value={selectedBookId}
      onChange={e => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-scripture-500"
    >
      <optgroup label="Old Testament">{renderOptions(OT_BOOKS)}</optgroup>
      <optgroup label="New Testament">{renderOptions(NT_BOOKS)}</optgroup>
    </select>
  );
}
