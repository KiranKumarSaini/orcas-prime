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

  // TODO: replace with the real production domain before deploy.
  url: 'https://orcasprime.com',

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
    // TODO(§13): real hello@ email.
    email: 'hello@orcasprime.com',
    // TODO(§13): real business phone in international format.
    phone: '+91XXXXXXXXXX',
    // TODO(§13): real WhatsApp business number, digits only for wa.me links.
    whatsapp: '+91XXXXXXXXXX',
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

  // Services listed as a flat array. Slug is the /services/[slug] path segment.
  services: [
    {
      slug: 'shopify-meta-google-ads',
      name: 'Shopify + Meta + Google Ads',
      short:
        'Build and run a Shopify store with performance media across Meta and Google.',
    },
    {
      slug: 'shopify-store-development',
      name: 'Shopify store development',
      short: 'New Shopify store builds, ₹10,000–₹20,000 one-time.',
    },
    {
      slug: 'amazon-account-management',
      name: 'Amazon account management',
      short: 'Manage Amazon seller accounts for Indian D2C brands.',
    },
    {
      slug: 'flipkart-meesho-management',
      name: 'Flipkart and Meesho management',
      short: 'Manage marketplace accounts on Flipkart and Meesho Seller Hub.',
    },
    {
      slug: 'creative-and-catalogue',
      name: 'Creative and catalogue',
      short: 'Product photography, ad creative, catalogue optimisation.',
    },
  ],
} as const;

export type SiteConfig = typeof SITE;
