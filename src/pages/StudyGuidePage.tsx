import { useState } from 'react';
import { BIBLE_PEOPLE, type BiblePerson } from '../data/studyPeople';

// ─── How-to-study sections ────────────────────────────────────────────────────
const SECTIONS = [
  {
    num: 1,
    title: 'Read the surrounding passage',
    content: `Never read a single verse in isolation. Before studying a specific verse, read the entire
      paragraph it belongs to, then the full chapter, then ideally the whole book. Context is everything —
      a verse pulled from its paragraph often means something very different than its author intended.
      Ask: "What came just before and after this verse? What larger argument or story is this part of?"`,
  },
  {
    num: 2,
    title: 'Identify the genre',
    content: `The Bible contains many literary genres: narrative, law, poetry, prophecy, wisdom literature,
      gospel, epistle, apocalyptic, and more. Each genre has different rules of interpretation.
      A psalm uses emotional, poetic language — "The Lord is my shepherd" is a metaphor, not a literal statement
      about God herding animals. Apocalyptic literature like Revelation uses vivid symbols. Historical narrative
      describes what happened, not always what God commands. Knowing the genre changes how you read.`,
  },
  {
    num: 3,
    title: 'Ask who wrote it and to whom',
    content: `Every book of the Bible had a human author writing to a specific audience in a specific time and place.
      Paul's letters were written to particular churches facing particular problems. Understanding who the
      original audience was and what their situation looked like is essential. A passage addressing a first-century
      church's problem with eating meat sacrificed to idols requires historical understanding before application.`,
  },
  {
    num: 4,
    title: 'Understand the historical setting',
    content: `The Bible was written in the ancient Near East and Greco-Roman world. Cultural assumptions,
      social structures, economic realities, and political situations shaped every text. When Jesus speaks of
      a "tax collector," his audience immediately understood the social stigma. When Paul writes from prison,
      that shapes the tone and content of his letter. Ignoring history leads to misreading — what felt obviously
      shameful or praiseworthy to an ancient reader may be invisible to a modern one.`,
  },
  {
    num: 5,
    title: 'Look for repeated words and themes',
    content: `Biblical authors use repetition deliberately. In John's Gospel, "light," "life," "believe," and
      "abide" appear dozens of times because they are central to his message. In Genesis, "and God saw that it
      was good" structures the creation account. When a word or phrase keeps appearing, the author is marking
      it as important. Circle or underline repeated words. Ask: what concept is being emphasized? How does it
      develop across the passage?`,
  },
  {
    num: 6,
    title: 'Compare cross references',
    content: `The Bible is one unified story. New Testament authors constantly quote and allude to the Old Testament.
      A verse rarely stands alone — it echoes and illuminates dozens of other passages. When Isaiah 53 describes
      a "suffering servant," the New Testament writers apply it to Jesus. When Revelation uses imagery of a lamb,
      it draws on the Passover sacrifice and the sacrificial system of the Torah. Cross references help you see
      how themes and promises develop across the full arc of Scripture.`,
  },
  {
    num: 7,
    title: 'Avoid pulling verses out of context',
    content: `"I can do all things through Christ who strengthens me" (Philippians 4:13) is about contentment in
      poverty and plenty — not athletic achievement. "For I know the plans I have for you" (Jeremiah 29:11) was
      written to Israel in exile — it has application for us, but not the direct one social media often implies.
      "Judge not, that you be not judged" (Matthew 7:1) is about hypocritical condemnation, not about refusing
      all discernment. Before applying a verse to your life, ask: "What did this mean to the original reader?"`,
  },
  {
    num: 8,
    title: 'Separate observation, interpretation, and application',
    content: `Good Bible study has three stages. First: Observation — what does the text actually say? Read carefully,
      note details, don't rush to meaning yet. Second: Interpretation — what did the text mean to the original author
      and audience? This is where historical, cultural, and literary context matters most. Third: Application — how
      does this truth speak to my life today? Many Bible study mistakes happen from jumping straight to application
      without going through observation and interpretation first.`,
  },
  {
    num: 9,
    title: 'Pray and reflect',
    content: `Bible study is not merely an academic exercise. The goal is transformation, not just information.
      After studying a passage carefully, sit with it. Ask: What does this reveal about God's character? What
      does this ask of me? Is there a promise to trust, a command to obey, a warning to heed, or an example to follow?
      Bring your questions, doubts, and reactions honestly before God. The best scholars of Scripture were also
      its most devoted prayers.`,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function PersonDetail({ person }: { person: BiblePerson }) {
  return (
    <article className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">{person.name}</h1>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-scripture-100 text-scripture-700 px-2 py-0.5 rounded-full font-medium">
            {person.testament === 'Both' ? 'OT & NT' : person.testament}
          </span>
          <span className="bg-parchment-100 text-gray-600 px-2 py-0.5 rounded-full">{person.role}</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{person.livedEra}</span>
        </div>
      </div>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Biography</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{person.bio}</p>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Verses</h2>
        <div className="flex flex-wrap gap-2">
          {person.keyVerses.map(v => (
            <span
              key={v}
              className="bg-scripture-50 border border-scripture-200 text-scripture-700 text-xs px-2.5 py-1 rounded-full font-medium"
            >
              {v}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Facts</h2>
        <ul className="space-y-2">
          {person.keyFacts.map((fact, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-scripture-400 shrink-0" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function HowToContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-2">
          How to Study the Bible in Context
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          The Bible is not a book of fortune cookie verses. It is an ancient library of literature — narrative,
          poetry, prophecy, letters, law, and wisdom — written across 1,500 years by dozens of authors in
          multiple languages and cultures. Reading it well requires reading it carefully.
        </p>
      </div>

      <div className="bg-scripture-50 border border-scripture-200 rounded-xl p-4 text-scripture-800 text-sm">
        <strong>The most common mistake in Bible reading</strong> is treating every verse as a standalone
        inspirational quote. Scripture's power comes from its larger story, not from any single sentence
        removed from its setting.
      </div>

      <div className="space-y-4">
        {SECTIONS.map(section => (
          <section key={section.num} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-scripture-100 text-scripture-700 font-bold text-xs shrink-0">
                {section.num}
              </div>
              <h2 className="font-serif font-semibold text-gray-800">{section.title}</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm pl-10">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

function WelcomeContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-20 space-y-4 text-gray-400">
      <div className="w-16 h-16 rounded-full bg-scripture-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-scripture-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </div>
      <p className="font-serif text-lg text-gray-500">Select a topic from the sidebar to begin studying.</p>
      <p className="text-sm max-w-sm">
        Browse people of the Bible, study methods, and more resources from the categories on the left.
      </p>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
type ContentType =
  | { kind: 'welcome' }
  | { kind: 'how-to' }
  | { kind: 'person'; person: BiblePerson };

export default function StudyGuidePage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({ people: true });
  const [content, setContent] = useState<ContentType>({ kind: 'welcome' });
  const [search, setSearch] = useState('');

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const otPeople = BIBLE_PEOPLE.filter(p => p.testament === 'OT' || p.testament === 'Both');
  const ntPeople = BIBLE_PEOPLE.filter(p => p.testament === 'NT' || p.testament === 'Both');

  const filterPeople = (list: BiblePerson[]) => {
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.role.toLowerCase().includes(q)
    );
  };

  const filteredOT = filterPeople(otPeople);
  const filteredNT = filterPeople(ntPeople);
  const selectedPersonId = content.kind === 'person' ? content.person.id : null;

  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-gray-200 bg-gray-50 flex flex-col overflow-hidden">
        <div className="p-3 border-b border-gray-200">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search people…"
            className="w-full text-sm rounded-lg border border-gray-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-scripture-400 bg-white"
          />
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          {/* People category */}
          <div>
            <button
              onClick={() => toggleCategory('people')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-100"
            >
              <span>People of the Bible</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${openCategories.people ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {openCategories.people && (
              <div className="pb-1">
                {filteredOT.length > 0 && (
                  <>
                    <p className="px-4 pt-2 pb-1 text-xs text-gray-400 font-medium">Old Testament</p>
                    {filteredOT.map(person => (
                      <button
                        key={person.id}
                        onClick={() => setContent({ kind: 'person', person })}
                        className={`w-full text-left px-4 py-1.5 text-sm rounded transition-colors ${
                          selectedPersonId === person.id
                            ? 'bg-scripture-100 text-scripture-800 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {person.name}
                      </button>
                    ))}
                  </>
                )}

                {filteredNT.length > 0 && (
                  <>
                    <p className="px-4 pt-3 pb-1 text-xs text-gray-400 font-medium">New Testament</p>
                    {filteredNT.map(person => (
                      <button
                        key={person.id}
                        onClick={() => setContent({ kind: 'person', person })}
                        className={`w-full text-left px-4 py-1.5 text-sm rounded transition-colors ${
                          selectedPersonId === person.id
                            ? 'bg-scripture-100 text-scripture-800 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {person.name}
                      </button>
                    ))}
                  </>
                )}

                {filteredOT.length === 0 && filteredNT.length === 0 && (
                  <p className="px-4 py-2 text-xs text-gray-400 italic">No results</p>
                )}
              </div>
            )}
          </div>

          {/* How-to category */}
          <div className="mt-1">
            <button
              onClick={() => setContent({ kind: 'how-to' })}
              className={`w-full flex items-center px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-gray-100 ${
                content.kind === 'how-to' ? 'text-scripture-700 bg-scripture-50' : 'text-gray-500'
              }`}
            >
              How to Study
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto px-6 py-6">
        {content.kind === 'welcome' && <WelcomeContent />}
        {content.kind === 'how-to' && <HowToContent />}
        {content.kind === 'person' && <PersonDetail person={content.person} />}
      </main>
    </div>
  );
}
