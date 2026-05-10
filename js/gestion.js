/* ============================================================
   AZUR HOME COLLECTION — js/gestion.js
   Page gestion propriétaires · GSAP animations
   ============================================================ */

function initGSAP() {
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.ges-h1-w,.ges-eyebrow,.ges-sub,.ges-hero-ctas,.ges-hero-kpis').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── Hero image Ken Burns + parallax ── */
    var img = document.getElementById('ges-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(img, {
            scrollTrigger: { trigger: '.ges-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '20%', ease: 'none'
        });
    }

    /* ── Hero texte cinématique ── */
    var tl = gsap.timeline({ delay: .15 });
    var eyebrow = document.querySelector('.ges-eyebrow');
    var words = document.querySelectorAll('.ges-h1-w');
    var sub = document.querySelector('.ges-sub');
    var ctas = document.querySelector('.ges-hero-ctas');
    var kpis = document.querySelector('.ges-hero-kpis');

    if (eyebrow) tl.from(eyebrow, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (words.length) tl.to(words, { y: 0, opacity: 1, duration: 1.1, stagger: .16, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.4');
    if (ctas) tl.from(ctas, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' }, '-=.3');
    if (kpis) tl.from(kpis, { opacity: 0, y: 30, duration: .85, ease: 'power3.out' }, '-=.2');

    /* ── Promesse — reveal image clip + texte ── */
    gsap.from('#gp-left > *', {
        scrollTrigger: { trigger: '#gp-left', start: 'top 75%', once: true },
        opacity: 0, y: 30, duration: .85, stagger: .1, ease: 'power3.out'
    });
    var gpImg = document.querySelector('.gp-img-wrap');
    if (gpImg) {
        gsap.fromTo(gpImg,
            { clipPath: 'inset(0 100% 0 0)' },
            {
                scrollTrigger: { trigger: gpImg, start: 'top 78%', once: true },
                clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power4.inOut'
            }
        );
    }
    gsap.from('.gp-badge', {
        scrollTrigger: { trigger: '.gp-badge', start: 'top 85%', once: true },
        opacity: 0, scale: .8, x: -20, duration: .9, ease: 'back.out(1.4)', delay: .4
    });

    /* ── Services — cartes en cascade ── */
    document.querySelectorAll('[data-gsap-card]').forEach(function (card, i) {
        gsap.fromTo(card,
            { opacity: 0, y: 40 },
            {
                scrollTrigger: { trigger: card, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .85, delay: (i % 3) * .12, ease: 'power3.out'
            }
        );
    });

    /* ── Process steps — slide depuis la gauche ── */
    document.querySelectorAll('[data-gsap-step]').forEach(function (step, i) {
        gsap.fromTo(step,
            { opacity: 0, x: -30 },
            {
                scrollTrigger: { trigger: '.ges-steps', start: 'top 78%', once: true },
                opacity: 1, x: 0, duration: .85, delay: i * .15, ease: 'power3.out'
            }
        );
    });

    /* ── KPI count-up dans hero ── */
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
                    onUpdate: function () {
                        el.textContent = prefix + Math.round(obj.v) + suffix;
                    }
                });
            }
        });
    });

    /* ── Témoignages ── */
    document.querySelectorAll('[data-gsap-temo]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 32 },
            {
                scrollTrigger: { trigger: el, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .85, delay: i * .13, ease: 'power3.out'
            }
        );
    });

    /* ── CTA final ── */
    var cta = document.querySelector('[data-gsap-cta]');
    if (cta) {
        gsap.fromTo(Array.from(cta.children),
            { opacity: 0, y: 28 },
            {
                scrollTrigger: { trigger: cta, start: 'top 72%', once: true },
                opacity: 1, y: 0, duration: .85, stagger: .1, ease: 'power3.out'
            }
        );
    }

    /* ── FAQ items ── */
    gsap.from('.ges-faq-list .faq-item', {
        scrollTrigger: { trigger: '.ges-faq-list', start: 'top 78%', once: true },
        opacity: 0, y: 18, duration: .7, stagger: .08, ease: 'power3.out'
    });
    gsap.from('.ges-faq-left > *', {
        scrollTrigger: { trigger: '.ges-faq', start: 'top 75%', once: true },
        opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out'
    });
}

/* Init */
document.addEventListener('DOMContentLoaded', function () {
    /* VH fix */
    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    initGSAP();

    /* Escape key */
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