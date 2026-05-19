import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getLastRead } from '../services/storageService';

const DAILY_VERSE = {
  text: 'For God so loved the world, that he gave his only born Son, that whoever believes in him should not perish, but have eternal life.',
  reference: 'John 3:16',
  bookId: 'JHN',
  chapter: 3,
};

const FEATURE_CARDS = [
  { to: '/reader', label: 'Reader', desc: 'Read Scripture by book and chapter' },
  { to: '/search', label: 'Search', desc: 'Find any verse or passage' },
  { to: '/favorites', label: 'Favorites', desc: 'Your saved verses' },
  { to: '/notes', label: 'Notes', desc: 'Personal reflections and study notes' },
  { to: '/reading-plan', label: 'Reading Plan', desc: 'Track daily Scripture reading' },
  { to: '/study-guide', label: 'Study Guide', desc: 'How to study the Bible in context' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const lastRead = getLastRead();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchInput.trim())}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-8">

      {/* Hero */}
      <section className="text-center space-y-2 pt-4">
        <h1 className="font-serif text-3xl font-bold text-scripture-800 dark:text-scripture-100">Context Bible</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Read Scripture the way it was meant to be understood — with historical setting, literary context,
          cultural background, and thoughtful study notes alongside every passage.
        </p>
      </section>

      {/* Daily Verse */}
      <section className="bg-scripture-800 text-white rounded-2xl p-6 shadow-md">
        <p className="text-xs uppercase tracking-widest text-scripture-200 mb-2 font-medium">Daily Verse</p>
        <blockquote className="font-serif text-lg leading-relaxed italic mb-3">
          "{DAILY_VERSE.text}"
        </blockquote>
        <div className="flex items-center justify-between">
          <p className="text-scripture-200 text-sm">{DAILY_VERSE.reference}</p>
          <Link
            to={`/reader?book=${DAILY_VERSE.bookId}&chapter=${DAILY_VERSE.chapter}`}
            className="text-xs bg-scripture-600 hover:bg-scripture-500 px-3 py-1.5 rounded-full transition-colors font-medium"
          >
            Read Chapter →
          </Link>
        </div>
      </section>

      {/* Continue Reading */}
      {lastRead && (
        <section className="bg-parchment-100 dark:bg-gray-800 border border-parchment-200 dark:border-gray-700 rounded-xl p-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide mb-0.5">Continue Reading</p>
            <p className="font-serif font-semibold text-gray-800 dark:text-gray-100">
              {lastRead.bookName} {lastRead.chapter}
            </p>
          </div>
          <Link
            to={`/reader?book=${lastRead.bookId}&chapter=${lastRead.chapter}`}
            className="bg-scripture-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-scripture-700 transition-colors shrink-0"
          >
            Continue
          </Link>
        </section>
      )}

      {/* Quick Search */}
      <section>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder='Search — try "John 3:16" or "Romans 8"'
            className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-scripture-400"
          />
          <button
            type="submit"
            className="bg-scripture-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-scripture-700 transition-colors"
          >
            Search
          </button>
        </form>
      </section>

      {/* Feature Cards */}
      <section>
        <h2 className="font-serif text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">Explore</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {FEATURE_CARDS.map(card => (
            <Link
              key={card.to}
              to={card.to}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md hover:border-scripture-300 dark:hover:border-scripture-600 transition-all group"
            >
              <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm group-hover:text-scripture-700 dark:group-hover:text-scripture-300">{card.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* App purpose blurb */}
      <section className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <h2 className="font-serif font-semibold text-gray-800 dark:text-gray-100">Why Context Bible?</h2>
        <p>
          Most Bible apps show you the text. Context Bible helps you <em>understand</em> it.
          Every passage is shaped by history, culture, language, and literary form.
          Reading without that context often leads to misreading.
        </p>
        <p>
          Tap any verse in the reader to open a <strong>Study Context Panel</strong> with
          historical background, cultural notes, genre explanation, cross references,
          common misunderstandings, and study questions — all for that specific passage.
        </p>
      </section>

    </div>
  );
}
