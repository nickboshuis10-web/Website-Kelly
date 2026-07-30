/*
  Reisverhalen — databestand
  ==========================
  Hier voeg je nieuwe reisverhalen toe. Voor elk verhaal maak je één blokje
  hieronder in de VERHALEN-lijst. De kaart op reisverhalen.html én de eigen
  pagina van het verhaal (verhaal.html) worden hier automatisch van gevuld.
  Je hoeft dus geen HTML te kopiëren of aan te passen.

  Velden:
  - slug:    unieke code voor de URL, alleen kleine letters/cijfers/streepjes
             (bv. "griekenland-zakynthos"). Wordt gebruikt als verhaal.html?slug=...
  - region:  regio/land + subtitel, zoals die op de kaart staat (bv. "Griekenland · Zakynthos")
  - stamp:   2-3 letters voor het postzegel-rondje op de kaart (bv. "GR")
  - title:   titel van het verhaal
  - excerpt: korte samenvatting, zichtbaar op de kaart in het overzicht
  - image:   pad naar een foto in de map images/verhalen/ (bv. "images/verhalen/griekenland.jpg")
             Laat leeg ("") als er nog geen foto is — dan verschijnt een gekleurd vlak i.p.v. een foto.
  - date:    optioneel, bv. "Juni 2025" — mag ook leeg blijven
  - content: het verhaal zelf, als lijst van alinea's (elke alinea = één regel tekst)
  - tips:    optioneel — lijst van korte praktische tips, verschijnt als apart lijstje
             onder het verhaal. Laat weg of gebruik een lege lijst [] als er geen tips zijn.
*/

const VERHALEN = [
  {
    slug: 'griekenland-santorini',
    region: 'Griekenland · Santorini',
    stamp: 'SA',
    title: 'Een pareltje op Santorini',
    excerpt: "Santorini hoeft niet altijd druk te zijn — er zijn genoeg plekjes die je helemaal voor jezelf hebt als je weet wanneer je waar het beste heen kan gaan.",
    image: '',
    date: '',
    content: [
      "Santorini hoeft (zeker buiten het hoogseizoen) niet altijd druk te zijn. Er zijn genoeg plekjes die je helemaal voor jezelf hebt als je weet wanneer je waar het beste heen kan gaan. Ik help je graag met het samenstellen van een reis naar dit prachtige unieke eiland.",
      "Te leuk plaatsje waar je eindeloos kan dwalen door steegjes. Leuke souvenirwinkeltjes, lieve mensen en echt knus. Bovendien wil je op elke hoek een foto maken 📸",
      "Een pareltje 💙"
    ],
    tips: [
      "Kies ervoor om erheen te gaan vóór lunchtijd, dan is het een stuk minder druk.",
      "Ga ontbijten (vóór 12 uur) of lunchen (vanaf 12 uur) bij Penelope's. Bizar mooi uitzicht en echt een knus plekje.",
      "Dwaal door de straatjes zonder Google Maps.",
      "Stop even net voordat je het dorpje inrijdt — ook daar kun je al een mooie foto maken van het dorpje dat tegen de berg op ligt."
    ]
  },
  {
    slug: 'mauritius-op-maat',
    region: 'Mauritius · Op maat',
    stamp: 'MU',
    title: 'Een reis op maat, van A tot Z',
    excerpt: "Voorbeeldverhaal — plek voor een persoonlijk verslag van hoe een reis tot stand kwam, van wens tot boeking.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — plek voor een persoonlijk verslag van hoe een reis tot stand kwam, van wens tot boeking."
    ]
  },
  {
    slug: 'nieuw-zeeland-rondreis',
    region: 'Nieuw-Zeeland · Rondreis',
    stamp: 'NZ',
    title: 'Twee maanden onderweg',
    excerpt: "Voorbeeldverhaal — ruimte voor een langer reisverslag, eventueel met een fotoserie of korte video.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — ruimte voor een langer reisverslag, eventueel met een fotoserie of korte video."
    ]
  },
  {
    slug: 'zuid-afrika-safari',
    region: 'Zuid-Afrika · Safari',
    stamp: 'ZA',
    title: 'Op safari langs de Kaap',
    excerpt: "Voorbeeldverhaal — plek voor een verslag van een rondreis met safari-momenten.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — plek voor een verslag van een rondreis met safari-momenten."
    ]
  },
  {
    slug: 'italie-amalfikust',
    region: 'Italië · Amalfikust',
    stamp: 'IT',
    title: 'Acht dagen langs de kust',
    excerpt: "Voorbeeldverhaal — een route van Napels tot Positano, precies binnen de tijd die er was.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — een route van Napels tot Positano, precies binnen de tijd die er was."
    ]
  },
  {
    slug: 'noorwegen-roadtrip',
    region: 'Noorwegen · Roadtrip',
    stamp: 'NO',
    title: 'Op de weg door de fjorden',
    excerpt: "Voorbeeldverhaal — ruimte voor een roadtripverslag met foto's van onderweg.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — ruimte voor een roadtripverslag met foto's van onderweg."
    ]
  }
];
