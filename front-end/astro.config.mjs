import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Gemini Documentation',
    defaultLocale: 'en',
    locales: {
      // English docs in `src/content/docs/en/`
      'en': {
        label: 'English'
      },
      // Español docs in `src/content/docs/es/`
      'es': {
        label: 'Español',
        lang: 'es'
      },
      // Français docs in `src/content/docs/fr/`
      'fr': {
        label: 'Français',
        lang: 'fr'
      },
      // Italiano docs in `src/content/docs/it/`
      'it': {
        label: 'Italiano',
        lang: 'it'
      }
    },
    social: {
      github: 'https://github.com/assaads/'
    }
  }), tailwind()],
  output: "server",
  adapter: vercel()
});