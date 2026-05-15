/* ============================================================
   AZUR VILLA PRESTIGE — js/villa.js
   Fiche villa dynamique + modale réservation GSAP
   ============================================================ */

/* ══ MODALE RÉSERVATION ══ */
window.openBookingModal = function () {
    var modal = document.getElementById('booking-modal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.bm-box',
            { opacity: 0, y: 40, scale: .96 },
            { opacity: 1, y: 0, scale: 1, duration: .5, ease: 'power3.out' }
        );
    }
    if (typeof gtag === 'function') gtag('event', 'booking_open', { event_category: 'Villa' });
};

window.closeBookingModal = function () {
    var modal = document.getElementById('booking-modal');
    if (!modal) return;
    if (typeof gsap !== 'undefined') {
        gsap.to('.bm-box', {
            opacity: 0, y: 20, scale: .97, duration: .35, ease: 'power2.in',
            onComplete: function () {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    } else {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
};

window.submitBooking = function (e) {
    e.preventDefault();
    var prenom = document.getElementById('bm-prenom').value.trim();
    var nom = document.getElementById('bm-nom').value.trim();
    var email = document.getElementById('bm-email').value.trim();
    var tel = document.getElementById('bm-tel').value.trim();
    var arrival = document.getElementById('bm-arrival').value;
    var departure = document.getElementById('bm-departure').value;
    var guests = document.getElementById('bm-guests').value;
    var msg = document.getElementById('bm-msg').value.trim();
    var rgpd = document.getElementById('bm-rgpd').checked;
    var villaName = document.getElementById('bm-villa-name') ? document.getElementById('bm-villa-name').textContent : '';

    if (!prenom || !nom || !email || !tel || !rgpd) {
        /* Shake les champs vides */
        if (typeof gsap !== 'undefined') {
            var empties = [];
            if (!prenom) empties.push('#bm-prenom');
            if (!nom) empties.push('#bm-nom');
            if (!email) empties.push('#bm-email');
            if (!tel) empties.push('#bm-tel');
            if (empties.length) {
                gsap.to(empties.join(','), {
                    x: [-6, 6, -4, 4, -2, 2, 0], duration: .5, ease: 'power2.inOut'
                });
            }
        }
        return;
    }

    var btn = document.getElementById('bm-submit');
    var txt = document.getElementById('bm-submit-txt');
    btn.disabled = true;
    txt.textContent = 'Envoi en cours...';

    /* Message WhatsApp formaté */
    var waMsg = 'Demande de sejour - Azur Villa Prestige'
        + '\n\nVilla : ' + villaName
        + '\nPrenom : ' + prenom
        + '\nNom : ' + nom
        + '\nEmail : ' + email
        + '\nTel : ' + tel
        + (arrival ? '\nArrivee : ' + arrival : '')
        + (departure ? '\nDepart : ' + departure : '')
        + (guests ? '\nVoyageurs : ' + guests : '')
        + (msg ? '\n\nMessage : ' + msg : '');

    /* Envoyer via WhatsApp */
    window.open('https://wa.me/+33600000001?text=' + encodeURIComponent(waMsg), '_blank');

    /* Afficher la confirmation */
    showBookingConfirm(prenom);
    if (typeof gtag === 'function') gtag('event', 'booking_submit', { event_category: 'Villa', event_label: villaName });
};

function showBookingConfirm(prenom) {
    var formWrap = document.getElementById('bm-form-wrap');
    var confirm = document.getElementById('bm-confirm');
    var confPrenom = document.getElementById('bm-conf-prenom');
    if (!formWrap || !confirm) return;

    if (confPrenom) confPrenom.textContent = prenom;

    if (typeof gsap !== 'undefined') {
        gsap.to(formWrap, {
            opacity: 0, y: -20, duration: .35, ease: 'power2.in',
            onComplete: function () {
                formWrap.style.display = 'none';
                confirm.style.display = 'flex';
                /* Animer la confirmation */
                gsap.from('.bm-confirm-inner > *', {
                    opacity: 0, y: 24, duration: .6, stagger: .1, ease: 'power3.out'
                });
                /* Cercle SVG animé */
                var circle = confirm.querySelector('.bm-circle');
                var tick = confirm.querySelector('.bm-tick');
                if (circle) {
                    var cLen = 2 * Math.PI * 30;
                    gsap.set(circle, { strokeDasharray: cLen, strokeDashoffset: cLen });
                    gsap.to(circle, { strokeDashoffset: 0, duration: .8, ease: 'power3.out' });
                }
                if (tick) {
                    var tLen = 40;
                    gsap.set(tick, { strokeDasharray: tLen, strokeDashoffset: tLen });
                    gsap.to(tick, { strokeDashoffset: 0, duration: .5, delay: .65, ease: 'power3.out' });
                }
            }
        });
    } else {
        formWrap.style.display = 'none';
        confirm.style.display = 'flex';
    }
}

/* ══ CONSTRUCTION DYNAMIQUE DE LA PAGE ══ */
document.addEventListener('DOMContentLoaded', function () {

    /* 1. Lire l'id dans l'URL */
    var params = new URLSearchParams(window.location.search);
    var villaId = params.get('id');

    if (!villaId || !window.VILLAS) return;
    var villa = window.getVilla(villaId);
    if (!villa) {
        document.getElementById('vd-h1').textContent = 'Villa introuvable';
        return;
    }

    /* 2. SEO */
    document.getElementById('page-title').textContent =
        villa.name + ' — ' + villa.location + ' · Azur Villa Prestige';
    document.getElementById('page-desc').setAttribute('content',
        villa.name + ' — ' + villa.location + '. ' + villa.specs.guests + ' personnes, ' + villa.specs.surface + ' m².');

    /* 3. Hero */
    var heroImg = document.getElementById('vd-hero-img');
    heroImg.src = villa.image;
    heroImg.alt = villa.name + ' — ' + villa.location;

    document.getElementById('vd-bc-name').textContent = villa.name;
    document.getElementById('vd-badge').textContent = villa.badge;
    document.getElementById('vd-h1').textContent = villa.name;
    document.getElementById('vd-location').textContent = villa.location;

    /* Specs hero */
    var heroSpecs = document.getElementById('vd-hero-specs');
    [
        { n: villa.specs.guests, l: 'Personnes' },
        { n: villa.specs.bedrooms, l: 'Chambres' },
        { n: villa.specs.surface, l: 'm²' },
        { n: villa.specs.pool, l: 'Piscine' }
    ].forEach(function (s, i, arr) {
        heroSpecs.innerHTML += '<div class="vd-hs-item"><span class="vd-hs-n">' + s.n + '</span><span class="vd-hs-l">' + s.l + '</span></div>';
        if (i < arr.length - 1) heroSpecs.innerHTML += '<div class="vd-hs-sep"></div>';
    });

    /* 4. Modale — nom de la villa */
    var bmTitle = document.getElementById('bm-villa-name');
    if (bmTitle) bmTitle.innerHTML = villa.name + ' — <em>demande de séjour</em>';

    /* 5. Description */
    document.getElementById('vd-desc-title').textContent = villa.desc_title;
    document.getElementById('vd-desc-text').textContent = villa.desc;

    /* Équipements */
    document.getElementById('vd-ams').innerHTML = villa.amenities.map(function (a) {
        return '<span class="vd-am-tag">' + a + '</span>';
    }).join('');

    /* Specs box */
    var specsBox = document.getElementById('vd-specs-box');
    var specsData = [
        ['Capacité', villa.specs.guests + ' personnes'],
        ['Chambres', villa.specs.bedrooms],
        ['Surface', villa.specs.surface + ' m²'],
        ['Piscine', villa.specs.pool],
        ['Zone', villa.location],
        ['Conciergerie', '5★ incluse']
    ];
    specsBox.innerHTML = '<h3>Caractéristiques</h3>' +
        specsData.map(function (r) {
            return '<div class="vd-spec-row"><span>' + r[0] + '</span><strong>' + r[1] + '</strong></div>';
        }).join('');

    /* 6. Galerie avec légendes */
    var galGrid = document.getElementById('vd-galerie-grid');
    var photos = villa.photos || [];
    galGrid.innerHTML = photos.map(function (p, i) {
        return '<div class="vd-gal-item" data-gsap-gal>' +
            '<div class="vd-gal-img-wrap">' +
            '<img src="' + p.src + '" alt="' + villa.name + ' — ' + p.legend + '" loading="' + (i === 0 ? 'eager' : 'lazy') + '" decoding="async"/>' +
            '</div>' +
            '<div class="vd-gal-legend">' +
            '<span class="vd-gal-num">0' + (i + 1) + '</span>' +
            '<span class="vd-gal-text">' + p.legend + '</span>' +
            '</div>' +
            '</div>';
    }).join('');

    /* 7. CTA titre */
    document.getElementById('vd-cta-title').textContent = 'Réserver ' + villa.name;

    /* 8. Villas similaires */
    var similaires = window.getSimilaires(villaId, villa.zone);
    document.getElementById('vd-sim-grid').innerHTML = similaires.map(function (v) {
        return '<a href="villa.html?id=' + v.id + '" class="vd-sim-card">' +
            '<div class="vd-sim-img"><img src="' + v.image + '" alt="' + v.name + '" loading="lazy"/></div>' +
            '<div class="vd-sim-body">' +
            '<span class="vd-sim-location">' + v.location + '</span>' +
            '<h3>' + v.name + '</h3>' +
            '<span class="vd-sim-specs">' + v.specs.guests + ' pers. · ' + v.specs.surface + ' m²</span>' +
            '</div>' +
            '</a>';
    }).join('');

    /* 9. GSAP animations */
    if (typeof gsap === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    /* Hero Ken Burns */
    gsap.fromTo(heroImg,
        { scale: 1.08 },
        { scale: 1.0, duration: 2.4, ease: 'power2.out' }
    );
    gsap.to(heroImg, {
        scrollTrigger: { trigger: '.vd-hero', start: 'top top', end: 'bottom top', scrub: 2 },
        y: '18%', ease: 'none'
    });

    /* Hero texte cascade */
    var tl = gsap.timeline({ delay: .2 });
    tl.from('.vd-breadcrumb', { opacity: 0, y: 10, duration: .5, ease: 'power3.out' })
        .from('.vd-badge', { opacity: 0, y: 14, duration: .5 }, '-=.2')
        .from('.vd-h1', { opacity: 0, y: 28, duration: .7, ease: 'power4.out' }, '-=.2')
        .from('.vd-location', { opacity: 0, y: 12, duration: .5 }, '-=.3')
        .from('.vd-hero-specs', { opacity: 0, y: 16, duration: .6 }, '-=.2')
        .from('.vd-hero-bar', { opacity: 0, y: 20, duration: .5 }, '-=.2');

    /* Description */
    gsap.from('#vd-desc-left > *', {
        scrollTrigger: { trigger: '#vd-desc', start: 'top 76%', once: true },
        opacity: 0, y: 28, duration: .8, stagger: .1, ease: 'power3.out'
    });
    gsap.from('#vd-desc-right > *', {
        scrollTrigger: { trigger: '#vd-desc', start: 'top 76%', once: true },
        opacity: 0, y: 28, duration: .8, stagger: .12, delay: .2, ease: 'power3.out'
    });

    /* Galerie — chaque item avec clip reveal */
    document.querySelectorAll('[data-gsap-gal]').forEach(function (el, i) {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                scrollTrigger: { trigger: '#vd-galerie', start: 'top 80%', once: true },
                opacity: 1, y: 0, duration: .7, delay: i * .08, ease: 'power3.out'
            }
        );
    });

    /* Conciergerie items */
    gsap.from('.vd-conc-item', {
        scrollTrigger: { trigger: '.vd-conc', start: 'top 78%', once: true },
        opacity: 0, y: 24, duration: .6, stagger: .08, ease: 'power3.out'
    });

    /* Similaires */
    gsap.from('.vd-sim-card', {
        scrollTrigger: { trigger: '.vd-similaires', start: 'top 80%', once: true },
        opacity: 0, y: 28, duration: .7, stagger: .12, ease: 'power3.out'
    });

    /* CTA final */
    gsap.from('.vd-cta-inner > *', {
        scrollTrigger: { trigger: '.vd-cta-final', start: 'top 78%', once: true },
        opacity: 0, y: 24, duration: .7, stagger: .1, ease: 'power3.out'
    });
});