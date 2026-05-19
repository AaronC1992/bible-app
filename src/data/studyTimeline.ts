export interface TimelineEntry {
  id: string;
  era: string;
  date: string;
  title: string;
  description: string;
  keyVerse: string;
  testament: 'OT' | 'NT';
}

export const BIBLE_TIMELINE: TimelineEntry[] = [
  {
    id: 'creation',
    era: 'Primeval History',
    date: 'The Beginning',
    title: 'Creation',
    description:
      'God creates the heavens and the earth in six days, culminating in the creation of humanity in his image. The universe is declared good.',
    keyVerse: 'Genesis 1:1',
    testament: 'OT',
  },
  {
    id: 'the-fall',
    era: 'Primeval History',
    date: 'Early History',
    title: 'The Fall of Humanity',
    description:
      'Adam and Eve disobey God in the Garden of Eden, introducing sin, shame, and death into human experience. The first promise of a redeemer is given.',
    keyVerse: 'Genesis 3:15',
    testament: 'OT',
  },
  {
    id: 'noahs-flood',
    era: 'Primeval History',
    date: 'c. 2400 BC',
    title: "Noah's Flood",
    description:
      "God judges the earth's wickedness with a global flood, preserving Noah's family and representatives of every creature. God establishes his covenant with Noah.",
    keyVerse: 'Genesis 6:18',
    testament: 'OT',
  },
  {
    id: 'tower-of-babel',
    era: 'Primeval History',
    date: 'c. 2200 BC',
    title: 'Tower of Babel',
    description:
      'Humanity unites in pride to build a great tower. God scatters them by confusing their languages, leading to the spread of nations across the earth.',
    keyVerse: 'Genesis 11:9',
    testament: 'OT',
  },
  {
    id: 'abrahams-call',
    era: 'Patriarchs',
    date: 'c. 2091 BC',
    title: "Abraham's Call",
    description:
      "God calls Abram out of Ur to a land he will show him, promising to make him a great nation and to bless all nations through his offspring. This covenant is foundational to the entire Bible's story of redemption.",
    keyVerse: 'Genesis 12:1',
    testament: 'OT',
  },
  {
    id: 'binding-of-isaac',
    era: 'Patriarchs',
    date: 'c. 2050 BC',
    title: 'The Binding of Isaac',
    description:
      "God tests Abraham's faith by asking him to sacrifice his son Isaac. Abraham obeys, and God provides a ram as substitute — foreshadowing the substitutionary sacrifice of Christ.",
    keyVerse: 'Genesis 22:8',
    testament: 'OT',
  },
  {
    id: 'joseph-in-egypt',
    era: 'Patriarchs',
    date: 'c. 1898 BC',
    title: 'Joseph in Egypt',
    description:
      "Joseph is sold into slavery by his brothers, rises to become Pharaoh's second-in-command, and saves Egypt and his family from famine. His story powerfully demonstrates God's providence in suffering.",
    keyVerse: 'Genesis 50:20',
    testament: 'OT',
  },
  {
    id: 'the-exodus',
    era: 'The Exodus',
    date: 'c. 1446 BC',
    title: 'The Exodus from Egypt',
    description:
      "God raises up Moses to lead the Israelites out of 400 years of Egyptian slavery through ten plagues and the miraculous parting of the Red Sea. The Passover lamb's blood marks the doorposts — a shadow of Christ.",
    keyVerse: 'Exodus 14:21',
    testament: 'OT',
  },
  {
    id: 'law-at-sinai',
    era: 'The Exodus',
    date: 'c. 1446 BC',
    title: 'The Law at Mount Sinai',
    description:
      'God descends on Mount Sinai and gives Moses the Ten Commandments and the Mosaic Law, establishing his covenant with Israel as a nation: "You shall be my people, and I will be your God."',
    keyVerse: 'Exodus 20:1',
    testament: 'OT',
  },
  {
    id: 'wilderness-wandering',
    era: 'The Exodus',
    date: 'c. 1446–1406 BC',
    title: '40 Years in the Wilderness',
    description:
      "Israel's rebellion at Kadesh-Barnea leads to 40 years of wandering. Despite their unfaithfulness, God provides manna, water, and guidance through the pillar of cloud and fire.",
    keyVerse: 'Numbers 14:34',
    testament: 'OT',
  },
  {
    id: 'conquest-of-canaan',
    era: 'Conquest & Settlement',
    date: 'c. 1406 BC',
    title: 'Joshua and the Conquest of Canaan',
    description:
      "Under Joshua, Israel crosses the Jordan River and takes the Promised Land, fulfilling God's covenant with Abraham. The fall of Jericho demonstrates that God himself fights for his people.",
    keyVerse: 'Joshua 1:9',
    testament: 'OT',
  },
  {
    id: 'period-of-judges',
    era: 'Conquest & Settlement',
    date: 'c. 1380–1050 BC',
    title: 'The Period of the Judges',
    description:
      "A recurring cycle: Israel's apostasy \u2192 oppression by enemies \u2192 crying out to God \u2192 deliverance by a judge. Figures like Deborah, Gideon, and Samson arise. The era closes with chaos: \u2018Everyone did what was right in their own eyes.\u2019",
    keyVerse: 'Judges 21:25',
    testament: 'OT',
  },
  {
    id: 'saul-becomes-king',
    era: 'United Monarchy',
    date: 'c. 1050 BC',
    title: 'Saul Becomes the First King',
    description:
      "Israel demands a king like the surrounding nations. God grants their request through Saul of Benjamin. Though initially promising, Saul's disobedience leads God to reject him.",
    keyVerse: '1 Samuel 8:7',
    testament: 'OT',
  },
  {
    id: 'king-david',
    era: 'United Monarchy',
    date: 'c. 1010 BC',
    title: "David's Kingdom",
    description:
      'God anoints David as king, calling him "a man after my own heart." David unifies the kingdom, captures Jerusalem, and receives the Davidic Covenant — a promise that his dynasty and throne will endure forever.',
    keyVerse: '2 Samuel 7:12',
    testament: 'OT',
  },
  {
    id: 'solomon-temple',
    era: 'United Monarchy',
    date: 'c. 966 BC',
    title: "Solomon's Temple",
    description:
      "Solomon builds the magnificent Temple in Jerusalem as a permanent dwelling for God's presence. Israel reaches the height of its power, wealth, and influence — the fullest glimpse of the coming Kingdom.",
    keyVerse: '1 Kings 8:27',
    testament: 'OT',
  },
  {
    id: 'kingdom-divided',
    era: 'Divided Kingdom',
    date: '931 BC',
    title: 'The Kingdom Divides',
    description:
      "After Solomon's death, the kingdom splits into Israel (ten northern tribes) and Judah (two southern tribes). A succession of mostly wicked kings leads both nations into idolatry.",
    keyVerse: '1 Kings 12:16',
    testament: 'OT',
  },
  {
    id: 'northern-kingdom-falls',
    era: 'Divided Kingdom',
    date: '722 BC',
    title: 'Fall of the Northern Kingdom',
    description:
      'Assyria conquers the northern kingdom of Israel and deports its people. The "ten lost tribes" scatter. This fulfills the warnings of prophets like Amos and Hosea.',
    keyVerse: '2 Kings 17:6',
    testament: 'OT',
  },
  {
    id: 'babylonian-exile',
    era: 'Exile',
    date: '586 BC',
    title: 'Babylonian Exile',
    description:
      "Nebuchadnezzar's armies destroy Jerusalem and Solomon's Temple, taking the people of Judah captive to Babylon. Jeremiah and Ezekiel minister through this trauma, offering both judgment and future hope.",
    keyVerse: 'Jeremiah 29:11',
    testament: 'OT',
  },
  {
    id: 'return-from-exile',
    era: 'Return & Restoration',
    date: '538 BC',
    title: 'Return from Exile',
    description:
      "Cyrus the Great of Persia decrees that the Jews may return to their land. Zerubbabel rebuilds the Temple; Ezra restores the Law; Nehemiah rebuilds Jerusalem's walls. God's people are home — but longing for more.",
    keyVerse: 'Ezra 1:2',
    testament: 'OT',
  },
  {
    id: 'intertestamental',
    era: 'Intertestamental Period',
    date: '400 BC – 4 BC',
    title: '400 Years of Silence',
    description:
      'No new prophetic voice speaks in Israel for 400 years. Alexander the Great spreads Greek culture; Rome rises to power. The stage is set for the arrival of the Messiah.',
    keyVerse: 'Malachi 4:5',
    testament: 'OT',
  },
  {
    id: 'birth-of-jesus',
    era: 'Life of Christ',
    date: 'c. 4 BC',
    title: 'The Birth of Jesus',
    description:
      'The eternal Son of God takes on human flesh, born of a virgin in Bethlehem. Angels announce his birth to shepherds. Magi travel from the east. The long-awaited Messiah has come.',
    keyVerse: 'Luke 2:11',
    testament: 'NT',
  },
  {
    id: 'ministry-of-jesus',
    era: 'Life of Christ',
    date: 'c. AD 27–30',
    title: 'The Ministry of Jesus',
    description:
      "Jesus is baptized by John, resists temptation in the wilderness, and begins his public ministry. He calls twelve disciples, teaches with unprecedented authority, heals the sick, raises the dead, and announces the Kingdom of God.",
    keyVerse: 'Mark 1:15',
    testament: 'NT',
  },
  {
    id: 'death-and-resurrection',
    era: 'Life of Christ',
    date: 'c. AD 30–33',
    title: 'Death and Resurrection',
    description:
      "Jesus is betrayed, arrested, crucified under Pontius Pilate, and buried. On the third day he rises bodily from the dead — the central event of the Christian faith and the foundation of the gospel.",
    keyVerse: '1 Corinthians 15:3',
    testament: 'NT',
  },
  {
    id: 'pentecost',
    era: 'Early Church',
    date: 'c. AD 30–33',
    title: 'Pentecost and the Birth of the Church',
    description:
      "Fifty days after Passover, the Holy Spirit descends on the disciples with wind and fire. Peter preaches and 3,000 are baptized in a single day. The church is born and the Great Commission begins.",
    keyVerse: 'Acts 2:38',
    testament: 'NT',
  },
  {
    id: 'pauls-conversion',
    era: 'Early Church',
    date: 'c. AD 33–35',
    title: "Paul's Conversion",
    description:
      'Saul of Tarsus — a violent persecutor of Christians — encounters the risen Jesus on the road to Damascus and is transformed into Paul, the apostle to the Gentiles. His thirteen letters form half of the New Testament.',
    keyVerse: 'Acts 9:3',
    testament: 'NT',
  },
  {
    id: 'missionary-journeys',
    era: 'Early Church',
    date: 'c. AD 47–57',
    title: "Paul's Missionary Journeys",
    description:
      'Paul undertakes three missionary journeys across the Roman Empire, planting churches in Galatia, Macedonia, Achaia, and Asia Minor. His letters address foundational questions of faith, justification, and Christian living.',
    keyVerse: 'Romans 1:16',
    testament: 'NT',
  },
  {
    id: 'destruction-of-jerusalem',
    era: 'Early Church',
    date: 'AD 70',
    title: 'Destruction of Jerusalem',
    description:
      "Roman armies under Titus destroy Jerusalem and burn the Second Temple — fulfilling Jesus's prophecy in Matthew 24. This catastrophic event reshapes both Judaism and early Christianity forever.",
    keyVerse: 'Luke 21:20',
    testament: 'NT',
  },
  {
    id: 'book-of-revelation',
    era: 'Early Church',
    date: 'c. AD 90–96',
    title: 'Revelation Written on Patmos',
    description:
      "The apostle John, exiled on the island of Patmos during Roman persecution, receives visions from the risen Christ. Revelation closes the biblical canon with cosmic imagery of God's ultimate victory over evil and the renewal of all things.",
    keyVerse: 'Revelation 1:3',
    testament: 'NT',
  },
];
