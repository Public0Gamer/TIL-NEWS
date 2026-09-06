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
        author: "अमित कुमार (ब्यूरो चीफ, कानपुर)",
        status: "published",
        date: "6 सितंबर 2026",
        time: "11:45 AM",
        views: 4520,
        shares: 890,
        isBreaking: true,
        isHero: true,
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
    addArticle(newArticle) {
        const articles = this.getArticles();
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
    updateArticle(id, updatedData) {
        let articles = this.getArticles();
        const index = articles.findIndex(a => a.id === id);
        if (index !== -1) {
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
        const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 18450);
        return {
            todayViews: totalViews,
            liveVisitors: Math.floor(180 + Math.random() * 45),
            totalStories: articles.length,
            totalTips: this.getCitizenTips().length
        };
    }
};
