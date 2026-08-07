/**
 * The fee model — ONE source of truth for every place the site quotes a
 * number (Module 10 §4).
 *
 * Why this file exists: the calculator and the three-row PricingTable sit
 * side by side on both the homepage and /pricing. A visitor who drags the
 * slider to ₹25,00,000 and reads a retainer figure that disagrees with the
 * table six inches away has caught the site being sloppy about money — on a
 * page whose entire argument is that we are precise and honest about money.
 * A first pass modelled the retainer as a flat 15%, which matched the table
 * at ₹5L and ₹10L and missed it at ₹25L. Hence the piecewise model below,
 * anchored to the published rows exactly.
 */

/** Our rate. 3.5% of net sales, quoted plus GST — never GST-inclusive. */
export const FEE_RATE = 0.035;

/**
 * The published comparison rows, verbatim from PricingTable and /pricing.
 * These are the anchor points the retainer curve must pass through.
 */
export const PUBLISHED_ROWS = [
  { netSales: 500000, retainer: 75000 },
  { netSales: 1000000, retainer: 150000 },
  { netSales: 2500000, retainer: 300000 },
] as const;

/** Published Indian agency retainer range, sourced on /pricing#sources. */
export const RETAINER_FLOOR = 75000;
export const RETAINER_CAP = 600000;

/** Calculator slider bounds. Spans all three honest zones — see honestNote(). */
export const SALES_MIN = 100000; // ₹1 lakh
export const SALES_MAX = 10000000; // ₹1 crore

/** Where the model genuinely fits, per the honest-fit block. */
export const FIT_MIN = 300000; // ₹3 lakh
export const FIT_MAX = 5000000; // ₹50 lakh

/** Our fee at a given monthly net sales figure, excluding GST. */
export function orcasFee(netSales: number): number {
  return netSales * FEE_RATE;
}

/**
 * Typical retainer for a business of this size.
 *
 * Piecewise-linear through the three published rows, then continuing at the
 * same slope and clamped to the published range. Passes exactly through
 * ₹5L→₹75,000, ₹10L→₹1,50,000 and ₹25L→₹3,00,000, so the calculator can
 * never contradict the table beside it.
 */
export function typicalRetainer(netSales: number): number {
  const [a, b, c] = PUBLISHED_ROWS;
  let value: number;

  if (netSales <= a.netSales) {
    value = RETAINER_FLOOR;
  } else if (netSales <= b.netSales) {
    const t = (netSales - a.netSales) / (b.netSales - a.netSales);
    value = a.retainer + t * (b.retainer - a.retainer);
  } else if (netSales <= c.netSales) {
    const t = (netSales - b.netSales) / (c.netSales - b.netSales);
    value = b.retainer + t * (c.retainer - b.retainer);
  } else {
    // Continue the ₹10L–₹25L slope (10% of additional net sales).
    const slope = (c.retainer - b.retainer) / (c.netSales - b.netSales);
    value = c.retainer + (netSales - c.netSales) * slope;
  }

  return Math.min(RETAINER_CAP, Math.max(RETAINER_FLOOR, value));
}

/**
 * What the site says at this size — including when the answer is "not us".
 * A calculator that will not talk anyone out of it is a sales toy, not a
 * transparency tool. Wording mirrors the honest-fit block.
 */
export function honestNote(netSales: number): string {
  if (netSales < FIT_MIN) {
    return "Below ₹3 lakh a month, a percentage of your sales won't fund the work properly — we'd say so in the first conversation rather than take the account.";
  }
  if (netSales > FIT_MAX) {
    return 'The model still works at this size, but a fixed retainer may suit you better — and we’d tell you that too.';
  }
  return 'This is the range the model is built for.';
}

/** Indian digit grouping, matching fmtINR in src/data/results.ts. */
export function inr(amount: number): string {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

/** Slider position (0–100) → rupees. Exponential: a linear track across a
 *  100× range wastes half its length above ₹50 lakh where almost nobody sits.
 *  This puts ₹10 lakh at the midpoint, inside the band that matters. */
export function pctToSales(pct: number): number {
  return SALES_MIN * Math.pow(SALES_MAX / SALES_MIN, pct / 100);
}

/** Inverse of pctToSales, for setting the slider's initial position. */
export function salesToPct(sales: number): number {
  return (Math.log(sales / SALES_MIN) / Math.log(SALES_MAX / SALES_MIN)) * 100;
}

/** Round to a figure a human would actually say out loud. */
export function tidySales(v: number): number {
  const step = v < 1000000 ? 50000 : v < 5000000 ? 100000 : 500000;
  return Math.max(SALES_MIN, Math.min(SALES_MAX, Math.round(v / step) * step));
}
