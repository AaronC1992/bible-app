export interface BibleTranslation {
  id: string;
  name: string;
  abbreviation: string;
  language: string;
}

export interface BibleBook {
  id: string;
  name: string;
  abbreviation: string;
  testament: 'OT' | 'NT';
  chapters: number;
  order: number;
}

export interface BibleVerse {
  id: string;
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number;
  text: string;
  translationId: string;
}

export interface BibleChapter {
  bookId: string;
  bookName: string;
  chapter: number;
  translationId: string;
  verses: BibleVerse[];
}

export interface VerseReference {
  bookId: string;
  bookName: string;
  chapter: number;
  verse: number;
  translationId?: string;
}

export interface SearchResult {
  reference: VerseReference;
  text: string;
  matchType: 'reference' | 'keyword';
}
