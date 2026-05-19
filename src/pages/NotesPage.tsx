import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotes, saveNote, deleteNote } from '../services/storageService';
import type { UserNote } from '../types/storage';
import { formatDate, truncate } from '../utils/formatters';

export default function NotesPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState<UserNote[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleEdit = (note: UserNote) => {
    setEditingId(note.id);
    setEditText(note.content);
  };

  const handleSave = (note: UserNote) => {
    saveNote(note.reference, note.verseText, editText);
    setNotes(getNotes());
    setEditingId(null);
  };

  const handleDelete = (note: UserNote) => {
    deleteNote(note.reference);
    setNotes(getNotes());
    if (editingId === note.id) setEditingId(null);
  };

  const handleOpen = (note: UserNote) => {
    navigate(`/reader?book=${note.reference.bookId}&chapter=${note.reference.chapter}&verse=${note.reference.verse}`);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div>
        <h1 className="font-serif text-2xl font-bold text-scripture-800 dark:text-scripture-100 mb-1">Notes</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {notes.length === 0 ? 'No notes yet.' : `${notes.length} note${notes.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {notes.length === 0 && (
        <div className="text-center py-14 text-gray-400">
          <p className="text-4xl mb-2">✏</p>
          <p className="font-medium text-gray-500 dark:text-gray-400">No notes yet</p>
          <p className="text-sm mt-1">Open a verse in the reader and write a note in the Study Context Panel.</p>
        </div>
      )}

      {notes.map(note => (
        <div
          key={note.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-2"
        >
          <div className="flex items-start justify-between gap-2">
            <button
              onClick={() => handleOpen(note)}
              className="font-medium text-scripture-700 dark:text-scripture-300 text-sm hover:text-scripture-900 dark:hover:text-scripture-100"
            >
              {note.verseRef}
            </button>
            <div className="flex gap-2 shrink-0">
              {editingId !== note.id && (
                <button onClick={() => handleEdit(note)} className="text-xs text-gray-400 hover:text-scripture-600">Edit</button>
              )}
              <button onClick={() => handleDelete(note)} className="text-xs text-gray-400 hover:text-red-500">Delete</button>
            </div>
          </div>

          <p className="font-serif text-gray-500 dark:text-gray-400 text-xs italic">{truncate(note.verseText, 120)}</p>

          {editingId === note.id ? (
            <div className="space-y-2">
              <textarea
                value={editText}
                onChange={e => setEditText(e.target.value)}
                className="w-full min-h-[80px] text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-scripture-400 resize-y"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleSave(note)}
                  className="px-3 py-1 bg-scripture-600 text-white text-xs font-medium rounded hover:bg-scripture-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{note.content}</p>
          )}

          <p className="text-xs text-gray-400">
            Updated {formatDate(note.updatedAt)}
          </p>
        </div>
      ))}
    </div>
  );
}
