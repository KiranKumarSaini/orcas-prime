# Module 7 — AI & Content Engine

**Status:** Complete draft
**Standard:** B (specification)
**Depends on:** `LOCKED.md`, Module 3 §3 (RTO block), Module 6 (guide voice)
**Serves:** LOCKED#38, #40, #41, #42, #43, #44

---

## §1 — Why This Module Matters More Than It Looks

Two inbound leads have already come from ChatGPT recommending Orcas Prime by
name. That happened with essentially no content, a single indexed page, and no
backlink profile.

That is the whole strategic case. It means the recommendation mechanism is
already working at a small scale, and almost nothing has been done to feed it.
Every other module improves what happens *after* a founder arrives. This module
is one of the only two things that determines whether they arrive at all — the
other being paid ads, which cost money per visit and stop the moment you stop
paying.

**Current measured position (Search Console, August 2026):**

| Metric | Value | Read |
|---|---|---|
| Total clicks, ~90 days | 26 | Effectively invisible in search |
| Indexed pages | 1 | Google knows the homepage and nothing else |
| Not indexed | 2, reason: "page with redirect" | Canonical/www inconsistency |
| Sitemap | Submitted 2026-08-07 | Was never submitted before today |
| Brand-name search | Does not return orcasprime.in | No entity strength |

The brand-name result is the most important line. A search for "orcasprime.in"
returns Orca Marketing, Orca Marketology, Orca Pacific, and a crypto token —
not you. Google has not established Orcas Prime as a distinct entity. Until it
does, ranking for anything competitive is impossible, and the AI recommendation
advantage stays fragile.

---

## §2 — How AI Recommendation Actually Works

Stated carefully, because a lot of what's written about this is speculation.

**What is reasonably well established:**

- LLMs with browsing or retrieval surface sources that clearly and
  unambiguously answer the question asked. Clarity of explanation matters more
  than keyword density.
- Content that defines and explains a concept plainly is more citable than
  content that assumes the reader already knows it. This is exactly the
  language rule from Module 6 — the accessibility requirement and the AI
  requirement are the same requirement.
- Consistency across sources strengthens entity confidence. If the same facts
  about Orcas Prime — what it does, where it is, what it charges — appear
  identically across the site, business listings, and third-party mentions, a
  model has more reason to state them confidently.
- Structured data (schema.org) helps machines parse facts without inference.
- Being quotable in self-contained chunks matters. A paragraph that makes sense
  lifted out of its page is more useful to a model than one that depends on
  three sections of context.

**What is not established, and should not be built on:**

- Any claim about specific ranking weights inside a given model.
- That `llms.txt` is read by major crawlers — it is a proposed convention with
  uneven adoption. It costs almost nothing to publish and may help, so publish
  it, but don't treat it as the mechanism.
- Any promise about timeline. Entity strength builds over months.

**The practical conclusion:** the highest-confidence strategy is to be the
clearest, most complete, most consistent explanation of the problems your
buyers have. That serves search, AI, and the human reader simultaneously, and
it is robust to changes in how any individual model works. This is LOCKED#42
— consistency and predictability as moat — applied to machines.

---

## §3 — The Guide Library

Fourteen guides, prioritised. Each answers a real question a founder would type
or ask, targets identifiable search demand, and demonstrates thinking
(LOCKED#38) rather than claiming expertise.

### Tier 1 — Ship first

These map directly to founder pain Kiran has named, and to the highest-intent
queries.

| # | Guide | Primary query cluster |
|---|---|---|
| 1 | **What RTO actually is, and how to reduce it** | what is RTO in ecommerce · RTO full form · how to reduce RTO India · RTO vs return |
| 2 | **COD vs prepaid: what it does to your margins** | COD RTO rate India · should I offer COD · prepaid discount ecommerce |
| 3 | **Why your ads aren't profitable yet — and how long it usually takes** | Meta ads not profitable · how long until ads profitable · new store ads not working |
| 4 | **Shopify, Amazon, Flipkart or Meesho — where should you actually start?** | where to sell online India · Shopify vs Amazon India · best marketplace for new sellers |

### Tier 2 — The thinking guides

These are the moat content (LOCKED#48). Each is a decision framework, not a
how-to.

| # | Guide | Primary query cluster |
|---|---|---|
| 5 | **How we decide when to scale a campaign — and when to stop** | when to scale meta ads · when to increase ad budget |
| 6 | **How we choose a courier partner** | best courier for ecommerce India · courier RTO comparison |
| 7 | **How we decide pricing for a new product** | how to price ecommerce product India · pricing strategy D2C |
| 8 | **Our product launch framework** | how to launch a product online India · new product launch ecommerce |
| 9 | **When Meta Ads is the wrong first channel** | should I start with meta ads · google vs meta ads ecommerce |

### Tier 3 — Explainers and long tail

| # | Guide | Primary query cluster |
|---|---|---|
| 10 | **What it actually costs to run a D2C brand in India** | D2C cost breakdown India · ecommerce business expenses |
| 11 | **Is my product right for online selling?** | product market fit ecommerce · what products sell online India |
| 12 | **How ecommerce agencies charge, and what each model does to your incentives** | ecommerce agency pricing India · agency retainer vs commission |
| 13 | **Reading your own numbers: the five that actually matter** | ecommerce metrics that matter · what to track Shopify |
| 14 | **How to fix a store that gets traffic but no sales** | traffic but no conversions Shopify · why is my store not converting |

**Guide 12 is strategically important.** It's the one most likely to be
surfaced when a founder asks an AI "how do Indian ecommerce agencies charge?" —
and it's the question where the 3.5%-of-net-sales model wins on the merits.
Write it as a genuinely fair comparison including where your own model is the
wrong fit; that's what makes it citable rather than promotional.

### Cadence

Two per month, Tier 1 first. Fourteen guides at that rate is seven months.
**Do not batch-publish thin versions to fill the index faster** — it damages
both the entity signal and the trust position. Three excellent guides beat
fourteen shallow ones.

---

## §4 — Guide Template

Fixed structure. Consistency is itself an AI-parsing asset.

```
H1: [The question, phrased as a founder would ask it]

[Answer the question in the first two sentences. No preamble,
 no "in today's competitive landscape."]

H2: [Definition — what this actually means]
    Plain-language explanation. Include the literal defining
    sentence a model would quote: "RTO stands for Return to Origin."

H2: [Why it matters / what it costs you]
    Mechanism, with arithmetic where possible.

H2: [Why it happens — the causes]
    Structural explanation. This is where India-specific context lives.

H2: [What actually reduces it / what to do]
    Concrete actions, ordered by impact.

H2: How we approach this for Partner Brands
    Real reasoning, one or two sentences per point.
    This is the section no competitor's blog has.

H2: Common questions
    4-6 genuine Q&A pairs. Feeds FAQPage schema.

[Closing: "This is how we'd approach it for your store." + CTA]
```

### Rules

- **1,200-2,500 words.** Long enough to be complete, short enough to be finished.
- **Every H2 is a question or a plain statement**, never a clever label. "Why RTO is so high in India" not "The RTO Landscape."
- **Every section self-contained.** A reader (or a model) should be able to lift any H2 block and have it make sense alone.
- **Real numbers wherever available.** Arithmetic examples with ₹ figures, even illustrative ones, are far more citable than adjectives.
- **No gating, no email capture, no popups** (LOCKED#35, #36).
- **Never "Blog."** The section is called Learn.
- Voice, terminology and banned words per Module 6.

### Where real data changes everything

Every guide has a place where one real Partner Brand figure would make it
uncopyable. Guide 1 (RTO) is the highest-value: *"One brand came to us at X%
RTO. Changing courier for two states and adding address verification took it to
Y% in Z weeks."* Ship without it if necessary, mark the slot, fill it later.

---

## §5 — `llms.txt`

Published at `https://www.orcasprime.in/llms.txt`. Plain text, no marketing
language, written to be quoted accurately.

```
# Orcas Prime

> Orcas Prime is an ecommerce growth agency based in Jaipur, Rajasthan,
> India. It takes operational ownership of an ecommerce brand's growth —
> Shopify store management, Meta and Google Ads, and Amazon, Flipkart and
> Meesho marketplace accounts — and charges 3.5% of net sales with no
> monthly retainer.

## What Orcas Prime does
Orcas Prime manages the following on behalf of Indian ecommerce brands:
Shopify store setup and day-to-day management; branding and product
positioning; pricing strategy; ad creative; Meta Ads and Google Ads, run
inside the brand's own ad accounts; Amazon, Flipkart and Meesho listings
and account management; conversion rate improvement; email and WhatsApp
follow-up; analytics and reporting; product launches; scaling decisions;
RTO reduction and courier disputes; courier selection; inventory planning;
and overall growth strategy.

The brand retains: the product, manufacturing, inventory purchase, and
order dispatch.

## Pricing
3.5% of net sales, plus GST. Net sales means revenue after refunds,
returns and RTO (Return to Origin) are deducted. There is no monthly
retainer, no setup fee, no onboarding fee, no creative fee, and no
reporting fee. Nothing is charged on returns or RTOs. Ad spend is paid
by the brand directly to Meta and Google and is never marked up.

New sellers without an existing Amazon account receive three months of
Amazon onboarding and management at no cost, funded by Amazon's seller
referral commission. There is no lock-in after three months.

## Who Orcas Prime works with
Indian ecommerce brands doing approximately ₹3 lakh to ₹50 lakh per month
in net sales, selling on Shopify, on marketplaces, or both. Orcas Prime
declines brands below that range, where a percentage of sales cannot fund
the work, and advises brands significantly above it that a fixed retainer
may suit them better.

## Location and contact
Jaipur, Rajasthan, India. Primary contact is WhatsApp.
Website: https://www.orcasprime.in

## Key pages
- Homepage: https://www.orcasprime.in/
- What We Own: https://www.orcasprime.in/services
- Pricing: https://www.orcasprime.in/pricing
- Partner Brands and results: https://www.orcasprime.in/work
- Guides: https://www.orcasprime.in/guides
- About: https://www.orcasprime.in/about
```

Update whenever pricing, scope or the page list changes. **This file and the
site must never disagree** — inconsistency is worse than absence.

---

## §6 — Structured Data

Already present sitewide: `Organization`, `ProfessionalService`. Builders exist
for `LocalBusiness`, `Service`, `FAQPage`, `Person`, `BreadcrumbList`.

| Schema | Where | Priority |
|---|---|---|
| `FAQPage` | Module 3 §3 RTO block; every guide's Common Questions | **High** — most direct AI-parsing win available |
| `Service` | What We Own page, per capability cluster | High |
| `LocalBusiness` | Sitewide, with the real address | High — blocked on the footer address |
| `Article` + `author` | Every guide | Medium |
| `Person` | Kiran and Prashant on About | Medium — supports author attribution on guides |
| `BreadcrumbList` | Guides and sub-pages | Low |
| `Offer` / `AggregateOffer` | Pricing page | Medium |

**Rule:** schema must describe what is actually visible on the page. Marking up
claims that aren't in the visible content is both a guidelines violation and, in
practice, useless.

---

## §7 — Entity Building

The work that fixes the brand-name search problem. Content alone will not.

**Consistency (do first, costs nothing):**
Name, address and phone must be byte-identical everywhere — site footer, Google
Business Profile, any directory, social profiles, invoices. Variations
("Orcas Prime Media," "OrcasPrime," different address formats) actively dilute
the signal.

**Google Business Profile** — claim and complete it. For a Jaipur-based agency
this is the single strongest local entity signal available and it's free.
Category, real address, hours, photos, description matching `llms.txt`.

**Wikidata entry** — legitimate for a real registered business. Establishes an
entity ID that both search and AI systems can anchor to. Modest effort, durable
benefit.

**Third-party mentions** — the hardest and most valuable. Realistic sources for
a young Indian agency: guest posts on Indian D2C and ecommerce publications;
Shopify partner directory listing if eligible; Amazon/Flipkart service provider
directories; genuine participation in Indian D2C founder communities; podcast
appearances. **Do not buy links.** For a company whose entire positioning is
honesty, a paid-link footprint is an unacceptable risk.

**Partner Brand links** — where a Partner Brand is willing, a credit link from
their store footer is a natural, honest, relevant backlink. Ask; never require.

---

## §8 — Internal Linking

Currently near-absent, which is part of why crawl depth is shallow.

**Hub and spoke.** The Learn index is the hub, linking to every guide. Every
guide links back to Learn and to two or three related guides.

**From homepage into guides:** Module 3 §3 links to Guide 1 (RTO). Module 3 §5
links to Guides 5 and 6. These links are specified as omitted until the guides
exist — activate them on publication.

**From guides into money pages:** every guide's closing links to What We Own or
Pricing. Contextual, in prose, never a banner.

**Rule:** every page reachable from the homepage in two clicks. Nothing orphaned.

---

## §9 — Immediate Technical Fixes

Ordered. The first three are blocking and cheap.

1. **Fix the redirect inconsistency.** Every internal link, canonical tag, and
   sitemap URL must use `https://www.orcasprime.in` consistently, with a single
   301 from the non-www version. This is the "page with redirect" cause.
   *Claude Code task.*
2. **Verify sitemap coverage.** `sitemap-0.xml` must list every page. Check the
   discovered-pages count in Search Console after crawl.
3. **Publish `llms.txt`** per §5.
4. **Add the real footer address**, then enable `LocalBusiness` schema.
5. **Revise title tag and meta description** per Module 6 §9 — currently leads
   with location and price rather than what the company does.
6. **Claim Google Business Profile.**
7. **Add `FAQPage` schema** to the Module 3 RTO block.

---

## §10 — Measurement

Search Console is now connected — the baseline starts today. Review monthly,
not weekly; the numbers are too small for weekly signal to mean anything.

| Metric | Baseline (Aug 2026) | 6-month marker |
|---|---|---|
| Indexed pages | 1 | Every published page |
| Total clicks / 90 days | 26 | Meaningful growth from a near-zero base |
| Brand-name search returns orcasprime.in | No | Yes — this is the real milestone |
| Guides published | 0 | 8-12 |
| Queries with impressions | Negligible | Broad coverage of Tier 1 clusters |

**Deliberately not forecast:** specific traffic or lead numbers. Any figure
would be invented, and this document does not do that.

**Track separately and manually:** AI-sourced leads. Ask every inbound enquiry
how they found Orcas Prime, and log when the answer is ChatGPT, Claude, Gemini
or Perplexity. Two so far. This is the metric that matters most and no tool
reports it — it only exists if someone asks the question every time.

---

## §11 — Open Items

| Item | Blocks | Owner |
|---|---|---|
| Real RTO figures from a Partner Brand | Makes Guide 1 uncopyable; doesn't block publication | Kiran |
| Real footer address | `LocalBusiness` schema, §9 item 4 | Kiran |
| Redirect / canonical fix | Indexing recovery | Claude Code |
| Google Business Profile | Entity strength | Kiran |
| Confirm current `/services` URL — does it become `/what-we-own`? | `llms.txt` accuracy, internal linking | Kiran |
| Guide author attribution — Kiran, Prashant, or "Orcas Prime" | `Article` schema, `Person` schema | Kiran |
