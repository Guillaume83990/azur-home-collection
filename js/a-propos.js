/* ============================================================
   AZUR HOME COLLECTION — js/a-propos.js
   Page à propos · GSAP animations
   ============================================================ */

function initGSAP() {
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.ap-h1-w,.ap-eyebrow,.ap-sub').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* ── Hero Ken Burns + parallax ── */
    var img = document.getElementById('ap-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(img, {
            scrollTrigger: { trigger: '.ap-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '20%', ease: 'none'
        });
    }

    /* ── Hero texte ── */
    var tl = gsap.timeline({ delay: .15 });
    var ey = document.querySelector('.ap-eyebrow');
    var ws = document.querySelectorAll('.ap-h1-w');
    var sub = document.querySelector('.ap-sub');
    if (ey) tl.from(ey, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (ws.length) tl.to(ws, { y: 0, opacity: 1, duration: 1.1, stagger: .18, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.4');

    /* ── Manifeste ── */
    gsap.from('#ap-manifeste-text > *', {
        scrollTrigger: { trigger: '#ap-manifeste-text', start: 'top 76%', once: true },
        opacity: 0, y: 28, duration: .85, stagger: .1, ease: 'power3.out'
    });
    var mImg = document.querySelector('.ap-manifeste-img picture');
    if (mImg) {
        gsap.fromTo(mImg,
            { clipPath: 'inset(0 100% 0 0)' },
            {
                scrollTrigger: { trigger: '.ap-manifeste-img', start: 'top 78%', once: true },
                clipPath: 'inset(0 0% 0 0)', duration: 1.3, ease: 'power4.inOut'
            }
        );
    }
    gsap.from('.ap-manifeste-quote', {
        scrollTrigger: { trigger: '.ap-manifeste-quote', start: 'top 88%', once: true },
        opacity: 0, scale: .85, x: -20, duration: .9, ease: 'back.out(1.4)', delay: .5
    });

    /* ── Image pleine largeur parallax ── */
    var full = document.querySelector('[data-gsap-full]');
    if (full) {
        var fi = full.querySelector('.ap-img-cover');
        if (fi) {
            gsap.fromTo(fi,
                { scale: 1.12 },
                {
                    scrollTrigger: { trigger: full, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
                    scale: 1.0, ease: 'none'
                }
            );
        }
    }

    /* ── Valeurs cascade ── */
    document.querySelectorAll('[data-gsap-valeur]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 36 },
            {
                scrollTrigger: { trigger: '.ap-valeurs-grid', start: 'top 78%', once: true },
                opacity: 1, y: 0, duration: .85, delay: i * .12, ease: 'power3.out'
            }
        );
    });

    /* ── Équipe membres ── */
    document.querySelectorAll('[data-gsap-membre]').forEach(function (el, i) {
        var img = el.querySelector('.ap-membre-img');
        var body = el.querySelector('.ap-membre-body');
        if (img) {
            gsap.fromTo(img,
                { clipPath: i === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' },
                {
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                    clipPath: 'inset(0 0% 0 0%)', duration: 1.3, ease: 'power4.inOut'
                }
            );
        }
        if (body) {
            gsap.from(Array.from(body.children), {
                scrollTrigger: { trigger: el, start: 'top 75%', once: true },
                opacity: 0, y: 22, duration: .8, stagger: .09, delay: .35, ease: 'power3.out'
            });
        }
    });

    /* ── Chiffres count-up ── */
    document.querySelectorAll('.ap-chiffre-n[data-target]').forEach(function (el) {
        var target = parseFloat(el.dataset.target);
        var suffix = el.dataset.suffix || '';
        var prefix = el.dataset.prefix || '';
        var obj = { v: 0 };
        ScrollTrigger.create({
            trigger: el, start: 'top 88%', once: true,
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
    /* Sépateurs chiffres */
    gsap.from('.ap-ch-sep', {
        scrollTrigger: { trigger: '.ap-chiffres', start: 'top 80%', once: true },
        scaleY: 0, duration: .6, stagger: .1, ease: 'power3.out'
    });

    /* ── Galerie ── */
    var gal = document.querySelector('[data-gsap-galerie]');
    if (gal) {
        gsap.from(gal.querySelectorAll('.ap-galerie-item'), {
            scrollTrigger: { trigger: gal, start: 'top 80%', once: true },
            opacity: 0, y: 40, duration: .85, stagger: .1, ease: 'power3.out'
        });
    }

    /* ── CTA final ── */
    var cta = document.querySelector('[data-gsap-cta]');
    if (cta) {
        gsap.from(Array.from(cta.children), {
            scrollTrigger: { trigger: cta, start: 'top 72%', once: true },
            opacity: 0, y: 28, duration: .85, stagger: .1, ease: 'power3.out'
        });
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
        if (typeof closeLeadModal === 'function') closeLeadModal();
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });

    setTimeout(function () {
        var panel = document.getElementById('maj-panel');
        if (panel && !panel.classList.contains('open')) {
            if (typeof openMajPanel === 'function') openMajPanel();
        }
    }, 20000);
});