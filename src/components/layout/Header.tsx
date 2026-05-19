import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/reader', label: 'Reader' },
  { to: '/search', label: 'Search' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/notes', label: 'Notes' },
  { to: '/reading-plan', label: 'Reading Plan' },
  { to: '/study-guide', label: 'Study Guide' },
  { to: '/feedback', label: 'Suggest' },
];

export default function Header() {
  const location = useLocation();
  const { dark, toggleDark } = useTheme();

  return (
    <header className="bg-scripture-800 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-serif font-bold text-lg tracking-wide">
          <span>Context Bible</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-scripture-600 text-white'
                  : 'text-scripture-200 hover:text-white hover:bg-scripture-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleDark}
            title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-2 p-1.5 rounded text-scripture-200 hover:text-white hover:bg-scripture-700 transition-colors text-base leading-none"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀' : '🌙'}
          </button>
        </nav>

        {/* Mobile: theme toggle only (nav is handled by MobileNav) */}
        <button
          onClick={toggleDark}
          title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="md:hidden p-1.5 rounded text-scripture-200 hover:text-white hover:bg-scripture-700 transition-colors text-base leading-none"
          aria-label="Toggle dark mode"
        >
          {dark ? '☀' : '🌙'}
        </button>
      </div>
    </header>
  );
}
