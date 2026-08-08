/**
 * Partner Brand imagery — one place, so a screenshot can never be referenced
 * by a path that doesn't exist.
 *
 * These live in src/assets/ rather than public/ specifically so Astro's image
 * pipeline processes them: WebP/AVIF conversion, responsive widths, and
 * intrinsic dimensions emitted automatically. In public/ they were served
 * verbatim — ~510 KB of unoptimised JPEG with no modern format anywhere,
 * which is the single biggest Lighthouse risk as imagery grows.
 *
 * Keyed by the client slug in results.json, so the key set is checkable
 * against real data rather than being a loose string.
 */

import type { ImageMetadata } from 'astro';

import ladakhBerry from '../assets/work/ladakh-berry.jpg';
import vastramahal from '../assets/work/vastramahal.jpg';
import savanaKurti from '../assets/work/savana-kurti.jpg';

/** Storefront screenshots, by Partner Brand slug. */
export const storefronts: Record<string, ImageMetadata> = {
  'ladakh-berry': ladakhBerry,
  vastramahal: vastramahal,
  'savana-kurti': savanaKurti,
};

/** Undefined for brands without a screenshot — 5 of the 8 currently. */
export function storefrontFor(slug: string): ImageMetadata | undefined {
  return storefronts[slug];
}

/**
 * Alt text that describes the store rather than the file.
 * Module 4 §8: "Partner Brand screenshots describe the store, not
 * 'screenshot'."
 */
export function storefrontAlt(name: string): string {
  return `${name} storefront — the live Shopify store we build and run`;
}
