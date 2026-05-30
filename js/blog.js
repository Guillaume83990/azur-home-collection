/* ============================================================
   AZUR HOME COLLECTION — js/blog.js
   Page blog · Filtres catégories + GSAP + Newsletter Brevo
   ============================================================ */

/* ══ FILTRE CATÉGORIES ══ */
window.filterCat = function (btn, cat) {
    document.querySelectorAll('.bl-cat-btn').forEach(function (b) {
        b.classList.remove('active');
    });
    btn.classList.add('active');

    var cards = document.querySelectorAll('.bl-card');
    var visible = 0;
    cards.forEach(function (card) {
        var show = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !show);
        if (show) visible++;
    });

    var empty = document.getElementById('bl-empty');
    if (empty) {
        if (visible === 0) empty.removeAttribute('hidden');
        else empty.setAttribute('hidden', '');
    }

    if (typeof gsap !== 'undefined') {
        var visibleCards = Array.from(cards).filter(function (c) {
            return !c.classList.contains('hidden');
        });
        gsap.from(visibleCards, { opacity: 0, y: 20, duration: .5, stagger: .08, ease: 'power3.out', clearProps: 'all' });
    }
    if (typeof gtag === 'function') {
        gtag('event', 'blog_filter', { event_category: 'Blog', event_label: cat });
    }
};

/* ══════════════════════════════════════════════════════════
   NEWSLETTER — Brevo API
   CONFIGURATION :
   1. brevo.com → Profil → SMTP & API → API Keys → Générer clé v3
   2. Contacts → Listes → Créer liste "Newsletter Blog AHC"
   3. Remplacer les valeurs ci-dessous
══════════════════════════════════════════════════════════ */
var BREVO_API_KEY = 'VOTRE_CLE_API_BREVO'; /* ← Remplacer */
var BREVO_LIST_ID = 0;                     /* ← Remplacer par l'ID de votre liste */

window.submitBlogNL = function (e) {
    e.preventDefault();
    var name = document.getElementById('bl-nl-name').value.trim();
    var email = document.getElementById('bl-nl-email').value.trim();
    if (!name || !email) return;

    var btn = document.getElementById('bl-nl-btn');
    var txt = document.getElementById('bl-nl-txt');
    btn.disabled = true;
    txt.textContent = 'Envoi...';

    /* Si clé non configurée → fallback WhatsApp direct */
    if (BREVO_API_KEY === 'VOTRE_CLE_API_BREVO' || BREVO_LIST_ID === 0) {
        fallbackWA(name, email, txt, btn);
        return;
    }

    /* Appel API Brevo */
    fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': BREVO_API_KEY,
            'accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            attributes: { PRENOM: name },
            listIds: [BREVO_LIST_ID],
            updateEnabled: true
        })
    })
        .then(function (res) {
            if (res.status === 201 || res.status === 204) {
                showNLSuccess(name, txt, btn);
            } else {
                return res.json().then(function (data) {
                    if (data.code === 'duplicate_parameter') {
                        showNLSuccess(name, txt, btn);
                    } else {
                        fallbackWA(name, email, txt, btn);
                    }
                });
            }
        })
        .catch(function () {
            fallbackWA(name, email, txt, btn);
        });
};

function showNLSuccess(name, txt, btn) {
    txt.textContent = 'Merci ' + name + ' !';
    btn.style.background = '#93A8AC';
    if (typeof gsap !== 'undefined') {
        gsap.from(btn, { scale: .95, duration: .4, ease: 'back.out(2)' });
    }
    if (typeof gtag === 'function') {
        gtag('event', 'newsletter_subscribe', { event_category: 'Blog' });
    }
}

function fallbackWA(name, email, txt, btn) {
    var msg = 'Newsletter AHC Blog - Prenom : ' + name + ' - Email : ' + email;
    window.open('https://wa.me/+33600000001?text=' + encodeURIComponent(msg), '_blank');
    txt.textContent = 'Envoye !';
    btn.style.background = '#93A8AC';
}

/* ══ GSAP ══ */
function initGSAP() {
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.bl-h1-w,.bl-eyebrow,.bl-sub').forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* Hero Ken Burns + parallax */
    var img = document.getElementById('bl-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(img, {
            scrollTrigger: { trigger: '.bl-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '18%', ease: 'none'
        });
    }

    /* Hero texte */
    var tl = gsap.timeline({ delay: .15 });
    var ey = document.querySelector('.bl-eyebrow');
    var ws = document.querySelectorAll('.bl-h1-w');
    var sub = document.querySelector('.bl-sub');
    if (ey) tl.from(ey, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (ws.length) tl.to(ws, { y: 0, opacity: 1, duration: 1.1, stagger: .18, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.4');

    /* Article featured */
    var feat = document.querySelector('[data-gsap-feat]');
    if (feat) {
        gsap.from(feat, {
            scrollTrigger: { trigger: feat, start: 'top 80%', once: true },
            opacity: 0, y: 40, duration: 1.0, ease: 'power3.out', clearProps: 'all'
        });
    }

    /* Cards grille */
    document.querySelectorAll('[data-gsap-card]').forEach(function (card, i) {
        gsap.from(card,
            {
                scrollTrigger: { trigger: '.bl-grid', start: 'top 82%', once: true },
                opacity: 0, y: 36, duration: .8, delay: i * .1, ease: 'power3.out',
                clearProps: 'all'
            }
        );
    });

    /* Image pleine largeur parallax */
    var full = document.querySelector('[data-gsap-full]');
    if (full) {
        var fi = full.querySelector('.bl-img-cover-full');
        if (fi) {
            gsap.fromTo(fi,
                { scale: 1.1 },
                {
                    scrollTrigger: { trigger: full, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
                    scale: 1.0, ease: 'none'
                }
            );
        }
    }

    /* Citation */
    var quote = document.querySelector('[data-gsap-quote]');
    if (quote) {
        gsap.from(Array.from(quote.children), {
            scrollTrigger: { trigger: quote, start: 'top 70%', once: true },
            opacity: 0, y: 24, duration: .85, stagger: .15, ease: 'power3.out'
        });
    }

    /* Newsletter */
    var nl = document.querySelector('[data-gsap-nl]');
    if (nl) {
        gsap.from(Array.from(nl.children), {
            scrollTrigger: { trigger: nl, start: 'top 76%', once: true },
            opacity: 0, y: 28, duration: .85, stagger: .12, ease: 'power3.out'
        });
    }

    /* CTA */
    var cta = document.querySelector('[data-gsap-cta]');
    if (cta) {
        gsap.from(Array.from(cta.children), {
            scrollTrigger: { trigger: cta, start: 'top 72%', once: true },
            opacity: 0, y: 28, duration: .85, stagger: .1, ease: 'power3.out'
        });
    }
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', function () {
    /* Fallback : rendre tout visible si GSAP non chargé */
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('[data-gsap-card],[data-gsap-feat],[data-gsap-nl],[data-gsap-cta],[data-gsap-quote]').forEach(function (el) {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }

    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });
    initGSAP();
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof closeLeadModal === 'function') closeLeadModal();
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });
});