/* ============================================================
   AZUR HOME COLLECTION — js/location.js
   Page catalogue villas — Filtres + GSAP + Majordome
   NB: main.js est chargé avant ce fichier (nav, modales)
   ============================================================ */

/* ══════════════════════════════════════════
   ÉTAT FILTRES — noms différents de main.js
   pour éviter tout conflit
══════════════════════════════════════════ */
var locActiveAm = new Set();
var locMinGuests = 1;
var locGuestVal = 1;

function getCards() {
    return Array.from(document.querySelectorAll('.lc-card'));
}

/* ══════════════════════════════════════════
   FILTRES
══════════════════════════════════════════ */
window.applyFilters = function () {
    var zone = (document.getElementById('lf-zone') || {}).value || 'all';
    var visible = 0;

    getCards().forEach(function (card) {
        var czone = card.dataset.zone || '';
        var cam = card.dataset.am || '';
        var cg = parseInt(card.dataset.guests || '0');
        var show = (zone === 'all' || czone === zone) && cg >= locMinGuests;
        locActiveAm.forEach(function (a) { if (!cam.includes(a)) show = false; });
        card.classList.toggle('hidden', !show);
        if (show) visible++;
    });

    var countEl = document.getElementById('lf-cn');
    if (countEl) countEl.textContent = visible;

    var empty = document.getElementById('loc-empty');
    if (empty) {
        if (visible === 0) empty.removeAttribute('hidden');
        else empty.setAttribute('hidden', '');
    }
};

window.toggleAm = function (btn) {
    var am = btn.dataset.am;
    if (locActiveAm.has(am)) {
        locActiveAm.delete(am);
        btn.classList.remove('on');
        btn.setAttribute('aria-pressed', 'false');
    } else {
        locActiveAm.add(am);
        btn.classList.add('on');
        btn.setAttribute('aria-pressed', 'true');
    }
    applyFilters();
};

window.changeGuests = function (delta) {
    locGuestVal = Math.max(1, Math.min(20, locGuestVal + delta));
    locMinGuests = locGuestVal;
    var el = document.getElementById('lf-gn');
    if (el) el.textContent = locGuestVal;
    applyFilters();
};

window.applySort = function () {
    var val = (document.getElementById('lf-sort') || {}).value || 'default';
    var grid = document.querySelector('.loc-catalogue');
    if (!grid) return;
    var cards = getCards();
    cards.sort(function (a, b) {
        var ga = parseInt(a.dataset.guests || '0');
        var gb = parseInt(b.dataset.guests || '0');
        var sa = parseInt(a.dataset.surface || '0');
        var sb = parseInt(b.dataset.surface || '0');
        if (val === 'guests-desc') return gb - ga;
        if (val === 'guests-asc') return ga - gb;
        if (val === 'surface-desc') return sb - sa;
        return 0;
    });
    cards.forEach(function (c) { grid.appendChild(c); });
    /* Re-animer après tri */
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(cards.filter(function (c) { return !c.classList.contains('hidden'); }),
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: .45, stagger: .06, ease: 'power3.out' }
        );
    }
};

window.resetAll = function () {
    /* Reset état */
    locActiveAm.clear();
    locGuestVal = 1;
    locMinGuests = 1;

    /* Reset UI */
    var zone = document.getElementById('lf-zone');
    var gn = document.getElementById('lf-gn');
    var sort = document.getElementById('lf-sort');
    if (zone) zone.value = 'all';
    if (gn) gn.textContent = '1';
    if (sort) sort.value = 'default';

    /* Reset pills */
    document.querySelectorAll('.lf-pill').forEach(function (p) {
        p.classList.remove('on');
        p.setAttribute('aria-pressed', 'false');
    });

    /* Afficher toutes les cartes */
    document.querySelectorAll('.lc-card').forEach(function (c) {
        c.classList.remove('hidden');
    });

    /* Mettre à jour le compteur */
    var total = document.querySelectorAll('.lc-card').length;
    var countEl = document.getElementById('lf-cn');
    if (countEl) countEl.textContent = total;

    /* Cacher message vide */
    var empty = document.getElementById('loc-empty');
    if (empty) empty.setAttribute('hidden', '');

    /* Tri par défaut */
    applySort();
};

/* Pré-filtrage URL */

/* ══════════════════════════════════════════
   SCROLL FLÈCHES BARRE DE FILTRE
══════════════════════════════════════════ */
window.scrollFilter = function (delta) {
    var wrap = document.getElementById('lf-wrap');
    if (wrap) wrap.scrollLeft += delta;
    updateFilterArrows();
};

function updateFilterArrows() {
    var wrap = document.getElementById('lf-wrap');
    var left = document.getElementById('lf-arrow-left');
    var right = document.getElementById('lf-arrow-right');
    if (!wrap || !left || !right) return;
    var atStart = wrap.scrollLeft <= 4;
    var atEnd = wrap.scrollLeft + wrap.clientWidth >= wrap.scrollWidth - 4;
    left.classList.toggle('visible', !atStart);
    right.classList.toggle('visible', !atEnd);
}

function initFilterScroll() {
    var wrap = document.getElementById('lf-wrap');
    if (!wrap) return;
    wrap.addEventListener('scroll', updateFilterArrows, { passive: true });
    /* Attendre le rendu avant de vérifier si les flèches sont nécessaires */
    setTimeout(updateFilterArrows, 200);
    window.addEventListener('resize', updateFilterArrows, { passive: true });
}

function initUrlFilter() {
    var p = new URLSearchParams(window.location.search);
    var zone = p.get('zone');
    if (zone) {
        var sel = document.getElementById('lf-zone');
        if (sel) { sel.value = zone; applyFilters(); }
    }
}

/* Touche Entrée sur la barre de filtre déclenche Appliquer */
function initFilterKeyboard() {
    var filterBar = document.getElementById('loc-filters');
    if (!filterBar) return;
    filterBar.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            applyFilters();
            applySort();
        }
    });
    /* Zone select : appliquer immédiatement au changement */
    var zoneEl = document.getElementById('lf-zone');
    if (zoneEl) zoneEl.addEventListener('change', function () { applyFilters(); });
    /* Sort select : appliquer immédiatement */
    var sortEl = document.getElementById('lf-sort');
    if (sortEl) sortEl.addEventListener('change', function () { applyFilters(); applySort(); });
}

/* ══════════════════════════════════════════
   FAVORIS
══════════════════════════════════════════ */
var locFavs = new Set();

window.toggleFav = function (btn, name) {
    var on = locFavs.has(name);
    if (on) {
        locFavs.delete(name);
        btn.classList.remove('on');
        btn.textContent = '♡';
        btn.setAttribute('aria-pressed', 'false');
    } else {
        locFavs.add(name);
        btn.classList.add('on');
        btn.textContent = '♥';
        btn.setAttribute('aria-pressed', 'true');
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(btn, { scale: 1.5 }, { scale: 1, duration: .4, ease: 'elastic.out(1,.4)' });
        }
    }
};

/* ══════════════════════════════════════════
   GSAP ANIMATIONS
══════════════════════════════════════════ */
function initGSAP() {
    /* Pas de GSAP ou prefers-reduced-motion → tout reste visible */
    if (typeof gsap === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── Hero : Ken Burns + parallax scroll ── */
    var heroImg = document.getElementById('loc-hero-img');
    if (heroImg) {
        gsap.to(heroImg, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(heroImg, {
            scrollTrigger: { trigger: '.loc-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '18%', ease: 'none'
        });
    }

    /* ── Hero texte reveal ── */
    var eyebrow = document.querySelector('.loc-hero-eyebrow');
    var words = document.querySelectorAll('.loc-h1-word');
    var sub = document.querySelector('.loc-hero-sub');
    var stats = document.querySelector('.loc-hero-stats');

    var tl = gsap.timeline({ delay: .1 });
    if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (words.length) tl.to(words, { y: 0, opacity: 1, duration: 1.1, stagger: .14, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.45');
    if (stats) tl.from(stats, { opacity: 0, y: 14, duration: .75, ease: 'power3.out' }, '-=.3');

    /* ── Filtres : shadow au scroll ── */
    var filters = document.getElementById('loc-filters');
    if (filters) {
        ScrollTrigger.create({
            trigger: filters,
            start: 'top top',
            onEnter: function () { filters.classList.add('shadow'); },
            onLeaveBack: function () { filters.classList.remove('shadow'); }
        });
    }

    /* ── Cartes villas : reveal cinématique ── */
    getCards().forEach(function (card, i) {
        var photo = card.querySelector('[data-gsap-photo]');
        var body = card.querySelector('[data-gsap-body]');
        var img = card.querySelector('.lcc-img');

        /* Carte entière */
        gsap.fromTo(card,
            { opacity: 0, y: 48 },
            {
                scrollTrigger: { trigger: card, start: 'top 85%', once: true },
                opacity: 1, y: 0,
                duration: 1.0,
                delay: (i % 2) * .1,
                ease: 'power3.out'
            }
        );

        /* Photo : clip reveal gauche → droite */
        if (photo) {
            gsap.fromTo(photo,
                { clipPath: 'inset(0 100% 0 0)' },
                {
                    scrollTrigger: { trigger: card, start: 'top 88%', once: true },
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 1.3,
                    ease: 'power4.inOut'
                }
            );
        }

        /* Image : parallax scroll */
        if (img) {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom', end: 'bottom top',
                    scrub: 1.5
                },
                y: '-10%', ease: 'none'
            });
        }

        /* Corps : stagger reveal */
        if (body) {
            var children = Array.from(body.children);
            gsap.fromTo(children,
                { opacity: 0, y: 22 },
                {
                    scrollTrigger: { trigger: card, start: 'top 80%', once: true },
                    opacity: 1, y: 0,
                    duration: .75,
                    stagger: .09,
                    delay: .3,
                    ease: 'power3.out'
                }
            );
        }
    });

    /* ── Sidebar ── */
    document.querySelectorAll('[data-gsap-aside]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 28 },
            {
                scrollTrigger: { trigger: el, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .85, delay: i * .12, ease: 'power3.out'
            }
        );
    });

    /* ── CTA Proprio ── */
    var owners = document.querySelector('[data-gsap-owners]');
    if (owners) {
        gsap.fromTo(owners,
            { opacity: 0, y: 36 },
            {
                scrollTrigger: { trigger: '.loc-owners', start: 'top 72%', once: true },
                opacity: 1, y: 0, duration: 1.0, ease: 'power3.out'
            }
        );
    }

    /* ── KPI count-up ── */
    document.querySelectorAll('.lok-n').forEach(function (el) {
        var txt = el.textContent.trim();
        var num = parseFloat(txt.replace(/[^\d.]/g, ''));
        var suffix = txt.replace(String(Math.floor(num)), '');
        if (isNaN(num)) return;
        var obj = { v: 0 };
        ScrollTrigger.create({
            trigger: el, start: 'top 88%', once: true,
            onEnter: function () {
                gsap.to(obj, {
                    v: num, duration: 1.8, ease: 'power3.out',
                    onUpdate: function () {
                        el.textContent = (Number.isInteger(num) ? Math.round(obj.v) : obj.v.toFixed(1)) + suffix;
                    }
                });
            }
        });
    });
}

/* ══════════════════════════════════════════
   STICKY MOBILE
══════════════════════════════════════════ */
function initStickyMob() {
    var sm = document.getElementById('sticky-mob');
    if (!sm) return;
    window.addEventListener('scroll', function () {
        sm.style.display = window.scrollY > 500 ? 'grid' : 'none';
    }, { passive: true });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    /* VH fix mobile */
    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    /* Filtres */
    initUrlFilter();
    initFilterKeyboard();
    initFilterScroll();

    /* GSAP */
    initGSAP();

    /* Sticky */
    initStickyMob();

    /* Escape ferme les modales */
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLeadModal === 'function') closeLeadModal();
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });

    /* Majordome auto-open 14s */
    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 14000);
});