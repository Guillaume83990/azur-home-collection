/* ============================================================
   AZUR VILLA PRESTIGE — js/villas-data-it.js
   Villa database — IT translation
   ============================================================ */

window.VILLAS = [
    {
        id: 'villa-aqua-serena',
        name: 'Villa Aqua Serena',
        badge: "Architettura contemporanea",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Canebiers',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista panoramica — piscina & Mediterraneo" },
            { src: '../images/salon-villa-aqua-serena.webp', legend: "Il salone principale" },
            { src: '../images/terasse-villa-aqua-serena.webp', legend: "La terrazza esterna" },
            { src: '../images/suite-master-villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/sdb-villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/cuisine-villa-aqua-serena.webp', legend: "La cucina Bulthaup" }
        ],
        desc_title: "Un dialogo puro tra cemento, vetro e Mediterraneo",
        desc: "Progettata da uno studio di architettura parigino, questa villa si sviluppa su 580 m² su tre livelli a terrazze. La sua piscina a sfioro di 22 metri cancella l'orizzonte — l'acqua della baia di Saint-Tropez sembra cominciare ai vostri piedi. All'interno, volumi essenziali, una cucina Bulthaup aperta sul mare e una spa privata ricavata nella pietra naturale.",
        specs: { guests: 14, bedrooms: 7, surface: 580, pool: '22m débordement' },
        amenities: ["🌊 Vista mare panoramica", "🏊 Piscina a sfioro 22m", "💆 Spa privata", "🍽️ Cucina Bulthaup", "🏋️ Sala sport", "🚗 Garage 3 veicoli"]
    },
    {
        id: 'bastide-des-pins',
        name: 'Bastide des Pins',
        badge: "Bastide provenzale del XVIII sec.",
        zone: 'ramatuelle',
        location: "Ramatuelle · L'Escalet",
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-horizon.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/villa-horizon.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Due ettari di Provenza selvaggia",
        desc: "Questa bastide del XVIII secolo, restaurata da un decoratore milanese, sposa le pietre dorate della regione con i materiali più preziosi — lino naturale, rovere sbiancato, piastrelle artigianali. Il dominio privato svela un orto in permacultura, un campo da tennis in terra battuta e una piscina naturale dai riflessi smeraldo.",
        specs: { guests: 10, bedrooms: 5, surface: 420, pool: 'Piscine naturelle' },
        amenities: ["🏊 Piscina naturale", "🎾 Campo da tennis", "🌳 Dominio privato 2 ha", "🌿 Orto in permacultura", "🍷 Cantina", "🌸 Terrazza con glicine"]
    },
    {
        id: 'villa-horizon',
        name: 'Villa Horizon',
        badge: "Design haute couture",
        zone: 'gassin',
        location: 'Gassin · Panorama golfe',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Sospesa sopra il golfo",
        desc: "Ognuna delle cinque suite si apre su un panorama unico tra Sainte-Maxime e le Îles d'Or. Cuoio da sella, marmi di Carrara e ottone spazzolato dialogano con la piscina a specchio di 18 metri. Home cinema, palestra Technogym e eliporto completano l'insieme.",
        specs: { guests: 12, bedrooms: 5, surface: 650, pool: 'Miroir 18m' },
        amenities: ["🌊 Vista 180° sul golfo", "🏊 Piscina specchio 18m", "🏋️ Technogym", "🎬 Home cinema", "🚁 Eliporto", "💆 Spa privata"]
    },
    {
        id: 'mas-des-oliviers',
        name: 'Mas des Oliviers',
        badge: "Mas provenzale del XVII sec.",
        zone: 'grimaud',
        location: 'Grimaud · Oliviers centenaires',
        image: '../images/villa-mas-des-oliviers.webp',
        photos: [
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/bastide-des-pins.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "La suite master" },
            { src: '../images/bastide-des-pins.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Serenità senza tempo tra gli ulivi",
        desc: "Nascosto dietro un sipario di ulivi tricentenari, questo mas del XVII secolo emana una serenità che il tempo sembra non aver sfiorato. La sua ristrutturazione — affidata a un artigiano — ha preservato ogni trave a vista, ogni cotto e ogni volta a botte.",
        specs: { guests: 8, bedrooms: 4, surface: 380, pool: 'Piscine mosaïque' },
        amenities: ["🏊 Piscina a mosaico", "🍷 Cantina privata", "🌿 Parco 1,5 ha", "🌸 Terrazza con glicine", "🫒 Ulivi tricentenari", "🔥 Camini d’epoca"]
    },
    {
        id: 'villa-emeraude',
        name: 'Villa Émeraude',
        badge: "Villa d'architetto",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Cap Tahiti',
        image: '../images/villa-emeraude.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-horizon.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/villa-horizon.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Trasparenze tra cielo, mare e architettura",
        desc: "Di fronte a Cap Tahiti, questa villa d'architetto di 720 m² gioca con le trasparenze tra cielo, mare e architettura. Otto suite panoramiche, piscina a sfioro di 26 metri trattata al sale, spa completa con hammam e cantina a temperatura controllata.",
        specs: { guests: 16, bedrooms: 8, surface: 720, pool: 'Sel 26m' },
        amenities: ["🌊 Vista mare 360°", "🏊 Piscina sale 26m", "💆 Spa & hammam", "🍷 Cantina a temperatura", "🏋️ Sala sport", "🎬 Cinema privato"]
    },
    {
        id: 'domaine-pinede',
        name: 'Domaine de la Pinède',
        badge: "Domaine provenzale",
        zone: 'ramatuelle',
        location: 'Ramatuelle · Les Parcs',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-horizon.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/villa-horizon.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Intimità assoluta nel cuore di una pineta centenaria",
        desc: "Nel cuore di una pineta centenaria di 3 ettari, questo domaine provenzale di 560 m² offre un'intimità assoluta. Pietra da taglio, travi a vista e piscina a sfioro si fondono in un cocoon di natura preservata, a due passi dalle spiagge di Ramatuelle.",
        specs: { guests: 12, bedrooms: 6, surface: 560, pool: 'Débordement' },
        amenities: ["🏊 Piscina a sfioro", "🌲 Pineta 3 ha", "💆 Spa privata", "🎾 Campo da tennis", "🌿 Giardini paesaggistici", "🍷 Cantina"]
    },
    {
        id: 'villa-pampelonne',
        name: 'Villa Pampelonne',
        badge: "Design contemporaneo",
        zone: 'gassin',
        location: 'Gassin · Les Hauts',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Vista a picco sulla baia di Pampelonne",
        desc: "Arroccata sulle alture di Gassin, questa villa contemporanea associa architettura minimalista e materiali nobili. Cemento levigato, vetro strutturale e legno di mare compongono un interno firmato da un designer newyorkese.",
        specs: { guests: 14, bedrooms: 7, surface: 680, pool: '20m' },
        amenities: ["🌊 Vista baia di Pampelonne", "🏊 Piscina 20m", "🏋️ Gym & wellness", "🍷 Cantina", "🌙 Terrazza notte stellata", "🎵 Bang & Olufsen"]
    },
    {
        id: 'bastide-saint-clement',
        name: 'Bastide Saint-Clément',
        badge: "Bastide del XVIII sec. restaurata",
        zone: 'grimaud',
        location: 'Grimaud · Village',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "All'ombra del castello medievale di Grimaud",
        desc: "Questa bastide del XVIII secolo restaurata con cura ospita 450 m² di fascino provenzale autentico. Cotto d'epoca, caminetti in pietra di Borgogna e cantina con volte accolgono fino a 10 persone.",
        specs: { guests: 10, bedrooms: 5, surface: 450, pool: 'Piscine mosaïque' },
        amenities: ["🏊 Piscina a mosaico", "🎾 Campo da tennis", "🍷 Cantina con volte", "🌿 Parco 1,8 ha", "🔥 Caminetti XVIII sec.", "🏡 Dipendenze private"]
    },
    {
        id: 'villa-les-parcs',
        name: 'Villa Les Parcs',
        badge: "Villa di prestigio",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Les Parcs',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Il quartiere più ambito di Saint-Tropez",
        desc: "Questa villa di 850 m² incarna l'eccellenza assoluta. Nove suite master, piscina olimpica riscaldata, spa di 200 m² con piscina interna, palestra Technogym e campo da tennis illuminato compongono un insieme senza eguali sulla penisola.",
        specs: { guests: 18, bedrooms: 9, surface: 850, pool: 'Chauffée 25m' },
        amenities: ["🌊 Vista mare panoramica", "🏊 Piscina riscaldata 25m", "💆 Spa 200m² + piscina int.", "🏋️ Technogym", "🎾 Tennis illuminato", "🎬 Home cinema"]
    },
    {
        id: 'mas-coucher-soleil',
        name: 'Mas du Coucher de Soleil',
        badge: "Mas provenzale ristrutturato",
        zone: 'ramatuelle',
        location: 'Ramatuelle · Bonne Terrasse',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Tramonti indimenticabili sulle Îles d'Or",
        desc: "Di fronte alle Îles d'Or, questo mas di 360 m² beneficia di un'esposizione ovest eccezionale. Ristrutturato da un decoratore parigino, unisce autenticità provenzale e comfort contemporaneo con una vista mare onnipresente.",
        specs: { guests: 8, bedrooms: 4, surface: 360, pool: 'Piscine naturelle' },
        amenities: ["🌅 Vista Îles d'Or", "🏊 Piscina naturale", "🎾 Campo da tennis", "🌿 Giardino mediterraneo", "🌄 Esposizione ovest", "🍷 Cantina"]
    },
    {
        id: 'chateau-blanc',
        name: 'Le Château Blanc',
        badge: "Proprietà d'eccezione",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · La Citadelle',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-horizon.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/villa-horizon.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "1.100 m² a due minuti dal porto",
        desc: "La proprietà più esclusiva del nostro catalogo: 1.100 m² su 5 ettari recintati. Dieci suite palatiali, due piscine (di cui una interna riscaldata), spa istituzionale, cinema privato, eliporto e team di 6 persone incluso.",
        specs: { guests: 20, bedrooms: 10, surface: 1100, pool: '2 piscines' },
        amenities: ["🏊 2 piscine (int. + est.)", "💆 Spa istituzionale", "🎬 Cinema privato", "🚁 Eliporto", "👨‍🍳 Team 6 persone", "🌿 Parco recintato 5 ha"]
    },
    {
        id: 'villa-azurine',
        name: 'Villa Azurine',
        badge: "Villa intima",
        zone: 'gassin',
        location: 'Gassin · Croix de Fer',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/bastide-des-pins.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/bastide-des-pins.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Raffinamento discreto per coppie e piccole famiglie",
        desc: "La Villa Azurine offre 280 m² di pura eleganza con una vista aperta sul golfo. Tre suite, piscina a sfioro riscaldata, terrazza panoramica e cucina aperta sul Mediterraneo.",
        specs: { guests: 6, bedrooms: 3, surface: 280, pool: 'Débordement chauffée' },
        amenities: ["🌊 Vista golfo aperta", "🏊 Piscina a sfioro", "🌿 Terrazza panoramica", "🍽️ Cucina aperta", "🕯️ Atmosfera intima", "🌸 Giardino fiorito"]
    },
    {
        id: 'villa-port-grimaud',
        name: 'Villa Port Grimaud',
        badge: "Accesso mare privato",
        zone: 'grimaud',
        location: 'Grimaud · Port Grimaud',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-horizon.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/villa-horizon.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Accesso diretto al mare dal pontile privato",
        desc: "Villa rara con accesso diretto al mare dal pontile privato di Port Grimaud. 490 m² di spazi generosi, 6 camere en-suite, piscina a sfioro di fronte ai riflessi della laguna e cantina da 400 bottiglie.",
        specs: { guests: 12, bedrooms: 6, surface: 490, pool: 'Débordement' },
        amenities: ["⚓ Pontile privato", "🌊 Accesso diretto mare", "🏊 Piscina a sfioro", "🍷 Cantina 400 bottiglie", "⛵ Ormeggio barca", "🌅 Vista laguna"]
    },
    {
        id: 'villa-cap-camarat',
        name: 'Villa Cap Camarat',
        badge: "Villa di prestigio",
        zone: 'ramatuelle',
        location: 'Ramatuelle · Cap Camarat',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "La punta più selvaggia della penisola",
        desc: "Ai piedi del faro di Camarat, questa villa contemporanea di 620 m² gode di una posizione unica. Vista a 270° sul Mediterraneo, piscina a sfioro riscaldata, spa e palestra affacciate sul mare.",
        specs: { guests: 14, bedrooms: 7, surface: 620, pool: 'Chauffée débordement' },
        amenities: ["🌊 Vista 270° Mediterraneo", "🏊 Piscina riscaldata", "💆 Spa sul mare", "🏋️ Palestra panoramica", "🌅 Faro di Camarat", "🚣 Accesso calette private"]
    },
    {
        id: 'bastide-des-roses',
        name: 'Bastide des Roses',
        badge: "Bastide di fascino",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · La Bouillabaisse',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "400 m² di pietra bionda con roseti antichi",
        desc: "Questa bastide del XIX secolo ha conservato la sua anima di pietra bionda. A 5 minuti a piedi dalla spiaggia della Bouillabaisse, offre un giardino recintato di 4.000 m² e una piscina circondata da lavanda e cipressi.",
        specs: { guests: 8, bedrooms: 4, surface: 400, pool: 'Piscine miroir' },
        amenities: ["🌹 Giardino roseti antichi", "🏊 Piscina specchio", "🌊 5 min spiaggia", "🌿 Giardino recintato 4.000m²", "🌸 Lavanda & cipressi", "🏡 Architettura XIX sec."]
    },
    {
        id: 'villa-sainte-maxe',
        name: 'Villa Sainte-Maxe',
        badge: "Architettura firma",
        zone: 'gassin',
        location: 'Gassin · Route des Salins',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-horizon.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/villa-horizon.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Facciata di vetro di fronte alle Îles d'Or",
        desc: "Firmata da uno studio di architettura barcellonese, questa villa di 750 m² schiera una facciata tutta in vetro di fronte alle Îles d'Or. Otto suite con terrazza privata, piscina a sfioro di 24 metri, spa con vasca di galleggiamento e cantina da collezione.",
        specs: { guests: 16, bedrooms: 8, surface: 750, pool: 'Débordement 24m' },
        amenities: ["🌊 Vista Îles d'Or", "🏊 Piscina a sfioro 24m", "💆 Spa galleggiamento", "🍷 Cantina collezione", "🌙 Terrazze private", "🏗️ Architettura barcellonese"]
    },
    {
        id: 'domaine-de-la-garde',
        name: 'Domaine de la Garde',
        badge: "Domaine viticolo",
        zone: 'grimaud',
        location: 'Grimaud · Les Maures',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "12 ettari con vigneto AOC Côtes de Provence",
        desc: "Un domaine viticolo unico con il proprio vigneto AOC. La bastide principale di 520 m² dispone di 5 camere, una piscina a specchio e un campo da tennis in resina. La degustazione dei vini del domaine è inclusa nel soggiorno.",
        specs: { guests: 10, bedrooms: 5, surface: 520, pool: 'Piscine miroir' },
        amenities: ["🍇 Vigneto AOC 12 ha", "🏊 Piscina specchio", "🎾 Campo in resina", "🍷 Degustazione inclusa", "🌿 Oliveto privato", "🏡 Bastide autentica"]
    },
    {
        id: 'villa-tahiti-beach',
        name: 'Villa Tahiti Beach',
        badge: "Spiaggia privata",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Tahiti Beach',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-horizon.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-aqua-serena.webp', legend: "La suite master" },
            { src: '../images/villa-horizon.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Accesso diretto alla spiaggia di Tahiti",
        desc: "L'unica villa con accesso diretto alla spiaggia di Tahiti nel nostro catalogo. 480 m² posati sulla sabbia, cinque camere con vista mare, piscina d'acqua di mare filtrata, spa e lounge esterno.",
        specs: { guests: 10, bedrooms: 5, surface: 480, pool: 'Eau de mer' },
        amenities: ["🏖️ Accesso diretto Tahiti Beach", "🏊 Piscina acqua di mare", "💆 Spa & lounge", "🌊 Vista mare permanente", "🏄 Sport acquatici", "🌴 Spiaggia privata"]
    },
    {
        id: 'villa-oliveraie',
        name: "Villa L'Oliveraie",
        badge: "Uliveto centenario",
        zone: 'ramatuelle',
        location: 'Ramatuelle · La Croix Valmer',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il salotto & spazi living" },
            { src: '../images/villa-aqua-serena.webp', legend: "La terrazza & i giardini" },
            { src: '../images/bastide-des-pins.webp', legend: "La suite master" },
            { src: '../images/villa-mas-des-oliviers.webp', legend: "Il bagno privato" },
            { src: '../images/villa-aqua-serena.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "300 ulivi centenari per un'autenticità rara",
        desc: "Nel cuore di un uliveto di 300 alberi centenari, questa villa di 530 m² coniuga autenticità e raffinatezza. Sei camere con travi a vista, spa con vasca nordica riscaldata, piscina naturale filtrata alle piante.",
        specs: { guests: 12, bedrooms: 6, surface: 530, pool: 'Naturelle aux plantes' },
        amenities: ["🫒 Uliveto 300 alberi", "🏊 Piscina naturale", "💆 Spa & vasca nordica", "🍷 Cantina olio artigianale", "🌿 Travi a vista", "🏡 Autenticità XVII sec."]
    },
    {
        id: 'palais-mediterranee',
        name: 'Palais de la Méditerranée',
        badge: "Ultra-prestigio",
        zone: 'gassin',
        location: 'Gassin · Pointe des Issambres',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: "Vista esterna — piscina & terrazza" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il salotto & spazi living" },
            { src: '../images/bastide-des-pins.webp', legend: "La terrazza & i giardini" },
            { src: '../images/villa-horizon.webp', legend: "La suite master" },
            { src: '../images/villa-aqua-serena.webp', legend: "Il bagno privato" },
            { src: '../images/bastide-des-pins.webp', legend: "La cucina & sala da pranzo" }
        ],
        desc_title: "Il massimo dell'ultra-lusso — 920 m² di fronte al Mediterraneo",
        desc: "920 m² in posizione frontale sul Mediterraneo con una vista a 200° dalle Maures all'Esterel. Nove suite palatiali, piscina a sfioro di 30 metri riscaldata, spa di 300 m², palestra, cinema privato e team di casa dedicato 7 giorni su 7.",
        specs: { guests: 18, bedrooms: 9, surface: 920, pool: 'Chauffée 30m' },
        amenities: ["🌊 Vista 200° Mediterraneo", "🏊 Piscina riscaldata 30m", "💆 Spa 300m²", "🎬 Cinema privato", "👨‍🍳 Team 7g/7", "🏋️ Palestra premium"]
    }
];

/* Helper — trouver une villa par son id */
window.getVilla = function (id) {
    return window.VILLAS.find(function (v) { return v.id === id; }) || null;
};

/* Helper — villas de la même zone (hors villa actuelle) */
window.getSimilaires = function (id, zone) {
    return window.VILLAS.filter(function (v) {
        return v.zone === zone && v.id !== id;
    }).slice(0, 3);
};