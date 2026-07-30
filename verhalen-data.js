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
             Dit is de hoofdfoto: die verschijnt op de kaart in het overzicht én bovenaan het verhaal.
  - gallery: optioneel — lijst van extra foto's (paden zoals bij image). De hoofdfoto (image)
             blijft bovenaan zichtbaar; klik erop (of op "Bekijk alle foto's") om de foto's uit
             gallery in een lightbox te zien. Laat weg of gebruik een lege lijst [] voor geen galerij.
  - date:    optioneel, bv. "Juni 2025" — mag ook leeg blijven
  - content: het verhaal zelf, als lijst van blokken. Meestal is een blok gewoon een stukje
             tekst (alinea), bijvoorbeeld: "Dit is een alinea.". Voor een langer verhaal met
             tussenkopjes en/of een lijstje kun je ook dit gebruiken:
               { type: 'h3', text: 'Een tussenkopje' }
               { type: 'ul', items: ['Punt één', 'Punt twee'] }
  - tips:    optioneel — lijst van korte praktische tips, verschijnt als apart lijstje
             onder het verhaal. Laat weg of gebruik een lege lijst [] als er geen tips zijn.
*/

const VERHALEN = [
  {
    slug: 'griekenland-pyrgos',
    region: 'Griekenland · Pyrgos, Santorini',
    stamp: 'PY',
    title: 'Pyrgos: het rustige pareltje van Santorini 💙',
    excerpt: "Santorini staat bekend om witte huisjes, blauwe koepels en drukte. Toch is er een rustig bergdorp waar de tijd stil lijkt te staan: Pyrgos.",
    image: 'images/verhalen/pyrgos-1.jpg',
    gallery: [
      'images/verhalen/pyrgos-2.jpg',
      'images/verhalen/pyrgos-3.jpg',
      'images/verhalen/pyrgos-4.jpg'
    ],
    date: '',
    content: [
      "Santorini staat bekend om de witte huisjes, blauwe koepels en spectaculaire zonsondergangen. Daardoor denken veel mensen dat het eiland altijd druk is. Gelukkig is dat helemaal niet waar. Zeker buiten het hoogseizoen zijn er genoeg plekken waar je de rust kunt opzoeken. Eén van mijn favoriete plekjes? Pyrgos.",
      "Pyrgos is een authentiek Grieks bergdorp waar de tijd lijkt stil te staan. Zodra je door de smalle steegjes loopt, voel je direct de ontspannen sfeer. Je vindt er gezellige pleintjes, kleine boetiekjes en leuke souvenirwinkeltjes, terwijl de vriendelijke locals je overal welkom laten voelen. Het is zo'n plek waar je zonder planning uren kunt rondwandelen en telkens weer een nieuw verborgen hoekje ontdekt.",
      "Wat Pyrgos voor mij extra bijzonder maakt, is dat je hier op bijna iedere straathoek een prachtig uitzicht hebt. De witte huisjes, kleurrijke bloemen, sfeervolle kerkjes en kronkelende straatjes zorgen ervoor dat je je camera of telefoon steeds opnieuw wilt pakken. 📸 Het voelt alsof het hele dorp één groot fotogeniek decor is.",
      "Ook de uitzichten over Santorini zijn hier fantastisch. Vanaf verschillende plekken in het dorp kijk je uit over de wijngaarden, de zee en de rest van het eiland. Omdat Pyrgos hoger ligt, krijg je een heel ander perspectief dan in de bekende plaatsen Oia en Fira.",
      "Pyrgos is misschien niet de bekendste plek van Santorini, maar juist dat maakt het zo bijzonder. Zoek je een authentiek Grieks dorp waar je kunt genieten van rust, mooie uitzichten en sfeervolle straatjes? Dan mag dit pareltje absoluut niet ontbreken tijdens je reis naar Santorini."
    ],
    tips: [
      "Ga vóór lunchtijd. In de ochtend is het heerlijk rustig en kun je in alle rust door de straatjes dwalen.",
      "Ontbijt of lunch bij Penelope's. Ga er ontbijten vóór 12.00 uur of schuif daarna aan voor de lunch. Het uitzicht is werkelijk prachtig en de sfeer is ontzettend knus.",
      "Laat Google Maps even achterwege. De charme van Pyrgos zit juist in het verdwalen. Loop gewoon een steegje in dat je aanspreekt en ontdek zelf de mooiste plekjes.",
      "Stop net voordat je het dorp binnenrijdt. Vanaf de weg heb je al een schitterend uitzicht op Pyrgos, dat prachtig tegen de heuvel is gebouwd. Perfect voor een eerste foto."
    ]
  },
  {
    slug: 'marokko-marrakech',
    region: 'Marokko · Marrakech',
    stamp: 'MA',
    title: 'Marrakech met vriendinnen: 4 dagen vol kleur, cultuur en gezelligheid',
    excerpt: "Marrakech is dé bestemming voor een weekendje weg met vriendinnen — kleurrijke straatjes, sfeervolle riads en bijzondere activiteiten in een paar dagen tijd.",
    image: 'images/verhalen/marrakech-1.jpg',
    gallery: [
      'images/verhalen/marrakech-2.jpg',
      'images/verhalen/marrakech-3.jpg',
      'images/verhalen/marrakech-4.jpg'
    ],
    date: '',
    content: [
      "Sommige bestemmingen zijn perfect voor een weekendje weg met vriendinnen. Marrakech is daar absoluut één van. In slechts een paar dagen dompel je je onder in een compleet andere wereld vol kleurrijke straatjes, sfeervolle riads, heerlijke gerechten en bijzondere activiteiten.",
      "Voor Marit en haar vriendinnen stelde ik een reis samen waarin ontspanning, cultuur en gezelligheid perfect samenkwamen. Van dwalen door de medina tot een workshop tussen de lokale ambachtslieden: Marrakech verrast op iedere straathoek.",
      { type: 'h3', text: 'Slapen in een sfeervolle riad' },
      "Een stedentrip naar Marrakech is niet compleet zonder een verblijf in een authentieke riad. Midden in de oude medina, achter een bescheiden deur, schuilt vaak een oase van rust. Denk aan een prachtige binnenplaats, een klein zwembad en een dakterras waar je de dag afsluit met uitzicht over de stad.",
      "Het is de perfecte uitvalsbasis om Marrakech te ontdekken.",
      { type: 'h3', text: 'De magie van de medina' },
      "Tijdens een wandeling door de medina valt er iedere minuut iets nieuws te ontdekken. Smalle steegjes leiden naar kleurrijke souks waar kruiden, tapijten, leerwaren en handgemaakte souvenirs worden verkocht. De geuren, kleuren en geluiden maken Marrakech tot een stad die al je zintuigen prikkelt.",
      "Natuurlijk mag een bezoek aan het beroemde Djemaa el Fna plein niet ontbreken. Overdag bruist het plein van de marktkraampjes en straatartiesten, terwijl het 's avonds verandert in één groot openluchtrestaurant.",
      { type: 'h3', text: 'Ontdek de mooiste plekken van Marrakech' },
      "Samen met een lokale gids ontdek je de verhalen achter de stad. Zo bezochten we onder andere:",
      { type: 'ul', items: [
        'Het indrukwekkende Bahia Palace',
        'De iconische Koutoubia Moskee',
        'De Menara-tuinen',
        'De historische Joodse wijk (Mellah)'
      ] },
      "Door de uitleg van een gids leer je Marrakech op een heel andere manier kennen dan wanneer je zelf door de stad loopt.",
      { type: 'h3', text: 'Creatief aan de slag tijdens een pottery workshop' },
      "Een van de leukste activiteiten van deze reis was zonder twijfel de pottery & ceramic workshop.",
      "Onder begeleiding van lokale ambachtslieden maakten de vriendinnen kennis met eeuwenoude Marokkaanse technieken. Een bijzondere ervaring waarbij niet alleen mooie herinneringen werden gemaakt, maar ook een uniek souvenir mee naar huis ging.",
      "Juist dit soort activiteiten zorgen ervoor dat een stedentrip nét wat persoonlijker wordt.",
      { type: 'h3', text: 'Genieten van de Marokkaanse keuken' },
      "Marrakech staat bekend om haar heerlijke keuken. Van uitgebreide ontbijten in de riad tot sfeervolle diners op dakterrassen met uitzicht over de stad.",
      "Verse muntthee, kleurrijke salades, traditionele tajines en zoete Marokkaanse lekkernijen maken iedere maaltijd weer een belevenis.",
      { type: 'h3', text: 'Een reis die helemaal bij jullie past' },
      "Iedere vriendinnengroep is anders. Waar de één graag cultuur opsnuift, wil de ander juist ontspannen, shoppen of genieten van het lokale eten. Daarom stel ik iedere reis volledig op maat samen.",
      "Deze Marrakech-reis laat zien dat je in vier dagen ontzettend veel kunt beleven zonder dat het gehaast voelt. De perfecte mix van cultuur, ontspanning, gezelligheid en unieke ervaringen.",
      { type: 'h3', text: 'Ook een stedentrip naar Marrakech plannen?' },
      "Droom jij van een paar dagen Marrakech met vriendinnen, familie of je partner? Ik help je graag met het samenstellen van een reis die helemaal aansluit bij jullie wensen.",
      "Van bijzondere accommodaties en leuke activiteiten tot de mooiste restaurants en handige tips: ik regel het met liefde, zodat jullie alleen nog maar hoeven te genieten."
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
