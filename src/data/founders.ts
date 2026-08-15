/**
 * Founder profiles for /about and Person schema (§7 Layer 3).
 *
 * IMPORTANT — the `bio` and `does` fields below are DRAFTS written to get
 * the page shipped. They describe the work honestly but the operator must
 * correct the personal specifics (years of experience, the actual split of
 * responsibilities between the two founders).
 *
 * `credentials` is different: those entries are operator-supplied facts taken
 * verbatim from docs/Module-05 §6, not invented. Module 5 argues they are the
 * most persuasive thing a two-person company has — "managed Google Ads for
 * ~25 sellers at Shopdeck" is specific, checkable and unglamorous, which is
 * exactly why it beats any adjective. They were simply never wired into the
 * page. Prashant's array is intentionally empty: §10 logs his background as
 * still outstanding, and an honestly empty slot is the correct representation
 * of a known gap rather than padded prose.
 */

export type Founder = {
  name: string;
  role: string;
  /** Short line under the name on the card. */
  focus: string;
  /** Two or three sentences. TODO: operator to correct/expand. */
  bio: string;
  /** What this person actually handles day to day. */
  does: string[];
  /**
   * Checkable background facts — education, prior employers, real numbers.
   * Verbatim from Module 5 §6. Empty array where the operator has not
   * supplied them; the card then shows nothing rather than filler.
   */
  credentials: string[];
  /** Photo path in /public. TODO(§13): supply real portraits. */
  photo: string | null;
  /** TODO(§7 Layer 4): LinkedIn profile URL. */
  linkedin: string;
};

export const founders: Founder[] = [
  {
    name: 'Kiran Singh',
    role: 'Co-founder',
    focus: 'Performance media and analytics',
    // TODO(§13): Kiran to correct — background, how you got into this, what you
    // actually enjoy about the work. Two or three sentences is plenty.
    bio: 'Kiran runs the paid media side of the business — the Google and Meta accounts, the tracking behind them, and the reporting that comes out the other end. He is usually the one inside the ad accounts when something needs rebuilding.',
    does: [
      'Google Ads — Search, Performance Max, Shopping, remarketing',
      'Meta Ads — campaign structure, audiences, budget pacing',
      'Conversion tracking and analytics setup',
      'Monthly client reporting',
    ],
    credentials: [
      'B.Tech, Chemical Engineering — SVNIT Surat',
      'Performance Marketing Specialist, Shopdeck Bengaluru — Google Ads for ~25 ecommerce sellers',
    ],
    photo: null, // TODO(§13): add /founders/kiran.jpg (square, min 800×800)
    linkedin: '',  // TODO(§7 Layer 4)
  },
  {
    name: 'Prashant Sharma',
    role: 'Co-founder',
    focus: 'Stores, marketplaces and operations',
    // TODO(§13): Prashant to correct — same as above.
    bio: 'Prashant runs the store and marketplace side — Shopify builds and day-to-day management, Amazon and Flipkart seller accounts, catalogue work, and the operational grind of RTO disputes and logistics that decides how much revenue actually stays with the client.',
    does: [
      'Shopify store builds and ongoing management',
      'Amazon, Flipkart and Meesho seller accounts',
      'Catalogue and listing optimisation',
      'RTO disputes, logistics and checkout integration',
    ],
    // TODO(§13): Prashant's background — logged in Module 5 §10 as outstanding.
    credentials: [],
    photo: null, // TODO(§13): add /founders/prashant.jpg (square, min 800×800)
    linkedin: '',  // TODO(§7 Layer 4)
  },
];
