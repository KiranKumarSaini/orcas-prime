# Orcas Prime Blueprint — ROADMAP

**Status:** Active
**Last updated:** 2026-08-07
**Owner:** Kiran

---

## How this file works

This is the navigation system for the entire project. It is the **only** place where
structure, status and open questions live. If something isn't in this file, it isn't
part of the plan.

**Rules:**

1. Every working session starts by reading this file.
2. Every completed document updates this file in the same session.
3. Structure is not renamed or reorganised mid-project. Changes to the plan get written
   here first, then executed.
4. Nothing is marked complete from memory. Complete means the document exists.

---

## Naming — one track only

The project previously ran two parallel numbering systems ("milestones" for strategy
discussion, "modules" for documentation output). They drifted apart and corrupted the
roadmap. **They are now merged.**

| Old name | Now |
|---|---|
| Milestone 1 — Brand Foundation | **Module 1** |
| Milestone 2 — Founder Psychology | **Module 2** |
| Milestone 3 — Homepage Blueprint | **Module 3** |
| Strategy milestones 3, 5 (Manifesto, Website's Job) | Retired — content already lives in Modules 1 and 3 |
| Strategy milestones 6, 7, 8 | Retired — never defined, no content |

There is one numbering system. There are no milestones. There are Modules 1–8.

---

## Module status

| # | Module | Status | Documents |
|---|---|---|---|
| 1 | **Brand Foundation & Strategic Positioning** | ✅ Complete | 10 parts, 20 decisions |
| 2 | **Founder Psychology** | ✅ Complete (1 defect) | 10 parts, 27 decisions |
| 3 | **Homepage Blueprint** ⭐ | 🟡 In progress | Part 1 of ~10 |
| 4 | **Design System** | ⬜ Not started | — |
| 5 | **Trust Architecture** | ⬜ Not started | — |
| 6 | **Copywriting System** | ⬜ Not started | — |
| 7 | **AI & Content Engine** | ⬜ Not started | — |
| 8 | **Implementation Blueprint** | ⬜ Not started | — |

**Module 3 is the centre of the project.** It is the bridge Vastranama never had. When it
is finished, Claude Code, Cursor, or a senior designer should each build substantially the
same website from it.

### Module 3 — part status

| Part | Title | Status |
|---|---|---|
| 1 | Homepage Philosophy & Information Architecture | ✅ |
| 2 | **Hero Section Blueprint** | ⬜ **NEXT** |
| 3 | The Founder's Reality | ⬜ |
| 4 | The Broken Ecommerce System | ⬜ |
| 5 | Ownership Philosophy | ⬜ |
| 6 | How Orcas Prime Thinks | ⬜ |
| 7 | Proof | ⬜ |
| 8 | Resources | ⬜ |
| 9 | Call To Action | ⬜ |
| 10 | Navigation, Footer & Global Elements | ⬜ |

---

## Baseline — corrected

Previous completion estimates were inflated by 20–50 points on several modules. Those
numbers were reconstructed from degraded memory, not from the record. **These are the
corrected figures**, measured against the full transcript.

| Module | Previously claimed | Actual |
|---|---|---|
| 1 — Brand Foundation | 95% | **~90%** |
| 2 — Founder Psychology | 80% | **~70%** |
| 3 — Homepage Blueprint | 85% | **~35%** |
| 4 — Design System | 75% | **~30%** |
| 5 — Trust Architecture | 90% | **~55%** |
| 6 — Copywriting System | 60% | **~10%** |
| 7 — AI & Content Engine | 90% | **~45%** |
| 8 — Implementation | 0% | **0%** |

**Why this matters:** Modules 4, 6 and 7 have far less banked thinking than previously
assumed. When they begin, they are **new work**, not transcription. Writing them as though
they document past decisions would produce invention disguised as documentation.

Percentages are updated only against documents that exist. Never from recall.

---

## Quality standards

Different modules need different standards. Applying the wrong one is how Module 2 Part 3
came out thin and how a specification could come out bloated.

### Standard A — Philosophy modules (1, 2)

Every major decision expands as: Decision → Background → Why We Rejected The Obvious
Solution → Why We Chose This Direction → Mental Model → Website Implications → Design
Implications → Copywriting Implications → AI/SEO Implications → Future Company
Implications → Decisions We Must Never Reverse.

Test: *would a new Orcas Prime employee completely understand WHY we reached this
conclusion?* If no, keep writing. Length is not a constraint.

### Standard B — Specification modules (3, 4, 5, 6, 8)

Every part contains: Purpose → Visitor Psychology → Questions Being Answered → Section
Objective → Content Blueprint → Layout Blueprint → Visual Blueprint → Animation Blueprint
→ Interaction Blueprint → Copywriting Direction → AI/SEO Considerations → Conversion
Purpose → Things To Avoid → References To Previous Modules → Claude Implementation Notes.

Test: **could two competent designers build different things from this?** If yes, keep
going. If no, stop — even if it is short. Word count is not a quality signal here.
Ambiguity is the only defect that matters.

### Both standards

- Decisions are referenced by ID, never restated.
- Reasoning is captured, not just conclusions.
- If a new idea arrives mid-module, it goes to Parked Ideas. It does not interrupt.

---

## Decision register

Two incompatible numbering systems currently exist: chat decisions #1–#50, and
per-document decisions renumbered 01– inside each module. "Decision 04" currently means
three different things.

**Fix:** one permanent ID per decision (`D-001`, `D-002`…) in a separate `DECISIONS.md`,
with a mapping table from both old systems. Documents reference IDs.

⬜ `DECISIONS.md` — not yet created. Should be built before Module 4.

### Decisions needing ratification

Treated as settled but never actually locked:

- **#3** — the site should convince visitors the *business model* is fairest, not that you're good. *(Proposed)*
- **#7** — every page teaches before it sells. *(No status given)*
- **#8** — every page leaves the founder thinking "these people would make better decisions than I would." *(Proposed)*
- **#47** — number collision. Used for both "most trusted judgment in Indian ecommerce" *(Proposed)* and "the company has two operating layers" *(Locked)*.

---

## Open questions — parked

These are unresolved. They are parked here so they stop leaking into unrelated documents.
Each has a point at which it must be answered.

| Question | Must be answered by |
|---|---|
| **Category / positioning label.** Deliberately deferred — "Stripe didn't start by calling themselves financial infrastructure." Philosophy and promise are locked; the label is not. | Module 6 (Copy) |
| **Pricing: 3% vs 3.5%.** Two structures exist in the business — marketplace management vs full ownership. The site states one. Are these one product or two? | Module 3, Pricing section |
| **Deliverability of "What We Own."** The claimed scope includes logistics POCs, inventory planning and launch strategy. Which claims does Orcas Prime stand behind *today* vs aspire to? Ownership positioning becomes a liability if delivery slips. | Module 3, Ownership section |
| **Cold traffic vs calm reveal.** A calm, teaching, eight-section progression is right for an AI-referred or warm visitor. Meta ad traffic arrives cold. Does the homepage serve both, or does paid traffic get a separate landing page? | **Module 3 Part 2 — it changes the hero** |

---

## Debt

| Item | Note |
|---|---|
| **Module 2 Part 3 rewrite** | Acknowledged thin. Rewrite promised as Parts 3A + 3B, never done. Module 6 (Copy) will lean on it heavily — fix before then. |
| **Module 1 Parts 1–7** | Written before Standard A was locked. Acceptable as-is; revisit only if a gap surfaces during Module 3. |
| **Module 2 Parts 1–3** | Written before the "exhaust, don't finish" rule. Same call. |
| **Merging** | Modules 1 and 2 exist as 10 separate parts each. Confirm whether merged files exist. |

---

## Parked ideas

Good ideas that arrive at the wrong moment go here rather than derailing the current
module.

| Idea | Belongs in |
|---|---|
| The Growth Decision Log — client-facing decision documentation | Module 5 (Trust) + operations |
| "Wikipedia of Indian Ecommerce" — the public brain | Module 7 |
| Orcas Prime Principles as a public page | Module 3 (section) + Module 7 |
| Ideal Partner page — "we do our best work with…" / "not the right fit if…" | Module 3 |

---

## Next action

**Module 3, Part 2 — Hero Section Blueprint.**

Written to Standard B. Must resolve the cold-traffic question, since it determines what
the first screen does. This is the part that proves the specification format works.

---

## Change log

| Date | Change |
|---|---|
| 2026-08-07 | Roadmap created. Milestone and module tracks merged into one. Baseline percentages corrected. Standards split into A (philosophy) and B (specification). Open questions parked. |
