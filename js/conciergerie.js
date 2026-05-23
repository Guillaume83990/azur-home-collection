/* ============================================================
   AZUR HOME COLLECTION — js/conciergerie.js
   PageSpeed 100 · clearProps · no parallax
   ============================================================ */

function initGSAP() {
    if (typeof gsap === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.cx-h1-w,.cx-eyebrow,.cx-sub,.cx-hero-ctas,.cx-hero-bottom').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* Hero — Ken Burns uniquement */
    var img = document.getElementById('cx-hero-img');
    if (img) gsap.to(img, { scale: 1.0, duration: 2.8, ease: 'power2.out', delay: .1 });

    /* Hero texte */
    var tl = gsap.timeline({ delay: .15 });
    var eyebrow = document.querySelector('.cx-eyebrow');
    var words = document.querySelectorAll('.cx-h1-w');
    var sub = document.querySelector('.cx-sub');
    var ctas = document.querySelector('.cx-hero-ctas');
    var bottom = document.querySelector('.cx-hero-bottom');

    if (eyebrow) tl.to(eyebrow, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' });
    if (words.length) tl.to(words, { y: 0, opacity: 1, duration: 1.1, stagger: .16, ease: 'power4.out' }, '-=.3');
    if (sub) tl.to(sub, { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, '-=.4');
    if (ctas) tl.to(ctas, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, '-=.3');
    if (bottom) tl.to(bottom, { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, '-=.2');

    /* Intro */
    gsap.from('#cx-intro-text > *', {
        scrollTrigger: { trigger: '#cx-intro-text', start: 'top 75%', once: true },
        opacity: 0, y: 28, duration: .8, stagger: .1, ease: 'power3.out', clearProps: 'all'
    });
    var introImg = document.querySelector('.cx-intro-img');
    if (introImg) {
        gsap.fromTo(introImg, { opacity: 0 }, {
            scrollTrigger: { trigger: introImg, start: 'top 78%', once: true },
            opacity: 1, duration: 1.0, ease: 'power2.out', clearProps: 'all'
        });
    }

    /* Services — reveal alterné */
    document.querySelectorAll('[data-gsap-service]').forEach(function (service, i) {
        var isRight = service.classList.contains('cx-service--img-right');
        var body = service.querySelector('.cx-service-body');
        var img = service.querySelector('.cx-service-img');
        if (body) {
            gsap.fromTo(body,
                { opacity: 0, x: isRight ? 32 : -32 },
                {
                    scrollTrigger: { trigger: service, start: 'top 80%', once: true },
                    opacity: 1, x: 0, duration: .9, ease: 'power3.out', clearProps: 'all'
                }
            );
        }
        if (img) {
            gsap.fromTo(img, { opacity: 0 }, {
                scrollTrigger: { trigger: service, start: 'top 82%', once: true },
                opacity: 1, duration: 1.0, ease: 'power2.out', delay: .15, clearProps: 'all'
            });
        }
    });

    /* Full image */
    var full = document.querySelector('[data-gsap-full]');
    if (full) {
        gsap.fromTo(full, { opacity: 0 }, {
            scrollTrigger: { trigger: full, start: 'top 85%', once: true },
            opacity: 1, duration: 1.0, ease: 'power2.out', clearProps: 'all'
        });
    }

    /* Zones */
    document.querySelectorAll('[data-gsap-zone]').forEach(function (zone, i) {
        gsap.fromTo(zone,
            { opacity: 0, y: 32 },
            {
                scrollTrigger: { trigger: zone, start: 'top 82%', once: true },
                opacity: 1, y: 0, duration: .8, delay: i * .1, ease: 'power3.out', clearProps: 'all'
            }
        );
    });

    /* Galerie */
    var galerie = document.querySelector('[data-gsap-galerie]');
    if (galerie) {
        document.querySelectorAll('.cx-galerie-item').forEach(function (item, i) {
            gsap.fromTo(item,
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: { trigger: galerie, start: 'top 82%', once: true },
                    opacity: 1, y: 0, duration: .75, delay: i * .1, ease: 'power3.out', clearProps: 'all'
                }
            );
        });
    }

    /* FAQ */
    gsap.from('.cx-faq-left > *', {
        scrollTrigger: { trigger: '.cx-faq', start: 'top 75%', once: true },
        opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out', clearProps: 'all'
    });
    gsap.from('.cx-faq-list .faq-item', {
        scrollTrigger: { trigger: '.cx-faq-list', start: 'top 78%', once: true },
        opacity: 0, y: 16, duration: .65, stagger: .07, ease: 'power3.out', clearProps: 'all'
    });

    /* CTA */
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
}

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
    });

    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 16000);
});