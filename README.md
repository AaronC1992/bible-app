# Context Bible

> A React + TypeScript Bible study app powered by the free [bible.helloao.org](https://bible.helloao.org) API — no API key required.

## Run the App

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

- **Bible Reader** — Browse all 66 books by translation, book, and chapter using the BSB (Berean Standard Bible) by default
- **Study Guide** — Sidebar with every person in the Bible (OT & NT), bios, key verses, key facts, and a 9-step guide to contextual Bible study
- **Search** — Look up passages by reference (e.g. *John 3:16*) or keyword
- **Reading Plans** — Structured reading schedules
- **Notes** — Save personal study notes locally
- **Favorites** — Bookmark verses for quick reference

## Tech Stack

| Tool | Version |
|---|---|
| React | 18.3.1 |
| TypeScript | ~5.6.2 |
| Vite | 6.4.2 |
| Tailwind CSS | 3.4.15 |
| React Router | 6.28.0 |
| Bible API | [bible.helloao.org](https://bible.helloao.org) (free, no key) |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── bible/        # Reader-specific components
│   ├── layout/       # Header, nav, app shell
│   └── study/        # Study context panel components
├── data/             # Static data (books, people, reading plans)
├── hooks/            # Custom React hooks
├── pages/            # Route-level page components
├── services/         # API and storage logic
├── types/            # TypeScript interfaces
└── utils/            # Formatters and reference parsers
```
