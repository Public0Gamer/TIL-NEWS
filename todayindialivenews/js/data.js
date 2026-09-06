// TODAYINDIALIVENEWS - Data Engine & Storage Management
// Specialized for Kanpur City & Uttar Pradesh Local News

const INITIAL_BREAKING_NEWS = [
    "कानपुर: कल्याणपुर-पनकी रूट पर नया फोरलेन ओवरब्रिज स्वीकृत, जाम से मिलेगी राहत",
    "कानपुर कमिश्नरेट पुलिस का ऑपरेशन 'क्लीन' - शहर के 15 शातिर अपराधी गिरफ्तार",
    "गंगा बैराज पर जलस्तर सामान्य, सिंचाई विभाग ने जारी किया अलर्ट बुलेटिन",
    "कानपुर सेंट्रल से चलने वाली 4 मेमू ट्रेनों के समय में बदलाव, देखें पूरी लिस्ट",
    "कानपुर सर्राफा बाजार: 24 कैरेट सोना ₹72,450 प्रति 10 ग्राम, चांदी ₹84,200 प्रति किलो"
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
        title: "सरसैया घाट और बिठूर में 'स्वच्छ गंगा अभियान': घाटों पर विशेष सेल्फी प्वाइंट और वाटर स्पोर्ट्स की शुरुआत",
        summary: "कानपुर नगर निगम और नमामि गंगे की संयुक्त पहल। ऐतिहासिक बिठूर और सरसैया घाट पर पर्यटकों के लिए ई-बोटिंग और लाइट शो शुरू।",
        content: `धार्मिक और ऐतिहासिक नगरी कानपुर में गंगा तटों को पर्यटन स्थल के रूप में विकसित करने की दिशा में नगर निगम ने बड़ा कदम उठाया है। ऐतिहासिक सरसैया घाट, अटल घाट और बिठूर में 'स्वच्छ निर्मल गंगा' परियोजना के तहत आधुनिक सुंदरीकरण कार्य पूरा हो गया है।

महापौर ने बताया कि अब श्रद्धालुओं और पर्यटकों को शाम के समय लेजर लाइट एंड साउंड शो देखने को मिलेगा, जिसमें कानपुर के 1857 के प्रथम स्वतंत्रता संग्राम के गौरवशाली इतिहास को दर्शाया जाएगा। सुरक्षा के लिए 24 घंटे एसडीआरएफ और जल पुलिस तैनात रहेगी।`,
        category: "kanpur",
        categoryName: "हमारा कानपुर",
        subLocation: "बिठूर एवं अटल घाट",
        author: "पूजा बाजपेई (संस्कृति एवं पर्यटन डेस्क)",
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
        date: "5 सितंबर 2026",
        time: "05:30 PM",
        views: 2420,
        shares: 320,
        isBreaking: false,
        isHero: false,
        imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        tags: ["NagarNigam", "KanpurPolitics", "Motijheel"]
    },
    {
        id: "up-politics-cabinet-decision",
        title: "यूपी कैबिनेट का बड़ा फैसला: कानपुर-लखनऊ एक्सप्रेसवे को 8 लेन विस्तार की मंजूरी, 40 मिनट में तय होगा सफर",
        summary: "मुख्यमंत्री योगी आदित्यनाथ की अध्यक्षता में हुई बैठक में कनेक्टिविटी बढ़ाने के लिए 3,200 करोड़ की अतिरिक्त परियोजना को हरी झंडी।",
        content: `उत्तर प्रदेश सरकार ने प्रदेश के दो प्रमुख औद्योगिक व प्रशासनिक नगरों - कानपुर और लखनऊ के बीच की दूरी को न्यूनतम करने वाले 6-लेन ग्रीनफील्ड एक्सप्रेसवे को भविष्य की आवश्यकताओं को देखते हुए 8-लेन तक विस्तार योग्य बनाने का फैसला किया है।

इस परियोजना के पूर्ण होते ही उन्नाव, कानपुर देहात और कानपुर नगर के उद्योगों को त्वरित लॉजिस्टिक सहायता मिलेगी और दोनों शहरों के बीच यात्रा का समय घटकर मात्र 35 से 40 मिनट रह जाएगा।`,
        category: "up",
        categoryName: "उत्तर प्रदेश",
        subLocation: "लखनऊ-कानपुर कॉरिडोर",
        author: "विशेष संवाददाता (राज्य ब्यूरो)",
        date: "5 सितंबर 2026",
        time: "03:15 PM",
        views: 5100,
        shares: 1240,
        isBreaking: false,
        isHero: false,
        imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop&q=80",
        tags: ["UPNews", "KanpurLucknowExpressway", "Infrastructure"]
    },
    {
        id: "kanpur-iit-ai-invention",
        title: "आईआईटी कानपुर के वैज्ञानिकों का कमाल: किसानों के लिए तैयार किया AI 'फसल डॉक्टर', फोटो खींचते ही बताएगा रोग और इलाज",
        summary: "आईआईटी कानपुर के इनक्यूबेशन सेंटर में तैयार इस मोबाइल ऐप को प्रदेश के 50 हजार किसानों के साथ ट्रायल किया जा रहा है।",
        content: `भारतीय प्रौद्योगिकी संस्थान (IIT Kanpur) के कंप्यूटर साइंस और एग्रीकल्चरल इंजीनियरिंग विभाग के शोधकर्ताओं ने आर्टिफिशियल इंटेलिजेंस (AI) आधारित एक क्रांतिकारी समाधान विकसित किया है। यह टूल किसान के खेत में लगी पत्तियों की फोटो देखकर सेकंडों में फंगल, बैक्टीरियल या कीट संक्रमण की पहचान कर लेता है।

आईआईटी कानपुर के निदेशक ने बताया कि यह टूल हिंदी, अवधी और भोजपुरी सहित 10 भारतीय भाषाओं में बोलकर किसानों को कीटनाशक की सही मात्रा और जैविक उपचार की जानकारी देता है।`,
        category: "kanpur",
        categoryName: "हमारा कानपुर",
        subLocation: "कल्याणपुर (IITK)",
        author: "डॉ. मनीष श्रीवास्तव (एजुकेशन डेस्क)",
        date: "4 सितंबर 2026",
        time: "02:00 PM",
        views: 3340,
        shares: 610,
        isBreaking: false,
        isHero: false,
        imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
        tags: ["IITKanpur", "AI", "AgriTech", "Kalyanpur"]
    }
];

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
    getBreakingNews() {
        const stored = localStorage.getItem("todayindia_breaking");
        if (!stored) {
            localStorage.setItem("todayindia_breaking", JSON.stringify(INITIAL_BREAKING_NEWS));
            return INITIAL_BREAKING_NEWS;
        }
        try {
            return JSON.parse(stored);
        } catch(e) {
            return INITIAL_BREAKING_NEWS;
        }
    },
    saveBreakingNews(list) {
        localStorage.setItem("todayindia_breaking", JSON.stringify(list));
    },
    addCitizenTip(tip) {
        const tips = this.getCitizenTips();
        tips.unshift(tip);
        localStorage.setItem("todayindia_citizen_tips", JSON.stringify(tips));
        return tips;
    },
    getCitizenTips() {
        const stored = localStorage.getItem("todayindia_citizen_tips");
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch(e) {
            return [];
        }
    }
};
