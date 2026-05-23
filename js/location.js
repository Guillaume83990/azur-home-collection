/* ============================================================
   AZUR VILLA PRESTIGE — js/location.js
   Filtres uniquement — ZERO animation GSAP sur les cartes
   ============================================================ */

var locActiveAm = new Set();
var locMinGuests = 1;
var locGuestVal = 1;

function getCards() {
    return Array.from(document.querySelectorAll('.lc-card'));
}

/* ══ FILTRES ══ */
window.applyFilters = function () {
    var zone = (document.getElementById('lf-zone') || {}).value || 'all';
    var visible = 0;

    getCards().forEach(function (card) {
        var czone = card.dataset.zone || '';
        var cam = card.dataset.am || '';
        var cg = parseInt(card.dataset.guests || '0');
        var show = (zone === 'all' || czone === zone) && cg >= locMinGuests;
        locActiveAm.forEach(function (a) { if (!cam.includes(a)) show = false; });

        if (show) {
            card.classList.remove('hidden');
            /* Forcer tout visible — aucune dépendance GSAP */
            card.style.cssText = 'opacity:1;transform:none;display:grid;';
            var photo = card.querySelector('[data-gsap-photo]');
            if (photo) { photo.style.opacity = '1'; photo.style.clipPath = 'none'; photo.style.transform = 'none'; }
            var img = card.querySelector('.lcc-img');
            if (img) { img.style.opacity = '1'; img.style.transform = 'scale(1)'; }
            var body = card.querySelector('[data-gsap-body]');
            if (body) Array.from(body.children).forEach(function (ch) { ch.style.opacity = '1'; ch.style.transform = 'none'; });
            visible++;
        } else {
            card.classList.add('hidden');
            card.style.cssText = 'display:none!important;';
        }
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
};

window.resetAll = function () {
    locActiveAm.clear();
    locGuestVal = 1;
    locMinGuests = 1;

    var zone = document.getElementById('lf-zone');
    var gn = document.getElementById('lf-gn');
    var sort = document.getElementById('lf-sort');
    if (zone) zone.value = 'all';
    if (gn) gn.textContent = '1';
    if (sort) sort.value = 'default';

    document.querySelectorAll('.lf-pill').forEach(function (p) {
        p.classList.remove('on');
        p.setAttribute('aria-pressed', 'false');
    });

    document.querySelectorAll('.lc-card').forEach(function (c) {
        c.classList.remove('hidden');
        c.style.cssText = 'opacity:1;transform:none;';
        var photo = c.querySelector('[data-gsap-photo]');
        if (photo) { photo.style.opacity = '1'; photo.style.clipPath = 'none'; photo.style.transform = 'none'; }
        var img = c.querySelector('.lcc-img');
        if (img) { img.style.opacity = '1'; img.style.transform = 'scale(1)'; }
        var body = c.querySelector('[data-gsap-body]');
        if (body) Array.from(body.children).forEach(function (ch) { ch.style.opacity = '1'; ch.style.transform = 'none'; });
    });

    var total = document.querySelectorAll('.lc-card').length;
    var countEl = document.getElementById('lf-cn');
    if (countEl) countEl.textContent = total;
    var empty = document.getElementById('loc-empty');
    if (empty) empty.setAttribute('hidden', '');

    applySort();
};

/* ══ FAVORIS ══ */
var locFavs = new Set();
window.toggleFav = function (btn, name) {
    var on = locFavs.has(name);
    if (on) { locFavs.delete(name); btn.classList.remove('on'); btn.textContent = '♡'; btn.setAttribute('aria-pressed', 'false'); }
    else { locFavs.add(name); btn.classList.add('on'); btn.textContent = '♥'; btn.setAttribute('aria-pressed', 'true'); }
};

/* ══ GSAP — Hero uniquement, ZERO animation sur les cartes ══ */
function initGSAP() {
    if (typeof gsap === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.loc-h1-word,.loc-hero-eyebrow,.loc-hero-sub,.loc-hero-stats').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Hero Ken Burns */
    var heroImg = document.getElementById('loc-hero-img');
    if (heroImg) {
        gsap.to(heroImg, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(heroImg, {
            scrollTrigger: { trigger: '.loc-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '18%', ease: 'none'
        });
    }

    /* Hero texte */
    var tl = gsap.timeline({ delay: .1 });
    var eyebrow = document.querySelector('.loc-hero-eyebrow');
    var words = document.querySelectorAll('.loc-h1-word');
    var sub = document.querySelector('.loc-hero-sub');
    var stats = document.querySelector('.loc-hero-stats');
    if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (words.length) tl.to(words, { y: 0, opacity: 1, duration: 1.1, stagger: .14, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.45');
    if (stats) tl.from(stats, { opacity: 0, y: 14, duration: .75, ease: 'power3.out' }, '-=.3');

    /* Shadow filtre au scroll */
    var filters = document.getElementById('loc-filters');
    if (filters) {
        ScrollTrigger.create({
            trigger: filters, start: 'top top',
            onEnter: function () { filters.classList.add('shadow'); },
            onLeaveBack: function () { filters.classList.remove('shadow'); }
        });
    }

    /* KPI count-up */
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

/* ══ URL FILTER + CLAVIER ══ */
function initUrlFilter() {
    var p = new URLSearchParams(window.location.search);
    var zone = p.get('zone');
    if (zone) {
        var sel = document.getElementById('lf-zone');
        if (sel) { sel.value = zone; applyFilters(); }
    }
}

function initFilterKeyboard() {
    var filterBar = document.getElementById('loc-filters');
    if (!filterBar) return;
    filterBar.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { applyFilters(); applySort(); }
    });
    var zoneEl = document.getElementById('lf-zone');
    if (zoneEl) zoneEl.addEventListener('change', function () { applyFilters(); });
    var sortEl = document.getElementById('lf-sort');
    if (sortEl) sortEl.addEventListener('change', function () { applyFilters(); applySort(); });
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', function () {
    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    initUrlFilter();
    initFilterKeyboard();
    initGSAP();

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLeadModal === 'function') closeLeadModal();
    });

    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 14000);
});