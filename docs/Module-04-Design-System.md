# Module 4 — Design System

**Status:** Complete draft
**Standard:** B (specification)
**Decision authority:** Design direction delegated to Claude by Kiran (2026-08-07).
Where this document overrides earlier ChatGPT direction, it says so and why.
**Depends on:** `LOCKED.md`, Module 3 (every section's visual spec inherits from here)

---

## What Was Kept, What Was Overridden

ChatGPT's design work in the original chat was diagnostically correct and
prescriptively half-finished. Recording the split explicitly so nothing gets
silently lost.

**Kept, unchanged — these were right:**

- *"It feels like I'm reading a PDF"* — the correct diagnosis of the current site.
- **Alive, not animated.** Motion that makes the page feel breathing, not decorated. No Awwwards, no GSAP showpieces, no parallax.
- **No icons.** The site reads premium partly because it has almost none.
- **No blue, no gradients, no glassmorphism.** All three would make it look like every SaaS template.
- **Keep the existing typeface and warm palette** rather than restarting.
- **70% architecture / 20% UI / 10% polish** as the effort split.
- Hero load sequence ~700ms, subtle enough to be felt not noticed.

**Overridden — with reasoning:**

1. **"Add a dashboard hero / live metrics widget."**
   Rejected. A fake dashboard is the single most common agency-site cliché, and
   a real one is a permanent maintenance burden that breaks the moment an API
   changes. It also violates LOCKED#48 — a dashboard *claims* sophistication
   rather than demonstrating it.
   **Replaced with:** the proof numbers themselves become the graphic element.
   ₹6,70,173 set at display scale, in the right typeface, with generous space
   around it, is more striking than any widget and it's true. Stripe and Linear
   both do exactly this. See §5, Display Numbers.

2. **"Counter animations on the numbers."**
   Rejected. Counting-up numbers are a conversion-page tic. They delay
   comprehension, they look like a growth-hack template, and they read as
   trying too hard — which directly contradicts LOCKED#36 (never sound
   desperate). Numbers appear at full value, immediately.

3. **"One strong visual element in the hero."**
   Partially rejected. The hero stays text-only. The signature visual moment
   moves to the RTO block in Section 3 and to the display numbers in Section 6,
   where a visual actually explains something rather than decorating.

**Added — not in the original direction at all:**

4. **A display serif, used only for headlines and numbers.** This is the single
   biggest premium upgrade available and it costs nothing. See §3.

5. **An explicit accessibility floor.** Contrast minimums, touch targets,
   reduced-motion. Non-negotiable, and it doubles as the "low-education,
   possibly older, definitely mobile" visitor requirement.

---

## §1 — Design Objectives

Three, in priority order. Every decision below serves one of them.

**1. The founder should feel calm.**
The target emotion is relief (LOCKED#12). Visual noise produces the
opposite. Whitespace is therefore a strategic decision, not a stylistic one.

**2. The visitor should believe we could build their store.**
Stated by Kiran directly. This is a craft-signal requirement: the site's own
execution is the portfolio piece that runs before any case study loads. It is
satisfied by precision — consistent spacing, real typographic hierarchy, no
misaligned edges — not by effects.

**3. Premium must not mean intimidating.**
The site serves a first-time seller who may not know what RTO stands for, and a
₹50L/month founder, on the same page. Premium comes from restraint and clarity,
never from sophisticated-sounding vocabulary or dense visual complexity. A page
that feels expensive but reads simply satisfies both readers at once.

---

## §2 — Colour

The existing `#FAF7F2` warm paper base is a genuine asset — it's the reason the
site already feels editorial rather than corporate. Everything below is built
outward from it.

### Tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FAF7F2` | Page background. Existing, unchanged. |
| `--paper-raised` | `#FFFFFF` | Cards, the Amazon offer block, anything lifted off the page |
| `--paper-sunken` | `#F3EFE8` | Section 5 (How We Think) tint, table header rows |
| `--ink` | `#1A1815` | Primary text, headlines. Warm near-black — never pure `#000` |
| `--ink-secondary` | `#5C564D` | Body text in supporting blocks, table secondary column |
| `--ink-muted` | `#918A7E` | Eyebrows, captions, "You keep" column, footer text |
| `--rule` | `#E3DDD3` | Horizontal rules, table borders, dividers |
| `--accent` | `#2F4739` | Deep green. Links, CTA background, display numbers |
| `--accent-hover` | `#3D5A48` | CTA hover state |
| `--accent-quiet` | `#EDF1EC` | Accent-tinted background, used sparingly |

### Why deep green

Blue was ruled out and rightly — it would make the site look like every B2B
SaaS product. Green on warm cream reads calm, established, and quietly
financial without being literal about money. It's also uncommon in Indian
agency sites, which are dominated by blue, purple gradients, and orange.

Critically it's a *low-saturation* green — `#2F4739` is closer to ink than to a
brand colour. It should never dominate a screen. Rule of thumb: if more than
about 5% of any viewport is accent-coloured, something is wrong.

### Rules

- No gradients anywhere. Flat colour only.
- No glassmorphism, no blur backdrops, no drop shadows on text.
- Shadows on raised surfaces only, and barely: `0 1px 3px rgba(26,24,21,0.06)`.
- Never pure black or pure white text. Both feel cheap against warm paper.
- Dark mode: **not in v1.** It doubles the design surface and this audience
  isn't asking for it. Revisit only if analytics justify it.

---

## §3 — Typography

The largest available upgrade, and the main thing separating this from a
well-formatted document.

### The change

The current site is single-typeface. That is exactly why it reads as a PDF —
there's no tonal contrast between "this is a statement" and "this is
explanation." Adding one display face for headlines and numbers only, while
keeping the existing sans for everything else, transforms the feel without
touching what already works.

| Role | Face | Notes |
|---|---|---|
| Display — headlines, section titles, big numbers | **A transitional or modern serif.** Recommended: *Instrument Serif*, *Fraunces* (low optical size setting), or *Newsreader*. All free via Google Fonts. | This is the new element. Use for `<h1>`, `<h2>`, and display numbers only. |
| Body — everything else | **Keep the existing sans.** | Explicitly praised in the original audit. Do not replace it. |
| Numeric | Body sans with `font-variant-numeric: tabular-nums` in tables; display serif for hero figures | Tabular figures stop pricing tables from jittering |

If the existing sans turns out to be a system stack rather than a real
typeface, replace it with *Inter* or *Söhne*-alike at that point — but verify
first, don't assume.

### Scale

Modular, 1.25 ratio, mobile-first. Desktop values in brackets where they differ.

| Step | Size | Use |
|---|---|---|
| Display | 40px / 2.5rem `[64px]` | Hero headline only |
| H1 | 32px `[44px]` | Section headlines (Sections 2-8) |
| H2 | 24px `[30px]` | Sub-block headings (e.g. "What RTO actually is") |
| H3 | 19px `[21px]` | Minor headings inside blocks |
| Body-lg | 18px `[19px]` | Section 3 explanatory text, Section 5 reasoning |
| Body | 16px `[17px]` | Default |
| Small | 14px | Captions, eyebrows, footer |
| Micro | 12px | Legal, GST notes |

**Body-lg exists on purpose.** Section 3 (RTO) and Section 5 (How We Think) are
long-form reading, and one step larger materially improves whether they're
actually read. This is the difference between a site people skim and one people
finish.

### Settings

- Body line-height `1.65`. Headlines `1.15`. Display `1.05`.
- Headline letter-spacing `-0.02em`. Body `0`. Eyebrows `+0.08em`, uppercase, `--ink-muted`.
- Measure: max `68ch` for body text. Section 3 must never run full-width on desktop.
- Weights: display serif at regular only — no bold serif headlines, it looks heavy on cream. Body sans at 400/500/600.

---

## §4 — Space

4px base unit. Every margin, padding and gap is a multiple.

| Token | Value | Use |
|---|---|---|
| `space-1` | 4px | Icon-to-text (rare), tight inline |
| `space-2` | 8px | Inside small elements |
| `space-3` | 12px | Label to field |
| `space-4` | 16px | Paragraph spacing |
| `space-6` | 24px | Between related blocks |
| `space-8` | 32px | Sub-block separation |
| `space-12` | 48px | Between sub-blocks in Section 3 |
| `space-16` | 64px | Section padding, mobile |
| `space-24` | 96px | Section padding, desktop |
| `space-32` | 128px | Before/after Section 8 only |

**Section rhythm:** every homepage section gets `space-16` vertical padding on
mobile, `space-24` on desktop. Consistent, no exceptions — irregular section
spacing is the most common reason a site feels amateur, and it's the thing a
prospective client's eye catches without knowing why.

**Container:** max-width `680px` for reading sections (2, 3, 5), `1080px` for
sections with side-by-side content (4, 6), `600px` for Section 8. Horizontal
padding `20px` mobile, `40px` tablet+.

---

## §5 — Signature Elements

The three things that make this site look like it was designed rather than assembled.

### Display Numbers

Replaces the rejected dashboard idea. Large proof figures are set in the
display serif at Display scale or larger, in `--accent`, with the explanatory
line directly beneath in `--ink-secondary` at Small.

```
5.1x                          ← display serif, 64px+, --accent
Return on ad spend            ← small, --ink-muted, uppercase eyebrow
Ladakh Berry · Google Ads

For every ₹1 spent on ads,    ← body, --ink-secondary
₹5.10 came back in tracked sales.
```

That explanatory line is not optional. It is what makes the number legible to
someone who has never heard "ROAS," and it's the language rule made visual.

### Rules As Structure

Thin horizontal rules (`1px`, `--rule`) are the primary structural device
instead of cards and boxes. Editorial, not dashboard-like. Cards are used in
exactly two places: Partner Brand cards (Section 6) and guide cards (Section 7).
Nowhere else.

### The RTO Diagram

The one illustration on the site. A simple horizontal flow showing money
leaving at each stage of a failed delivery:

```
Ad spend paid  →  Forward shipping paid  →  Refused at door
      →  Return shipping paid  →  Stock returns damaged
```

Monochrome, `--ink-secondary` on `--paper`, static SVG, no animation, no colour
coding. Set in body sans at Small. If it can't be made genuinely clearer than
the surrounding prose, omit it — the text already works.

---

## §6 — Motion

"Alive, not animated." Kept from the original direction, specified concretely.

### Global values

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for entrances. Nothing bounces, nothing overshoots.
- Entrance: `opacity 0→1`, `translateY 24px→0`, `600ms`.
- Stagger between sibling elements: `80ms`.
- Trigger: IntersectionObserver at `15%` visibility, fire once, never re-animate on scroll-back.
- Hover transitions: `150ms ease-out`.

### Hero load sequence

Total under 700ms, as originally specified:

```
0ms    headline
120ms  subhead
200ms  capability row
280ms  pricing line
360ms  CTA
```

### What animates

Section entrances. Link and button hover states. The sticky mobile CTA bar
sliding up once, after Section 4.

### What never animates

Numbers (no counting up). Anything on loop. Backgrounds. Scroll-linked
parallax. Anything that moves while the user is reading it.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Content must be fully visible without JS. Entrance animations start from
`opacity: 1` in the no-JS case — never ship a page that's blank if the observer
fails.

---

## §7 — Components

| Component | Spec |
|---|---|
| **Primary CTA** | `--accent` background, `--paper` text, `12px 24px` padding, `6px` radius, body weight 500. Full-width on mobile. Hover: `--accent-hover`, no scale, no shadow change. |
| **Secondary CTA** | Text link, `--accent`, `1px` underline at `--rule`, underline goes to `--accent` on hover. Used for "How the 3 months works →". |
| **Table** | No zebra striping. `1px --rule` bottom border per row. Header row `--paper-sunken`, Small, `--ink-muted`, uppercase. Tabular numerals. No highlight column, no "recommended" badge — ever. |
| **Card** (2 uses only) | `--paper-raised` background, `1px --rule` border, `8px` radius, `24px` padding, shadow `0 1px 3px rgba(26,24,21,0.06)`. Hover: border to `--ink-muted`, nothing else. |
| **Rule** | `1px`, `--rule`, full container width, `space-12` above and below. |
| **Eyebrow** | Small, uppercase, `+0.08em` tracking, `--ink-muted`, `space-3` below. |
| **Sticky mobile CTA** | Appears after Section 4 only. `--paper-raised`, top border `1px --rule`, `56px` tall, primary CTA inside. Slides up `300ms` once. Never covers content — page gets matching bottom padding. |
| **Nav** | Sticky, `64px`, `--paper` at 92% opacity with `backdrop-filter: blur(8px)` — the one permitted blur, because it's functional. Bottom border appears only after scroll. |

---

## §8 — Accessibility Floor

Non-negotiable, and it directly serves the low-literacy / older / mobile visitor.

- Body text contrast ≥ 4.5:1 against `--paper`. `--ink` and `--ink-secondary` both pass. **`--ink-muted` does not pass at body size** — it is permitted for Small text and eyebrows only, never for content anyone must read.
- Touch targets ≥ 44×44px. The current WhatsApp CTA and nav links must be checked against this.
- Visible focus states on every interactive element: `2px` outline, `--accent`, `2px` offset. Never `outline: none`.
- Real semantic HTML. One `<h1>` per page, no skipped heading levels.
- Body text never below 16px on mobile — prevents iOS zoom-on-focus and is a genuine readability floor for older users.
- Every image has meaningful `alt`. Partner Brand screenshots describe the store, not "screenshot."

---

## §9 — Handoff Prompt For UI UX Pro Max

Install at Module 8 (Implementation), not before. When installing, this is the
brief to give it — it searches its palette and font databases against this
rather than generating cold:

> Product: B2B ecommerce growth agency in India. Audience is two-sided —
> first-time sellers with low technical literacy, and experienced D2C founders
> doing ₹3-50 lakh/month. Must feel premium and calm without being
> intimidating or jargon-heavy.
>
> Style direction: editorial, warm, restrained. Apple and Stripe as reference
> points, not Awwwards. Explicitly avoid: blue, gradients, glassmorphism,
> icon-heavy layouts, counter animations, dashboard widgets, card grids.
>
> Base palette is fixed and must not be changed: paper `#FAF7F2`, ink
> `#1A1815`, accent deep green `#2F4739`. Find complementary neutrals only.
>
> Typography: display serif for headlines and numbers, existing sans for body.
> Suggest serif pairings that work on warm cream at large sizes.
>
> Validate against: WCAG AA contrast, 44px touch targets, mobile-first
> breakpoints, reduced-motion support.

Its output goes to `design-system/MASTER.md`. **Where its recommendations
conflict with this document, this document wins** — it doesn't know the brand
decisions in `LOCKED.md`.

---

## §10 — Open Items

| Item | Note |
|---|---|
| Identify the existing typeface | Needed before confirming the serif pairing. Check the Astro build or computed styles. |
| Confirm `#2F4739` against the real logo | If the Orcas Prime mark has a colour, the accent may need to defer to it. |
| Decide serif: Instrument Serif vs Fraunces vs Newsreader | Best decided by seeing the actual hero headline set in all three. A Module 8 task. |
