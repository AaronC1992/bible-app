import { NavLink } from 'react-router-dom';

const MOBILE_NAV = [
  { to: '/', label: 'Home', icon: '⌂' },
  { to: '/reader', label: 'Read', icon: '📖' },
  { to: '/search', label: 'Search', icon: '🔍' },
  { to: '/reading-plan', label: 'Plan', icon: '📅' },
  { to: '/study-guide', label: 'Study', icon: '✦' },
  { to: '/notes', label: 'Notes', icon: '✏' },
  { to: '/feedback', label: 'Suggest', icon: '💬' },
];

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-40 safe-area-inset-bottom">
      <div className="flex">
        {MOBILE_NAV.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center py-2 text-xs font-medium transition-colors ${
                isActive ? 'text-scripture-700 dark:text-scripture-300' : 'text-gray-500 dark:text-gray-400'
              }`
            }
          >
            <span className="text-lg leading-none mb-0.5">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
