/* ============================================================
   AZUR HOME COLLECTION — js/contact.js
   Page contact · GSAP + formulaire
   ============================================================ */

/* ══ SÉLECTEUR D'OBJET ══ */
window.selectSubject = function (btn) {
    document.querySelectorAll('.ct-subject').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('ct-subject-val').value = btn.dataset.subject;
};

/* ══ SOUMISSION FORMULAIRE ══ */
window.submitContact = function (e) {
    e.preventDefault();
    var prenom = document.getElementById('ct-prenom').value.trim();
    var nom = document.getElementById('ct-nom').value.trim();
    var email = document.getElementById('ct-email').value.trim();
    var tel = document.getElementById('ct-tel').value.trim();
    var msg = document.getElementById('ct-msg').value.trim();
    var subject = document.getElementById('ct-subject-val').value;
    var rgpd = document.getElementById('ct-rgpd').checked;

    if (!prenom || !nom || !email || !tel || !msg || !rgpd) {
        /* Animer les champs vides */
        if (typeof gsap !== 'undefined') {
            var empties = [];
            if (!prenom) empties.push(document.getElementById('ct-prenom'));
            if (!nom) empties.push(document.getElementById('ct-nom'));
            if (!email) empties.push(document.getElementById('ct-email'));
            if (!tel) empties.push(document.getElementById('ct-tel'));
            if (!msg) empties.push(document.getElementById('ct-msg'));
            if (empties.length) {
                gsap.fromTo(empties, { x: 0 }, { x: [-6, 6, -4, 4, -2, 2, 0], duration: .5, ease: 'power2.inOut' });
            }
        }
        return;
    }

    var btn = document.getElementById('ct-submit');
    var txt = document.getElementById('ct-submit-txt');
    btn.disabled = true;
    txt.textContent = 'Envoi en cours…';

    /* WA message */
    var waMsg = 'Nouveau message AHC\n\n'
        + 'Objet : ' + subject.toUpperCase() + '\n'
        + 'Nom : ' + prenom + ' ' + nom + '\n'
        + 'Email : ' + email + '\n'
        + 'Tél : ' + tel + '\n\n'
        + 'Message :\n' + msg;

    /* Tentative EmailJS */
    if (typeof emailjs !== 'undefined') {
        emailjs.send('service_XXXXXXX', 'template_XXXXXXX', {
            subject: subject, prenom: prenom, nom: nom,
            email: email, tel: tel, message: msg
        }, 'XXXXXXXXXXXXXXXXXXXX')
            .then(function () { showConfirm(prenom); })
            .catch(function () { fallbackWA(waMsg, prenom); });
    } else {
        fallbackWA(waMsg, prenom);
    }
};

function fallbackWA(msg, prenom) {
    window.open('https://wa.me/+33621084443?text=' + encodeURIComponent(msg), '_blank');
    showConfirm(prenom);
}

function showConfirm(prenom) {
    var form = document.getElementById('ct-form');
    var confirm = document.getElementById('ct-confirm');
    if (!form || !confirm) return;
    form.style.display = 'none';
    confirm.removeAttribute('hidden');
    confirm.style.display = 'block';
    if (typeof gsap !== 'undefined') {
        gsap.from(confirm.querySelectorAll('.ct-confirm-inner > *'), {
            opacity: 0, y: 20, duration: .6, stagger: .1, ease: 'power3.out'
        });
        /* Cercle check animé */
        var circle = confirm.querySelector('.lm-check-circle');
        var tick = confirm.querySelector('.lm-check-tick');
        if (circle) {
            var len = circle.getTotalLength ? circle.getTotalLength() : 150;
            gsap.set(circle, { strokeDasharray: len, strokeDashoffset: len });
            gsap.to(circle, { strokeDashoffset: 0, duration: .8, ease: 'power3.out' });
        }
        if (tick) {
            var tl = tick.getTotalLength ? tick.getTotalLength() : 50;
            gsap.set(tick, { strokeDasharray: tl, strokeDashoffset: tl });
            gsap.to(tick, { strokeDashoffset: 0, duration: .5, delay: .6, ease: 'power3.out' });
        }
    }
    if (typeof gtag === 'function') gtag('event', 'contact_submit', { event_category: 'Contact', event_label: 'form' });
}

/* ══ GSAP ANIMATIONS PAGE ══ */
function initGSAP() {
    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.ct-h1-w,.ct-eyebrow,.ct-sub').forEach(function (el) {
            el.style.opacity = '1'; el.style.transform = 'none';
        });
        return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    /* Hero Ken Burns */
    var img = document.getElementById('ct-hero-img');
    if (img) {
        gsap.to(img, { scale: 1.0, duration: 2.4, ease: 'power2.out', delay: .1 });
        gsap.to(img, {
            scrollTrigger: { trigger: '.ct-hero', start: 'top top', end: 'bottom top', scrub: 2 },
            y: '18%', ease: 'none'
        });
    }

    /* Hero texte */
    var tl = gsap.timeline({ delay: .15 });
    var ey = document.querySelector('.ct-eyebrow');
    var ws = document.querySelectorAll('.ct-h1-w');
    var sub = document.querySelector('.ct-sub');
    if (ey) tl.from(ey, { opacity: 0, y: 14, duration: .7, ease: 'power3.out' });
    if (ws.length) tl.to(ws, { y: 0, opacity: 1, duration: 1.1, stagger: .18, ease: 'power4.out' }, '-=.3');
    if (sub) tl.from(sub, { opacity: 0, y: 18, duration: .9, ease: 'power3.out' }, '-=.4');

    /* Aside blocs */
    document.querySelectorAll('[data-gsap-aside]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 28 },
            {
                scrollTrigger: { trigger: '.ct-aside', start: 'top 78%', once: true },
                opacity: 1, y: 0, duration: .8, delay: i * .12, ease: 'power3.out'
            }
        );
    });

    /* Formulaire */
    var fw = document.querySelector('[data-gsap-form]');
    if (fw) {
        gsap.fromTo(fw,
            { opacity: 0, y: 40 },
            {
                scrollTrigger: { trigger: fw, start: 'top 80%', once: true },
                opacity: 1, y: 0, duration: 1.0, ease: 'power3.out'
            }
        );
        /* Champs un par un */
        gsap.from(fw.querySelectorAll('.ct-field'), {
            scrollTrigger: { trigger: fw, start: 'top 75%', once: true },
            opacity: 0, y: 16, duration: .6, stagger: .06, delay: .3, ease: 'power3.out'
        });
    }

    /* Image pleine largeur parallax */
    var full = document.querySelector('[data-gsap-full]');
    if (full) {
        var fi = full.querySelector('.ct-img-cover');
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
    var q = document.querySelector('[data-gsap-quote]');
    if (q) {
        gsap.from(Array.from(q.children), {
            scrollTrigger: { trigger: q, start: 'top 70%', once: true },
            opacity: 0, y: 24, duration: .85, stagger: .15, ease: 'power3.out'
        });
    }

    /* Accès rapide cartes */
    document.querySelectorAll('[data-gsap-acces]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 32 },
            {
                scrollTrigger: { trigger: '.ct-acces-grid', start: 'top 80%', once: true },
                opacity: 1, y: 0, duration: .8, delay: i * .1, ease: 'power3.out'
            }
        );
    });
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
        if (typeof closeMajPanel === 'function') closeMajPanel();
    });
});