import type { BibleTranslation } from '../../types/bible';

interface TranslationSelectorProps {
  translations: BibleTranslation[];
  selectedId: string;
  onChange: (id: string) => void;
}

export default function TranslationSelector({ translations, selectedId, onChange }: TranslationSelectorProps) {
  return (
    <select
      value={selectedId}
      onChange={e => onChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-scripture-500"
    >
      {translations.map(t => (
        <option key={t.id} value={t.id}>
          {t.abbreviation} — {t.name}
        </option>
      ))}
    </select>
  );
}
