/**
 * Starter Study Data for Context Bible
 * These are introductory study notes covering major passages.
 * They aim to be historically, literarily, and culturally grounded
 * without promoting narrow denominational positions.
 */

import type { BookContext, ChapterContext, VerseContext } from '../types/study';

// ─── Book Contexts ───────────────────────────────────────────────────────────

export const BOOK_CONTEXTS: Record<string, BookContext> = {
  GEN: {
    bookId: 'GEN',
    author: 'Traditionally attributed to Moses; scholarly views vary',
    dateWritten: 'Final form likely 6th–5th century BC; traditions are older',
    originalAudience: 'The people of Israel, likely in or near the Exodus period',
    historicalBackground:
      'Genesis addresses foundational questions about creation, human origins, sin, and covenant. It was written for a people who needed to understand their identity as God\'s chosen nation and how history arrived at their moment.',
    culturalBackground:
      'The ancient Near East was saturated with creation myths (Enuma Elish, Atrahasis). Genesis shares surface similarities but differs fundamentally: there is one God, humans are created in dignity, and the universe is purposeful rather than accidental or arbitrary.',
    genre: 'Narrative / Theological History',
    genreNotes:
      'Genesis uses narrative, genealogy, poetry, and symbolic language. Genesis 1–11 (primeval history) is widely recognized as using stylized, theological language to convey truth about God, humanity, and sin rather than functioning as a modern scientific account.',
    mainThemes: ['Creation', 'Image of God', 'Sin and consequence', 'Covenant', 'Election', 'Providence'],
    theologicalSignificance:
      'Genesis establishes the theological framework for the entire Bible: a good creation, human rebellion, divine grace, and the beginning of God\'s redemptive plan through Abraham\'s family.',
  },
  PSA: {
    bookId: 'PSA',
    author: 'Multiple authors including David, Asaph, the Sons of Korah, and anonymous writers',
    dateWritten: 'Compositions span roughly 1000–400 BC; final collection compiled post-exile',
    originalAudience: 'Israel\'s worshipping community; used in temple liturgy',
    historicalBackground:
      'The Psalms were the hymnbook and prayer book of ancient Israel. They reflect the full range of human experience — praise, lament, anger, trust, doubt, and celebration — addressed honestly to God.',
    culturalBackground:
      'Ancient Israelite worship was corporate and embodied. Psalms were sung, prayed, and shouted. Lament psalms (the largest category) reflect a culture where honest complaint to God was not considered faithless.',
    genre: 'Hebrew Poetry / Liturgical Songs',
    genreNotes:
      'Hebrew poetry uses parallelism (ideas echoing and building on each other) rather than rhyme. Reading a Psalm means noticing how lines relate to each other. Most Psalms fall into types: praise, lament, royal, wisdom, and pilgrimage.',
    mainThemes: ['God\'s faithfulness', 'Human frailty', 'Trust in crisis', 'Praise', 'Justice', 'Kingship'],
    theologicalSignificance:
      'The Psalms normalize the full emotional range of faith. They teach that honest, raw prayer is welcomed by God. The New Testament quotes the Psalms more than any other OT book.',
  },
  ISA: {
    bookId: 'ISA',
    author: 'Isaiah of Jerusalem (chapters 1–39); many scholars see chapters 40–66 as a later continuation',
    dateWritten: '8th century BC for chapters 1–39; 6th century BC context for 40–66',
    originalAudience: 'Judah in the 8th century; later chapters address Babylonian exiles',
    historicalBackground:
      'Isaiah ministered during a time of Assyrian imperial threat. He called Israel and Judah to trust God rather than political alliances. Chapters 40–66 speak comfort to a people facing or experiencing Babylonian exile.',
    culturalBackground:
      'The ancient Near East was shaped by empires (Assyria, Babylon). Small nations like Israel often faced the choice: seek God or seek military alliance. Isaiah consistently called Judah back to covenant faithfulness.',
    genre: 'Prophetic Literature',
    genreNotes:
      'Prophetic books combine poetry and prose. Prophecy in the ancient world was primarily covenant enforcement and social critique, not simply prediction. Where prediction occurs, it often has immediate and later fulfillments.',
    mainThemes: ['God\'s holiness', 'Human sin', 'Judgment and hope', 'The Servant of the Lord', 'New creation', 'Comfort'],
    theologicalSignificance:
      'Isaiah is sometimes called "the fifth gospel" because of its extensive connections to Jesus. The Servant Songs (42, 49, 50, 52–53) are among the most theologically significant texts in the Old Testament.',
  },
  MAT: {
    bookId: 'MAT',
    author: 'Traditionally Matthew the apostle; the book is anonymous in its text',
    dateWritten: 'Likely 80–90 AD, though some scholars argue earlier',
    originalAudience: 'Primarily Jewish Christians navigating life after the temple\'s destruction',
    historicalBackground:
      'Matthew was written after 70 AD, when the Jerusalem temple was destroyed by Rome. Jewish communities and early Christians were renegotiating identity. Matthew presents Jesus as the fulfillment of the Hebrew Scriptures.',
    culturalBackground:
      'First-century Jewish context: Torah observance, synagogue life, Roman occupation, and messianic expectation. Matthew frequently cites the OT to show Jesus fulfills the hopes of Israel.',
    genre: 'Gospel (Ancient Biography)',
    genreNotes:
      'The Gospels are closest to ancient Greco-Roman biography (bios), though they are theological documents as much as historical ones. They select and arrange events to communicate a portrait of Jesus, not a comprehensive diary.',
    mainThemes: ['Jesus as Messiah', 'Kingdom of Heaven', 'Fulfillment of the Law', 'Discipleship', 'The Church', 'Final judgment'],
    theologicalSignificance:
      'Matthew provides the most extended teaching of Jesus (Sermon on the Mount, parables of the Kingdom) and ends with the Great Commission, emphasizing Jesus\' global authority.',
  },
  JHN: {
    bookId: 'JHN',
    author: 'Traditionally John the apostle; written by the "Beloved Disciple" community',
    dateWritten: 'Likely 90–100 AD; the latest of the four Gospels',
    originalAudience: 'Broader Greco-Roman world, including Jewish and Gentile readers',
    historicalBackground:
      'John was written as the early church was establishing its identity amid persecution and competing philosophies. It engages Greco-Roman thought (logos, light/darkness) while remaining rooted in Jewish tradition.',
    culturalBackground:
      'Hellenistic (Greek-influenced) Jewish world of the late first century. The concept of logos (Word/reason) was familiar in both Jewish wisdom tradition and Greek philosophy, giving John a unique bridge to multiple audiences.',
    genre: 'Gospel (Ancient Biography)',
    genreNotes:
      'John is the most theological Gospel. It is written in a style of beautiful simplicity with profound depth. Its "I AM" statements connect Jesus to the divine name in Exodus. Misreading John as a news report misses its literary intentionality.',
    mainThemes: ['Belief / Faith', 'Eternal life', 'Light and darkness', 'Jesus as the Son of God', 'Love', 'The Spirit'],
    theologicalSignificance:
      'John explicitly states its purpose: "these are written so that you may believe that Jesus is the Christ, the Son of God, and that by believing you may have life in his name" (20:31).',
  },
  ROM: {
    bookId: 'ROM',
    author: 'Paul the Apostle',
    dateWritten: 'Approximately 57 AD, written from Corinth',
    originalAudience: 'Mixed Jewish and Gentile Christians in Rome, whom Paul had not yet visited',
    historicalBackground:
      'Paul was planning a missionary journey to Spain and wrote to the Roman church to introduce himself and his gospel. The letter addresses tensions between Jewish and Gentile Christians about law, grace, and identity.',
    culturalBackground:
      'Rome was the center of the empire, and its church was diverse. Jewish Christians brought Torah observance and synagogue traditions. Gentile Christians came from Roman and Greek religious backgrounds. Paul argues both groups stand equally before God through faith.',
    genre: 'Epistle (Letter)',
    genreNotes:
      'Romans follows the conventions of a Hellenistic letter but is more formal and theological than Paul\'s other letters. It reads as a carefully constructed argument (diatribe style) rather than a collection of miscellaneous advice.',
    mainThemes: ['Righteousness of God', 'Sin', 'Justification by faith', 'The role of the Law', 'Life in the Spirit', 'Jew and Gentile unity'],
    theologicalSignificance:
      'Romans has been called the most influential letter in human history. It anchored the Protestant Reformation (Luther\'s rediscovery of justification by faith) and continues to shape Christian theology globally.',
  },
};

// ─── Chapter Contexts ────────────────────────────────────────────────────────

export const CHAPTER_CONTEXTS: Record<string, ChapterContext> = {
  'GEN-1': {
    bookId: 'GEN',
    chapter: 1,
    summary:
      'Genesis 1 presents a majestic, structured account of God creating the heavens and earth over six days, culminating in the creation of humanity as the image-bearers of God. The chapter has a clear liturgical structure: each day follows a pattern of divine speech, creative act, evaluation ("it was good"), and evening/morning progression.',
    mainThemes: ['God as Creator', 'Goodness of creation', 'Humanity as image of God', 'Order from chaos', 'God\'s sovereign word'],
    keyVerses: ['1:1', '1:26-27', '1:31'],
    literaryStructure:
      'Days 1-3 create "spaces" (light, sky/water, land); Days 4-6 fill those spaces (lights, birds/fish, animals/humans). This parallelism suggests intentional literary craft, not a strict chronological news report.',
  },
  'PSA-23': {
    bookId: 'PSA',
    chapter: 23,
    summary:
      'Psalm 23 is one of the most beloved passages in all of Scripture. Written from the perspective of someone who has walked through genuine danger and loss, it is a declaration of trust — not the absence of trouble, but confidence that God accompanies through trouble.',
    mainThemes: ['God as Shepherd', 'Provision', 'Trust in danger', 'Divine presence', 'Restoration'],
    keyVerses: ['23:1', '23:4', '23:6'],
    literaryStructure:
      'The Psalm shifts metaphors from shepherd/sheep (vv. 1-4) to host/honored guest (vv. 5-6). Both images communicate God\'s intimate care. The shift may reflect movement from wilderness (danger) to sanctuary (celebration).',
  },
  'ISA-53': {
    bookId: 'ISA',
    chapter: 53,
    summary:
      'Isaiah 53 is the fourth and climactic "Servant Song." It describes a figure who suffers innocently on behalf of others, whose suffering accomplishes healing and peace for those who receive it. Christians have historically understood this as pointing to Jesus. Jewish scholars have variously understood it as referring to Israel as a whole, a righteous remnant, or a future individual.',
    mainThemes: ['Vicarious suffering', 'Servant of the Lord', 'Redemption', 'Rejection and vindication', 'Peace through suffering'],
    keyVerses: ['53:3', '53:5', '53:6', '53:11'],
    literaryStructure:
      'The chapter is often read with 52:13 as the opening. It moves from the Servant\'s exaltation (52:13-15) to his rejection and suffering (53:1-9), to his vindication and the meaning of his suffering (53:10-12).',
  },
  'MAT-5': {
    bookId: 'MAT',
    chapter: 5,
    summary:
      'Matthew 5 opens the Sermon on the Mount — the most extended block of Jesus\' teaching in the Gospels. It begins with the Beatitudes (surprising blessings), then addresses Jesus\' relationship to the Law, and closes with a series of "You have heard... but I say" contrasts where Jesus deepens Torah commands to matters of the heart.',
    mainThemes: ['Kingdom ethics', 'The Beatitudes', 'Fulfillment of the Law', 'Heart transformation', 'Salt and light'],
    keyVerses: ['5:3-12', '5:17', '5:44', '5:48'],
    literaryStructure:
      'The chapter has three movements: Beatitudes (vv. 3-12), metaphors of influence (salt and light, vv. 13-16), and the "antitheses" (You have heard... but I say to you, vv. 21-48).',
  },
  'JHN-3': {
    bookId: 'JHN',
    chapter: 3,
    summary:
      'John 3 contains one of the most quoted verses in Scripture (3:16) but is often read in isolation. The chapter records Jesus\' nighttime conversation with Nicodemus about being "born again" (or "born from above"), followed by John the Baptist\'s testimony about Jesus. The chapter explores the nature of spiritual new birth and the meaning of belief.',
    mainThemes: ['Spiritual rebirth', 'Belief / Faith', 'God\'s love for the world', 'Light and darkness', 'The Spirit'],
    keyVerses: ['3:3', '3:5', '3:16', '3:17', '3:36'],
    literaryStructure:
      'Two scenes: Jesus and Nicodemus (vv. 1-21) and John the Baptist\'s final testimony (vv. 22-36). Both scenes explore the nature of receiving Jesus. Nicodemus represents cautious, intellectual inquiry; John the Baptist represents joyful surrender.',
  },
  'ROM-8': {
    bookId: 'ROM',
    chapter: 8,
    summary:
      'Romans 8 is arguably the theological high point of Paul\'s letter. It declares that believers are free from condemnation, that the Spirit empowers transformed living, that God\'s purposes cannot be thwarted, and that nothing can separate us from God\'s love. It moves from the Spirit\'s work in the believer to the cosmic scope of redemption.',
    mainThemes: ['No condemnation', 'Life in the Spirit', 'Adoption as children of God', 'Suffering and hope', 'God\'s sovereignty', 'Inseparable love'],
    keyVerses: ['8:1', '8:28', '8:31', '8:38-39'],
    literaryStructure:
      'The chapter moves through: freedom from condemnation (vv. 1-4), Spirit-led life (vv. 5-17), present suffering and future glory (vv. 18-27), God\'s sovereignty (vv. 28-30), and the triumphant conclusion about God\'s love (vv. 31-39).',
  },
};

// ─── Verse Contexts ──────────────────────────────────────────────────────────

export const VERSE_CONTEXTS: Record<string, VerseContext> = {
  'GEN-1-1': {
    verseRef: 'GEN-1-1',
    explanation:
      '"In the beginning, God created the heavens and the earth." This opening line is a theological declaration, not a scientific timeline. It announces that the material universe had a beginning, that its origin was personal (God), and that creation was intentional rather than accidental.',
    paragraphContext:
      'Verse 1 functions as the title or thesis statement for what follows. The "formless and empty" condition in verse 2 sets up the problem that the six days of creation address: God brings form to what was formless and fills what was empty.',
    keyThemes: ['Creation ex nihilo', 'God as origin of all things', 'The universe is not eternal or self-made'],
    commonMisunderstandings:
      'This verse is often read as a scientific claim about the age of the earth or as the first act in a strict 24-hour sequence. The genre of Genesis 1 (structured, liturgical, symbolic) suggests it is answering the question "Who?" rather than "How long?" or "By what physical mechanism?"',
    studyQuestions: [
      'What would the first readers of this text have found surprising about how God is described here?',
      'How does "the beginning" set up everything else the Bible says about God and creation?',
      'How does knowing this verse is a theological claim (not a geology textbook) change how you read it?',
    ],
    crossReferences: [
      { reference: 'John 1:1-3', bookId: 'JHN', chapter: 1, verse: 1, relationship: 'Echoes Gen 1:1; the "Word" (Jesus) was present at creation', preview: 'In the beginning was the Word...' },
      { reference: 'Psalm 33:6', bookId: 'PSA', chapter: 33, verse: 6, relationship: 'God creates by spoken word, as in Gen 1', preview: 'By the word of the LORD the heavens were made...' },
      { reference: 'Hebrews 11:3', bookId: 'HEB', chapter: 11, verse: 3, relationship: 'Faith understands the universe was formed by God\'s word', preview: 'By faith we understand that the universe was formed at God\'s command...' },
    ],
  },
  'GEN-1-26': {
    verseRef: 'GEN-1-26',
    explanation:
      'The phrase "Let us make mankind in our image" has generated much discussion. "Image of God" (imago Dei) refers to humans as God\'s representatives in creation — given dignity, rationality, moral agency, and the capacity for relationship with God. The plural "us" may reflect divine court language, inner divine dialogue, or a Trinitarian reading.',
    paragraphContext:
      'Verses 24-31 describe the sixth day. Humans are created last, after the rest of creation is prepared. This placement is climactic, not incidental — humanity is the crown of the creation narrative.',
    keyThemes: ['Imago Dei (Image of God)', 'Human dignity', 'Stewardship of creation', 'Equality of men and women'],
    commonMisunderstandings:
      '"Image of God" is often spiritualized to mean only a soul or rational mind. In ancient Near Eastern context, an "image" of a god was its representative on earth. Humans are God\'s representatives, meant to reflect his character and rule with his values — caring for what he created.',
    studyQuestions: [
      'What would it mean to practically live as someone made in the image of God today?',
      'How does the imago Dei shape how we should treat other people?',
      'Why might the equal creation of "male and female" in God\'s image be significant?',
    ],
    crossReferences: [
      { reference: 'Genesis 9:6', bookId: 'GEN', chapter: 9, verse: 6, relationship: 'Imago Dei as the basis for protecting human life', preview: 'Whoever sheds human blood... for in the image of God has God made mankind.' },
      { reference: 'Psalm 8:3-8', bookId: 'PSA', chapter: 8, verse: 3, relationship: 'Humanity\'s dignity and role in creation reflected', preview: 'What is mankind that you are mindful of them...' },
      { reference: 'Colossians 1:15', bookId: 'COL', chapter: 1, verse: 15, relationship: 'Jesus as the perfect image of God', preview: 'The Son is the image of the invisible God...' },
    ],
  },
  'PSA-23-1': {
    verseRef: 'PSA-23-1',
    explanation:
      '"The LORD is my shepherd; I shall not want." The personal nature of this declaration is striking. Not "a shepherd" or "our shepherd," but "my shepherd." It is an intimate confession of trust. In a world where shepherds were common, everyone understood what a good shepherd meant: protection, provision, constant presence.',
    paragraphContext:
      'The Psalm is attributed to David, himself a former shepherd. The opening declaration sets the tone for everything that follows: because God is my shepherd, everything else in the Psalm is possible — including the ability to face the "valley of the shadow of death."',
    keyThemes: ['Personal faith', 'Divine provision', 'Contentment', 'Intimate relationship with God'],
    commonMisunderstandings:
      '"I shall not want" is sometimes read as a prosperity promise — that believers will have everything they desire materially. In context, it means the shepherd provides what the sheep genuinely needs. Contentment, not abundance, is the point.',
    studyQuestions: [
      'What area of your life is hardest to trust to God\'s shepherding care?',
      'How is the shepherd metaphor different from thinking of God as a vending machine or genie?',
      'How does knowing David wrote this from a background of real danger (hiding from Saul, wars) change how it reads?',
    ],
    crossReferences: [
      { reference: 'John 10:11', bookId: 'JHN', chapter: 10, verse: 11, relationship: 'Jesus declares himself the Good Shepherd', preview: 'I am the good shepherd. The good shepherd lays down his life for the sheep.' },
      { reference: 'Ezekiel 34:11-16', bookId: 'EZK', chapter: 34, verse: 11, relationship: 'God promises to personally shepherd scattered Israel', preview: 'I myself will search for my sheep and look after them.' },
      { reference: 'Revelation 7:17', bookId: 'REV', chapter: 7, verse: 17, relationship: 'The Lamb (Jesus) as eternal shepherd', preview: 'The Lamb at the center of the throne will be their shepherd...' },
    ],
  },
  'PSA-23-4': {
    verseRef: 'PSA-23-4',
    explanation:
      '"Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me." This is the emotional center of the Psalm. It does not say "I will avoid the dark valley." It says "I walk through it." The promise is presence, not exemption from suffering.',
    paragraphContext:
      'The Psalm shifts from third person ("He leads me") to second person ("you are with me") at this verse — a turn of remarkable intimacy. In the darkest moment, the psalmist speaks directly to God, not about him.',
    keyThemes: ['God\'s presence in suffering', 'Fear and courage', 'Death and hope'],
    commonMisunderstandings:
      '"Valley of the shadow of death" is sometimes spiritualized away. The Hebrew (tsalmaveth or tsalmavet) means deep darkness or shadow of death — it refers to genuinely terrifying, life-threatening circumstances. The promise is not that we avoid these but that God is there in them.',
    studyQuestions: [
      'Has there been a "dark valley" in your life? What did God\'s presence (or perceived absence) feel like in it?',
      'Why might it matter that the Psalmist speaks directly TO God at this verse?',
      'What "rod and staff" (instruments of a shepherd) represent comfort to you in how God guides you?',
    ],
    crossReferences: [
      { reference: 'Isaiah 43:2', bookId: 'ISA', chapter: 43, verse: 2, relationship: 'God promises to be with his people through waters and fire', preview: 'When you pass through the waters, I will be with you...' },
      { reference: 'Romans 8:38-39', bookId: 'ROM', chapter: 8, verse: 38, relationship: 'Nothing can separate from God\'s love, including death', preview: 'Neither death nor life... shall be able to separate us from the love of God.' },
    ],
  },
  'ISA-53-5': {
    verseRef: 'ISA-53-5',
    explanation:
      '"But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." This verse articulates one of the most profound ideas in Scripture: the suffering of an innocent person somehow brings healing to the guilty.',
    paragraphContext:
      'Verses 4-6 form the heart of the suffering servant\'s description. The repeated use of "our" and "we" is deliberate — the suffering is vicarious (on behalf of others). Verse 6 follows immediately: "We all, like sheep, have gone astray... and the LORD has laid on him the iniquity of us all."',
    keyThemes: ['Vicarious suffering', 'Atonement', 'Healing through the Servant', 'Sin and its consequences'],
    commonMisunderstandings:
      '"By his wounds we are healed" is sometimes taken as a promise of physical healing in all circumstances. In context, the healing refers to the spiritual condition described in verse 6 (going astray, iniquity). 1 Peter 2:24 applies this text to spiritual restoration. Physical dimensions of healing may be included in the full scope of redemption, but that is not the verse\'s primary claim.',
    studyQuestions: [
      'How does it affect you to read "our iniquities" and "our transgressions" — the emphasis on the community aspect?',
      'What does "peace" (Hebrew: shalom) mean in its full biblical sense — beyond just absence of conflict?',
      'If this passage points to Jesus, what does it tell you about what kind of Savior he is?',
    ],
    crossReferences: [
      { reference: '1 Peter 2:24', bookId: '1PE', chapter: 2, verse: 24, relationship: 'Peter directly applies Isaiah 53:5 to Jesus\' work on the cross', preview: 'He himself bore our sins in his body on the cross... by his wounds you have been healed.' },
      { reference: 'Romans 5:8', bookId: 'ROM', chapter: 5, verse: 8, relationship: 'Christ died for the ungodly — the same concept of vicarious atonement', preview: 'God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
      { reference: 'Isaiah 53:6', bookId: 'ISA', chapter: 53, verse: 6, relationship: 'Follows directly — all have gone astray and God laid it on the servant', preview: 'We all, like sheep, have gone astray... the LORD has laid on him the iniquity of us all.' },
    ],
  },
  'JHN-3-16': {
    verseRef: 'JHN-3-16',
    explanation:
      '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." Often called "the Gospel in a sentence," this verse is best understood in its context: Jesus is explaining to Nicodemus (a Jewish teacher) the nature of spiritual new birth. The "world" here is the whole of humanity, not just Israel.',
    paragraphContext:
      'This verse sits at the end of Jesus\' explanation to Nicodemus (vv. 1-21). The immediately following verse (3:17) is equally important: "For God did not send his Son into the world to condemn the world, but to save the world through him." The purpose is salvation, not condemnation.',
    keyThemes: ['God\'s love', 'Gift of the Son', 'Belief / Faith', 'Eternal life', 'Universal scope'],
    commonMisunderstandings:
      '"God so loved the world" is sometimes read as God loving the world despite its being lovable. The Greek houtos ("so/in this way") indicates the manner of love — his love expressed itself by giving. Also, "eternal life" in John is not merely unending time in heaven; it is a quality of life beginning now, characterized by knowing God (John 17:3).',
    studyQuestions: [
      'Why does verse 17 matter for understanding verse 16? What changes when you read them together?',
      'What does it mean for God to "give" his Son — what is the cost implied?',
      'What is the difference between eternal life as "living forever" and eternal life as "knowing God" (see John 17:3)?',
    ],
    crossReferences: [
      { reference: 'John 3:17', bookId: 'JHN', chapter: 3, verse: 17, relationship: 'Directly follows and clarifies — God\'s purpose is salvation, not condemnation', preview: 'For God did not send his Son into the world to condemn the world, but to save the world through him.' },
      { reference: 'Romans 5:8', bookId: 'ROM', chapter: 5, verse: 8, relationship: 'God\'s love demonstrated while we were still sinners', preview: 'God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
      { reference: 'John 17:3', bookId: 'JHN', chapter: 17, verse: 3, relationship: 'Jesus defines eternal life as knowing God', preview: 'Now this is eternal life: that they know you, the only true God, and Jesus Christ, whom you have sent.' },
      { reference: '1 John 4:9', bookId: '1JN', chapter: 4, verse: 9, relationship: 'Echoes John 3:16 — God\'s love shown by sending his Son', preview: 'This is how God showed his love among us: He sent his one and only Son into the world...' },
    ],
  },
  'ROM-8-28': {
    verseRef: 'ROM-8-28',
    explanation:
      '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose." This is one of the most quoted and most misapplied verses in the New Testament. It is a declaration of God\'s sovereign purpose, not a promise that all circumstances are good.',
    paragraphContext:
      'This verse comes in the middle of Paul\'s discussion of present suffering and future hope (vv. 18-30). He has just talked about the Spirit helping us in our weakness when we don\'t even know how to pray. Verse 28 flows from that: even when we don\'t know how to pray, God is still working.',
    keyThemes: ['God\'s sovereignty', 'Providence', 'Suffering and hope', 'Purpose in difficulty'],
    commonMisunderstandings:
      '"All things work together for good" does not mean all things are good or that everything will feel good. It is a claim about God\'s ability to weave even painful and evil circumstances into a larger redemptive purpose. It is also specifically addressed to "those who love him" — it is a statement of faith, not a blanket guarantee for every outcome in anyone\'s life.',
    studyQuestions: [
      'How is "God works through all things" different from "all things are good"?',
      'What does it mean that the "good" in this verse is defined by the context — being conformed to the image of Christ (v. 29)?',
      'How does this verse give comfort without dismissing genuine suffering?',
    ],
    crossReferences: [
      { reference: 'Romans 8:29', bookId: 'ROM', chapter: 8, verse: 29, relationship: 'Defines what the "good" God works toward: conformity to Christ\'s image', preview: 'For those God foreknew he also predestined to be conformed to the image of his Son...' },
      { reference: 'Genesis 50:20', bookId: 'GEN', chapter: 50, verse: 20, relationship: 'Joseph\'s declaration — God meant evil for good, a clear OT parallel', preview: 'You intended to harm me, but God intended it for good...' },
      { reference: 'Philippians 1:6', bookId: 'PHP', chapter: 1, verse: 6, relationship: 'God who began a good work will carry it to completion', preview: 'He who began a good work in you will carry it on to completion...' },
    ],
  },
  'ROM-8-38': {
    verseRef: 'ROM-8-38',
    explanation:
      '"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord." This is Paul\'s triumphant conclusion to Romans 8.',
    paragraphContext:
      'Verses 31-39 are Paul\'s doxological conclusion to the chapter and to the theological argument of Romans 1-8. He moves into rhetorical questions ("If God is for us, who can be against us?") and ends with a comprehensive list of everything that might threaten our security in God\'s love.',
    keyThemes: ['God\'s love', 'Security in Christ', 'Victory', 'Assurance'],
    commonMisunderstandings:
      'This verse is sometimes read as a guarantee of no suffering. Paul lists these things — "trouble, hardship, persecution, famine, nakedness, danger, sword" (v. 35) — as things believers actually face. The point is not that we escape them, but that none of them can sever our relationship with God\'s love.',
    studyQuestions: [
      'Of the list Paul gives (death, life, angels, demons, present, future, height, depth), which feels most threatening to your faith?',
      'What does "nothing can separate us" mean when we feel far from God emotionally?',
      'How is this promise both a comfort and a challenge?',
    ],
    crossReferences: [
      { reference: 'Romans 8:35', bookId: 'ROM', chapter: 8, verse: 35, relationship: 'Precedes v.38 — Paul lists actual hardships believers face, yet love holds', preview: 'Who shall separate us from the love of Christ? Shall trouble or hardship...' },
      { reference: 'Psalm 23:4', bookId: 'PSA', chapter: 23, verse: 4, relationship: 'Even in death\'s shadow, God\'s presence holds', preview: 'Even though I walk through the valley of the shadow of death...' },
      { reference: 'John 10:28-29', bookId: 'JHN', chapter: 10, verse: 28, relationship: 'Jesus says no one can snatch his sheep from his hand', preview: 'No one can snatch them out of my hand. My Father... is greater than all...' },
    ],
  },
};

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export function getBookContext(bookId: string): BookContext | undefined {
  return BOOK_CONTEXTS[bookId];
}

export function getChapterContext(bookId: string, chapter: number): ChapterContext | undefined {
  return CHAPTER_CONTEXTS[`${bookId}-${chapter}`];
}

export function getVerseContext(bookId: string, chapter: number, verse: number): VerseContext | undefined {
  return VERSE_CONTEXTS[`${bookId}-${chapter}-${verse}`];
}
