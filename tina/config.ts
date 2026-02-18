import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ========================================
      // BANER GLOWNY (SLAJDY)
      // ========================================
      {
        name: "heroSlides",
        label: "Baner Glowny (Slajdy)",
        path: "content/hero",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Podtytul",
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjecie tla",
          },
          {
            type: "number",
            name: "order",
            label: "Kolejnosc (1, 2, 3...)",
          },
        ],
      },

      // ========================================
      // AKTUALNOSCI
      // ========================================
      {
        name: "news",
        label: "Aktualnosci",
        path: "content/news",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul",
            required: true,
            isTitle: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data publikacji",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              "Wyklad",
              "Konferencja",
              "Publikacja",
              "Wydarzenie",
              "Kultura",
              "Duchowosc",
              "Spotkanie",
              "Ogloszenie",
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Zdjecie glowne",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Krotki opis (zajawka)",
            ui: { component: "textarea" },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Wyrozniony artykul",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Tresc artykulu",
            isBody: true,
          },
        ],
      },

      // ========================================
      // WYDARZENIA
      // ========================================
      {
        name: "events",
        label: "Wydarzenia",
        path: "content/events",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul wydarzenia",
            required: true,
            isTitle: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data wydarzenia",
            required: true,
          },
          {
            type: "string",
            name: "time",
            label: "Godzina (np. 18:00)",
          },
          {
            type: "string",
            name: "location",
            label: "Miejsce",
          },
          {
            type: "string",
            name: "type",
            label: "Typ wydarzenia",
            options: [
              "Wyklad",
              "Konferencja",
              "Rekolekcje",
              "Spotkanie",
              "Koncert",
              "Seminarium",
              "Wystawa",
            ],
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
            ui: { component: "textarea" },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjecie/plakat",
          },
        ],
      },

      // ========================================
      // NAGRANIA WIDEO
      // ========================================
      {
        name: "videos",
        label: "Nagrania Wideo",
        path: "content/videos",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "youtubeId",
            label: "ID filmu YouTube",
            description: "Np. dla https://youtube.com/watch?v=ABC123 wpisz: ABC123",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "duration",
            label: "Czas trwania (np. 1:24:30)",
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: ["Wyklad", "Konferencja", "Kazanie", "Homilia", "Wywiad", "Inny"],
          },
          {
            type: "datetime",
            name: "date",
            label: "Data nagrania",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Wyrozniony na stronie glownej",
          },
        ],
      },

      // ========================================
      // GALERIA
      // ========================================
      {
        name: "gallery",
        label: "Galeria",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul albumu",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: ["Osrodek", "Wyklady", "Konferencje", "Kultura", "Roztocze", "Rekolekcje"],
          },
          {
            type: "object",
            name: "photos",
            label: "Zdjecia",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Zdjecie" },
              { type: "string", name: "alt", label: "Opis zdjecia" },
            ],
          },
        ],
      },

      // ========================================
      // PUBLIKACJE
      // ========================================
      {
        name: "publications",
        label: "Publikacje",
        path: "content/publications",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul publikacji",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "datetime",
            name: "date",
            label: "Data wydania",
          },
          {
            type: "string",
            name: "publisher",
            label: "Wydawnictwo",
          },
          {
            type: "image",
            name: "cover",
            label: "Okladka",
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: ["Ksiazka", "Artykul naukowy", "Rozdzial w monografii", "Recenzja"],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Opis / Fragment",
            isBody: true,
          },
        ],
      },

      // ========================================
      // STRONY INFORMACYJNE
      // ========================================
      {
        name: "pages",
        label: "Strony informacyjne",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul strony",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Podtytul",
          },
          {
            type: "string",
            name: "slug",
            label: "Adres URL (slug)",
            description: "Np. o-fundacji, biografia, statut",
            required: true,
          },
          {
            type: "string",
            name: "section",
            label: "Sekcja menu",
            options: [
              "Fundacja",
              "Ks. Prof. Tadeusz Guz",
              "Prawda Dobro Piekno",
              "Aktualnosci",
              "Kontakt",
            ],
          },
          {
            type: "image",
            name: "heroImage",
            label: "Zdjecie naglowkowe",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Tresc strony",
            isBody: true,
          },
        ],
      },

      // ========================================
      // KAZANIA I HOMILIE
      // ========================================
      {
        name: "sermons",
        label: "Kazania i Homilie",
        path: "content/sermons",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytul kazania",
            required: true,
            isTitle: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data wygłoszenia",
          },
          {
            type: "string",
            name: "occasion",
            label: "Okazja liturgiczna",
          },
          {
            type: "string",
            name: "location",
            label: "Miejsce",
          },
          {
            type: "string",
            name: "youtubeId",
            label: "ID filmu YouTube (opcjonalne)",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Tresc kazania",
            isBody: true,
          },
        ],
      },

      // ========================================
      // CYTATY
      // ========================================
      {
        name: "quotes",
        label: "Cytaty",
        path: "content/quotes",
        format: "json",
        fields: [
          {
            type: "string",
            name: "text",
            label: "Tresc cytatu",
            required: true,
            isTitle: true,
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "string",
            name: "source",
            label: "Zrodlo (opcjonalne)",
          },
          {
            type: "boolean",
            name: "showOnHomepage",
            label: "Pokazuj na stronie glownej",
          },
        ],
      },

      // ========================================
      // USTAWIENIA STRONY
      // ========================================
      {
        name: "settings",
        label: "Ustawienia strony",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true,
        },
        fields: [
          { type: "string", name: "siteName", label: "Nazwa strony" },
          { type: "string", name: "siteSubtitle", label: "Podtytul strony" },
          { type: "string", name: "phone", label: "Telefon kontaktowy" },
          { type: "string", name: "email", label: "Email kontaktowy" },
          {
            type: "string",
            name: "address",
            label: "Adres",
            ui: { component: "textarea" },
          },
          { type: "string", name: "bankAccount", label: "Numer konta bankowego" },
          {
            type: "object",
            name: "socialMedia",
            label: "Media spolecznosciowe",
            fields: [
              { name: "facebook", label: "Facebook URL", type: "string" },
              { name: "youtube", label: "YouTube URL", type: "string" },
              { name: "twitter", label: "Twitter/X URL", type: "string" },
            ],
          },
          {
            type: "object",
            name: "openingHours",
            label: "Godziny otwarcia",
            fields: [
              { name: "weekdays", label: "Poniedzialek - Piatek", type: "string" },
              { name: "saturday", label: "Sobota", type: "string" },
              { name: "sunday", label: "Niedziela", type: "string" },
            ],
          },
        ],
      },
    ],
  },
});
