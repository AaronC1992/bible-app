import { useState } from 'react';
import { BIBLE_PEOPLE, type BiblePerson } from '../data/studyPeople';
import { BIBLE_PLACES, type BiblePlace } from '../data/studyPlaces';
import { BIBLE_CONTROVERSIES, type BibleControversy } from '../data/studyControversies';
import { CHRISTIAN_DEBATES, type ChristianDebate } from '../data/studyDebates';
import { PEOPLE_SOURCES, PLACES_SOURCES, CONTROVERSY_SOURCES, DEBATE_SOURCES } from '../data/studySources';
import VerseLink from '../components/bible/VerseLink';

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
  const sources = PEOPLE_SOURCES[person.id] ?? [];
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
            <VerseLink
              key={v}
              reference={v}
              className="bg-scripture-50 border border-scripture-200 text-scripture-700 text-xs px-2.5 py-1 rounded-full font-medium hover:bg-scripture-100 hover:border-scripture-400 transition-colors cursor-pointer"
            />
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

      {sources.length > 0 && (
        <section>
          <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Sources &amp; Further Reading</h2>
          <ul className="space-y-1.5">
            {sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-scripture-600 hover:text-scripture-800 hover:underline flex items-center gap-1.5"
                >
                  <span className="text-xs opacity-70">↗</span>
                  <span>{src.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

function PlaceDetail({ place }: { place: BiblePlace }) {
  const sources = PLACES_SOURCES[place.id] ?? [];
  return (
    <article className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">{place.name}</h1>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="bg-scripture-100 text-scripture-700 px-2 py-0.5 rounded-full font-medium">
            {place.testament === 'Both' ? 'OT & NT' : place.testament}
          </span>
          <span className="bg-parchment-100 text-gray-600 px-2 py-0.5 rounded-full">{place.type}</span>
          <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{place.modernLocation}</span>
        </div>
      </div>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Overview</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{place.description}</p>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Verses</h2>
        <div className="flex flex-wrap gap-2">
          {place.keyVerses.map(v => (
            <VerseLink
              key={v}
              reference={v}
              className="bg-scripture-50 border border-scripture-200 text-scripture-700 text-xs px-2.5 py-1 rounded-full font-medium hover:bg-scripture-100 hover:border-scripture-400 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Facts</h2>
        <ul className="space-y-2">
          {place.keyFacts.map((fact, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-scripture-400 shrink-0" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {sources.length > 0 && (
        <section>
          <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Sources &amp; Further Reading</h2>
          <ul className="space-y-1.5">
            {sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-scripture-600 hover:text-scripture-800 hover:underline flex items-center gap-1.5"
                >
                  <span className="text-xs opacity-70">↗</span>
                  <span>{src.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

function ControversyDetail({ controversy }: { controversy: BibleControversy }) {
  const sources = CONTROVERSY_SOURCES[controversy.id] ?? [];
  return (
    <article className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">{controversy.title}</h1>
        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{controversy.era}</span>
      </div>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Background</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{controversy.background}</p>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-3">Major Positions</h2>
        <div className="space-y-3">
          {controversy.positions.map((pos, i) => (
            <div key={i} className="bg-parchment-50 border border-parchment-200 rounded-xl p-4">
              <p className="font-semibold text-scripture-800 text-sm mb-1">{pos.label}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{pos.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Verses</h2>
        <div className="flex flex-wrap gap-2">
          {controversy.keyVerses.map(v => (
            <VerseLink
              key={v}
              reference={v}
              className="bg-scripture-50 border border-scripture-200 text-scripture-700 text-xs px-2.5 py-1 rounded-full font-medium hover:bg-scripture-100 hover:border-scripture-400 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Facts</h2>
        <ul className="space-y-2">
          {controversy.keyFacts.map((fact, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </section>

      {sources.length > 0 && (
        <section>
          <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Sources &amp; Further Reading</h2>
          <ul className="space-y-1.5">
            {sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-scripture-600 hover:text-scripture-800 hover:underline flex items-center gap-1.5"
                >
                  <span className="text-xs opacity-70">↗</span>
                  <span>{src.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

function DebateDetail({ debate }: { debate: ChristianDebate }) {
  const sources = DEBATE_SOURCES[debate.id] ?? [];
  const categoryColors: Record<ChristianDebate['category'], string> = {
    Historical: 'bg-blue-100 text-blue-700',
    Theological: 'bg-scripture-100 text-scripture-700',
    Scientific: 'bg-green-100 text-green-700',
    Philosophical: 'bg-purple-100 text-purple-700',
  };

  return (
    <article className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="font-serif text-2xl font-bold text-scripture-800 mb-1">{debate.title}</h1>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[debate.category]}`}>{debate.category}</span>
      </div>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Overview</h2>
        <p className="text-gray-600 leading-relaxed text-sm">{debate.overview}</p>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">The Challenge</h2>
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-2">
          {debate.challenges.map((c, i) => (
            <div key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Christian Responses</h2>
        <div className="bg-scripture-50 border border-scripture-200 rounded-xl p-4 space-y-2">
          {debate.responses.map((r, i) => (
            <div key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-scripture-400 shrink-0" />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Verses</h2>
        <div className="flex flex-wrap gap-2">
          {debate.keyVerses.map(v => (
            <VerseLink
              key={v}
              reference={v}
              className="bg-scripture-50 border border-scripture-200 text-scripture-700 text-xs px-2.5 py-1 rounded-full font-medium hover:bg-scripture-100 hover:border-scripture-400 transition-colors cursor-pointer"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Key Points</h2>
        <ul className="space-y-2">
          {debate.keyPoints.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-scripture-400 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {sources.length > 0 && (
        <section>
          <h2 className="font-serif font-semibold text-gray-800 text-base mb-2">Sources &amp; Further Reading</h2>
          <ul className="space-y-1.5">
            {sources.map((src, i) => (
              <li key={i}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-scripture-600 hover:text-scripture-800 hover:underline flex items-center gap-1.5"
                >
                  <span className="text-xs opacity-70">↗</span>
                  <span>{src.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
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
        Browse people of the Bible, places of the Bible, study methods, and more resources from the categories on the left.
      </p>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
type ContentType =
  | { kind: 'welcome' }
  | { kind: 'how-to' }
  | { kind: 'person'; person: BiblePerson }
  | { kind: 'place'; place: BiblePlace }
  | { kind: 'controversy'; controversy: BibleControversy }
  | { kind: 'debate'; debate: ChristianDebate };

export default function StudyGuidePage() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [content, setContent] = useState<ContentType>({ kind: 'welcome' });
  const [search, setSearch] = useState('');
  // On mobile, track whether to show sidebar or content panel
  const [mobileShowContent, setMobileShowContent] = useState(false);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const selectContent = (c: ContentType) => {
    setContent(c);
    setMobileShowContent(true);
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

  const filteredPlaces = search.trim()
    ? BIBLE_PLACES.filter(pl =>
        pl.name.toLowerCase().includes(search.toLowerCase()) ||
        pl.type.toLowerCase().includes(search.toLowerCase())
      )
    : BIBLE_PLACES;

  const filteredControversies = search.trim()
    ? BIBLE_CONTROVERSIES.filter(c =>
        c.title.toLowerCase().includes(search.toLowerCase())
      )
    : BIBLE_CONTROVERSIES;

  const filteredDebates = search.trim()
    ? CHRISTIAN_DEBATES.filter(d =>
        d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.category.toLowerCase().includes(search.toLowerCase())
      )
    : CHRISTIAN_DEBATES;

  const filteredOT = filterPeople(otPeople);
  const filteredNT = filterPeople(ntPeople);
  const selectedPersonId = content.kind === 'person' ? content.person.id : null;
  const selectedPlaceId = content.kind === 'place' ? content.place.id : null;
  const selectedControversyId = content.kind === 'controversy' ? content.controversy.id : null;
  const selectedDebateId = content.kind === 'debate' ? content.debate.id : null;

  return (
    <div className="flex h-[calc(100vh-56px)] overflow-hidden">

      {/* Sidebar — full-width on mobile when content is not shown */}
      <aside className={`${mobileShowContent ? 'hidden' : 'flex'} md:flex w-full md:w-64 shrink-0 border-r border-gray-200 bg-gray-50 flex-col overflow-hidden`}>
        <div className="p-3 border-b border-gray-200">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search people & places…"
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
                        onClick={() => selectContent({ kind: 'person', person })}
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
                        onClick={() => selectContent({ kind: 'person', person })}
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

          {/* Places category */}
          <div className="mt-1">
            <button
              onClick={() => toggleCategory('places')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-100"
            >
              <span>Places of the Bible</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${openCategories.places ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {openCategories.places && (
              <div className="pb-1">
                {filteredPlaces.length > 0 ? filteredPlaces.map(place => (
                  <button
                    key={place.id}
                    onClick={() => selectContent({ kind: 'place', place })}
                    className={`w-full text-left px-4 py-1.5 text-sm rounded transition-colors ${
                      selectedPlaceId === place.id
                        ? 'bg-scripture-100 text-scripture-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {place.name}
                  </button>
                )) : (
                  <p className="px-4 py-2 text-xs text-gray-400 italic">No results</p>
                )}
              </div>
            )}
          </div>

          {/* Controversies category */}
          <div className="mt-1">
            <button
              onClick={() => toggleCategory('controversies')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-100"
            >
              <span>Controversies</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${openCategories.controversies ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {openCategories.controversies && (
              <div className="pb-1">
                {filteredControversies.length > 0 ? filteredControversies.map(c => (
                  <button
                    key={c.id}
                    onClick={() => selectContent({ kind: 'controversy', controversy: c })}
                    className={`w-full text-left px-4 py-1.5 text-sm rounded transition-colors ${
                      selectedControversyId === c.id
                        ? 'bg-scripture-100 text-scripture-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {c.title}
                  </button>
                )) : (
                  <p className="px-4 py-2 text-xs text-gray-400 italic">No results</p>
                )}
              </div>
            )}
          </div>

          {/* Debates category */}
          <div className="mt-1">
            <button
              onClick={() => toggleCategory('debates')}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:bg-gray-100"
            >
              <span>Debates</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform ${openCategories.debates ? 'rotate-90' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {openCategories.debates && (
              <div className="pb-1">
                {filteredDebates.length > 0 ? filteredDebates.map(d => (
                  <button
                    key={d.id}
                    onClick={() => selectContent({ kind: 'debate', debate: d })}
                    className={`w-full text-left px-4 py-1.5 text-sm rounded transition-colors ${
                      selectedDebateId === d.id
                        ? 'bg-scripture-100 text-scripture-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {d.title}
                  </button>
                )) : (
                  <p className="px-4 py-2 text-xs text-gray-400 italic">No results</p>
                )}
              </div>
            )}
          </div>

          {/* How-to category */}
          <div className="mt-1">
            <button
              onClick={() => selectContent({ kind: 'how-to' })}
              className={`w-full flex items-center px-3 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-gray-100 ${
                content.kind === 'how-to' ? 'text-scripture-700 bg-scripture-50' : 'text-gray-500'
              }`}
            >
              How to Study
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content — hidden on mobile until something is selected */}
      <main className={`${mobileShowContent ? 'flex' : 'hidden'} md:flex flex-1 flex-col overflow-y-auto`}>
        {/* Mobile back button */}
        <button
          onClick={() => setMobileShowContent(false)}
          className="md:hidden flex items-center gap-1.5 px-4 py-2.5 text-sm text-scripture-600 font-medium border-b border-gray-200 bg-white shrink-0"
        >
          ← Back to topics
        </button>
        <div className="flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-6">
          {content.kind === 'welcome' && <WelcomeContent />}
          {content.kind === 'how-to' && <HowToContent />}
          {content.kind === 'person' && <PersonDetail person={content.person} />}
          {content.kind === 'place' && <PlaceDetail place={content.place} />}
          {content.kind === 'controversy' && <ControversyDetail controversy={content.controversy} />}
          {content.kind === 'debate' && <DebateDetail debate={content.debate} />}
        </div>
      </main>
    </div>
  );
}
