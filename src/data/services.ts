/**
 * Service content — one entry per /services/[slug] page.
 *
 * §6 mandates 5 services. Each entry must contain enough to build a
 * conversion-ready page independently: a visitor from ChatGPT lands here
 * having never seen the homepage. Every page needs what it is, what's
 * included, what it costs, a proof anchor where honest, and a contextual
 * WhatsApp CTA (§9 pre-filled message).
 */

export type ProofRef = {
  clientSlug: string;
  figure: string;
  description: string;
};

export type ServiceContent = {
  slug: string;
  name: string;
  navLabel: string;              // shorter label for footer/nav
  kicker: string;
  h1: string;
  lead: string;
  meta: {                        // per-page <head> data
    title: string;
    description: string;
  };
  included: Array<{ label: string; desc: string }>;
  cost: {
    headline: string;
    subhead: string;
    note?: string;
  };
  proof: ProofRef | null;
  ctaMessage: string;            // pre-filled WhatsApp text (§9)
  ctaLabel: string;
};

export const services: ServiceContent[] = [
  {
    slug: 'shopify-meta-google-ads',
    name: 'Shopify + Meta and Google Ads',
    navLabel: 'Shopify + ads',
    kicker: 'The core service',
    h1: 'Build the store, run the ads, own the number.',
    lead:
      'The service most of our clients use. We manage your Shopify store day-to-day and run Meta and Google ads inside your own ad accounts. One team, one fee, no separate creative agency.',
    meta: {
      title: 'Shopify + Meta and Google Ads',
      description:
        'One team for the Shopify admin, Meta ads, Google Ads, creative, RTO, and reporting. 3.5% + GST of net sales after returns. No retainer.',
    },
    included: [
      { label: 'Shopify admin',        desc: 'Products, collections, apps, theme fixes, day-to-day operations.' },
      { label: 'Meta ad campaigns',    desc: 'Setup, targeting, budget, creative rotation, weekly review.' },
      { label: 'Google Ads campaigns', desc: 'Search, Performance Max, Shopping, remarketing.' },
      { label: 'Creative production',  desc: 'Static and motion assets for both platforms.' },
      { label: 'RTO management',       desc: 'Address validation, courier follow-ups, dispute filing.' },
      { label: 'Monthly reporting',    desc: 'The numbers, plain, plus what we changed and what we changed next.' },
    ],
    cost: {
      headline: '3.5% + GST',
      subhead: 'of net sales after returns and RTOs are deducted',
      note: 'Ad spend goes on your card, into your ad accounts. We do not mark it up.',
    },
    proof: {
      clientSlug: 'ladakh-berry',
      figure: '5.1x',
      description: 'return on Google Ads, lifetime',
    },
    ctaMessage: 'Hi, I want to check if the 3.5% Shopify + ads model fits my store.',
    ctaLabel: 'Start on WhatsApp',
  },

  {
    slug: 'shopify-store-development',
    name: 'Shopify store development',
    navLabel: 'Shopify build',
    kicker: 'One-time build',
    h1: 'A Shopify store you can run for years.',
    lead:
      'A clean, fast Shopify store built to your brand. Ready for ads on day one. ₹10,000–₹20,000 one time, depending on scope. Optional ongoing management at the 3.5% rate.',
    meta: {
      title: 'Shopify store development',
      description:
        'New Shopify store builds for Indian D2C brands. ₹10,000–₹20,000 one-time depending on scope. Payment gateway integrated, catalogue loaded, ready for ads.',
    },
    included: [
      { label: 'Theme setup + brand pass',    desc: 'Colours, fonts, layout, header, footer.' },
      { label: 'Product catalogue',           desc: 'Your first 50 SKUs loaded — images, variants, tags.' },
      { label: 'Payment + shipping',          desc: 'Razorpay, GoKwik or Shiprocket integrated, tested end to end.' },
      { label: 'Checkout + cart',             desc: 'Cart drawer, checkout flow, order confirmation.' },
      { label: 'On-page SEO basics',          desc: 'Meta descriptions, structured data, sitemap.' },
      { label: 'Handoff + training',          desc: 'A walk-through of the admin so you can run it yourself if you want to.' },
    ],
    cost: {
      headline: '₹10,000–₹20,000',
      subhead: 'one time · scope determines the number',
      note: 'After launch, ongoing management is 3.5% + GST of net sales — or you run it yourself, no obligation.',
    },
    proof: null,
    ctaMessage: 'Hi, I want a quote for a new Shopify store.',
    ctaLabel: 'Ask for a build quote',
  },

  {
    slug: 'amazon-account-management',
    name: 'Amazon account management',
    navLabel: 'Amazon',
    kicker: 'Marketplace',
    h1: 'Running an Amazon seller account, properly.',
    lead:
      'From listing quality to sponsored ads to A-to-Z claims. If you are already on Amazon, we take over the account. If you are not on Amazon yet, the first three months are free — see the wedge-offer page.',
    meta: {
      title: 'Amazon account management',
      description:
        'Full Amazon seller account management for Indian D2C brands. Listings, Sponsored Products, FBA, disputes, reporting. Free for the first 3 months for new sellers.',
    },
    included: [
      { label: 'Listing optimisation', desc: 'Titles, bullets, A+ content, keywords, backend fields.' },
      { label: 'Sponsored ads',        desc: 'Product, Brand, and Display campaigns.' },
      { label: 'Inventory + FBA',      desc: 'Restock alerts, storage-fee optimisation, shipment planning.' },
      { label: 'Buy Box + pricing',    desc: 'Repricer setup, competitor tracking.' },
      { label: 'Case management',      desc: 'A-to-Z claims, IP infringement responses, appeals.' },
      { label: 'Monthly reporting',    desc: 'Sales, ACoS, TACoS, inventory health.' },
    ],
    cost: {
      headline: 'Free for 3 months',
      subhead: 'then included in the 3.5% Shopify bundle, or a separate rate we agree on',
      note: 'The free three months runs on Amazon\'s seller referral programme — full mechanics on the wedge-offer page.',
    },
    proof: null,
    ctaMessage: 'Hi, I want to talk about my Amazon seller account.',
    ctaLabel: 'Start on WhatsApp',
  },

  {
    slug: 'flipkart-meesho-management',
    name: 'Flipkart and Meesho management',
    navLabel: 'Flipkart & Meesho',
    kicker: 'Marketplace',
    h1: 'Flipkart and Meesho, run the way you would if you had time.',
    lead:
      'Two of the highest-volume Indian marketplaces. Different rules from Amazon, different economics, different customer. We know both.',
    meta: {
      title: 'Flipkart and Meesho management',
      description:
        'Full Flipkart Seller Hub and Meesho account management. Listings, PLAs, RTO handling, pricing, monthly reporting. For Indian D2C brands.',
    },
    included: [
      { label: 'Listing setup',        desc: 'Product uploads, variant handling, image compliance.' },
      { label: 'Ads',                  desc: 'Product Listing Ads on Flipkart, Boost on Meesho.' },
      { label: 'Order + returns',      desc: 'RTO handling, dispute filing, address flags.' },
      { label: 'Pricing + inventory',  desc: 'Repricing, availability, seasonal readiness.' },
      { label: 'Monthly reporting',    desc: 'Sales, GMV, return rate by SKU.' },
    ],
    cost: {
      headline: 'Free for 3 months',
      subhead: 'then a rate we agree on based on your account volume',
    },
    proof: {
      clientSlug: 'divine-rudras',
      figure: '₹6,50,410',
      description: 'revenue in the last 30 days on Flipkart',
    },
    ctaMessage: 'Hi, I want to talk about running my Flipkart or Meesho account.',
    ctaLabel: 'Start on WhatsApp',
  },

  {
    slug: 'creative-and-catalogue',
    name: 'Creative and catalogue',
    navLabel: 'Creative & catalogue',
    kicker: 'Production',
    h1: 'The pictures and the catalogue that make the sale.',
    lead:
      'Ad creative, product-page assets, catalogue optimisation. Included in the 3.5% for our management clients. Available as a stand-alone if you already have an agency running your ads.',
    meta: {
      title: 'Creative and catalogue',
      description:
        'Static and motion ad creative, product-page assets, and catalogue optimisation for Indian D2C brands. Included in the 3.5% bundle or quoted separately.',
    },
    included: [
      { label: 'Static ad creative',       desc: 'Meta, Google, Amazon Sponsored Brands.' },
      { label: 'Motion / video ads',       desc: 'Short-form product demos, testimonial cuts.' },
      { label: 'Product-page assets',      desc: 'PDP banners, hero images, A+ content modules.' },
      { label: 'Catalogue optimisation',   desc: 'Variant structure, tagging, on-page copy, SEO.' },
      { label: 'Photo direction',          desc: 'What to shoot, how to shoot it, when to reshoot.' },
    ],
    cost: {
      headline: 'Included',
      subhead: 'in the 3.5% for management clients · quoted separately for standalone work',
    },
    proof: null,
    ctaMessage: 'Hi, I want a quote for creative or catalogue work.',
    ctaLabel: 'Start on WhatsApp',
  },
];

export function findService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
