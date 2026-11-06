import { FEE_TEXT } from '../lib/pricing';

/**
 * Service content — one entry per /services/[slug] page.
 *
 * §6 mandated 5 services. Since 2026-11-06 Shopify is the focus: three
 * Shopify services up front, the two marketplace ones on /marketplaces. Each entry must contain enough to build a
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
  /**
   * 'shopify' services are the business and get the spotlight (/services,
   * homepage). 'marketplace' ones live on /marketplaces only: offered at a
   * flat fee for whoever wants them, never pushed (decision 2026-11-06).
   */
  group: 'shopify' | 'marketplace';
  name: string;
  navLabel: string;              // shorter label for footer/nav
  kicker: string;
  /**
   * Hub link text. Specific per service, because five identical 'Read more'
   * links tell the reader nothing about which of five very different pages
   * they are about to open (Module 6 §6's secondary-CTA library).
   */
  linkLabel: string;
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
    group: 'shopify',
    linkLabel: 'See what running the store looks like',
    name: 'Shopify + Meta and Google Ads',
    navLabel: 'Shopify + ads',
    kicker: 'The core service',
    h1: 'Meta and Google ads, your Shopify store, RTO and profit. One team.',
    lead:
      'What most Partner Brands take. We run Meta and Google ads inside your own ad accounts, look after your Shopify store, keep RTO in check, and show you on a dashboard what you actually made.',
    meta: {
      title: 'Shopify + Meta and Google Ads',
      description:
        `Meta and Google ads, Shopify store management, RTO control, AI catalogue photos and a profit dashboard, one team. ${FEE_TEXT.full}. No lock-in.`,
    },
    included: [
      { label: 'Meta Ads',             desc: 'Campaign structure, audiences, creative testing, budget pacing, Pixel and CAPI tracking. A written log of what changed each week.' },
      { label: 'Google Ads',           desc: 'Search, Shopping, Performance Max and remarketing, plus free product listings on Google Merchant Center.' },
      { label: 'Shopify store',        desc: 'Day-to-day changes and fixes: products, collections, apps, theme.' },
      { label: 'Profit dashboard',     desc: 'Daily, weekly and monthly P&L after RTO, shipping and ads. Every ad marked Scale, Keep or Cut.' },
      { label: 'RTO, COD and NDR',     desc: 'COD confirmed on WhatsApp, risky pincodes blocked, prepaid nudges, and an NDR call list.' },
      { label: 'AI photos and video',  desc: 'Model shots from flat-lay or hanger photos for the whole catalogue, and up to 10 AI video ads a month.' },
      { label: 'WhatsApp and Instagram', desc: 'Abandoned cart, order updates, reorder reminders, festive broadcasts. Reels, captions and posting.' },
      { label: 'Reports and a weekly call', desc: 'A daily summary and a weekly report on WhatsApp, and a 15-minute review call every week.' },
    ],
    cost: {
      headline: '₹20,000/month',
      subhead: 'or 4% of net sales after returns and RTOs, whichever is higher, plus GST',
      note: 'Ad spend goes on your card, into your ad accounts. We do not mark it up.',
    },
    proof: {
      clientSlug: 'ladakh-berry',
      figure: '5.1x',
      description: 'return on Google Ads, lifetime',
    },
    ctaMessage: 'Hi, I want to know if Orcas Prime fits my Shopify store.',
    ctaLabel: 'Start on WhatsApp',
  },

  {
    slug: 'shopify-store-development',
    group: 'shopify',
    linkLabel: 'See the build scope',
    name: 'Shopify store development',
    navLabel: 'Shopify build',
    kicker: 'One-time build',
    h1: 'A Shopify store you can run for years.',
    lead:
      'A clean, fast Shopify store built to your brand. Ready for ads on day one, in about 7 days. ₹10,000–₹20,000 one time, depending on scope. Ongoing management is optional.',
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
      note: `After launch, ongoing management is ${FEE_TEXT.full}. Or you run it yourself, no obligation.`,
    },
    proof: null,
    ctaMessage: 'Hi, I want a quote for a new Shopify store.',
    ctaLabel: 'Ask for a build quote',
  },

  {
    slug: 'amazon-account-management',
    group: 'marketplace',
    linkLabel: 'See what we run on Amazon',
    name: 'Amazon account management',
    navLabel: 'Amazon',
    kicker: 'Amazon',
    h1: 'Running an Amazon seller account, properly.',
    lead:
      'From listing quality to sponsored ads to A-to-Z claims. We take over your existing seller account, or open one for you if you are not on Amazon yet.',
    meta: {
      title: 'Amazon account management',
      description:
        'Amazon seller account management for Indian D2C brands: listings, Sponsored Products, FBA, disputes. ₹20,000 + GST a month.',
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
      headline: '₹20,000 + GST',
      subhead: 'a month, flat',
      note: 'Charged separately from Shopify management. Ad spend goes into your own seller account; we do not mark it up.',
    },
    proof: null,
    ctaMessage: 'Hi, I want to talk about my Amazon seller account.',
    ctaLabel: 'Start on WhatsApp',
  },

  {
    slug: 'flipkart-meesho-management',
    group: 'marketplace',
    linkLabel: 'See how the marketplaces differ',
    name: 'Flipkart and Meesho management',
    navLabel: 'Flipkart & Meesho',
    kicker: 'Flipkart & Meesho',
    h1: 'Flipkart and Meesho, run the way you would if you had time.',
    lead:
      'Two of the highest-volume Indian marketplaces. Different rules from Amazon, different economics, different customer. We know both.',
    meta: {
      title: 'Flipkart and Meesho management',
      description:
        'Full Flipkart Seller Hub and Meesho account management. Listings, PLAs, RTO handling, pricing, monthly reporting. ₹20,000 + GST a month.',
    },
    included: [
      { label: 'Listing setup',        desc: 'Product uploads, variant handling, image compliance.' },
      { label: 'Ads',                  desc: 'Product Listing Ads on Flipkart, Boost on Meesho.' },
      { label: 'Order + returns',      desc: 'RTO handling, dispute filing, address flags.' },
      { label: 'Pricing + inventory',  desc: 'Repricing, availability, seasonal readiness.' },
      { label: 'Monthly reporting',    desc: 'Sales, GMV, return rate by SKU.' },
    ],
    cost: {
      headline: '₹20,000 + GST',
      subhead: 'a month, flat',
      note: 'Charged separately from Shopify management. Ad spend goes into your own seller account; we do not mark it up.',
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
    group: 'shopify',
    linkLabel: 'See what we produce',
    name: 'Creative and catalogue',
    navLabel: 'Creative & catalogue',
    kicker: 'Production',
    h1: 'The pictures and the catalogue that make the sale.',
    lead:
      'AI catalogue photos, up to 10 AI video ads a month, ad creative and product-page assets. Included in the fee if we run your store. Available on its own if another agency runs your ads.',
    meta: {
      title: 'Creative and catalogue',
      description:
        'AI catalogue photos, AI video ads, static ad creative and product-page assets for Indian D2C brands. Included in the Shopify fee or quoted separately.',
    },
    included: [
      { label: 'AI catalogue photos',      desc: 'Model shots from flat-lay or hanger photos, for the whole catalogue. No photographer, model or studio.' },
      { label: 'AI video ads',             desc: 'Up to 10 a month, included in the fee.' },
      { label: 'Static ad creative',       desc: 'For Meta and Google.' },
      { label: 'Product-page assets',      desc: 'PDP banners, hero images, A+ content modules.' },
      { label: 'Catalogue optimisation',   desc: 'Variant structure, tagging, on-page copy, SEO.' },
      { label: 'Photo direction',          desc: 'What to shoot, how to shoot it, when to reshoot.' },
    ],
    cost: {
      headline: 'Included',
      subhead: 'in the Shopify fee if we run your store · quoted separately for standalone work',
    },
    proof: null,
    ctaMessage: 'Hi, I want a quote for creative or catalogue work.',
    ctaLabel: 'Start on WhatsApp',
  },
];

export const shopifyServices = services.filter((s) => s.group === 'shopify');
export const marketplaceServices = services.filter((s) => s.group === 'marketplace');

export function findService(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
