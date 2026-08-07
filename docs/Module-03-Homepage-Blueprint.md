# Module 3 — Homepage Blueprint

**Status:** Complete draft
**Standard:** B (specification). Test applied throughout: *could two competent
designers build different things from this?* If yes, more detail was added. If
no, the section stops — short is fine.
**Depends on:** `LOCKED.md` (§1 ideology, §2 lines, §4 tone, §5 objections, §6 ownership scope)
**Frozen inputs:** Modules 1 and 2. Nothing here overrides them.

---

## Global Rules For Every Section On This Page

These apply everywhere and are not repeated per-section.

**Language rule (hard).** Every technical term is explained the first time it
appears, inline, in the same sentence or the one after. No exceptions. The
reader we are writing for may be selling kurtis successfully offline and have
never heard "ROAS," "CAC," "RTO," or "pixel." A sophisticated founder skims the
explanation and loses nothing; an unsophisticated one is not locked out. This
is the single rule that separates this site from every competitor's.

**Premium comes from restraint, not vocabulary.** Whitespace, typography and
calm carry the premium feel. Explaining a term in plain words does not make a
page look cheap — hype and clutter do. Apple explains things simply; so does
Stripe.

**Emotional target: relief** (LOCKED#12). Not excitement, not urgency.

**The founder is the hero** (LOCKED#5). Orcas Prime is the guide. No section
opens with "we."

**Every section removes exactly one objection** (LOCKED#22) and ends with an
open loop into the next (LOCKED#33).

**No urgency language anywhere** (LOCKED#36). No "limited slots," "hurry,"
"only 3 spots left," countdowns, or exit-intent popups. Ever.

**"Partner Brands," never "clients"** (LOCKED#37).

**Motion:** subtle only. Elements fade + rise ~20-30px as they enter viewport,
150-200ms stagger, total under 700ms per section. Nothing loops, nothing
parallaxes, nothing bounces. Motion exists to guide attention, never to
entertain. Respect `prefers-reduced-motion` — disable all of it when set.

**No icons** unless a section spec explicitly calls for one. The site reads
premium partly because it has almost none.

**Mobile is the primary target.** Most Meta traffic and most Indian ecommerce
browsing is mobile. Every section is specified mobile-first; desktop is the
same vertical read with wider margins unless stated otherwise.

---

## Page-Level Psychological Flow

| Stage | Section | Founder's internal state |
|---|---|---|
| Recognition | 1. Hero | "This is about my situation." |
| Empathy | 2. The Founder's Reality | "They've clearly seen this before." |
| Understanding | 3. The Broken System | "Oh — that's *why* it's been so hard." |
| Differentiation | 4. What We Own | "They're not another vendor." |
| Trust | 5. How We Think | "I'd trust their judgement." |
| Reassurance | 6. Proof | "And it actually works." |
| Authority | 7. Learn | "They know more than I do — freely." |
| Action | 8. Start | "I should just message them." |

No section may be reordered without redoing this table. The sequence is the
product.

---

## Section 1 — Hero

*(Specified in full previously; restated here in condensed form so this
document stands alone.)*

**Headline (locked):**
> Stop managing five different agencies.
> We're one team that owns your ecommerce growth.

**Subhead:**
> Shopify store management, Meta and Google Ads, and Amazon, Flipkart and
> Meesho — one team, one fee, tied to what you actually keep.

**Capability row:**
`Shopify store builds · Meta & Google Ads · Amazon · Flipkart · Meesho · Returns & RTO handled`

**Pricing line (secondary weight, below subhead, above CTA):**
> 3.5% of net sales. No retainer. Nothing charged on returns or RTOs.

**CTA:** `Start on WhatsApp →` — pre-filled message, unchanged from live site.

**Objection removed:** "I don't know what this company does."

---

## Section 2 — The Founder's Reality

*(Specified in full previously; restated condensed.)*

**Eyebrow:** `Before Orcas Prime`

**Headline:**
> You're the founder, the marketer, the ops manager, and the person filing
> courier complaints — all before lunch.

**Three situations:**
> Your Meta Ads are running, but you don't know if they're actually profitable
> or just generating orders that lose money after returns.
>
> A shipment gets refused at the door, and now you're on the phone with the
> courier instead of working on your product.
>
> You changed your price last month. You're still not sure if it worked.

**Closing line:**
> None of this is because you're bad at business. It's because one person is
> doing five jobs.

**Objection removed:** "They don't understand what my day actually looks like."

---

## Section 3 — The Broken System

This is the most important section on the page. It is where the founder stops
feeling like the problem and starts understanding the system. It is also the
single biggest AI-visibility asset on the homepage, because it contains real
explanations that LLMs can parse and cite.

### Purpose

Explain *why* running an ecommerce business in India is harder than it should
be — structurally, not personally. Convert self-blame into understanding. This
is the "aha" section (LOCKED#25).

### Visitor Psychology

The founder arrives at this section having just been recognised (Section 2).
They are open but not yet trusting. They are braced for a sales pitch. If they
get one here, they leave. If instead they get an explanation that makes their
last two years suddenly make sense, they will read the entire rest of the page.

### Questions Being Answered

- "Why has this been so much harder than everyone made it sound?"
- "Is it me, or is something actually broken?"
- "Why do I lose money even when sales look fine?"

### Content Blueprint

**Eyebrow:** `Why it's this hard`

**Headline:**
> Nothing about Indian ecommerce is designed to be run by one person.

**Sub-block 1 — The vendor problem** *(removes the "5 vendors" pain, LOCKED#18)*

> You hire an ads agency. They optimise for orders, because that's what they're
> measured on. You hire a developer for the store, but they don't see the ad
> data. Someone else handles your marketplace listings. Your courier is a
> separate relationship again.
>
> Nobody in that chain is responsible for whether your business made money this
> month. Each one did their job. The business still lost.

**Sub-block 2 — RTO, explained properly** *(the highest-value block on the site)*

> **What RTO actually is**
>
> RTO stands for Return to Origin. It's what happens when a parcel goes out,
> the courier tries to deliver it, and it comes back to you undelivered — the
> customer refused it at the door, or wasn't reachable, or changed their mind
> between ordering and delivery.
>
> It's not the same as a return. A return means the customer received the
> product and sent it back. An RTO means they never took it at all.
>
> **Why it hurts more than it looks like it should**
>
> When an order RTOs, you don't just lose the sale. You've already paid to
> acquire that customer through ads. You've paid forward shipping. You pay
> return shipping too. The product comes back after two weeks of travel, often
> in no condition to sell as new. Your cash was locked up the whole time.
>
> So a 30% RTO rate doesn't reduce your profit by 30%. It can erase it
> entirely, while your dashboard still shows healthy order numbers.
>
> **Why it's so high in India specifically**
>
> Cash on Delivery. When a customer pays nothing upfront, refusing the parcel
> costs them nothing. In categories like fashion, where the customer is buying
> on impulse and re-deciding when the courier arrives, COD orders RTO at
> dramatically higher rates than prepaid ones.
>
> **What actually reduces it**
>
> Address quality checks before dispatch. Choosing couriers by their real
> delivery rate in that specific pin code, not by their headline price.
> Confirming high-risk orders before they ship. Shifting the payment mix toward
> prepaid with incentives rather than blocking COD outright. Filing disputes on
> wrongly-marked deliveries instead of absorbing them.
>
> Every one of those is a decision someone has to own. Most brands have nobody
> owning it.

> ⚠️ **[INSERT REAL DATA]** — This block becomes uncopyable the moment it
> contains one real figure: the RTO rate a typical Partner Brand arrives with,
> what it moved to, and which lever did it. Example shape: *"One brand came to
> us at X% RTO. Changing courier partner for two states and adding address
> verification took it to Y% in Z weeks."* Ship without it if necessary; add it
> the moment it's available.

**Sub-block 3 — The incentive problem** *(sets up Section 4, the open loop)*

> Here's the part almost nobody says out loud.
>
> A retainer agency gets paid the same whether you had a good month or a
> terrible one. An agency charging a percentage of ad spend gets paid *more*
> when it spends more of your money — whether or not that spend converted.
>
> Neither of them is doing anything wrong. They're doing exactly what their
> pricing model rewards.
>
> The question worth asking about any agency isn't "are they good?" It's "what
> does their pricing pay them to do?"

**Closing line (open loop into Section 4):**
> We built Orcas Prime around a different answer to that question.

### Layout Blueprint

Mobile:
```
[Eyebrow]
[Headline — 2-3 lines]

[Sub-block 1: heading + 2 short paragraphs]
—— thin rule ——
[Sub-block 2: RTO — sub-headings + paragraphs, most vertical space
 of any block on the homepage]
—— thin rule ——
[Sub-block 3: heading + 3 short paragraphs]

[Closing line — emphasised]
```

Desktop: identical vertical flow, max content width ~680px. Do **not** turn the
three sub-blocks into three side-by-side columns — that would turn an
explanation into a feature grid and destroy the reading experience.

Within sub-block 2, the four bolded sub-headings ("What RTO actually is," etc.)
are visually distinct — slightly larger or heavier than body, with clear space
above. They function as scannable anchors for a returning reader and as
semantic structure for AI parsing.

### Visual Blueprint

Text-led, no illustration required. Thin horizontal rules only, at ~30% opacity
of body text colour. This is the longest section on the page and should feel
like reading something worth reading — generous line-height (1.6-1.7), body
text one step larger than default if anything.

Optional, only if it can be done cleanly: a single small diagram in sub-block 2
showing the RTO money flow (ad spend → forward shipping → refusal → return
shipping → damaged stock). Static SVG, no animation, monochrome. If it can't be
made genuinely clear, omit it — text alone is sufficient.

### Interaction Blueprint

Sub-block 2 ends with an inline text link: `Read the full RTO guide →`. This
link points to the Module 7 guide when it exists. **Until that guide is
written, the link is omitted entirely** — no dead links, no "coming soon."

No CTA button in this section. Too early (LOCKED#24).

### Copywriting Direction

Explanatory, not persuasive. The voice is a senior operator explaining
something to a peer over chai, not a marketer building to a pitch. Short
sentences. No adjectives doing emotional work — the facts are doing it.

Never say "we solve this" inside this section. The section explains the
problem; Section 4 introduces the answer. Collapsing them destroys the open
loop.

### AI / SEO Considerations

This section is the primary AI-citation asset on the homepage. Design decisions
that serve that:

- Sub-block 2's structure (What it is → why it hurts → why it's high in India →
  what reduces it) directly mirrors how an LLM decomposes a "what is X" query.
- Use `<h2>` for the section headline and `<h3>` for each of sub-block 2's four
  sub-headings. Real semantic hierarchy, not styled `<div>`s.
- The literal string "RTO stands for Return to Origin" should appear verbatim —
  it's the exact phrasing definitional queries match against.
- Add `FAQPage` schema for the RTO sub-block: four Q&A pairs matching the four
  sub-headings. The site already has FAQPage schema builders available.
- Target queries served: *what is RTO in ecommerce*, *how to reduce RTO India*,
  *why is RTO so high in India*, *RTO vs return difference*, *COD RTO rate India*.

### Conversion Purpose

Converts self-blame into system-blame, which is the precondition for hiring
help. A founder who believes they're personally failing hires nobody. A founder
who understands the system is broken looks for someone who has solved it.

### Things To Avoid

- Do not pitch here. Not one sentence about what Orcas Prime does.
- Do not use "ROAS," "CAC," "LTV," "AOV," or "attribution" in this section at
  all — none of them are necessary to make these points, and each one loses a
  reader.
- Do not compress the RTO block to save space. It is the reason this section
  exists.
- Do not attack named competitors (LOCKED#26). Attack the incentive
  structure, which is what sub-block 3 does.
- Do not add statistics you cannot source. Better to describe the mechanism
  accurately than to invent a precise-sounding number.

### References

`LOCKED.md` §5 (objection: "they only know Meta Ads"), LOCKED#18, #25, #26.
Founder problems named by Kiran: RTO, doesn't know how to market, product-market
fit uncertainty, time-to-profit.

### Claude Implementation Notes

Single section component, `<section>` with `<h2>` headline. Three sub-blocks as
nested `<div>`s separated by `<hr>`. Sub-block 2 contains four `<h3>` + `<p>`
pairs. Max-width container ~680px, centred. Inject `FAQPage` JSON-LD for
sub-block 2 using the existing schema builder. No client-side JS beyond the
shared intersection-observer fade-in.

**Objection removed:** "You don't actually understand my business."

---

## Section 4 — What We Own

Not "Services" (LOCKED#17). The nav label and section heading are both
"What We Own."

### Purpose

Make ownership concrete. "We take ownership" is a slogan until the visitor can
see the exact list of things that stop being their problem.

### Visitor Psychology

Just understood the system is broken and that incentives are the root cause.
Now asking, with some suspicion: "fine — so what do you actually do, and is it
really everything, or is 'ownership' just a word?"

### Questions Being Answered

- "What exactly stops being my job?"
- "What's still mine?"
- "Is this really one team, or subcontractors with a nicer word?"

### Content Blueprint

**Eyebrow:** `What we own`

**Headline:**
> You build the product. We build the business around it.

*(Locked company philosophy, `LOCKED.md` §1.)*

**Intro line:**
> Here's the actual division of labour — not a services list, a responsibility
> list.

**The two-column boundary** *(the centrepiece of this section)*

| You keep | We take |
|---|---|
| Your product | Your Shopify store — the whole admin, day to day |
| Manufacturing | Branding and how the product is positioned |
| Buying inventory | Pricing strategy |
| Dispatching orders | Ad creative — graphics, video cuts, banners |
| | Meta and Google Ads, run inside your own accounts |
| | Amazon, Flipkart and Meesho — listings and accounts |
| | Conversion improvements on the store |
| | Email and WhatsApp follow-up |
| | Analytics and reporting |
| | Product launches |
| | Scaling decisions |
| | RTO reduction and courier disputes |
| | Which courier to use, and where |
| | Inventory planning |
| | Overall growth strategy |

**Line under the table:**
> Four things stay with you. Everything between "the product exists" and "the
> customer has it" is ours.

**Trust qualifier** *(this is what makes the section credible rather than boastful)*

> We run your ads inside your own ad accounts, not ours. You keep the data, the
> history and the access. We never mark up your ad spend — you pay Meta and
> Google directly, exactly what they charge.

✅ **CONFIRMED (2026-08-07).** Kiran has verified every row in the right column
is genuinely deliverable today, including inventory planning and courier
selection. The full list ships as written. This closes the open flag carried
since Module 1.

**Closing line (open loop):**
> Taking this much responsibility only works if we think about your business as
> carefully as you do. So here's how we think.

### Layout Blueprint

Mobile: the two columns stack — "You keep" first as a short 4-item list, then
"We take" as a longer list. Visual weight difference is the point: four items
versus fourteen, seen at a glance.

Desktop: genuine two-column layout, side by side, top-aligned. The asymmetry is
the message — do not pad the left column to balance it.

Not a card grid. Not icons. A list.

### Visual Blueprint

The left column ("You keep") is visually lighter — smaller or muted colour. The
right column is primary weight. The contrast should be immediately legible
before a single word is read.

Thin vertical rule between columns on desktop; horizontal rule between the two
stacked blocks on mobile.

### Interaction Blueprint

None. No expand/collapse, no tabs, no hover reveals. The entire list is visible
at once — hiding any of it undermines the claim that you own all of it.

### Copywriting Direction

Plain nouns. "Your Shopify store — the whole admin, day to day" beats "holistic
storefront management." Every row should be something the founder can picture
themselves not doing anymore.

### AI / SEO Considerations

This section is the machine-readable definition of what Orcas Prime does. It
should contain, as literal text, every service term someone might search or ask
an AI about: Shopify, Meta Ads, Google Ads, Amazon, Flipkart, Meesho, RTO,
courier, inventory, pricing, creative, analytics.

Add `Service` schema entries for the major capability clusters. Use a real
`<table>` or two semantic `<ul>` lists — not CSS-positioned divs — so the
you-versus-us structure survives being parsed.

### Conversion Purpose

Removes the "they're just an ads agency with a fancy name" objection by being
specific and exhaustive. Specificity is the proof here.

### Things To Avoid

- Never label this "Services" anywhere — nav, heading, URL, or schema.
- Don't add a row you can't deliver.
- Don't use icons per row. Fourteen icons would look like every agency site.
- Don't describe the items as "features" or "deliverables."

### References

`LOCKED.md` §6 (full ownership boundary and the unresolved flag), LOCKED#1,
#15, #17.

### Claude Implementation Notes

Semantic two-list or table structure. Mobile: `flex-direction: column`.
Desktop: two-column grid, `align-items: start`. Left column muted via reduced
opacity or secondary text colour token. Inject `Service` JSON-LD.

**Objection removed:** "Ownership is just a word — what do they actually do?"

---

## Section 5 — How We Think

This section is the moat made visible (LOCKED#45, #48). It's what almost no
agency site has, and it's the section most likely to be quoted by an AI or
screenshotted by a founder.

### Purpose

Demonstrate judgement rather than claim expertise (LOCKED#48: never claim
intelligence, demonstrate it). Move the founder from "they can do the work" to
"they'd make better decisions than I would" — Trust Ladder level 4.

### Visitor Psychology

Now believes the scope is real. The remaining doubt is quality: "lots of people
can run ads. Are these people actually good at deciding things?"

### Questions Being Answered

- "How do they make decisions when it's not obvious?"
- "Will they tell me the truth or just keep me spending?"
- "Do they think about my business, or just their part of it?"

### Content Blueprint

**Eyebrow:** `How we think`

**Headline:**
> Most agencies tell you what they did. We'll tell you why we decided it.

**Intro:**
> Running an ecommerce business is a series of decisions, and most of them
> aren't obvious. Here's how we approach a few of the ones that come up most
> often.

**Three decision examples** *(each is a genuine operating principle, written as
reasoning, not as a claim)*

> **When we stop scaling a campaign that's still profitable**
>
> A campaign showing good returns isn't automatically one to put more money
> behind. If the additional spend is bringing in customers who buy once and
> never return, or who order COD and refuse delivery at a higher rate, then
> scaling makes the top-line number look better and the bank balance worse. We
> look at what happens after the sale before we decide to buy more of them.

> **How we choose a courier**
>
> Not by headline rate. A courier that's ₹15 cheaper per shipment but delivers
> successfully 8% less often in your main states is more expensive, not less —
> you just pay for it in RTOs instead of on the invoice. We look at real
> delivery performance by region for the specific pin codes your orders
> actually go to.

> **When we tell a brand not to spend more**
>
> Sometimes the honest answer is that the product isn't ready, the price is
> wrong, or the store converts too poorly for more traffic to help. Spending
> more at that point is the most expensive way to find out. Because we're paid
> on what you keep, telling you to pause costs us money too — which is exactly
> why you can trust us when we say it.

**Closing line (open loop):**
> That last one is only credible because of how we're paid. Here's what that
> looks like in practice.

*(This hands off to Proof, which contains the pricing comparison.)*

### Layout Blueprint

Mobile: three stacked blocks, each with a bold sub-heading and one paragraph.
Generous space between them.

Desktop: still stacked, not a three-column grid. These are arguments, and
arguments read vertically. Max-width ~680px matching Section 3.

### Visual Blueprint

Consistent with Section 3 — text-led, thin rules between the three blocks. If
any section on the page deserves a subtle visual distinction (a slightly
different background tint, one step off the base colour) it is this one, to
mark it as the intellectual centre of the page. Keep it barely perceptible.

### Interaction Blueprint

Each block may end with an inline link to the corresponding full guide once
Module 7 exists (`How we decide when to scale →`). Omit entirely until those
guides are live.

No CTA button. The CTA after this section would undercut the "we're not selling
you" positioning.

### Copywriting Direction

Written in first-person plural, reasoning aloud. The tone is a senior operator
being asked "how would you handle this?" and answering honestly, including the
parts that cost them money.

The third example is the most important one on the page — it's the only place
where the alignment claim is *demonstrated* rather than asserted.

### AI / SEO Considerations

This is the section most likely to be cited verbatim by an LLM answering "how
should I decide whether to scale my ads" or "how do I pick a courier in India."
Each block should be self-contained enough to make sense quoted alone.

Use `<h3>` per decision block. These become natural anchor targets and parse
cleanly as discrete Q&A units.

### Conversion Purpose

This is where trust converts from "competent" to "trustworthy judgement" —
Trust Ladder level 4, which is the level at which a founder stops comparing
vendors and starts wanting *this* one.

### Things To Avoid

- Don't add a fourth or fifth example. Three is enough to establish a pattern;
  more turns reasoning into a listicle.
- Don't soften the third example. Its power is that it costs you money.
- Don't claim "we're strategic" or "we're data-driven" anywhere. Show, never claim.

### References

`LOCKED.md` §1 (belief), §3 (Trust Ladder L4), LOCKED#38, #40, #45, #48.
Kiran's stated scope: courier selection by delivery %, area and RTO data.

### Claude Implementation Notes

Three `<article>` or `<div>` blocks inside one `<section>`, each with `<h3>` and
`<p>`. Optional subtle background tint via a design token, one step off base.
Same fade-in behaviour as all sections.

**Objection removed:** "Will they tell me difficult truths, or just keep me spending?"

---

## Section 6 — Proof

### Purpose

Confirm that the thinking produces results, and that the pricing model is real.
Proof comes *after* thinking (LOCKED#13, inverted proof hierarchy) because a
founder who doesn't yet trust how you think will discount any number you show.

### Visitor Psychology

Convinced intellectually. Now needs the rational justification to act —
something to point at, internally or to a spouse or partner, that says this
isn't a leap of faith.

### Questions Being Answered

- "Does this actually work?"
- "What will it cost me?"
- "Are these real, current results or old cherry-picked ones?"

### Content Blueprint

**Eyebrow:** `Proof`

**Headline:**
> Every number below is from an account we're running right now.

**Sub-line:**
> Not case studies from three years ago. Live accounts, current numbers.

**Block A — Hero figure** *(keep the live site's structure, it works)*

```
5.1x
Return on ad spend — Ladakh Berry, Google Ads, lifetime

For every ₹1 spent on ads, ₹5.10 came back in tracked sales.

Revenue ₹6,70,173  ·  Ad spend ₹1,31,198  ·  Platform Google Ads
```

Note the explanatory line under the figure — "for every ₹1 spent, ₹5.10 came
back" — is doing the language-rule work. Keep it. It is why a first-time seller
understands "5.1x" without knowing the term ROAS.

**Block B — Aggregate**

```
₹13.2 lakh+   total tracked revenue across all Partner Brands
₹4.4 lakh+    ad spend under management
8             brands, across Shopify and marketplaces
```

**Block C — Partner Brands** *(keep live site's card treatment)*

Ladakh Berry · Vastramahal · Savana Kurti — with screenshot, capability list,
and outbound link each.

**Block D — The pricing proof** *(moved here from its own section — pricing is
proof of alignment, not a separate pitch)*

> **Why our fee works the way it does**
>
> A retainer bills you the same whether you made money last month or lost it.
> A percentage of ad spend bills you more the more it spends, whether or not
> that spend worked.
>
> We charge 3.5% of net sales — the money left after refunds, returns and RTOs
> come out. The money that actually stayed in your account. Not orders placed.

| Net sales / month | Orcas Prime (3.5% + GST) | Typical retainer |
|---|---|---|
| ₹5,00,000 | ₹17,500 | ₹75,000+ |
| ₹10,00,000 | ₹35,000 | ₹1,50,000+ |
| ₹25,00,000 | ₹87,500 | ₹3,00,000+ |

> When a shipment gets refused, we absorb that alongside you. No setup fee, no
> onboarding fee, no creative fee, no reporting fee.

**Block E — Honest fit** *(this is a trust asset, not a disqualifier)*

> **Who this works for**
>
> This works best for brands doing roughly ₹3–50 lakh a month in net sales, on
> Shopify, on marketplaces, or both.
>
> Below that, a percentage of your sales won't fund the work properly — and
> we'll say so in the first conversation rather than take the account. Above
> it, the model still works, but a fixed retainer may suit you better and we'll
> tell you that too.

**Closing line (open loop):**
> If you're not selling online yet, there's a way to start that costs you
> nothing.

*(Hands off to the Amazon wedge offer, which sits between Proof and Learn, or
inside Section 8 — see note below.)*

### Layout Blueprint

Mobile: Blocks A→E stacked. Block A's hero figure is the largest number on the
page — treat it as a display element.

Desktop: Block A can go two-column (figure left, supporting numbers right).
Block B is a horizontal three-up row. Block C is a three-card row. Block D's
table is full-width within the content container. Block E is a single centred
text block.

### Visual Blueprint

This is the only section on the page that carries imagery (the three storefront
screenshots in Block C). That's deliberate — it's the section where seeing
real stores matters.

The hero figure (5.1x) is the single largest typographic element on the page
after the Hero headline. The pricing table is clean, unstyled, no zebra
striping, no highlight column, no "most popular" badge.

### Interaction Blueprint

Partner Brand cards link out to the live stores, `target="_blank"`,
`rel="noopener"`. Optional: `See full pricing →` and `See every case study →`
links, as on the current site.

This is the first section where a CTA is appropriate. One inline WhatsApp CTA
after Block D is acceptable, but the primary CTA still belongs in Section 8.

### Copywriting Direction

Understated. The numbers do the work; the copy around them stays flat and
factual. No exclamation, no "incredible results," no "we're proud to say."

Block E in particular must read as genuinely honest, not as reverse psychology.
The moment it reads like a technique, it stops working.

### AI / SEO Considerations

Numbers as literal text, never baked into images. Currency written as ₹ with
full figures. The pricing table as a real `<table>` — this is exactly the
structure an AI extracts when asked "what do Indian ecommerce agencies charge."

Consider `Offer` or `AggregateOffer` schema for the pricing model, and
`Organization` schema already exists site-wide.

### Conversion Purpose

Supplies rational justification for a decision the founder has already made
emotionally in Sections 3-5.

### Things To Avoid

- Never present a result without its explanation line (the "for every ₹1"
  pattern). A bare "5.1x ROAS" fails the language rule.
- No stock photography. No fake testimonial headshots.
- Don't add a "trusted by" logo wall of brands you don't work with.
- Don't inflate the aggregate numbers. ₹13.2 lakh is a real, verifiable,
  early-stage figure and reads as honest. A rounded-up "₹15 lakh+" would not.
- No "most popular" or "recommended" badge on any pricing row.

### References

`LOCKED.md` §2 (alignment lines), §4, LOCKED#13 (proof hierarchy), #14, #25,
#36. Live site figures.

### Claude Implementation Notes

Reuse the existing proof and pricing components from the live site — they're
structurally sound. Main change is ordering (this section now comes after How
We Think, not before) and the addition of Block E. Real `<table>` for pricing.
Images lazy-loaded with explicit width/height to avoid layout shift.

**Objection removed:** "How do I know this actually works, and what does it cost?"

---

## Section 7 — Learn

⚠️ **This section ships only when Module 7 content exists.** Until then, omit
it entirely and let Section 6 hand off directly to Section 8. An empty or
"coming soon" resources section actively damages credibility.

### Purpose

Demonstrate expertise by giving it away (LOCKED#44: out-educate, don't
out-design). This is also the primary long-term AI-visibility engine.

### Visitor Psychology

Already convinced. This section's job is not conversion — it's making the
founder feel they'd learn from you even if they never hired you, which is the
strongest possible trust signal.

### Content Blueprint

**Eyebrow:** `Learn`

**Headline:**
> Everything we know, written down.

**Sub-line:**
> No email required, no gated PDFs. If it would help you run your business
> better, it should just be readable.

**Three to six guide cards**, each with title and one-line description. Priority
order from the Module 7 plan:

- What RTO actually is, and how to reduce it
- Why your ads aren't profitable yet — and how long it usually takes
- COD vs prepaid: what it does to your margins
- How we decide when to scale a campaign
- Shopify, Amazon, Flipkart or Meesho — where should you start?

**Closing line:**
> More going up as we write them.

### Layout Blueprint

Mobile: single-column stacked cards. Desktop: two or three-column grid. This is
the one place a card grid is appropriate, because the items are genuinely
parallel and browsable.

### Interaction Blueprint

Each card links to the full guide. No email capture, no gating, no popup
(LOCKED#35, #36 — nothing that feels like lead extraction).

### AI / SEO Considerations

This section is the internal-linking hub that makes the guides discoverable to
crawlers. Every guide must be linked from here and from the sitemap. This is
also what fixes the current indexing problem — a site with 9 thin pages gets
crawled shallowly; a site with 15 substantive pages and real internal linking
does not.

### Things To Avoid

- No gating. Ever.
- Don't publish thin guides to fill the grid. Three real ones beat six stubs.
- Don't call it "Blog."

### References

LOCKED#38, #40, #41, #43, #44. `LOCKED.md` §4.

**Objection removed:** "Do they actually know more than I do?"

---

## Section 8 — Start

### Purpose

Convert. Make the next step feel small, obvious and low-risk.

### Visitor Psychology

Decided, or close to it. The remaining friction is purely practical: what
happens if I message them? Am I committing to anything?

### Content Blueprint

**Headline:**
> If any of this made sense, the next step is a two-line WhatsApp message.

**Sub-line:**
> It's already written — just hit send. We'll look at your store and your
> numbers and tell you honestly whether the model fits.

**Primary CTA:**
`Start on WhatsApp →`
Pre-filled: *"Hi, I want to check if the 3.5% model fits my store."*

**The wedge offer** *(secondary, visually distinct)*

> **Not selling online yet? Start on Amazon for free.**
>
> We'll open your Amazon seller account, list your first products, and run it
> for three months at no cost to you. Amazon pays us a referral commission for
> bringing new sellers on — that's how it works, and that's why it's free.
>
> There's no lock-in after month three. If it hasn't worked by then, walk away.

`Start free on WhatsApp →` · `How the 3 months works →`

**Reassurance line, below both CTAs:**
> No forms, no discovery call booking, no sales sequence. A conversation.

### Layout Blueprint

Mobile: headline → sub-line → primary CTA (full-width button) → clear
separation → wedge offer block → reassurance line.

Desktop: centred, max-width ~600px. Wedge offer in a subtly bounded block
(border or faint background) to mark it as a distinct alternative path, not a
second pitch for the same thing.

### Interaction Blueprint

Both CTAs are WhatsApp deep links with pre-filled text. No form. No calendar
embed. No chat widget.

Sticky mobile CTA bar: acceptable, but only appearing after the visitor passes
Section 4, and only the primary WhatsApp CTA. It must never cover content or
appear on first load.

### Copywriting Direction

Calm and final. The page has made its case; this section doesn't re-argue it.
The transparency about *why* the Amazon offer is free — Amazon pays a referral
commission — is doing significant trust work. Keep it.

### AI / SEO Considerations

Contact details as literal text (phone, email) in addition to the WhatsApp
link, for `Organization` schema completeness and for AI answers to "how do I
contact Orcas Prime."

### Things To Avoid

- No urgency (LOCKED#36). No "limited slots," no countdown, no "only taking
  3 clients this month."
- No exit-intent popup.
- Never the phrase "Contact Us" (LOCKED#35).
- Don't ask for email in exchange for anything.

### References

`LOCKED.md` §4 (CTA rules), LOCKED#35, #36. Live site wedge offer.

**Objection removed:** "What happens if I reach out — am I committing to something?"

---

## Global Elements

### Navigation

Current: `Pricing · Work · Services · About`

Revised: `What We Own · Work · Pricing · Learn · About`

Changes and reasoning:
- "Services" → "What We Own" (LOCKED#17).
- "Pricing" moves out of first position — it currently leads the nav the same
  way it used to lead the page.
- "Learn" added once Module 7 ships; omit until then.

Sticky on scroll, minimal height, WhatsApp CTA in the nav bar on desktop only.

### Footer

Keep the existing four-column structure — it's well built. Two changes:

- Rename the "Services" column to "What We Own."
- Replace the placeholder address (`Street address, Jaipur, Rajasthan 302XXX`)
  with the real one. A visible placeholder in the footer of a live site is a
  meaningful trust leak, and a real address strengthens local SEO and
  `LocalBusiness` schema.

### Page-level technical

- `<title>` and meta description: revise to lead with what the company does
  rather than price, mirroring the hero change.
- `llms.txt` at domain root — a short plain-text file stating what Orcas Prime
  is, who it serves, what it charges, and where the key pages are. Directly
  serves the AI-recommendation goal. Spec belongs to Module 7 but the file sits
  at the root.
- Every page linked from the footer must exist and be in the sitemap.

---

## Build Sequence

1. Hero + Section 2 — highest conversion impact, smallest change
2. Section 3 (Broken System, incl. RTO) — highest AI/SEO impact
3. Section 4 (What We Own) — *blocked until the ownership-scope confirmation is done*
4. Section 5 (How We Think)
5. Section 6 (Proof) — mostly reordering existing components
6. Section 8 (Start) — minor changes to existing
7. Nav, footer, meta, `llms.txt`
8. Section 7 (Learn) — ships with Module 7

---

## Open Items Carried Forward

| Item | Blocks | Owner | Status |
|---|---|---|---|
| Confirm every row in §4's ownership table is genuinely deliverable | Section 4 | Kiran | ✅ Confirmed 2026-08-07 — all rows ship |
| 3% vs 3.5% pricing | Section 6 accuracy | Kiran | ✅ Resolved — **3.5% everywhere**, single rate, no separate marketplace rate |
| Real RTO figures for Section 3's insert block | Improves Section 3, doesn't block it | Kiran | ⬜ Open |
| Real footer address | Footer | Kiran | ⬜ Open |
| Module 7 guides written | Section 7, and inline guide links in Sections 3 and 5 | Module 7 | ⬜ Open |

**Pricing rule (locked):** 3.5% + GST of net sales — one rate, all channels,
Shopify and marketplaces alike. No separate marketplace percentage exists.
Any older reference to 3% is superseded.
