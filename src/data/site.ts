/**
 * Dati del locale: unico punto da aggiornare con le informazioni reali del cliente.
 * I campi vuoti ("" o false) nascondono automaticamente le sezioni/pulsanti corrispondenti.
 */
export const site = {
  name: "Sunset Barcarello",
  shortName: "Sunset",
  tagline: "Pizzeria, ristorante e apericena sul mare",
  description:
    "Sunset Barcarello - Pizzeria, ristorante e apericena sul mare a Barcarello, Palermo. Crudi di mare, tartare, pizza e cocktail davanti al tramonto più bello della costa.",
  address: {
    street: "Via Barcarello, 35",
    city: "Palermo",
    zip: "90147",
    lat: 38.206468,
    lng: 13.2825593,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=38.206468,13.2825593",
  },
  phone: "366 332 9565",
  whatsapp: "393663329565", // stesso numero, raggiungibile su WhatsApp: usato anche dal modulo prenotazioni
  email: "",            // TODO
  // Confermato su Google: "Apre alle ore 17:30". Fasce orarie e giorno di chiusura da confermare.
  openingNotice: "Aperti la sera, dalle 17:30",
  hours: [
    { days: "Tutti i giorni", time: "Dalle 17:30" },
  ], // TODO: fasce orarie precise ed eventuale giorno di chiusura
  social: {
    instagram: "", // TODO: link pagina Instagram
    facebook: "",  // TODO: link pagina Facebook
  },
  menuUrl: "https://www.gofoodmenu.it/sunset-barcarello",
  hasGallery: false,    // TODO: true quando le foto sono in public/images/gallery/1..6.jpg
  rating: {
    value: 4.3,
    count: 315,
    url: "https://www.google.com/maps/place/sunset+apericena+pizzeria/@38.206468,13.2825593,18z",
  },
};

/** Le anime del locale, mostrate nella sezione menu/highlights. Basate sul menu digitale GO!Food reale. */
export const highlights = [
  {
    name: "Crudo & Mare",
    description:
      "Tartare di gambero, scampi e salmone, ostriche, gambero rosso di Mazara e il piatto crudité: il meglio del pescato, servito crudo e freschissimo.",
  },
  {
    name: "Pizzeria",
    description:
      "Pizze classiche e proposte della casa, cotte al momento: la base di sempre, per chi cerca la pizza vera davanti al mare.",
  },
  {
    name: "Apericena",
    description:
      "Formula apericena pesce, carne e salumi: taglieri e portate pensate per la tavolata, dall'aperitivo fino a cena.",
  },
  {
    name: "Cocktail & Tramonto",
    description:
      "Cocktail bar con vista sul tramonto di Barcarello: il momento migliore della giornata, in un bicchiere.",
  },
];

/** Estratti brevi da recensioni Google pubbliche, con attribuzione. */
export const reviews = [
  {
    text: "Pizza davvero ottima, impasto leggero e ingredienti di qualità.",
    author: "Maurizio T.",
    source: "Google",
  },
  {
    text: "Esperienza super positiva, ottimo cibo, personale cordiale e professionale.",
    author: "Matteo M.",
    source: "Google",
  },
  {
    text: "La pizza è leggera, ben lievitata e con ingredienti di altissima qualità.",
    author: "Recensione Google",
    source: "Google",
  },
];
