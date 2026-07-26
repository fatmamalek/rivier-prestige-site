# Riviera Prestige — site web

Site vitrine trilingue (FR/EN/AR) pour une agence de transport privé à Cannes,
construit avec Astro.

## Démarrer en local
    npm install
    npm run dev
Puis ouvrez http://localhost:4321/fr/

## Build de production
    npm run build
    npm run preview

## Structure
- src/pages/{fr,en,ar}/   -> une page par langue
- src/components/         -> Header, Footer, Home, RouteDivider (composants réutilisés dans les 3 langues)
- src/i18n/ui.ts          -> TOUTES les traductions, un seul fichier
- src/styles/global.css   -> couleurs, typographies, tokens de design
