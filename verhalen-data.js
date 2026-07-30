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
*/

const VERHALEN = [
  {
    slug: 'griekenland-zakynthos',
    region: 'Griekenland · Zakynthos',
    stamp: 'GR',
    title: 'Blauw water en niets doen',
    excerpt: "Voorbeeldverhaal — hier deelt Kelly straks haar eigen ervaring, met foto's en tips voor wie hetzelfde wil boeken.",
    image: '',
    date: '',
    content: [
      "Voorbeeldverhaal — hier deelt Kelly straks haar eigen ervaring, met foto's en tips voor wie hetzelfde wil boeken."
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
