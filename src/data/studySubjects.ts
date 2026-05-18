export interface BibleSubject {
  id: string;
  name: string;
  summary: string;
  keyVerses: string[];
  keyPoints: string[];
}

export const BIBLE_SUBJECTS: BibleSubject[] = [
  {
    id: 'love',
    name: 'Love',
    summary:
      'Love is the defining characteristic of God himself (1 John 4:8) and the central command of Christian ethics. Jesus summarized the entire Law and the Prophets in two commands: love God and love your neighbor. Biblical love (agape) is not primarily an emotion but a committed act — choosing the good of another regardless of feeling.',
    keyVerses: ['John 3:16', '1 Corinthians 13:4', '1 John 4:8', 'Matthew 22:37', 'Romans 5:8'],
    keyPoints: [
      'God\'s love is unconditional and self-giving (agape) — not based on the worthiness of the recipient.',
      'Love is described as the fulfillment of the entire law (Romans 13:10).',
      '1 Corinthians 13 defines love\'s character: patient, kind, not self-seeking, keeping no record of wrongs.',
      'Christians are called to love enemies, not just friends — making Christian love radically counter-cultural.',
    ],
  },
  {
    id: 'faith',
    name: 'Faith',
    summary:
      'Faith is the foundational response to God — trusting him, taking him at his word, and acting on that trust. Hebrews 11:1 defines it as confidence in what we hope for and assurance about what we do not see. Biblical faith is never merely intellectual agreement but always involves active trust and obedience.',
    keyVerses: ['Hebrews 11:1', 'Ephesians 2:8', 'James 2:17', 'Romans 10:17', 'Habakkuk 2:4'],
    keyPoints: [
      'Faith is the instrument through which salvation is received — not the basis, which is grace alone.',
      'Faith comes from hearing the word of God (Romans 10:17) — it is awakened by Scripture, not willpower.',
      'James insists that genuine faith produces works; faith without action is dead.',
      'Hebrews 11 catalogs the "faith hall of fame" — ordinary people who trusted God against visible evidence.',
    ],
  },
  {
    id: 'prayer',
    name: 'Prayer',
    summary:
      'Prayer is direct communication with God — encompassing praise, confession, thanksgiving, and petition. Jesus modeled prayer regularly and taught his disciples to pray using the Lord\'s Prayer as a pattern. The New Testament commands believers to "pray without ceasing" (1 Thessalonians 5:17) and promises that God hears and answers prayer.',
    keyVerses: ['Matthew 6:9', 'Philippians 4:6', '1 Thessalonians 5:17', 'James 5:16', 'John 15:7'],
    keyPoints: [
      'Jesus gave the Lord\'s Prayer (Matthew 6:9–13) as a model, not a rote formula.',
      'Prayer is to be persistent, honest, and according to God\'s will (1 John 5:14).',
      'The Holy Spirit intercedes for believers when words fail (Romans 8:26).',
      'Corporate prayer and private prayer both appear throughout Scripture as vital disciplines.',
    ],
  },
  {
    id: 'tribulation',
    name: 'Tribulation',
    summary:
      'Tribulation refers to severe suffering, persecution, and trial — both the everyday hardships Christians face and, in prophetic contexts, a specific end-times period of global judgment described in Revelation 6–19. Jesus promised that his followers would face tribulation in this world but also that he had overcome the world.',
    keyVerses: ['John 16:33', 'Revelation 7:14', 'Matthew 24:21', 'Romans 5:3', '2 Thessalonians 1:7'],
    keyPoints: [
      'Jesus explicitly promised tribulation for his followers (John 16:33) — suffering is not evidence of God\'s absence.',
      'The "Great Tribulation" (Matthew 24:21) is a specific prophetic period of unprecedented global judgment.',
      'Romans 5:3–4 teaches that tribulation produces endurance, character, and hope.',
      'Christians are promised ultimate deliverance from tribulation through Christ.',
    ],
  },
  {
    id: 'rapture',
    name: 'Rapture',
    summary:
      'The rapture is the doctrine that at Christ\'s return, living believers will be caught up together with resurrected saints to meet him in the air (1 Thessalonians 4:16–17). The word "rapture" comes from the Latin rapturo used to translate the Greek harpazō ("to seize" or "catch up"). Christians hold different views on when this occurs relative to the Great Tribulation.',
    keyVerses: ['1 Thessalonians 4:16', '1 Corinthians 15:51', 'John 14:3', 'Matthew 24:40', 'Revelation 3:10'],
    keyPoints: [
      'The doctrine is anchored in 1 Thessalonians 4:16–17 and 1 Corinthians 15:51–52.',
      'Three major positions: pre-tribulation (rapture before the Tribulation), mid-tribulation, and post-tribulation.',
      'The pre-tribulation view was popularized through John Nelson Darby in the 19th century.',
      'All Christians agree on the bodily return of Christ and the resurrection of the dead, regardless of rapture timing.',
    ],
  },
  {
    id: 'grace',
    name: 'Grace',
    summary:
      'Grace is God\'s unmerited favor — his freely given love, mercy, and power toward humanity that cannot be earned or deserved. Ephesians 2:8–9 declares that salvation is by grace through faith, not by works. Grace is not only forgiveness for past sins but ongoing divine enabling for present life and future hope.',
    keyVerses: ['Ephesians 2:8', 'Romans 6:14', '2 Corinthians 12:9', 'John 1:14', 'Titus 2:11'],
    keyPoints: [
      'Grace means God acts favorably toward sinners not because of their merit but because of his character.',
      'The New Testament describes grace as fully embodied in the person of Jesus Christ (John 1:14–17).',
      'God\'s grace is sufficient in human weakness — Paul\'s thorn in the flesh demonstrates this (2 Corinthians 12:9).',
      'Using grace as license to sin is a misunderstanding of its purpose (Romans 6:1–2).',
    ],
  },
  {
    id: 'salvation',
    name: 'Salvation',
    summary:
      'Salvation is God\'s rescue of humanity from sin, death, and separation from him. It has three dimensions: justification (declared righteous at the moment of faith), sanctification (ongoing transformation), and glorification (final perfection). The New Testament consistently presents salvation as a gift received by faith in Jesus Christ alone.',
    keyVerses: ['Romans 10:9', 'Acts 4:12', 'Ephesians 2:8', 'John 3:16', 'Romans 5:9'],
    keyPoints: [
      'Salvation is past (justified), present (being sanctified), and future (will be glorified) in its full scope.',
      'Acts 4:12 declares there is no other name than Jesus by which people must be saved.',
      'Salvation results in adoption into God\'s family and the indwelling of the Holy Spirit.',
      'The response required is repentance and faith — turning from sin and trusting Christ.',
    ],
  },
  {
    id: 'forgiveness',
    name: 'Forgiveness',
    summary:
      'Forgiveness operates on two levels in the Bible: God\'s forgiveness of human sin, and the human call to forgive one another. The cross is the basis of divine forgiveness — the penalty of sin is borne by Christ so God can justly forgive the repentant. Jesus taught that those who receive God\'s forgiveness must also extend it to others.',
    keyVerses: ['Colossians 1:14', 'Matthew 6:14', 'Psalm 103:12', '1 John 1:9', 'Ephesians 4:32'],
    keyPoints: [
      'God\'s forgiveness is complete — he removes sin "as far as the east is from the west" (Psalm 103:12).',
      'Forgiveness is grounded in the atoning work of Christ on the cross, not in human merit.',
      'Jesus links receiving and extending forgiveness — the Lord\'s Prayer models this connection.',
      'Forgiveness is a decision of the will, not a feeling; emotions follow over time.',
    ],
  },
  {
    id: 'holy-spirit',
    name: 'Holy Spirit',
    summary:
      'The Holy Spirit is the third person of the Trinity — fully God, distinct from the Father and the Son. In the Old Testament the Spirit moved in creation, empowered leaders, and inspired prophecy. At Pentecost (Acts 2) the Spirit was poured out on all believers, indwelling them permanently to convict of sin, produce fruit, and empower ministry.',
    keyVerses: ['John 14:26', 'Acts 2:38', 'Galatians 5:22', 'Romans 8:26', '1 Corinthians 12:4'],
    keyPoints: [
      'The Holy Spirit is a person with mind, will, and emotions — not an impersonal force.',
      'The Spirit permanently indwells every believer (Romans 8:9) — this is a NT development over OT.',
      'The fruit of the Spirit (Galatians 5:22–23) describes transformed character, not spiritual gifts.',
      'The gifts of the Spirit equip the church for ministry; Christians debate which gifts continue today.',
    ],
  },
  {
    id: 'baptism',
    name: 'Baptism',
    summary:
      'Baptism is the initiation rite of Christian faith, symbolizing death to the old life and resurrection to new life in Christ (Romans 6:3–4). Christians debate whether baptism is reserved for professing believers (believer\'s baptism) or may include infants (paedobaptism) as a covenant sign. Most traditions agree it is a public act of identification with Christ and entrance into the community of faith.',
    keyVerses: ['Matthew 28:19', 'Romans 6:4', 'Acts 2:38', 'Galatians 3:27', 'Mark 16:16'],
    keyPoints: [
      'Baptism symbolizes union with Christ in his death and resurrection (Romans 6:3–4).',
      'Two major views: believer\'s baptism (Baptist, anabaptist) and infant baptism (Presbyterian, Lutheran, Catholic).',
      'The NT closely associates baptism with repentance and faith, not as the cause of salvation but as its public sign.',
      'Baptism is commanded by Jesus in the Great Commission (Matthew 28:19) and practiced throughout Acts.',
    ],
  },
  {
    id: 'resurrection',
    name: 'Resurrection',
    summary:
      'Resurrection is the bodily raising of the dead to new physical life. The resurrection of Jesus is the cornerstone of Christianity — Paul writes that if Christ has not been raised, faith is futile (1 Corinthians 15:17). Believers are promised a future bodily resurrection at the last day, receiving imperishable, glorious bodies like Christ\'s own resurrection body.',
    keyVerses: ['1 Corinthians 15:3', 'John 11:25', 'Romans 6:5', '1 Thessalonians 4:16', 'Acts 2:32'],
    keyPoints: [
      'The resurrection of Jesus is presented as a historical, bodily event, witnessed by hundreds (1 Corinthians 15:6).',
      'All four Gospels record the empty tomb as the starting point of the resurrection narrative.',
      'The resurrection body is real but transformed — incorruptible, glorious, and powerful (1 Corinthians 15:42–44).',
      'Without the resurrection, Paul says Christian faith collapses (1 Corinthians 15:17–19).',
    ],
  },
  {
    id: 'heaven',
    name: 'Heaven',
    summary:
      'Heaven is God\'s dwelling place — the realm of his presence and throne. The final Christian hope is not an abstract "going to heaven" but a renewed creation: a new heaven and earth (Revelation 21) where God dwells with his people. In the period between death and resurrection, believers are described as being "with Christ" in a state of conscious fellowship.',
    keyVerses: ['Revelation 21:1', 'John 14:2', 'Philippians 1:23', '2 Corinthians 5:1', '1 Corinthians 2:9'],
    keyPoints: [
      'The ultimate Christian hope is not escape from earth but renewal of creation — a new heaven and earth.',
      'Believers who die before the resurrection are immediately "with Christ" in a state of conscious fellowship.',
      'Heaven in the NT is not a realm of clouds and disembodied spirits but of God\'s full presence and shalom.',
      'Revelation 21–22 paints the final state as a city (the New Jerusalem) — communal, physical, glorious.',
    ],
  },
  {
    id: 'hell',
    name: 'Hell',
    summary:
      'Hell refers to the place or state of final judgment for those separated from God. The Bible uses several terms: Sheol (OT realm of the dead), Gehenna (place of punishment, used 12 times by Jesus), and the "lake of fire" (Revelation). Christians hold three main views: eternal conscious torment, annihilationism, and universalism.',
    keyVerses: ['Matthew 25:41', 'Revelation 20:10', 'Mark 9:43', '2 Thessalonians 1:9', 'Jude 7'],
    keyPoints: [
      'Jesus spoke of hell more than any other biblical figure, often using Gehenna — the burning rubbish dump near Jerusalem.',
      'Three main views: eternal conscious torment (traditional), annihilationism (wicked cease to exist), universalism (all saved).',
      'Hell is consistently described as separation from God — "eternal destruction, away from the presence of the Lord" (2 Thessalonians 1:9).',
      'The biblical imagery of fire and darkness is taken by many as symbolic of a terrifying reality, not a literal description.',
    ],
  },
  {
    id: 'repentance',
    name: 'Repentance',
    summary:
      'Repentance is a turning — a radical change of mind, heart, and direction, away from sin and toward God. The Greek metanoia means more than remorse; it means a complete reorientation of life. John the Baptist, Jesus, and the apostles all opened their ministries with the call to repent, presenting it as the necessary response to the Kingdom of God.',
    keyVerses: ['Acts 3:19', 'Matthew 4:17', 'Luke 15:7', '2 Corinthians 7:10', 'Ezekiel 18:30'],
    keyPoints: [
      'Repentance means far more than feeling guilty — it involves a change of direction, not just emotion.',
      'Jesus\' first recorded sermon was a call to repentance (Matthew 4:17).',
      'Godly sorrow leads to repentance; worldly sorrow leads only to regret and death (2 Corinthians 7:10).',
      'Repentance is not a one-time event but an ongoing posture of the Christian life.',
    ],
  },
  {
    id: 'sanctification',
    name: 'Sanctification',
    summary:
      'Sanctification is the ongoing process by which believers are made holy — set apart for God and progressively transformed into Christlikeness. It follows justification and precedes glorification. Sanctification involves both God\'s sovereign work through the Holy Spirit and active human cooperation: putting sin to death and pursuing righteousness.',
    keyVerses: ['1 Thessalonians 4:3', 'Romans 6:19', 'Philippians 2:12', '2 Corinthians 3:18', 'Hebrews 12:14'],
    keyPoints: [
      'Sanctification is positional (set apart at conversion) and progressive (ongoing transformation throughout life).',
      'It involves both God\'s action ("He who began a good work," Philippians 1:6) and human effort (Philippians 2:12–13).',
      'The goal of sanctification is conformity to Christ\'s image (Romans 8:29).',
      'Complete sanctification (glorification) is not achieved in this life but at the resurrection.',
    ],
  },
  {
    id: 'justification',
    name: 'Justification',
    summary:
      'Justification is God\'s legal declaration that a sinner is righteous — not because they are righteous in themselves, but because Christ\'s righteousness is credited to them through faith. It is a one-time forensic act: the guilty party is declared "not guilty" on the basis of another\'s merit. This doctrine was the central flashpoint of the Protestant Reformation.',
    keyVerses: ['Romans 3:21', 'Galatians 2:16', 'Romans 5:1', 'Philippians 3:9', 'Romans 4:5'],
    keyPoints: [
      'Justification is a declaration, not a process — it occurs at the moment of faith and is not repeated.',
      'Christ\'s righteousness is imputed (credited) to the believer; the believer\'s sin is imputed to Christ.',
      'The Reformation\'s core debate was whether justification is by faith alone (Protestant) or faith plus works (Catholic).',
      'Justification results in peace with God — the hostility of sin is resolved (Romans 5:1).',
    ],
  },
  {
    id: 'atonement',
    name: 'Atonement',
    summary:
      'Atonement refers to the means by which the broken relationship between God and humanity is repaired. The death of Jesus on the cross is the central act of atonement — he bore the penalty of human sin so that sinners could be reconciled to God. Christians have articulated several theories of how the atonement works, including penal substitution, Christus Victor, and moral influence.',
    keyVerses: ['Romans 3:25', 'Isaiah 53:5', '1 John 2:2', 'Hebrews 9:22', 'Colossians 1:20'],
    keyPoints: [
      'The word "atonement" means at-one-ment — the bringing together of those who were separated.',
      'Penal substitution: Christ bore the penalty of sin in our place — the dominant Protestant view.',
      'Christus Victor: Christ defeated the powers of sin, death, and the devil through the cross and resurrection.',
      'The OT sacrificial system (Leviticus) prefigured and prepared for the final atonement in Christ.',
    ],
  },
  {
    id: 'second-coming',
    name: 'Second Coming',
    summary:
      'The Second Coming (parousia) is Jesus Christ\'s future return to earth in glory, power, and judgment. It is taught throughout both Testaments and confessed in all historic Christian creeds. Christians agree on the fact of Christ\'s return but disagree on the details — premillennial, amillennial, and postmillennial views differ on the millennium, tribulation, and sequence of end-time events.',
    keyVerses: ['Revelation 19:11', 'Acts 1:11', '1 Thessalonians 4:16', 'Matthew 24:30', 'Zechariah 14:4'],
    keyPoints: [
      'The angels at the Ascension promised Christ would return "in the same way" he went (Acts 1:11) — visibly and bodily.',
      'Three major millennial views: premillennialism (Christ returns before a 1,000-year reign), amillennialism, and postmillennialism.',
      'All major Christian traditions confess the Second Coming in their creeds.',
      'Believers are repeatedly called to watchfulness and readiness — no one knows the day or hour (Matthew 24:36).',
    ],
  },
  {
    id: 'covenant',
    name: 'Covenant',
    summary:
      'Covenant is the organizing framework of the entire biblical storyline — formal agreements God initiates with his people that define the terms of relationship. Key covenants include those with Noah, Abraham, Moses, David, and the New Covenant in Christ\'s blood. The New Testament presents Jesus as the mediator of a better covenant that fulfills and surpasses all previous ones.',
    keyVerses: ['Genesis 15:18', 'Jeremiah 31:31', 'Hebrews 8:6', 'Luke 22:20', 'Genesis 9:9'],
    keyPoints: [
      'Each covenant builds upon the previous ones and advances God\'s redemptive plan.',
      'The Mosaic (Old) Covenant was conditional on Israel\'s obedience; the New Covenant is grounded in Christ\'s obedience.',
      'Jeremiah 31:31–34 predicted the New Covenant centuries before Jesus established it at the Last Supper.',
      'Covenant involves both God\'s promises (unconditional aspects) and human obligations (conditional aspects).',
    ],
  },
  {
    id: 'worship',
    name: 'Worship',
    summary:
      'Worship is the response of created beings to God\'s glory, worth, and goodness. The Bible presents worship as both formal religious practice (temple, sacrifice, singing, prayer) and the whole of life lived for God\'s glory. Jesus taught that true worship is "in spirit and in truth" (John 4:24) — requiring both genuine heart engagement and correct understanding of who God is.',
    keyVerses: ['John 4:24', 'Romans 12:1', 'Psalm 150:6', 'Revelation 4:11', 'Hebrews 13:15'],
    keyPoints: [
      'Worship encompasses all of life (Romans 12:1) — not just Sunday services or singing.',
      'God seeks worshippers who worship in spirit (genuine heart engagement) and truth (correct knowledge of God).',
      'Corporate worship gathers believers together to declare God\'s worth and encourage one another.',
      'Revelation pictures the ultimate worship — all creation surrounding God\'s throne with praise.',
    ],
  },
  {
    id: 'suffering',
    name: 'Suffering',
    summary:
      'Suffering is one of the Bible\'s most central and honest themes. Scripture does not promise immunity from pain but God\'s presence within it. Paul writes that suffering produces endurance, character, and hope (Romans 5:3–4). The cross itself demonstrates that God entered the depths of human suffering — Jesus was "a man of sorrows, acquainted with grief" (Isaiah 53:3).',
    keyVerses: ['Romans 5:3', 'James 1:2', '2 Corinthians 1:3', '1 Peter 4:12', 'Psalm 22:24'],
    keyPoints: [
      'Suffering is part of the fallen human experience — Christians are not exempt (John 16:33).',
      'God does not waste suffering; he works through it to produce endurance and character (Romans 5:3–4).',
      'The book of Job is an honest exploration of undeserved suffering that refuses easy answers.',
      'The God of the Bible is not a distant observer of suffering — he entered it fully in the person of Jesus.',
    ],
  },
  {
    id: 'angels',
    name: 'Angels',
    summary:
      'Angels are spiritual beings created by God to serve him and carry out his purposes. The Greek angelos means "messenger," reflecting one of their primary roles. The Bible describes them as powerful messengers, warriors, worshippers, and guardians. Fallen angels (demons), led by Satan, actively oppose God\'s purposes and spiritual warfare is a present reality for believers.',
    keyVerses: ['Psalm 91:11', 'Hebrews 1:14', 'Luke 2:13', 'Revelation 5:11', 'Matthew 18:10'],
    keyPoints: [
      'Angels are created beings — not gods, not glorified humans, and not to be worshipped (Colossians 2:18).',
      'They serve as ministers of God on behalf of believers (Hebrews 1:14).',
      'Scripture distinguishes between holy angels (who worship and serve God) and fallen angels (demons who oppose him).',
      'Satan is presented as a created angel who fell through pride (Isaiah 14, Ezekiel 28).',
    ],
  },
  {
    id: 'spiritual-gifts',
    name: 'Spiritual Gifts',
    summary:
      'Spiritual gifts are supernatural abilities granted by the Holy Spirit to believers for building up the church (1 Corinthians 12:7). The New Testament lists a variety of gifts including prophecy, teaching, mercy, administration, healing, and tongues. Christians disagree about whether certain miraculous gifts ceased with the apostolic age (cessationism) or continue today (continuationism).',
    keyVerses: ['1 Corinthians 12:7', 'Romans 12:6', 'Ephesians 4:11', '1 Peter 4:10', '1 Corinthians 14:12'],
    keyPoints: [
      'Every believer has at least one spiritual gift; no one has all of them.',
      'Gifts are given to serve others and build up the church — not for personal prestige.',
      'Two major positions: cessationism (sign gifts ended with the apostles) vs. continuationism (all gifts continue).',
      'Love is the context in which all gifts must operate — 1 Corinthians 13 sits between the two gifts chapters deliberately.',
    ],
  },
  {
    id: 'humility',
    name: 'Humility',
    summary:
      'Humility is a consistently commended virtue throughout both Testaments and is modeled supremely by Jesus, who "humbled himself" in the Incarnation and on the cross (Philippians 2:5–8). Biblical humility is not self-deprecation or low self-esteem but an accurate assessment of oneself before God — free from pride and self-seeking. Scripture consistently describes God opposing the proud and giving grace to the humble.',
    keyVerses: ['Philippians 2:5', 'James 4:6', 'Proverbs 11:2', 'Micah 6:8', 'Matthew 23:12'],
    keyPoints: [
      'Jesus is the supreme model of humility — the eternal Son took on human flesh and died a criminal\'s death.',
      'Pride is one of the most consistently condemned attitudes in Scripture (Proverbs 6:16–17).',
      '"God opposes the proud but gives grace to the humble" is quoted both in James 4:6 and 1 Peter 5:5.',
      'True humility is not thinking less of yourself but thinking of yourself less — attention directed toward God and others.',
    ],
  },
  {
    id: 'prophecy',
    name: 'Prophecy',
    summary:
      'Biblical prophecy is primarily the proclamation of God\'s word — his purposes, warnings, and promises — in response to the situation of his people, and not merely prediction of the future. Old Testament prophets called Israel back to covenant faithfulness. New Testament prophecy builds up, encourages, and comforts the church (1 Corinthians 14:3). About a third of the Bible is prophetic literature.',
    keyVerses: ['2 Peter 1:20', '1 Corinthians 14:3', 'Amos 3:7', 'Deuteronomy 18:22', 'Revelation 19:10'],
    keyPoints: [
      'Prophecy is first and foremost proclamation of God\'s word — "forth-telling" as much as "fore-telling."',
      'The OT prophets\' primary role was calling the people back to covenant faithfulness, not predicting the future.',
      'NT prophecy is characterized by edification, exhortation, and comfort (1 Corinthians 14:3).',
      'The spirit of prophecy is the testimony of Jesus (Revelation 19:10) — all prophecy ultimately points to him.',
    ],
  },
];
