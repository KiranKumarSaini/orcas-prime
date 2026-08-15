/**
 * Typed accessor over src/data/results.json.
 *
 * The JSON is the ONLY source of truth for client metrics (§5). Do not import
 * results.json anywhere else — always go through this helper, so type shape
 * changes surface at compile time.
 *
 * Rules from PROJECT-BRIEF.md §5:
 *   - No fabricated, inflated, or placeholder metrics ever appear on the site.
 *   - Values in results.json are copied verbatim from the brief.
 *   - Framing rules: lead with ratios (5.1x), aggregate totals across clients,
 *     reframe "new" as "current" — every result is from an account we're
 *     running RIGHT NOW.
 */

import raw from './results.json' with { type: 'json' };

/* ── Types ──────────────────────────────────────────────────────────── */

export type Currency = 'INR';

export type QuantitativeResult = {
  kind: 'quantitative';
  amount: number;
  currency: Currency;
  metric: string;
  period: string;
  source: string;
};

export type QualitativeResult = {
  kind: 'qualitative';
  description: string;
};

export type ClientResult = QuantitativeResult | QualitativeResult;

export type Client = {
  slug: string;
  name: string;
  /** Live store URL. Only set for stores whose homepage we're OK linking to (§8). */
  liveUrl?: string;
  services: string[];
  result: ClientResult;
};

export type AdSpendEntry = {
  clientSlug: string;
  amount: number;
  currency: Currency;
  platform: string;
  scope: string;
  period: string;
};

export type HeadlineFigures = {
  roas: {
    ratio: number;
    display: string;
    revenue: number;
    spend: number;
    clientSlug: string;
    platform: string;
    period: string;
    description: string;
  };
  /*
    No `display` field on the totals by design. Both aggregates are DERIVED
    below from their components, so a hand-typed headline figure cannot drift
    away from the rows it claims to summarise. They previously read
    "₹13.2 lakh+" and "₹4.4 lakh+" while the exact figures (₹13,20,583 and
    ₹4,48,097) sat in the same file — and Module 5 §9 is explicit that the
    exact number is the more credible one: "₹6,70,173 is credible in a way
    ₹6.7L+ is not." The trailing "+" was also hedging a number that is exact.
  */
  totalRevenue: { descriptor: string };
  totalAdSpend: { descriptor: string };
  brandCount: { value: number; descriptor: string };
  platforms: string[];
};

export type ResultsData = {
  lastUpdated: string;
  onboardingYear: number;
  clients: Client[];
  adSpend: AdSpendEntry[];
  headline: HeadlineFigures;
};

/* ── The data ───────────────────────────────────────────────────────── */

export const results = raw as unknown as ResultsData;

/* ── Convenience accessors ──────────────────────────────────────────── */

export const headline = results.headline;

/** All 8 clients, in brief order. */
export function getClients(): Client[] {
  return results.clients;
}

/** Clients that have a hard number attached — for case-study cards. */
export function getQuantitativeClients(): Array<Client & { result: QuantitativeResult }> {
  return results.clients.filter(
    (c): c is Client & { result: QuantitativeResult } => c.result.kind === 'quantitative'
  );
}

export function findClient(slug: string): Client | undefined {
  return results.clients.find((c) => c.slug === slug);
}

export function getAdSpendForClient(slug: string): AdSpendEntry | undefined {
  return results.adSpend.find((s) => s.clientSlug === slug);
}

/**
 * Format an INR amount using Indian digit grouping (2-digit lakh/crore groups).
 * Used everywhere a rupee amount hits the page — pairs with .num for tabular
 * figures so columns align.
 */
export function fmtINR(amount: number, opts: { symbol?: boolean } = {}): string {
  const withSymbol = opts.symbol ?? true;
  const formatted = amount.toLocaleString('en-IN');
  return withSymbol ? `₹${formatted}` : formatted;
}

/* ── Derived aggregates ─────────────────────────────────────────────────
   Summed from the component rows rather than stored, so the headline can
   never disagree with the per-brand figures a reader can check on /work.

   HONEST CAVEAT, stated on the page rather than hidden here: these sums
   blend time windows. Revenue adds Ladakh Berry's LIFETIME Google Ads
   conversion value to Divine Rudras' LAST 30 DAYS Flipkart revenue; ad spend
   mixes lifetime with last-60-days. That is why `revenueBasis` and
   `adSpendBasis` exist and why the homepage prints them — an unqualified
   exact total is more confidently wrong than a rounded one.
------------------------------------------------------------------------ */

/** Exact sum of every quantitative client result. */
export const totalRevenue: number = getQuantitativeClients().reduce(
  (sum, c) => sum + c.result.amount,
  0
);

/** Exact sum of every ad-spend entry under management. */
export const totalAdSpend: number = results.adSpend.reduce((sum, s) => sum + s.amount, 0);

/** Distinct windows the revenue total is built from, e.g. "lifetime + last 30 days". */
export const revenueBasis: string = Array.from(
  new Set(getQuantitativeClients().map((c) => c.result.period))
).join(' + ');

/** Distinct windows the ad-spend total is built from. */
export const adSpendBasis: string = Array.from(
  new Set(results.adSpend.map((s) => s.period))
).join(' + ');
