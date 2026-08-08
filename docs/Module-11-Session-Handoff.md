# Module 11 — Session Handoff

**Written:** 2026-08-08
**Why this file exists:** the previous working session hit its context limit mid-build.
Rather than carry that conversation forward, this file is the handoff — read this first
in any new session before touching the site.

---

## Where the code lives

- Repo: `~/orcas-prime` (local). Astro v7 + Tailwind v4.
- Branch: **`rebuild-ownership-positioning`** — 18 commits ahead of `main`, not yet merged.
- Latest commit: `88811fe`.
- Working tree: clean.
- Latest deploy preview: `https://orcas-prime-he8a2kyny-orcas-prime-s-projects.vercel.app`
  (Vercel — every push to this branch gets its own preview URL; check the Vercel
  dashboard or `vercel ls` for the current one if this link has aged out).

## What just shipped (operator-approved)

The full "make it premium" plan at `.claude/plans/twinkly-baking-gosling.md` (also
summarised in `docs/Module-10-Motion-and-Life.md`) is complete except Layer C (see
Pending below):

- New wordmark + favicon (orca dorsal fin, replacing the default Astro logo)
- Display type scaled way up (72px → ~176px ceiling), tighter tracking/leading
- Motion: hero "five vendors → one team" convergence, RTO money-drain stagger, fee
  calculator, magnetic CTAs, drawn timeline on `/how-we-work`, accordion easing
- Every section on every page is now a rounded floating `.panel` on the darker
  `--color-page` background — this is the standing layout pattern, applies sitewide
- 4 Shopify Burst photos (duotone-treated, via `ImageBreak.astro`) — object/process shots
  only, never people or offices, per brand rule. Operator approved these on 2026-08-07.
- Image pipeline moved from `public/` to `src/assets/` + `astro:assets` for WebP/AVIF

## Standing rules for whatever session picks this up next

- **`--font-serif: "Playfair Display Variable"` is locked.** The operator was shown
  three alternatives (Bodoni Moda, Fraunces, Libre Caslon Display) on a real phone and
  explicitly rejected all three — "the earlier font looks better than these." Do not
  re-raise a typeface swap.
- **New, as of 2026-08-07: use placeholders for any future image needs, not sourced
  stock.** The operator will supply or swap in real images later — "it's expected your
  chosen photos wont be that good and i dont blame you for that." This applies to
  anything still missing imagery (guide covers, the 5 Partner Brands without a
  storefront screenshot, etc.) — don't spend time curating more Burst/stock photos for
  those; drop in an honest placeholder (a labelled panel, a flat colour block with the
  filename/description, whatever reads clearly as "swap me") and move on.
- Everything in the outer `CLAUDE.md`-equivalent brand rules still applies: light-only
  surfaces (no dark sections), no emoji-as-icon, no stock photography of people/teams/
  offices (operator works from home), `prefers-reduced-motion` collapses all motion,
  no-JS renders everything, added JS budget <25KB gzip, Lighthouse mobile ≥90.
- Copy from Module 3 is locked/verbatim — don't reword it while doing visual work.

## Pending work (in priority order)

1. **Fix `scripts/capture-stores.mjs`** (Layer C of the plan — the only unfinished
   layer). It currently: is missing `chrome-launcher`/`chrome-remote-interface` from
   `package.json`; has a hardcoded wrong Chrome path (`Google Chrome2.app`); points at
   the dead domain `thesavanakurti.com` instead of `savanakurti.com`; captures at 1×
   DPR instead of 2×; only captures desktop, not mobile; only captures homepages, not
   interior pages. Also extend it to the 5 of 8 Partner Brands currently missing a
   screenshot, and add an `npm run capture` script.
2. **Perf + accessibility audit.** Lighthouse mobile ≥90 with all the new imagery in
   place, a contrast pass, a full `prefers-reduced-motion` pass, a full no-JS pass, and
   a real-phone check at 375px (this is where the new large display type is most likely
   to break — verify it doesn't overflow or wrap awkwardly).
3. **Final verification + merge.** Once 1 and 2 are done: confirm `npm run build` is
   clean, re-check page height/scroll length hasn't regressed, then merge
   `rebuild-ownership-positioning` into `main` and ship — ask the operator to look at
   the preview URL first, per the site's own no-blind-merge habit this session kept to.

## How to resume in a new chat

Paste this to start a fresh session:

> Continue the Orcas Prime project. Read `docs/Module-11-Session-Handoff.md` first —
> it has the branch, standing rules, and pending task list. Then pick up from
> "Pending work" in that file, starting with the capture-script fix.

That's the whole handoff — no need to re-explain history in the prompt itself, the file
carries it.
