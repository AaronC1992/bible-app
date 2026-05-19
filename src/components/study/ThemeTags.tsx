interface ThemeTagsProps {
  themes: string[];
}

const COLORS = [
  'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200',
  'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200',
  'bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200',
  'bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200',
  'bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-200',
  'bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-200',
  'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200',
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
