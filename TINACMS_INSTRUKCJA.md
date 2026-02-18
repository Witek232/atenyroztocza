# 🎨 Integracja TinaCMS z Ateny Roztocza - Kompletna Instrukcja

## Spis treści
1. [Przygotowanie projektu](#1-przygotowanie-projektu)
2. [Instalacja TinaCMS](#2-instalacja-tinacms)
3. [Konfiguracja TinaCMS](#3-konfiguracja-tinacms)
4. [Tworzenie kolekcji treści](#4-tworzenie-kolekcji-treści)
5. [Podłączenie treści do komponentów React](#5-podłączenie-treści-do-komponentów-react)
6. [Uruchomienie lokalne](#6-uruchomienie-lokalne)
7. [Wdrożenie na Cloudflare Pages](#7-wdrożenie-na-cloudflare-pages)
8. [Edycja treści - jak korzystać](#8-edycja-treści---jak-korzystać)

---

## 1. Przygotowanie projektu

### Krok 1: Sklonuj lub pobierz projekt

```bash
git clone https://github.com/TWOJ-LOGIN/ateny-roztocza.git
cd ateny-roztocza
npm install
```

### Krok 2: Usuń plugin singlefile z vite.config.ts

TinaCMS potrzebuje normalnego builda (nie single-file). Zamień `vite.config.ts` na:

```typescript
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

---

## 2. Instalacja TinaCMS

```bash
npx @tinacms/cli@latest init
```

Gdy zapyta:
- **Framework:** Wybierz `Other`
- **Package Manager:** `npm`
- **Public assets directory:** `public`

To automatycznie:
- ✅ Zainstaluje `tinacms` i `@tinacms/cli`
- ✅ Utworzy folder `tina/` z konfiguracją
- ✅ Doda skrypty do `package.json`

### Jeśli wolisz ręcznie:

```bash
npm install tinacms @tinacms/cli
```

Dodaj do `package.json` w sekcji `scripts`:

```json
{
  "scripts": {
    "dev": "tinacms dev -c \"vite\"",
    "build": "tinacms build && vite build",
    "preview": "vite preview"
  }
}
```

---

## 3. Konfiguracja TinaCMS

Utwórz plik `tina/config.ts` (lub zamień istniejący):

```typescript
// tina/config.ts
import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Uzyskaj te dane na app.tina.io (darmowe!)
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    // Przechowywanie mediów w repozytorium
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      // ========================================
      // 📄 STRONA GŁÓWNA - Baner Hero
      // ========================================
      {
        name: "heroSlides",
        label: "🎠 Baner Główny (Slajdy)",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: true,
            delete: true,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Podtytuł",
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie tła",
          },
          {
            type: "number",
            name: "order",
            label: "Kolejność (1, 2, 3...)",
          },
        ],
      },

      // ========================================
      // 📰 AKTUALNOŚCI / WIADOMOŚCI
      // ========================================
      {
        name: "news",
        label: "📰 Aktualności",
        path: "content/news",
        format: "mdx",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^a-z0-9-]/g, "") || "";
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
            required: true,
            isTitle: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data publikacji",
            required: true,
            ui: {
              dateFormat: "DD.MM.YYYY",
            },
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              "Wykład",
              "Konferencja",
              "Publikacja",
              "Wydarzenie",
              "Kultura",
              "Duchowość",
              "Spotkanie",
              "Ogłoszenie",
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie główne",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Krótki opis (zajawka)",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Wyróżniony artykuł",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść artykułu",
            isBody: true,
            templates: [
              {
                name: "YouTube",
                label: "Film YouTube",
                fields: [
                  {
                    name: "url",
                    label: "Link do filmu",
                    type: "string",
                    required: true,
                  },
                  {
                    name: "caption",
                    label: "Podpis pod filmem",
                    type: "string",
                  },
                ],
              },
              {
                name: "Quote",
                label: "Cytat",
                fields: [
                  {
                    name: "text",
                    label: "Treść cytatu",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                  {
                    name: "author",
                    label: "Autor",
                    type: "string",
                  },
                ],
              },
              {
                name: "Gallery",
                label: "Galeria zdjęć",
                fields: [
                  {
                    name: "images",
                    label: "Zdjęcia",
                    type: "object",
                    list: true,
                    fields: [
                      { name: "src", label: "Zdjęcie", type: "image" },
                      { name: "alt", label: "Opis", type: "string" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      // ========================================
      // 📅 WYDARZENIA
      // ========================================
      {
        name: "events",
        label: "📅 Wydarzenia",
        path: "content/events",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł wydarzenia",
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
            label: "Godzina (np. 18:00 lub 10:00-17:00)",
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
              "Wykład",
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
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Zdjęcie/plakat",
          },
        ],
      },

      // ========================================
      // 🎥 NAGRANIA WIDEO
      // ========================================
      {
        name: "videos",
        label: "🎥 Nagrania Wideo",
        path: "content/videos",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł",
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
            ui: {
              component: "textarea",
            },
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
            options: [
              "Wykład",
              "Konferencja",
              "Kazanie",
              "Homilia",
              "Wywiad",
              "Inny",
            ],
          },
          {
            type: "datetime",
            name: "date",
            label: "Data nagrania",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Wyróżniony na stronie głównej",
          },
        ],
      },

      // ========================================
      // 🖼️ GALERIA
      // ========================================
      {
        name: "gallery",
        label: "🖼️ Galeria",
        path: "content/gallery",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł albumu",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              "Ośrodek",
              "Wykłady",
              "Konferencje",
              "Kultura",
              "Roztocze",
              "Rekolekcje",
            ],
          },
          {
            type: "object",
            name: "photos",
            label: "Zdjęcia",
            list: true,
            fields: [
              {
                type: "image",
                name: "src",
                label: "Zdjęcie",
              },
              {
                type: "string",
                name: "alt",
                label: "Opis zdjęcia",
              },
            ],
          },
        ],
      },

      // ========================================
      // 📖 PUBLIKACJE
      // ========================================
      {
        name: "publications",
        label: "📖 Publikacje",
        path: "content/publications",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł publikacji",
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
            type: "string",
            name: "isbn",
            label: "ISBN",
          },
          {
            type: "image",
            name: "cover",
            label: "Okładka",
          },
          {
            type: "string",
            name: "category",
            label: "Kategoria",
            options: [
              "Książka",
              "Artykuł naukowy",
              "Rozdział w monografii",
              "Recenzja",
              "Wywiad",
            ],
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
      // 📄 STRONY INFORMACYJNE
      // ========================================
      {
        name: "pages",
        label: "📄 Strony informacyjne",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł strony",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Podtytuł",
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
              "Prawda · Dobro · Piękno",
              "Aktualności",
              "Kontakt",
            ],
          },
          {
            type: "image",
            name: "heroImage",
            label: "Zdjęcie nagłówkowe",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Treść strony",
            isBody: true,
            templates: [
              {
                name: "YouTube",
                label: "Film YouTube",
                fields: [
                  {
                    name: "url",
                    label: "Link YouTube",
                    type: "string",
                  },
                ],
              },
              {
                name: "InfoBox",
                label: "Ramka informacyjna",
                fields: [
                  {
                    name: "title",
                    label: "Tytuł",
                    type: "string",
                  },
                  {
                    name: "text",
                    label: "Treść",
                    type: "string",
                    ui: { component: "textarea" },
                  },
                  {
                    name: "type",
                    label: "Typ",
                    type: "string",
                    options: ["info", "warning", "quote"],
                  },
                ],
              },
              {
                name: "ContactCard",
                label: "Karta kontaktowa",
                fields: [
                  { name: "name", label: "Imię i nazwisko", type: "string" },
                  { name: "role", label: "Funkcja", type: "string" },
                  { name: "email", label: "Email", type: "string" },
                  { name: "phone", label: "Telefon", type: "string" },
                  { name: "photo", label: "Zdjęcie", type: "image" },
                ],
              },
            ],
          },
        ],
      },

      // ========================================
      // ✝️ KAZANIA I HOMILIE
      // ========================================
      {
        name: "sermons",
        label: "✝️ Kazania i Homilie",
        path: "content/sermons",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł kazania",
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
            description: "Np. 'III Niedziela Adwentu', 'Uroczystość Bożego Narodzenia'",
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
            label: "Treść kazania",
            isBody: true,
          },
        ],
      },

      // ========================================
      // 💬 CYTAT DNIA
      // ========================================
      {
        name: "quotes",
        label: "💬 Cytaty",
        path: "content/quotes",
        format: "json",
        fields: [
          {
            type: "string",
            name: "text",
            label: "Treść cytatu",
            required: true,
            isTitle: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "author",
            label: "Autor",
          },
          {
            type: "string",
            name: "source",
            label: "Źródło (opcjonalne)",
          },
          {
            type: "boolean",
            name: "showOnHomepage",
            label: "Pokazuj na stronie głównej",
          },
        ],
      },

      // ========================================
      // ⚙️ USTAWIENIA STRONY
      // ========================================
      {
        name: "settings",
        label: "⚙️ Ustawienia strony",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
          global: true,
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Nazwa strony",
          },
          {
            type: "string",
            name: "siteSubtitle",
            label: "Podtytuł strony",
          },
          {
            type: "string",
            name: "phone",
            label: "Telefon kontaktowy",
          },
          {
            type: "string",
            name: "email",
            label: "Email kontaktowy",
          },
          {
            type: "string",
            name: "address",
            label: "Adres",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "bankAccount",
            label: "Numer konta bankowego",
          },
          {
            type: "object",
            name: "socialMedia",
            label: "Media społecznościowe",
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
              { name: "weekdays", label: "Poniedziałek - Piątek", type: "string" },
              { name: "saturday", label: "Sobota", type: "string" },
              { name: "sunday", label: "Niedziela", type: "string" },
            ],
          },
        ],
      },
    ],
  },
});
```

---

## 4. Tworzenie przykładowych treści

Utwórz foldery na treści:

```bash
mkdir -p content/hero
mkdir -p content/news
mkdir -p content/events
mkdir -p content/videos
mkdir -p content/gallery
mkdir -p content/publications
mkdir -p content/pages
mkdir -p content/sermons
mkdir -p content/quotes
mkdir -p content/settings
```

### Przykładowy slajd hero (`content/hero/slide-1.json`):

```json
{
  "title": "Fundacja Ateny Roztocza",
  "subtitle": "Ośrodek Kultury i Myśli im. ks. prof. Tadeusza Guza",
  "description": "Miejsce spotkania filozofii, teologii i kultury w sercu Roztocza.",
  "image": "/uploads/hero-1.jpg",
  "order": 1
}
```

### Przykładowa aktualność (`content/news/wyklad-filozofia-klasyczna.mdx`):

```mdx
---
title: "Filozofia klasyczna wobec wyzwań współczesności"
date: 2025-01-15T18:00:00.000Z
category: "Wykład"
image: "/uploads/wyklad-filozofia.jpg"
excerpt: "Zapraszamy na wykład ks. prof. Tadeusza Guza poświęcony aktualności myśli arystotelesowsko-tomistycznej."
featured: true
---

# Filozofia klasyczna wobec wyzwań współczesności

Zapraszamy na wyjątkowy wykład ks. prof. **Tadeusza Guza** poświęcony aktualności
myśli arystotelesowsko-tomistycznej w kontekście współczesnych problemów filozoficznych.

## Program wykładu

Wykład będzie obejmował następujące zagadnienia:

1. Znaczenie metafizyki klasycznej we współczesnym dyskursie
2. Tomistyczna koncepcja prawdy a postmodernistyczny relatywizm
3. Etyka cnót wobec kryzysu wartości

<YouTube url="https://www.youtube.com/watch?v=EXAMPLE" />

> „Prawda nie jest kwestią opinii, ale odkrycia rzeczywistości takiej, jaka jest."
> — Św. Tomasz z Akwinu
```

### Ustawienia strony (`content/settings/main.json`):

```json
{
  "siteName": "Fundacja Ateny Roztocza",
  "siteSubtitle": "Ośrodek Kultury i Myśli",
  "phone": "+48 123 456 789",
  "email": "kontakt@atenyroztocza.pl",
  "address": "Fundacja Ateny Roztocza\nul. Roztoczańska 1\n22-400 Zamość",
  "bankAccount": "PL 12 3456 7890 1234 5678 9012 3456",
  "socialMedia": {
    "facebook": "https://facebook.com/atenyroztocza",
    "youtube": "https://youtube.com/@atenyroztocza"
  },
  "openingHours": {
    "weekdays": "9:00 - 17:00",
    "saturday": "10:00 - 14:00",
    "sunday": "Nieczynne"
  }
}
```

---

## 5. Podłączenie treści do komponentów React

### Krok 5.1: Zainstaluj klienta TinaCMS

```bash
npm install @tinacms/cli tinacms
```

### Krok 5.2: Utwórz hook do pobierania danych

Utwórz plik `src/hooks/useTinaContent.ts`:

```typescript
// src/hooks/useTinaContent.ts
import { useTina } from "tinacms/dist/react";

// Hook do użycia w komponentach z edycją wizualną
export { useTina };

// Funkcja do pobierania treści statycznych (dla builda)
export async function fetchTinaContent(query: string, variables?: object) {
  const response = await fetch("/api/tina", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
```

### Krok 5.3: Podłącz dane do komponentu HeroBanner

Po uruchomieniu `tinacms dev`, TinaCMS generuje automatycznie typowane zapytania
w folderze `tina/__generated__/`. Możesz ich użyć tak:

```typescript
// src/components/HeroBanner.tsx - zmodyfikowana wersja
import { useTina } from "tinacms/dist/react";
import client from "../../tina/__generated__/client";

// W komponencie:
export function HeroBanner({ navigateTo }) {
  // Pobierz slajdy z TinaCMS
  const [slidesData, setSlidesData] = useState([]);

  useEffect(() => {
    client.queries.heroSlidesConnection().then((result) => {
      const slides = result.data.heroSlidesConnection.edges?.map(
        (edge) => edge?.node
      ) || [];
      setSlidesData(slides.sort((a, b) => (a.order || 0) - (b.order || 0)));
    });
  }, []);

  // Reszta komponentu używa slidesData zamiast hardcoded slides
  // ...
}
```

### Krok 5.4: Podłącz dane do NewsSection

```typescript
// src/components/NewsSection.tsx - fragment
import client from "../../tina/__generated__/client";

export function NewsSection({ navigateTo }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    client.queries.newsConnection({
      sort: "date",
      last: 4,
    }).then((result) => {
      const items = result.data.newsConnection.edges?.map(
        (edge) => edge?.node
      ) || [];
      setNews(items);
    });
  }, []);

  // Renderuj news z danych TinaCMS
}
```

### Krok 5.5: Podłącz dane do VideoSection

```typescript
// src/components/VideoSection.tsx - fragment
import client from "../../tina/__generated__/client";

export function VideoSection() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    client.queries.videosConnection({
      filter: { featured: { eq: true } }
    }).then((result) => {
      const items = result.data.videosConnection.edges?.map(
        (edge) => edge?.node
      ) || [];
      setVideos(items);
    });
  }, []);
}
```

---

## 6. Uruchomienie lokalne

### Krok 6.1: Tryb deweloperski (z edycją wizualną)

```bash
npm run dev
```

To uruchomi jednocześnie:
- ✅ Serwer Vite (strona frontendowa)
- ✅ Serwer TinaCMS (panel administracyjny)

### Krok 6.2: Otwórz panel administracyjny

Przejdź do: **http://localhost:5173/admin/**

Zobaczysz panel TinaCMS z listą kolekcji:
- 🎠 Baner Główny (Slajdy)
- 📰 Aktualności
- 📅 Wydarzenia
- 🎥 Nagrania Wideo
- 🖼️ Galeria
- 📖 Publikacje
- 📄 Strony informacyjne
- ✝️ Kazania i Homilie
- 💬 Cytaty
- ⚙️ Ustawienia strony

### Krok 6.3: Dodaj treści

1. Kliknij na kolekcję (np. "📰 Aktualności")
2. Kliknij "Create New"
3. Wypełnij formularz
4. Kliknij "Save"

Treści zapisują się jako pliki w folderze `content/` i trafiają do Gita!

---

## 7. Wdrożenie na Cloudflare Pages

### Krok 7.1: Zarejestruj się na Tina Cloud (DARMOWE)

1. Wejdź na **[app.tina.io](https://app.tina.io)**
2. Zaloguj się przez GitHub
3. Kliknij **"Create Project"**
4. Wybierz swoje repozytorium `ateny-roztocza`
5. Skopiuj:
   - **Client ID** → `NEXT_PUBLIC_TINA_CLIENT_ID`
   - **Token** → `TINA_TOKEN`

### Krok 7.2: Skonfiguruj Cloudflare Pages

1. Wejdź na [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Wybierz repo `ateny-roztocza`
4. Ustawienia buildu:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. **Zmienne środowiskowe** (Environment Variables):
   ```
   NEXT_PUBLIC_TINA_CLIENT_ID = twój-client-id-z-tina-cloud
   TINA_TOKEN = twój-token-z-tina-cloud
   ```
6. Kliknij **Save and Deploy**

### Krok 7.3: Gotowe! 🎉

Strona dostępna pod: `https://ateny-roztocza.pages.dev`
Panel CMS: `https://ateny-roztocza.pages.dev/admin/`

---

## 8. Edycja treści - jak korzystać

### Dla redaktora/administratora (bez znajomości kodu!):

#### Dodawanie aktualności:
1. Wejdź na `https://twoja-strona.pages.dev/admin/`
2. Zaloguj się przez GitHub
3. Kliknij **"📰 Aktualności"** → **"Create New"**
4. Wypełnij:
   - 📝 Tytuł
   - 📅 Data
   - 🏷️ Kategoria (wykład, konferencja, publikacja...)
   - 🖼️ Zdjęcie (upload lub przeciągnij)
   - 📄 Treść (edytor WYSIWYG!)
5. W treści możesz dodać:
   - 🎥 Film z YouTube (przycisk "+" → "Film YouTube")
   - 💬 Cytat (przycisk "+" → "Cytat")
   - 🖼️ Galerię zdjęć
6. Kliknij **"Save"**
7. Strona automatycznie się zaktualizuje!

#### Dodawanie wydarzeń:
1. **"📅 Wydarzenia"** → **"Create New"**
2. Wypełnij datę, tytuł, miejsce, typ
3. Save → Gotowe!

#### Zmiana slajdów na banerze:
1. **"🎠 Baner Główny"** → wybierz slajd lub utwórz nowy
2. Zmień tytuł, podtytuł, zdjęcie tła
3. Ustaw kolejność

#### Dodawanie filmów z YouTube:
1. **"🎥 Nagrania Wideo"** → **"Create New"**
2. Wklej ID filmu YouTube
3. Dodaj tytuł i opis
4. Zaznacz "Wyróżniony" jeśli ma być na stronie głównej

#### Edycja danych kontaktowych:
1. **"⚙️ Ustawienia strony"** → edytuj
2. Zmień telefon, email, adres, godziny otwarcia, nr konta
3. Save

---

## 📊 Architektura systemu

```
┌─────────────────────────────────────────────────┐
│                  PRZEGLĄDARKA                    │
│                                                  │
│  ┌──────────────┐      ┌─────────────────────┐  │
│  │ Strona WWW   │      │  Panel Admin (/admin)│  │
│  │ React + Vite │      │  TinaCMS             │  │
│  └──────┬───────┘      └──────────┬──────────┘  │
└─────────┼──────────────────────────┼────────────┘
          │                          │
          ▼                          ▼
┌─────────────────────────────────────────────────┐
│              CLOUDFLARE PAGES                    │
│         (hosting statycznych plików)             │
└─────────────────────┬───────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│                TINA CLOUD                        │
│         (zarządzanie treścią)                    │
│                                                  │
│  ┌─────────┐   ┌──────────┐   ┌──────────────┐ │
│  │ GraphQL  │   │  Media   │   │  Auth        │ │
│  │  API     │   │  Storage │   │  (GitHub)    │ │
│  └─────────┘   └──────────┘   └──────────────┘ │
└─────────────────────┬───────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│                  GITHUB                          │
│         (repozytorium z treścią)                 │
│                                                  │
│  content/                                        │
│  ├── hero/          (slajdy bannera)            │
│  ├── news/          (aktualności .mdx)          │
│  ├── events/        (wydarzenia .json)          │
│  ├── videos/        (nagrania .json)            │
│  ├── gallery/       (galerie .json)             │
│  ├── publications/  (publikacje .mdx)           │
│  ├── pages/         (strony informacyjne .mdx)  │
│  ├── sermons/       (kazania .mdx)              │
│  ├── quotes/        (cytaty .json)              │
│  └── settings/      (ustawienia .json)          │
│  public/                                         │
│  └── uploads/       (zdjęcia i pliki)           │
└─────────────────────────────────────────────────┘
```

---

## 💰 Koszty

| Element | Koszt |
|---------|-------|
| Cloudflare Pages | **DARMOWE** (unlimited sites) |
| TinaCMS (Tina Cloud) | **DARMOWE** do 2 użytkowników |
| GitHub | **DARMOWE** (prywatne repo) |
| Domena .pl | ~50-80 zł/rok |
| **RAZEM** | **~50-80 zł/rok** (tylko domena!) |

---

## ❓ FAQ

**P: Czy muszę znać programowanie żeby dodawać treści?**
O: NIE! Panel TinaCMS jest wizualny, jak WordPress. Klikasz, piszesz, wrzucasz zdjęcia.

**P: Co się stanie jak dodam treść?**
O: TinaCMS automatycznie tworzy commit w GitHub → Cloudflare wykrywa zmianę → strona się przebudowuje (1-2 min).

**P: Ile osób może edytować?**
O: Na darmowym planie Tina Cloud - 2 osoby. Plan płatny to więcej użytkowników.

**P: Czy mogę edytować treści z telefonu?**
O: TAK! Panel `/admin/` działa na urządzeniach mobilnych.

**P: Jak dodać nową podstronę?**
O: W panelu → "Strony informacyjne" → "Create New" → wypełnij slug (adres URL) i treść.
