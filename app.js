// TODAYINDIALIVENEWS - Main Application Logic

// Professional Floating Toast Notification System
window.showToast = function(message, type = "success") {
    try {
        let container = document.getElementById("toast-container");
        if (!container) {
            container = document.createElement("div");
            container.id = "toast-container";
            container.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm pointer-events-none";
            document.body.appendChild(container);
        }
        const toast = document.createElement("div");
        const isSuccess = type === "success";
        toast.className = `flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-2xl text-white text-xs font-bold font-hindi transform translate-y-3 opacity-0 transition-all duration-300 pointer-events-auto border ${isSuccess ? 'bg-slate-900 border-emerald-500' : 'bg-red-950 border-amber-400'}`;
        toast.innerHTML = `
            <i class="${isSuccess ? 'fa-solid fa-circle-check text-emerald-400 text-base shrink-0' : 'fa-solid fa-triangle-exclamation text-amber-400 text-base shrink-0'}"></i>
            <span class="leading-snug">${message}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.classList.remove("translate-y-3", "opacity-0");
        }, 15);
        setTimeout(() => {
            toast.classList.add("translate-y-3", "opacity-0");
            setTimeout(() => toast.remove(), 350);
        }, 3000);
    } catch(e) {
        console.log("Toast:", message);
    }
};

// Immediate inline theme check to avoid flicker
(function() {
    try {
        if (localStorage.getItem("todayindia_theme") === "dark") {
            document.documentElement.classList.add("dark");
        }
    } catch(e) {}
})();

document.addEventListener("DOMContentLoaded", () => {
    try { initTheme(); } catch(e) {}
    try {
        if (typeof CloudStorageService !== 'undefined') {
            CloudStorageService.init();
        }
    } catch(e) {
        console.warn("CloudStorageService init notice:", e);
    }
    try { initDateTime(); } catch(e) {}
    try { initBreakingTicker(); } catch(e) {}
    try { renderDailyRatesBar(); } catch(e) {}
    try { renderHomePageContent(); } catch(e) {}
    try { renderLiveBlogWidget(); } catch(e) {}
    try { renderAdBanners(); } catch(e) {}
    try { setupLiveTVModal(); } catch(e) {}
    try { setupPoll(); } catch(e) {}
    try { setupMobileMenu(); } catch(e) {}
    try { trackVisitor(); } catch(e) {}
    try { setupSearchSystem(); } catch(e) {}
});

// Real-Time Multi-Device Sync Event Listener (Auto-updates UI across all connected devices)
window.addEventListener('todayindia:cloud_updated', (e) => {
    try {
        const detail = (e && e.detail) || {};
        console.log("☁️ Multi-device cloud sync update:", detail);
        if (detail.type === 'articles') {
            if (typeof renderHomePageContent === 'function') renderHomePageContent();
            if (typeof renderCategoryPage === 'function') renderCategoryPage();
        } else if (detail.type === 'breaking') {
            if (typeof initBreakingTicker === 'function') initBreakingTicker();
        } else if (detail.type === 'ads') {
            if (typeof renderAdBanners === 'function') renderAdBanners();
            if (typeof window.initUniversalAdEngine === 'function') window.initUniversalAdEngine();
        }
    } catch(err) {
        console.warn("Error handling cloud update:", err);
    }
});

// 1. Live Date & Panchang Display
function initDateTime() {
    const dateEl = document.getElementById("live-date");
    if (!dateEl) return;
    
    const now = new Date();
    const days = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
    const months = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
    
    const dayName = days[now.getDay()];
    const dateNum = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    dateEl.innerHTML = `<i class="fa-regular fa-calendar-days text-red-600 mr-1.5"></i> ${dayName}, ${dateNum} ${monthName} ${year}`;
}

// 2. Breaking News Ticker (Aaj Tak / ABP News Standard)
function initBreakingTicker() {
    const tickerEl = document.getElementById("breaking-ticker-content");
    if (!tickerEl) return;

    const breakingList = StorageService.getBreakingNews();
    if (!breakingList || breakingList.length === 0) return;

    // Support both string items and object items
    const normalized = breakingList.map(item => {
        if (typeof item === 'string') return { text: item, priority: 'normal' };
        return item;
    });

    const fullList = [...normalized, ...normalized];
    tickerEl.innerHTML = fullList.map(item => {
        const isFlash = item.priority === "high";
        const cleanQuery = (item.text || '').replace(/"/g, '&quot;').replace(/'/g, "\\'");
        return `
            <span class="ticker-news-item inline-flex items-center mx-5 text-sm sm:text-base font-bold text-white transition-colors duration-150 cursor-pointer select-none group" onclick="if(typeof openSearchModal==='function') openSearchModal('${cleanQuery.substring(0, 20)}')">
                ${isFlash 
                    ? '<span class="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow mr-2.5 uppercase tracking-wide animate-pulse shrink-0">⚡ बड़ी खबर</span>' 
                    : '<span class="w-2 h-2 rotate-45 bg-amber-300 mr-2.5 inline-block shrink-0 shadow-xs group-hover:scale-125 transition-transform"></span>'}
                <span class="ticker-text group-hover:text-amber-300 group-hover:underline underline-offset-4 decoration-amber-300 transition-colors">${item.text}</span>
            </span>
        `;
    }).join("");
}

// 3. Render Homepage Content (Lead Story, Numbered Trending Top 5, Kanpur City Desk & Videos)
function renderHomePageContent(filterZone = 'all') {
    const articles = StorageService.getArticles();
    const heroContainer = document.getElementById("hero-main-story");
    const sideStoriesContainer = document.getElementById("hero-side-stories");
    const kanpurGrid = document.getElementById("kanpur-special-grid");

    if (!articles || articles.length === 0) {
        if (heroContainer) {
            heroContainer.innerHTML = `
                <div class="p-12 text-center bg-white rounded-2xl border border-dashed border-slate-300 shadow-2xs">
                    <i class="fa-solid fa-newspaper text-slate-300 text-5xl mb-3"></i>
                    <h3 class="text-xl font-bold text-slate-700 font-hindi">कोई खबर अभी उपलब्ध नहीं है</h3>
                    <p class="text-sm text-slate-500 font-hindi mt-1">एडमिन रूम (Admin Room) से ताज़ा खबरें प्रकाशित करें।</p>
                    <a href="admin.html" class="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-lg hover:bg-red-700 transition">
                        <i class="fa-solid fa-plus"></i> एडमिन रूम में जाएं
                    </a>
                </div>
            `;
        }
        if (sideStoriesContainer) {
            sideStoriesContainer.innerHTML = `
                <div class="p-6 text-center text-slate-400 font-hindi text-xs bg-white rounded-xl border border-slate-100">
                    अतिरिक्त खबरें यहां दिखाई देंगी
                </div>
            `;
        }
        if (kanpurGrid) {
            kanpurGrid.innerHTML = `
                <div class="col-span-full p-8 text-center text-slate-400 font-hindi text-sm bg-white rounded-xl border border-slate-100">
                    इस अनुभाग में अभी कोई खबर उपलब्ध नहीं है।
                </div>
            `;
        }
        return;
    }

    // A. Lead Hero Story (Aaj Tak / ABP News Broadcast Format)
    const heroArticle = articles.find(a => a.isHero) || articles[0];
    if (heroContainer) {
        heroContainer.innerHTML = `
            <a href="article.html?id=${heroArticle.id}" class="group block relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div class="relative h-72 sm:h-88 md:h-[440px] w-full overflow-hidden">
                    <img src="${heroArticle.imageUrl}" alt="${heroArticle.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out">
                    <!-- Broadcast Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent"></div>
                    
                    <!-- Top Broadcast Badges -->
                    <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span class="bg-red-600 text-white text-xs font-black px-3.5 py-1 rounded-md uppercase tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse">
                            <span class="w-2 h-2 bg-white rounded-full"></span>
                            🔴 एक्सक्लूसिव कवरेज
                        </span>
                        <span class="bg-slate-900/85 backdrop-blur text-amber-300 text-xs font-bold px-3 py-1 rounded-md border border-slate-700/60 shadow-sm">
                            📍 ${heroArticle.subLocation || "कानपुर"}
                        </span>
                    </div>

                    <!-- Bottom Story Info -->
                    <div class="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white space-y-2">
                        <div class="flex items-center gap-2 text-xs font-bold text-amber-400 font-hindi">
                            <span class="bg-amber-400/20 backdrop-blur px-2 py-0.5 rounded border border-amber-400/30">
                                <i class="fa-solid fa-bolt mr-1"></i> ग्राउंड रिपोर्ट
                            </span>
                            <span>•</span>
                            <span>${heroArticle.categoryName}</span>
                        </div>
                        <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight group-hover:text-amber-300 transition-colors font-hindi drop-shadow-md">
                            ${heroArticle.title}
                        </h2>
                        <p class="text-slate-200 text-xs sm:text-sm hidden sm:block clamp-2 font-hindi leading-relaxed">
                            ${heroArticle.summary}
                        </p>
                        <div class="flex flex-wrap items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/15 gap-2">
                            <div class="flex items-center gap-3 sm:gap-4">
                                <span class="font-semibold text-white flex items-center gap-1.5"><img src="director.jpg" alt="सुरेंद्र कुमार राजपूत" class="w-5 h-5 rounded-full object-cover border border-amber-400 shrink-0"> ${heroArticle.author || "सुरेंद्र कुमार राजपूत (डायरेक्टर)"}</span>
                                <span><i class="fa-regular fa-clock text-amber-400 mr-1"></i> ${heroArticle.time || "ताज़ा"}</span>
                                <span class="hidden sm:inline"><i class="fa-regular fa-eye text-emerald-400 mr-1"></i> ${heroArticle.views} देखा गया</span>
                            </div>
                            <span class="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 rounded-md text-xs transition shadow-sm">
                                विस्तार से पढ़ें <i class="fa-solid fa-arrow-right text-[10px]"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    // B. Hero Side Stories: Aaj Tak / ABP News Style Numbered Trending List (#1, #2, #3, #4)
    if (sideStoriesContainer) {
        const sideArticles = articles.filter(a => a.id !== heroArticle.id).slice(0, 4);
        if (sideArticles.length === 0) {
            sideStoriesContainer.innerHTML = `
                <div class="p-6 text-center text-slate-400 font-hindi text-xs bg-white rounded-xl border border-slate-100">
                    और खबरें जोड़ने पर यहां दिखाई देंगी
                </div>
            `;
        } else {
            sideStoriesContainer.innerHTML = sideArticles.map((art, idx) => `
                <a href="article.html?id=${art.id}" class="news-card flex gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-red-400 transition group relative">
                    <!-- Thumbnail with Aaj Tak style numbered ranking badge -->
                    <div class="w-28 h-24 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg relative">
                        <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                        <span class="rank-badge ${idx === 0 ? 'rank-badge-1' : 'rank-badge-other'}">
                            <i class="fa-solid fa-fire text-[9px]"></i> #${idx + 1}
                        </span>
                        <span class="absolute bottom-1 left-1 bg-black/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                            ${art.categoryName}
                        </span>
                    </div>
                    <!-- Details -->
                    <div class="flex flex-col justify-between flex-1 min-w-0">
                        <div>
                            <span class="text-[10px] font-bold text-red-600 uppercase tracking-wide">📍 ${art.subLocation || "कानपुर"}</span>
                            <h3 class="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition clamp-2 font-hindi leading-snug mt-0.5">
                                ${art.title}
                            </h3>
                        </div>
                        <div class="flex items-center text-[10px] sm:text-[11px] text-slate-500 gap-2 mt-1">
                            <span><i class="fa-regular fa-clock mr-0.5 text-slate-400"></i> ${art.time}</span>
                            <span>•</span>
                            <span><i class="fa-regular fa-eye mr-0.5 text-slate-400"></i> ${art.views} व्यूज</span>
                        </div>
                    </div>
                </a>
            `).join("");
        }
    }

    // C. Kanpur Special Grid ("हमारा कानपुर" - Hyperlocal Hub with filter support)
    if (kanpurGrid) {
        let kanpurArticles = articles.filter(a => a.category === "kanpur" || a.subLocation);
        if (filterZone && filterZone !== 'all') {
            kanpurArticles = kanpurArticles.filter(a => 
                (a.subLocation && a.subLocation.toLowerCase().includes(filterZone.toLowerCase())) ||
                (a.title && a.title.toLowerCase().includes(filterZone.toLowerCase())) ||
                (a.summary && a.summary.toLowerCase().includes(filterZone.toLowerCase()))
            );
        }
        
        if (kanpurArticles.length === 0) {
            kanpurGrid.innerHTML = `
                <div class="col-span-full p-8 text-center text-slate-500 font-hindi text-sm bg-white rounded-2xl border border-slate-200">
                    <i class="fa-solid fa-location-dot text-red-500 text-2xl mb-2 block"></i>
                    इस क्षेत्र (${filterZone}) में अभी कोई ताज़ा खबर उपलब्ध नहीं है। 
                    <button type="button" onclick="filterKanpurByZone('all')" class="ml-2 text-red-600 font-bold hover:underline">सभी खबरें देखें</button>
                </div>
            `;
        } else {
            kanpurGrid.innerHTML = kanpurArticles.slice(0, 6).map(art => `
                <div class="news-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:border-red-300">
                    <a href="article.html?id=${art.id}" class="block relative h-44 sm:h-48 overflow-hidden group">
                        <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        <span class="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-md">
                            📍 ${art.subLocation || "कानपुर नगर"}
                        </span>
                        <span class="absolute bottom-2 right-2 bg-black/75 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                            ${art.time || "आज"}
                        </span>
                    </a>
                    <div class="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <a href="article.html?id=${art.id}">
                                <h3 class="font-bold text-base text-slate-900 hover:text-red-600 transition font-hindi clamp-2 leading-snug mb-2">
                                    ${art.title}
                                </h3>
                            </a>
                            <p class="text-slate-600 text-xs font-hindi clamp-2 mb-3 leading-relaxed">
                                ${art.summary}
                            </p>
                        </div>
                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span class="font-medium text-slate-600"><i class="fa-regular fa-user mr-1 text-slate-400"></i>${art.author || "ब्यूरो"}</span>
                            <div class="flex items-center gap-1.5">
                                <button onclick="shareOnWhatsApp('${(art.title||'').replace(/'/g, "\\'")}', 'article.html?id=${art.id}')" title="WhatsApp पर शेयर करें" class="text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg transition flex items-center gap-1 font-bold text-[11px]">
                                    <i class="fa-brands fa-whatsapp text-sm text-emerald-600"></i> शेयर
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join("");
        }
    }

    // D. Videos Section (Studio Live Broadcast Design)
    const videoContainer = document.getElementById("video-bulletins-grid");
    if (videoContainer && typeof INITIAL_VIDEOS !== 'undefined') {
        videoContainer.innerHTML = INITIAL_VIDEOS.map(v => `
            <div class="bg-slate-800/90 rounded-xl border border-slate-700 overflow-hidden shadow-md news-card cursor-pointer group" onclick="openLiveTVModal()">
                <div class="relative h-44 overflow-hidden">
                    <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition">
                            <i class="fa-solid fa-play ml-1 text-base"></i>
                        </div>
                    </div>
                    <span class="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wide uppercase flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> VIDEO
                    </span>
                    <span class="absolute bottom-2 right-2 bg-black/85 text-white text-xs px-2 py-0.5 rounded font-mono font-semibold">
                        ${v.duration}
                    </span>
                </div>
                <div class="p-3.5">
                    <h4 class="font-bold text-sm text-white group-hover:text-amber-300 transition clamp-2 font-hindi leading-snug">
                        ${v.title}
                    </h4>
                    <div class="flex items-center justify-between text-xs text-slate-400 mt-2.5 pt-2 border-t border-slate-700/60">
                        <span><i class="fa-solid fa-eye text-[10px] text-red-500 mr-1"></i> ${v.views} व्यूज</span>
                        <span class="text-red-400 font-bold flex items-center gap-1"><i class="fa-regular fa-circle-play"></i> अभी देखें</span>
                    </div>
                </div>
            </div>
        `).join("");
    }
}

// 3.1 Interactive Zone Filter for "हमारा कानपुर"
window.filterKanpurByZone = function(zone, btn) {
    try {
        document.querySelectorAll('.kanpur-chip').forEach(c => {
            c.classList.remove('active', 'bg-red-600', 'text-white');
            c.classList.add('bg-slate-100', 'text-slate-700');
        });
        if (btn) {
            btn.classList.add('active', 'bg-red-600', 'text-white');
            btn.classList.remove('bg-slate-100', 'text-slate-700');
        }
        renderHomePageContent(zone);
    } catch(e) {
        console.error("Filter zone error:", e);
    }
};

// 4. Render Live Blog Timeline on Homepage
function renderLiveBlogWidget() {
    const liveBlogContainer = document.getElementById("live-blog-timeline-container");
    if (!liveBlogContainer) return;

    const blogs = StorageService.getLiveBlogs();
    if (!blogs || blogs.length === 0) return;

    const activeBlog = blogs.find(b => b.status === "active") || blogs[0];
    
    document.getElementById("live-blog-title").innerText = activeBlog.title;
    document.getElementById("live-blog-started").innerText = activeBlog.startedAt;

    liveBlogContainer.innerHTML = activeBlog.updates.map(u => `
        <div class="relative pl-6 pb-5 border-l-2 border-red-500 last:border-transparent last:pb-0">
            <span class="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-red-600 border-2 border-white"></span>
            <div class="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span class="font-mono font-bold text-red-700 bg-red-50 px-1.5 py-0.5 rounded">${u.time}</span>
                <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">${u.badge || 'अपडेट'}</span>
                <span>• ${u.author}</span>
            </div>
            <h4 class="font-bold text-slate-900 text-sm font-hindi leading-snug mb-1">${u.headline}</h4>
            <p class="text-xs text-slate-600 font-hindi leading-relaxed">${u.text}</p>
        </div>
    `).join("");
}

// 5. Universal Professional News Ad & Sponsorship Engine
const AdEngine = {
    _popupShownThisSession: false,
    _bottomBarShownThisSession: false,
    _smartTriggersAttached: false,

    init() {
        // 1. Natural In-Page Banners (Always integrated seamlessly without disruption)
        this.renderInPageSlots();

        // 2. Setup Professional Reader-Engagement Triggers (Scroll & Time-based)
        this.setupSmartTriggers();
    },

    setupSmartTriggers() {
        if (this._smartTriggersAttached) return;
        this._smartTriggersAttached = true;

        const isAdmin = window.location.pathname.includes("admin.html");
        if (isAdmin) return;

        // Check session storage to respect reader experience across page navigation
        const popupDismissed = sessionStorage.getItem("todayindia_popup_dismissed_session");
        const bottomDismissed = sessionStorage.getItem("todayindia_bottom_dismissed_session");

        let scrollEngaged = false;
        let readingSeconds = 0;

        // A. Subtle Bottom Bar on Scroll Engagement (after passing top fold / 350px)
        const onScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset || 0;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

            if (scrollY > 350 || scrollPercent > 20) {
                scrollEngaged = true;

                // Trigger Bottom Floating Bar smoothly after scrolling (if not previously dismissed)
                if (!this._bottomBarShownThisSession && !bottomDismissed && !document.getElementById("universal-floating-bottom-bar") && !document.getElementById("universal-ad-popup")) {
                    this._bottomBarShownThisSession = true;
                    setTimeout(() => {
                        // Don't show bottom bar if center popup is already open
                        if (!document.getElementById("universal-ad-popup")) {
                            this.renderFloatingBottomBar();
                        }
                    }, 1000);
                }

                // High-Engagement Deep Scroll Trigger for Popup:
                // Only if reader scrolled past 50% AND has spent at least 12 seconds reading
                if (scrollPercent >= 50 && readingSeconds >= 12 && !this._popupShownThisSession && !popupDismissed && !document.getElementById("universal-ad-popup")) {
                    this._popupShownThisSession = true;
                    const bBar = document.getElementById("universal-floating-bottom-bar");
                    if (bBar) bBar.remove();
                    this.renderRandomPopup();
                }
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        // B. Time Engagement Check: If reader has been actively reading for 20+ seconds and scrolled
        const timer = setInterval(() => {
            readingSeconds += 1;

            if (readingSeconds >= 20 && scrollEngaged && !this._popupShownThisSession && !popupDismissed && !document.getElementById("universal-ad-popup")) {
                this._popupShownThisSession = true;
                clearInterval(timer);
                const bBar = document.getElementById("universal-floating-bottom-bar");
                if (bBar) bBar.remove();
                this.renderRandomPopup();
            }

            if (readingSeconds > 60) {
                clearInterval(timer);
            }
        }, 1000);
    },

    // A. High-Impact Random Promotional Center Popup Modal
    renderRandomPopup(forceAd = null) {
        const isAdmin = window.location.pathname.includes("admin.html");
        if (isAdmin && !forceAd) return;

        // Retrieve a random active popup ad
        const ad = forceAd || StorageService.getRandomActiveAd("popup") || StorageService.getRandomActiveAd("all") || StorageService.getRandomActiveAd();
        if (!ad) return;

        // If not forced preview, check session dismiss
        if (!forceAd) {
            const isDismissed = sessionStorage.getItem("todayindia_popup_dismissed_session");
            if (isDismissed) return;
        }

        const existing = document.getElementById("universal-ad-popup");
        if (existing) existing.remove();

        const popupModal = document.createElement("div");
        popupModal.id = "universal-ad-popup";
        popupModal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300 font-hindi";
        popupModal.innerHTML = `
            <div class="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border border-slate-200 transform scale-100 transition-all relative flex flex-col max-h-[90vh]">
                <!-- Header Bar with Sponsored Badge & Close Button -->
                <div class="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-white shrink-0">
                    <div class="flex items-center gap-2">
                        <span class="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                            प्रायोजित विज्ञापन (SPONSORED)
                        </span>
                        <span class="text-xs text-slate-300 truncate max-w-[200px]">${ad.advertiser || "विशेष घोषणा"}</span>
                    </div>
                    <button type="button" onclick="AdEngine.closePopup('${ad.id}')" class="w-8 h-8 rounded-full bg-white/15 hover:bg-red-600 flex items-center justify-center text-white transition cursor-pointer text-sm font-bold" title="बंद करें">
                        ✕
                    </button>
                </div>

                <!-- Scrollable Ad Body -->
                <div class="p-5 overflow-y-auto space-y-4">
                    <!-- Promotional Image -->
                    <div class="relative rounded-2xl overflow-hidden border border-slate-100 shadow-xs bg-slate-50 group">
                        <img src="${ad.imageUrl}" alt="${ad.title}" class="w-full h-48 sm:h-56 object-cover transition duration-300 group-hover:scale-102">
                        <div class="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            <i class="fa-solid fa-bullhorn text-amber-400 mr-1"></i> विशेष प्रमोशन
                        </div>
                    </div>

                    <!-- Content -->
                    <div>
                        <h3 class="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                            ${ad.title}
                        </h3>
                        ${ad.description ? `
                            <p class="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                                ${ad.description}
                            </p>
                        ` : ''}
                    </div>
                </div>

                <!-- Action Footer with CTA & Close Buttons -->
                <div class="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 shrink-0">
                    <button type="button" onclick="AdEngine.closePopup('${ad.id}')" class="text-xs text-slate-500 hover:text-slate-800 font-semibold px-4 py-2 rounded-xl transition cursor-pointer">
                        बाद में देखें (Skip)
                    </button>
                    <a href="${ad.linkUrl}" target="_blank" onclick="AdEngine.handleAdClick('${ad.id}')" class="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition transform active:scale-98">
                        <span>${ad.ctaText || "ऑफर देखें व संपर्क करें"}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(popupModal);
        StorageService.recordAdImpression(ad.id);
    },

    closePopup(adId) {
        const modal = document.getElementById("universal-ad-popup");
        if (modal) {
            modal.style.opacity = "0";
            setTimeout(() => modal.remove(), 250);
        }
        sessionStorage.setItem("todayindia_popup_dismissed_session", "true");
        if (adId) {
            sessionStorage.setItem("todayindia_popup_dismissed_time_" + adId, Date.now().toString());
        }
    },

    // B. Sticky Floating Bottom Promotion Bar
    renderFloatingBottomBar() {
        const isAdmin = window.location.pathname.includes("admin.html");
        if (isAdmin) return;

        const isDismissed = sessionStorage.getItem("todayindia_bottom_dismissed_session");
        if (isDismissed) return;

        const ad = StorageService.getRandomActiveAd("bottom_bar") || StorageService.getRandomActiveAd("all") || StorageService.getRandomActiveAd();
        if (!ad) return;

        const existing = document.getElementById("universal-floating-bottom-bar");
        if (existing) existing.remove();

        const bar = document.createElement("div");
        bar.id = "universal-floating-bottom-bar";
        bar.className = "fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-2xl border border-slate-200 font-hindi transition-all duration-500 transform translate-y-0";
        bar.innerHTML = `
            <div class="flex items-center gap-3">
                <img src="${ad.imageUrl}" alt="${ad.title}" class="w-14 h-14 object-cover rounded-xl shrink-0 border border-slate-100">
                <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                        <span class="text-[9px] bg-red-100 text-red-700 font-black px-1.5 py-0.2 rounded uppercase">प्रायोजित</span>
                        <button type="button" onclick="AdEngine.closeBottomBar('${ad.id}')" class="text-slate-400 hover:text-red-600 text-xs px-1 cursor-pointer font-bold" title="बंद करें">✕</button>
                    </div>
                    <h4 class="text-xs font-bold text-slate-900 truncate leading-snug mt-0.5">${ad.title}</h4>
                    <div class="flex items-center justify-between mt-1">
                        <span class="text-[10px] text-slate-500 truncate max-w-[150px]">${ad.advertiser || ""}</span>
                        <a href="${ad.linkUrl}" target="_blank" onclick="AdEngine.handleAdClick('${ad.id}')" class="text-[11px] bg-red-600 hover:bg-red-700 text-white font-bold px-3 py-1 rounded-lg transition inline-flex items-center gap-1 shrink-0">
                            <span>${ad.ctaText || "देखें"}</span> ➔
                        </a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(bar);
        StorageService.recordAdImpression(ad.id);
    },

    closeBottomBar(adId) {
        const bar = document.getElementById("universal-floating-bottom-bar");
        if (bar) {
            bar.style.opacity = "0";
            bar.style.transform = "translateY(20px)";
            setTimeout(() => bar.remove(), 300);
        }
        sessionStorage.setItem("todayindia_bottom_dismissed_session", "true");
        if (adId) {
            sessionStorage.setItem("todayindia_bottom_dismissed_time_" + adId, Date.now().toString());
        }
    },

    // C. Dynamic In-Page & Header Slots
    renderInPageSlots() {
        const headerSlot = document.getElementById("header-ad-banner");
        if (headerSlot) {
            const ad = StorageService.getRandomActiveAd("inpage") || StorageService.getRandomActiveAd("all");
            if (ad) {
                headerSlot.innerHTML = `
                    <div class="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
                        <div class="flex flex-col sm:flex-row items-center justify-between p-2 sm:p-3 gap-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                            <div class="flex items-center gap-3 min-w-0">
                                <img src="${ad.imageUrl}" alt="" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover border border-white/20 shrink-0">
                                <div class="min-w-0">
                                    <span class="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded uppercase">विज्ञापन (SPONSORED)</span>
                                    <h4 class="text-xs sm:text-sm font-bold text-white truncate mt-0.5">${ad.title}</h4>
                                    <p class="text-[11px] text-slate-300 truncate hidden sm:block">${ad.advertiser || ""}</p>
                                </div>
                            </div>
                            <a href="${ad.linkUrl}" target="_blank" onclick="AdEngine.handleAdClick('${ad.id}')" class="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition shrink-0 flex items-center gap-1.5 shadow-sm">
                                <span>${ad.ctaText || "ऑफर देखें"}</span>
                                <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                `;
                headerSlot.classList.remove("hidden");
                StorageService.recordAdImpression(ad.id);
            }
        }
    },

    handleAdClick(adId) {
        if (adId) {
            StorageService.recordAdClick(adId);
        }
    }
};

window.AdEngine = AdEngine;

function renderAdBanners() {
    if (typeof AdEngine !== 'undefined') {
        AdEngine.init();
    }
}

// 6. Live TV Modal
function setupLiveTVModal() {
    const modal = document.getElementById("live-tv-modal");
    if (!modal) return;

    window.openLiveTVModal = function() {
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    window.closeLiveTVModal = function() {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    };

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            window.closeLiveTVModal();
        }
    });
}

// 7. Interactive Citizen Poll
function setupPoll() {
    const pollForm = document.getElementById("citizen-poll-form");
    if (!pollForm) return;

    pollForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const selected = pollForm.querySelector("input[name='poll-option']:checked");
        if (!selected) {
            alert("कृपया एक विकल्प चुनें!");
            return;
        }

        const pollResultEl = document.getElementById("poll-results");
        pollForm.classList.add("hidden");
        pollResultEl.classList.remove("hidden");
    });
}

// 8. Mobile Menu Toggle
function setupMobileMenu() {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-nav-drawer");
    const closeBtn = document.getElementById("close-mobile-nav");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.remove("translate-x-full");
        });
    }

    if (closeBtn && mobileMenu) {
        closeBtn.addEventListener("click", () => {
            mobileMenu.classList.add("translate-x-full");
        });
    }
}

// 9. Global WhatsApp Share
window.shareOnWhatsApp = function(title, path) {
    const fullUrl = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/') + path;
    const text = encodeURIComponent(`*${title}*\n\nताज़ा खबर पढ़ें TODAY INDIA LIVE NEWS पर 👇\n${fullUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
};

// 10. Visitor Tracking (Real & Accurate)
function trackVisitor() {
    if (typeof TrackingService !== 'undefined') {
        try {
            const path = window.location.pathname;
            let pageId = "home";
            let pageTitle = "होमपेज (मुख्य पृष्ठ)";
            if (path.includes("category")) {
                const urlParams = new URLSearchParams(window.location.search);
                pageId = "cat-" + (urlParams.get("cat") || urlParams.get("search") || "kanpur");
                pageTitle = "कैटेगरी पेज (" + pageId + ")";
            } else if (path.includes("about")) {
                pageId = "about";
                pageTitle = "हमारे बारे में";
            }
            TrackingService.recordPageView(pageId, pageTitle);
        } catch(e) {}
    }
}

// 11. Daily Mandi & Bullion Rates Rendering (Auto-Updating)
let currentRatesFilter = 'all';

window.filterRates = function(category, btn) {
    currentRatesFilter = category;
    document.querySelectorAll('.rate-tab-btn').forEach(b => {
        b.classList.remove('active', 'bg-slate-900', 'text-white');
        b.classList.add('text-slate-600');
    });
    if (btn) {
        btn.classList.add('active', 'bg-slate-900', 'text-white');
        btn.classList.remove('text-slate-600');
    }
    const cards = document.querySelectorAll('#mandi-rates-cards .mandi-card');
    cards.forEach(card => {
        const cat = card.getAttribute('data-rate-cat');
        if (category === 'all' || cat === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
};

function renderDailyRatesBar() {
    const container = document.getElementById("mandi-rates-cards");
    const dateBadge = document.getElementById("mandi-date-badge");
    if (!container || typeof DailyRatesService === 'undefined') return;

    const data = DailyRatesService.getDailyRates();
    if (dateBadge) {
        dateBadge.innerHTML = `<i class="fa-solid fa-clock-rotate-left mr-1 text-red-500"></i> आज का भाव (${data.displayDate}) • ${data.lastUpdated}`;
    }

    let items = [];
    if (currentRatesFilter === 'all' || currentRatesFilter === 'bullion') {
        items = items.concat(data.bullion.map(i => ({ ...i, cat: 'bullion', icon: 'fa-solid fa-gem text-amber-500' })));
    }
    if (currentRatesFilter === 'all' || currentRatesFilter === 'mandi') {
        items = items.concat(data.mandi.map(i => ({ ...i, cat: 'mandi', icon: 'fa-solid fa-wheat-awn text-yellow-600' })));
    }
    if (currentRatesFilter === 'all' || currentRatesFilter === 'fuel') {
        items = items.concat(data.fuel.map(i => ({ ...i, cat: 'fuel', icon: 'fa-solid fa-gas-pump text-blue-500' })));
    }

    container.innerHTML = items.map(item => {
        const isUp = item.trend === 'up';
        const isDown = item.trend === 'down';
        const trendBadge = isUp 
            ? `<span class="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5"><i class="fa-solid fa-arrow-trend-up text-[9px]"></i> ${item.change}</span>`
            : isDown
            ? `<span class="text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5"><i class="fa-solid fa-arrow-trend-down text-[9px]"></i> ${item.change}</span>`
            : `<span class="text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded text-[10px] font-semibold">स्थिर</span>`;

        return `
            <div class="mandi-card bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-amber-300 transition flex flex-col justify-between" data-rate-cat="${item.cat}">
                <div class="flex items-center justify-between gap-1 mb-1">
                    <span class="text-[11px] font-bold text-slate-700 flex items-center gap-1.5 truncate" title="${item.name}">
                        <i class="${item.icon} text-xs shrink-0"></i>
                        <span class="truncate">${item.name}</span>
                    </span>
                    ${trendBadge}
                </div>
                <div class="flex items-baseline justify-between mt-1">
                    <span class="text-base font-black text-slate-900 font-brand tracking-tight">${item.price}</span>
                    <span class="text-[10px] text-slate-400 font-hindi">/${item.unit}</span>
                </div>
            </div>
        `;
    }).join("");
}

window.refreshPublicRates = function(btn) {
    const icon = btn ? btn.querySelector('i') : null;
    if (icon) icon.classList.add('fa-spin');

    setTimeout(() => {
        if (typeof DailyRatesService !== 'undefined') {
            DailyRatesService.refreshDailyRates(true);
            renderDailyRatesBar();
        }
        if (icon) icon.classList.remove('fa-spin');
        if (typeof window.showToast === 'function') {
            window.showToast("✅ दैनिक बाजार व मंडी भाव ताज़ा कर दिए गए हैं!", "success");
        }
    }, 500);
};

// 12. Universal Live Search System (Globally Accessible)
window.openSearchModal = function(initialQuery = "") {
    const modal = document.getElementById("search-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const input = document.getElementById("global-search-input");
    if (input) {
        if (initialQuery) {
            input.value = initialQuery;
        }
        setTimeout(() => {
            input.focus();
            if (window.performLiveSearch) window.performLiveSearch(input.value);
        }, 50);
    }
};

window.closeSearchModal = function() {
    const modal = document.getElementById("search-modal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "auto";
};

function setupSearchSystem() {
    const modal = document.getElementById("search-modal");
    const input = document.getElementById("global-search-input");
    const clearBtn = document.getElementById("search-clear-btn");
    const form = document.getElementById("search-form");

    if (!modal) return;

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            window.closeSearchModal();
        }
    });

    if (input) {
        input.addEventListener("input", (e) => {
            performLiveSearch(e.target.value);
        });
    }

    if (clearBtn && input) {
        clearBtn.addEventListener("click", () => {
            input.value = "";
            clearBtn.classList.add("hidden");
            performLiveSearch("");
            input.focus();
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const q = input ? input.value.trim() : "";
            if (q) {
                window.location.href = `category.html?search=${encodeURIComponent(q)}`;
            }
        });
    }

    // Keyboard Shortcuts (Ctrl+K or Cmd+K to open, Escape to close)
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
            e.preventDefault();
            if (modal.classList.contains("hidden")) {
                window.openSearchModal();
            } else {
                window.closeSearchModal();
            }
        } else if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            window.closeSearchModal();
        }
    });

    // Initial state rendering
    performLiveSearch("");
}

window.fillSearchTag = function(term) {
    const input = document.getElementById("global-search-input");
    if (input) {
        input.value = term;
        performLiveSearch(term);
        input.focus();
    }
};

window.performLiveSearch = function(query) {
    const container = document.getElementById("search-results-container");
    const countBadge = document.getElementById("search-result-count");
    const clearBtn = document.getElementById("search-clear-btn");
    const viewAllBtn = document.getElementById("search-view-all-btn");
    if (!container) return;

    const trimmed = (query || "").trim();

    if (clearBtn) {
        if (trimmed.length > 0) {
            clearBtn.classList.remove("hidden");
        } else {
            clearBtn.classList.add("hidden");
        }
    }

    // If query is empty, show recent recommended stories
    if (trimmed.length === 0) {
        if (countBadge) countBadge.innerText = "हालिया ताज़ा खबरें";
        if (viewAllBtn) viewAllBtn.classList.add("hidden");

        const recent = (typeof StorageService !== 'undefined') ? StorageService.getArticles().slice(0, 4) : [];
        container.innerHTML = `
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
                <i class="fa-solid fa-clock-rotate-left text-red-500"></i> ताज़ा सुर्खियां (Recent Headlines)
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${recent.map(art => `
                    <a href="article.html?id=${art.id}" class="flex gap-2.5 p-2 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/20 transition group bg-white shadow-2xs">
                        <img src="${art.imageUrl}" alt="" class="w-16 h-14 object-cover rounded-lg flex-shrink-0 border border-slate-200">
                        <div class="min-w-0 flex-1">
                            <span class="text-[10px] font-bold text-red-600 uppercase">📍 ${art.subLocation || "कानपुर"}</span>
                            <h4 class="text-xs font-bold text-slate-900 group-hover:text-red-600 transition font-hindi line-clamp-2 leading-snug mt-0.5">
                                ${art.title}
                            </h4>
                        </div>
                    </a>
                `).join("")}
            </div>
        `;
        return;
    }

    // Perform search
    const results = (typeof StorageService !== 'undefined') ? StorageService.searchArticles(trimmed) : [];

    if (countBadge) {
        countBadge.innerText = `${results.length} खबरें मिलीं`;
    }

    if (viewAllBtn) {
        viewAllBtn.href = `category.html?search=${encodeURIComponent(trimmed)}`;
        viewAllBtn.classList.remove("hidden");
        viewAllBtn.innerHTML = `<span>सभी ${results.length} परिणाम पेज पर देखें ➔</span>`;
    }

    if (results.length === 0) {
        container.innerHTML = `
            <div class="text-center py-10 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <i class="fa-solid fa-magnifying-glass text-3xl text-slate-300 mb-2.5 block"></i>
                <h4 class="font-bold text-slate-700 text-sm font-hindi">"${trimmed}" से संबंधित कोई खबर नहीं मिली</h4>
                <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto font-hindi">कृपया वर्तनी जांचें या कोई अन्य कीवर्ड (जैसे: कानपुर, पुलिस, सोना, व्यापार) लिखकर खोजें।</p>
                <div class="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                    <span class="text-[11px] text-slate-500 font-hindi">सुझाव:</span>
                    <button type="button" onclick="fillSearchTag('कानपुर')" class="text-[11px] bg-white border border-slate-200 hover:border-red-300 px-2 py-0.5 rounded-full text-slate-700 hover:text-red-600 cursor-pointer">#कानपुर</button>
                    <button type="button" onclick="fillSearchTag('अपराध')" class="text-[11px] bg-white border border-slate-200 hover:border-red-300 px-2 py-0.5 rounded-full text-slate-700 hover:text-red-600 cursor-pointer">#अपराध</button>
                    <button type="button" onclick="fillSearchTag('सोना')" class="text-[11px] bg-white border border-slate-200 hover:border-red-300 px-2 py-0.5 rounded-full text-slate-700 hover:text-red-600 cursor-pointer">#सोना</button>
                    <button type="button" onclick="fillSearchTag('सुरेंद्र कुमार राजपूत')" class="text-[11px] bg-white border border-slate-200 hover:border-red-300 px-2 py-0.5 rounded-full text-slate-700 hover:text-red-600 cursor-pointer">#सुरेंद्र कुमार राजपूत</button>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="space-y-2 max-h-80 overflow-y-auto pr-1">
            ${results.map(art => `
                <a href="article.html?id=${art.id}" class="flex items-start gap-3 p-2.5 rounded-xl border border-slate-200/80 hover:border-red-300 hover:bg-slate-50 transition group bg-white shadow-2xs">
                    <img src="${art.imageUrl}" alt="" class="w-20 h-16 sm:w-24 sm:h-16 object-cover rounded-lg flex-shrink-0 border border-slate-200">
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-1.5 mb-1 flex-wrap">
                            <span class="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">📍 ${art.subLocation || "कानपुर"}</span>
                            <span class="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">${art.categoryName || "खबर"}</span>
                            ${art.isBreaking ? '<span class="text-[9px] font-bold bg-red-600 text-white px-1.5 py-0.2 rounded animate-pulse">BREAKING</span>' : ''}
                        </div>
                        <h4 class="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-red-600 transition font-hindi line-clamp-2 leading-snug">
                            ${art.title}
                        </h4>
                        <div class="flex items-center gap-3 text-[10px] text-slate-400 mt-1">
                            <span><i class="fa-regular fa-user mr-1 text-slate-400"></i> ${art.author}</span>
                            <span>•</span>
                            <span><i class="fa-regular fa-calendar mr-1 text-slate-400"></i> ${art.date}</span>
                            <span>•</span>
                            <span><i class="fa-regular fa-eye mr-1 text-slate-400"></i> ${art.views || 1} व्यूज</span>
                        </div>
                    </div>
                </a>
            `).join("")}
        </div>
    `;
};


// ==========================================
// 🌙 Dark / Night Reading Mode Theme Engine
// ==========================================
function initTheme() {
    const saved = localStorage.getItem("todayindia_theme") || "light";
    if (saved === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    updateThemeIcons(saved === "dark");
}

function updateThemeIcons(isDark) {
    document.querySelectorAll(".theme-icon").forEach(el => {
        el.innerText = isDark ? "☀️" : "🌙";
    });
    document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
        btn.title = isDark ? "दिन का मोड (Light Mode) चालू करें" : "नाइट/डार्क मोड (Dark Mode) चालू करें";
    });
}

window.toggleTheme = function() {
    const isDark = document.documentElement.classList.toggle("dark");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("todayindia_theme", theme);
    updateThemeIcons(isDark);
};

// ==========================================
// 📰 Digital E-Paper Reader Engine
// ==========================================
let currentEPaperPage = 1;

window.openEPaperModal = function() {
    let modal = document.getElementById("epaper-reader-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "epaper-reader-modal";
        modal.className = "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md transition-opacity duration-300 font-hindi";
        document.body.appendChild(modal);
    }

    const epaper = (typeof StorageService !== 'undefined' && StorageService.getEPaperInfo) ? StorageService.getEPaperInfo() : null;
    const waLink = (typeof StorageService !== 'undefined' && StorageService.getWhatsAppLink) ? StorageService.getWhatsAppLink() : "";

    if (!epaper || !Array.isArray(epaper.pages) || epaper.pages.length === 0) {
        renderEPaperEmptyState(modal, waLink);
    } else {
        currentEPaperPage = 1;
        renderEPaperModalContent(modal, epaper);
    }
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
};

function renderEPaperEmptyState(modal, waLink) {
    modal.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border border-slate-200 dark:border-slate-800 flex flex-col p-6 sm:p-8 text-center font-hindi transition-all">
            <div class="flex justify-end mb-1">
                <button type="button" onclick="closeEPaperModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-500 transition cursor-pointer text-sm font-bold" title="बंद करें">✕</button>
            </div>
            <div class="w-20 h-20 mx-auto rounded-3xl bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center text-3xl mb-4 shadow-inner">
                <i class="fa-solid fa-newspaper"></i>
            </div>
            <span class="bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mx-auto mb-3">
                दैनिक डिजिटल संस्करण
            </span>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-2">आज का ई-अखबार तैयार हो रहा है</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                संपादकीय डेस्क द्वारा कानपुर नगर व उत्तर प्रदेश का आज का डिजिटल दैनिक संस्करण संकलित किया जा रहा है। अपलोड होते ही यह यहाँ तुरंत लाइव उपलब्ध हो जाएगा।
            </p>
            <div class="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 mb-5 text-left flex items-center gap-3">
                <div class="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-xl shrink-0 shadow-xs">
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                    <h5 class="text-xs font-bold text-emerald-950 dark:text-emerald-200">ई-अखबार सीधे WhatsApp पर पाएं</h5>
                    <p class="text-[11px] text-emerald-800 dark:text-emerald-400">रोज सुबह कानपुर की हर बड़ी ब्रेकिंग व ई-अखबार अपने फोन पर प्राप्त करें।</p>
                </div>
            </div>
            <a href="javascript:void(0)" onclick="openWhatsAppCommunity(event)" data-whatsapp-btn="true" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-md cursor-pointer">
                <i class="fa-brands fa-whatsapp text-lg"></i>
                <span>ऑफिशियल WhatsApp चैनल से जुड़ें</span>
            </a>
        </div>
    `;
}

function renderEPaperModalContent(modal, epaper) {
    const page = epaper.pages.find(p => p.pageNum === currentEPaperPage) || epaper.pages[0];

    modal.innerHTML = `
        <div class="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 flex flex-col max-h-[92vh] transition-all">
            <!-- Header Bar -->
            <div class="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 shrink-0">
                <div class="flex items-center gap-3">
                    <span class="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase flex items-center gap-1">
                        <i class="fa-solid fa-newspaper"></i> ई-अखबार
                    </span>
                    <div>
                        <h3 class="font-black text-sm sm:text-base text-white truncate">${epaper.title}</h3>
                        <p class="text-[11px] text-slate-300">📅 ${epaper.date} | 📍 ${epaper.edition}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button type="button" onclick="downloadEPaperPDF()" class="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-download"></i> <span class="hidden sm:inline">PDF डाउनलोड</span>
                    </button>
                    <button type="button" onclick="closeEPaperModal()" class="w-8 h-8 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition cursor-pointer text-sm font-bold" title="बंद करें">
                        ✕
                    </button>
                </div>
            </div>

            <!-- Page Navigation Strip -->
            <div class="px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between gap-2 overflow-x-auto text-xs shrink-0 no-scrollbar">
                <div class="flex items-center gap-1.5">
                    ${epaper.pages.map(p => `
                        <button type="button" onclick="changeEPaperPage(${p.pageNum})" class="px-3 py-1 rounded-lg font-bold transition cursor-pointer ${p.pageNum === currentEPaperPage ? 'bg-red-600 text-white shadow-xs' : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200'}">
                            पन्ना ${p.pageNum}
                        </button>
                    `).join("")}
                </div>
                <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 shrink-0">
                    ${page.name} (${currentEPaperPage}/${epaper.totalPages})
                </span>
            </div>

            <!-- Scrollable Newspaper Page Viewer -->
            <div class="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-200/70 dark:bg-slate-950/80 flex items-center justify-center">
                <div class="epaper-newspaper-page rounded-2xl overflow-hidden max-w-2xl w-full border border-slate-300 dark:border-slate-700 shadow-xl bg-white dark:bg-slate-900 transition duration-300">
                    <div class="relative group">
                        <img src="${page.preview}" alt="${page.name}" class="w-full h-auto object-cover select-none">
                        <div class="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                            <span class="font-bold text-slate-800 dark:text-slate-200"><i class="fa-solid fa-file-lines text-red-600 mr-1"></i> ${page.name}</span>
                            <span class="text-slate-400 text-[11px]">कानपुर संस्करण • डिजिटल ई-अखबार</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Control Footer -->
            <div class="px-4 py-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
                <button type="button" onclick="changeEPaperPage(${Math.max(1, currentEPaperPage - 1)})" ${currentEPaperPage === 1 ? 'disabled class="opacity-40 cursor-not-allowed text-xs font-bold text-slate-400 px-3 py-1.5"' : 'class="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-red-600 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl cursor-pointer"'}>
                    ◀ पिछला पन्ना
                </button>
                <div class="text-center">
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">पृष्ठ ${currentEPaperPage} of ${epaper.totalPages}</span>
                </div>
                <button type="button" onclick="changeEPaperPage(${Math.min(epaper.totalPages, currentEPaperPage + 1)})" ${currentEPaperPage === epaper.totalPages ? 'disabled class="opacity-40 cursor-not-allowed text-xs font-bold text-slate-400 px-3 py-1.5"' : 'class="text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-red-600 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl cursor-pointer"'}>
                    अगला पन्ना ▶
                </button>
            </div>
        </div>
    `;
}

window.changeEPaperPage = function(pageNum) {
    currentEPaperPage = pageNum;
    const modal = document.getElementById("epaper-reader-modal");
    const epaper = (typeof StorageService !== 'undefined' && StorageService.getEPaperInfo) ? StorageService.getEPaperInfo() : null;
    if (modal && epaper) {
        renderEPaperModalContent(modal, epaper);
    }
};

window.closeEPaperModal = function() {
    const modal = document.getElementById("epaper-reader-modal");
    if (modal) {
        modal.classList.add("hidden");
    }
    document.body.style.overflow = "";
};

window.downloadEPaperPDF = function() {
    alert("📄 आज का ई-अखबार (PDF Edition) डाउनलोड प्रारंभ हो रहा है...");
    window.print();
};

// Dynamic WhatsApp Channel Link Auto-Binder
function initWhatsAppLinks() {
    if (typeof window.updateAllWhatsAppLinks === 'function') {
        window.updateAllWhatsAppLinks();
    }
    if (typeof CloudStorageService !== 'undefined' && CloudStorageService.listenToWhatsAppLink) {
        CloudStorageService.listenToWhatsAppLink((newLink) => {
            if (typeof window.updateAllWhatsAppLinks === 'function') {
                window.updateAllWhatsAppLinks(newLink);
            }
        });
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWhatsAppLinks);
} else {
    initWhatsAppLinks();
}

// Global Dynamic WhatsApp Community Dispatcher (Admin Controlled)
window.openWhatsAppCommunity = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    const link = (typeof StorageService !== 'undefined' && StorageService.getWhatsAppLink) ? StorageService.getWhatsAppLink() : "";
    if (link && link.startsWith("http")) {
        window.open(link, "_blank");
    } else {
        window.open("https://wa.me/918840026359?text=नमस्ते,%20मुझे%20TODAY%20INDIA%20LIVE%20NEWS%20व्हाट्सएप%20से%20जुड़ना%20है", "_blank");
    }
};

window.updateAllWhatsAppLinks = function(customLink) {
    const link = customLink || ((typeof StorageService !== 'undefined' && StorageService.getWhatsAppLink) ? StorageService.getWhatsAppLink() : "");
    const targetUrl = (link && link.startsWith("http")) ? link : "https://wa.me/918840026359?text=नमस्ते,%20मुझे%20TODAY%20INDIA%20LIVE%20NEWS%20व्हाट्सएप%20से%20जुड़ना%20है";

    document.querySelectorAll('[data-whatsapp-btn], .whatsapp-channel-btn, .whatsapp-community-link').forEach(el => {
        if (el.tagName === 'A') {
            el.href = targetUrl;
            el.target = "_blank";
            el.rel = "noopener";
        }
    });
};
