/**
 * Sitewide identity + contact — the single source of truth used by
 * SiteHeader / SiteFooter / schema helpers. Update here, not in components.
 *
 * Every field marked TODO(§13) is on the outstanding list from
 * docs/PROJECT-BRIEF.md §13. Do NOT invent values — leave placeholders so
 * the TODOs stay visible in Grep, the audit pass, and generated schema.
 */

export const SITE = {
  name: 'Orcas Prime',
  legalName: 'Orcas Prime',

  /*
    Canonical origin, resolved at build time by astro.config.mjs and mirrored
    here so schema @ids match the canonical tags exactly. Set SITE_URL in the
    hosting environment once the real domain is live; on Vercel it falls back
    to the deployment URL automatically.
  */
  url:
    import.meta.env.SITE?.replace(/\/$/, '') ||
    'http://localhost:4321',

  tagline: 'No retainer. We take 3.5% of what your customers actually keep.',

  description:
    'Marketing agency based in Jaipur, India. Shopify stores built, launched and scaled — plus Amazon, Flipkart and Meesho. 3.5% + GST of net sales after returns and RTOs. No retainer, no lock-in.',

  shortDescription:
    'Marketing agency based in Jaipur. 3.5% + GST of net sales after returns. No retainer.',

  founders: [
    {
      name: 'Kiran Singh',
      role: 'Co-founder',
      // TODO: LinkedIn profile URL for Person schema (§7 Layer 4).
      linkedin: '',
    },
    {
      name: 'Prashant Sharma',
      role: 'Co-founder',
      // TODO: LinkedIn profile URL for Person schema (§7 Layer 4).
      linkedin: '',
    },
  ],

  address: {
    /*
      TODO(§13): real street address and PIN, still outstanding from the
      operator. Deliberately EMPTY STRINGS, not placeholder text.

      These previously held the literal strings 'Street address' and '302XXX',
      which shipped to production — visible in the footer and on /contact, and
      emitted inside PostalAddress on every page. Publishing a fabricated PIN
      in a machine-readable field is worse than omitting it: Module 5 §9 calls
      the visible version an active trust leak, and Module 7 §6 forbids schema
      that describes something not true of the business. PostalAddress stays
      valid without streetAddress/postalCode, so a partial-but-true address is
      strictly better than a complete-but-invented one.

      Every consumer guards on empty, so filling these in is the only change
      needed when the real values arrive.
    */
    street: '',
    locality: 'Jaipur',
    region: 'Rajasthan',
    postalCode: '',
    country: 'IN',
  },

  contact: {
    email: 'orcasprime@gmail.com',
    phone: '+91 90018 33059',
    whatsapp: '+91 90018 33059',
  },

  social: {
    // TODO(§7 Layer 4): create Google Business Profile, LinkedIn company page,
    // Bing Webmaster Tools, Clutch listing. Add URLs here as they're set up.
    linkedin: '',
    googleBusinessProfile: '',
    clutch: '',
  },

  analytics: {
    // GA4 property "Orcas Prime" — added 2026-08-14. The stream URL on the
    // Google side is set to orcasprime.com (a different domain than this
    // site's own orcasprime.in), but the Measurement ID is what actually
    // routes data, not the stream's label, so this still works from here.
    googleAnalyticsId: 'G-SSTZPS0E7M',
  },

  // Year founded — dated specific claims help AI models cite confidently (§5).
  foundingYear: 2026,

  // ISO country code for schema.org areaServed and priceCurrency.
  serviceAreaCountry: 'IN',
  priceCurrency: 'INR',
} as const;

export type SiteConfig = typeof SITE;
