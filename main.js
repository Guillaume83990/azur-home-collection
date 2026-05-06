/* ============================================================
   AZUR HOME COLLECTION — main.js  PREMIUM EDITION
   ① Cinematic curtain intro + logo reveal
   ② Custom magnetic cursor with particle trail
   ③ Char-by-char hero title animation
   ④ Multi-layer parallax (img / overlay / content)
   ⑤ Text scramble on section labels & tags
   ⑥ Magnetic buttons (elastic snap-back)
   ⑦ Smart nav (hide on scroll down / show on up)
   ⑧ Service cards 3D perspective tilt
   ⑨ Villa cards clip-path wipe reveal
   ⑩ Manifesto letter-by-letter reveal
   ⑪ Animated stat counters
   ⑫ Scrub parallax on hero image via ScrollTrigger
   ============================================================ */

/* ══════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════ */
const TRANSLATIONS = {
    fr: {
        'nav.rental': 'Location', 'nav.management': 'Gestion',
        'nav.concierge': 'Conciergerie', 'nav.about': 'À propos', 'nav.contact': 'Contact',
        'hero.tag': "Côte d'Azur · Depuis 2020",
        'hero.title1': "L'excellence", 'hero.title2': 'au cœur', 'hero.title3': 'de chaque villa.',
        'hero.sub': 'Gestion. Location. Conciergerie.<br>Trois services, une exigence — la vôtre.',
        'hero.cta1': 'Nos villas', 'hero.cta2': 'Nous contacter', 'hero.scroll': 'Découvrir',
        'stats.properties': 'Propriétés gérées', 'stats.occupancy': "Taux d'occupation", 'stats.rating': 'Note moyenne',
        'services.label': 'Nos services', 'services.title1': 'Une maison de gestion', 'services.title2': 'hors du commun.',
        'services.more': 'En savoir plus →',
        'services.s1.title': 'Gestion & Entretien',
        'services.s1.desc': 'Suivi annuel des villas : maintenance, jardins, piscines, intendance permanente. Votre propriété, protégée.',
        'services.s2.title': 'Location Saisonnière',
        'services.s2.desc': 'Commercialisation premium, accueil personnalisé des voyageurs et gestion complète de chaque séjour.',
        'services.s3.title': 'Conciergerie',
        'services.s3.desc': 'Services premium à la demande : chef privé, transferts en berline, expériences et itinéraires sur-mesure.',
        'showcase.label': 'Sélection exclusive', 'showcase.title1': "Des villas d'exception,", 'showcase.title2': 'méticuleusement choisies.',
        'showcase.desc': "Chaque propriété est sélectionnée pour son caractère, son emplacement et le niveau d'expérience qu'elle offre à nos voyageurs.",
        'showcase.cta': 'Voir toutes les villas',
        'villa.available': 'Disponible', 'villa.onrequest': 'Sur demande', 'villa.rooms': 'chambres',
        'villa.pool': 'Piscine à débordement', 'villa.seaview': 'Vue mer', 'villa.from': 'À partir de', 'villa.night': 'nuit',
        'manifesto.q1': 'Une relation de confiance,', 'manifesto.q2': 'un standard sans compromis.',
        'manifesto.sub': "Discrétion, excellence et sur-mesure — les trois piliers d'Azur Home Collection depuis sa fondation.",
        'footer.services': 'Services', 'footer.discover': 'Découvrir', 'footer.apartments': 'Appartements',
        'footer.legal': 'Mentions légales', 'footer.privacy': 'Politique de confidentialité',
    },
    en: {
        'nav.rental': 'Rentals', 'nav.management': 'Management', 'nav.concierge': 'Concierge', 'nav.about': 'About', 'nav.contact': 'Contact',
        'hero.tag': "Côte d'Azur · Since 2020",
        'hero.title1': 'Excellence', 'hero.title2': 'at the heart', 'hero.title3': 'of every villa.',
        'hero.sub': 'Management. Rental. Concierge.<br>Three services, one standard — yours.',
        'hero.cta1': 'Our villas', 'hero.cta2': 'Get in touch', 'hero.scroll': 'Discover',
        'stats.properties': 'Properties managed', 'stats.occupancy': 'Occupancy rate', 'stats.rating': 'Average rating',
        'services.label': 'Our services', 'services.title1': 'A property management', 'services.title2': 'firm like no other.',
        'services.more': 'Learn more →',
        'services.s1.title': 'Property Management',
        'services.s1.desc': 'Year-round villa oversight: maintenance, gardens, pools, permanent on-site management. Your property, protected.',
        'services.s2.title': 'Seasonal Rental',
        'services.s2.desc': 'Premium marketing, personalised guest welcome and full management of every stay.',
        'services.s3.title': 'Concierge',
        'services.s3.desc': 'Premium on-demand services: private chef, executive transfers, bespoke experiences and itineraries.',
        'showcase.label': 'Exclusive selection', 'showcase.title1': 'Exceptional villas,', 'showcase.title2': 'meticulously curated.',
        'showcase.desc': "Each property is selected for its character, its location and the level of experience it offers our guests.",
        'showcase.cta': 'View all villas',
        'villa.available': 'Available', 'villa.onrequest': 'On request', 'villa.rooms': 'bedrooms',
        'villa.pool': 'Infinity pool', 'villa.seaview': 'Sea view', 'villa.from': 'From', 'villa.night': 'night',
        'manifesto.q1': 'A relationship of trust,', 'manifesto.q2': 'an uncompromising standard.',
        'manifesto.sub': 'Discretion, excellence and bespoke service — the three pillars of Azur Home Collection since its founding.',
        'footer.services': 'Services', 'footer.discover': 'Explore', 'footer.apartments': 'Apartments',
        'footer.legal': 'Legal notice', 'footer.privacy': 'Privacy policy',
    },
    de: {
        'nav.rental': 'Vermietung', 'nav.management': 'Verwaltung', 'nav.concierge': 'Concierge', 'nav.about': 'Über uns', 'nav.contact': 'Kontakt',
        'hero.tag': "Côte d'Azur · Seit 2020",
        'hero.title1': 'Exzellenz', 'hero.title2': 'im Herzen', 'hero.title3': 'jeder Villa.',
        'hero.sub': 'Verwaltung. Vermietung. Concierge.<br>Drei Leistungen, ein Anspruch — Ihrer.',
        'hero.cta1': 'Unsere Villen', 'hero.cta2': 'Kontakt aufnehmen', 'hero.scroll': 'Entdecken',
        'stats.properties': 'Verwaltete Objekte', 'stats.occupancy': 'Auslastungsquote', 'stats.rating': 'Durchschnittsnote',
        'services.label': 'Unsere Leistungen', 'services.title1': 'Eine Hausverwaltung', 'services.title2': 'der besonderen Art.',
        'services.more': 'Mehr erfahren →',
        'services.s1.title': 'Verwaltung & Pflege',
        'services.s1.desc': 'Ganzjährige Villenbetreuung: Wartung, Gärten, Pools, permanente Hausmeisterdienste. Ihr Eigentum, geschützt.',
        'services.s2.title': 'Saisionale Vermietung',
        'services.s2.desc': 'Premium-Vermarktung, persönlicher Gästeempfang und vollständige Betreuung jedes Aufenthalts.',
        'services.s3.title': 'Concierge-Service',
        'services.s3.desc': 'Premium-Services auf Anfrage: Privatkoch, Limousinen-Transfer, individuelle Erlebnisse und Reiserouten.',
        'showcase.label': 'Exklusive Auswahl', 'showcase.title1': 'Außergewöhnliche Villen,', 'showcase.title2': 'sorgfältig ausgewählt.',
        'showcase.desc': "Jede Immobilie wird nach Charakter, Lage und Erlebnisqualität für unsere Gäste ausgewählt.",
        'showcase.cta': 'Alle Villen entdecken',
        'villa.available': 'Verfügbar', 'villa.onrequest': 'Auf Anfrage', 'villa.rooms': 'Schlafzimmer',
        'villa.pool': 'Infinity-Pool', 'villa.seaview': 'Meerblick', 'villa.from': 'Ab', 'villa.night': 'Nacht',
        'manifesto.q1': 'Eine Vertrauensbeziehung,', 'manifesto.q2': 'ein kompromissloser Anspruch.',
        'manifesto.sub': 'Diskretion, Exzellenz und Maßarbeit — die drei Säulen von Azur Home Collection seit der Gründung.',
        'footer.services': 'Leistungen', 'footer.discover': 'Entdecken', 'footer.apartments': 'Apartments',
        'footer.legal': 'Impressum', 'footer.privacy': 'Datenschutz',
    }
};

/* ══════════════════════════════════════════════
   i18n
══════════════════════════════════════════════ */
let currentLang = 'fr';
function applyTranslations(lang) {
    const T = TRANSLATIONS[lang]; if (!T) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = T[el.getAttribute('data-i18n')];
        if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('ahc_lang', lang); } catch (_) { }
}

/* ══════════════════════════════════════════════
   SPLIT TEXT — manual char wrapping
══════════════════════════════════════════════ */
function splitChars(el) {
    const text = el.textContent;
    el.innerHTML = '';
    el.setAttribute('aria-label', text); // a11y
    return [...text].map(char => {
        const wrap = document.createElement('span');
        wrap.className = 'char';
        wrap.style.cssText = 'display:inline-block;overflow:hidden;vertical-align:bottom';
        const inner = document.createElement('span');
        inner.className = 'char-inner';
        inner.style.cssText = 'display:inline-block;will-change:transform';
        inner.textContent = char === ' ' ? '\u00A0' : char;
        wrap.appendChild(inner);
        el.appendChild(wrap);
        return inner;
    });
}

/* ══════════════════════════════════════════════
   TEXT SCRAMBLE
══════════════════════════════════════════════ */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ·—';
function scramble(el, final, ms = 1000) {
    let f = 0;
    const frames = Math.floor(ms / 16);
    const chars = final.toUpperCase().split('');
    const id = setInterval(() => {
        el.textContent = chars.map((ch, i) => {
            if (ch === ' ') return ' ';
            if (f / frames > i / chars.length + 0.25) return final[i];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join('');
        if (++f > frames) { el.textContent = final; clearInterval(id); }
    }, 16);
}

/* ══════════════════════════════════════════════
   MAGNETIC CURSOR + TRAIL
══════════════════════════════════════════════ */
function initCursor() {
    if (!window.matchMedia('(hover:hover)').matches) return;
    const dot = document.getElementById('cursor');
    const ring = document.getElementById('cursor-follower');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    // Build particle trail
    const TRAIL = 7;
    const particles = Array.from({ length: TRAIL }, (_, i) => {
        const p = document.createElement('div');
        p.className = 'cursor-trail';
        p.style.cssText = `position:fixed;border-radius:50%;pointer-events:none;z-index:9997;
      width:${5 - i * 0.5}px;height:${5 - i * 0.5}px;
      background:rgba(215,206,178,${0.4 - i * 0.05});transform:translate(-50%,-50%);`;
        document.body.appendChild(p);
        return { el: p, x: 0, y: 0 };
    });

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    const tickC = () => {
        // Dot — instant
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
        // Ring — smooth follow
        rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        // Trail — cascading lag
        let px = mx, py = my;
        particles.forEach((p, i) => {
            const lag = 0.2 - i * 0.018;
            p.x += (px - p.x) * lag; p.y += (py - p.y) * lag;
            p.el.style.left = p.x + 'px'; p.el.style.top = p.y + 'px';
            px = p.x; py = p.y;
        });
        requestAnimationFrame(tickC);
    };
    tickC();

    // Hover states + magnetic pull
    document.querySelectorAll('a, button, .service-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('cursor--hover');
            ring.classList.add('cursor--hover');
        });
        el.addEventListener('mousemove', e => {
            if (!el.matches('.btn-primary, .nav-cta, .btn-ghost')) return;
            const r = el.getBoundingClientRect();
            const dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
            const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
            gsap.to(el, { x: dx, y: dy, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('cursor--hover');
            ring.classList.remove('cursor--hover');
            if (el.matches('.btn-primary, .nav-cta, .btn-ghost')) {
                gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)', overwrite: 'auto' });
            }
        });
    });
}

/* ══════════════════════════════════════════════
   SMART NAV — hide on down / show on up
══════════════════════════════════════════════ */
function initNav() {
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const mMenu = document.getElementById('mobile-menu');
    if (!nav) return;

    let lastY = 0;
    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 60);
        if (y > 220) {
            if (y > lastY + 10) nav.classList.add('nav--hidden');
            else if (y < lastY - 5) nav.classList.remove('nav--hidden');
        } else {
            nav.classList.remove('nav--hidden');
        }
        lastY = y;
    }, { passive: true });

    if (burger && mMenu) {
        burger.addEventListener('click', () => {
            const open = burger.classList.toggle('open');
            mMenu.classList.toggle('open', open);
            mMenu.setAttribute('aria-hidden', String(!open));
            burger.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
        });
        mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            burger.classList.remove('open');
            mMenu.classList.remove('open');
            mMenu.setAttribute('aria-hidden', 'true');
            burger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }));
    }
}

/* ══════════════════════════════════════════════
   MULTI-LAYER PARALLAX
══════════════════════════════════════════════ */
function initParallax() {
    const wrap = document.querySelector('.hero-img-wrap');
    const overlay = document.querySelector('.hero-overlay');
    const content = document.querySelector('.hero-content');
    const stats = document.getElementById('hero-stats');
    if (!wrap || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;

    window.addEventListener('scroll', () => {
        const s = Math.min(window.scrollY, window.innerHeight);
        const pct = s / window.innerHeight;
        wrap.style.transform = `scale(1.08) translateY(${s * 0.3}px)`;
        if (overlay) {
            const d = Math.min(.96, .96 + pct * .03);
            overlay.style.background = `
        linear-gradient(to top,rgba(26,25,22,${d}) 0%,rgba(26,25,22,${.45 + pct * .2}) 45%,rgba(26,25,22,${.15 + pct * .35}) 100%),
        linear-gradient(to right,rgba(26,25,22,.35) 0%,transparent 55%)`;
        }
        if (content) {
            content.style.transform = `translateY(${s * 0.14}px)`;
            content.style.opacity = String(Math.max(0, 1 - pct * 2.2));
        }
        if (stats) {
            stats.style.transform = `translateX(${s * 0.05}px)`;
            stats.style.opacity = String(Math.max(0, 1 - pct * 2.5));
        }
    }, { passive: true });
}

/* ══════════════════════════════════════════════
   3D CARD TILT
══════════════════════════════════════════════ */
function initTilt() {
    if (!window.matchMedia('(hover:hover)').matches) return;
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.transformStyle = 'preserve-3d';
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            gsap.to(card, {
                rotateY: x * 10, rotateX: -y * 10,
                transformPerspective: 900, duration: 0.35,
                ease: 'power2.out', overwrite: 'auto',
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0, rotateY: 0,
                duration: 0.8, ease: 'elastic.out(1,0.5)', overwrite: 'auto',
            });
        });
    });
}

/* ══════════════════════════════════════════════
   GSAP — all scroll animations
══════════════════════════════════════════════ */
function initGSAP() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    /* ─── CINEMATIC INTRO ─── */
    const curtainT = document.querySelector('.curtain-top');
    const curtainB = document.querySelector('.curtain-bottom');
    const introL = document.querySelector('.intro-logo');

    if (curtainT && curtainB && !reduced) {
        const tl = gsap.timeline({
            onComplete: () => {
                document.querySelector('.intro-overlay')?.remove();
                animateHero();
            }
        });
        tl.set('.intro-overlay', { visibility: 'visible' })
            .from('.intro-dot', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(3)' })
            .from(introL, { opacity: 0, y: 24, duration: 0.9, ease: 'power3.out' }, '-=0.1')
            .to({}, { duration: 0.9 })
            .to(curtainT, { yPercent: -100, duration: 1.2, ease: 'power4.inOut' })
            .to(curtainB, { yPercent: 100, duration: 1.2, ease: 'power4.inOut' }, '<')
            .to(introL, { opacity: 0, scale: 0.85, duration: 0.4, ease: 'power2.in' }, '-=0.6');
    } else {
        document.querySelector('.intro-overlay')?.remove();
        animateHero();
    }

    /* ─── HERO ─── */
    function animateHero() {
        if (reduced) {
            document.querySelectorAll('.hero-tag, .hero-sub, #hero-actions, #hero-stats, #scroll-indicator')
                .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
            document.querySelectorAll('.hero-title .line')
                .forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
            return;
        }

        // Split title chars BEFORE animating
        document.querySelectorAll('.hero-title .line').forEach(line => splitChars(line));

        // Scramble tag
        const tagSpan = document.querySelector('.hero-tag span:last-child');
        if (tagSpan) scramble(tagSpan, tagSpan.textContent, 900);

        const tl = gsap.timeline({ delay: 0.05 });
        tl.from('.hero-tag', { opacity: 0, y: 16, duration: 0.7, ease: 'power3.out' })
            .from('.hero-title .char-inner', {
                yPercent: 130, opacity: 0,
                duration: 1.05, stagger: { amount: 0.65, from: 'start' },
                ease: 'power4.out',
            }, '-=0.35')
            .from('.hero-sub', { opacity: 0, y: 22, duration: 0.9, ease: 'power3.out' }, '-=0.3')
            .from('#hero-actions > *', { opacity: 0, y: 18, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, '-=0.5')
            .from('.stat', { opacity: 0, x: 32, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.45')
            .from('.stat-divider', { scaleY: 0, transformOrigin: 'center', duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '<')
            .from('#scroll-indicator', { opacity: 0, y: 12, duration: 0.8, ease: 'power2.out' }, '-=0.3');
    }

    if (typeof ScrollTrigger === 'undefined' || reduced) return;

    /* ─── SECTION LABEL SCRAMBLE ─── */
    document.querySelectorAll('.section-label').forEach(el => {
        const orig = el.textContent;
        ScrollTrigger.create({
            trigger: el, start: 'top 82%', once: true,
            onEnter: () => scramble(el, orig, 1000),
        });
    });

    /* ─── SERVICES ─── */
    gsap.from('.services-header', {
        scrollTrigger: { trigger: '.services-strip', start: 'top 72%' },
        opacity: 0, y: 55, duration: 1.1, ease: 'power4.out',
    });
    gsap.from('.service-card', {
        scrollTrigger: { trigger: '.services-grid', start: 'top 72%' },
        opacity: 0, y: 80, duration: 1.0,
        stagger: { amount: 0.45, from: 'start' }, ease: 'power4.out',
    });

    /* ─── SHOWCASE ─── */
    gsap.from('.showcase-meta > *', {
        scrollTrigger: { trigger: '.showcase', start: 'top 68%' },
        opacity: 0, y: 42, duration: 0.95, stagger: 0.13, ease: 'power3.out',
    });

    // Villa cards — clip-path wipe
    gsap.from('.villa-card', {
        scrollTrigger: { trigger: '.showcase-cards', start: 'top 74%' },
        clipPath: 'inset(0 100% 0 0)',
        opacity: 0,
        duration: 1.2, stagger: 0.25, ease: 'power4.inOut',
    });

    /* ─── MANIFESTO — char by char ─── */
    ScrollTrigger.create({
        trigger: '.manifesto', start: 'top 62%', once: true,
        onEnter: () => {
            const bq = document.querySelector('.manifesto blockquote');
            if (!bq) return;
            const lines = [...bq.querySelectorAll('span[data-i18n], em[data-i18n]')];
            const allChars = [];
            lines.forEach(line => allChars.push(...splitChars(line)));
            gsap.from(allChars, {
                yPercent: 115, opacity: 0, duration: 0.95,
                stagger: { amount: 0.9, from: 'start' }, ease: 'power4.out',
            });
        }
    });

    gsap.from(['.manifesto-mark', '.manifesto-line', '.manifesto-sub'], {
        scrollTrigger: { trigger: '.manifesto', start: 'top 65%' },
        opacity: 0, y: 30, duration: 1, stagger: 0.14, ease: 'power3.out',
    });

    /* ─── STAT COUNTERS ─── */
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const obj = { v: 0 };
        ScrollTrigger.create({
            trigger: el, start: 'top 87%', once: true,
            onEnter: () => gsap.to(obj, {
                v: target, duration: 2.4, ease: 'power3.out',
                onUpdate: () => { el.textContent = Math.round(obj.v) + suffix; },
            }),
        });
    });

    /* ─── HERO IMAGE scrub parallax ─── */
    gsap.to('.hero-img-wrap', {
        scrollTrigger: {
            trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5,
        },
        yPercent: 22, ease: 'none',
    });

    /* ─── FOOTER ─── */
    gsap.from('.footer-logo, .footer-col', {
        scrollTrigger: { trigger: '.footer', start: 'top 84%' },
        opacity: 0, y: 28, duration: 0.85, stagger: 0.1, ease: 'power3.out',
    });

    /* ─── MANIFESTO LINE ─── */
    gsap.from('.manifesto-line', {
        scrollTrigger: { trigger: '.manifesto-line', start: 'top 80%' },
        scaleX: 0, transformOrigin: 'center',
        duration: 1.4, ease: 'power4.out',
    });
}

/* ══════════════════════════════════════════════
   VH FIX (mobile browser chrome)
══════════════════════════════════════════════ */
function setVh() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
}

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    // Language
    let saved = 'fr';
    try { saved = localStorage.getItem('ahc_lang') || 'fr'; } catch (_) { }
    const bl = navigator.language?.slice(0, 2);
    applyTranslations(TRANSLATIONS[saved] ? saved : (TRANSLATIONS[bl] ? bl : 'fr'));

    document.querySelectorAll('.lang-btn').forEach(btn =>
        btn.addEventListener('click', () => {
            if (btn.dataset.lang && btn.dataset.lang !== currentLang)
                applyTranslations(btn.dataset.lang);
        })
    );

    initNav();
    initCursor();
    initParallax();
    initTilt();

    const waitGSAP = () => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') initGSAP();
        else requestAnimationFrame(waitGSAP);
    };
    requestAnimationFrame(waitGSAP);
});