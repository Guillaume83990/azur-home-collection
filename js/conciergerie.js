/* ============================================================
   AZUR HOME COLLECTION — js/conciergerie.js
   Page conciergerie · GSAP animations
   ============================================================ */

function initGSAP() {
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.cx-h1-w,.cx-eyebrow,.cx-sub,.cx-hero-ctas,.cx-hero-bottom').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── Hero Ken Burns + parallax ── */
    var img = document.getElementById('cx-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(img, {
            scrollTrigger: { trigger: '.cx-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '20%', ease: 'none'
        });
    }

    /* ── Hero texte ── */
    var tl = gsap.timeline({ delay: .15 });
    var ey = document.querySelector('.cx-eyebrow');
    var ws = document.querySelectorAll('.cx-h1-w');
    var sub = document.querySelector('.cx-sub');
    var ctas = document.querySelector('.cx-hero-ctas');
    var bot = document.querySelector('.cx-hero-bottom');
    if (ey) tl.from(ey, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (ws.length) tl.to(ws, { y: 0, opacity: 1, duration: 1.1, stagger: .18, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.4');
    if (ctas) tl.from(ctas, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' }, '-=.3');
    if (bot) tl.from(bot, { opacity: 0, y: 20, duration: .7, ease: 'power3.out' }, '-=.2');

    /* ── Intro : texte + image clip reveal ── */
    gsap.from('#cx-intro-text > *', {
        scrollTrigger: { trigger: '#cx-intro-text', start: 'top 76%', once: true },
        opacity: 0, y: 28, duration: .85, stagger: .1, ease: 'power3.out'
    });
    var introImg = document.querySelector('.cx-intro-img');
    if (introImg) {
        gsap.fromTo(introImg,
            { clipPath: 'inset(0 100% 0 0)' },
            {
                scrollTrigger: { trigger: introImg, start: 'top 78%', once: true },
                clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power4.inOut'
            }
        );
    }

    /* ── Services alternés ── */
    document.querySelectorAll('[data-gsap-service]').forEach(function (el, i) {
        var img = el.querySelector('.cx-service-img');
        var body = el.querySelector('.cx-service-body');
        var isRight = el.classList.contains('cx-service--img-right');

        if (img) {
            gsap.fromTo(img,
                { clipPath: isRight ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' },
                {
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                    clipPath: 'inset(0 0% 0 0%)', duration: 1.3, ease: 'power4.inOut'
                }
            );
        }
        if (body) {
            gsap.from(Array.from(body.children), {
                scrollTrigger: { trigger: el, start: 'top 75%', once: true },
                opacity: 0, y: 24, duration: .8, stagger: .09, delay: .3, ease: 'power3.out'
            });
        }
    });

    /* ── Image pleine largeur ── */
    document.querySelectorAll('[data-gsap-full]').forEach(function (el) {
        var img = el.querySelector('.cx-img-cover');
        if (img) {
            gsap.fromTo(img,
                { scale: 1.12 },
                {
                    scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
                    scale: 1.0, ease: 'none'
                }
            );
        }
        gsap.from(el.querySelector('.cx-full-img-label'), {
            scrollTrigger: { trigger: el, start: 'top 70%', once: true },
            opacity: 0, x: -20, duration: .9, ease: 'power3.out', delay: .4
        });
    });

    /* ── Zones ── */
    document.querySelectorAll('[data-gsap-zone]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 36 },
            {
                scrollTrigger: { trigger: '.cx-zones-grid', start: 'top 78%', once: true },
                opacity: 1, y: 0, duration: .85, delay: i * .13, ease: 'power3.out'
            }
        );
    });

    /* ── Galerie ── */
    var gal = document.querySelector('[data-gsap-galerie]');
    if (gal) {
        gsap.from(gal.querySelectorAll('.cx-galerie-item'), {
            scrollTrigger: { trigger: gal, start: 'top 80%', once: true },
            opacity: 0, y: 32, duration: .85, stagger: .12, ease: 'power3.out'
        });
    }

    /* ── FAQ ── */
    gsap.from('.cx-faq-left > *', {
        scrollTrigger: { trigger: '.cx-faq', start: 'top 76%', once: true },
        opacity: 0, y: 22, duration: .8, stagger: .1, ease: 'power3.out'
    });
    gsap.from('.cx-faq-list .faq-item', {
        scrollTrigger: { trigger: '.cx-faq-list', start: 'top 78%', once: true },
        opacity: 0, y: 16, duration: .7, stagger: .08, ease: 'power3.out'
    });

    /* ── CTA final ── */
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
    var setVh = function () {
        document.documentElement.style.setProperty('--vh', (window.innerHeight * .01) + 'px');
    };
    setVh();
    window.addEventListener('resize', setVh, { passive: true });

    initGSAP();

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeLeadModal === 'function') closeLeadModal();
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });

    /* Majordome auto-open 18s */
    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 18000);
});