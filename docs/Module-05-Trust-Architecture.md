# Module 5 — Trust Architecture

**Status:** Complete draft
**Standard:** B (specification)
**Depends on:** `LOCKED.md` §3 (Trust Ladder), §5 (objections), LOCKED#13, #38, #46, #48
**Feeds:** Module 3 Section 6 (Proof), the Work page, every case study, Module 7 guides

---

## §1 — The Actual Trust Problem

Most trust-architecture documents assume a company with ten years of logos.
Orcas Prime has eight Partner Brands, ₹13.2 lakh in tracked revenue, and ₹4.4
lakh in managed ad spend. Those are real, current, verifiable numbers — and
they are small.

**This is the constraint the entire module is built around, and it is not a
weakness if handled correctly.**

Two ways to respond to a small proof base. The first is to inflate — round up,
add a logo wall of brands you've merely spoken to, buy testimonials, say
"trusted by hundreds." Every founder reading has seen this and can smell it,
and the moment they suspect it, everything else on the site becomes suspect too.

The second is to be so specific and so verifiable that smallness reads as
honesty. "₹13,20,000 tracked across 8 brands" is a stranger, more credible
sentence than "₹5 Cr+ managed" — because nobody inventing numbers invents that
one.

**The rule for this module:** every proof claim on the site must be checkable by
a suspicious founder in under two minutes. Live store links. Named brands.
Exact figures. If it can't survive that, it doesn't ship.

This directly implements LOCKED#38 — prove thinking, not experience — because
thinking is the one asset that doesn't require scale.

---

## §2 — The Proof Hierarchy

Locked as LOCKED#13, inverted from how every agency does it. Ordered by what
actually persuades a founder who doesn't know you, strongest first.

| # | Layer | Why it ranks here | Where it lives |
|---|---|---|---|
| 1 | **Thinking** | The only proof that works before you have scale. Cannot be faked by a competitor without actually having judgement. | Module 3 §5, all Module 7 guides |
| 2 | **Business model** | Structural, not claimed. 3.5% of net sales is verifiable arithmetic — the alignment isn't a promise, it's a mechanism. | Module 3 §6 Block D, Pricing page |
| 3 | **Current results** | Live accounts, current numbers. Weaker than thinking because every agency shows numbers — but strong when specific and checkable. | Module 3 §6 Blocks A-B |
| 4 | **Founder credibility** | Real named people with traceable history. Matters more for a young company than an old one. | About page, Module 3 §6 optional |
| 5 | **Case studies** | Strong but slow — requires the reader to invest attention. | Work page |
| 6 | **Testimonials** | Ranked last deliberately. Every agency has them, none are disbelieved less for having them. | Work page, sparingly |

**The ordering rule:** no page may present layer 3 before layers 1 and 2. A
number shown to someone who doesn't yet trust your judgement gets discounted to
nothing. This is why Module 3 puts How We Think before Proof, reversing the
live site.

---

## §3 — The Growth Decision Log

The moat mechanism (LOCKED#46). This is the single most differentiating
artifact available to Orcas Prime and it currently exists nowhere.

### What it is

Every meaningful recommendation made for a Partner Brand, documented at the
time it's made — not retrofitted after the outcome is known. Prediction
recorded *before* result. That's what makes it credible rather than
self-congratulatory.

### Internal format (the operating record)

```
Decision #[n]
Partner Brand:     [name]
Date:              [date]
Situation:         [2-3 lines — what was happening]
Options considered: [what else was on the table]
Recommendation:    [what we advised]
Reasoning:         [why this over the alternatives]
Expected outcome:  [specific, measurable, stated before acting]
Result:            [filled in later — including when it was wrong]
What we learned:   [what changes for the next brand]
```

Kept for every Partner Brand, in Notion or a shared doc. This is an operations
requirement, not a marketing one — the marketing value is a by-product.

### Public format (what goes on the site)

Anonymised where the brand hasn't consented, named where it has. Shorter:

```
THE SITUATION
A fashion brand doing ~₹4L/month was running profitably on Meta
at 3.1x, and wanted to double the budget.

WHAT WE RECOMMENDED
Hold the budget flat for three weeks and fix the RTO rate first.

WHY
Their COD share was 78% and RTO was running near 32%. At that
rate, additional spend would have bought more refused deliveries,
not more revenue. The reported ROAS was real; the retained
revenue behind it was not.

WHAT WE EXPECTED
RTO down to the low 20s within a month, then scale.

WHAT HAPPENED
[result]

WHAT WE'D DO DIFFERENTLY
[honest note — include this even when it went well]
```

### The rule that makes this work

**Publish at least one decision that went wrong.** A log with a 100% success
rate is marketing and reads as such. A log containing "we were wrong about
this, here's what we missed" is the most trust-generating artifact on the
entire site, and no competitor will copy it because it requires being willing
to look fallible.

This is LOCKED#48 — never claim intelligence, demonstrate it — in its
strongest possible form.

### Placement

Three to five entries on the Work page. One woven into Module 3 §5 once real
ones exist. Each is also a Module 7 content asset — a decision log entry and a
guide are close to the same document.

⚠️ **Blocked on Kiran.** This module can specify the format; only Kiran can
supply the decisions. Nothing else in the trust architecture is as high-value
per hour spent.

---

## §4 — Case Study Format

For the Work page. Fixed structure so every case study is comparable and none
becomes a brochure.

```
[Brand name] — [one-line description of what they sell]

WHERE THEY STARTED
[Honest starting position. Include what was broken.
 If they came in with no online presence, say that.]

WHAT WE TOOK OVER
[Which of the 14 ownership items applied to this brand.
 Not all of them for every brand — specificity beats completeness.]

THE DECISIONS THAT MATTERED
[2-3 real decisions, in Growth Decision Log short form.
 This is the section that differentiates this from every other
 agency case study, which jump straight from problem to result.]

WHERE THEY ARE NOW
[Current numbers. Exact figures, current period, stated period length.]

WHAT'S STILL IN PROGRESS
[Non-negotiable section. Every real engagement has open problems.
 Omitting this is what makes case studies read as fiction.]

[Live store link]
```

**Length:** 400-700 words. Long enough to show reasoning, short enough to be read.

**Never include:** stock photography, invented quotes, "we increased revenue by
300%" without the base number, before/after screenshots without dates.

**Available now:** Ladakh Berry (strongest — 5.1x, ₹6.7L revenue on ₹1.31L
spend), Vastramahal, Savana Kurti. Three real case studies is enough. Do not
pad to five.

---

## §5 — Testimonials

Ranked last in the hierarchy, and treated accordingly — present but never
load-bearing.

### Collection prompt

Generic asks produce generic quotes. Ask Partner Brand founders these instead:

- "What were you worried about before you started with us?"
- "Was there a moment you realised this was working differently than you expected?"
- "What do you not have to think about anymore?"
- "What would you tell a founder who's considering us but unsure?"

The second and third questions produce quotes that reference *relief* — the
locked emotional target (LOCKED#12) — rather than "great service, highly
recommended."

### Display rules

- Full name, brand name, and link to their live store. Anonymous testimonials
  are worth less than none.
- Real photo or no photo. Never a stock headshot or an avatar illustration.
- Maximum four on the Work page, one on the homepage if any.
- Never a carousel. Static, stacked.
- Never a five-star graphic. This isn't a product listing.

---

## §6 — Founder Credibility

Disproportionately important for a young company — the founders *are* the track
record when the company doesn't have one yet.

### What goes on the About page

**Kiran Singh** — B.Tech, Chemical Engineering, SVNIT Surat. Previously
Performance Marketing Specialist at Shopdeck in Bengaluru, running Google Ads
for roughly 25 ecommerce sellers.

**Prashant Sharma** — co-founder. *(Background to be supplied by Kiran.)*

**Why this is stated plainly and not dressed up:** "managed Google Ads for ~25
sellers at Shopdeck" is a specific, checkable, unglamorous fact. It's more
persuasive than "10+ years of digital marketing excellence" precisely because
it's modest and precise. It also explains *why* the ownership model exists —
someone who has run ads for 25 sellers has watched the vendor-fragmentation
problem repeatedly.

### Rules

- Real photos, real names, real LinkedIn links.
- Jaipur stated openly. Location transparency is a trust signal in Indian B2B,
  not a liability.
- No "visionary," "passionate," "results-driven."
- No invented advisory boards. Team size is not stated and does not need to be —
  see §7.

---

## §7 — Objection → Answer Map

From `LOCKED.md` §5, extended with where each objection is actually resolved.
LOCKED#22 requires every homepage section to remove exactly one objection —
this is the audit table for that.

| Objection | Answered by | Where |
|---|---|---|
| "I don't know what this company does" | Plain-language capability statement | M3 §1 Hero |
| "They don't understand my day" | Three specific founder situations | M3 §2 |
| "You don't understand my business" | System explanation + RTO depth | M3 §3 |
| "Ownership is just a word" | The 14-item ownership table | M3 §4 |
| "Will they tell me hard truths or keep me spending?" | "When we tell a brand not to spend more" | M3 §5 |
| "Agencies don't care" | 3.5% of net sales — structural alignment | M3 §6 Block D |
| "They'll push me to spend more because they earn more" | *"Your business should never grow at our expense"* | M3 §6, Pricing page |
| "Does this actually work?" | Live accounts, current figures, linked stores | M3 §6 Blocks A-C |
| "They only know Meta Ads" | Full ownership scope | M3 §4 |
| "They'll disappear after onboarding" | Growth Decision Log — ongoing documented judgement | Work page |
| "Am I too small / too big?" | Honest fit block, ₹3-50L stated | M3 §6 Block E |
| "What am I committing to?" | "No forms, no discovery call, a conversation" | M3 §8 |
| "What if it doesn't work?" | Amazon wedge: three months free, no lock-in | M3 §8 |

**Unaddressed objections — flagged, not yet resolved:**

- *"What happens if I want to leave?"* — no exit/notice terms stated anywhere.
  Needs a plain-language answer, likely on the Pricing page. See §10.
- *"Who actually works on my account?"* — worth answering in terms of *how the
  account is run*, not headcount. Team size is not disclosed and doesn't need
  to be. The useful answer describes the working relationship: a named point of
  contact, who makes decisions, how often the founder hears from us, and what
  the response expectation is. That answers the real question — "will I be
  passed around or ignored?" — without publishing an org chart.

---

## §8 — Risk Reversal Without Desperation

LOCKED#36 forbids urgency and desperation. But risk reversal is still
required — the founder needs a reason that acting is safe. The distinction:

**Desperate risk reversal** (never): money-back guarantees with conditions,
"cancel anytime!!", limited slots, free audits used as lead bait, discounts for
signing this week.

**Confident risk reversal** (use): the mechanism itself is the guarantee.

Three that exist naturally in the business and need no invention:

1. **No retainer.** If sales are zero, the fee is zero. Stated as fact, not as a promise.
2. **Nothing charged on returns or RTOs.** The fee is on net sales, so a refused delivery costs Orcas Prime too.
3. **Three months free on Amazon, no lock-in.** Already live. The transparency about *why* it's free — Amazon pays a referral commission — is what makes it credible rather than suspicious.

**Rule:** state each as a structural fact in flat language. "We charge 3.5% of
net sales" is more reassuring than "we only win when you win!!" — the first is
a term, the second is a slogan.

---

## §9 — Trust Signals: Add / Never

**Add:**

| Signal | Why |
|---|---|
| Live links to every Partner Brand store | Instant verifiability. The strongest signal available. |
| Real footer address (replacing `302XXX`) | A placeholder address on a live site is an active trust leak |
| Named founders with photos and LinkedIn | Two-person company — hiding it is worse than stating it |
| Exact unrounded figures | ₹6,70,173 is credible in a way ₹6.7L+ is not |
| Stated period on every metric | "Lifetime" or "last 90 days" — a number without a window is unreadable |
| The one decision that went wrong | The highest-trust artifact on the site |
| Honest fit block (who this isn't for) | Turning business away is the strongest possible credibility signal |
| GST-inclusive pricing clarity | Removes a real Indian B2B ambiguity |

**Never:**

| Anti-signal | Why |
|---|---|
| Logo wall of brands not actually served | Instantly checkable, catastrophic if caught |
| "Trusted by 100+ brands" | False, and the real number is more persuasive |
| Stock photos of teams or offices | Universally recognised as filler |
| Fake urgency or scarcity | LOCKED#36 |
| Countdown timers, exit-intent popups | Same |
| Unnamed testimonials | Worth less than none |
| Award badges not actually won | — |
| Live chat widget pretending to be a person | Directly contradicts the honesty positioning |

---

## §10 — Open Items

| Item | Blocks | Owner |
|---|---|---|
| 3-5 real Growth Decision Log entries, including one that went wrong | The single highest-value trust asset; §3 is format-only until supplied | Kiran |
| Prashant's background for About page | §6 | Kiran |
| Exit / notice-period terms | Unanswered objection in §7 | Kiran |
| Team-size objection — phrase as working relationship, not headcount | Unanswered objection in §7 | Kiran + Claude |
| Real footer address | §9 | Kiran |
| Testimonials collected using §5 prompts | Work page | Kiran |
| Confirm Partner Brand consent to be named in case studies | §4 | Kiran |
