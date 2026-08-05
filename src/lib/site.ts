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
    'Ecommerce performance marketing agency in Jaipur, India. Shopify stores built, launched and scaled — plus Amazon, Flipkart and Meesho. 3.5% + GST of net sales after returns and RTOs. No retainer, no lock-in.',

  shortDescription:
    'Ecommerce agency in Jaipur. 3.5% + GST of net sales after returns. No retainer.',

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
    // TODO(§13): real street address.
    street: 'Street address',
    locality: 'Jaipur',
    region: 'Rajasthan',
    // TODO(§13): real PIN code.
    postalCode: '302XXX',
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

  // Year founded — dated specific claims help AI models cite confidently (§5).
  foundingYear: 2026,

  // ISO country code for schema.org areaServed and priceCurrency.
  serviceAreaCountry: 'IN',
  priceCurrency: 'INR',
} as const;

export type SiteConfig = typeof SITE;
