/* Single source of copy. EN authored, FR transcreated (luxury cadence,
   not literal). Pages map over this so structure stays identical.
   Every case detail is true to the actual repo — no fabricated specifics. */

export type Locale = "en" | "fr";

export const WHATSAPP = "212602450006";
export const EMAIL = "studio@brumemaison.com";
export const CAL = "https://cal.com/hatimelhassak/engineering-discovery";

// Proof-first order: shipped-to-production work leads, so the credibility
// scan resolves "real" before "concept" (funnel audit #4).
export const WORK_SLUGS = [
  "cgs-language-services",
  "china-global-study",
  "lorani",
  "nota-parfum",
  "infinitecs",
] as const;
export type Slug = (typeof WORK_SLUGS)[number];

/** Single WhatsApp deep-link builder. Always prefilled — a blank chat to a
 *  stranger is measurable drop-off (funnel audit #9). Used everywhere. */
export function waLink(locale: Locale, about?: string): string {
  const opener =
    locale === "fr"
      ? "Bonjour Maison Brume — je vous écris au sujet de "
      : "Hello Maison Brume — I'm reaching out about ";
  const tail = about ?? (locale === "fr" ? "ma maison." : "my house.");
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(opener + tail)}`;
}

export const LIVE: Record<Slug, string> = {
  lorani: "https://lorani-website.vercel.app",
  "nota-parfum": "https://hatimhtm.github.io/nota-parfum-landing/",
  "cgs-language-services": "https://cgs-language-services.vercel.app",
  "china-global-study": "https://dashboard-omega-blue-41.vercel.app",
  infinitecs: "https://hatimhtm.github.io/InfiniteCS-Website/",
};

export const content = {
  en: {
    htmlLang: "en",
    nav: { work: "Work", studio: "Studio", contact: "Contact", cta: "Start a conversation" },
    meta: {
      title: "Maison Brume — Editorial web design for fashion houses",
      description:
        "A studio designing editorial websites for fashion and beauty houses. Slow, precise, made to be felt on a phone first. Morocco · Paris.",
    },
    hero: {
      eyebrow: "Maison Brume — Studio de design",
      title: "Your product is luxury.\nYour website isn't — yet.",
      lead: "I design editorial websites for fashion houses that sell the way the collection deserves. Built fast, shipped, yours to keep.",
      place: "Morocco · Paris",
      a: "See the work",
      b: "Message the studio",
    },
    manifesto: {
      eyebrow: "The belief",
      title: "Most fashion sites betray the product.",
      body: "A house spends months on a collection — the fabric, the light, the restraint — then hands it to a template that sells it like fast fashion. The garment deserves a page with the discipline of the seam. That gap is the whole reason Maison Brume exists.",
    },
    work: {
      eyebrow: "Selected work",
      title: "Built, shipped, and live.",
      framing: "Two of these are running in production for real businesses. The others I built before anyone asked — that is how this studio earns the conversation.",
      closing: "If one of these could be your house —",
      closingCta: "Message the studio",
      caseLead: "Convinced? The studio is one message away.",
      caseCta: "Message about a house like this",
      view: "View",
      live: "View live",
      back: "All work",
      items: {
        lorani: { name: "Lorani", kind: "Moroccan hijab house — client prototype", line: "An editorial brand world in three languages. Arabic set to be read, not flipped." },
        "nota-parfum": { name: "Nota Parfum", kind: "Fès perfume house — concept", line: "An unsolicited proposal, built to out-design the site they nearly settled for." },
        "cgs-language-services": { name: "CGS Language Services", kind: "Translation house — shipped to production", line: "Four languages, Arabic composed right-to-left. In production for a real agency." },
        "china-global-study": { name: "China Global Study", kind: "Placement agency — shipped, in daily use", line: "One dashboard that replaced the spreadsheets. Open every working day." },
        infinitecs: { name: "InfiniteCS", kind: "Enterprise marketing site — showcase", line: "Premium, global, not template-y. Built in full; the prospect shelved it." },
      },
    },
    begins: {
      eyebrow: "How it begins",
      title: "No deck. No discovery retainer.",
      body: "I study your house, then design a tailored concept of your site — yours to see before any commitment. If it moves you, we build it. If it doesn't, you keep the thinking.",
    },
    studio: {
      eyebrow: "Studio",
      title: "Your product is already luxury. Your site should not be the weak link.",
      belief:
        "A site is not a brochure. It is the one room where everyone meets the house. It should feel like the house.",
      points: [
        { k: "For", v: "Houses whose product is already considered — and whose current site doesn't return the compliment." },
        { k: "Languages", v: "English, French and Arabic. Right-to-left set as composed editorial, not bidi-flipped." },
        { k: "Delivery", v: "Complete, fast and static. Yours to host anywhere — no lock-in, no agency overhead." },
        { k: "Always", v: "A tailored concept before a contract. You see the thinking before you commit to it." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "A tailored concept, on request.",
      body: "Tell me the house. I'll come back with a direction worth looking at — or an honest reason it isn't the right moment.",
      whatsapp: "WhatsApp",
      call: "Book a call",
      email: "Email",
      direct: "The fastest way to reach me is WhatsApp — I read every message myself.",
    },
    footer: { tagline: "Editorial web design for fashion houses.", rights: "All rights reserved." },
    caseLabels: { brief: "The brief", approach: "The approach", craft: "The craft", result: "The result" },
    cases: {
      lorani: {
        name: "Lorani", kind: "Moroccan hijab house · client prototype",
        brief: "A new Moroccan hijab house wanted a brand world closer to a quiet-luxury skincare maison than a Shopify store: heritage at the centre, three languages each native, Arabic with real right-to-left typography, no shop — pure static.",
        approach: "Editorial pacing over commerce. A pinned horizontal atelier sequence, a drag-snap collection, smooth-scroll choreography. Restraint made the brand's voice.",
        craft: "Cormorant Garamond paired with Markazi Text so the Arabic reads as composed editorial, not a flipped Latin layout. Around 3,200 lines, no framework, deploys anywhere.",
        result: "A prototype that reads like a house, not a theme.",
      },
      "nota-parfum": {
        name: "Nota Parfum", kind: "Fès perfume house · concept",
        brief: "A Fès perfume house: Instagram-first, WhatsApp orders, no website, about to settle for a freelancer's template.",
        approach: "An unsolicited, fully-built proposal — their real catalogue, prices and voice baked in. The argument made by showing, not pitching.",
        craft: "An Astro component system, an opening ritual, fragrance cards, WhatsApp-native ordering, fully tested.",
        result: "A complete site, delivered before the conversation. The method, made tangible.",
      },
      "cgs-language-services": {
        name: "CGS Language Services", kind: "Translation house · shipped to production",
        brief: "The translation arm of a student-placement agency needed a marketing site that reads natively in four operating languages — English, French, Arabic (right-to-left) and Chinese — sells one thing without bloat, and feels institutional next to a university admissions page.",
        approach: "One promise — 24-hour, university-accepted document translation — carried through a WhatsApp-first funnel. No portals, no service bloat. Motion and type tuned to read admissions-grade, not corporate-template.",
        craft: "Four-language i18n with language-aware dir and lang, Arabic flipping to right-to-left at the root via logical properties so every layout stays mirror-correct. React, Vite, Tailwind, Framer Motion. Around 2,000 lines, shipped to production.",
        result: "A four-language site live for a real agency — Arabic composed, not bolted on.",
      },
      "china-global-study": {
        name: "China Global Study", kind: "Placement agency · shipped, in daily use",
        brief: "An agency placing North-African students into Chinese universities ran on spreadsheets, WhatsApp threads and memory. They needed one dashboard they would actually open every day.",
        approach: "One pipeline, end to end — eight stages from inquiry to enrolled, drag-and-drop, money tracked where it belongs, document state at a glance. Built to be lived in, not demoed.",
        craft: "Next.js on Supabase — seven referential tables, payment status governed by strict rules, an eight-stage kanban, five swappable themes. Around 4,000 lines, shipped to production.",
        result: "The spreadsheets are gone. It is open every working day.",
      },
      infinitecs: {
        name: "InfiniteCS", kind: "Enterprise marketing site · showcase",
        brief: "A US enterprise scaling offshore teams wanted a marketing site that felt premium and global — not template-y.",
        approach: "Glassmorphism over deep slate, editorial scale, GSAP scroll choreography, animated impact figures, a single clear funnel — then the sections any serious B2B site needs, which the brief had left out.",
        craft: "Vite and vanilla JS — no framework, no backend, one static bundle. Design-token-driven, around 2,500 lines, eleven sections.",
        result: "The prospect shelved the project. The work was too good to bury — so it is here.",
      },
    },
  },

  fr: {
    htmlLang: "fr",
    nav: { work: "Travaux", studio: "Le studio", contact: "Contact", cta: "Engager la conversation" },
    meta: {
      title: "Maison Brume — Design web éditorial pour maisons de mode",
      description:
        "Un studio qui conçoit des sites éditoriaux pour les maisons de mode et de beauté. Lents, précis, pensés d'abord pour l'écran d'un téléphone. Maroc · Paris.",
    },
    hero: {
      eyebrow: "Maison Brume — Studio de design",
      title: "Votre produit est luxueux.\nVotre site ne l'est pas — pas encore.",
      lead: "Je conçois des sites éditoriaux pour les maisons de mode qui vendent à la hauteur de la collection. Conçus vite, livrés, à vous.",
      place: "Maroc · Paris",
      a: "Voir les travaux",
      b: "Écrire au studio",
    },
    manifesto: {
      eyebrow: "La conviction",
      title: "La plupart des sites de mode trahissent le produit.",
      body: "Une maison passe des mois sur une collection — la matière, la lumière, la retenue — puis la confie à un template qui la vend comme de la fast fashion. Le vêtement mérite une page tenue avec la rigueur d'une couture. C'est précisément pour combler cet écart que Maison Brume existe.",
    },
    work: {
      eyebrow: "Travaux choisis",
      title: "Conçus, livrés, en ligne.",
      framing: "Deux d'entre eux tournent en production pour de vraies entreprises. Les autres, je les ai construits avant qu'on me les demande — c'est ainsi que ce studio mérite la conversation.",
      closing: "Si l'une de ces maisons pouvait être la vôtre —",
      closingCta: "Écrire au studio",
      caseLead: "Convaincu ? Le studio est à un message près.",
      caseCta: "Écrire au sujet d'une maison comme celle-ci",
      view: "Découvrir",
      live: "Voir en ligne",
      back: "Tous les travaux",
      items: {
        lorani: { name: "Lorani", kind: "Maison de hijab marocaine — prototype client", line: "Un univers de marque éditorial en trois langues. L'arabe composé pour être lu, non retourné." },
        "nota-parfum": { name: "Nota Parfum", kind: "Maison de parfum fassie — concept", line: "Une proposition spontanée, conçue pour surpasser le site qu'ils s'apprêtaient à accepter." },
        "cgs-language-services": { name: "CGS Language Services", kind: "Maison de traduction — livré en production", line: "Quatre langues, l'arabe composé de droite à gauche. En production pour une vraie agence." },
        "china-global-study": { name: "China Global Study", kind: "Agence de placement — livré, en usage quotidien", line: "Un tableau de bord qui a remplacé les tableurs. Ouvert chaque jour ouvré." },
        infinitecs: { name: "InfiniteCS", kind: "Site corporate — démonstration", line: "Premium, global, sans effet template. Construit en entier ; le prospect l'a remisé." },
      },
    },
    begins: {
      eyebrow: "Comment cela commence",
      title: "Pas de présentation. Pas d'acompte de cadrage.",
      body: "J'étudie votre maison, puis je conçois un concept sur mesure de votre site — à voir avant tout engagement. S'il vous touche, nous le construisons. Sinon, la réflexion vous reste acquise.",
    },
    studio: {
      eyebrow: "Le studio",
      title: "Votre produit est déjà du luxe. Votre site ne doit pas être le maillon faible.",
      belief:
        "Un site n'est pas une brochure. C'est la seule pièce où chacun rencontre la maison. Il doit donner la sensation de la maison.",
      points: [
        { k: "Pour", v: "Les maisons dont le produit est déjà pensé — et dont le site actuel n'est pas à la hauteur." },
        { k: "Langues", v: "Anglais, français et arabe. L'écriture de droite à gauche composée comme un éditorial, non simplement inversée." },
        { k: "Livraison", v: "Complet, rapide et statique. À héberger où vous voulez — sans dépendance, sans frais d'agence." },
        { k: "Toujours", v: "Un concept sur mesure avant le contrat. Vous voyez la réflexion avant de vous y engager." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Un concept sur mesure, sur demande.",
      body: "Parlez-moi de la maison. Je reviens avec une direction qui mérite le regard — ou une raison honnête que ce n'est pas le moment.",
      whatsapp: "WhatsApp",
      call: "Réserver un appel",
      email: "Email",
      direct: "Le plus rapide pour me joindre, c'est WhatsApp — je lis chaque message moi-même.",
    },
    footer: { tagline: "Design web éditorial pour maisons de mode.", rights: "Tous droits réservés." },
    caseLabels: { brief: "Le brief", approach: "L'approche", craft: "L'exécution", result: "Le résultat" },
    cases: {
      lorani: {
        name: "Lorani", kind: "Maison de hijab marocaine · prototype client",
        brief: "Une nouvelle maison de hijab marocaine voulait un univers de marque plus proche d'une maison de soin au luxe discret que d'une boutique Shopify : l'héritage au centre, trois langues chacune native, l'arabe avec une vraie typographie de droite à gauche, sans boutique — entièrement statique.",
        approach: "Le rythme éditorial avant le commerce. Une séquence atelier horizontale épinglée, une collection à défilement aimanté, une chorégraphie au scroll. La retenue est devenue la voix de la marque.",
        craft: "Cormorant Garamond associé à Markazi Text pour que l'arabe se lise comme un éditorial composé, et non comme une mise en page latine inversée. Environ 3 200 lignes, sans framework, déployable partout.",
        result: "Un prototype qui se lit comme une maison, pas comme un template.",
      },
      "nota-parfum": {
        name: "Nota Parfum", kind: "Maison de parfum fassie · concept",
        brief: "Une maison de parfum à Fès : Instagram d'abord, commandes par WhatsApp, aucun site, sur le point d'accepter le template d'un freelance.",
        approach: "Une proposition spontanée et entièrement construite — leur vrai catalogue, leurs prix et leur voix intégrés. La démonstration par la preuve, non par le discours.",
        craft: "Un système de composants Astro, un rituel d'ouverture, des cartes de fragrance, la commande native par WhatsApp, entièrement testé.",
        result: "Un site complet, livré avant la conversation. La méthode, rendue tangible.",
      },
      "cgs-language-services": {
        name: "CGS Language Services", kind: "Maison de traduction · livré en production",
        brief: "La branche traduction d'une agence de placement avait besoin d'un site qui se lise nativement en quatre langues de travail — anglais, français, arabe (droite-à-gauche) et chinois —, vende une seule chose sans superflu, et paraisse institutionnel à côté d'une page d'admission universitaire.",
        approach: "Une seule promesse — la traduction de documents acceptée par les universités en 24 heures — portée par un tunnel WhatsApp d'abord. Pas de portail, pas de superflu. Mouvement et typographie réglés pour un ton d'admission, non corporate-template.",
        craft: "Une i18n en quatre langues avec dir et lang adaptés, l'arabe basculant de droite à gauche à la racine via les propriétés logiques pour que chaque mise en page reste correctement en miroir. React, Vite, Tailwind, Framer Motion. Environ 2 000 lignes, livré en production.",
        result: "Un site en quatre langues en ligne pour une vraie agence — l'arabe composé, non ajouté après coup.",
      },
      "china-global-study": {
        name: "China Global Study", kind: "Agence de placement · livré, en usage quotidien",
        brief: "Une agence plaçant des étudiants nord-africains dans les universités chinoises fonctionnait au tableur, aux fils WhatsApp et à la mémoire. Il lui fallait un seul tableau de bord qu'elle ouvrirait vraiment chaque jour.",
        approach: "Un pipeline unique, de bout en bout — huit étapes de la demande à l'inscription, glisser-déposer, l'argent suivi là où il doit l'être, l'état des documents d'un coup d'œil. Conçu pour être habité, non démontré.",
        craft: "Next.js sur Supabase — sept tables référentielles, un statut de paiement gouverné par des règles strictes, un kanban à huit étapes, cinq thèmes interchangeables. Environ 4 000 lignes, livré en production.",
        result: "Les tableurs ont disparu. Il est ouvert chaque jour ouvré.",
      },
      infinitecs: {
        name: "InfiniteCS", kind: "Site corporate · démonstration",
        brief: "Une entreprise américaine en croissance d'équipes offshore voulait un site qui paraisse premium et global — sans effet template.",
        approach: "Glassmorphism sur ardoise profonde, échelle éditoriale, chorégraphie GSAP au scroll, chiffres d'impact animés, un tunnel unique et clair — puis les sections que tout site B2B sérieux exige et que le brief avait omises.",
        craft: "Vite et JS vanilla — sans framework, sans backend, un seul bundle statique. Piloté par des design tokens, environ 2 500 lignes, onze sections.",
        result: "Le prospect a remisé le projet. Le travail était trop abouti pour rester au tiroir — alors il est montré.",
      },
    },
  },
} as const;

export type Content = (typeof content)["en"];
