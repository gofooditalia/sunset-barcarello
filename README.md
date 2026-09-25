# Sunset Barcarello

Benvenuti su Sunset Barcarello. Sito ufficiale di Sunset Barcarello, pizzeria, ristorante e apericena sul mare in Via Barcarello 35, Palermo. Dominio: sunsetbarcarello.it (da confermare).

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Typography**: [Fontsource](https://fontsource.org/) (Playfair Display, Inter)
- **Hosting**: Vercel

## 🚀 Struttura del Progetto

- `src/data/site.ts`: dati del locale (indirizzo, orari, contatti, link menu, recensioni, flag gallery). **Unico punto da aggiornare**: i campi vuoti nascondono automaticamente pulsanti e sezioni.
- `src/layouts/`: layout principale con SEO e JSON-LD Restaurant.
- `src/components/`: sezioni della home (Navbar, Hero, About, Menu, Reviews, Gallery, Contact, Footer). La Gallery si attiva con `hasGallery: true`.
- `src/pages/`: pagine del sito.
- `public/images/`: og-image.png (social share). Foto reali del locale da aggiungere quando disponibili (about.jpg, gallery/1..6.jpg).

Il link `/menu` reindirizza al menu digitale GO!Food già live: https://www.gofoodmenu.it/sunset-barcarello

## 🧞 Comandi principali

| Comando | Azione |
| :--- | :--- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Compila il sito in `./dist/` |
| `npm run preview` | Anteprima della build |

## 📋 Cose da confermare col cliente

- Dominio definitivo (placeholder: sunsetbarcarello.it)
- Fasce orarie precise e giorno di chiusura (confermato solo "apre alle 17:30")
- WhatsApp, Instagram, Facebook
- Foto reali del locale per la Gallery

## 👨‍💻 Developed by

Sviluppato da [GO!Food Italia](https://gofoodmenu.it).
