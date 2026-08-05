import type { APIRoute } from 'astro';

/*
  robots.txt as a route rather than a static file, so the Sitemap: line always
  points at the domain this build is actually served from. A hardcoded sitemap
  URL that doesn't match the live origin is silently ignored by crawlers.

  Every AI crawler in PROJECT-BRIEF.md §7 Layer 1 is named explicitly, ahead of
  the wildcard, so a crawler that only honours per-agent rules still sees us.
*/

const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Meta-ExternalAgent',
];

const SEARCH_ENGINES = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot'];

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') ?? '';

  const body = `# Orcas Prime — robots.txt
# AI crawlers are allowed explicitly (PROJECT-BRIEF.md §7 Layer 1).

# ── AI training + retrieval-augmented crawlers ────────────────────────
${AI_CRAWLERS.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n')}

# ── Search engines ─────────────────────────────────────────────────────
${SEARCH_ENGINES.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n')}

# ── Everything else ────────────────────────────────────────────────────
User-agent: *
Allow: /
Disallow: /styleguide

Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
