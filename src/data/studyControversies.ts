export interface ControversyPosition {
  label: string;
  summary: string;
}

export interface BibleControversy {
  id: string;
  title: string;
  era: string;
  keyVerses: string[];
  background: string;
  positions: ControversyPosition[];
  keyFacts: string[];
}

export const BIBLE_CONTROVERSIES: BibleControversy[] = [
  {
    id: 'calvinism-arminianism',
    title: 'Calvinism vs. Arminianism',
    era: '17th century – present',
    keyVerses: ['Romans 8:29', 'Romans 9:15', 'Ephesians 1:4', 'John 6:37', '1 Timothy 2:4', '2 Peter 3:9', 'Hebrews 6:4', 'John 10:28'],
    background: 'One of the most enduring and vigorously contested divisions in Protestant Christianity. The dispute centers on the relationship between God\'s absolute sovereignty and genuine human freedom in salvation. John Calvin\'s theology, developed in 16th-century Geneva, taught that God unconditionally elects specific individuals for salvation before time began. Jacob Arminius (1560–1609), a Dutch Reformed theologian, challenged this, arguing that divine election was based on God\'s foreknowledge of who would freely choose to believe. After Arminius died, his followers published the Remonstrance (1610), which provoked the Synod of Dort (1618–19), whose five-point response became known by the acronym TULIP. The debate is not merely academic — it shapes how Christians pray, evangelize, understand assurance, and view the purpose of suffering.',
    positions: [
      {
        label: 'Calvinist',
        summary: 'God unconditionally elects specific individuals for salvation before creation, based solely on his sovereign will. Christ\'s atonement was definitively intended for the elect alone. The Holy Spirit irresistibly regenerates the elect and brings them to saving faith. True believers are preserved by God\'s power and will certainly persevere to final salvation. Common in Reformed, Presbyterian, and many Baptist traditions.',
      },
      {
        label: 'Arminian',
        summary: 'God foreknows who will freely choose to believe and elects on the basis of that foreknowledge. Christ died for all people without exception, making salvation genuinely available to everyone. The Holy Spirit enables all people to respond to the gospel but does not override genuine free will. Believers may, through persistent willful unbelief, ultimately fall away from salvation. Common in Methodist, Wesleyan, and Pentecostal traditions.',
      },
      {
        label: 'Molinist',
        summary: 'A middle position developed by Jesuit theologian Luis de Molina. God possesses "middle knowledge" — knowledge of what any free creature would do in any circumstance. Using this, God orchestrates history to accomplish his purposes through genuinely free choices, without either coercing the will or being dependent on mere foreknowledge. Attempts to fully preserve both divine sovereignty and genuine human freedom.',
      },
      {
        label: 'Other positions',
        summary: 'Amyraldism (4-Point Calvinism) accepts all of TULIP except limited atonement, holding that Christ died for all but the Spirit is only given to the elect. Open Theism holds that God genuinely does not know future free choices, allowing maximal freedom but raising questions about divine omniscience. Both are minority views.',
      },
    ],
    keyFacts: [
      'The ultimate root of this debate is the 5th-century conflict between Augustine (who emphasized sovereign grace) and Pelagius (who affirmed human free will), with the church formally condemning Pelagianism.',
      'TULIP (Total depravity, Unconditional election, Limited atonement, Irresistible grace, Perseverance of the saints) was not coined by Calvin himself — it emerged as a summary of the Synod of Dort\'s five responses to the Arminian Remonstrance.',
      'Both sides fully agree on justification by faith alone, the authority of Scripture, the necessity of Christ\'s atonement, and the reality of human sin.',
      'Most Protestant denominations reflect one tradition — Reformed and Presbyterian churches are broadly Calvinist; Methodist, Wesleyan, and Assemblies of God churches are broadly Arminian; many Baptist churches are internally divided.',
      'George Whitefield (Calvinist) and John Wesley (Arminian) were close friends and co-leaders of the 18th-century revival movement despite their sharp disagreement on these very points.',
    ],
  },
  {
    id: 'biblical-canon',
    title: 'The Biblical Canon',
    era: '2nd–4th century AD (ongoing)',
    keyVerses: ['2 Timothy 3:16', '2 Peter 1:20', '2 Peter 3:15', 'Revelation 22:18'],
    background: 'The word "canon" (from the Greek kanon, "measuring stick" or "rule") refers to the collection of books recognized as authoritative Scripture. The process by which the 66 books of the Protestant Bible came to be recognized was long, gradual, and sometimes contentious. The Hebrew Bible\'s contents were broadly settled among Jews by the 1st century AD, though the status of certain books (Esther, Ecclesiastes, Song of Solomon) was debated by some rabbis. The New Testament canon took longer — the first list matching today\'s 27 NT books appears in Athanasius\'s Easter Letter of AD 367, and the Council of Carthage (397) confirmed this list. The Roman Catholic and Eastern Orthodox churches include additional books (the Deuterocanon or Apocrypha) that Protestants do not regard as canonical. The question of how the canon was formed — by divine providence, church authority, or human politics — remains a live debate between traditions.',
    positions: [
      {
        label: 'Protestant',
        summary: 'The canon consists of 39 OT books and 27 NT books. The Apocrypha has historical value but is not Scripture. The church recognized (rather than created) the canon — the books carried intrinsic authority because of their apostolic origin, their widespread use across churches, and their theological consistency with established doctrine. Luther challenged the canonicity of Hebrews, James, Jude, and Revelation but ultimately retained them.',
      },
      {
        label: 'Roman Catholic',
        summary: 'Includes the seven Deuterocanonical books (Tobit, Judith, 1–2 Maccabees, Wisdom of Solomon, Sirach, Baruch) as part of the Old Testament. The Council of Trent (1546) formally defined these as canonical in response to the Reformation. The Church\'s authority to define the canon is part of the argument for including them.',
      },
      {
        label: 'Eastern Orthodox',
        summary: 'Generally accepts an expanded canon similar to the Catholic Deuterocanon, though different Orthodox churches have slightly varying lists. Church councils and tradition guide the determination of canonical status.',
      },
      {
        label: 'Critical / Historical',
        summary: 'Many critical scholars view the canon as a human historical process driven by theological and political forces — powerful bishops in the 2nd–4th centuries established orthodoxy by marginalizing texts they disagreed with. Alternative texts like the Gnostic Gospels had equal or greater claim to authenticity. The "closure" of the canon represented a power move by proto-orthodox Christianity.',
      },
    ],
    keyFacts: [
      'Criteria used by early churches to evaluate books included: apostolic authorship or direct association, consistent use across multiple churches, conformity with the rule of faith, and spiritual quality.',
      'The Muratorian Fragment (c. AD 170–200) is one of the earliest known NT canon lists, already accepting most of the books we have today.',
      'Martin Luther famously called James "an epistle of straw" and questioned Hebrews, Jude, and Revelation — he placed them in an appendix in his German Bible translation.',
      'The Dead Sea Scrolls (discovered 1947) contain fragments of every OT book except Esther, confirming the remarkable stability of the Hebrew text and its widespread authority.',
      'No church council "created" the canon in the sense of selecting from an open field — the councils largely ratified what was already in widespread, established use across the churches.',
    ],
  },
  {
    id: 'trinity-nature-of-christ',
    title: 'The Nature of Christ and the Trinity',
    era: '2nd–5th century AD',
    keyVerses: ['John 1:1', 'John 10:30', 'Colossians 1:15', 'Philippians 2:6', 'Hebrews 1:3', 'Isaiah 9:6', 'Matthew 28:19'],
    background: 'One of the most consequential theological controversies in all of Christian history. The central question: was Jesus Christ fully divine, fully human, or some mixture? In the early 4th century, an Alexandrian priest named Arius began teaching that the Son of God was a created being — the first and greatest of God\'s creatures, but not co-eternal or co-equal with the Father. His slogan was "there was a time when he was not." This view became enormously popular, partly because it seemed to make monotheism simpler. Emperor Constantine convened the Council of Nicaea (325) to resolve the dispute. The council condemned Arianism and produced the Nicene Creed — affirming the Son is "of the same substance" (homoousios) as the Father. The controversy continued for decades. Nicene orthodoxy eventually prevailed at the Council of Constantinople (381), and the full doctrine of two natures in one person was finalized at Chalcedon (451).',
    positions: [
      {
        label: 'Nicene Orthodoxy (Trinitarian)',
        summary: 'The Trinity consists of three fully divine persons — Father, Son, and Holy Spirit — sharing one divine nature or substance (Greek: ousia). Jesus is fully God and fully human, with two complete natures united in one person without confusion, change, division, or separation (Council of Chalcedon, 451). This is the position of Catholic, Orthodox, and most Protestant churches.',
      },
      {
        label: 'Arianism',
        summary: 'The Son is the first and greatest creature of the Father — not co-eternal, not of the same substance, but subordinate and created. Today\'s Jehovah\'s Witnesses hold a modified Arian view, translating John 1:1 as "the Word was a god" to support this position.',
      },
      {
        label: 'Modalism (Oneness)',
        summary: 'Father, Son, and Holy Spirit are not three distinct persons but three modes, roles, or manifestations of one divine person. There is no eternal personal distinction within God — "Father" refers to God in his transcendence, "Son" to God incarnate, "Spirit" to God\'s activity. Held by some Oneness Pentecostal denominations. Condemned as Sabellanism by early councils.',
      },
      {
        label: 'Subordinationism',
        summary: 'The Son and Spirit are genuinely divine but subordinate to the Father in nature, not just in role. Various forms existed in the early church. Distinct from the orthodox position that the Son is voluntarily subordinate in his incarnate role while remaining equal in nature.',
      },
    ],
    keyFacts: [
      'The term "Trinity" (Latin: Trinitas) does not appear in the Bible — it was coined by Tertullian around AD 200 to describe what he saw as the clear teaching of Scripture.',
      'Arianism nearly won — at one point a majority of Eastern bishops had signed Arian or semi-Arian creeds, leading Jerome to write that "the world woke up and groaned to find itself Arian."',
      'Athanasius of Alexandria stood almost alone against imperial and ecclesiastical pressure for decades defending Nicene orthodoxy, being exiled five times — giving rise to the phrase "Athanasius contra mundum" (against the world).',
      'The Nicene Creed (finalized 381 at Constantinople) is the most widely accepted theological statement in all of Christianity, affirmed by Catholic, Orthodox, and most Protestant churches.',
      'Chalcedon\'s definition (451) — "truly God and truly man… without confusion, without change, without division, without separation" — is still the standard Christological formula in mainstream Christianity.',
    ],
  },
  {
    id: 'baptism',
    title: 'Baptism — Mode and Meaning',
    era: 'Reformation era – present',
    keyVerses: ['Matthew 28:19', 'Acts 2:38', 'Romans 6:3', 'Colossians 2:12', 'Acts 16:15', '1 Peter 3:21'],
    background: 'Christians agree that baptism is commanded and deeply significant, but disagree profoundly on two questions: (1) Who should be baptized — infants or only professing believers? and (2) How should it be administered — by immersion, pouring, or sprinkling? These are not merely ceremonial preferences — they reflect deeper theological disagreements about the nature of grace, the definition of the church, and the relationship between the old and new covenants. The debate between paedobaptism (infant baptism) and credobaptism (believer\'s baptism) was one of the defining disputes of the Reformation, with Anabaptists insisting on believer\'s baptism while Luther and Calvin retained infant baptism from the Catholic tradition. The Anabaptists were severely persecuted by both Catholics and Protestant reformers for this position.',
    positions: [
      {
        label: 'Paedobaptism (Infant Baptism)',
        summary: 'Practiced by Catholics, Orthodox, Lutherans, Anglicans, Presbyterians, and Reformed churches. Baptism is the covenant sign of the new covenant, corresponding to circumcision in the old covenant (Colossians 2:11–12). Infants of believers belong to the covenant community and should receive its initiatory sign. Some (Catholics, Lutherans) hold that baptism conveys regenerating grace; others (Presbyterians) see it as a sign and seal without automatically conveying grace.',
      },
      {
        label: 'Credobaptism (Believer\'s Baptism)',
        summary: 'Practiced by Baptists, Anabaptists, and most evangelical free churches. Baptism is for those who have personally and consciously professed faith in Christ. It is an outward declaration of an inward reality that has already occurred — not a means of grace but a public testimony. Baptizing infants confuses the sign with the reality and obscures the distinction between the covenant community and the regenerate.',
      },
      {
        label: 'Immersion Only',
        summary: 'Most Baptists and some others hold that the Greek word baptizo means "to immerse" and that the mode is not incidental — it symbolizes burial and resurrection with Christ (Romans 6:3–4). Pouring or sprinkling water does not capture this meaning. Many credobaptist churches require immersion; some paedobaptist churches also practice immersion.',
      },
      {
        label: 'Baptismal Regeneration',
        summary: 'Held by Catholics, Orthodox, and some Lutherans: baptism itself is the ordinary means by which God grants the new birth. It is not merely a symbol but an effective sacrament. The water is the instrument through which the Holy Spirit works regeneration. Protestants broadly reject this, distinguishing the sign from the thing signified.',
      },
    ],
    keyFacts: [
      'The Greek word baptizo (βαπτίζω) most naturally means "immerse" or "dip," though some scholars argue it carried a broader sense of "wash" or "apply water" in certain contexts.',
      'Infant baptism is first clearly attested in Christian writing by Origen (c. 185–254 AD), who regarded it as an apostolic tradition.',
      'The Anabaptists (literally "re-baptizers") were so named because they baptized adults who had been baptized as infants — they rejected infant baptism as invalid. Both Catholic and Protestant authorities executed Anabaptists for this in the 16th century.',
      'Some denominations practice both infant dedication and believer\'s baptism, allowing families to choose.',
      'The question of what baptism does — whether it symbolizes grace, seals grace, or conveys grace — is as contested as the question of who should receive it.',
    ],
  },
  {
    id: 'cessationism-continuationism',
    title: 'Cessationism vs. Continuationism',
    era: '20th century – present',
    keyVerses: ['1 Corinthians 12:7', '1 Corinthians 13:9', 'Acts 2:17', 'Hebrews 2:3', 'Ephesians 2:20', 'Joel 2:28'],
    background: 'Do the miraculous spiritual gifts described in the New Testament — speaking in tongues, prophecy, healing, words of knowledge, and miracles — continue to operate in the church today, or did they cease with the death of the apostles and the completion of the New Testament? This debate intensified dramatically with the rise of Pentecostalism (beginning at the Azusa Street Revival in Los Angeles in 1906) and the spread of the charismatic movement through mainline denominations in the 1960s. It touches fundamental questions about how God continues to act in the world today and what authority the direct experience of the Spirit carries in relation to Scripture.',
    positions: [
      {
        label: 'Cessationist',
        summary: 'The miraculous gifts of the Spirit were given specifically to authenticate the apostles and the founding message of the church. They served as "sign gifts" for the foundational period. Once the New Testament canon was complete and the apostolic generation passed, these gifts ceased. This view is common in Reformed, many Southern Baptist, and some evangelical traditions, and was advocated strongly by B.B. Warfield.',
      },
      {
        label: 'Continuationist',
        summary: 'All the gifts listed in the New Testament continue to operate today through the Holy Spirit. There is no exegetical basis for distinguishing "foundational" from "ongoing" gifts in the New Testament itself. The church continues to need and receive supernatural gifts. This is the view of Pentecostal, charismatic, and many non-denominational evangelical churches.',
      },
      {
        label: 'Open but Cautious',
        summary: 'A middle position common among Reformed charismatics and some evangelicals (Wayne Grudem, John Piper). God can and does give miraculous gifts today, but current manifestations may operate differently from their New Testament forms and require careful discernment and testing. Enthusiastic about the Spirit\'s work while deeply skeptical of many popular charismatic excesses.',
      },
    ],
    keyFacts: [
      'The primary cessationist proof text is 1 Corinthians 13:10 ("when the perfect comes, the partial will pass away") — cessationists argue "the perfect" refers to the completed canon; continuationists argue it refers to Christ\'s return or the eternal state.',
      'Pentecostalism is the fastest-growing Christian movement in the world, now numbering over 600 million adherents globally, almost entirely in the Global South.',
      'Many cessationists point to the apparent absence of tongue-speaking and prophecy in the mainstream church fathers between the 2nd and 19th centuries as evidence that the gifts ceased early.',
      'Continuationists respond that the gifts continued in various revival movements throughout church history, and that arguments from silence are weak.',
      'The debate also raises the question of canon: if God still gives authoritative prophetic words today, what is the relationship of those words to the finality of Scripture?',
    ],
  },
  {
    id: 'women-in-ministry',
    title: 'The Role of Women in Church Leadership',
    era: '1960s – present',
    keyVerses: ['Galatians 3:28', '1 Timothy 2:11', '1 Corinthians 14:34', 'Romans 16:1', 'Acts 2:17', 'Ephesians 5:22'],
    background: 'One of the most contentious and culturally charged debates in contemporary Christianity. The core question: does the New Testament permanently prohibit women from preaching to or exercising authority over men, or were those texts addressing specific cultural situations that do not bind the church in every age? The debate involves hermeneutics — how to interpret culturally embedded texts — the meaning of specific Greek words, the role of the broader narrative of Scripture, and competing theological frameworks about gender, equality, and God-designed roles. It has divided families of denominations and led to formal splits in several major ecclesiastical bodies.',
    positions: [
      {
        label: 'Complementarianism',
        summary: 'Men and women are equal in dignity, worth, and spiritual standing before God but have complementary rather than identical roles. In both the home and the church, men are called to exercise a particular form of servant leadership. Women should not preach to or exercise primary authority over men in a congregational setting. This is grounded primarily in 1 Timothy 2:11–14 and the creation order argument Paul makes there. Common in Southern Baptist, Reformed, and many evangelical churches.',
      },
      {
        label: 'Egalitarianism',
        summary: 'The New Testament passages restricting women\'s roles were addressing specific local cultural situations — chaotic worship in Corinth, false teaching in Ephesus — not establishing universal patterns for all churches in all times. Galatians 3:28, the prominent women in Paul\'s ministry (Phoebe, Junia, Priscilla), and the outpouring of prophecy on sons and daughters (Acts 2:17) demonstrate that women can and should hold all leadership roles. Common in Anglican, Methodist, many Baptist, and most mainline denominations.',
      },
      {
        label: 'Soft Complementarianism',
        summary: 'A mediating position: women can preach, teach, lead worship, and hold significant ministry roles, but the office of senior elder or lead pastor is reserved for men. Acknowledges the cultural complexity of the relevant texts while maintaining some gender distinction in the highest level of church authority.',
      },
    ],
    keyFacts: [
      'Junia (Romans 16:7), described by Paul as "outstanding among the apostles," is almost certainly a woman — her name was changed to the male "Junias" in some manuscripts and translations before being restored in modern critical editions.',
      'The Greek word authentein (1 Timothy 2:12, translated "to have authority") appears only once in the entire New Testament; its exact meaning in first-century Greek is disputed among lexicographers.',
      'Phoebe (Romans 16:1) is called both a diakonos (deacon/minister) and a prostatis (patron/leader) of the church at Cenchreae — she is the most likely bearer of Paul\'s letter to Rome.',
      'Many major denominations changed their position on women\'s ordination in the 20th century, including Anglicans (1994, some provinces), Presbyterians (PCUSA, 1956), and Lutherans (ELCA, 1970).',
      'The Southern Baptist Convention (the largest Protestant denomination in the US) amended its statement of faith in 2000 to explicitly restrict the office of pastor to men; the Cooperative Baptist Fellowship, formed partly over this issue, takes the egalitarian position.',
    ],
  },
  {
    id: 'young-earth-old-earth',
    title: 'Young Earth vs. Old Earth Creationism',
    era: '19th century – present',
    keyVerses: ['Genesis 1:1', 'Exodus 20:11', 'Psalm 90:4', '2 Peter 3:8', 'Romans 5:12', 'Hebrews 11:3'],
    background: 'How does the creation account in Genesis 1–2 relate to modern scientific findings about the age of the earth and the development of life? The natural sciences — through radiometric dating, stellar astronomy, geology, and genetics — consistently estimate the universe at approximately 13.8 billion years old and the earth at 4.5 billion years old. Young Earth Creationists argue the Genesis text, read literally, teaches a six-day creation approximately 6,000–10,000 years ago, and that apparent scientific evidence for great age reflects misinterpretation of data or the effects of a global flood. This debate is as much about biblical hermeneutics as it is about science.',
    positions: [
      {
        label: 'Young Earth Creationism (YEC)',
        summary: 'Genesis 1\'s "days" are literal 24-hour periods, and the genealogies of Genesis 5 and 11 yield a creation date of approximately 6,000–10,000 years ago. Noah\'s flood was global and catastrophic, accounting for most of the fossil record and sedimentary rock layers. Scientific dating methods rest on assumptions about initial conditions that may be wrong. Organizations like Answers in Genesis and the Institute for Creation Research represent this view.',
      },
      {
        label: 'Old Earth Creationism (OEC)',
        summary: 'The earth and universe are genuinely ancient, as science indicates. Genesis\'s "days" may be long ages (Day-Age view) or there may be a gap between Genesis 1:1 and 1:2 representing an ancient creation followed by re-formation. God supernaturally created distinct forms of life, particularly humanity, without macro-evolution. Hugh Ross and the Reasons to Believe ministry represent this view.',
      },
      {
        label: 'Framework / Literary View',
        summary: 'Genesis 1 is intentional literary architecture expressing theological truth about who created and why, not a chronological scientific account. The six days are arranged into two parallel panels (days 1–3: forming; days 4–6: filling) as a theological framework. Held by many Reformed scholars, including Meredith Kline.',
      },
      {
        label: 'Evolutionary Creationism (BioLogos)',
        summary: 'God created the universe and life through evolutionary processes over billions of years. Genesis is inspired theological literature conveying truth about God as creator without being a scientific account. Humanity is specially created in God\'s image, possibly through a historical couple within an evolving human population. Francis Collins, N.T. Wright, and the BioLogos Foundation represent this view.',
      },
    ],
    keyFacts: [
      'Young Earth Creationism as an organized modern movement is largely a 20th-century development, tracing to Henry Morris and John Whitcomb\'s "The Genesis Flood" (1961) — most earlier fundamentalists accepted an old earth.',
      'Most church fathers and medieval theologians did not read Genesis 1 with strict 24-hour literalism — Augustine argued the "days" were literary, not temporal, as early as AD 400.',
      'The key theological concern for YEC is the link between death and the Fall: if animals experienced death for billions of years before humans, how is death a consequence of human sin?',
      'The Catholic Church, the Church of England, most mainline Protestant denominations, and many evangelical scholars accept the scientific evidence for an old earth and evolutionary common descent.',
      'Regardless of position on the age of the earth, all orthodox Christian views affirm that God is the creator of the universe and humanity, that creation is good, and that humans bear the unique image of God.',
    ],
  },
  {
    id: 'eternal-security',
    title: 'Eternal Security ("Once Saved Always Saved")',
    era: 'Reformation era – present',
    keyVerses: ['John 10:28', 'Romans 8:38', 'Philippians 1:6', '1 John 2:19', 'Hebrews 6:4', 'Hebrews 10:26', 'Matthew 24:13'],
    background: 'Can a genuine Christian lose their salvation? This question divides evangelical Christianity almost as sharply as the Calvinism vs. Arminianism dispute — to which it is theologically closely linked. The doctrine of "eternal security" or "the perseverance of the saints" holds that those whom God has genuinely regenerated will certainly be preserved by his power to final salvation. The Arminian and Wesleyan position holds that genuine believers can, through persistent unbelief or willful apostasy, fall away from saving grace and be lost. The debate centers on specific New Testament warning passages and on the nature of God\'s preserving grace.',
    positions: [
      {
        label: 'Eternal Security / Perseverance of the Saints',
        summary: 'God\'s sovereign, preserving grace ensures that those he has genuinely regenerated will persevere in faith to the end. Those who appear to "fall away" were never genuinely saved — they had an external association with the faith but not the inward reality (1 John 2:19). The New Testament warnings are either addressed to those who were never truly converted, or are the very means by which God preserves his people. Associated with Calvinist, Reformed, and most Baptist traditions.',
      },
      {
        label: 'Conditional Security (Arminian)',
        summary: 'True believers can apostatize and lose their salvation through persistent willful unbelief. The many NT warning passages (Hebrews 6:4–6, 10:26–31, Galatians 5:4, Revelation 3:5) are genuine warnings to genuine believers about a real possibility, not hypothetical cases addressing false converts. Assurance is possible but conditional on continuing in faith. Associated with Wesleyan, Methodist, and Arminian Baptist traditions.',
      },
      {
        label: '"Carnal Christian" View',
        summary: 'A minority position holding that a person can be genuinely saved but live entirely like an unbeliever — even denying Christ — for the rest of their life and still be saved at death. Salvation is absolutely separated from subsequent conduct and belief. Broadly rejected as antinomian even by most eternal security advocates.',
      },
    ],
    keyFacts: [
      'The phrase "once saved always saved" is a popular simplification — Calvinist theologians prefer "perseverance of the saints" because it emphasizes that genuine believers will persevere in faith and repentance, not that they can live however they wish.',
      'Hebrews 6:4–6 ("it is impossible for those who have once been enlightened… to be brought back to repentance") is one of the most intensely debated passages in all of NT theology — both sides have elaborate explanations of it.',
      'The Calvinist reading of 1 John 2:19 ("they went out from us, but they did not really belong to us") is central to the eternal security case — apostates were never truly regenerated.',
      'Both sides agree that a life showing no fruit of regeneration is not genuine saving faith, and that presuming on salvation without any evidence of transformation is spiritually dangerous.',
      'The debate is ultimately tied to the Calvinist/Arminian disagreement: if God sovereignly and irresistibly regenerates the elect, their perseverance follows logically; if conversion involves genuine free response, it can be freely reversed.',
    ],
  },
  {
    id: 'eschatology',
    title: 'End Times Eschatology',
    era: '19th century – present (dispensationalism); earlier centuries for other views',
    keyVerses: ['Revelation 20:1', '1 Thessalonians 4:16', 'Matthew 24:30', 'Daniel 9:24', '2 Peter 3:10', '1 Corinthians 15:23'],
    background: 'Christian eschatology — the study of last things — encompasses questions about the second coming of Christ, the nature of the "millennium" (the 1,000-year reign mentioned in Revelation 20), the timing of a "rapture," the tribulation, the final judgment, and the eternal state. These topics have generated multiple competing interpretive systems and have profoundly shaped popular Christian culture, particularly through the Left Behind book series (65 million copies sold). The major systems differ significantly in how they read Old Testament prophecy, how literally they interpret apocalyptic language, and whether the church and Israel are treated as distinct peoples of God.',
    positions: [
      {
        label: 'Dispensational Premillennialism',
        summary: 'A "secret rapture" will remove the church before a 7-year period of tribulation, after which Christ returns visibly to reign on earth for a literal 1,000 years before the final judgment. Israel and the church are distinct peoples of God with distinct prophetic destinies. Old Testament prophecies about Israel are fulfilled literally in the end times. Systematized by John Nelson Darby in the 1830s; popularized by the Scofield Reference Bible and the Left Behind series.',
      },
      {
        label: 'Historic Premillennialism',
        summary: 'Christ will return before a literal millennium, but there is no pre-tribulation rapture — the church goes through tribulation and is taken up at Christ\'s visible return. Less systematic than dispensationalism and more fluid about how OT prophecy is fulfilled. An ancient view held by some early church fathers including Irenaeus.',
      },
      {
        label: 'Amillennialism',
        summary: 'The "millennium" of Revelation 20 is symbolic, representing the entire church age from Christ\'s resurrection to his return. Satan is currently bound (not literally chained, but restrained from deceiving nations as he once did). Christ reigns now from heaven through the church. He will return once at the end of history to raise the dead and judge all people. Held by most Reformed, Lutheran, and many Anglican theologians. The dominant view for most of church history.',
      },
      {
        label: 'Postmillennialism',
        summary: 'The gospel will gradually transform society until the world becomes largely Christianized, after which Christ returns to a world already experiencing kingdom-like conditions. Popular in the Puritan era; revived by theonomy and Christian nationalist movements today.',
      },
    ],
    keyFacts: [
      'The word "rapture" does not appear in English Bibles — it comes from the Latin rapturo (to be caught up), translating 1 Thessalonians 4:17. The concept of a pre-tribulation rapture distinct from the second coming was largely systematized by John Nelson Darby in the 1830s.',
      'Amillennialism was the dominant view for most of church history, held by Augustine, Luther, Calvin, and most Reformed and Lutheran confessions — it is not a liberal position.',
      'The book of Revelation has been interpreted through four main approaches: Preterist (fulfilled largely in AD 70), Historicist (maps to church history), Idealist (timeless spiritual warfare symbolism), and Futurist (literal future events still to come).',
      'All major eschatological positions agree: Christ will return visibly and bodily, there will be a final resurrection of the dead, and God will judge the living and the dead.',
      'Interest in end-times prophecy has historically surged during times of crisis — the World Wars, the founding of the modern State of Israel (1948), and various geopolitical upheavals.',
    ],
  },
  {
    id: 'prosperity-gospel',
    title: 'The Prosperity Gospel',
    era: '20th century – present',
    keyVerses: ['3 John 1:2', 'Deuteronomy 28:1', 'Jeremiah 29:11', '2 Corinthians 12:9', 'Philippians 4:11', 'Hebrews 11:35', 'Matthew 6:19'],
    background: 'The prosperity gospel — also called the Word of Faith movement, health-and-wealth gospel, or name-it-and-claim-it theology — teaches that God desires all Christians to be physically healthy and financially wealthy, that poverty and sickness reflect insufficient faith, and that faithful giving to the church will be materially returned to the giver many times over. It traces to New Thought religious philosophy in the 19th century and the Faith movement of E.W. Kenyon and Kenneth Hagin in the 20th century. Prominent proponents include Kenneth Copeland, Joel Osteen, and Creflo Dollar. It is enormously influential in Global South Christianity and American televangelism, often targeting the poorest populations.',
    positions: [
      {
        label: 'Prosperity Gospel',
        summary: 'God\'s covenant promises in the Old Testament include material blessing as part of the atonement. Christ\'s work on the cross provided healing and prosperity — "by his stripes we are healed" applies to physical illness, and "the blessing of Abraham" includes financial wealth. Christians who exercise faith, confess positively, and give generously should expect and can demand health and wealth as their covenant right.',
      },
      {
        label: 'Mainstream Evangelical Critique',
        summary: 'The prosperity gospel distorts the heart of the gospel, promises what God has not promised, and leads to a transactional relationship with God. It exploits the poor by implying their suffering is their own fault. It selectively uses Scripture while ignoring the consistent biblical pattern: Jesus and the apostles were poor; Paul had a thorn in the flesh God did not remove; Hebrews 11 celebrates those who "did not receive what was promised" and "wandered in deserts."',
      },
      {
        label: 'Moderate / Partial Affirmation',
        summary: 'God does bless generosity and there are legitimate biblical promises of provision and care. Christians need not embrace poverty as spiritual virtue. But these truths fall far short of absolute guarantees of wealth, and physical suffering does not indicate spiritual failure — it may be God\'s instrument of growth.',
      },
    ],
    keyFacts: [
      'Proponents frequently cite 3 John 1:2 ("I pray that you may prosper in all things and be in health") as a universal promise — but this is a standard Greco-Roman letter greeting, like writing "Dear so-and-so, I hope you\'re well." It is not a theological declaration.',
      'Kenneth Hagin, often called the "father of the Word of Faith movement," developed his framework from E.W. Kenyon, who blended Christian Science and New Thought metaphysics with evangelical vocabulary.',
      'Several prominent prosperity gospel preachers faced a 2007 US Senate inquiry initiated by Senator Charles Grassley investigating their financial practices and tax-exempt status.',
      'The movement is rapidly growing in sub-Saharan Africa, Latin America, and Southeast Asia — often among the very people it promises to make wealthy.',
      'Virtually all major evangelical, Reformed, Catholic, and Orthodox theological bodies have formally condemned the prosperity gospel as a fundamental distortion of the Christian message.',
    ],
  },
];
