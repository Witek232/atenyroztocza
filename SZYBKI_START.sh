#!/bin/bash
# ============================================
# SZYBKI START - Ateny Roztocza + TinaCMS
# ============================================
# Uruchom ten skrypt po sklonowaniu repozytorium:
#   chmod +x SZYBKI_START.sh
#   ./SZYBKI_START.sh
# ============================================

echo ""
echo "=========================================="
echo "  🏛️  ATENY ROZTOCZA + TinaCMS"
echo "  Instalacja i konfiguracja"
echo "=========================================="
echo ""

# 1. Instalacja zależności
echo "📦 Instaluję zależności npm..."
npm install

# 2. Instalacja TinaCMS
echo "🎨 Instaluję TinaCMS..."
npm install tinacms @tinacms/cli

# 3. Tworzenie folderów na treści (jeśli nie istnieją)
echo "📁 Tworzę strukturę folderów..."
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
mkdir -p public/uploads

echo ""
echo "=========================================="
echo "  ✅ INSTALACJA ZAKOŃCZONA!"
echo "=========================================="
echo ""
echo "  Następne kroki:"
echo ""
echo "  1. Zaktualizuj package.json - sekcja scripts:"
echo '     "dev": "tinacms dev -c \"vite\""'
echo '     "build": "tinacms build && vite build"'
echo ""
echo "  2. Usuń plugin singlefile z vite.config.ts"
echo ""
echo "  3. Uruchom serwer deweloperski:"
echo "     npm run dev"
echo ""
echo "  4. Otwórz panel CMS:"
echo "     http://localhost:5173/admin/"
echo ""
echo "=========================================="
