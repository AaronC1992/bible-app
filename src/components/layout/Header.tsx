import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/reader', label: 'Reader' },
  { to: '/search', label: 'Search' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/notes', label: 'Notes' },
  { to: '/reading-plan', label: 'Reading Plan' },
  { to: '/study-guide', label: 'Study Guide' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-scripture-800 text-white shadow-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-serif font-bold text-lg tracking-wide">
          <span className="text-xl">✦</span>
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
        </nav>
      </div>
    </header>
  );
}
