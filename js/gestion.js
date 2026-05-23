/* ============================================================
   AZUR HOME COLLECTION — js/gestion.js
   PageSpeed 100 · clearProps sur toutes les animations
   ============================================================ */

function initGSAP() {
    /* Fallback sans GSAP ou prefers-reduced-motion */
    if (typeof gsap === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.ges-h1-w,.ges-eyebrow,.ges-sub,.ges-hero-ctas,.ges-hero-kpis').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        /* KPIs visibles immédiatement */
        var kpisEl = document.querySelector('.ges-hero-kpis');
        if (kpisEl) { kpisEl.style.opacity = '1'; }
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Hero — Ken Burns UNIQUEMENT (pas de parallax scroll qui assombrit) */
    var img = document.getElementById('ges-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.8, ease: 'power2.out', delay: .1 });
    }

    /* Hero texte — clearProps SEULEMENT sur transform, pas sur opacity */
    var tl = gsap.timeline({ delay: .15 });
    var eyebrow = document.querySelector('.ges-eyebrow');
    var words = document.querySelectorAll('.ges-h1-w');
    var sub = document.querySelector('.ges-sub');
    var ctas = document.querySelector('.ges-hero-ctas');
    var kpis = document.querySelector('.ges-hero-kpis');

    if (eyebrow) tl.to(eyebrow, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' });
    if (words.length) tl.to(words, { y: 0, opacity: 1, duration: 1.1, stagger: .16, ease: 'power4.out' }, '-=.3');
    if (sub) tl.to(sub, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, '-=.4');
    if (ctas) tl.to(ctas, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, '-=.3');
    if (kpis) tl.from(kpis, { opacity: 0, y: 20, duration: .85, ease: 'power3.out', clearProps: 'all' }, '-=.2');

    /* Promesse — texte */
    gsap.from('#gp-left > *', {
        scrollTrigger: { trigger: '#gp-left', start: 'top 75%', once: true },
        opacity: 0, y: 30, duration: .85, stagger: .1, ease: 'power3.out', clearProps: 'all'
    });
    /* Image — fade simple (pas de clipPath pour éviter les conflits) */
    var gpImg = document.querySelector('.gp-img-wrap');
    if (gpImg) {
        gsap.fromTo(gpImg,
            { opacity: 0 },
            {
                scrollTrigger: { trigger: gpImg, start: 'top 78%', once: true },
                opacity: 1, duration: 1.0, ease: 'power2.out', clearProps: 'all'
            }
        );
    }
    gsap.from('.gp-badge', {
        scrollTrigger: { trigger: '.gp-badge', start: 'top 85%', once: true },
        opacity: 0, scale: .85, x: -16, duration: .85, ease: 'back.out(1.4)', delay: .3, clearProps: 'all'
    });

    /* Services */
    document.querySelectorAll('[data-gsap-card]').forEach(function (card, i) {
        gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
                scrollTrigger: { trigger: card, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .85, delay: (i % 3) * .1, ease: 'power3.out', clearProps: 'all'
            }
        );
    });

    /* Processus */
    document.querySelectorAll('[data-gsap-step]').forEach(function (step, i) {
        gsap.fromTo(step,
            { opacity: 0, x: -24 },
            {
                scrollTrigger: { trigger: '.ges-steps', start: 'top 78%', once: true },
                opacity: 1, x: 0, duration: .8, delay: i * .13, ease: 'power3.out', clearProps: 'all'
            }
        );
    });

    /* KPI count-up */
    document.querySelectorAll('.ghk-n[data-target]').forEach(function (el) {
        var target = parseFloat(el.dataset.target);
        var suffix = el.dataset.suffix || '';
        var prefix = target === 32 ? '+' : '';
        var obj = { v: 0 };
        ScrollTrigger.create({
            trigger: el, start: 'top 90%', once: true,
            onEnter: function () {
                gsap.to(obj, {
                    v: target, duration: 1.8, ease: 'power3.out',
                    onUpdate: function () { el.textContent = prefix + Math.round(obj.v) + suffix; }
                });
            }
        });
    });

    /* Témoignages */
    document.querySelectorAll('[data-gsap-temo]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 28 },
            {
                scrollTrigger: { trigger: el, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .8, delay: i * .1, ease: 'power3.out', clearProps: 'all'
            }
        );
    });

    /* CTA final */
    var cta = document.querySelector('[data-gsap-cta]');
    if (cta) {
        gsap.fromTo(Array.from(cta.children),
            { opacity: 0, y: 24 },
            {
                scrollTrigger: { trigger: cta, start: 'top 72%', once: true },
                opacity: 1, y: 0, duration: .8, stagger: .09, ease: 'power3.out', clearProps: 'all'
            }
        );
    }

    /* FAQ */
    gsap.from('.ges-faq-list .faq-item', {
        scrollTrigger: { trigger: '.ges-faq-list', start: 'top 78%', once: true },
        opacity: 0, y: 16, duration: .65, stagger: .07, ease: 'power3.out', clearProps: 'all'
    });
    gsap.from('.ges-faq-left > *', {
        scrollTrigger: { trigger: '.ges-faq', start: 'top 75%', once: true },
        opacity: 0, y: 20, duration: .75, stagger: .09, ease: 'power3.out', clearProps: 'all'
    });

    /* Shadow nav au scroll */
    ScrollTrigger.create({
        start: 'top+=80 top',
        onUpdate: function (self) {
            var nav = document.getElementById('nav');
            if (nav) nav.classList.toggle('scrolled', self.scroll() > 80);
        }
    });
}

/* ════════════════════════
   INIT
════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    /* VH fix mobile */
    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    initGSAP();

    /* Escape */
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLeadModal === 'function') closeLeadModal();
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });

    /* Majordome auto-open 16s */
    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 16000);
});