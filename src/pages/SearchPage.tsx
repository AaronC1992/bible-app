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
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">Search</h1>
        <p className="text-sm text-gray-500">Search by reference (John 3:16), book and chapter (Romans 8), or keywords.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder='e.g. "John 3:16" or "shepherd" or "Romans 8"'
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-scripture-400"
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
          {[
            {
              label: 'Popular Verses',
              topics: ['John 3:16', 'Psalm 23', 'Romans 8:28', 'Isaiah 53:5', 'Genesis 1:1', 'Jeremiah 29:11', 'Philippians 4:13', 'Proverbs 3:5–6'],
            },
            {
              label: 'Faith & Salvation',
              topics: ['grace', 'faith', 'salvation', 'forgiveness', 'repentance', 'eternal life', 'baptism', 'born again'],
            },
            {
              label: 'Comfort & Strength',
              topics: ['peace', 'hope', 'comfort', 'strength', 'fear not', 'rest', 'healing', 'trust'],
            },
            {
              label: 'Love & Character',
              topics: ['love', 'joy', 'humility', 'patience', 'kindness', 'mercy', 'wisdom', 'righteousness'],
            },
            {
              label: 'Prayer & Worship',
              topics: ['prayer', 'praise', 'Holy Spirit', 'worship', 'thanksgiving', 'fasting', 'covenant', 'resurrection'],
            },
          ].map(group => (
            <div key={group.label}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.topics.map(topic => (
                  <button
                    key={topic}
                    onClick={() => { setQuery(topic); void handleSearch(topic); }}
                    className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-scripture-100 hover:text-scripture-700 transition-colors"
                  >
                    {topic}
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
        <div className="text-center py-10 text-gray-400">
          <p className="text-3xl mb-2">🔍</p>
          <p className="font-medium text-gray-500">No results found</p>
          <p className="text-sm mt-1">Try a reference like "John 3:16" or a book like "Romans 8".</p>
          <p className="text-sm text-gray-400 mt-2">Keyword search matches within featured passages. Type a reference like “John 3:16” for full chapter lookup.</p>
        </div>
      )}

      {!loading && results.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-gray-500 font-medium">{results.length} result{results.length !== 1 ? 's' : ''}</p>
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => openResult(result)}
              className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md hover:border-scripture-300 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-scripture-700 text-sm">
                  {result.reference.bookName} {result.reference.chapter}:{result.reference.verse}
                </span>
                <span className="text-xs text-gray-400 capitalize">{result.matchType}</span>
              </div>
              <p className="font-serif text-gray-700 text-sm leading-relaxed">{result.text}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
