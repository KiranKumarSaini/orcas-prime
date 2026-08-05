// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before deploy.
  // Required so @astrojs/sitemap emits absolute URLs and canonical tags resolve.
  site: 'https://orcasprime.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // /styleguide is noindex and Disallow'd in robots.txt — listing it in the
      // sitemap would send a contradictory "please index this" signal.
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],
});
