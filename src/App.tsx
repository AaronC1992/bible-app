import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import ReaderPage from './pages/ReaderPage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import NotesPage from './pages/NotesPage';
import ReadingPlanPage from './pages/ReadingPlanPage';
import StudyGuidePage from './pages/StudyGuidePage';
import FeedbackPage from './pages/FeedbackPage';

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <AppLayout>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reader" element={<ReaderPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/reading-plan" element={<ReadingPlanPage />} />
          <Route path="/study-guide" element={<StudyGuidePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </AppLayout>
      </HashRouter>
    </ThemeProvider>
  );
}
