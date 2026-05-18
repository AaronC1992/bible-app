export interface CrossReference {
  reference: string;
  bookId: string;
  chapter: number;
  verse: number;
  preview?: string;
  relationship: string;
}

export interface VerseContext {
  verseRef: string;
  explanation: string;
  paragraphContext: string;
  keyThemes: string[];
  commonMisunderstandings?: string;
  studyQuestions: string[];
  crossReferences: CrossReference[];
}

export interface ChapterContext {
  bookId: string;
  chapter: number;
  summary: string;
  mainThemes: string[];
  keyVerses: string[];
  literaryStructure?: string;
}

export interface BookContext {
  bookId: string;
  author?: string;
  dateWritten?: string;
  originalAudience: string;
  historicalBackground: string;
  culturalBackground: string;
  genre: string;
  genreNotes: string;
  mainThemes: string[];
  theologicalSignificance: string;
  outline?: string[];
}

export interface ThemeEntry {
  id: string;
  label: string;
  color: string;
  description: string;
}

export interface StudyContext {
  verseContext?: VerseContext;
  chapterContext?: ChapterContext;
  bookContext?: BookContext;
}
