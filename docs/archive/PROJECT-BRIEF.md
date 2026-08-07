# Orcas Prime — Website Project Brief

> **This file is the source of truth.** Read it fully before writing any code.
> Every decision below was made deliberately. Do not deviate without asking.
> Last updated: August 2026

---

## 1. What this is

A rebuild of the Orcas Prime website. The previous site was a single-page
React/Vite app that looked generic and was structurally wrong for how the
business actually acquires customers. This is a ground-up replacement.

**Orcas Prime** is an ecommerce performance marketing agency in Jaipur, India,
run by two founders: **Kiran** and **Prashant**. It manages Shopify stores and
marketplace accounts (Amazon, Flipkart, Meesho) for Indian D2C brands.

---

## 2. The two audiences (this drives everything)

| Audience | How they arrive | State of mind | What they need |
|---|---|---|---|
| **Marketing traffic** | Homepage, cold, from paid ads | Skeptical, low intent | To be convinced |
| **AI-referred traffic** | Deep pages, via ChatGPT/Perplexity/Claude | Already informed, high intent | To not hit a dead end |

The site already receives organic leads from people sent by ChatGPT, with zero
marketing spend. This is treated as a primary acquisition channel, not a
curiosity.

**Structural consequence:** every page must be able to convert independently.
A visitor landing on a guide page has never seen the homepage. That guide page
must carry proof, founder presence, and a clear next action.

---

## 3. Positioning (LOCKED)

### Core statement

> Orcas Prime is the only ecommerce agency in India that charges no retainer —
> we take 3.5% of the revenue your customers actually keep, and nothing on returns.

### Why this is the brand

Competitors charge flat retainers (₹75K–₹6L/month) or a percentage of ad spend
(10–20%). Both get paid regardless of outcome. Orcas Prime is paid only on
**net sales after returns and RTOs are deducted** — which means it absorbs the
RTO problem alongside the client. That is a structurally different contract, and
it is the single most differentiating fact about the business.

Everything on the site is evidence for that one sentence.

### Homepage headline (LOCKED — use verbatim)

```
No retainer. No monthly fee.
We take 3.5% of what your customers actually keep.
```

Subhead:

```
Shopify stores built, launched and scaled — plus Amazon, Flipkart and Meesho.
Nothing charged on returns or RTOs.
```

**Do not put "two founders based in Jaipur" in the hero.** It was tested and
rejected — it reads as a disclaimer about company size and competes with the
pricing message. Location and founder identity are handled via footer, the About
page, and structured data (see §7).

### Message hierarchy for the homepage

Anything not on this list gets cut or moved to a deeper page.

1. The price model — no retainer, 3.5% of kept revenue
2. Why that's different — ad-spend vs. delivered-revenue contrast
3. Who runs it — Kiran and Prashant, with faces
4. What's included — the A-to-Z scope
5. Proof — real client results (see §5)
6. The Amazon free program — zero-risk entry point
7. How to start — WhatsApp, one tap, pre-written message

---

## 4. Pricing (LOCKED — publish this)

Publishing pricing is a deliberate strategic choice. Almost no Indian agency
does it. It filters unqualified leads, is the strongest available trust signal,
and is highly citable by AI (nothing credible currently exists for the query
"how much do ecommerce agencies charge in India").

| Item | Price |
|---|---|
| Shopify management (everything) | **3.5% + GST of net sales**, after returns and RTOs deducted |
| New Shopify store build | **₹10,000–₹20,000** one time, depending on scope |
| Amazon / Flipkart / Meesho management | **Free for first 3 months** (via seller referral link) |
| Setup / onboarding / creative / reporting fees | **None** |
| Lock-in contract | **None** |

### Rules

- Always publish as **"3.5% + GST"**, never GST-inclusive.
- **Never publish that the rate is negotiable.** The site says 3.5%, full stop.
  (Internally the floor is 3%, but this never appears anywhere public.)
- **Do not put the ₹2,000 security deposit on the website.** Decision made by
  the founder. It is handled in the WhatsApp onboarding conversation instead.

### What the 3.5% covers (say this explicitly — it's the value punch)

Store management · Meta & Google ads · creative production · RTO management ·
catalogue management · logistics and checkout integration · reporting.
No separate fee for any of it. (Client provides product images and titles.)

### Pricing comparison table

The pricing page and homepage both feature a comparison table. It is the single
most important layout element on the site — it explains the business model in
six seconds and is designed to be screenshotted and forwarded on WhatsApp.

| Net sales | Orcas Prime (3.5% + GST) | Typical agency retainer |
|---|---|---|
| ₹5,00,000 | ₹17,500 | ₹75,000+ |
| ₹10,00,000 | ₹35,000 | ₹1,50,000+ |
| ₹25,00,000 | ₹87,500 | ₹3,00,000+ |

**Footnote the competitor column with sources.** Published industry ranges put
Indian agency retainers at ₹75K–₹10L/month, commonly ₹1.5L–₹6L, or 10–20% of ad
spend. A cited table is far more credible and far more likely to be quoted by an
AI than an uncited one.

---

## 5. Real client data (USE ONLY THESE NUMBERS)

**Hard rule: no fabricated, inflated, or placeholder metrics on the live site.**
The entire brand rests on radical price transparency. Invented proof would
destroy it, and inflated advertising claims carry real exposure under India's
Consumer Protection Act. If a number isn't in this section, don't publish it.

### Clients (8 total, all onboarded 2026)

| Client | Services | Result |
|---|---|---|
| Ladakh Berry | Shopify management, Google Ads, Meta Ads, creative | ₹6,70,173 conversion value from Google Ads (lifetime) |
| Divine Rudras | Flipkart Seller Hub management | ₹6,50,410 revenue in last 30 days |
| Vastranama | Shopify management | Launched and managed, ongoing optimisation |
| Vastramahal | Shopify management, Google Ads, Meta Ads, creative | Launched and managed, ongoing optimisation |
| Khamma Ghani | Shopify management, creative | Launched and managed, ongoing optimisation |
| Savana Kurti | Shopify management | Launched and managed, ongoing optimisation |
| Vastra by Monty | Flipkart Seller Hub management | Marketplace-ready listings created and published |
| Jaipur Rang | Shopify management | Launched and managed, ongoing optimisation |

### Ad spend managed

| Account | Spend |
|---|---|
| Ladakh Berry | ₹1,31,198 (Google Ads, all campaigns) |
| Divine Rudras | ₹3,16,450 (Flipkart campaigns, last 60 days) |
| Vastra by Monty | ₹449 (Flipkart campaigns, last 60 days) |

### Headline figures (derived, all true)

- **5.1x ROAS** — ₹6,70,173 revenue on ₹1,31,198 spend (Ladakh Berry, Google Ads)
- **₹13.2 lakh+** — total tracked client revenue generated
- **₹4.4 lakh+** — total ad spend under management
- **8 brands** across Shopify and Flipkart
- **Platforms actually run:** Google Ads, Meta Ads, Flipkart Seller Hub

### How to frame it

- **Lead with the ratio, not the total.** "5.1x return on Google Ads" is a strong
  claim that doesn't reveal company size. Ratios have no scale.
- **Aggregate across clients** for the totals — no single client is exposed.
- **Reframe "new" as "current":** *"Every result below is from an account we're
  running right now."* Most agency case studies are years stale. These are live.
  This is true, differentiating, and exactly the kind of dated specific claim
  AI models prefer to cite.

### Implementation requirement

Store all metrics in a **single structured data file** (`src/data/results.json`
or similar) so figures can be updated as accounts scale without touching any
component. No hardcoded numbers in JSX.

---

## 6. Site architecture (LOCKED)

Flat, semantic, permanent URLs. No dates, no nesting by category, no IDs.

```
/                                    Homepage
/pricing                             Most strategically important page
/amazon-free-onboarding              The wedge offer — own page, not a section
/services/                           Hub
/services/shopify-meta-google-ads
/services/shopify-store-development
/services/amazon-account-management
/services/flipkart-meesho-management
/services/creative-and-catalogue
/work/                               Case studies hub
/work/[client-slug]
/about                               Kiran and Prashant
/how-we-work                         Process, reporting, expectations
/contact
/guides/                             Answer hub — the AEO engine
/guides/[question-slug]
```

### Three page families

- **Conversion pages** — turn intent into a WhatsApp conversation
  (homepage, pricing, amazon, services, contact)
- **Proof pages** — make the agency believable
  (work, about, how-we-work)
- **Answer pages** — get cited by AI
  (guides — cost/budget guides, platform comparisons, practical how-tos)

---

## 7. AEO / AI discoverability (a primary goal, not an afterthought)

The site exists partly to be recommended by ChatGPT, Claude, Perplexity, and
Google AI Overviews. Five layers:

**Layer 1 — Be readable.** Server-rendered HTML (this is why Astro). A
`robots.txt` that explicitly allows `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`,
`ClaudeBot`, `Claude-Web`, `PerplexityBot`, `Google-Extended`, `Bingbot`,
`Applebot-Extended`. Plus an `llms.txt` at the root giving AI crawlers a clean
site map.

**Layer 2 — Bing, not just Google.** ChatGPT search runs on Bing. Set up Bing
Webmaster Tools and IndexNow from day one. Most Indian businesses never do this
and are invisible to ChatGPT as a result. Highest-leverage 30 minutes in the
project.

**Layer 3 — Extractable structure.** Every answer page: a real question as `<h1>`,
a direct answer in the first 40 words, then detail. Schema.org markup throughout:
`Organization`, `LocalBusiness`, `Service`, `FAQPage`, `Person` (Kiran, Prashant),
`BreadcrumbList`. Real numbers with dates attached.

**Layer 4 — Corroboration elsewhere.** Models weight what other sites say. Needed
(none exist yet — set up in parallel with the build):
Google Business Profile · LinkedIn company page · both founders' LinkedIn
profiles · Bing Webmaster Tools · Clutch listing.

**Layer 5 — Entity clarity.** Consistent name, address, founder names, and
service descriptions everywhere. Ambiguity gets an entity dropped from the graph.

---

## 8. Visual direction — "Ledger" (LOCKED)

### The idea

**The website is a document you can audit.** Warm paper, precise numbers, real
faces, no decoration that isn't carrying information. The tension that makes it
work: *warm and human in the typography, cold and exact in the data.* That is
literally the business — two people you can talk to, running numbers you can check.

**The dark navy / electric-blue / glassmorphism / gradient-mesh aesthetic of the
old site is abandoned entirely.** It is the visual signature of AI-generated
sites, it reads poorly for long-form content on cheap Android screens, and it
screenshots badly in WhatsApp — which matters, because the pricing table *will*
be forwarded.

### Palette

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FAF7F2` | Page background — warm off-white |
| `--ink` | `#1C1917` | Primary text — near-black with warmth, never `#000` |
| `--ink-muted` | `#57534E` | Body, secondary text |
| `--ochre` | `#B45309` | The accent — links, CTAs, key figures |
| `--ochre-wash` | `#FDF0E1` | Highlight blocks, table headers |
| `--rule` | `#E7E1D8` | Hairline borders and dividers |
| `--ledger-green` | `#3F6212` | Positive figures only, used sparingly |

Ochre is deliberate: warm, earthy, quietly connected to Jaipur without any
literal Rajasthani ornament, and **no competitor in this category uses it.**
Everyone uses blue. Blue says "tech company." Ochre says "people."

**Execution warning:** warm-cream + serif + warm accent is close to a common
AI-generated look. The difference is in execution. `#B45309` is a deep browner
ochre, *not* a terracotta/clay tone (avoid anything near `#D97757`). Keep
border-radius small and consistent, keep rules genuinely hairline and aligned
across sections, and let the type do the work. Precision is what separates
"restrained" from "plain."

### Typography

| Role | Face | Notes |
|---|---|---|
| Headings | **Fraunces** | Variable serif, editorial, warm, characterful |
| Body & UI | **Geist Sans** | Clean, neutral, excellent small |
| All numbers | **Geist Mono** | Tabular figures, always |

**The monospace rule is critical.** Every rupee figure, percentage, and data
point sets in Geist Mono with tabular numerals. This is what makes the site feel
engineered rather than decorated — numbers read as *facts being reported*, not
*claims being made*.

### The signature element

The **pricing comparison table above the fold** on the homepage. It is the one
place the design spends its boldness. Everything else stays quiet so this lands.

### Second visual anchor — the work showcase

A full-bleed section showing real Shopify stores built, in device frames, with
visibly different colour worlds side by side. This is the answer to "if they
can't design a good site for themselves, how can they build one for me?" —
the site is the frame, the work is the art. Restraint everywhere else is what
makes this section hit.

**Framing:** results, not aesthetics. Not "look how beautiful" but:

```
We build stores that sell, then we run them.
Design, ads, RTO, catalogue, logistics — one team, one fee.
```

Stores to feature: `ladakhberry.in`, `thevastramahal.in`, `thesavanakurti.com`.
(Note: these have known defects — broken links, missing meta descriptions,
mismatched testimonial photos. A fix pass is deferred, not cancelled. Do not
deep-link to broken pages from the showcase.)

---

## 9. UX decisions (LOCKED)

### Contact — WhatsApp is the primary channel

Indian sellers frequently won't fill forms, email, or book a Calendly. WhatsApp
is the native channel and must be frictionless.

**Do:**
- A permanent, quiet WhatsApp button — always present, always same position,
  never animates, never demands attention.
- **Contextual WhatsApp entry points** at every natural decision moment, each
  with the message pre-written for that context. Zero typing required.
  - Pricing page → `"Hi, I want to check if the 3.5% model fits my store."`
  - RTO section → `"Hi, I want to know how you handle RTO."`
  - Amazon page → `"Hi, I want to start the free 3-month Amazon onboarding."`
  - Store build → `"Hi, I want a quote for a new Shopify store."`

**Don't:**
- ❌ Timed popups (the old site fired one at 15s — it interrupts reading,
  and is actively insulting to high-intent AI-referred visitors)
- ❌ Scroll-triggered popups
- ❌ Manufactured scarcity ("Only 5 spots remaining for June 2025" — it was
  fake *and* stale on the live site)

**Real scarcity is fine if true:** *"We take on 4 new clients a quarter because
there are two of us."* Say the true version.

### Quality floor (non-negotiable)

- Mobile-first. Test 360px, 640px, 1024px, 1280px.
- WCAG AA contrast minimum throughout.
- Visible keyboard focus on every interactive element.
- Semantic HTML — real landmarks, real heading hierarchy, no `<div>` soup.
- `prefers-reduced-motion` respected.
- Lighthouse 95+ on all four categories. **Publish the real measured score on
  the site** — it's a verifiable design-capability claim competitors will fail.
  Never publish an unmeasured number.
- Ship near-zero JavaScript. Astro islands only where genuinely interactive.

### Motion

Minimal and purposeful. Excessive animation is one of the strongest AI-generated
tells and it directly contradicts the "auditable document" concept. No
scroll-reveal on every element, no blur-in, no float loops, no pulse badges.

---

## 10. Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro** | Server-rendered HTML by default — essential for AEO. Ships almost no JS. Easy to add content pages over time. |
| Interactive bits | React islands | Only where genuinely needed |
| Styling | Tailwind CSS | With design tokens from §8 as CSS custom properties |
| Content | Markdown/MDX via content collections | Guides and case studies as files |
| Hosting | Vercel or Netlify, free tier | No cost change from before |
| Fonts | Fraunces, Geist Sans, Geist Mono | Self-hosted or via Fontsource, not blocking render |

---

## 11. Build phases

| Phase | Status |
|---|---|
| 1. Architecture & AEO strategy | ✅ Complete (this document) |
| 2. Positioning & messaging | ✅ Complete |
| 3. Visual direction | ✅ Complete |
| 4. Technical foundation | ← **Start here** |
| 5. Page builds | Pending |
| 6. Content engine (guides) | Pending |
| 7. Launch & instrument | Pending |

**Phase 5 page order:** Homepage → Pricing → Amazon → Services → Work → About →
How We Work → Contact.

**Review each page before moving to the next.** The founder drives sequencing.
Do not build ahead. Do not modify or run code without being asked.

---

## 12. Standing instructions

1. **Ask before acting**, especially on code. Never proactively modify or execute.
2. **Push back openly.** If a different approach is better, say so with reasoning.
   Do not defer just to agree.
3. **No fabricated data.** Ever. See §5.
4. **No generic AI patterns.** No bento grids, no glassmorphism, no gradient text,
   no icon-in-a-rounded-square rows, no "01 / 02 / 03" step markers unless the
   content is genuinely sequential.
5. **Every decision needs a reason** grounded in UX, brand, or business goals.
6. Copy in this document is approved. Use it verbatim where given.

---

## 13. Still outstanding

- [ ] Founder bios and photos (Kiran, Prashant) — needed for About page
- [ ] Google Ads dashboard screenshot showing the 5.1x — highest-value proof asset
- [ ] WhatsApp business number, email, full Jaipur address for schema
- [ ] Google Business Profile, LinkedIn company page, Bing Webmaster Tools,
      Clutch listing — none exist yet, set up in parallel
- [ ] Amazon referral program mechanics — exact terms for the free-3-months page
- [ ] Top 5 questions clients ask before signing — seeds the guides
- [ ] Portfolio store defect fixes (deferred)
