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

  /*
    ONE canonical URL shape: no trailing slash.

    This was the site's single most damaging indexing bug. The sitemap
    advertised https://www.orcasprime.in/about/ while the page at that URL
    declared <link rel="canonical" href="https://www.orcasprime.in/about">
    — a DIFFERENT url — and both forms returned 200. Verified against
    production before changing anything.

    To a crawler that reads as: "the URL you were told to index is not the
    real one." Google files it under "Alternate page with proper canonical
    tag" and indexes neither confidently. Module 7 §1 records 1 indexed page
    and 2 marked "page with redirect"; this mismatch is the most likely
    cause, and it was self-inflicted rather than anything to do with content.

    `trailingSlash: 'never'` makes Astro's dev server and the sitemap agree
    with the canonical tags BaseLayout already emits, so every layer of the
    site now names each page exactly one way.
  */
  trailingSlash: 'never',

  build: {
    // Emit /about.html rather than /about/index.html, so the served URL is
    // /about — matching the canonical and the sitemap entry above.
    format: 'file',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      // /styleguide is noindex and Disallow'd in robots.txt — listing it in the
      // sitemap would send a contradictory "please index this" signal.
      filter: (page) => !page.includes('/styleguide'),

      /*
        One known cosmetic difference, left alone deliberately: the sitemap
        emits the bare origin for the homepage (https://www.orcasprime.in)
        while BaseLayout's canonical for "/" is origin + "/".

        These are formally the same URL — RFC 3986 §6.2.3 normalises an empty
        path to "/", and Google does the same — so unlike the /about vs
        /about/ mismatch this fixes, it costs nothing. A `serialize` hook to
        align them was tried and does not work: the integration applies its
        own trailingSlash normalisation AFTER serialize runs, so the change
        is silently undone. Recorded here so the next person does not spend
        the same twenty minutes discovering it.
      */
    }),
  ],
});
