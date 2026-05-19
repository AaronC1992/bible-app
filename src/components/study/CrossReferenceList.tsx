import type { CrossReference } from '../../types/study';
import { useNavigate } from 'react-router-dom';

interface CrossReferenceListProps {
  references: CrossReference[];
}

export default function CrossReferenceList({ references }: CrossReferenceListProps) {
  const navigate = useNavigate();

  const handleClick = (ref: CrossReference) => {
    navigate(`/reader?book=${ref.bookId}&chapter=${ref.chapter}&verse=${ref.verse}`);
  };

  return (
    <div className="space-y-2">
      {references.map(ref => (
        <button
          key={ref.reference}
          onClick={() => handleClick(ref)}
          className="w-full text-left rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-2 hover:bg-scripture-50 dark:hover:bg-gray-700 hover:border-scripture-300 dark:hover:border-scripture-700 transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="font-medium text-scripture-700 dark:text-scripture-300 text-sm">{ref.reference}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 mt-0.5">{ref.relationship}</span>
          </div>
          {ref.preview && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 italic">{ref.preview}</p>
          )}
        </button>
      ))}
    </div>
  );
}
