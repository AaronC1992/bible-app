import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFavorites, removeFavorite } from '../services/storageService';
import type { FavoriteVerse } from '../types/storage';
import { formatDate } from '../utils/formatters';

export default function FavoritesPage() {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<FavoriteVerse[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemove = (fav: FavoriteVerse) => {
    removeFavorite(fav.verseRef);
    setFavorites(getFavorites());
  };

  const handleOpen = (fav: FavoriteVerse) => {
    navigate(`/reader?book=${fav.verseRef.bookId}&chapter=${fav.verseRef.chapter}&verse=${fav.verseRef.verse}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div>
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">Favorites</h1>
        <p className="text-sm text-gray-500">
          {favorites.length === 0 ? 'No saved verses yet.' : `${favorites.length} saved verse${favorites.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {favorites.length === 0 && (
        <div className="text-center py-14 text-gray-400">
          <p className="text-4xl mb-2">♡</p>
          <p className="font-medium text-gray-500">No favorites yet</p>
          <p className="text-sm mt-1">Tap a verse in the reader and press "Favorite" to save it here.</p>
        </div>
      )}

      {favorites.map(fav => (
        <div
          key={fav.id}
          className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-sm transition-shadow"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <button
              onClick={() => handleOpen(fav)}
              className="font-medium text-scripture-700 text-sm hover:text-scripture-900"
            >
              {fav.reference}
            </button>
            <button
              onClick={() => handleRemove(fav)}
              className="text-gray-300 hover:text-red-400 transition-colors text-sm shrink-0"
              title="Remove from favorites"
            >
              ✕
            </button>
          </div>
          <p className="font-serif text-gray-700 text-sm leading-relaxed">{fav.verseText}</p>
          <p className="text-xs text-gray-400 mt-2">Saved {formatDate(fav.savedAt)}</p>
        </div>
      ))}
    </div>
  );
}
