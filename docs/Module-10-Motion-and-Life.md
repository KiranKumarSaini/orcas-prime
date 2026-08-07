# Module 10 — Motion, Assets & The Moments That Land

**Status:** PLAN — not yet built. Phase 1 deliverable.
**Standard:** B (specification)
**Depends on:** Module 9 (UI architecture), Module 4 (tokens, a11y floor), LOCKED.md
**Brief:** "We can do better. More premium motions. Make the website alive.
Surprise the visitor."

---

## §1 — What "alive" has to mean for *this* brand

The instinct behind the brief is right: the site is now structured but static.
Structure got it to competent; it has to go further to feel expensive.

But "alive" has a wrong answer that is very easy to reach, and it would cost
more than it gains here. The wrong answer is decoration — floating shapes,
gradient blobs, parallax for its own sake, elements that move because moving
looks modern. On a brand whose entire promise is *"we take responsibility and
we tell you the truth"* (LOCKED#1, #48), decoration reads as a company
compensating for something. It also directly contradicts LOCKED#12: the target
emotion is **relief**, and busy pages do not produce relief.

**The right answer, stated once:**

> Motion earns its place when it explains something the static page could not.
> Surprise comes from usefulness the visitor did not expect — not from
> movement they did not ask for.

Every proposal below passes that test. Where something is decoration, it is
labelled as such and kept tiny.

There are exactly **three big moments** planned. Three is deliberate — a site
with one surprise is flat, a site with ten is a theme park. Everything else is
craft-level polish that a visitor feels without noticing.

---

## §2 — Two things in the brief I am pushing back on

Both were asked for directly. Both would damage this specific brand, and there
is a better way to get what they were reaching for.

### Emojis — recommend against, offer an alternative

The ask behind it is real: the page needs visual texture, not just text.

The problem: Module 4 bans emoji-as-icon, and so does the UI UX Pro Max
pre-delivery checklist independently. More importantly, LOCKED#11 fixes the
site's personality as **Senior Ecommerce Operator — not salesperson, not
coach.** An operator explaining RTO economics to a founder does not put a 🚀 in
it. Emoji would make the page read younger and less credible, and credibility
is the entire product here.

Emoji also render differently on every device — the exact same page looks
Apple on iOS and Google on Android. That is a loss of control on a site whose
craft is meant to be the portfolio piece (Module 4 §1, objective 2).

**Instead:** a small custom line-mark set drawn in the site's own hairline
style (1px strokes, the accent green, no fills) — roughly 8–10 marks, used only
where they label something real. Plus the diagram programme in §5. That gives
the visual texture without the tonal cost.

### Stock photography — recommend against, offer an alternative

Module 5 §9 lists "stock photos of teams or offices" as an **anti-signal**:
*"Universally recognised as filler."* Module 5 §1 sets the rule that every
proof claim must be checkable by a suspicious founder in under two minutes.
A stock photo of a generic team in a generic office fails that test loudly —
and once a visitor spots one staged element, they start auditing everything
else on the page, including the numbers.

**Instead — a real asset shoot.** This costs a morning and it is worth more
than any stock library:

| Asset | Why it matters | Owner |
|---|---|---|
| Founder portraits — Kiran and Prashant, natural light, real workspace | About page currently shows initials in a box. Module 5 §6: real photos, real names. Two-person company: hiding it is worse than stating it | Kiran |
| Partner Brand product shots — real Ladakh Berry, Vastramahal, Savana Kurti product | Proof you actually run these accounts. Checkable in two minutes | Kiran |
| Workspace detail — desk, screens, Jaipur | Texture for About / How We Work without staging | Kiran |
| Store screenshots | Already have, already used | Done |

If a shoot is genuinely not happening soon, the fallback is **more diagram,
not stock** — the site can carry zero photography and still look expensive.
It cannot carry fake photography and stay credible.

---

## §3 — Technical decision: Motion, not Framer Motion + React

The brief says "we can use framer." Worth being precise, because the naming is
confusing and it changes the cost a lot.

**Framer Motion was renamed `motion`.** Same team, same library, v13 either
way. The difference is the entry point:

| Option | Bundle (gzip) | Needs React? | Verdict |
|---|---|---|---|
| `framer-motion` (React API) | ~60 KB + React ~45 KB ≈ **105 KB** | Yes | ✗ |
| `motion` (vanilla JS API) | **~2.6 KB mini / ~18 KB full** | No | ✓ **This one** |
| `gsap` + ScrollTrigger | ~38 KB | No | Only if scrubbing gets complex |
| Native CSS / View Transitions | **0 KB** | No | ✓ Use wherever it suffices |

This site is pure Astro with **zero framework JavaScript today**. Adding React
purely to animate would put ~105 KB and a hydration step on a page whose
audience is Indian mobile on variable networks, against a Lighthouse ≥90 mobile
target (Module 8 §7). The vanilla `motion` API gives the identical spring and
easing quality — it is literally the same engine — for a fraction of that.

**Decision: `motion` (vanilla), plus native Astro View Transitions, plus CSS
where CSS is enough.** No React. Revisit only if a moment genuinely cannot be
built without it — none of the three below can't.

**Budget:** total added JS for all of Module 10 must stay **under 25 KB gzip**.
If a moment cannot fit, the moment gets cut, not the budget.

---

## §4 — The three moments

### ⭐ Moment 1 — "Five become one" (Hero)

**What the visitor sees.** As the hero settles, five thin outlined rectangles
sitting at slight, uneven angles slide together, straighten, and resolve into
one solid accent-green block. Roughly 900 ms, fires once, never loops.

**Why it earns its place.** It is the headline, drawn. "Stop managing five
different agencies / we're one team" is an abstract claim in the first two
seconds; this makes it concrete before the sentence is finished being read.

**Restraint.** Small — sits beside or under the headline, never dominates.
Mobile gets a shortened version (600 ms, less travel) or, under
`prefers-reduced-motion`, the resolved end-state only.

---

### ⭐⭐ Moment 2 — "The money drain" (Section 3, RTO)

**This is the most valuable thing in this document.** The RTO block is already
the site's biggest AI-citation and teaching asset (Module 3 §3). Right now it
explains the loss in words and a static diagram. It should let the visitor
*watch* it happen.

**What the visitor sees.** As they scroll through the RTO diagram, a single
₹1,000 order is tracked with a running balance. Each stage deducts, scrubbed to
scroll position:

```
₹1,000 order placed
  − ₹180   ad spend to acquire this customer      → ₹820
  − ₹80    forward shipping                       → ₹740
  ✕        refused at the door — no revenue ever arrives
  − ₹80    return shipping                        → ₹660
  − ₹300   stock comes back unsellable as new     → ₹360
                                                     ────────
                            You are ₹640 down on an order
                            your dashboard counted as a sale.
```

The final line is the payoff, and it is the argument of the entire section
landing in one number.

**On the "no counting numbers" rule.** Module 4 §6 bans counter animations, and
it is right to — counting *up* a revenue figure is a growth-hack tic that
delays comprehension and reads as trying too hard (LOCKED#36). This is the
opposite case: the number counting *down* **is the lesson**, tied to scroll
rather than a timer, and it is the shortest possible route to comprehension.
I am proposing this as a deliberate, narrow exception and flagging it here
rather than quietly breaking the rule. **Kiran's call.**

**Honesty constraint.** Every figure must be labelled illustrative, exactly as
the RTO guide already does (*"Cost figures in the worked example are
illustrative arithmetic, not client data"*). No invented client data. Ever.
If real Partner Brand RTO figures arrive later (still open, Module 3), they
replace the illustrative ones and this becomes uncopyable.

**Fallbacks.** No JS, or reduced motion → the full table renders statically
with the same numbers. Nothing is lost.

---

### ⭐⭐⭐ Moment 3 — "What would you actually pay us?" (Section 6)

**The single highest-value addition in this plan, and it is not motion at all.**

**What the visitor sees.** A slider. They drag their own monthly net sales from
₹1 lakh to ₹1 crore. Three bars respond live:

```
Your net sales:  ₹12,00,000 / month
                 ─────────────────────────────────
Orcas Prime      ₹42,000        ████
3.5% + GST

Typical retainer ₹1,50,000+     ██████████████
                                (₹75,000–₹6,00,000 range)

% of ad spend    varies with spend, not with what you keep
10–20%
```

**Why this is the best idea here.** The original brief wanted a signature
element that gets *"screenshotted and forwarded on WhatsApp"*. This is that
element — a founder drags it to their own number, sees a real answer, and
screenshots it. It is also:

- The strongest possible expression of LOCKED#14 (we sell a business model)
  and LOCKED#50 (the site is a risk-reduction machine). The visitor proves the
  pricing claim to themselves rather than being told it.
- A serious AI-citation asset for *"how much do Indian ecommerce agencies
  charge in India"* — the query Module 7 §3 calls strategically important.
- Genuinely useful even to someone who never becomes a Partner Brand, which is
  exactly LOCKED#44 (out-educate, don't out-design).

**Constraints.** Retainer figures use the sourced ranges already footnoted on
the pricing page — same numbers, same citations, no new claims. Never implies
the 3.5% is negotiable (Module 8, Prompt 8). Below ₹3 lakh the output honestly
says the model probably isn't right yet, matching the honest-fit block — the
calculator must be willing to talk someone out of it.

**Fallback.** No JS → renders as the existing static three-row table.

---

## §5 — Craft layer (felt, not noticed)

None of these are moments. Together they are most of what makes a site read as
expensive.

**Motion**

| Where | What | Notes |
|---|---|---|
| Hero headline | Per-line mask reveal — lines rise from behind a clip edge | ~50 ms line stagger. The Stripe/Linear signature. Cheap, disproportionate effect |
| Section entrances | Keep current 80 ms stagger, retune easing to `motion`'s spring | Already built; upgrade quality not concept |
| Cards | Current 2 px lift + border brighten | No scale, no tilt (Module 4) |
| CTAs (desktop only) | Magnetic pull — button drifts ≤4 px toward cursor on approach | Pointer-fine only. Off on touch |
| Links | Underline draws left→right on hover, 150 ms | |
| Numbers on entry | Fade + rise only. **Never count up** | The §4 drain is the one exception, if approved |
| Page navigation | Astro View Transitions — native, 0 KB, cross-document fade | |
| Accordion | Height + opacity ease on open, 200 ms | Currently a hard snap |
| Partner Brand cards | Screenshot shifts ≤8 px on scroll (parallax) | Skill guidance: keep delta 5–15, never parallax body copy |

**Surface & texture**

- **Paper grain** — a very fine SVG noise overlay on the cream background,
  ~2 KB, 2–3% opacity. This is the single cheapest "expensive" cue available
  and it is why Aesop and Monocle feel like paper. Decoration, admitted, but
  the good kind.
- **Dark-section depth** — a barely-there radial warm-up behind the headline on
  the two dark sections so they don't read as flat black fills.
- **Section numerals** — `01`–`08` in the eyebrows. Editorial device, adds
  spine, costs nothing.

**Diagram programme** (custom, hairline style, replaces any emoji/icon urge)

1. RTO money flow — exists, gets Moment 2 applied
2. Vendor chain — exists as chips, upgrade to a proper drawn broken chain
3. Ownership boundary — the 4-vs-15 split as a drawn line, not two lists
4. "What a month looks like" — a new timeline for How We Work: what happens
   week 1, weekly, monthly. Answers the unresolved "who actually works on my
   account?" objection (Module 5 §7) visually
5. Prepaid vs COD — for the RTO guide

---

## §6 — Per-page, not just the homepage

The homepage got Module 9. These carry the same treatment in Phase 2:

- **Pricing** — the calculator is the page's centrepiece, not a homepage-only
  toy. Add the three-way incentive comparison as a drawn diagram.
- **What We Own** — the ownership boundary diagram; the 15 items reveal on
  scroll rather than sitting as a static wall.
- **Work** — real Partner Brand product photography; case studies get the
  Module 5 §4 structure visually expressed.
- **About** — real founder portraits. This page is currently the weakest and
  the fix is entirely photographic.
- **Guides** — reading progress, estimated read time, sticky in-page contents
  on desktop. These are long documents and deserve document affordances.
- **How We Work** — the month timeline diagram.

---

## §7 — Guardrails (non-negotiable)

Carried from Module 4 §6/§8 and Module 9 §6. Motion never overrides these.

- `prefers-reduced-motion: reduce` → all of it collapses to instant. Every
  moment must have a static end-state that is complete on its own.
- **No-JS renders everything.** Calculator → static table. Drain → static
  table. Convergence → resolved state. If a visitor with JS off loses
  information, the feature is built wrong.
- Nothing animates while it is being read.
- Nothing loops. Nothing re-triggers on scroll-back.
- Total added JS **< 25 KB gzip**. Lighthouse mobile stays ≥ 90.
- Scroll-scrubbing on **one section only** (the drain). Skill guidance is
  explicit: more than 1–2 pinned sections fights native scroll and hurts
  mobile.
- Still banned, unchanged: gradients as decoration, glassmorphism (nav blur
  excepted), counter-up vanity numbers, carousels, popups, urgency, stock
  photography, emoji-as-icon.
- Test on a real mid-tier Android, not a desktop throttle. Pinning and
  scrubbing are where cheap phones fall over.

---

## §8 — Phase 2 build sequence

Each step is independently shippable and independently revertible.

| # | Step | Risk | Depends on |
|---|---|---|---|
| 1 | Install `motion`, wire View Transitions, retune existing easings | Low | — |
| 2 | Paper grain, section numerals, dark-section depth | Low | — |
| 3 | Craft motion layer — hero mask reveal, magnetic CTAs, link draws, accordion ease, card parallax | Low | 1 |
| 4 | **Moment 3 — the calculator** | Medium | 1 |
| 5 | **Moment 2 — the money drain** | Medium-high (scrub perf) | 1, Kiran's ruling on the counting exception |
| 6 | **Moment 1 — five become one** | Low | 1 |
| 7 | Diagram programme (5 drawings) | Medium | — |
| 8 | Real photography integration | Blocked | Kiran's shoot |
| 9 | Per-page rollout (§6) | Medium | 1–7 |
| 10 | Perf + a11y audit on real mobile, Lighthouse, reduced-motion pass | — | all |

Recommended order to *feel* progress fastest: **4 → 3 → 2 → 5 → 6 → 7**.
The calculator alone changes how the site is perceived more than every
animation combined.

---

## §9 — Decisions needed from Kiran before Phase 2

| # | Decision | Why it blocks |
|---|---|---|
| 1 | **The counting exception** — allow a scroll-scrubbed *downward* balance in the RTO drain, against Module 4's counter ban? | Moment 2's core mechanic |
| 2 | **Emoji** — accept the recommendation against, and take the custom line-mark set instead? | Icon direction across the site |
| 3 | **Photography** — commit to a real shoot, or go zero-photography with more diagram? Stock is not on the table | About/Work pages, and §6 |
| 4 | **Illustrative RTO figures** — approve the ₹1,000 worked example, or supply real Partner Brand RTO numbers instead (stronger, still open from Module 3) | Moment 2 content |
| 5 | Calculator range — is ₹1 lakh to ₹1 crore the right span for who you actually want? | Moment 3 |
