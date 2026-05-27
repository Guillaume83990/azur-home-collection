/* ============================================================
   AZUR VILLA PRESTIGE — js/villas-data.js
   Base de données des 20 villas
   Pour modifier une villa : trouver son id et éditer ses données
   ============================================================ */

window.VILLAS = [
    {
        id: 'villa-aqua-serena',
        name: 'Villa Aqua Serena',
        badge: 'Architecture contemporaine',
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Canebiers',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue panoramique — piscine & Méditerranée' },
            { src: '../images/salon-villa-aqua-serena.webp', legend: 'Le salon principal' },
            { src: '../images/terasse-villa-aqua-serena.webp', legend: 'La terrasse extérieure' },
            { src: '../images/suite-master-villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/sdb-villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/cuisine-villa-aqua-serena.webp', legend: 'La cuisine Bulthaup' }
        ],
        desc_title: 'Un dialogue pur entre béton, verre et Méditerranée',
        desc: "Conçue par un cabinet d'architectes parisien, cette villa déploie 580 m² sur trois niveaux en terrasses. Sa piscine à débordement de 22 mètres efface l'horizon — l'eau de la baie de Saint-Tropez semble commencer à vos pieds. À l'intérieur, des volumes épurés, une cuisine Bulthaup ouverte sur la mer et un spa privatif taillé dans la pierre naturelle.",
        specs: { guests: 14, bedrooms: 7, surface: 580, pool: '22m débordement' },
        amenities: ['🌊 Vue mer panoramique', '🏊 Piscine débordement 22m', '💆 Spa privatif', '🍽️ Cuisine Bulthaup', '🏋️ Salle de sport', '🚗 Garage 3 véhicules']
    },
    {
        id: 'bastide-des-pins',
        name: 'Bastide des Pins',
        badge: 'Bastide provençale XVIIIe',
        zone: 'ramatuelle',
        location: "Ramatuelle · L'Escalet",
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-horizon.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-horizon.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Deux hectares de Provence sauvage',
        desc: "Cette bastide du XVIIIe siècle, restaurée par un décorateur milanais, marie les pierres dorées de la région aux matières les plus précieuses — lin naturel, chêne blanchi, faïences artisanales. Le domaine privé dévoile un potager en permaculture, un court de tennis en terre battue et une piscine naturelle aux reflets d'émeraude.",
        specs: { guests: 10, bedrooms: 5, surface: 420, pool: 'Piscine naturelle' },
        amenities: ['🏊 Piscine naturelle', '🎾 Court de tennis', '🌳 Domaine privé 2 ha', '🌿 Potager permaculture', '🍷 Cave à vins', '🌸 Terrasse glycine']
    },
    {
        id: 'villa-horizon',
        name: 'Villa Horizon',
        badge: 'Design haut couture',
        zone: 'gassin',
        location: 'Gassin · Panorama golfe',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Suspendues au-dessus du golfe',
        desc: "Les cinq suites s'ouvrent chacune sur un panorama unique entre Sainte-Maxime et les Îles d'Or. Cuir de selle, marbres de Carrare et laiton brossé dialoguent avec la piscine à miroir de 18 mètres. Home cinéma, gym Technogym et helipad complètent l'ensemble.",
        specs: { guests: 12, bedrooms: 5, surface: 650, pool: 'Miroir 18m' },
        amenities: ['🌊 Vue 180° sur le golfe', '🏊 Piscine miroir 18m', '🏋️ Gym Technogym', '🎬 Home cinéma', '🚁 Helipad', '💆 Spa privatif']
    },
    {
        id: 'mas-des-oliviers',
        name: 'Mas des Oliviers',
        badge: 'Mas provençal XVIIe',
        zone: 'grimaud',
        location: 'Grimaud · Oliviers centenaires',
        image: '../images/villa-mas-des-oliviers.webp',
        photos: [
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/bastide-des-pins.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La suite master' },
            { src: '../images/bastide-des-pins.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Sérénité intemporelle derrière les oliviers',
        desc: "Caché derrière un rideau d'oliviers tricentenaires, ce mas du XVIIe siècle dégage une sérénité que le temps ne semble pas avoir effleurée. Sa rénovation — confiée à un artisan compagnon du devoir — a préservé chaque poutre apparente, chaque tomette et chaque voûte en berceau.",
        specs: { guests: 8, bedrooms: 4, surface: 380, pool: 'Piscine mosaïque' },
        amenities: ["🏊 Piscine mosaïque", "🍷 Cave à vins privée", "🌿 Parc 1,5 ha", "🌸 Terrasse glycine", "🫒 Oliviers tricentenaires", "🔥 Cheminées d'époque"]
    },
    {
        id: 'villa-emeraude',
        name: 'Villa Émeraude',
        badge: "Villa d'architecte",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Cap Tahiti',
        image: '../images/villa-emeraude.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-horizon.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/villa-horizon.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Transparences entre ciel, mer et architecture',
        desc: "Face au cap Tahiti, cette villa d'architecte de 720 m² joue avec les transparences entre ciel, mer et architecture. Huit suites panoramiques, piscine à débordement de 26 mètres traitée au sel, spa complet avec hammam et cave à vins tempérée.",
        specs: { guests: 16, bedrooms: 8, surface: 720, pool: 'Sel 26m' },
        amenities: ['🌊 Vue mer 360°', '🏊 Piscine sel 26m', '💆 Spa & hammam', '🍷 Cave à vins tempérée', '🏋️ Salle de sport', '🎬 Cinéma privé']
    },
    {
        id: 'domaine-pinede',
        name: 'Domaine de la Pinède',
        badge: 'Domaine provençal',
        zone: 'ramatuelle',
        location: 'Ramatuelle · Les Parcs',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-horizon.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-horizon.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "Intimité absolue au cœur d'une pinède centenaire",
        desc: "Au cœur d'une pinède centenaire de 3 hectares, ce domaine provençal de 560 m² offre une intimité absolue. Pierre de taille, poutres apparentes et piscine à débordement se fondent dans un écrin de nature préservée à deux pas des plages de Ramatuelle.",
        specs: { guests: 12, bedrooms: 6, surface: 560, pool: 'Débordement' },
        amenities: ['🏊 Piscine débordement', '🌲 Pinède 3 ha', '💆 Spa privatif', '🎾 Court de tennis', '🌿 Jardins paysagers', '🍷 Cave à vins']
    },
    {
        id: 'villa-pampelonne',
        name: 'Villa Pampelonne',
        badge: 'Design contemporain',
        zone: 'gassin',
        location: 'Gassin · Les Hauts',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Vue plongeante sur la baie de Pampelonne',
        desc: 'Perchée sur les hauteurs de Gassin, cette villa contemporaine associe architecture minimaliste et matériaux nobles. Béton ciré, verre structurel et bois flotté composent un intérieur signé par un designer new-yorkais.',
        specs: { guests: 14, bedrooms: 7, surface: 680, pool: '20m' },
        amenities: ['🌊 Vue baie de Pampelonne', '🏊 Piscine 20m', '🏋️ Gym & wellness', '🍷 Cave à vins', '🌙 Terrasse nuit étoilée', '🎵 Sonorisation Bang & Olufsen']
    },
    {
        id: 'bastide-saint-clement',
        name: 'Bastide Saint-Clément',
        badge: 'Bastide XVIIIe restaurée',
        zone: 'grimaud',
        location: 'Grimaud · Village',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "À l'ombre du château médiéval de Grimaud",
        desc: "Cette bastide du XVIIIe siècle restaurée avec soin abrite 450 m² de charme provençal authentique. Tomettes d'époque, cheminées en pierre de Bourgogne et cave à vins voûtée accueillent jusqu'à 10 personnes.",
        specs: { guests: 10, bedrooms: 5, surface: 450, pool: 'Piscine mosaïque' },
        amenities: ['🏊 Piscine mosaïque', '🎾 Court de tennis', '🍷 Cave voûtée', '🌿 Parc 1,8 ha', '🔥 Cheminées XVIIIe', '🏡 Dépendances privées']
    },
    {
        id: 'villa-les-parcs',
        name: 'Villa Les Parcs',
        badge: 'Villa de prestige',
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Les Parcs',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Le quartier le plus prisé de Saint-Tropez',
        desc: "Cette villa de 850 m² incarne l'excellence absolue. Neuf suites master, piscine olympique chauffée, spa de 200 m² avec piscine intérieure, salle de sport Technogym et court de tennis éclairé composent un ensemble sans équivalent sur la presqu'île.",
        specs: { guests: 18, bedrooms: 9, surface: 850, pool: 'Chauffée 25m' },
        amenities: ['🌊 Vue mer panoramique', '🏊 Piscine chauffée 25m', '💆 Spa 200m² + piscine int.', '🏋️ Gym Technogym', '🎾 Tennis éclairé', '🎬 Home cinéma']
    },
    {
        id: 'mas-coucher-soleil',
        name: 'Mas du Coucher de Soleil',
        badge: 'Mas provençal rénové',
        zone: 'ramatuelle',
        location: 'Ramatuelle · Bonne Terrasse',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "Couchers de soleil inoubliables sur les îles d'Or",
        desc: "Face aux îles d'Or, ce mas de 360 m² bénéficie d'une exposition ouest exceptionnelle. Rénové par un décorateur parisien, il associe authenticité provençale et confort contemporain avec une vue mer omniprésente.",
        specs: { guests: 8, bedrooms: 4, surface: 360, pool: 'Piscine naturelle' },
        amenities: ["🌅 Vue îles d'Or", '🏊 Piscine naturelle', '🎾 Court de tennis', '🌿 Jardin méditerranéen', '🌄 Exposition ouest', '🍷 Cave à vins']
    },
    {
        id: 'chateau-blanc',
        name: 'Le Château Blanc',
        badge: "Propriété d'exception",
        zone: 'saint-tropez',
        location: 'Saint-Tropez · La Citadelle',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-horizon.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/villa-horizon.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: '1 100 m² à deux minutes du port',
        desc: "La propriété la plus exclusive de notre catalogue : 1 100 m² sur 5 hectares clos. Dix suites palatiales, deux piscines (dont une intérieure chauffée), spa institutionnel, cinéma privé, héliport et équipe de 6 personnes incluse.",
        specs: { guests: 20, bedrooms: 10, surface: 1100, pool: '2 piscines' },
        amenities: ['🏊 2 piscines (int. + ext.)', '💆 Spa institutionnel', '🎬 Cinéma privé', '🚁 Héliport', '👨‍🍳 Équipe 6 personnes', '🌿 Parc 5 ha clos']
    },
    {
        id: 'villa-azurine',
        name: 'Villa Azurine',
        badge: 'Villa intime',
        zone: 'gassin',
        location: 'Gassin · Croix de Fer',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/bastide-des-pins.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/bastide-des-pins.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Raffinement discret pour couples et petites familles',
        desc: 'La Villa Azurine offre 280 m² de pure élégance avec une vue dégagée sur le golfe. Trois suites, piscine à débordement chauffée, terrasse panoramique et cuisine ouverte sur la Méditerranée.',
        specs: { guests: 6, bedrooms: 3, surface: 280, pool: 'Débordement chauffée' },
        amenities: ['🌊 Vue golfe dégagée', '🏊 Piscine débordement', '🌿 Terrasse panoramique', '🍽️ Cuisine ouverte', '🕯️ Ambiance intimiste', '🌸 Jardin fleuri']
    },
    {
        id: 'villa-port-grimaud',
        name: 'Villa Port Grimaud',
        badge: 'Accès mer privé',
        zone: 'grimaud',
        location: 'Grimaud · Port Grimaud',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-horizon.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/villa-horizon.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Accès direct à la mer depuis le ponton privé',
        desc: 'Rare villa avec accès direct à la mer depuis le ponton privé de Port Grimaud. 490 m² de volumes généreux, 6 chambres ensuite, piscine débordement face aux reflets du lagon et cave à vins de 400 bouteilles.',
        specs: { guests: 12, bedrooms: 6, surface: 490, pool: 'Débordement' },
        amenities: ['⚓ Ponton privé', '🌊 Accès direct mer', '🏊 Piscine débordement', '🍷 Cave 400 bouteilles', '⛵ Amarrage bateau', '🌅 Vue lagon']
    },
    {
        id: 'villa-cap-camarat',
        name: 'Villa Cap Camarat',
        badge: 'Villa prestige',
        zone: 'ramatuelle',
        location: 'Ramatuelle · Cap Camarat',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "La pointe la plus sauvage de la presqu'île",
        desc: "Au pied du phare de Camarat, cette villa contemporaine de 620 m² jouit d'une position unique. Vue à 270° sur la Méditerranée, piscine à débordement chauffée, spa et salle de sport face à la mer.",
        specs: { guests: 14, bedrooms: 7, surface: 620, pool: 'Chauffée débordement' },
        amenities: ['🌊 Vue 270° Méditerranée', '🏊 Piscine chauffée', '💆 Spa face à la mer', '🏋️ Gym panoramique', '🌅 Phare de Camarat', '🚣 Accès criques privées']
    },
    {
        id: 'bastide-des-roses',
        name: 'Bastide des Roses',
        badge: 'Bastide de charme',
        zone: 'saint-tropez',
        location: 'Saint-Tropez · La Bouillabaisse',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: '400 m² de pierre blonde envahis de rosiers anciens',
        desc: "Cette bastide du XIXe siècle a conservé son âme de pierre blonde. À 5 minutes à pied de la plage de la Bouillabaisse, elle offre un jardin clos de 4 000 m² et une piscine entourée de lavandes et de cyprès.",
        specs: { guests: 8, bedrooms: 4, surface: 400, pool: 'Piscine miroir' },
        amenities: ['🌹 Jardin rosiers anciens', '🏊 Piscine miroir', '🌊 5 min plage', '🌿 Jardin clos 4 000m²', '🌸 Lavandes & cyprès', '🏡 Architecture XIXe']
    },
    {
        id: 'villa-sainte-maxe',
        name: 'Villa Sainte-Maxe',
        badge: 'Architecture signature',
        zone: 'gassin',
        location: 'Gassin · Route des Salins',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-horizon.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/villa-horizon.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "Façade de verre face aux Îles d'Or",
        desc: "Signée par un cabinet d'architectes barcelonais, cette villa de 750 m² aligne une façade toute en verre face aux Îles d'Or. Huit suites avec terrasse privative, piscine à débordement de 24 mètres, spa avec bain de flottaison et cave à vins de collection.",
        specs: { guests: 16, bedrooms: 8, surface: 750, pool: 'Débordement 24m' },
        amenities: ["🌊 Vue Îles d'Or", '🏊 Piscine débordement 24m', '💆 Spa flottaison', '🍷 Cave collection', '🌙 Terrasses privatives', '🏗️ Architecture barcelonaise']
    },
    {
        id: 'domaine-de-la-garde',
        name: 'Domaine de la Garde',
        badge: 'Domaine viticole',
        zone: 'grimaud',
        location: 'Grimaud · Les Maures',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: '12 hectares avec vignoble AOC Côtes de Provence',
        desc: "Un domaine viticole unique avec son propre vignoble AOC. La bastide principale de 520 m² dispose de 5 chambres, d'une piscine miroir et d'un court de tennis en résine. La dégustation des vins du domaine est incluse dans le séjour.",
        specs: { guests: 10, bedrooms: 5, surface: 520, pool: 'Piscine miroir' },
        amenities: ['🍇 Vignoble AOC 12 ha', '🏊 Piscine miroir', '🎾 Court résine', '🍷 Dégustation incluse', '🌿 Oliveraie privée', '🏡 Bastide authentique']
    },
    {
        id: 'villa-tahiti-beach',
        name: 'Villa Tahiti Beach',
        badge: 'Plage privée',
        zone: 'saint-tropez',
        location: 'Saint-Tropez · Tahiti Beach',
        image: '../images/villa-aqua-serena.webp',
        photos: [
            { src: '../images/villa-aqua-serena.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-horizon.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La suite master' },
            { src: '../images/villa-horizon.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: 'Accès direct à la plage de Tahiti',
        desc: "L'unique villa avec accès direct à la plage de Tahiti sur notre catalogue. 480 m² posés sur le sable, cinq chambres avec vue mer, piscine d'eau de mer filtrée, spa et lounge extérieur.",
        specs: { guests: 10, bedrooms: 5, surface: 480, pool: 'Eau de mer' },
        amenities: ['🏖️ Accès direct plage Tahiti', '🏊 Piscine eau de mer', '💆 Spa & lounge', '🌊 Vue mer permanente', '🏄 Sports nautiques', '🌴 Plage privée']
    },
    {
        id: 'villa-oliveraie',
        name: "Villa L'Oliveraie",
        badge: 'Oliveraie centenaire',
        zone: 'ramatuelle',
        location: 'Ramatuelle · La Croix Valmer',
        image: '../images/bastide-des-pins.webp',
        photos: [
            { src: '../images/bastide-des-pins.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La terrasse & jardins' },
            { src: '../images/bastide-des-pins.webp', legend: 'La suite master' },
            { src: '../images/villa-mas-des-oliviers.webp', legend: 'La salle de bain privative' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: '300 oliviers centenaires pour une authenticité rare',
        desc: "Au cœur d'une oliveraie de 300 arbres centenaires, cette villa de 530 m² conjugue authenticité et raffinement. Six chambres avec poutres apparentes, spa avec bain nordique chauffé, piscine naturelle filtrée aux plantes.",
        specs: { guests: 12, bedrooms: 6, surface: 530, pool: 'Naturelle aux plantes' },
        amenities: ['🫒 Oliveraie 300 arbres', '🏊 Piscine naturelle', '💆 Spa & bain nordique', '🍷 Cave huile artisanale', '🌿 Poutres apparentes', '🏡 Authenticité XVIIe']
    },
    {
        id: 'palais-mediterranee',
        name: 'Palais de la Méditerranée',
        badge: 'Ultra-prestige',
        zone: 'gassin',
        location: 'Gassin · Pointe des Issambres',
        image: '../images/villa-horizon.webp',
        photos: [
            { src: '../images/villa-horizon.webp', legend: 'Vue extérieure — piscine & terrasse' },
            { src: '../images/villa-aqua-serena.webp', legend: 'Le salon & espaces de vie' },
            { src: '../images/bastide-des-pins.webp', legend: 'La terrasse & jardins' },
            { src: '../images/villa-horizon.webp', legend: 'La suite master' },
            { src: '../images/villa-aqua-serena.webp', legend: 'La salle de bain privative' },
            { src: '../images/bastide-des-pins.webp', legend: 'La cuisine & salle à manger' }
        ],
        desc_title: "Le summum de l'ultra-luxe — 920 m² face à la Méditerranée",
        desc: "920 m² en position frontale sur la Méditerranée avec une vue à 200° depuis les Maures jusqu'à l'Esterel. Neuf suites palatiales, piscine à débordement de 30 mètres chauffée, spa de 300 m², gym, cinéma privé et équipe de maison dédiée 7j/7.",
        specs: { guests: 18, bedrooms: 9, surface: 920, pool: 'Chauffée 30m' },
        amenities: ['🌊 Vue 200° Méditerranée', '🏊 Piscine chauffée 30m', '💆 Spa 300m²', '🎬 Cinéma privé', '👨‍🍳 Équipe 7j/7', '🏋️ Gym premium']
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