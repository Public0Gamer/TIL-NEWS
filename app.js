// TODAYINDIALIVENEWS - Main Application Logic

document.addEventListener("DOMContentLoaded", () => {
    initDateTime();
    initBreakingTicker();
    renderDailyRatesBar();
    renderHomePageContent();
    renderLiveBlogWidget();
    renderAdBanners();
    setupLiveTVModal();
    setupPoll();
    setupMobileMenu();
    trackVisitor();
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

// 2. Breaking News Ticker
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
        return `
            <span class="inline-flex items-center mx-6 text-sm md:text-base font-semibold text-slate-800 hover:text-red-600 transition cursor-pointer">
                ${isFlash ? '<span class="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded mr-2 uppercase animate-pulse">FLASH</span>' : '<span class="w-2 h-2 rounded-full bg-red-600 mr-2.5 inline-block"></span>'}
                ${item.text}
            </span>
        `;
    }).join("");
}

// 3. Render Homepage Content
function renderHomePageContent() {
    const articles = StorageService.getArticles();
    const heroContainer = document.getElementById("hero-main-story");
    const sideStoriesContainer = document.getElementById("hero-side-stories");
    const kanpurGrid = document.getElementById("kanpur-special-grid");

    if (!articles || articles.length === 0) {
        if (heroContainer) {
            heroContainer.innerHTML = `
                <div class="p-12 text-center bg-white rounded-xl border border-dashed border-slate-300 shadow-2xs">
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

    // A. Lead Hero Story
    const heroArticle = articles.find(a => a.isHero) || articles[0];
    if (heroContainer) {
        heroContainer.innerHTML = `
            <a href="article.html?id=${heroArticle.id}" class="group block relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
                <div class="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                    <img src="${heroArticle.imageUrl}" alt="${heroArticle.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                    <div class="absolute top-4 left-4 flex gap-2">
                        <span class="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                            <span class="w-2 h-2 bg-white rounded-full animate-ping"></span>
                            ${heroArticle.categoryName}
                        </span>
                        <span class="bg-slate-900/80 backdrop-blur text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                            📍 ${heroArticle.subLocation}
                        </span>
                    </div>
                    <div class="absolute bottom-4 left-4 right-4 text-white">
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-2 group-hover:text-red-400 transition font-hindi">
                            ${heroArticle.title}
                        </h2>
                        <p class="text-slate-200 text-sm hidden sm:block clamp-2 font-hindi mb-3">
                            ${heroArticle.summary}
                        </p>
                        <div class="flex items-center text-xs text-slate-300 gap-4">
                            <span><i class="fa-regular fa-user mr-1 text-red-400"></i> ${heroArticle.author}</span>
                            <span><i class="fa-regular fa-clock mr-1 text-red-400"></i> ${heroArticle.time}</span>
                            <span><i class="fa-regular fa-eye mr-1 text-red-400"></i> ${heroArticle.views} देखा गया</span>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }

    // B. Hero Side Stories
    if (sideStoriesContainer) {
        const sideArticles = articles.filter(a => a.id !== heroArticle.id).slice(0, 4);
        if (sideArticles.length === 0) {
            sideStoriesContainer.innerHTML = `
                <div class="p-6 text-center text-slate-400 font-hindi text-xs bg-white rounded-xl border border-slate-100">
                    और खबरें जोड़ने पर यहां दिखाई देंगी
                </div>
            `;
        } else {
            sideStoriesContainer.innerHTML = sideArticles.map(art => `
                <a href="article.html?id=${art.id}" class="news-card flex gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-red-200 transition group">
                    <div class="w-28 h-24 flex-shrink-0 overflow-hidden rounded-lg relative">
                        <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover">
                        <span class="absolute bottom-1 left-1 bg-black/75 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            ${art.categoryName}
                        </span>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div>
                            <span class="text-[11px] font-bold text-red-600 uppercase tracking-wide">📍 ${art.subLocation || "कानपुर"}</span>
                            <h3 class="text-sm font-bold text-slate-900 group-hover:text-red-600 transition clamp-2 font-hindi leading-snug mt-0.5">
                                ${art.title}
                            </h3>
                        </div>
                        <div class="flex items-center text-[11px] text-slate-500 gap-2 mt-1">
                            <span><i class="fa-regular fa-clock mr-0.5 text-slate-400"></i> ${art.time}</span>
                            <span>•</span>
                            <span><i class="fa-regular fa-eye mr-0.5 text-slate-400"></i> ${art.views}</span>
                        </div>
                    </div>
                </a>
            `).join("");
        }
    }

    // C. Kanpur Special Grid ("हमारा कानपुर")
    if (kanpurGrid) {
        const kanpurArticles = articles.filter(a => a.category === "kanpur" || a.subLocation).slice(0, 6);
        if (kanpurArticles.length === 0) {
            kanpurGrid.innerHTML = `
                <div class="col-span-full p-8 text-center text-slate-400 font-hindi text-sm bg-white rounded-xl border border-slate-100">
                    इस अनुभाग में अभी कोई खबर उपलब्ध नहीं है।
                </div>
            `;
        } else {
            kanpurGrid.innerHTML = kanpurArticles.map(art => `
                <div class="news-card bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs">
                    <a href="article.html?id=${art.id}" class="block relative h-44 overflow-hidden group">
                        <img src="${art.imageUrl}" alt="${art.title}" class="w-full h-full object-cover">
                        <span class="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                            📍 ${art.subLocation}
                        </span>
                    </a>
                <div class="p-4 flex-1 flex flex-col justify-between">
                    <div>
                        <a href="article.html?id=${art.id}">
                            <h3 class="font-bold text-base text-slate-900 hover:text-red-600 transition font-hindi clamp-2 leading-snug mb-2">
                                ${art.title}
                            </h3>
                        </a>
                        <p class="text-slate-600 text-xs font-hindi clamp-2 mb-3">
                            ${art.summary}
                        </p>
                    </div>
                    <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <span>${art.date}</span>
                        <div class="flex items-center gap-2">
                            <button onclick="shareOnWhatsApp('${art.title}', 'article.html?id=${art.id}')" title="WhatsApp पर शेयर करें" class="text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded transition flex items-center gap-1 font-semibold text-[11px]">
                                <i class="fa-brands fa-whatsapp text-sm"></i> शेयर
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `).join("");
    }

    // D. Videos Section
    const videoContainer = document.getElementById("video-bulletins-grid");
    if (videoContainer && typeof INITIAL_VIDEOS !== 'undefined') {
        videoContainer.innerHTML = INITIAL_VIDEOS.map(v => `
            <div class="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs news-card cursor-pointer" onclick="openLiveTVModal()">
                <div class="relative h-44 overflow-hidden group">
                    <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition flex items-center justify-center">
                        <div class="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                            <i class="fa-solid fa-play ml-1"></i>
                        </div>
                    </div>
                    <span class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono font-semibold">
                        ${v.duration}
                    </span>
                </div>
                <div class="p-3">
                    <h4 class="font-bold text-sm text-slate-900 clamp-2 font-hindi leading-snug">
                        ${v.title}
                    </h4>
                    <div class="flex items-center justify-between text-xs text-slate-500 mt-2">
                        <span><i class="fa-solid fa-play text-[10px] text-red-500 mr-1"></i> ${v.views} व्यूज</span>
                        <span class="text-red-600 font-semibold flex items-center gap-1"><i class="fa-regular fa-circle-play"></i> अभी देखें</span>
                    </div>
                </div>
            </div>
        `).join("");
    }
}

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

// 5. Render Sponsor Ad Banners
function renderAdBanners() {
    const ads = StorageService.getAds();
    if (!ads) return;

    const headerAd = document.getElementById("header-ad-banner");
    if (headerAd && ads.headerBanner && ads.headerBanner.enabled) {
        headerAd.innerHTML = `
            <a href="${ads.headerBanner.linkUrl}" target="_blank" class="block w-full max-h-24 overflow-hidden rounded-xl border border-slate-200 relative group">
                <img src="${ads.headerBanner.imageUrl}" alt="${ads.headerBanner.title}" class="w-full h-20 sm:h-24 object-cover">
                <span class="absolute top-1 right-1 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-bold">विज्ञापन (Ad)</span>
            </a>
        `;
        headerAd.classList.remove("hidden");
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

// 10. Visitor Tracking
function trackVisitor() {
    if (typeof TrackingService !== 'undefined') {
        TrackingService.recordPageView("home", "होमपेज (मुख्य पृष्ठ)");
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
