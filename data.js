// TODAYINDIALIVENEWS - Data Engine & Storage Management
// Specialized for Kanpur City & Uttar Pradesh Local News

const INITIAL_BREAKING_NEWS = [
    { text: "कानपुर: चुन्नीगंज से ट्रांसपोर्ट नगर तक मेट्रो अंडरग्राउंड ट्रायल सफल, सीएम जल्द कर सकते हैं लोकार्पण", priority: "high" },
    { text: "कानपुर: कल्याणपुर-पनकी रूट पर नया फोरलेन ओवरब्रिज स्वीकृत, भीषण जाम से मिलेगी राहत", priority: "normal" },
    { text: "कानपुर कमिश्नरेट पुलिस का ऑपरेशन 'क्लीन' - शहर के 15 शातिर अपराधी गिरफ्तार", priority: "normal" },
    { text: "गंगा बैराज पर जलस्तर सामान्य, सिंचाई विभाग ने जारी किया दैनिक अलर्ट बुलेटिन", priority: "normal" },
    { text: "कानपुर सेंट्रल से चलने वाली 4 मेमू ट्रेनों के समय में बदलाव, देखें पूरी समय-सारणी", priority: "normal" },
    { text: "कानपुर सर्राफा बाजार: 24 कैरेट सोना ₹72,450 प्रति 10 ग्राम, चांदी ₹84,200 प्रति किलो", priority: "normal" }
];

const INITIAL_ARTICLES = [
    {
        id: "kanpur-metro-phase2",
        title: "कानपुर मेट्रो का नया रूट तैयार: चुन्नीगंज से ट्रांसपोर्ट नगर तक जल्द दौड़ेगी ट्रेन, सीएम योगी कर सकते हैं उद्घाटन",
        summary: "कानपुर वासियों के लिए बड़ी खुशखबरी। कानपुर मेट्रो के अंडरग्राउंड कॉरिडोर का ट्रायल रन पूरा हो चुका है। जानिए किन-किन स्टेशनों पर मिलेगी सुविधा।",
        content: `कानपुर शहर में पब्लिक ट्रांसपोर्ट को विश्वस्तरीय बनाने की दिशा में एक और बड़ा मील का पत्थर हासिल हुआ है। कानपुर मेट्रो रेल परियोजना के तहत चुन्नीगंज से ट्रांसपोर्ट नगर तक के अंडरग्राउंड सेक्शन का सुरक्षा ऑडिट और लोड ट्रायल सफलतापूर्वक पूरा कर लिया गया है।

यूपीएमआरसी (UPMRC) के अधिकारियों के अनुसार, इस नए सेक्शन के शुरू होते ही शहर के व्यस्ततम बाजार- नवीन मार्केट, बड़ा चौराहा और फूलबाग सीधे मेट्रो नेटवर्क से जुड़ जाएंगे। इससे घंटाघर और जीटी रोड पर रोजाना लगने वाले भीषण ट्रैफिक जाम से आम जनता को भारी राहत मिलेगी।

मुख्य विशेषताएं:
- चुन्नीगंज, नवीन मार्केट, बड़ा चौराहा और नयागंज भूमिगत स्टेशन पूरी तरह तैयार।
- अत्याधुनिक स्वचालित टिकट वेंडिंग मशीनें और क्यूआर कोड टिकटिंग।
- दिव्यांगों और बुजुर्गों के लिए विशेष लिफ्ट और एस्केलेटर।
- कमिश्नर ऑफ मेट्रो रेलवे सेफ्टी (CMRS) का अंतिम निरीक्षण अगले सप्ताह प्रस्तावित है।`,
        category: "kanpur",
        categoryName: "हमारा कानपुर",
        subLocation: "बड़ा चौराहा / चुन्नीगंज",
        author: "दीपक राजपूत (प्रधान संपादक)",
        status: "published",
        date: "6 सितंबर 2026",
        time: "11:45 AM",
        views: 4520,
        shares: 890,
        isBreaking: true,
        isHero: true,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&auto=format&fit=crop&q=80",
        tags: ["KanpurMetro", "KanpurNews", "UPMRC", "SmartCity"]
    },
    {
        id: "kanpur-crime-cyber-cell",
        title: "कानपुर में डिजिटल अरेस्ट का भंडाफोड़: सिविल लाइंस के कारोबारी से 45 लाख ठगने वाला अंतरराज्यीय गिरोह पकड़ाया",
        summary: "साइबर सेल और कोतवाली पुलिस की संयुक्त कार्रवाई। फर्जी सीबीआई और ट्राई अफसर बनकर लोगों को डराने वाले 4 साइबर ठग गिरफ्तार।",
        content: `कानपुर नगर कमिश्नरेट की साइबर क्राइम थाना पुलिस ने एक बड़ी कामयाबी हासिल करते हुए 'डिजिटल अरेस्ट' के नाम पर करोड़ों की ठगी करने वाले गिरोह का पर्दाफाश किया है। इस गिरोह ने सिविल लाइंस निवासी एक प्रतिष्ठित चमड़ा कारोबारी को 72 घंटे तक डिजिटल अरेस्ट रखकर 45 लाख रुपये ऐंठ लिए थे।

डीसीपी क्राइम के अनुसार, आरोपियों के पास से 12 मोबाइल फोन, 24 एक्टिव बैंक पासबुक, 8 चेकबुक और ₹18.5 लाख की नकदी बरामद की गई है। आरोपी कंबोडिया और थाईलैंड में बैठे मुख्य सरगनाओं के संपर्क में थे।

पुलिस कमिश्नर की कानपुर वासियों से अपील:
- पुलिस या जांच एजेंसियां कभी भी वीडियो कॉल पर 'डिजिटल अरेस्ट' नहीं करती हैं।
- किसी भी संदिग्ध कॉल आने पर तुरंत 1930 साइबर हेल्पलाइन या नजदीकी थाने पर संपर्क करें।`,
        category: "crime",
        categoryName: "अपराध",
        subLocation: "सिविल लाइंस",
        author: "राजेश वर्मा (क्राइम रिपोर्टर)",
        status: "published",
        date: "6 सितंबर 2026",
        time: "10:15 AM",
        views: 3180,
        shares: 640,
        isBreaking: true,
        isHero: false,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
        tags: ["CyberCrime", "KanpurPolice", "DigitalArrest"]
    },
    {
        id: "kanpur-mandi-bhav-today",
        title: "कानपुर गल्ला मंडी व सर्राफा अपडेट: चकरपुर मंडी में गेहूं-दलहन के ताज़ा भाव, सोने में हल्की गिरावट",
        summary: "चकरपुर और नौबस्ता मंडी में आज नई आवक के साथ दलहन की कीमतों में स्थिरता देखी गई। जानिए आज के थोक और फुटकर भाव।",
        content: `उत्तर प्रदेश की सबसे प्रमुख व्यापारिक मंडियों में शुमार कानपुर की चकरपुर गल्ला मंडी में आज नए कृषि जिंसों के भाव स्थिर दर्ज किए गए। दाल मिल एसोसिएशन के अनुसार त्यौहारों के मद्देनजर मांग में तेजी देखी जा रही है।

आज के मुख्य थोक भाव (प्रति कुंतल):
- गेहूं (दड़ा): ₹2,420 - ₹2,510
- चना (देसी): ₹6,800 - ₹7,050
- अरहर (तुअर दाल): ₹11,200 - ₹11,800
- सरसों तेल मिल डिलीवरी: ₹135 प्रति लीटर

सर्राफा बाजार कानपुर:
- 24 कैरेट शुद्ध सोना: ₹72,450 प्रति 10 ग्राम (₹180 की गिरावट)
- चांदी (सफेद): ₹84,200 प्रति किलोग्राम`,
        category: "business",
        categoryName: "व्यापार / मंडी",
        subLocation: "चकरपुर मंडी",
        author: "संजय गुप्ता (व्यापार डेस्क)",
        status: "published",
        date: "6 सितंबर 2026",
        time: "09:30 AM",
        views: 2840,
        shares: 410,
        isBreaking: false,
        isHero: false,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&auto=format&fit=crop&q=80",
        tags: ["MandiBhav", "KanpurMandi", "GoldSilverRate"]
    },
    {
        id: "kanpur-ganga-ghat-cleanliness",
        title: "सरसैया घाट और बिठूर में 'स्वच्छ गंगा अभियान': घाटों पर विशेष सेल्फी प्वॉयंट और वाटर स्पोर्ट्स की शुरुआत",
        summary: "कानपुर नगर निगम और नमामि गंगे की संयुक्त पहल। ऐतिहासिक बिठूर और सरसैया घाट पर पर्यटकों के लिए ई-बोटिंग और लाइट शो शुरू।",
        content: `धार्मिक और ऐतिहासिक नगरी कानपुर में गंगा तटों को पर्यटन स्थल के रूप में विकसित करने की दिशा में नगर निगम ने बड़ा कदम उठाया है। ऐतिहासिक सरसैया घाट, अटल घाट और बिठूर में 'स्वच्छ निर्मल गंगा' परियोजना के तहत आधुनिक सुंदरीकरण कार्य पूरा हो गया है।

महापौर ने बताया कि अब श्रद्धालुओं और पर्यटकों को शाम के समय लेजर लाइट एंड साउंड शो देखने को मिलेगा, जिसमें कानपुर के 1857 के प्रथम स्वतंत्रता संग्राम के गौरवशाली इतिहास को दर्शाया जाएगा। सुरक्षा के लिए 24 घंटे एसडीआरएफ और जल पुलिस तैनात रहेगी।`,
        category: "kanpur",
        categoryName: "हमारा कानपुर",
        subLocation: "बिठूर एवं अटल घाट",
        author: "पूजा बाजपेई (संस्कृति एवं पर्यटन डेस्क)",
        status: "published",
        date: "6 सितंबर 2026",
        time: "08:45 AM",
        views: 1950,
        shares: 512,
        isBreaking: false,
        isHero: false,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop&q=80",
        tags: ["NamamiGange", "KanpurTourism", "Bithoor"]
    },
    {
        id: "kanpur-green-park-stadium",
        title: "ग्रीन पार्क स्टेडियम कानपुर में अंतरराष्ट्रीय टेस्ट मैच की तैयारियां तेज, फ्लड लाइट्स और नई पिचों का हुआ निरीक्षण",
        summary: "यूपीसीए (UPCA) की तकनीकी टीम ने ग्राउंड का मुआयना किया। दर्शकों के लिए नए टिकटिंग काउंटर और पवेलियन नवीनीकरण कार्य जारी।",
        content: `कानपुर के ऐतिहासिक ग्रीन पार्क स्टेडियम में आगामी अंतरराष्ट्रीय क्रिकेट सीरीज के आयोजन को लेकर खेल विभाग और यूपी क्रिकेट एसोसिएशन (UPCA) ने कमर कस ली है। पिच क्यूरेटर शिव कुमार की देखरेख में मुख्य मैदान की तीन मुख्य पिचों को अंतरराष्ट्रीय मानकों के अनुसार नया रूप दिया जा रहा है।

स्टेडियम में नई एलईडी फ्लड लाइट्स का ट्रायल भी सफल रहा है। मैच के दौरान दर्शकों के सुगम आवागमन के लिए वीआईपी रोड और परेड चौराहे पर विशेष पार्किंग और ई-बस शटल सेवा संचालित की जाएगी।`,
        category: "sports",
        categoryName: "खेल",
        subLocation: "ग्रीन पार्क स्टेडियम",
        author: "विवेक अवस्थी (स्पोर्ट्स डेस्क)",
        status: "published",
        date: "5 सितंबर 2026",
        time: "07:10 PM",
        views: 3900,
        shares: 780,
        isBreaking: false,
        isHero: false,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&auto=format&fit=crop&q=80",
        tags: ["GreenPark", "Cricket", "UPCA", "KanpurSports"]
    },
    {
        id: "kanpur-politics-municipal-meeting",
        title: "कानपुर नगर निगम सदन में भारी हंगामा: जलभराव और सीवर सफाई को लेकर पार्षदों ने किया जोरदार विरोध प्रदर्शन",
        summary: "गोविंद नगर और किदवई नगर में नालों की सफाई न होने पर विपक्षी पार्षदों ने मेयर के सामने रखी तख्तियां, अधिकारियों को 48 घंटे का अल्टीमेटम।",
        content: `मोतीझील स्थित नगर निगम मुख्यालय के सदन में आयोजित मासिक बैठक में जमकर गर्मागर्मी देखने को मिली। दक्षिण कानपुर के गोविंद नगर, बर्रा, दादानगर और किदवई नगर वार्डों में सीवर ओवरफ्लो और सफाई व्यवस्था के मुद्दे पर पार्षदों ने वेल में आकर प्रदर्शन किया।

मेयर प्रमिला पांडेय ने सख्त रुख अपनाते हुए जलकल विभाग और नगर स्वास्थ्य अधिकारी को स्पष्ट निर्देश दिए कि 48 घंटे के भीतर सभी जोनल कार्यालयों में विशेष कंट्रोल रूम सक्रिय किए जाएं। लापरवाही बरतने वाले ठेकेदारों के खिलाफ एफआईआर दर्ज कराई जाएगी।`,
        category: "politics",
        categoryName: "राजनीति",
        subLocation: "मोतीझील / नगर निगम",
        author: "अमित कुमार (ब्यूरो चीफ)",
        status: "published",
        date: "5 सितंबर 2026",
        time: "05:30 PM",
        views: 2420,
        shares: 320,
        isBreaking: false,
        isHero: false,
        isDemo: true,
        imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        tags: ["NagarNigam", "KanpurPolitics", "Motijheel"]
    }
];

// Initial Live Blog Timeline Data (Minute-to-Minute updates)
const INITIAL_LIVE_BLOGS = [
    {
        id: "lb-1",
        title: "कानपुर मेट्रो: अंडरग्राउंड सेक्शन ट्रायल रन लाइव अपडेट्स",
        status: "active",
        topic: "कानपुर विकास",
        startedAt: "आज दोपहर 12:00 बजे",
        updates: [
            {
                id: "upd-3",
                time: "02:15 PM",
                badge: "अंतिम रिपोर्ट",
                headline: "बड़ा चौराहा स्टेशन पर ट्रेन का दूसरा ट्रायल सफलतापूर्वक संपन्न",
                text: "इंजीनियरों के दल ने सिग्नलिंग और आपातकालीन ब्रेक प्रणाली की जांच पूरी की। सभी तकनीकी मानक सामान्य पाए गए हैं।",
                author: "राजेश वर्मा (फील्ड रिपोर्टर)"
            },
            {
                id: "upd-2",
                time: "01:30 PM",
                badge: "बड़ा अपडेट",
                headline: "नवीन मार्केट स्टेशन पर यात्रियों की सुरक्षा जांच प्रणाली का मॉकड्रिल",
                text: "मॉकड्रिल के दौरान सीआईएसएफ और स्थानीय पुलिस बल ने स्वचालित प्रवेश द्वारों और सीसीटीवी सर्विलांस रूम का निरीक्षण किया।",
                author: "अमित कुमार (ब्यूरो चीफ)"
            },
            {
                id: "upd-1",
                time: "12:05 PM",
                badge: "शुरुआत",
                headline: "चुन्नीगंज स्टेशन से पहली ट्रायल मेट्रो ट्रेन रवाना हुई",
                text: "एमडी यूपीएमआरसी की उपस्थिति में हरी झंडी दिखाकर ट्रायल ट्रेन को रवाना किया गया।",
                author: "डेस्क रिपोर्ट"
            }
        ]
    }
];

// Initial Advertisement Settings
const INITIAL_ADS = {
    headerBanner: {
        enabled: true,
        title: "कानपुर उद्योग एवं व्यापार मेला 2026",
        imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
        linkUrl: "#"
    },
    sidebarBanner: {
        enabled: true,
        title: "कानपुर ज्वेलर्स महाकुंभ",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&auto=format&fit=crop&q=80",
        linkUrl: "#"
    }
};

const INITIAL_VIDEOS = [
    {
        id: "vid-1",
        title: "कानपुर बुलेटिन 100: शहर की 100 बड़ी खबरें नॉन-स्टॉप देखिए सिर्फ 15 मिनट में",
        duration: "14:22",
        views: "18K",
        thumbnail: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "vid-2",
        title: "ग्राउंड रिपोर्ट: कानपुर गंगा बैराज पर जलस्तर की लाइव स्थिति, देखिए हमारी खास रिपोर्ट",
        duration: "06:45",
        views: "9.4K",
        thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&auto=format&fit=crop&q=80"
    },
    {
        id: "vid-3",
        title: "एक्सक्लूसिव इंटरव्यू: कानपुर के पुलिस कमिश्नर से सीधी बातचीत, शहर की सुरक्षा का नया प्लान",
        duration: "18:10",
        views: "24K",
        thumbnail: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=600&auto=format&fit=crop&q=80"
    }
];

// Local Storage Helper Functions
const StorageService = {
    // Current Active Role: 'reporter', 'sub_editor', 'chief_editor'
    getCurrentRole() {
        return localStorage.getItem("todayindia_role") || "chief_editor";
    },
    setCurrentRole(role) {
        localStorage.setItem("todayindia_role", role);
    },

    // Articles
    getArticles() {
        const stored = localStorage.getItem("todayindia_articles");
        if (!stored) {
            localStorage.setItem("todayindia_articles", JSON.stringify(INITIAL_ARTICLES));
            return INITIAL_ARTICLES;
        }
        try {
            return JSON.parse(stored);
        } catch(e) {
            return INITIAL_ARTICLES;
        }
    },
    saveArticles(articles) {
        localStorage.setItem("todayindia_articles", JSON.stringify(articles));
    },
    getArticleById(id) {
        const articles = this.getArticles();
        return articles.find(a => a.id === id) || articles[0];
    },
    searchArticles(query) {
        if (!query || typeof query !== 'string') return [];
        const q = query.trim().toLowerCase();
        if (q === '') return [];

        const terms = q.split(/\s+/).filter(t => t.length > 0);
        const articles = this.getArticles();

        return articles.filter(art => {
            const title = (art.title || "").toLowerCase();
            const summary = (art.summary || "").toLowerCase();
            const content = (art.content || "").toLowerCase();
            const author = (art.author || "").toLowerCase();
            const categoryName = (art.categoryName || "").toLowerCase();
            const category = (art.category || "").toLowerCase();
            const subLocation = (art.subLocation || "").toLowerCase();
            const tags = Array.isArray(art.tags) ? art.tags.join(" ").toLowerCase() : "";
            const combined = `${title} ${summary} ${content} ${author} ${categoryName} ${category} ${subLocation} ${tags}`;

            return terms.every(term => combined.includes(term));
        });
    },
    addArticle(newArticle) {
        const articles = this.getArticles();
        if (newArticle.isHero) {
            articles.forEach(a => a.isHero = false);
        }
        newArticle.isDemo = false;
        articles.unshift(newArticle);
        this.saveArticles(articles);
        return articles;
    },
    deleteArticle(id) {
        let articles = this.getArticles();
        articles = articles.filter(a => a.id !== id);
        this.saveArticles(articles);
        return articles;
    },
    deleteDemoArticles() {
        let articles = this.getArticles();
        articles = articles.filter(a => !a.isDemo && !a.id.startsWith("kanpur-"));
        this.saveArticles(articles);
        return articles;
    },
    restoreDemoArticles() {
        this.saveArticles(INITIAL_ARTICLES);
        return INITIAL_ARTICLES;
    },
    setHeroArticle(id) {
        let articles = this.getArticles();
        articles = articles.map(a => ({
            ...a,
            isHero: (a.id === id)
        }));
        this.saveArticles(articles);
        return articles;
    },
    updateArticle(id, updatedData) {
        let articles = this.getArticles();
        const index = articles.findIndex(a => a.id === id);
        if (index !== -1) {
            if (updatedData.isHero) {
                articles.forEach(a => a.isHero = false);
            }
            articles[index] = { ...articles[index], ...updatedData };
            this.saveArticles(articles);
        }
        return articles;
    },

    // Breaking News
    getBreakingNews() {
        const stored = localStorage.getItem("todayindia_breaking");
        if (!stored) {
            localStorage.setItem("todayindia_breaking", JSON.stringify(INITIAL_BREAKING_NEWS));
            return INITIAL_BREAKING_NEWS;
        }
        try {
            const parsed = JSON.parse(stored);
            // Support legacy string format gracefully
            return parsed.map(item => typeof item === 'string' ? { text: item, priority: 'normal' } : item);
        } catch(e) {
            return INITIAL_BREAKING_NEWS;
        }
    },
    saveBreakingNews(list) {
        localStorage.setItem("todayindia_breaking", JSON.stringify(list));
    },
    addBreakingItem(text, priority = "normal") {
        const list = this.getBreakingNews();
        list.unshift({ text, priority, id: "brk-" + Date.now() });
        this.saveBreakingNews(list);
        return list;
    },
    removeBreakingItem(index) {
        const list = this.getBreakingNews();
        list.splice(index, 1);
        this.saveBreakingNews(list);
        return list;
    },

    // Live Blogs
    getLiveBlogs() {
        const stored = localStorage.getItem("todayindia_liveblogs");
        if (!stored) {
            localStorage.setItem("todayindia_liveblogs", JSON.stringify(INITIAL_LIVE_BLOGS));
            return INITIAL_LIVE_BLOGS;
        }
        try {
            return JSON.parse(stored);
        } catch(e) {
            return INITIAL_LIVE_BLOGS;
        }
    },
    saveLiveBlogs(blogs) {
        localStorage.setItem("todayindia_liveblogs", JSON.stringify(blogs));
    },
    addLiveBlogUpdate(blogId, update) {
        const blogs = this.getLiveBlogs();
        const blog = blogs.find(b => b.id === blogId) || blogs[0];
        if (blog) {
            blog.updates.unshift({
                id: "upd-" + Date.now(),
                time: new Date().toLocaleTimeString("hi-IN", { hour: '2-digit', minute: '2-digit' }),
                ...update
            });
            this.saveLiveBlogs(blogs);
        }
        return blogs;
    },

    // Citizen Tips
    getCitizenTips() {
        const stored = localStorage.getItem("todayindia_citizen_tips");
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch(e) {
            return [];
        }
    },
    addCitizenTip(tip) {
        const tips = this.getCitizenTips();
        tips.unshift(tip);
        localStorage.setItem("todayindia_citizen_tips", JSON.stringify(tips));
        return tips;
    },
    deleteCitizenTip(id) {
        let tips = this.getCitizenTips();
        tips = tips.filter(t => t.id !== id);
        localStorage.setItem("todayindia_citizen_tips", JSON.stringify(tips));
        return tips;
    },

    // Ads Settings
    getAds() {
        const stored = localStorage.getItem("todayindia_ads");
        if (!stored) {
            localStorage.setItem("todayindia_ads", JSON.stringify(INITIAL_ADS));
            return INITIAL_ADS;
        }
        try {
            return JSON.parse(stored);
        } catch(e) {
            return INITIAL_ADS;
        }
    },
    saveAds(ads) {
        localStorage.setItem("todayindia_ads", JSON.stringify(ads));
    },

    // Analytics Counter
    getAnalytics() {
        const articles = this.getArticles();
        return {
            todayViews: TrackingService.getTotalViews(),
            liveVisitors: TrackingService.getLiveVisitors(),
            totalStories: articles.length,
            totalTips: this.getCitizenTips().length,
            loginStats: TrackingService.getLoginStats(),
            uploadLedgerCount: TrackingService.getUploadLedger().length
        };
    }
};

// ==========================================
// Daily Mandi, Bullion & Fuel Commodity Rates Engine
// ==========================================
const DailyRatesService = {
    // Generates realistic daily market rates for Kanpur & UP based on today's date
    generateDefaultRates(dateObj = new Date()) {
        const dateStr = dateObj.toISOString().split('T')[0];
        // Deterministic seed using day of year
        const startOfYear = new Date(dateObj.getFullYear(), 0, 0);
        const diff = dateObj - startOfYear;
        const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        // Minor realistic daily fluctuations
        const goldDelta = ((dayOfYear * 37) % 31 - 15) * 20; // -300 to +300
        const silverDelta = ((dayOfYear * 43) % 25 - 12) * 50; // -600 to +600
        const wheatDelta = ((dayOfYear * 13) % 9 - 4) * 10; // -40 to +40
        const dalDelta = ((dayOfYear * 19) % 11 - 5) * 50; // -250 to +250
        const mustardDelta = ((dayOfYear * 23) % 9 - 4) * 25; // -100 to +100

        const baseGold24 = 72400 + goldDelta;
        const baseGold22 = Math.round(baseGold24 * 0.916);
        const baseSilver = 84500 + silverDelta;
        const baseWheat = 2480 + wheatDelta;
        const baseChana = 6920 + ((dayOfYear * 7) % 7 - 3) * 20;
        const baseDal = 11400 + dalDelta;
        const baseMustard = 5650 + mustardDelta;

        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = dateObj.toLocaleDateString('hi-IN', options);

        return {
            dateKey: dateStr,
            displayDate: formattedDate,
            lastUpdated: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
            bullion: [
                { id: "gold-24k", name: "सोना (24K शुद्ध)", unit: "10 ग्राम", price: "₹" + baseGold24.toLocaleString('en-IN'), trend: goldDelta >= 0 ? "up" : "down", change: (goldDelta >= 0 ? "+₹" : "-₹") + Math.abs(goldDelta) },
                { id: "gold-22k", name: "सोना (22K जेवराती)", unit: "10 ग्राम", price: "₹" + baseGold22.toLocaleString('en-IN'), trend: goldDelta >= 0 ? "up" : "down", change: (goldDelta >= 0 ? "+₹" : "-₹") + Math.round(Math.abs(goldDelta) * 0.916) },
                { id: "silver", name: "चांदी (सफेद 99.9)", unit: "1 किग्रा", price: "₹" + baseSilver.toLocaleString('en-IN'), trend: silverDelta >= 0 ? "up" : "down", change: (silverDelta >= 0 ? "+₹" : "-₹") + Math.abs(silverDelta) }
            ],
            mandi: [
                { id: "wheat", name: "गेहूं (दड़ा/शरबती)", unit: "क्विंटल", price: "₹" + baseWheat.toLocaleString('en-IN'), trend: wheatDelta >= 0 ? "up" : "down", change: (wheatDelta >= 0 ? "+₹" : "-₹") + Math.abs(wheatDelta) },
                { id: "dal", name: "अरहर दाल (देसी)", unit: "क्विंटल", price: "₹" + baseDal.toLocaleString('en-IN'), trend: dalDelta >= 0 ? "up" : "down", change: (dalDelta >= 0 ? "+₹" : "-₹") + Math.abs(dalDelta) },
                { id: "chana", name: "चना (देसी)", unit: "क्विंटल", price: "₹" + baseChana.toLocaleString('en-IN'), trend: "stable", change: "स्थिर" },
                { id: "mustard", name: "सरसों बीज / तेल", unit: "क्विंटल", price: "₹" + baseMustard.toLocaleString('en-IN'), trend: mustardDelta >= 0 ? "up" : "down", change: (mustardDelta >= 0 ? "+₹" : "-₹") + Math.abs(mustardDelta) },
                { id: "sugar", name: "चीनी (थोक)", unit: "क्विंटल", price: "₹3,920", trend: "stable", change: "स्थिर" }
            ],
            fuel: [
                { id: "petrol", name: "पेट्रोल (कानपुर)", unit: "प्रति लीटर", price: "₹94.65", trend: "stable", change: "स्थिर" },
                { id: "diesel", name: "डीजल (कानपुर)", unit: "प्रति लीटर", price: "₹87.76", trend: "stable", change: "स्थिर" },
                { id: "lpg", name: "LPG घरेलू सिलेंडर", unit: "14.2 किग्रा", price: "₹832.50", trend: "stable", change: "स्थिर" }
            ]
        };
    },

    getDailyRates() {
        const todayStr = new Date().toISOString().split('T')[0];
        const stored = localStorage.getItem("todayindia_daily_rates");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // If stored rates match today's date, return them!
                if (parsed && parsed.dateKey === todayStr) {
                    return parsed;
                }
            } catch(e) {}
        }
        // Rolled over to a new day or not initialized - generate fresh rates
        const fresh = this.generateDefaultRates(new Date());
        this.saveDailyRates(fresh);
        return fresh;
    },

    saveDailyRates(rates) {
        localStorage.setItem("todayindia_daily_rates", JSON.stringify(rates));
        return rates;
    },

    refreshDailyRates() {
        const fresh = this.generateDefaultRates(new Date());
        fresh.lastUpdated = new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' });
        this.saveDailyRates(fresh);
        return fresh;
    }
};

// ==========================================
// Editorial Analytics, Live Visits & Upload Ledger Service
// ==========================================
const TrackingService = {
    // 1. Live Page & Story Views Tracking
    recordPageView(articleOrPageId = "home", title = "") {
        try {
            const todayStr = new Date().toISOString().split('T')[0];
            let viewsData = JSON.parse(localStorage.getItem("todayindia_tracking_views") || "{}");
            
            // Increment today's total visits
            viewsData.totalViews = (viewsData.totalViews || 23410) + 1;
            
            if (!viewsData.byDate) viewsData.byDate = {};
            viewsData.byDate[todayStr] = (viewsData.byDate[todayStr] || 0) + 1;

            if (articleOrPageId && articleOrPageId !== "home") {
                if (!viewsData.byArticle) viewsData.byArticle = {};
                viewsData.byArticle[articleOrPageId] = (viewsData.byArticle[articleOrPageId] || 0) + 1;
                
                // Also update article views in storage
                const articles = StorageService.getArticles();
                const art = articles.find(a => a.id === articleOrPageId);
                if (art) {
                    art.views = (art.views || 0) + 1;
                    StorageService.saveArticles(articles);
                }
            }

            localStorage.setItem("todayindia_tracking_views", JSON.stringify(viewsData));
            return viewsData.totalViews;
        } catch(e) {
            console.error("View tracking error:", e);
            return 23410;
        }
    },

    getTotalViews() {
        try {
            const viewsData = JSON.parse(localStorage.getItem("todayindia_tracking_views") || "{}");
            return viewsData.totalViews || 23410;
        } catch(e) {
            return 23410;
        }
    },

    getLiveVisitors() {
        // Deterministic base with smooth heartbeat fluctuations
        const base = 185;
        const second = new Date().getSeconds();
        const delta = Math.sin(second / 10) * 18 + ((second * 3) % 9);
        return Math.floor(base + delta);
    },

    // 2. Login Tracking & Audit Trail
    recordLoginEvent(role, authorName, isSuccess = true) {
        try {
            // A. Update Counters
            let counts = JSON.parse(localStorage.getItem("todayindia_login_counts") || "{}");
            if (!counts[role]) counts[role] = 0;
            counts[role]++;
            counts.total = (counts.total || 0) + 1;
            counts.lastLogin = new Date().toISOString();
            localStorage.setItem("todayindia_login_counts", JSON.stringify(counts));

            // B. Append to Audit History
            let history = JSON.parse(localStorage.getItem("todayindia_login_history") || "[]");
            const newEvent = {
                id: "log-" + Date.now(),
                timestamp: new Date().toISOString(),
                dateStr: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                timeStr: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                role: role,
                authorName: authorName || this.getRoleTitle(role),
                isSuccess: isSuccess,
                device: navigator.userAgent.indexOf("Mobile") !== -1 ? "Mobile (स्मार्टफोन)" : "Desktop (कंप्यूटर)",
                browser: navigator.userAgent.indexOf("Chrome") !== -1 ? "Google Chrome" : "Web Browser"
            };
            history.unshift(newEvent);
            if (history.length > 50) history = history.slice(0, 50); // Keep last 50
            localStorage.setItem("todayindia_login_history", JSON.stringify(history));

            return newEvent;
        } catch(e) {
            console.error("Login audit error:", e);
        }
    },

    getLoginStats() {
        try {
            const counts = JSON.parse(localStorage.getItem("todayindia_login_counts") || "{}");
            const history = JSON.parse(localStorage.getItem("todayindia_login_history") || "[]");
            return {
                chief_editor: counts.chief_editor || 0,
                sub_editor: counts.sub_editor || 0,
                reporter: counts.reporter || 0,
                total: counts.total || 0,
                recentHistory: history
            };
        } catch(e) {
            return { chief_editor: 0, sub_editor: 0, reporter: 0, total: 0, recentHistory: [] };
        }
    },

    // 3. Editorial Upload Ledger (किसने क्या अपलोड किया)
    recordUploadEvent(type, title, authorName, authorRole, status = "published") {
        try {
            let ledger = JSON.parse(localStorage.getItem("todayindia_upload_ledger") || "[]");
            const entry = {
                id: "upl-" + Date.now(),
                timestamp: new Date().toISOString(),
                dateStr: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                timeStr: new Date().toLocaleTimeString('hi-IN', { hour: '2-digit', minute: '2-digit' }),
                type: type, // 'खबर (Article)', 'लाल पट्टी (Breaking)', 'लाइव ब्लॉग (LiveBlog)', 'विज्ञापन (Ad)'
                title: title,
                authorName: authorName || this.getRoleTitle(authorRole),
                authorRole: authorRole,
                status: status
            };
            ledger.unshift(entry);
            if (ledger.length > 100) ledger = ledger.slice(0, 100);
            localStorage.setItem("todayindia_upload_ledger", JSON.stringify(ledger));
            return entry;
        } catch(e) {
            console.error("Upload ledger error:", e);
        }
    },

    getUploadLedger() {
        try {
            const ledger = JSON.parse(localStorage.getItem("todayindia_upload_ledger") || "[]");
            if (ledger.length === 0) {
                // Prepopulate realistic initial entries so ledger has historical context
                const initial = [
                    {
                        id: "upl-init-1",
                        timestamp: new Date(Date.now() - 3600000).toISOString(),
                        dateStr: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                        timeStr: "09:30 AM",
                        type: "खबर (Article)",
                        title: "कानपुर गल्ला मंडी व सर्राफा अपडेट: चकरपुर मंडी में ताज़ा भाव",
                        authorName: "दीपक राजपूत (प्रधान संपादक / डायरेक्टर)",
                        authorRole: "chief_editor",
                        status: "published"
                    },
                    {
                        id: "upl-init-2",
                        timestamp: new Date(Date.now() - 7200000).toISOString(),
                        dateStr: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                        timeStr: "08:15 AM",
                        type: "लाल पट्टी (Breaking)",
                        title: "कानपुर देहात में तेज बारिश से तापमान में गिरावट, कई मोहल्लों में जलभराव",
                        authorName: "उप-संपादक (डेस्क)",
                        authorRole: "sub_editor",
                        status: "published"
                    },
                    {
                        id: "upl-init-3",
                        timestamp: new Date(Date.now() - 14400000).toISOString(),
                        dateStr: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                        timeStr: "07:00 AM",
                        type: "लाइव ब्लॉग (LiveBlog)",
                        title: "कानपुर मेट्रो: अंडरग्राउंड सेक्शन ट्रायल रन लाइव अपडेट्स",
                        authorName: "दीपक राजपूत (प्रधान संपादक / डायरेक्टर)",
                        authorRole: "chief_editor",
                        status: "published"
                    }
                ];
                localStorage.setItem("todayindia_upload_ledger", JSON.stringify(initial));
                return initial;
            }
            return ledger;
        } catch(e) {
            return [];
        }
    },

    deleteLedgerEntry(id) {
        try {
            let ledger = this.getUploadLedger();
            ledger = ledger.filter(item => item.id !== id);
            localStorage.setItem("todayindia_upload_ledger", JSON.stringify(ledger));
            return ledger;
        } catch(e) {
            return [];
        }
    },

    getRoleTitle(role) {
        if (role === 'chief_editor') return 'दीपक राजपूत (प्रधान संपादक / डायरेक्टर)';
        if (role === 'sub_editor') return 'उप-संपादक (डेस्क)';
        if (role === 'reporter') return 'फील्ड रिपोर्टर (संवाददाता)';
        return 'संपादकीय सदस्य';
    }
};
