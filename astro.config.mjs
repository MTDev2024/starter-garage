// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { themeTokens } from './src/config/generate-theme-css.mjs';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',

  vite: {
    plugins: [themeTokens(), tailwindcss()]
  },

  integrations: [sitemap()]
});