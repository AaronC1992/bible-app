import type { ReactNode } from 'react';
import { useState } from 'react';

interface StudySectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  badge?: string;
}

export default function StudySection({ title, children, defaultOpen = true, badge }: StudySectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{title}</span>
          {badge && (
            <span className="text-xs bg-scripture-100 dark:bg-scripture-900/40 text-scripture-700 dark:text-scripture-300 px-2 py-0.5 rounded-full">{badge}</span>
          )}
        </div>
        <span className="text-gray-400 dark:text-gray-500 text-xs">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
