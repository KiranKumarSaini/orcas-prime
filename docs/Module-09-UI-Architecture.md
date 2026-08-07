# Module 9 — UI Architecture (supersedes Module 4's layout guidance)

**Status:** Active
**Standard:** B (specification)
**Authority:** Written 2026-08-07 after operator review of the built site.
**Relationship to Module 4:** Module 4's *tokens, colour reasoning, accessibility
floor and anti-patterns still stand*. Its **layout and composition guidance is
replaced by this document.**

---

## §1 — Why this document exists

Module 4 specified a text-led page: thin rules as the only structural device,
cards permitted in exactly two places, no icons, no illustration, no visual
anchors. Module 3 then specified eight sections that each open with an eyebrow,
a headline, and paragraphs.

Followed literally, those two documents produce **one layout repeated eight
times**. The built result was correct against the spec and wrong as a website:

> "The homepage looks like a very very long doc and nothing. Too boring and
> also no one is going to read that much." — operator, on the live build

The diagnosis is not that there is too much content. The content is the asset —
Section 3's RTO block is the single most valuable thing on the site. The
diagnosis is that **every piece of content was given the same visual treatment,
so nothing signals what matters, and there is no reason for the eye to travel.**

### The correction, stated once

**Restraint is not the same as monotony.** Module 4 correctly rejected
gradients, glassmorphism, icon soup and dashboard widgets. It incorrectly
concluded that the alternative was uniform prose. The actual alternative is
*rhythm*: varied layout, alternating surfaces, and visual anchors at intervals —
each one earning its place by explaining something.

**Nothing in this document removes content.** Every sentence Module 3 locked
still ships. This document changes only how it is arranged, surfaced and paced.

---

## §2 — The three structural failures being fixed

**1. No surface rhythm.** Every section sits on `--paper`. Eight cream blocks in
a row read as one undifferentiated scroll. *Fix:* alternate light, tinted and
dark surfaces. Dark sections are not decoration — they mark the two moments
where the page changes register (the problem, and the close).

**2. No progressive disclosure.** Section 3's RTO block is ~450 words of
uninterrupted prose. A committed reader finishes it; a scanner bounces off it
and loses the most valuable content on the site. *Fix:* structure it as an
accordion with the first panel open. The scanner reads four headings and one
answer; the committed reader opens all four. Same words, two reading speeds.

**3. No visual anchors.** Between the hero and the proof numbers there is
nothing for the eye to land on across three long sections. *Fix:* one earned
visual per section — a card triad, a flow diagram, an asymmetric split, a pull
quote. Never decorative, always carrying information.

---

## §3 — Surface rhythm (the single biggest change)

| # | Section | Surface | Why |
|---|---|---|---|
| 1 | Hero | `--paper` | Open, calm, the brand's default |
| 2 | The Founder's Reality | `--paper` | Continuous with hero — same world, closer in |
| 3 | The Broken System | **`--ink-deep` (dark)** | The register changes. This is the diagnosis section; gravity is appropriate |
| 4 | What We Own | `--paper` | Return to light = return to the solution |
| 5 | How We Think | `--paper-sunken` | Barely-perceptible tint marks the intellectual centre |
| 6 | Proof | `--paper` | Evidence reads cleanest on the base surface |
| 7 | Learn | `--paper` | Continuous with proof |
| 8 | Start | **`--ink-deep` (dark)** | Closes the loop opened by Section 3. The decision moment |

Two dark sections, at the diagnosis and the close. Not more — the effect works
because it is rare.

### New tokens required

```css
--color-ink-deep:        #14120F;  /* dark section surface — warmer than pure black */
--color-paper-on-dark:   #FAF7F2;  /* body text on dark (same as --paper) */
--color-muted-on-dark:   #A8A29A;  /* secondary text on dark, ≥7:1 */
--color-accent-on-dark:  #8CB39A;  /* accent/links on dark — the deep green is
                                       unreadable on dark, this is its light twin */
--color-rule-on-dark:    rgba(250, 247, 242, 0.14);
--shadow-card:           0 1px 3px rgba(20, 18, 15, 0.06);
--shadow-card-hover:     0 4px 16px rgba(20, 18, 15, 0.10);
```

**Rule:** `--color-accent` (#2F4739) is for light surfaces only.
`--color-accent-on-dark` is for dark surfaces only. Never swap them.

---

## §4 — Layout pattern per section

Each section gets a *different* composition. This is the rhythm.

**1. Hero — full-bleed statement**
Display-scale headline (700 weight), subhead, capability chips (bordered, not
bare text), a bordered fact-strip for the price line, primary CTA + secondary
link, scroll cue. Staggered load sequence per §6.

**2. Founder's Reality — asymmetric split + card triad + pull quote**
Desktop: headline left, intro right. The three situations become three cards
with a left accent rule, each carrying a time-stamp motif (`09:14`, `11:40`,
`Last month`) — the "all before lunch" line made visual. Closing line renders as
a **pull quote**: large serif, centred, rules above and below.

**3. Broken System — dark, with the page's only diagram**
- Sub-block 1 (vendors): four labelled chips in a broken chain, with the
  "nobody owns the outcome" line as the terminal state. Prose retained beneath.
- Sub-block 2 (RTO): **accordion**, four panels matching the four `<h3>`
  headings, first panel open by default. Above it, the **RTO flow diagram** —
  five stages showing money leaving at each one. Monochrome, static, no
  animation. `<h3>` semantics and `FAQPage` schema are preserved regardless of
  open/closed state (content is in the DOM, `<details>`-based, crawlable).
- Sub-block 3 (incentives): the three pricing models as a **three-column
  comparison**, not three paragraphs. Ours marked with the accent rule.
- Closing line as pull quote.

**4. What We Own — the asymmetric split, made literal**
Desktop: `1fr / 2fr`. Left "You keep" — four items, muted, lighter weight.
Right "We take" — fifteen items in a two-column grid, full ink, accent markers.
The 4-vs-15 imbalance is legible before a word is read. Trust qualifier renders
as a bordered callout, not a footnote.

**5. How We Think — numbered decision cards**
Three cards, numbered `01`–`03`, on the tinted surface. Hover lifts 2px and
brightens the border. These are the "screenshottable" units — each must stand
alone.

**6. Proof — the display number as the page's visual peak**
`5.1x` at the largest type size on the page after the hero (serif, accent,
clamp to ~7rem). Three stat cards. Three Partner Brand cards with screenshots
and hover lift. Pricing table with accent header row and row hover. Honest-fit
block centred.

**7. Learn — card grid**
Four guide cards, hover lift, arrow slides right on hover.

**8. Start — dark close**
Centred, narrow. Headline, primary CTA rendered as paper-on-dark for maximum
contrast, wedge offer in a bordered sub-block, reassurance microcopy.

---

## §5 — Components introduced

| Component | Purpose |
|---|---|
| `Accordion.astro` | `<details>`-based, no JS required, schema-safe. Section 3 RTO. |
| `RTOFlow.astro` | The five-stage money-loss diagram. HTML/CSS flex, not SVG — reflows to vertical on mobile without a viewBox fight. Monochrome, static. |
| `PullQuote.astro` | Section-closing lines. Large serif, rules above/below. |
| `StatCard.astro` | Proof figures. |
| `DecisionCard.astro` | Numbered cards, Section 5. |
| `Chip.astro` | Capability row, vendor chain. Bordered, small, mono. |
| `Callout.astro` | Bordered emphasis block (trust qualifier, honest fit). |
| `ScrollProgress.astro` | 2px accent bar, top of viewport. |
| `StickyMobileCTA.astro` | Mobile only, appears after Section 4. **Replaces** the floating WhatsApp bubble on mobile — two fixed bottom elements was the reason it was skipped before; this resolves that properly rather than dropping the requirement. |

**Nav** is rebuilt as sticky with `backdrop-filter: blur(8px)` and a
border that appears on scroll — this was specified in Module 4 §7 and was not
built. Desktop nav gains the primary CTA.

---

## §6 — Motion

Module 4 §6's values stand (600ms, `cubic-bezier(0.16, 1, 0.3, 1)`, fire once,
`prefers-reduced-motion` honoured, content visible without JS). Two additions:

**Element-level stagger.** Sections currently fade as one block. Children now
stagger at **80ms** intervals via `--i` on each animated child. A section
arriving in sequence reads as composed; a section arriving as one block reads as
a slide transition.

**Hero load sequence** (was specified in Module 4 §6, never implemented):
`0ms` headline · `120ms` subhead · `200ms` chips · `280ms` price strip ·
`360ms` CTA. Total under 700ms.

**Hover states** (150ms): cards lift `translateY(-2px)` and border brightens.
Links shift underline colour. Arrows translate `4px`. Nothing scales.

**Still forbidden:** counting numbers, carousels, parallax, loops, anything that
moves while being read, anything that animates on scroll-back.

**Non-negotiable:** the 2s visibility fallback stays. Any `[data-animate]`
element still hidden 2s after load is forced visible. Content loss beats
polish, always.

---

## §7 — What does not change

- Every word of Module 3's locked copy. Nothing is cut, shortened or rephrased.
- The palette base: `--paper` `#FAF7F2`, `--ink` `#1C1917`, accent `#2F4739`.
- Module 4 §8's accessibility floor in full — 4.5:1 body contrast, 44px touch
  targets, visible focus, one `<h1>`, no skipped heading levels, 16px minimum
  body text on mobile.
- Module 4's anti-patterns: no gradients, no glassmorphism (the one nav blur
  excepted, as Module 4 itself permits), no icon-per-row, no counter
  animations, no carousels, no dashboard widgets, no stock photography.
- Section order. Module 3's psychological flow table is untouched.

---

## §8 — Acceptance test

The build is correct when all of these hold:

- [ ] No two consecutive sections share both surface *and* composition
- [ ] A visitor scrolling without reading can name what the company does, what
      it costs, and that it works — from headlines, numbers and diagram alone
- [ ] Section 3's full RTO text is present in the DOM and in `FAQPage` schema
      whether or not the accordion panels are open
- [ ] Every metric still carries its period; every fee statement still says what
      is not charged
- [ ] Contrast passes on both light and dark surfaces
- [ ] The page is fully readable with JavaScript disabled
- [ ] Nothing animates on scroll-back
