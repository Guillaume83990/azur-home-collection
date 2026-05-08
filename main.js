/* ============================================================
   AZUR HOME COLLECTION v8 — main.js
   Architecture i18n JSON · 4 langues FR/EN/DE/IT
   Search pill + envoi email · Majordome smart flow
   GSAP · Lenis · navigator.language auto-detect
   ============================================================ */
'use strict';

/* ══════════════════════════════════════════
   i18n ENGINE — Charge les JSON externes
   Architecture : data-t="key.subkey" → T[lang].key.subkey
══════════════════════════════════════════ */
let T = {};
let lang = 'fr';
const LANGS = ['fr', 'en', 'de', 'it'];

// Résolution dot-notation : get(T, 'hero.tag')
function get(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

async function loadTranslations(l) {
    try {
        const r = await fetch(`translations/${l}.json`);
        if (!r.ok) throw new Error();
        T = await r.json();
    } catch (e) {
        console.warn(`Translation ${l} not found, falling back to fr`);
    }
}

async function applyLang(l) {
    if (!LANGS.includes(l)) l = 'fr';
    lang = l;
    document.documentElement.lang = l;

    await loadTranslations(l);

    // Appliquer data-t="key.subkey" → innerHTML
    document.querySelectorAll('[data-t]').forEach(el => {
        const v = get(T, el.getAttribute('data-t'));
        if (v !== null && v !== undefined) el.innerHTML = v;
    });
    // data-t-ph="key" → placeholder
    document.querySelectorAll('[data-t-ph]').forEach(el => {
        const v = get(T, el.getAttribute('data-t-ph'));
        if (v) el.placeholder = v;
    });
    // Lang buttons
    document.querySelectorAll('.lb').forEach(b => {
        const a = b.dataset.lang === l;
        b.classList.toggle('active', a);
        b.setAttribute('aria-pressed', String(a));
    });

    try { localStorage.setItem('ahc_lang', l); } catch (_) { }
}

/* ══════════════════════════════════════════
   LENIS — Smooth scroll
══════════════════════════════════════════ */
let lenis;
function initLenis() {
    if (typeof Lenis === 'undefined' || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    lenis = new Lenis({ duration: 1.32, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true, smoothTouch: false });
    function raf(t) { lenis.raf(t); if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update(); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
}

window.scrollToSection = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -80, duration: 1.6 });
    else el.scrollIntoView({ behavior: 'smooth' });
};

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
function initNav() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const mob = document.getElementById('mob-menu');
    if (!nav) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 80);
        if (y > 200) {
            if (y > lastY + 10) nav.classList.add('hidden');
            else if (y < lastY - 5) nav.classList.remove('hidden');
        } else nav.classList.remove('hidden');
        lastY = y;
    }, { passive: true });
    if (burger && mob) {
        burger.addEventListener('click', () => {
            const o = burger.classList.toggle('open');
            mob.classList.toggle('open', o);
            mob.setAttribute('aria-hidden', String(!o));
            burger.setAttribute('aria-expanded', String(o));
            document.body.style.overflow = o ? 'hidden' : '';
        });
        mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            burger.classList.remove('open'); mob.classList.remove('open');
            mob.setAttribute('aria-hidden', 'true'); burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }));
    }
}

/* ══════════════════════════════════════════
   INTRO — Logo réel + animation GSAP
══════════════════════════════════════════ */
function initIntro() {
    const top = document.querySelector('.intro-top');
    const bot = document.querySelector('.intro-bot');
    const logo = document.querySelector('.intro-logo');
    const intro = document.getElementById('intro');
    if (!top || !bot || typeof gsap === 'undefined') { intro?.remove(); startHero(); return; }
    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (reduced) { intro?.remove(); startHero(); return; }
    gsap.set(logo, { opacity: 0, scale: .9 });
    const tl = gsap.timeline({ onComplete: () => { intro?.remove(); startHero(); } });
    tl.to(logo, { opacity: 1, scale: 1, duration: .6, ease: 'power3.out' })
        .to({}, { duration: .95 })
        .to(top, { yPercent: -100, duration: 1.1, ease: 'power4.inOut' })
        .to(bot, { yPercent: 100, duration: 1.1, ease: 'power4.inOut' }, '<')
        .to(logo, { opacity: 0, scale: .88, duration: .35, ease: 'power2.in' }, '-=.55');
}

/* ══════════════════════════════════════════
   HERO REVEAL — GSAP
══════════════════════════════════════════ */
function startHero() {
    // S'assurer que le search pill est TOUJOURS visible
    const pill = document.getElementById('search-pill');
    if (pill) pill.style.opacity = '1';

    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.hero-eyebrow,.h1w>*,.hero-sub').forEach(el => {
            el.style.opacity = '1'; el.style.transform = 'none'; el.style.filter = 'none';
        });
        return;
    }
    const tl = gsap.timeline({ delay: .08 });
    tl.from('.hero-eyebrow', { opacity: 0, y: 12, duration: .7, ease: 'power3.out' })
        .to('.h1w>*', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.05, stagger: .17, ease: 'power4.out' }, '-=.25')
        .from('.hero-sub', { opacity: 0, y: 16, duration: .9, ease: 'power3.out' }, '-=.35');
    // search-pill déjà visible (opacity:1 en CSS)

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('#hpx', { scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }, yPercent: 20, ease: 'none' });

        // Brand
        gsap.from('.bi-left>*,.bi-right', { scrollTrigger: { trigger: '.brand', start: 'top 72%' }, opacity: 0, y: 28, duration: .85, stagger: .1, ease: 'power3.out' });
        gsap.from('.bv', { scrollTrigger: { trigger: '.brand-values', start: 'top 74%' }, opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out' });
        gsap.from('.sv-item', { scrollTrigger: { trigger: '.services-row', start: 'top 74%' }, opacity: 0, y: 22, duration: .8, stagger: .12, ease: 'power3.out' });

        // Villas
        gsap.from('.villa', { scrollTrigger: { trigger: '.villas', start: 'top 75%' }, opacity: 0, y: 30, duration: .9, stagger: .14, ease: 'power3.out' });

        // Destinations
        gsap.from('.dest', { scrollTrigger: { trigger: '.dests-grid', start: 'top 74%' }, clipPath: 'inset(0 100% 0 0)', duration: 1.1, stagger: .18, ease: 'power4.inOut' });

        // Conc + Owners
        gsap.from('.conc-img', { scrollTrigger: { trigger: '.conc', start: 'top 70%' }, clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power4.inOut' });
        gsap.from('.conc-text>*', { scrollTrigger: { trigger: '.conc', start: 'top 70%' }, opacity: 0, y: 26, duration: .85, stagger: .1, ease: 'power3.out' });
        gsap.from('.ow-text>*', { scrollTrigger: { trigger: '.owners', start: 'top 70%' }, opacity: 0, y: 26, duration: .85, stagger: .1, ease: 'power3.out' });
        gsap.from('.ow-img', { scrollTrigger: { trigger: '.ow-img', start: 'top 70%' }, clipPath: 'inset(0 100% 0 0)', duration: 1.1, ease: 'power4.inOut' });

        // Trust count-up
        document.querySelectorAll('.tg-n').forEach(el => {
            const txt = el.textContent.trim(), num = parseFloat(txt);
            if (isNaN(num)) return;
            const suf = txt.replace(String(num), ''), obj = { v: 0 };
            ScrollTrigger.create({
                trigger: el, start: 'top 85%', once: true,
                onEnter: () => gsap.to(obj, { v: num, duration: 2, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(obj.v) + suf; } })
            });
        });

        // FAQ + NL
        gsap.from('.faq-head>*', { scrollTrigger: { trigger: '.faq', start: 'top 74%' }, opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out' });
        gsap.from('.faq-item', { scrollTrigger: { trigger: '.faq-list', start: 'top 74%' }, opacity: 0, y: 18, duration: .7, stagger: .07, ease: 'power3.out' });
        gsap.from('.nl-text>*', { scrollTrigger: { trigger: '.newsletter', start: 'top 72%' }, opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out' });
        gsap.from('.nl-form', { scrollTrigger: { trigger: '.nl-form', start: 'top 78%' }, opacity: 0, y: 18, duration: .85, ease: 'power3.out' });
        gsap.from('.cf-inner>*', { scrollTrigger: { trigger: '.cta-final', start: 'top 72%' }, opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out' });
    }
}

/* ══════════════════════════════════════════
   SEARCH PILL — 2 étapes + envoi WhatsApp/email
══════════════════════════════════════════ */
let searchStep = 1;
let searchData = {};

window.showDestDrop = function () { document.getElementById('sp-dest-drop')?.classList.add('open'); };
window.hideDestDrop = function () { setTimeout(() => document.getElementById('sp-dest-drop')?.classList.remove('open'), 200); };
window.setDest = function (val) { const i = document.getElementById('sp-dest'); if (i) i.value = val; };

/* ════════════════════════════════════════
   SEARCH PILL — 2 étapes + envoi email réel via EmailJS
   EmailJS : gratuit jusqu'à 200 emails/mois, sans backend
   ════════════════════════════════════════ */
// ⚙️ CONFIG EmailJS — À remplir avec vos identifiants EmailJS
// 1. Créer un compte sur emailjs.com (gratuit)
// 2. Créer un "Email Service" (Gmail ou autre)
// 3. Créer un "Email Template" avec les variables ci-dessous
// 4. Remplir les 3 constantes :
const EMAILJS_SERVICE_ID = 'service_XXXXXXX';   // ← Votre Service ID EmailJS
const EMAILJS_TEMPLATE_ID = 'template_XXXXXXX';  // ← Votre Template ID EmailJS
const EMAILJS_PUBLIC_KEY = 'XXXXXXXXXXXXXXXXXXXX'; // ← Votre Public Key EmailJS

// Template EmailJS suggéré (créez-le sur emailjs.com) :
// Sujet : 🏖️ Nouvelle demande — {{villa_dest}} — {{client_name}}
// Corps :
// Nouvelle demande de réservation reçue via azurhomecollection.com
//
// 👤 Client : {{client_name}}
// 📧 Email : {{client_email}}
// 📞 Téléphone : {{client_phone}}
//
// 📍 Destination : {{villa_dest}}
// 📅 Arrivée : {{checkin}}
// 📅 Départ : {{checkout}}
// 👥 Voyageurs : {{guests}}
//
// → Répondre directement à {{client_email}}

window.submitSearch = async function (e) {
    e.preventDefault();
    const dest = document.getElementById('sp-dest')?.value?.trim();
    const checkin = document.getElementById('sp-in')?.value;
    const checkout = document.getElementById('sp-out')?.value;
    const guests = document.getElementById('sp-guests')?.value;

    if (searchStep === 1) {
        // Valider qu'au moins la destination est renseignée
        if (!dest && !checkin && !guests) {
            document.getElementById('sp-dest')?.focus();
            return;
        }
        searchData = { dest: dest || 'Golfe de Saint-Tropez', checkin, checkout, guests };
        const step2 = document.getElementById('sp-step2');
        const btn = document.getElementById('sp-btn-txt');
        if (step2) { step2.style.display = 'flex'; }
        if (btn) { btn.textContent = 'Confirmer →'; }
        searchStep = 2;
        gtag('event', 'search_step1', { event_category: 'Lead', event_label: searchData.dest });
        // Scroll doux vers la pill si nécessaire
        document.getElementById('search-pill')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // ── Étape 2 : Récupérer les coordonnées
    const name = document.getElementById('sp-name')?.value?.trim();
    const email = document.getElementById('sp-email')?.value?.trim();
    const phone = document.getElementById('sp-phone')?.value?.trim();

    if (!name || !email || !phone) {
        // Feedback visuel si champs manquants
        [['sp-name', name], ['sp-email', email], ['sp-phone', phone]].forEach(([id, val]) => {
            if (!val) document.getElementById(id)?.classList.add('sp-error');
        });
        return;
    }

    // Formater les dates lisiblement
    const fmtDate = d => {
        if (!d) return '—';
        const [y, m, mo] = d.split('-');
        const months = { '01': 'jan', '02': 'fév', '03': 'mar', '04': 'avr', '05': 'mai', '06': 'juin', '07': 'juil', '08': 'aoû', '09': 'sep', '10': 'oct', '11': 'nov', '12': 'déc' };
        return `${parseInt(mo)} ${months[m]} ${y}`;
    };

    // Calcul durée
    let dureeStr = '';
    if (searchData.checkin && searchData.checkout) {
        const d1 = new Date(searchData.checkin), d2 = new Date(searchData.checkout);
        const nuits = Math.round((d2 - d1) / 86400000);
        if (nuits > 0) dureeStr = ` (${nuits} nuit${nuits > 1 ? 's' : ''})`;
    }

    const templateParams = {
        client_name: name,
        client_email: email,
        client_phone: phone,
        villa_dest: searchData.dest || 'Non précisé',
        checkin: fmtDate(searchData.checkin),
        checkout: fmtDate(searchData.checkout),
        duree: dureeStr,
        guests: searchData.guests || 'Non précisé',
        reply_to: email,
        // Message formaté complet pour le template email
        full_message:
            `Nouvelle demande de réservation reçue via azurhomecollection.com\n\n` +
            `👤 ${name}\n📧 ${email}\n📞 ${phone}\n\n` +
            `📍 Destination : ${searchData.dest || 'Non précisé'}\n` +
            `📅 Arrivée : ${fmtDate(searchData.checkin)}\n` +
            `📅 Départ : ${fmtDate(searchData.checkout)}${dureeStr}\n` +
            `👥 Voyageurs : ${searchData.guests || 'Non précisé'}`
    };

    // ── Bouton en état chargement
    const btn = document.getElementById('sp-btn');
    if (btn) { btn.style.opacity = '.6'; btn.style.pointerEvents = 'none'; }

    gtag('event', 'search_submit', { event_category: 'Lead', event_label: searchData.dest, value: 1 });

    try {
        // ── Envoi via EmailJS
        if (window.emailjs && EMAILJS_SERVICE_ID !== 'service_XXXXXXX') {
            await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        } else {
            // Fallback : ouvrir client mail natif (mailto:) si EmailJS non configuré
            const subject = encodeURIComponent(`🏖️ Demande réservation — ${searchData.dest} — ${name}`);
            const body = encodeURIComponent(templateParams.full_message);
            window.location.href = `mailto:guillaumindany@gmail.com?subject=${subject}&body=${body}`;
        }

        // ── Succès : afficher le message de confirmation
        const pill = document.getElementById('search-pill');
        const ok = document.getElementById('search-ok');
        if (pill) pill.style.display = 'none';
        if (ok) { ok.style.display = 'flex'; ok.classList.add('visible'); }

        // Reset complet après 6 secondes
        setTimeout(() => {
            if (pill) { pill.style.display = ''; searchStep = 1; }
            const step2 = document.getElementById('sp-step2');
            if (step2) { step2.style.display = 'none'; }
            if (ok) { ok.style.display = 'none'; ok.classList.remove('visible'); }
            const btxt = document.getElementById('sp-btn-txt');
            if (btxt) { btxt.textContent = get(T, 'search.btn') || 'Rechercher'; }
            if (btn) { btn.style.opacity = ''; btn.style.pointerEvents = ''; }
            document.getElementById('search-pill')?.reset?.();
        }, 6000);

    } catch (err) {
        console.error('EmailJS error:', err);
        // Fallback WhatsApp si EmailJS échoue
        const msg = encodeURIComponent(templateParams.full_message);
        window.open(`https://wa.me/+33621084443?text=${msg}`, '_blank');
        if (btn) { btn.style.opacity = ''; btn.style.pointerEvents = ''; }
    }
};

/* ══════════════════════════════════════════
   FILTRES VILLAS
══════════════════════════════════════════ */
let activeDest = 'all', activeAm = new Set(), minGuests = 1;

window.toggleAmenFilter = function () {
    const drop = document.getElementById('famen-drop');
    const toggle = document.getElementById('famen-toggle');
    if (!drop) return;
    const open = !drop.hidden;
    drop.hidden = open;
    toggle?.classList.toggle('open', !open);
};

function applyVillaFilters() {
    const villas = document.querySelectorAll('.villa');
    villas.forEach(v => {
        const dest = v.dataset.dest || '';
        const am = v.dataset.am || '';
        const guests = parseInt(v.dataset.guests || '0');
        let show = (activeDest === 'all' || dest === activeDest) && guests >= minGuests;
        activeAm.forEach(a => { if (!am.includes(a)) show = false; });
        v.classList.toggle('hidden', !show);
    });
    gtag('event', 'filter_apply', { event_category: 'Filters', event_label: activeDest });
}

window.resetFilters = function () {
    activeDest = 'all'; activeAm.clear(); minGuests = 1;
    document.querySelectorAll('.fp').forEach(p => { p.classList.remove('fp--on'); if (p.dataset.v === 'all') p.classList.add('fp--on'); });
    document.querySelectorAll('.fam').forEach(b => b.classList.remove('on'));
    document.getElementById('fag-n').textContent = '1';
    applyVillaFilters();
};

function initFilters() {
    // Destination pills
    document.querySelectorAll('.fp[data-f="dest"]').forEach(p => {
        p.addEventListener('click', () => {
            activeDest = p.dataset.v;
            document.querySelectorAll('.fp[data-f="dest"]').forEach(x => x.classList.remove('fp--on'));
            p.classList.add('fp--on');
            applyVillaFilters();
        });
    });

    // Amenity buttons
    document.querySelectorAll('.fam').forEach(b => {
        b.addEventListener('click', () => {
            const am = b.dataset.am;
            if (activeAm.has(am)) { activeAm.delete(am); b.classList.remove('on'); }
            else { activeAm.add(am); b.classList.add('on'); }
            applyVillaFilters();
        });
    });

    // Guests +/-
    const nEl = document.getElementById('fag-n');
    document.getElementById('fag-p')?.addEventListener('click', () => {
        minGuests = Math.min(20, minGuests + 1);
        if (nEl) nEl.textContent = minGuests;
        applyVillaFilters();
    });
    document.getElementById('fag-m')?.addEventListener('click', () => {
        minGuests = Math.max(1, minGuests - 1);
        if (nEl) nEl.textContent = minGuests;
        applyVillaFilters();
    });

    // Close amenity drop on outside click
    document.addEventListener('click', e => {
        const drop = document.getElementById('famen-drop');
        const toggle = document.getElementById('famen-toggle');
        if (drop && !drop.contains(e.target) && e.target !== toggle) {
            drop.hidden = true; toggle?.classList.remove('open');
        }
    });
}

/* ══════════════════════════════════════════
   MODALE BROCHURE
══════════════════════════════════════════ */
let currentProp = '';
window.openBrochure = function (prop) {
    currentProp = prop;
    const m = document.getElementById('modal');
    const mp = document.getElementById('modal-prop');
    if (!m) return;
    if (mp) mp.textContent = prop;
    m.classList.add('open'); m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    gtag('event', 'brochure_open', { event_category: 'Lead', event_label: prop });
};
function closeModal() {
    const m = document.getElementById('modal');
    if (!m) return;
    m.classList.remove('open'); m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
window.submitBrochure = function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    gtag('event', 'brochure_submit', { event_category: 'Conversion', event_label: currentProp, value: 1 });
    const msg = encodeURIComponent(`${get(T, 'maj.wa_greeting') || 'Bonjour'} brochure ${currentProp}.\n${data.name} · ${data.email}\n${data.phone || ''}\n${data.dates || ''}`);
    window.open(`https://wa.me/+33621084443?text=${msg}`, '_blank');
    closeModal();
};

/* ══════════════════════════════════════════
   FAQ TOGGLE
══════════════════════════════════════════ */
window.toggleFaq = function (btn) {
    const item = btn.closest('.faq-item');
    const panel = item?.querySelector('.faq-a');
    if (!item || !panel) return;
    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        const p = b.closest('.faq-item')?.querySelector('.faq-a');
        if (p) {
            if (typeof gsap !== 'undefined') gsap.to(p, { height: 0, opacity: 0, duration: .3, ease: 'power2.inOut', onComplete: () => { p.hidden = true; p.style.height = ''; } });
            else p.hidden = true;
        }
    });
    if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
        if (typeof gsap !== 'undefined') gsap.fromTo(panel, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: .4, ease: 'power2.out' });
        gtag('event', 'faq_open', { event_category: 'FAQ' });
    }
};

/* ══════════════════════════════════════════
   NEWSLETTER
══════════════════════════════════════════ */
window.submitNL = function (e) {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('nl-submit');
    const data = Object.fromEntries(new FormData(form));
    if (!data.consent) return;
    if (btn) { btn.disabled = true; btn.querySelector('span').textContent = get(T, 'nl.sending') || '…'; }
    gtag('event', 'newsletter_subscribe', { event_category: 'Lead', event_label: data.destination, value: 1 });
    setTimeout(() => {
        if (btn) { btn.style.background = '#2ECC71'; btn.querySelector('span').textContent = get(T, 'nl.success') || '✓'; }
    }, 800);
};

/* ══════════════════════════════════════════
   MAJORDOME — Smart Flow
══════════════════════════════════════════ */
let majOpen = false;
let flowState = { step: '0', intent: '', dest: '', contact: '' };
const WA = '+33621084443';
const FLOW = { '0': { rent: '1a', sell: '1b', conc: '1c' }, '1a': { st: '2', cour: '2', both: '2' }, '1b': { 'villa-sell': '2', 'apt-sell': '2' }, '1c': { chef: '2', transfer: '2', wellness: '2', xp: '2' }, '2': { wa: 'wa', callback: '3', brochure: '3' } };
const PROG = { '0': 10, '1a': 35, '1b': 35, '1c': 35, '2': 65, '3': 85, '4': 100 };

function addMsg(txt, isBot = true) {
    const msgs = document.getElementById('maj-msgs'); if (!msgs) return;
    const d = document.createElement('div'); d.className = isBot ? 'mm-b' : 'mm-u';
    const p = document.createElement('p'); p.innerHTML = txt; d.appendChild(p);
    msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
}
function showStep(id) {
    document.querySelectorAll('.mj-step').forEach(s => s.classList.remove('active'));
    document.getElementById('mjs-' + id)?.classList.add('active');
    const bar = document.getElementById('maj-bar'); if (bar) bar.style.width = (PROG[id] || 10) + '%';
}
function buildWAMsg() {
    const il = { rent: get(T, 'maj.wa_intent_rent'), sell: get(T, 'maj.wa_intent_sell'), conc: get(T, 'maj.wa_intent_conc') };
    const dl = { st: 'Saint-Tropez', cour: 'Courchevel', both: 'Saint-Tropez & Courchevel', 'villa-sell': get(T, 'maj.wa_dest_villa'), 'apt-sell': get(T, 'maj.wa_dest_apt') };
    let m = `${get(T, 'maj.wa_greeting') || 'Bonjour'} ${il[flowState.intent] || flowState.intent}`;
    if (flowState.dest) m += `\n${get(T, 'maj.wa_dest_label') || 'Destination:'} ${dl[flowState.dest] || flowState.dest}`;
    m += `\n\n${get(T, 'maj.wa_closing') || 'Pouvez-vous me contacter ?'}`;
    return encodeURIComponent(m);
}

window.flowNext = function (choice) {
    const step = flowState.step;
    const nextMap = FLOW[step] || {};
    const next = nextMap[choice];
    if (step === '0') flowState.intent = choice;
    if (['1a', '1b', '1c'].includes(step)) flowState.dest = choice;
    if (step === '2') flowState.contact = choice;
    // User bubble
    const btn = document.querySelector(`.mj-step.active button[onclick*="${choice}"]`);
    if (btn) addMsg(btn.textContent.trim(), false);
    gtag('event', 'maj_step', { event_category: 'Majordome', event_label: `${step}_${choice}` });
    // WA redirect
    if (next === 'wa') {
        gtag('event', 'maj_wa_redirect', { event_category: 'Lead', value: 1 });
        setTimeout(() => {
            addMsg(get(T, 'maj.wa_now') || 'WhatsApp →');
            setTimeout(() => window.open(`https://wa.me/${WA}?text=${buildWAMsg()}`, '_blank'), 700);
        }, 400);
        flowState.step = '4'; setTimeout(() => showStep('4'), 1200); return;
    }
    if (!next) return;
    flowState.step = next;
    const replyKeys = { '1a': 'maj.bot_1a', '1b': 'maj.bot_1b', '1c': 'maj.bot_1c', '2': 'maj.bot_2', '3': 'maj.bot_3' };
    const reply = get(T, replyKeys[next]);
    if (reply) setTimeout(() => addMsg(reply), 350);
    setTimeout(() => showStep(next), 650);
};

window.flowBack = function () {
    const back = { '1a': '0', '1b': '0', '1c': '0', '2': '1a', '3': '2' };
    const prev = back[flowState.step];
    if (prev !== undefined) { flowState.step = prev; showStep(prev); }
};

window.submitMaj = function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    addMsg(`${data.name} · ${data.contact}`, false);
    gtag('event', 'maj_lead_capture', { event_category: 'Conversion', event_label: flowState.intent, value: 1 });
    flowState.step = '4';
    setTimeout(() => {
        addMsg(get(T, 'maj.bot_confirm') || 'Merci ! Un expert vous contacte sous 15 min.');
        showStep('4');
        const waf = document.getElementById('mj-wa-final');
        if (waf) {
            const msg = encodeURIComponent(`${get(T, 'maj.wa_greeting') || 'Bonjour'} ${data.name} (${data.contact}).`);
            waf.onclick = () => { window.open(`https://wa.me/${WA}?text=${msg}`, '_blank'); gtag('event', 'maj_wa_final', { event_category: 'Lead', value: 1 }); };
        }
    }, 500);
};

window.redirectToWA = function () {
    gtag('event', 'maj_wa_final', { event_category: 'Lead', value: 1 });
    window.open(`https://wa.me/${WA}?text=${buildWAMsg()}`, '_blank');
};

function openMajPanel() {
    const panel = document.getElementById('maj-panel');
    const btn = document.getElementById('maj-btn');
    const icoO = document.querySelector('.mj-o');
    const icoC = document.querySelector('.mj-c');
    const notif = document.querySelector('.maj-notif');
    if (!panel) return;
    majOpen = true;
    panel.classList.add('open'); panel.setAttribute('aria-hidden', 'false');
    if (btn) btn.setAttribute('aria-expanded', 'true');
    if (icoO) icoO.style.display = 'none'; if (icoC) icoC.style.display = 'block';
    if (notif) notif.style.display = 'none';
    const msgs = document.getElementById('maj-msgs');
    if (msgs && msgs.children.length === 0) setTimeout(() => addMsg(get(T, 'maj.welcome') || 'Bienvenue 👋'), 350);
}
function closeMajPanel() {
    const panel = document.getElementById('maj-panel');
    const btn = document.getElementById('maj-btn');
    const icoO = document.querySelector('.mj-o');
    const icoC = document.querySelector('.mj-c');
    if (!panel) return;
    majOpen = false;
    panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true');
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (icoO) icoO.style.display = 'flex'; if (icoC) icoC.style.display = 'none';
}
window.openMaj = openMajPanel;
window.toggleMaj = function () { majOpen ? closeMajPanel() : openMajPanel(); };

function initMajordome() {
    const xBtn = document.getElementById('maj-x');
    if (xBtn) xBtn.addEventListener('click', closeMajPanel);
    setTimeout(() => { if (!majOpen) { openMajPanel(); gtag('event', 'maj_auto_open', { event_category: 'Majordome' }); } }, 10000);
}

/* ══════════════════════════════════════════
   INIT — DOMContentLoaded
══════════════════════════════════════════ */

/* ══════════════════════════════════════════
   MODALE LEAD — Capture leads depuis search pill
══════════════════════════════════════════ */
window.openLeadModal = function () {
    const modal = document.getElementById('lead-modal');
    if (!modal) return;

    // Récupérer les données de la search pill
    const dest = document.getElementById('sp-dest')?.value?.trim();
    const checkin = document.getElementById('sp-in')?.value;
    const checkout = document.getElementById('sp-out')?.value;
    const guests = document.getElementById('sp-guests')?.value;

    // Construire le récap visuel
    const recap = document.getElementById('lm-recap');
    if (recap) {
        const fmtDate = d => {
            if (!d) return null;
            const [y, m, mo] = d.split('-');
            const months = ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc'];
            return `${parseInt(mo)} ${months[parseInt(m) - 1]} ${y}`;
        };
        let items = [];
        if (dest) items.push(`<div class="lm-recap-item">📍 <strong>${dest}</strong></div>`);
        if (checkin) items.push(`<div class="lm-recap-item">📅 <strong>${fmtDate(checkin)}</strong></div>`);
        if (checkout) {
            items.push(`<span class="lm-recap-dot">→</span>`);
            items.push(`<div class="lm-recap-item"><strong>${fmtDate(checkout)}</strong></div>`);
        }
        if (guests && guests !== '2') items.push(`<div class="lm-recap-item">👥 <strong>${guests} personnes</strong></div>`);
        recap.innerHTML = items.join('<span class="lm-recap-dot">·</span>');
        // Nettoyer les points entre les flèches
        recap.innerHTML = recap.innerHTML.replace(/<span class="lm-recap-dot">·<\/span><span class="lm-recap-dot">→<\/span>/g, '<span class="lm-recap-dot">→</span>');
    }

    // Stocker les données pour l'envoi
    window._searchData = { dest, checkin, checkout, guests };

    // Reset formulaire + afficher état form
    document.getElementById('lm-form-wrap').style.display = '';
    document.getElementById('lm-confirm').style.display = 'none';
    document.getElementById('lm-form')?.reset();
    document.querySelectorAll('.lm-inp').forEach(i => i.classList.remove('error'));

    // Ouvrir
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('lm-name')?.focus(), 300);

    gtag('event', 'lead_modal_open', { event_category: 'Lead', event_label: dest || 'no-dest' });
};

window.closeLeadModal = function () {
    const modal = document.getElementById('lead-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

window.submitLead = async function (e) {
    e.preventDefault();

    const name = document.getElementById('lm-name')?.value?.trim();
    const email = document.getElementById('lm-email')?.value?.trim();
    const phone = document.getElementById('lm-phone')?.value?.trim();
    const msg = document.getElementById('lm-msg')?.value?.trim();
    const sd = window._searchData || {};

    // Validation
    let valid = true;
    [['lm-name', name], ['lm-email', email], ['lm-phone', phone]].forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (!val) { el?.classList.add('error'); valid = false; }
        else el?.classList.remove('error');
    });
    if (!valid) return;

    // Bouton en chargement
    const btn = document.getElementById('lm-submit');
    const txt = document.getElementById('lm-submit-txt');
    if (btn) btn.disabled = true;
    if (txt) txt.textContent = 'Envoi en cours…';

    // Formater les dates
    const fmtDate = d => {
        if (!d) return '—';
        const [y, m, mo] = d.split('-');
        const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
        return `${parseInt(mo)} ${months[parseInt(m) - 1]} ${y}`;
    };

    // Calcul durée
    let dureeStr = '';
    if (sd.checkin && sd.checkout) {
        const nuits = Math.round((new Date(sd.checkout) - new Date(sd.checkin)) / 86400000);
        if (nuits > 0) dureeStr = `${nuits} nuit${nuits > 1 ? 's' : ''}`;
    }

    const templateParams = {
        client_name: name,
        client_email: email,
        client_phone: phone,
        villa_dest: sd.dest || 'Golfe de Saint-Tropez',
        checkin: fmtDate(sd.checkin),
        checkout: fmtDate(sd.checkout),
        duree: dureeStr,
        guests: sd.guests || '—',
        message: msg || '—',
        reply_to: email,
        full_message:
            `🏖️ NOUVELLE DEMANDE — azurhomecollection.com\n\n` +
            `👤 ${name}\n📧 ${email}\n📞 ${phone}\n\n` +
            `📍 Destination : ${sd.dest || 'Golfe de Saint-Tropez'}\n` +
            `📅 Arrivée : ${fmtDate(sd.checkin)}\n` +
            `📅 Départ : ${fmtDate(sd.checkout)}` +
            (dureeStr ? ` (${dureeStr})` : '') + `\n` +
            `👥 Voyageurs : ${sd.guests || '—'}\n` +
            (msg ? `\n💬 Message : ${msg}` : '')
    };

    gtag('event', 'lead_submit', { event_category: 'Conversion', event_label: sd.dest || 'no-dest', value: 1 });

    try {
        // Envoi EmailJS
        if (window.emailjs && typeof EMAILJS_SERVICE_ID !== 'undefined' && EMAILJS_SERVICE_ID !== 'service_XXXXXXX') {
            await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        } else {
            // Fallback mailto si EmailJS pas configuré
            const subj = encodeURIComponent(`🏖️ Demande — ${sd.dest || 'Saint-Tropez'} — ${name}`);
            const body = encodeURIComponent(templateParams.full_message);
            window.open(`mailto:guillaumindany@gmail.com?subject=${subj}&body=${body}`);
        }

        // ── Afficher la confirmation luxe
        document.getElementById('lm-form-wrap').style.display = 'none';
        const confirm = document.getElementById('lm-confirm');
        if (confirm) {
            confirm.style.display = '';
            // Prénom seulement
            const firstName = name.split(' ')[0];
            const nameEl = document.getElementById('lm-conf-name');
            if (nameEl) nameEl.textContent = firstName;
            // Relancer l'animation check
            const circle = confirm.querySelector('.lm-check-circle');
            const tick = confirm.querySelector('.lm-check-tick');
            if (circle) { circle.style.animation = 'none'; void circle.offsetWidth; circle.style.animation = ''; }
            if (tick) { tick.style.animation = 'none'; void tick.offsetWidth; tick.style.animation = ''; }
        }

    } catch (err) {
        console.error('Send error:', err);
        // Fallback WhatsApp
        const waMsg = encodeURIComponent(templateParams.full_message);
        window.open(`https://wa.me/+33621084443?text=${waMsg}`, '_blank');
        if (btn) btn.disabled = false;
        if (txt) txt.textContent = 'Envoyer ma demande';
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    // VH fix
    document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    window.addEventListener('resize', () => document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px'), { passive: true });

    // ── Détection automatique de langue (navigator.language)
    let initLang = 'fr';
    try { initLang = localStorage.getItem('ahc_lang') || 'fr'; } catch (_) { }
    if (!LANGS.includes(initLang)) {
        const bl = (navigator.language || 'fr').slice(0, 2).toLowerCase();
        initLang = LANGS.includes(bl) ? bl : 'fr';
    }

    // Charger la langue initiale
    await applyLang(initLang);

    // ── Boutons de langue
    document.querySelectorAll('.lb').forEach(btn => btn.addEventListener('click', async () => {
        if (btn.dataset.lang && btn.dataset.lang !== lang) {
            await applyLang(btn.dataset.lang);
            gtag('event', 'lang_switch', { event_category: 'UX', event_label: btn.dataset.lang });
        }
    }));

    initNav();
    initFilters();
    initMajordome();
    initLenis();

    // Modal close
    document.getElementById('modal-bg')?.addEventListener('click', closeModal);
    document.getElementById('modal-x')?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeMajPanel(); closeLeadModal(); } });

    // Intro + GSAP
    if (typeof gsap !== 'undefined') {
        if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
        initIntro();
    } else {
        document.getElementById('intro')?.remove();
        startHero();
    }
});