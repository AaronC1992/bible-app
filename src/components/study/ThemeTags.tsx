interface ThemeTagsProps {
  themes: string[];
}

const COLORS = [
  'bg-blue-100 text-blue-800',
  'bg-green-100 text-green-800',
  'bg-purple-100 text-purple-800',
  'bg-orange-100 text-orange-800',
  'bg-rose-100 text-rose-800',
  'bg-teal-100 text-teal-800',
  'bg-amber-100 text-amber-800',
];

export default function ThemeTags({ themes }: ThemeTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {themes.map((theme, i) => (
        <span
          key={theme}
          className={`px-2 py-1 rounded-full text-xs font-medium ${COLORS[i % COLORS.length]}`}
        >
          {theme}
        </span>
      ))}
    </div>
  );
}
