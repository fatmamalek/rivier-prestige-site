// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://votre-domaine.com', // TODO: remplacer par votre vrai domaine
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true, // toutes les langues ont un préfixe: /fr/, /en/, /ar/
    },
  },
});
