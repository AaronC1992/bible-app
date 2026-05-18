import { useNavigate } from 'react-router-dom';
import { parseReference } from '../../utils/referenceParser';

interface VerseLinkProps {
  reference: string;
  className?: string;
}

/**
 * Renders a verse reference string as a clickable link that navigates
 * to that passage in the Bible Reader. Handles range suffixes like
 * "Genesis 1:26–27" or "Romans 5:12–19" (only the start verse is used).
 */
export default function VerseLink({ reference, className }: VerseLinkProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Strip trailing range suffix: "Genesis 1:26–27" → "Genesis 1:26"
    // Handles both en-dash (–) and hyphen (-) range notation
    const cleaned = reference.replace(/[–\-]\d+\s*$/, '').trim();
    const parsed = parseReference(cleaned);
    if (!parsed) return;

    const params = new URLSearchParams({
      book: parsed.bookId,
      chapter: String(parsed.chapter),
    });
    if (parsed.verse) params.set('verse', String(parsed.verse));

    navigate(`/reader?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      title={`Open ${reference} in Bible Reader`}
      className={className}
    >
      {reference}
    </button>
  );
}
