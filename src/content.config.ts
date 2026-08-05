import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    question: z.string(),
    directAnswer: z.string().max(400),
    description: z.string(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
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
