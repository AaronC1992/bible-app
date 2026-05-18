import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import ReaderPage from './pages/ReaderPage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotesPage from './pages/NotesPage';
import ReadingPlanPage from './pages/ReadingPlanPage';
import StudyGuidePage from './pages/StudyGuidePage';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/reading-plan" element={<ReadingPlanPage />} />
          <Route path="/study-guide" element={<StudyGuidePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
