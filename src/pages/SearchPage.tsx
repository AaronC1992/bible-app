import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchBible } from '../services/bibleApi';
import type { SearchResult } from '../types/bible';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (q: string) => {
    if (!q.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const res = await searchBible('WEB', q.trim());
      setResults(res);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setQuery(q);
      void handleSearch(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void handleSearch(query);
  };

  const openResult = (result: SearchResult) => {
    const { reference: ref } = result;
    navigate(`/reader?book=${ref.bookId}&chapter=${ref.chapter}&verse=${ref.verse}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-scripture-800 dark:text-scripture-100 mb-1">Search</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Search by reference (John 3:16), book and chapter (Romans 8), or keywords.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='e.g. "John 3:16" or "shepherd" or "Romans 8"'
          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-scripture-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-scripture-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-scripture-700 disabled:opacity-60 transition-colors"
        >
          {loading ? '…' : 'Search'}
        </button>
      </form>

      {/* Popular topics — shown only before any search */}
      {!searched && (
        <div className="space-y-4">
          {([
            {
              label: 'Popular Verses',
              topics: [
                { label: 'John 3:16', query: 'John 3:16' },
                { label: 'Psalm 23', query: 'Psalm 23' },
                { label: 'Romans 8:28', query: 'Romans 8:28' },
                { label: 'Isaiah 53:5', query: 'Isaiah 53:5' },
                { label: 'Genesis 1:1', query: 'Genesis 1:1' },
                { label: 'Jeremiah 29:11', query: 'Jeremiah 29:11' },
                { label: 'Philippians 4:13', query: 'Philippians 4:13' },
                { label: 'Proverbs 3:5', query: 'Proverbs 3:5' },
              ],
            },
            {
              label: 'Faith & Salvation',
              topics: [
                { label: 'faith', query: 'Hebrews 11:1' },
                { label: 'grace', query: 'Ephesians 2:8' },
                { label: 'salvation', query: 'Romans 10:9' },
                { label: 'forgiveness', query: 'Psalm 103:12' },
                { label: 'repentance', query: 'Acts 3:19' },
                { label: 'eternal life', query: 'John 3:16' },
                { label: 'baptism', query: 'Romans 6:4' },
                { label: 'born again', query: 'John 3:3' },
              ],
            },
            {
              label: 'Comfort & Strength',
              topics: [
                { label: 'peace', query: 'John 14:27' },
                { label: 'hope', query: 'Romans 15:13' },
                { label: 'comfort', query: 'Psalm 46:1' },
                { label: 'strength', query: 'Philippians 4:13' },
                { label: 'fear not', query: 'Isaiah 41:10' },
                { label: 'rest', query: 'Matthew 11:28' },
                { label: 'healing', query: 'Isaiah 53:5' },
                { label: 'trust', query: 'Proverbs 3:5' },
              ],
            },
            {
              label: 'Love & Character',
              topics: [
                { label: 'love', query: '1 Corinthians 13:4' },
                { label: 'joy', query: 'Nehemiah 8:10' },
                { label: 'humility', query: 'Philippians 2:3' },
                { label: 'patience', query: 'James 1:3' },
                { label: 'kindness', query: 'Micah 6:8' },
                { label: 'mercy', query: 'Lamentations 3:22' },
                { label: 'wisdom', query: 'James 1:5' },
                { label: 'righteousness', query: 'Matthew 6:33' },
              ],
            },
            {
              label: 'Prayer & Worship',
              topics: [
                { label: 'prayer', query: 'Matthew 6:9' },
                { label: 'Holy Spirit', query: 'Acts 1:8' },
                { label: 'resurrection', query: 'John 11:25' },
                { label: 'covenant', query: 'Genesis 9:13' },
                { label: 'praise', query: 'Psalm 150:1' },
                { label: 'worship', query: 'John 4:24' },
                { label: 'thanksgiving', query: 'Psalm 100:4' },
                { label: 'fasting', query: 'Matthew 6:16' },
              ],
            },
          ] as { label: string; topics: { label: string; query: string }[] }[]).map(group => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.topics.map(({ label, query }) => (
                  <button
                    key={label}
                    onClick={() => { setQuery(query); void handleSearch(query); }}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full hover:bg-scripture-100 dark:hover:bg-scripture-900/40 hover:text-scripture-700 dark:hover:text-scripture-200 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {loading && (
        <div className="text-center py-10 text-gray-400 text-sm">Searching…</div>
      )}

      {!loading && searched && results.length === 0 && (
        <div className="text-center py-10 text-gray-400 dark:text-gray-500">
          <p className="text-3xl mb-2">🔍</p>
          <p className="font-medium text-gray-500 dark:text-gray-400">No results found</p>
          <p className="text-sm mt-1">Try a reference like "John 3:16" or a book like "Romans 8".</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Keyword search matches within featured passages. Type a reference like "John 3:16" for full chapter lookup.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{results.length} result{results.length !== 1 ? 's' : ''}</p>
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => openResult(result)}
              className="w-full text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md hover:border-scripture-300 dark:hover:border-scripture-600 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-scripture-700 dark:text-scripture-300 text-sm">
                  {result.reference.bookName} {result.reference.chapter}:{result.reference.verse}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 capitalize">{result.matchType}</span>
              </div>
              <p className="font-serif text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{result.text}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
