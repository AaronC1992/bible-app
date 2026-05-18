export interface SourceEntry {
  label: string;
  url: string;
}

export type SourceMap = Record<string, SourceEntry[]>;

// ─── People Sources ───────────────────────────────────────────────────────────

export const PEOPLE_SOURCES: SourceMap = {
  adam: [
    { label: 'Wikipedia — Adam and Eve', url: 'https://en.wikipedia.org/wiki/Adam_and_Eve' },
    { label: 'Bible Gateway — Genesis 1–2', url: 'https://www.biblegateway.com/passage/?search=Genesis+1-2&version=NIV' },
    { label: 'Got Questions — Who was Adam in the Bible?', url: 'https://www.gotquestions.org/Adam-in-the-Bible.html' },
  ],
  eve: [
    { label: 'Wikipedia — Eve', url: 'https://en.wikipedia.org/wiki/Eve' },
    { label: 'Bible Gateway — Genesis 2–3 (Creation and the Fall)', url: 'https://www.biblegateway.com/passage/?search=Genesis+2-3&version=NIV' },
    { label: 'Got Questions — Who was Eve in the Bible?', url: 'https://www.gotquestions.org/Eve-in-the-Bible.html' },
  ],
  noah: [
    { label: 'Wikipedia — Noah', url: 'https://en.wikipedia.org/wiki/Noah' },
    { label: 'Wikipedia — Genesis flood narrative', url: 'https://en.wikipedia.org/wiki/Genesis_flood_narrative' },
    { label: 'Bible Gateway — Genesis 6–9 (The Flood)', url: 'https://www.biblegateway.com/passage/?search=Genesis+6-9&version=NIV' },
    { label: 'Got Questions — Was the Flood of Noah global or local?', url: 'https://www.gotquestions.org/flood-Noah-global-local.html' },
  ],
  abraham: [
    { label: 'Wikipedia — Abraham', url: 'https://en.wikipedia.org/wiki/Abraham' },
    { label: 'Bible Gateway — Genesis 12:1–3 (The Call)', url: 'https://www.biblegateway.com/passage/?search=Genesis+12%3A1-3&version=NIV' },
    { label: 'Bible Gateway — Genesis 22 (The Binding of Isaac)', url: 'https://www.biblegateway.com/passage/?search=Genesis+22&version=NIV' },
    { label: 'Got Questions — Life of Abraham', url: 'https://www.gotquestions.org/life-Abraham.html' },
  ],
  sarah: [
    { label: 'Wikipedia — Sarah', url: 'https://en.wikipedia.org/wiki/Sarah' },
    { label: 'Bible Gateway — Genesis 21:1–7 (Birth of Isaac)', url: 'https://www.biblegateway.com/passage/?search=Genesis+21%3A1-7&version=NIV' },
    { label: 'Got Questions — Who was Sarah in the Bible?', url: 'https://www.gotquestions.org/Sarah-in-the-Bible.html' },
  ],
  isaac: [
    { label: 'Wikipedia — Isaac', url: 'https://en.wikipedia.org/wiki/Isaac' },
    { label: 'Bible Gateway — Genesis 22 (The Binding of Isaac)', url: 'https://www.biblegateway.com/passage/?search=Genesis+22&version=NIV' },
    { label: 'Got Questions — Who was Isaac in the Bible?', url: 'https://www.gotquestions.org/who-was-Isaac.html' },
  ],
  rebekah: [
    { label: 'Wikipedia — Rebekah', url: 'https://en.wikipedia.org/wiki/Rebekah' },
    { label: 'Bible Gateway — Genesis 24 (Rebekah and Isaac)', url: 'https://www.biblegateway.com/passage/?search=Genesis+24&version=NIV' },
    { label: 'Got Questions — Who was Rebekah in the Bible?', url: 'https://www.gotquestions.org/Rebekah-in-the-Bible.html' },
  ],
  jacob: [
    { label: 'Wikipedia — Jacob', url: 'https://en.wikipedia.org/wiki/Jacob' },
    { label: 'Bible Gateway — Genesis 32:22–32 (Jacob Wrestles God)', url: 'https://www.biblegateway.com/passage/?search=Genesis+32%3A22-32&version=NIV' },
    { label: 'Got Questions — Who was Jacob in the Bible?', url: 'https://www.gotquestions.org/Jacob-in-the-Bible.html' },
  ],
  joseph: [
    { label: 'Wikipedia — Joseph (Genesis)', url: 'https://en.wikipedia.org/wiki/Joseph_(Genesis)' },
    { label: 'Bible Gateway — Genesis 37–50 (The Story of Joseph)', url: 'https://www.biblegateway.com/passage/?search=Genesis+37&version=NIV' },
    { label: 'Got Questions — Life of Joseph in the Bible', url: 'https://www.gotquestions.org/life-Joseph.html' },
  ],
  moses: [
    { label: 'Wikipedia — Moses', url: 'https://en.wikipedia.org/wiki/Moses' },
    { label: 'Bible Gateway — Exodus 3 (The Burning Bush)', url: 'https://www.biblegateway.com/passage/?search=Exodus+3&version=NIV' },
    { label: 'Bible Gateway — Exodus 20 (The Ten Commandments)', url: 'https://www.biblegateway.com/passage/?search=Exodus+20&version=NIV' },
    { label: 'Got Questions — Life of Moses', url: 'https://www.gotquestions.org/life-Moses.html' },
  ],
  miriam: [
    { label: 'Wikipedia — Miriam', url: 'https://en.wikipedia.org/wiki/Miriam' },
    { label: 'Bible Gateway — Exodus 15:20–21 (Song of Miriam)', url: 'https://www.biblegateway.com/passage/?search=Exodus+15%3A20-21&version=NIV' },
    { label: 'Got Questions — Who was Miriam in the Bible?', url: 'https://www.gotquestions.org/Miriam-in-the-Bible.html' },
  ],
  joshua: [
    { label: 'Wikipedia — Joshua', url: 'https://en.wikipedia.org/wiki/Joshua' },
    { label: 'Bible Gateway — Joshua 1 (God\'s Commission to Joshua)', url: 'https://www.biblegateway.com/passage/?search=Joshua+1&version=NIV' },
    { label: 'Bible Gateway — Joshua 6 (Fall of Jericho)', url: 'https://www.biblegateway.com/passage/?search=Joshua+6&version=NIV' },
    { label: 'Got Questions — Who was Joshua in the Bible?', url: 'https://www.gotquestions.org/Joshua-in-the-Bible.html' },
  ],
  deborah: [
    { label: 'Wikipedia — Deborah', url: 'https://en.wikipedia.org/wiki/Deborah' },
    { label: 'Bible Gateway — Judges 4–5 (Deborah and Barak)', url: 'https://www.biblegateway.com/passage/?search=Judges+4-5&version=NIV' },
    { label: 'Got Questions — Who was Deborah in the Bible?', url: 'https://www.gotquestions.org/Deborah-in-the-Bible.html' },
  ],
  samson: [
    { label: 'Wikipedia — Samson', url: 'https://en.wikipedia.org/wiki/Samson' },
    { label: 'Bible Gateway — Judges 13–16 (Samson\'s Story)', url: 'https://www.biblegateway.com/passage/?search=Judges+13-16&version=NIV' },
    { label: 'Got Questions — Who was Samson in the Bible?', url: 'https://www.gotquestions.org/Samson-in-the-Bible.html' },
  ],
  ruth: [
    { label: 'Wikipedia — Ruth (biblical figure)', url: 'https://en.wikipedia.org/wiki/Ruth_(biblical_figure)' },
    { label: 'Bible Gateway — Ruth 1:16–17 (Ruth\'s Declaration)', url: 'https://www.biblegateway.com/passage/?search=Ruth+1%3A16-17&version=NIV' },
    { label: 'Got Questions — Who was Ruth in the Bible?', url: 'https://www.gotquestions.org/Ruth-in-the-Bible.html' },
  ],
  samuel: [
    { label: 'Wikipedia — Samuel', url: 'https://en.wikipedia.org/wiki/Samuel' },
    { label: 'Bible Gateway — 1 Samuel 3 (Samuel\'s Call)', url: 'https://www.biblegateway.com/passage/?search=1+Samuel+3&version=NIV' },
    { label: 'Got Questions — Who was Samuel in the Bible?', url: 'https://www.gotquestions.org/Samuel-in-the-Bible.html' },
  ],
  saul: [
    { label: 'Wikipedia — Saul', url: 'https://en.wikipedia.org/wiki/Saul' },
    { label: 'Bible Gateway — 1 Samuel 15 (Saul\'s Rejection)', url: 'https://www.biblegateway.com/passage/?search=1+Samuel+15&version=NIV' },
    { label: 'Got Questions — Who was Saul in the Bible?', url: 'https://www.gotquestions.org/Saul-in-the-Bible.html' },
  ],
  david: [
    { label: 'Wikipedia — David', url: 'https://en.wikipedia.org/wiki/David' },
    { label: 'Bible Gateway — Psalm 51 (David\'s Prayer of Repentance)', url: 'https://www.biblegateway.com/passage/?search=Psalm+51&version=NIV' },
    { label: 'Got Questions — King David in the Bible', url: 'https://www.gotquestions.org/King-David.html' },
  ],
  solomon: [
    { label: 'Wikipedia — Solomon', url: 'https://en.wikipedia.org/wiki/Solomon' },
    { label: 'Bible Gateway — 1 Kings 3:5–14 (Solomon\'s Request for Wisdom)', url: 'https://www.biblegateway.com/passage/?search=1+Kings+3%3A5-14&version=NIV' },
    { label: 'Got Questions — Who was Solomon in the Bible?', url: 'https://www.gotquestions.org/Solomon-in-the-Bible.html' },
  ],
  elijah: [
    { label: 'Wikipedia — Elijah', url: 'https://en.wikipedia.org/wiki/Elijah' },
    { label: 'Bible Gateway — 1 Kings 18 (Mount Carmel)', url: 'https://www.biblegateway.com/passage/?search=1+Kings+18&version=NIV' },
    { label: 'Got Questions — Who was Elijah in the Bible?', url: 'https://www.gotquestions.org/Elijah-in-the-Bible.html' },
  ],
  elisha: [
    { label: 'Wikipedia — Elisha', url: 'https://en.wikipedia.org/wiki/Elisha' },
    { label: 'Bible Gateway — 2 Kings 5 (Naaman\'s Healing)', url: 'https://www.biblegateway.com/passage/?search=2+Kings+5&version=NIV' },
    { label: 'Got Questions — Who was Elisha in the Bible?', url: 'https://www.gotquestions.org/Elisha-in-the-Bible.html' },
  ],
  isaiah: [
    { label: 'Wikipedia — Isaiah', url: 'https://en.wikipedia.org/wiki/Isaiah' },
    { label: 'Wikipedia — Book of Isaiah', url: 'https://en.wikipedia.org/wiki/Book_of_Isaiah' },
    { label: 'Bible Gateway — Isaiah 53 (The Suffering Servant)', url: 'https://www.biblegateway.com/passage/?search=Isaiah+53&version=NIV' },
    { label: 'Got Questions — Who was Isaiah in the Bible?', url: 'https://www.gotquestions.org/Isaiah-in-the-Bible.html' },
  ],
  jeremiah: [
    { label: 'Wikipedia — Jeremiah', url: 'https://en.wikipedia.org/wiki/Jeremiah' },
    { label: 'Bible Gateway — Jeremiah 31:31–34 (The New Covenant)', url: 'https://www.biblegateway.com/passage/?search=Jeremiah+31%3A31-34&version=NIV' },
    { label: 'Got Questions — Who was Jeremiah in the Bible?', url: 'https://www.gotquestions.org/Jeremiah-in-the-Bible.html' },
  ],
  daniel: [
    { label: 'Wikipedia — Daniel (biblical figure)', url: 'https://en.wikipedia.org/wiki/Daniel_(biblical_figure)' },
    { label: 'Bible Gateway — Daniel 6 (The Lions\' Den)', url: 'https://www.biblegateway.com/passage/?search=Daniel+6&version=NIV' },
    { label: 'Got Questions — Who was Daniel in the Bible?', url: 'https://www.gotquestions.org/Daniel-in-the-Bible.html' },
  ],
  esther: [
    { label: 'Wikipedia — Esther', url: 'https://en.wikipedia.org/wiki/Esther' },
    { label: 'Bible Gateway — Esther 4 ("For Such a Time as This")', url: 'https://www.biblegateway.com/passage/?search=Esther+4&version=NIV' },
    { label: 'Got Questions — Who was Esther in the Bible?', url: 'https://www.gotquestions.org/Esther-in-the-Bible.html' },
  ],
  job: [
    { label: 'Wikipedia — Job (biblical figure)', url: 'https://en.wikipedia.org/wiki/Job_(biblical_figure)' },
    { label: 'Bible Gateway — Job 38–41 (God Answers from the Whirlwind)', url: 'https://www.biblegateway.com/passage/?search=Job+38-41&version=NIV' },
    { label: 'Got Questions — Who was Job in the Bible?', url: 'https://www.gotquestions.org/Job-in-the-Bible.html' },
  ],
  'mary-mother': [
    { label: 'Wikipedia — Mary, mother of Jesus', url: 'https://en.wikipedia.org/wiki/Mary,_mother_of_Jesus' },
    { label: 'Bible Gateway — Luke 1:26–56 (The Annunciation and Magnificat)', url: 'https://www.biblegateway.com/passage/?search=Luke+1%3A26-56&version=NIV' },
    { label: 'Got Questions — Who was Mary, the mother of Jesus?', url: 'https://www.gotquestions.org/Mary-mother-Jesus.html' },
  ],
  'john-baptist': [
    { label: 'Wikipedia — John the Baptist', url: 'https://en.wikipedia.org/wiki/John_the_Baptist' },
    { label: 'Bible Gateway — Matthew 3 (John\'s Ministry and the Baptism of Jesus)', url: 'https://www.biblegateway.com/passage/?search=Matthew+3&version=NIV' },
    { label: 'Got Questions — Who was John the Baptist?', url: 'https://www.gotquestions.org/John-the-Baptist.html' },
  ],
  peter: [
    { label: 'Wikipedia — Saint Peter', url: 'https://en.wikipedia.org/wiki/Saint_Peter' },
    { label: 'Bible Gateway — Acts 2 (Peter\'s Pentecost Sermon)', url: 'https://www.biblegateway.com/passage/?search=Acts+2&version=NIV' },
    { label: 'Got Questions — Who was the Apostle Peter?', url: 'https://www.gotquestions.org/Apostle-Peter.html' },
  ],
  paul: [
    { label: 'Wikipedia — Paul the Apostle', url: 'https://en.wikipedia.org/wiki/Paul_the_Apostle' },
    { label: 'Bible Gateway — Acts 9:1–19 (Paul\'s Conversion on the Road to Damascus)', url: 'https://www.biblegateway.com/passage/?search=Acts+9%3A1-19&version=NIV' },
    { label: 'Got Questions — Who was the Apostle Paul?', url: 'https://www.gotquestions.org/Apostle-Paul.html' },
  ],
  'john-apostle': [
    { label: 'Wikipedia — John the Apostle', url: 'https://en.wikipedia.org/wiki/John_the_Apostle' },
    { label: 'Bible Gateway — John 1:1–14 (The Word)', url: 'https://www.biblegateway.com/passage/?search=John+1%3A1-14&version=NIV' },
    { label: 'Got Questions — Who was the Apostle John?', url: 'https://www.gotquestions.org/Apostle-John.html' },
  ],
  'mary-magdalene': [
    { label: 'Wikipedia — Mary Magdalene', url: 'https://en.wikipedia.org/wiki/Mary_Magdalene' },
    { label: 'Bible Gateway — John 20:1–18 (The Resurrection Appearance to Mary)', url: 'https://www.biblegateway.com/passage/?search=John+20%3A1-18&version=NIV' },
    { label: 'Got Questions — Who was Mary Magdalene?', url: 'https://www.gotquestions.org/Mary-Magdalene.html' },
  ],
  thomas: [
    { label: 'Wikipedia — Thomas the Apostle', url: 'https://en.wikipedia.org/wiki/Thomas_the_Apostle' },
    { label: 'Bible Gateway — John 20:24–29 (Thomas and the Risen Jesus)', url: 'https://www.biblegateway.com/passage/?search=John+20%3A24-29&version=NIV' },
    { label: 'Got Questions — Who was the Apostle Thomas?', url: 'https://www.gotquestions.org/Apostle-Thomas.html' },
  ],
  lazarus: [
    { label: 'Wikipedia — Lazarus of Bethany', url: 'https://en.wikipedia.org/wiki/Lazarus_of_Bethany' },
    { label: 'Bible Gateway — John 11 (The Raising of Lazarus)', url: 'https://www.biblegateway.com/passage/?search=John+11&version=NIV' },
    { label: 'Got Questions — Who was Lazarus in the Bible?', url: 'https://www.gotquestions.org/Lazarus-in-the-Bible.html' },
  ],
  nicodemus: [
    { label: 'Wikipedia — Nicodemus', url: 'https://en.wikipedia.org/wiki/Nicodemus' },
    { label: 'Bible Gateway — John 3:1–21 (Born Again)', url: 'https://www.biblegateway.com/passage/?search=John+3%3A1-21&version=NIV' },
    { label: 'Got Questions — Who was Nicodemus in the Bible?', url: 'https://www.gotquestions.org/Nicodemus-in-the-Bible.html' },
  ],
  stephen: [
    { label: 'Wikipedia — Saint Stephen', url: 'https://en.wikipedia.org/wiki/Saint_Stephen' },
    { label: 'Bible Gateway — Acts 7 (Stephen\'s Speech and Martyrdom)', url: 'https://www.biblegateway.com/passage/?search=Acts+7&version=NIV' },
    { label: 'Got Questions — Who was Stephen in the Bible?', url: 'https://www.gotquestions.org/Stephen-in-the-Bible.html' },
  ],
  barnabas: [
    { label: 'Wikipedia — Barnabas', url: 'https://en.wikipedia.org/wiki/Barnabas' },
    { label: 'Bible Gateway — Acts 13–14 (First Missionary Journey)', url: 'https://www.biblegateway.com/passage/?search=Acts+13-14&version=NIV' },
    { label: 'Got Questions — Who was Barnabas in the Bible?', url: 'https://www.gotquestions.org/Barnabas-in-the-Bible.html' },
  ],
};

// ─── Places Sources ───────────────────────────────────────────────────────────

export const PLACES_SOURCES: SourceMap = {
  jerusalem: [
    { label: 'Wikipedia — Jerusalem', url: 'https://en.wikipedia.org/wiki/Jerusalem' },
    { label: 'Wikipedia — Temple Mount', url: 'https://en.wikipedia.org/wiki/Temple_Mount' },
    { label: 'Bible Gateway — Psalm 122 (Pray for the Peace of Jerusalem)', url: 'https://www.biblegateway.com/passage/?search=Psalm+122&version=NIV' },
    { label: 'Got Questions — What is the significance of Jerusalem?', url: 'https://www.gotquestions.org/Jerusalem-significance.html' },
  ],
  bethlehem: [
    { label: 'Wikipedia — Bethlehem', url: 'https://en.wikipedia.org/wiki/Bethlehem' },
    { label: 'Bible Gateway — Luke 2:1–20 (The Birth of Jesus)', url: 'https://www.biblegateway.com/passage/?search=Luke+2%3A1-20&version=NIV' },
    { label: 'Bible Gateway — Micah 5:2 (The Messiah\'s Birthplace Foretold)', url: 'https://www.biblegateway.com/passage/?search=Micah+5%3A2&version=NIV' },
    { label: 'Got Questions — What is the significance of Bethlehem?', url: 'https://www.gotquestions.org/Bethlehem-significance.html' },
  ],
  'garden-of-eden': [
    { label: 'Wikipedia — Garden of Eden', url: 'https://en.wikipedia.org/wiki/Garden_of_Eden' },
    { label: 'Bible Gateway — Genesis 2:8–3:24 (Eden and the Fall)', url: 'https://www.biblegateway.com/passage/?search=Genesis+2%3A8-24&version=NIV' },
    { label: 'Got Questions — Where was the Garden of Eden located?', url: 'https://www.gotquestions.org/Garden-of-Eden-location.html' },
  ],
  'mount-sinai': [
    { label: 'Wikipedia — Mount Sinai', url: 'https://en.wikipedia.org/wiki/Mount_Sinai' },
    { label: 'Bible Gateway — Exodus 19–20 (The Ten Commandments)', url: 'https://www.biblegateway.com/passage/?search=Exodus+19-20&version=NIV' },
    { label: 'Got Questions — What is the significance of Mount Sinai?', url: 'https://www.gotquestions.org/Mount-Sinai-significance.html' },
  ],
  egypt: [
    { label: 'Wikipedia — Ancient Egypt', url: 'https://en.wikipedia.org/wiki/Ancient_Egypt' },
    { label: 'Wikipedia — The Exodus', url: 'https://en.wikipedia.org/wiki/The_Exodus' },
    { label: 'Bible Gateway — Exodus 1 (Israel in Egypt)', url: 'https://www.biblegateway.com/passage/?search=Exodus+1&version=NIV' },
    { label: 'Got Questions — What is the significance of Egypt in the Bible?', url: 'https://www.gotquestions.org/Egypt-Bible.html' },
  ],
  babylon: [
    { label: 'Wikipedia — Babylon', url: 'https://en.wikipedia.org/wiki/Babylon' },
    { label: 'Wikipedia — Tower of Babel', url: 'https://en.wikipedia.org/wiki/Tower_of_Babel' },
    { label: 'Bible Gateway — Daniel 1 (The Babylonian Exile)', url: 'https://www.biblegateway.com/passage/?search=Daniel+1&version=NIV' },
    { label: 'Got Questions — What is the significance of Babylon in the Bible?', url: 'https://www.gotquestions.org/Babylon-Bible.html' },
  ],
  jericho: [
    { label: 'Wikipedia — Jericho', url: 'https://en.wikipedia.org/wiki/Jericho' },
    { label: 'Bible Gateway — Joshua 6 (The Fall of Jericho)', url: 'https://www.biblegateway.com/passage/?search=Joshua+6&version=NIV' },
    { label: 'Got Questions — What is the significance of Jericho?', url: 'https://www.gotquestions.org/Jericho-Bible.html' },
  ],
  'sea-of-galilee': [
    { label: 'Wikipedia — Sea of Galilee', url: 'https://en.wikipedia.org/wiki/Sea_of_Galilee' },
    { label: 'Bible Gateway — Matthew 14:22–33 (Walking on Water)', url: 'https://www.biblegateway.com/passage/?search=Matthew+14%3A22-33&version=NIV' },
    { label: 'Got Questions — What is the Sea of Galilee?', url: 'https://www.gotquestions.org/Sea-of-Galilee.html' },
  ],
  nazareth: [
    { label: 'Wikipedia — Nazareth', url: 'https://en.wikipedia.org/wiki/Nazareth' },
    { label: 'Bible Gateway — Luke 4:16–30 (Jesus Rejected at Nazareth)', url: 'https://www.biblegateway.com/passage/?search=Luke+4%3A16-30&version=NIV' },
    { label: 'Got Questions — What is the significance of Nazareth?', url: 'https://www.gotquestions.org/Nazareth-significance.html' },
  ],
  capernaum: [
    { label: 'Wikipedia — Capernaum', url: 'https://en.wikipedia.org/wiki/Capernaum' },
    { label: 'Bible Gateway — Mark 1:21–34 (Jesus Teaches in Capernaum)', url: 'https://www.biblegateway.com/passage/?search=Mark+1%3A21-34&version=NIV' },
    { label: 'Got Questions — What is the significance of Capernaum?', url: 'https://www.gotquestions.org/Capernaum-significance.html' },
  ],
  'jordan-river': [
    { label: 'Wikipedia — Jordan River', url: 'https://en.wikipedia.org/wiki/Jordan_River' },
    { label: 'Bible Gateway — Matthew 3:13–17 (The Baptism of Jesus)', url: 'https://www.biblegateway.com/passage/?search=Matthew+3%3A13-17&version=NIV' },
    { label: 'Got Questions — What is the significance of the Jordan River?', url: 'https://www.gotquestions.org/Jordan-River-significance.html' },
  ],
  hebron: [
    { label: 'Wikipedia — Hebron', url: 'https://en.wikipedia.org/wiki/Hebron' },
    { label: 'Wikipedia — Cave of the Patriarchs', url: 'https://en.wikipedia.org/wiki/Cave_of_the_Patriarchs' },
    { label: 'Bible Gateway — Genesis 23 (Abraham Buys the Cave of Machpelah)', url: 'https://www.biblegateway.com/passage/?search=Genesis+23&version=NIV' },
  ],
  antioch: [
    { label: 'Wikipedia — Antioch', url: 'https://en.wikipedia.org/wiki/Antioch' },
    { label: 'Bible Gateway — Acts 11:19–26 (Christians First Named in Antioch)', url: 'https://www.biblegateway.com/passage/?search=Acts+11%3A19-26&version=NIV' },
    { label: 'Got Questions — What is the significance of Antioch in the Bible?', url: 'https://www.gotquestions.org/Antioch-Bible.html' },
  ],
  athens: [
    { label: 'Wikipedia — Areopagus speech', url: 'https://en.wikipedia.org/wiki/Areopagus_speech' },
    { label: 'Wikipedia — Athens', url: 'https://en.wikipedia.org/wiki/Athens' },
    { label: 'Bible Gateway — Acts 17:15–34 (Paul at the Areopagus)', url: 'https://www.biblegateway.com/passage/?search=Acts+17%3A15-34&version=NIV' },
  ],
  rome: [
    { label: 'Wikipedia — Ancient Rome', url: 'https://en.wikipedia.org/wiki/Ancient_Rome' },
    { label: 'Bible Gateway — Acts 28:14–31 (Paul in Rome)', url: 'https://www.biblegateway.com/passage/?search=Acts+28%3A14-31&version=NIV' },
    { label: 'Got Questions — What is the significance of Rome in the Bible?', url: 'https://www.gotquestions.org/Rome-Bible.html' },
  ],
};

// ─── Controversy Sources ──────────────────────────────────────────────────────

export const CONTROVERSY_SOURCES: SourceMap = {
  'calvinism-arminianism': [
    { label: 'Wikipedia — Calvinist–Arminian debate', url: 'https://en.wikipedia.org/wiki/Calvinist%E2%80%93Arminian_debate' },
    { label: 'Got Questions — What is Calvinism?', url: 'https://www.gotquestions.org/Calvinism.html' },
    { label: 'Got Questions — What is Arminianism?', url: 'https://www.gotquestions.org/Arminianism.html' },
    { label: 'Stanford Encyclopedia of Philosophy — Foreknowledge and Free Will', url: 'https://plato.stanford.edu/entries/foreknowledge-free-will/' },
  ],
  'biblical-canon': [
    { label: 'Wikipedia — Biblical canon', url: 'https://en.wikipedia.org/wiki/Biblical_canon' },
    { label: 'Wikipedia — Development of the Christian biblical canon', url: 'https://en.wikipedia.org/wiki/Development_of_the_Christian_biblical_canon' },
    { label: 'Got Questions — How and when was the canon of the Bible compiled?', url: 'https://www.gotquestions.org/canon-Bible.html' },
  ],
  'trinity-nature-of-christ': [
    { label: 'Wikipedia — Trinity', url: 'https://en.wikipedia.org/wiki/Trinity' },
    { label: 'Wikipedia — Christology', url: 'https://en.wikipedia.org/wiki/Christology' },
    { label: 'Got Questions — What is the Trinity?', url: 'https://www.gotquestions.org/Trinity.html' },
    { label: 'Internet Encyclopedia of Philosophy — Trinity', url: 'https://iep.utm.edu/trinity/' },
  ],
  baptism: [
    { label: 'Wikipedia — Baptism', url: 'https://en.wikipedia.org/wiki/Baptism' },
    { label: 'Wikipedia — Infant baptism', url: 'https://en.wikipedia.org/wiki/Infant_baptism' },
    { label: 'Got Questions — What does the Bible say about baptism?', url: 'https://www.gotquestions.org/baptism.html' },
    { label: 'Got Questions — Should infants be baptized?', url: 'https://www.gotquestions.org/infant-baptism.html' },
  ],
  'cessationism-continuationism': [
    { label: 'Wikipedia — Cessationism', url: 'https://en.wikipedia.org/wiki/Cessationism' },
    { label: 'Got Questions — What is cessationism?', url: 'https://www.gotquestions.org/cessationism.html' },
    { label: 'Got Questions — What is continuationism?', url: 'https://www.gotquestions.org/continuationism.html' },
  ],
  'women-in-ministry': [
    { label: 'Wikipedia — Women in Christianity', url: 'https://en.wikipedia.org/wiki/Women_in_Christianity' },
    { label: 'Got Questions — What does the Bible say about female pastors?', url: 'https://www.gotquestions.org/female-pastors.html' },
    { label: 'CBE International — Christians for Biblical Equality (egalitarian perspective)', url: 'https://www.cbeinternational.org/' },
  ],
  'young-earth-old-earth': [
    { label: 'Wikipedia — Young Earth creationism', url: 'https://en.wikipedia.org/wiki/Young_Earth_creationism' },
    { label: 'Wikipedia — Old Earth creationism', url: 'https://en.wikipedia.org/wiki/Old_Earth_creationism' },
    { label: 'Got Questions — What is the young earth vs. old earth debate?', url: 'https://www.gotquestions.org/young-earth.html' },
    { label: 'BioLogos — Common Questions on Creation and Evolution', url: 'https://biologos.org/common-questions/' },
  ],
  'eternal-security': [
    { label: 'Wikipedia — Eternal security', url: 'https://en.wikipedia.org/wiki/Eternal_security' },
    { label: 'Got Questions — Is "once saved, always saved" biblical?', url: 'https://www.gotquestions.org/once-saved-always-saved.html' },
    { label: 'Got Questions — Can a Christian lose salvation?', url: 'https://www.gotquestions.org/can-Christian-lose-salvation.html' },
  ],
  eschatology: [
    { label: 'Wikipedia — Christian eschatology', url: 'https://en.wikipedia.org/wiki/Christian_eschatology' },
    { label: 'Wikipedia — Dispensationalism', url: 'https://en.wikipedia.org/wiki/Dispensationalism' },
    { label: 'Got Questions — What is eschatology?', url: 'https://www.gotquestions.org/eschatology.html' },
    { label: 'Got Questions — What is amillennialism?', url: 'https://www.gotquestions.org/amillennialism.html' },
  ],
  'prosperity-gospel': [
    { label: 'Wikipedia — Prosperity theology', url: 'https://en.wikipedia.org/wiki/Prosperity_theology' },
    { label: 'Got Questions — What is the prosperity gospel?', url: 'https://www.gotquestions.org/prosperity-gospel.html' },
    { label: 'Christianity Today — The Prosperity Gospel', url: 'https://www.christianitytoday.com/ct/topics/p/prosperity-gospel/' },
  ],
};

// ─── Debate Sources ───────────────────────────────────────────────────────────

export const DEBATE_SOURCES: SourceMap = {
  resurrection: [
    { label: 'Wikipedia — Resurrection of Jesus', url: 'https://en.wikipedia.org/wiki/Resurrection_of_Jesus' },
    { label: 'Bible Gateway — 1 Corinthians 15 (Paul on the Resurrection)', url: 'https://www.biblegateway.com/passage/?search=1+Corinthians+15&version=NIV' },
    { label: 'Got Questions — Did the resurrection of Jesus really happen?', url: 'https://www.gotquestions.org/resurrection-Jesus.html' },
    { label: 'Gary Habermas — Minimal Facts Argument for the Resurrection', url: 'https://www.garyhabermas.com/evidence/ch17_evidence/ch17_evidence.htm' },
  ],
  'historicity-of-jesus': [
    { label: 'Wikipedia — Historicity of Jesus', url: 'https://en.wikipedia.org/wiki/Historicity_of_Jesus' },
    { label: 'Wikipedia — Christ myth theory', url: 'https://en.wikipedia.org/wiki/Christ_myth_theory' },
    { label: 'Got Questions — Did Jesus really exist? Is there any historical evidence?', url: 'https://www.gotquestions.org/did-Jesus-exist.html' },
  ],
  'bible-historical-reliability': [
    { label: 'Wikipedia — Historicity of the Bible', url: 'https://en.wikipedia.org/wiki/Historicity_of_the_Bible' },
    { label: 'Wikipedia — Biblical archaeology', url: 'https://en.wikipedia.org/wiki/Biblical_archaeology' },
    { label: 'Got Questions — Is the Bible accurate and reliable?', url: 'https://www.gotquestions.org/Bible-reliable.html' },
  ],
  'problem-of-evil': [
    { label: 'Wikipedia — Problem of evil', url: 'https://en.wikipedia.org/wiki/Problem_of_evil' },
    { label: 'Stanford Encyclopedia of Philosophy — The Problem of Evil', url: 'https://plato.stanford.edu/entries/evil/' },
    { label: 'Internet Encyclopedia of Philosophy — The Problem of Evil', url: 'https://iep.utm.edu/evil-log/' },
    { label: 'Got Questions — Why does God allow evil and suffering?', url: 'https://www.gotquestions.org/why-does-God-allow-evil.html' },
  ],
  evolution: [
    { label: 'Wikipedia — Theistic evolution', url: 'https://en.wikipedia.org/wiki/Theistic_evolution' },
    { label: 'Wikipedia — Relationship between religion and science', url: 'https://en.wikipedia.org/wiki/Relationship_between_religion_and_science' },
    { label: 'BioLogos — Common Questions on Faith and Science', url: 'https://biologos.org/common-questions/' },
    { label: 'Got Questions — What does the Bible say about creation vs. evolution?', url: 'https://www.gotquestions.org/creation-vs-evolution.html' },
  ],
  'bible-contradictions': [
    { label: 'Wikipedia — Internal consistency of the Bible', url: 'https://en.wikipedia.org/wiki/Internal_consistency_of_the_Bible' },
    { label: 'Got Questions — Are there contradictions in the Bible?', url: 'https://www.gotquestions.org/Bible-contradictions.html' },
    { label: 'CARM — Biblical Inerrancy and Reliability', url: 'https://carm.org/biblical-inerrancy-and-reliability/' },
  ],
  'gnostic-gospels': [
    { label: 'Wikipedia — Nag Hammadi library', url: 'https://en.wikipedia.org/wiki/Nag_Hammadi_library' },
    { label: 'Wikipedia — Gnosticism', url: 'https://en.wikipedia.org/wiki/Gnosticism' },
    { label: 'Got Questions — What are the Gnostic Gospels?', url: 'https://www.gotquestions.org/gnostic-gospels.html' },
    { label: 'Bible Gateway — Galatians 1:6–9 (Warning Against a False Gospel)', url: 'https://www.biblegateway.com/passage/?search=Galatians+1%3A6-9&version=NIV' },
  ],
  'messianic-prophecy': [
    { label: 'Wikipedia — Messianic prophecy', url: 'https://en.wikipedia.org/wiki/Messianic_prophecy' },
    { label: 'Bible Gateway — Isaiah 53 (The Suffering Servant)', url: 'https://www.biblegateway.com/passage/?search=Isaiah+53&version=NIV' },
    { label: 'Got Questions — What are the messianic prophecies?', url: 'https://www.gotquestions.org/messianic-prophecies.html' },
  ],
  miracles: [
    { label: 'Wikipedia — Miracle', url: 'https://en.wikipedia.org/wiki/Miracle' },
    { label: 'Stanford Encyclopedia of Philosophy — Miracles', url: 'https://plato.stanford.edu/entries/miracles/' },
    { label: 'Internet Encyclopedia of Philosophy — Miracles', url: 'https://iep.utm.edu/miracles/' },
    { label: 'Got Questions — Do miracles still happen today?', url: 'https://www.gotquestions.org/do-miracles-happen.html' },
  ],
  exclusivism: [
    { label: 'Wikipedia — Inclusivism', url: 'https://en.wikipedia.org/wiki/Inclusivism' },
    { label: 'Wikipedia — Pluralism (philosophy of religion)', url: 'https://en.wikipedia.org/wiki/Pluralism_(philosophy_of_religion)' },
    { label: 'Stanford Encyclopedia of Philosophy — Religious Diversity', url: 'https://plato.stanford.edu/entries/religious-diversity/' },
    { label: 'Got Questions — Is Jesus the only way to Heaven?', url: 'https://www.gotquestions.org/Jesus-only-way.html' },
  ],
};
