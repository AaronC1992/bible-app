export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return iso;
  }
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}

export const HIGHLIGHT_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  yellow: { bg: 'bg-yellow-200', text: 'text-yellow-900', label: 'Yellow' },
  green: { bg: 'bg-green-200', text: 'text-green-900', label: 'Green' },
  blue: { bg: 'bg-blue-200', text: 'text-blue-900', label: 'Blue' },
  pink: { bg: 'bg-pink-200', text: 'text-pink-900', label: 'Pink' },
  purple: { bg: 'bg-purple-200', text: 'text-purple-900', label: 'Purple' },
};
