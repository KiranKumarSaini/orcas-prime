// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/*
  Canonical origin.

  Every canonical tag, OG url, sitemap entry, and @id in our JSON-LD is built
  from this. Getting it wrong is not cosmetic: pointing canonicals at a domain
  that doesn't serve this site tells search engines the real version lives
  somewhere else, which is the opposite of what §7 is trying to achieve.

  Resolution order:
    1. SITE_URL              — set this once the real domain is live
    2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable production domain
    3. VERCEL_URL            — the per-deployment URL (preview builds)
    4. localhost fallback    — local builds
*/
const siteUrl =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:4321');

// https://astro.build/config
export default defineConfig({
  site: siteUrl,

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
