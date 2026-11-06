/**
 * JSON-LD schema builders. One function per schema.org type we use.
 *
 * Each returns a plain object with @context and @type set — pass the return
 * value (or an array of them) to <Schema data={…} />. The Schema component is
 * the only place JSON is serialized to a <script> tag.
 *
 * Reference: PROJECT-BRIEF.md §7 Layer 3 lists the required variants:
 * Organization, LocalBusiness, Service, FAQPage, Person, BreadcrumbList.
 */

import { FEE_MIN, FEE_TEXT, MARKETPLACE_FEE } from './pricing';
import { SITE } from './site';

const abs = (path: string) => {
  if (path.startsWith('http')) return path;
  return SITE.url.replace(/\/$/, '') + (path.startsWith('/') ? path : `/${path}`);
};

/**
 * PostalAddress, emitting only the parts we actually know.
 *
 * streetAddress and postalCode are omitted entirely while SITE.address holds
 * empty strings for them (the real values are still outstanding from the
 * operator). They previously shipped as the literal strings 'Street address'
 * and '302XXX' — false data in a machine-readable field, which Module 7 §6
 * rules out and which is a worse signal than an incomplete address. Locality,
 * region and country are true today, so they ship.
 */
const postalAddress = () => ({
  '@type': 'PostalAddress',
  ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}),
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
  addressCountry: SITE.address.country,
});

/** Organization — the identity anchor. Emitted sitewide from BaseLayout. */
export function organization() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': abs('/#organization'),
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    foundingDate: `${SITE.foundingYear}`,
    founder: SITE.founders.map((f) => ({
      '@type': 'Person',
      name: f.name,
      jobTitle: f.role,
      ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
    })),
    address: postalAddress(),
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    sameAs: Object.values(SITE.social).filter(Boolean),
  };
}

/**
 * LocalBusiness — the "in Jaipur" anchor. Emitted sitewide (§7 Layer 5).
 *
 * Carries the fee as STRUCTURED data, not just prose, because it is the
 * fact a founder asks an assistant about ("what do Indian ecommerce agencies
 * charge?").
 *
 * The Shopify fee is ₹20,000 a month or 4% of net sales, whichever is higher.
 * schema.org has no "the greater of" price type, so the offer states the
 * monthly minimum as a machine-readable minPrice and carries the 4% rule in
 * plain `description` text. Nothing here asserts a figure the visible pages
 * don't already state. Numbers come from lib/pricing.ts.
 */
export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': abs('/#localbusiness'),
    name: SITE.name,
    url: SITE.url,
    image: abs('/og-default.png'),
    description: SITE.shortDescription,
    address: postalAddress(),
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    currenciesAccepted: SITE.priceCurrency,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ecommerce growth management',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Shopify growth management',
          description:
            'Meta and Google ads, Shopify store management, RTO control and a profit dashboard. ' +
            `${FEE_TEXT.full}. Net sales means sales after refunds, returns and RTOs. No setup fee, no lock-in.`,
          priceCurrency: SITE.priceCurrency,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            minPrice: FEE_MIN,
            priceCurrency: SITE.priceCurrency,
            unitCode: 'MON',
            valueAddedTaxIncluded: false,
            description: `${FEE_TEXT.full}`,
          },
          url: abs('/pricing'),
        },
        {
          '@type': 'Offer',
          name: 'Amazon, Flipkart and Meesho account management',
          description: `Marketplace account management: a flat ${FEE_TEXT.marketplace}.`,
          priceCurrency: SITE.priceCurrency,
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: MARKETPLACE_FEE,
            priceCurrency: SITE.priceCurrency,
            unitCode: 'MON',
            valueAddedTaxIncluded: false,
            description: `${FEE_TEXT.marketplace}`,
          },
          url: abs('/marketplaces'),
        },
      ],
    },
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    parentOrganization: { '@id': abs('/#organization') },
  };
}

/** Service — one per /services/[slug] page. */
export function service(opts: {
  name: string;
  description: string;
  slug: string;
  priceDescription?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: abs(`/services/${opts.slug}`),
    serviceType: opts.name,
    provider: { '@id': abs('/#organization') },
    areaServed: { '@type': 'Country', name: 'India' },
    ...(opts.priceDescription
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: SITE.priceCurrency,
            description: opts.priceDescription,
          },
        }
      : {}),
  };
}

/** FAQPage — for guides and any page with real Q&A. */
export function faqPage(qas: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

/** Person — for the About page (Kiran, Prashant). */
export function person(opts: {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.role,
    worksFor: { '@id': abs('/#organization') },
    ...(opts.bio ? { description: opts.bio } : {}),
    ...(opts.image ? { image: abs(opts.image) } : {}),
    ...(opts.sameAs?.length ? { sameAs: opts.sameAs } : {}),
  };
}

/** BreadcrumbList — for nested pages (services, guides, work). */
export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
