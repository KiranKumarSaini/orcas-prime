import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Answer pages — the AEO engine (§7 Layer 3). Every guide follows the same
  shape: a real question as the <h1>, a direct answer in the first 40 words,
  then the detail. FAQPage + BreadcrumbList schema on each.

  `directAnswer` is capped at 400 characters on purpose. It is the block an
  AI model lifts as the citation, so it has to stand alone without the rest
  of the page.
*/
const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    /** The real question, phrased as someone would actually search it. Becomes the <h1>. */
    question: z.string(),
    /** Shorter label for hub cards and <title>, where the full question is unwieldy. */
    shortTitle: z.string(),
    /**
     * The direct answer. First thing after the h1. Must stand alone — this is
     * what gets cited. §7 Layer 3 caps it at 40 words; the refine below makes
     * that a build error rather than a style note, because the word count is
     * the whole reason the block works as a citation.
     */
    directAnswer: z
      .string()
      .max(400)
      .refine((s) => s.trim().split(/\s+/).length <= 40, {
        message: 'directAnswer must be 40 words or fewer (§7 Layer 3).',
      }),
    /** Meta description. */
    description: z.string(),
    /** Mono kicker above the h1, e.g. "PRICING" or "MARKETPLACES". */
    category: z.string(),
    updated: z.coerce.date(),
    /** Extra Q&As appended to the FAQPage schema beyond the main question. */
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    /** Related guide slugs, rendered at the foot of the page. */
    related: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/*
  Case-study presentation data. Client identity + metrics live in
  src/data/results.json (single source of truth per §5). Anything here
  is narrative, framing, or writing that has no place in a data file.
*/
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    /** Matches a client slug in results.json — used to pull real metrics. */
    slug: z.string(),
    /** Short label above the H1, mono, uppercase. e.g. "GOOGLE ADS · LIFETIME" */
    kicker: z.string(),
    /** Page H1 — the narrative headline. */
    headline: z.string(),
    /** One-sentence subhead / deck. */
    dek: z.string(),
    /** Meta description for the page. */
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { guides, work };
