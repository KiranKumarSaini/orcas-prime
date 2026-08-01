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

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    client: z.string(),
    services: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    result: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { guides, work };
