# Module 8 — Implementation Blueprint

**Status:** Complete draft
**Standard:** B (specification)
**Audience:** Claude Code, and Kiran operating it
**Depends on:** Modules 3-7, `LOCKED.md`

---

## §1 — Environment

**Known:**

- Framework: Astro
- Repo: `KiranKumarSaini/orcas-prime`
- Hosting: Vercel (confirmed by the 404 page format)
- Sitemap: `/sitemap-index.xml` → `/sitemap-0.xml`, submitted to Search Console 2026-08-07
- Existing schema builders: `Organization`, `ProfessionalService`, `LocalBusiness`, `Service`, `FAQPage`, `Person`, `BreadcrumbList`
- Base colour `#FAF7F2` already in use as theme-color

**Verify before writing any code** — do not assume:

- Styling approach (Tailwind, vanilla CSS, CSS modules?)
- The existing typeface — real webfont or system stack?
- Component structure and naming conventions already in use
- Whether `@astrojs/sitemap` is installed and configured
- Current canonical tag construction — this is the redirect bug's likely source
- Whether an analytics script is present

The first Claude Code session does nothing but inspect and report. See §5,
Prompt 0.

---

## §2 — Design Tokens

Drop into the global stylesheet. These are the Module 4 decisions as code.

```css
:root {
  /* Colour */
  --paper:          #FAF7F2;
  --paper-raised:   #FFFFFF;
  --paper-sunken:   #F3EFE8;
  --ink:            #1A1815;
  --ink-secondary:  #5C564D;
  --ink-muted:      #918A7E;
  --rule:           #E3DDD3;
  --accent:         #2F4739;
  --accent-hover:   #3D5A48;
  --accent-quiet:   #EDF1EC;

  /* Type */
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body:    /* EXISTING SANS — do not replace until verified */;

  --text-display: 2.5rem;   /* 40px  → 64px desktop */
  --text-h1:      2rem;     /* 32px  → 44px */
  --text-h2:      1.5rem;   /* 24px  → 30px */
  --text-h3:      1.1875rem;/* 19px  → 21px */
  --text-body-lg: 1.125rem; /* 18px  → 19px */
  --text-body:    1rem;     /* 16px  → 17px */
  --text-small:   0.875rem; /* 14px */
  --text-micro:   0.75rem;  /* 12px */

  --leading-display: 1.05;
  --leading-heading: 1.15;
  --leading-body:    1.65;
  --tracking-heading: -0.02em;
  --tracking-eyebrow: 0.08em;

  /* Space — 4px base */
  --space-1: 0.25rem;  --space-2:  0.5rem;   --space-3:  0.75rem;
  --space-4: 1rem;     --space-6:  1.5rem;   --space-8:  2rem;
  --space-12: 3rem;    --space-16: 4rem;     --space-24: 6rem;
  --space-32: 8rem;

  /* Containers */
  --container-reading: 680px;
  --container-wide:   1080px;
  --container-narrow:  600px;
  --measure: 68ch;

  /* Motion */
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-entrance: 600ms;
  --duration-hover: 150ms;
  --stagger: 80ms;

  --radius-button: 6px;
  --radius-card:   8px;
  --shadow-raised: 0 1px 3px rgba(26, 24, 21, 0.06);
}

@media (min-width: 768px) {
  :root {
    --text-display: 4rem;      --text-h1: 2.75rem;
    --text-h2: 1.875rem;       --text-h3: 1.3125rem;
    --text-body-lg: 1.1875rem; --text-body: 1.0625rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Serif choice:** `Instrument Serif` is the default recommendation. Before
committing, set the actual hero headline in Instrument Serif, Fraunces (low
optical size), and Newsreader, screenshot all three on `--paper`, and pick.
This is a five-minute judgement call that only Kiran can make — see §6.

---

## §3 — Component Inventory

Every component the site needs. Build in this order; later ones depend on earlier.

| Component | Used by | Notes |
|---|---|---|
| `Eyebrow` | Every section | Small, uppercase, tracked, `--ink-muted` |
| `SectionShell` | Every section | Handles vertical rhythm + container width + entrance animation. Build this first — it enforces consistency everywhere. |
| `Rule` | Sections 3, 5 | `1px --rule`, `--space-12` margins |
| `CTAButton` | Hero, §8, sticky bar | Primary. WhatsApp deep link + pre-filled text as props |
| `CTALink` | Throughout | Secondary text link with `→` |
| `CapabilityRow` | Hero | Horizontal scroll on mobile, wrap on desktop |
| `OwnershipTable` | §4, What We Own | Two-column desktop, stacked mobile, asymmetric by design |
| `DisplayNumber` | §6 | Serif figure + eyebrow + explanation line. The signature element |
| `StatRow` | §6 | Three-up aggregate figures |
| `BrandCard` | §6, Work | Screenshot, name, capabilities, outbound link |
| `PricingTable` | §6, Pricing | Real `<table>`, tabular numerals, no zebra, no badge |
| `DecisionBlock` | §5, Work | `<h3>` + reasoning paragraph |
| `RTOFlow` | §3 | Static SVG. Omit if it can't beat the prose |
| `GuideCard` | §7, Learn | Title + one line + link |
| `StickyMobileCTA` | Global | Appears after §4 only, slides up once |
| `Nav` | Global | Sticky, blur backdrop, border on scroll |
| `Footer` | Global | Existing structure, two label changes + real address |

**Rule:** no component gets built twice. If §6 and the Pricing page both need a
pricing table, it is one component with props.

---

## §4 — Build Sequence

Six phases. Each is a branch, a preview deploy, and a review gate. **Do not
merge a phase until its gate passes.**

### Phase 0 — Inspect and fix (no visual change)

1. Audit report (Prompt 0)
2. Fix canonical/www redirect inconsistency — the "page with redirect" cause
3. Verify sitemap lists every page
4. Publish `llms.txt` (Module 7 §5, verbatim)
5. Revise title tag and meta description (Module 6 §9)

*Gate:* site unchanged visually, Search Console shows no new errors.

### Phase 1 — Foundation (no visual change yet)

6. Add design tokens
7. Add display serif, verify against existing sans
8. Build `SectionShell`, `Eyebrow`, `Rule`, `CTAButton`, `CTALink`
9. Add entrance-animation observer with reduced-motion + no-JS fallback

*Gate:* existing site still renders identically. Tokens available, unused.

### Phase 2 — Hero and Section 2

10. Rebuild hero per Module 3 §1 — headline change, pricing demoted
11. Build Section 2, The Founder's Reality

*Gate:* **highest-value checkpoint on the project.** This is the conversion fix
identified in the very first audit. Review on real mobile, not just desktop.

### Phase 3 — Section 3, The Broken System

12. Build Section 3 with the full RTO block
13. `FAQPage` schema for the RTO sub-block
14. `RTOFlow` SVG, or omit

*Gate:* read the whole section aloud on a phone. If any sentence assumes
knowledge, it fails.

### Phase 4 — Sections 4, 5, 6

15. `OwnershipTable` + Section 4
16. Section 5, How We Think
17. Section 6 — reorder existing proof components, add Block D pricing and
    Block E honest fit
18. `Service` schema

*Gate:* section order matches Module 3's flow table exactly. Proof must come
after How We Think.

### Phase 5 — Section 8, global, polish

19. Section 8 with wedge offer
20. Nav relabel: `What We Own · Work · Pricing · About`
21. Footer: label change + real address, enable `LocalBusiness` schema
22. `StickyMobileCTA`
23. Full accessibility pass (Module 4 §8)

*Gate:* full QA checklist, §7.

### Phase 6 — Learn and guides (ongoing)

24. Learn index + `GuideCard`, only when ≥3 guides exist
25. Guides published two per month per Module 7 §3
26. Activate the deferred inline guide links in Sections 3 and 5
27. Nav gains `Learn`

---

## §5 — Claude Code Prompts

Copy-paste. Each assumes the module files are in the repo at `/docs/`.

### Prompt 0 — Audit

```
Read /docs/Module-08-Implementation-Blueprint.md section 1.

Inspect this repo and report — do not change anything yet:

1. Styling approach: Tailwind, vanilla CSS, CSS modules, something else?
2. The body typeface: real webfont or system stack? Name it exactly.
3. Component structure — list existing components and naming convention.
4. Is @astrojs/sitemap installed? How is it configured?
5. How is the canonical tag built? Does it use www consistently?
6. Are there redirects configured (vercel.json, astro.config, middleware)?
7. Current title tag and meta description, verbatim.
8. Is any analytics script present?
9. List every route/page that exists.

Output as a short report. Make no edits.
```

### Prompt 1 — Phase 0

```
Read /docs/Module-07-AI-Content-Engine.md sections 5 and 9, and
/docs/Module-06-Copywriting-System.md section 9.

Do these, in order, in one branch called phase-0-technical:

1. Fix the canonical/www inconsistency. Every internal link, canonical
   tag and sitemap URL must use https://www.orcasprime.in. Single 301
   from non-www. No redirect chains.
2. Verify sitemap-0.xml lists every route found in the audit.
3. Create /public/llms.txt with the exact content from Module 7 §5.
4. Update title tag and meta description per Module 6 §9.

Do not change any visual styling. Report what you changed and why.
```

### Prompt 2 — Phase 1

```
Read /docs/Module-04-Design-System.md fully.

Branch: phase-1-foundation.

1. Add the design tokens from Module 8 §2 to the global stylesheet.
   Use the real existing body font from your audit for --font-body.
2. Add Instrument Serif via Google Fonts, display swap, preloaded.
3. Build components: SectionShell, Eyebrow, Rule, CTAButton, CTALink.
   Specs in Module 8 §3 and Module 4 §7.
4. Add an IntersectionObserver entrance animation utility per
   Module 4 §6. Must respect prefers-reduced-motion, and content must
   be fully visible with JS disabled.

The existing site must render exactly as before. Tokens and components
are additive and unused at this stage.
```

### Prompt 3 — Phase 2

```
Read /docs/Module-03-Homepage-Blueprint.md sections 1 and 2,
/docs/Module-06-Copywriting-System.md, and /docs/LOCKED.md.

Branch: phase-2-hero.

Rebuild the hero and build Section 2 exactly as specified. Use the
copy verbatim — it is locked, not a suggestion.

Key change: the pricing line moves from headline position to secondary
weight above the CTA. The headline is now the "stop managing five
different agencies" line.

Use the components from Phase 1. Mobile-first. Run the Module 6 §10
pre-publish checklist against your output before reporting done.
```

### Prompt 4 — Phase 3

```
Read /docs/Module-03-Homepage-Blueprint.md section 3 fully.

Branch: phase-3-broken-system.

Build Section 3. The RTO sub-block is the most important content on
the site — use the copy verbatim, do not compress it.

Also:
- <h2> for the section headline, <h3> for each of the four RTO
  sub-headings. Real semantic hierarchy.
- FAQPage schema for the RTO block, four Q&A pairs matching the
  sub-headings, using the existing schema builder.
- Attempt the RTOFlow SVG per Module 4 §5. If it isn't clearly better
  than the prose alone, skip it and say so.
- Omit the "Read the full RTO guide" link — that guide doesn't exist
  yet. No dead links.
```

### Prompt 5 — Phase 4

```
Read /docs/Module-03-Homepage-Blueprint.md sections 4, 5, 6 and
/docs/Module-05-Trust-Architecture.md section 2.

Branch: phase-4-sections.

Build Sections 4, 5 and 6.

Critical: Section 6 (Proof) now comes AFTER Section 5 (How We Think).
This reverses the current live order and is deliberate — see Module 5
§2. Reuse the existing proof components, reorder them, and add Block D
(pricing) and Block E (honest fit).

Ownership table: all 14 items ship, confirmed. Two-column on desktop,
stacked on mobile. The asymmetry between columns is the point — do not
balance it.

Add Service schema for the capability clusters.
```

### Prompt 6 — Phase 5

```
Read /docs/Module-03-Homepage-Blueprint.md section 8 and Global
Elements, plus /docs/Module-04-Design-System.md section 8.

Branch: phase-5-global.

1. Build Section 8 including the Amazon wedge offer block.
2. Nav: rename Services → What We Own, reorder to
   What We Own · Work · Pricing · About. Omit Learn for now.
3. Footer: rename the Services column, insert the real address
   (ask me for it if not in the repo), enable LocalBusiness schema.
4. StickyMobileCTA — appears after Section 4 only, slides up once,
   never covers content.
5. Full accessibility pass against Module 4 §8. Report any contrast
   failures rather than silently adjusting brand colours.
```

### Standing rules to append to every prompt

```
- Copy in the module docs is locked. Do not improve, shorten or
  rephrase it.
- Where a doc and your instinct disagree, follow the doc and flag the
  disagreement in your report.
- No new dependencies without telling me first.
- Never add: gradients, glassmorphism, icons, counter animations,
  carousels, popups, urgency language, or "Contact Us" in any form.
- Run the Module 6 §10 checklist before reporting any phase complete.
```

---

## §6 — What Only Kiran Can Decide

Everything else is delegable. These four are not:

1. **The serif.** Three options set in the real headline, screenshotted, pick one. Five minutes.
2. **Phase 2 on a real phone.** The hero change is the highest-value edit on the project. Look at it on your actual device in actual conditions, not a desktop simulator.
3. **The real footer address.** Blocks `LocalBusiness` schema and is a live trust leak until fixed.
4. **Anything Claude Code flags as a doc disagreement.** These are the moments where the spec met reality and lost — they need judgement, not code.

---

## §7 — QA Checklist

Before Phase 5 merges.

**Content** — Module 6 §10 checklist passes on every section · no jargon
unexplained · no dead links · every metric has a period stated.

**Visual** — section padding identical across all sections · no misaligned
edges at any breakpoint · display serif on headlines and numbers only · accent
under ~5% of any viewport · no icons.

**Responsive** — 360px, 390px, 768px, 1024px, 1440px · no horizontal scroll ·
tap targets ≥44px · body text never below 16px.

**Motion** — entrances fire once · nothing animates while being read · reduced
motion honoured · content visible with JS off.

**Accessibility** — contrast ≥4.5:1 for body text · `--ink-muted` used only at
small sizes · visible focus on everything interactive · one `<h1>` · no skipped
heading levels · meaningful alt text.

**Technical** — Lighthouse ≥90 on performance and accessibility · no CLS from
images · schema validates in Google's Rich Results Test · canonical consistent ·
sitemap current.

---

## §8 — Deployment

Vercel gives every branch a preview URL. Review there, never on production.

- One branch per phase, named as in §4.
- Merge to `main` only after the gate passes.
- Rollback is instant via Vercel's deployment list — if something breaks on
  production, promote the previous deployment rather than debugging live.
- After Phase 0 and Phase 5, request re-indexing in Search Console via URL
  Inspection.

---

## §9 — How To Use This With Minimum Human Work

The practical operating guide. The single biggest lever is that the thinking is
already done — these documents exist so that building doesn't require
re-deciding anything.

**Put the docs in the repo.** Create `/docs/` and commit all eight module files
plus `LOCKED.md`. Claude Code reads files far more reliably than pasted chat
context, and this way the spec lives with the code permanently. Do this once and
never explain the project again.

**One phase per session.** Start a fresh Claude Code session per phase. Long
sessions drift — the same context-decay problem that broke the original
planning. A fresh session reading a file beats a long session remembering one.

**Never paraphrase the docs into the prompt.** Point at the file and the
section. Paraphrasing reintroduces your judgement into something already
decided, and creates exactly the doc-versus-instruction conflicts that cause
drift.

**Review output, not code.** Look at the preview URL. Does the section read
right, look right on your phone, match the doc? If yes, merge. Reading the diff
line by line is where hours disappear for almost no benefit — the checklist in
§7 catches what matters.

**Batch your review.** Don't watch it work. Let a phase complete, then review
once. Interrupting mid-phase costs more than it saves.

**Let it check itself.** Every prompt ends with "run the Module 6 §10 checklist
before reporting done." Claude Code auditing its own output against a written
checklist catches most of what you'd catch, before you look.

**Install UI UX Pro Max at Phase 1, not before.** Give it the handoff brief from
Module 4 §9. It searches its palette and font databases against your actual
spec instead of generating cold, and writes `design-system/MASTER.md` that every
later phase inherits. Where it disagrees with Module 4, Module 4 wins — it
doesn't know your brand decisions.

**Answer the four questions in §6 quickly when they come up.** They're the only
real blockers. Everything else, let it proceed.

**Guides are the one place to spend real time.** Modules 3-6 are specification —
Claude Code executes them well with little input. Module 7's guides need your
actual operating knowledge to be worth reading. Realistic split: Phases 0-5 are
mostly Claude Code with a few hours of your review total; guides are genuinely
yours, roughly a couple of hours each with Claude Code drafting from your notes.

**The highest-value hour you can spend on this entire project** is writing down
3-5 real decisions you've made for Partner Brands, in the Module 5 §3 format.
That single artifact upgrades Section 3, Section 5, the Work page, and half the
guides simultaneously. Nothing else has that leverage.

---

## §10 — Open Items

| Item | Blocks | Owner |
|---|---|---|
| Serif choice | Phase 1 | Kiran |
| Real footer address | Phase 5, `LocalBusiness` schema | Kiran |
| Existing typeface identification | Phase 1 | Claude Code, Prompt 0 |
| Exit / notice terms | Pricing page | Kiran |
| Working-relationship description (contact, cadence, response) | What We Own, About | Kiran + Claude |
| Real Partner Brand decisions | Sections 3 and 5 depth, Work page, guides | Kiran |
| `/services` → `/what-we-own` URL change? | Internal links, `llms.txt`, redirects | Kiran |
