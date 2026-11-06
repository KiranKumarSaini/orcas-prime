# Landing Page — Content Plan (v1: Fashion and ethnic wear sellers)

**Written:** 2026-11-06 · **Status:** Draft for Kiran's review. No copy is final.
**Depends on:** `01-offer-decisions.md` (price, scope, capacity line).

---

## 0. Decisions this plan follows

| Topic | Decision (Kiran, 2026-11-06) |
|---|---|
| Language | **Hinglish: professional and aspirational, never "village" style.** |
| Contract | **No lock-in.** |
| Launch page (new businesses) | Later |
| Savana Kurti case study | Later. The seller is in a post-Diwali loss right now, so don't approach them yet. |
| Price | ₹25,000 + GST a month or 3.5% of net sales, whichever is higher. The ₹20K founding rate is offered only on the call. |
| Capacity line | "Hum har mahine sirf 3 naye brands lete hain." |

---

## 1. The page's one job

Turn a **qualified** fashion seller who clicks a Meta or Google ad into a
**completed application**. Getting the most enquiries is not the goal. If the
page puts off sellers who can't afford ₹25K, it is working.

**Success numbers**:
- Visit → application: **3–6%**.
- Application → qualified (A/B score): **30–50%**.

These are hypotheses to replace with our own data after about ₹40K of spend.
The visit-to-application target comes from 2026 benchmarks: B2B agency
landing pages about 3.6%, quote-request pages about 6.8%, and Unbounce's
professional-services median 6.1%. See §9 for sources.

---

## 2. Who is reading (persona hypothesis)

This persona comes from our own client base (Savana Kurti, Vastranama, Khamma
Ghani, Jaipur Rang, Vastramahal). It is **not survey data**: no reliable
survey of Indian sellers' attitudes to agencies exists. The closest study,
FISME's survey of MSMEs, found most can't independently check the ad numbers
they're shown.

**"Rajesh ji / Neha": fashion manufacturer or seller, 28–50**
- Runs a family or own business in Jaipur, Surat, Delhi, Ludhiana, Kolkata or
  a similar city. Sells **₹2–20L a month** across Meesho, Flipkart, Shopify,
  Instagram and offline wholesale.
- Reads on **mobile** in the evening (8–11 pm), often between other tasks.
  Skims in Hinglish. Reads full English paragraphs slowly.
- **Has been burned before.** A freelancer showed good ROAS screenshots while
  their bank balance didn't move. A "digital marketing" agency disappeared
  after the first invoice.
- **Trusts:** people they can meet, proof they can check (a live store, a
  phone number, a known name), and anything framed as rupees and orders.
- **Distrusts:** "India's No. 1" claims, discount popups, guarantees that
  sound too good, jargon (CTR, CPM, funnel), hidden prices.
- **Main fear:** paying ₹25K a month and seeing no extra orders.
- **Main desire:** more orders without personally managing five people, and
  knowing their **real profit** after RTO and returns.
- **How they decide:** fast if trust is there. They often check with a
  partner or family member, so the page must be easy to **forward on
  WhatsApp**: one clear screenshot that explains the offer.

---

## 3. Benchmarking: what Indian agency pages do, and where we differ

Reviewed: Socio Labs (Pune), Arlox, and Indian D2C agency case-study pages
found in search. Typical pattern:

| What they do | What we do instead | Why |
|---|---|---|
| Hide the price ("contact us for pricing") | **Show ₹25,000 on the first screen** | Filters out low-budget leads before they cost a call. Price transparency is our oldest differentiator. |
| Anonymous case studies ("a Pune skincare brand") | **Named, live stores you can open and check** | Our proof is smaller but can be verified. |
| "India's most results-focused agency" superlatives | No superlatives. Specific, checkable facts. | Burned sellers ignore superlatives. ASCI also requires claims to be backed up. |
| Discount popups ("Claim 26% off") | None. The founding rate is offered only on the call. | Popups read as cheap. |
| Report ROAS | **Report profit after RTO and returns** | This is the gap sellers feel and no competitor addresses. |
| Free audit as the lead offer | **Keep it.** A free store + ads + RTO audit, shown on the call. | It works, and it shows our skill before we ask for money. |
| Calendly booking straight away | **Application form first**, then a call | Calls are the scarce resource, so qualify before booking. |
| Faceless brand | **Founders with photos, plus "hum aapke unit pe aate hain"** | The biggest trust gap for a small team, and an advantage over out-of-town agencies. |

---

## 4. Hinglish style guide (for every line on the page)

- **Roman script.** Business words stay English: orders, ads, profit, RTO,
  store, catalogue. Emotion and verbs go in Hindi.
- Address the reader as **"aap"**, always. No "bhai", "boss", "dhamaka",
  "zabardast".
- Mix about **60% English, 40% Hindi**. If a sentence reads like a TV ad,
  rewrite it.
- No "!!!", no ALL CAPS, no emoji as icons.
- Short sentences: one idea per line on mobile.
- Test: *would a successful Jaipur exporter read this aloud to their CA
  without feeling embarrassed?*

---

## 5. Section-by-section plan

The order follows the decision sequence a skeptical seller goes through:
**Is this for me? → Can they do it? → What exactly do I get? → What does it
cost? → Can I trust these people? → What happens next?**

### S1. Hero (first screen on mobile)
**Psychology job:** in 5 seconds the reader should recognise themselves, see
the offer and the price, and find the next step.

- **H1 options** (A/B test the top two):
  1. *"Aap product banaiye. Online business hum chalayenge."* Mirrors our
     locked company philosophy. Recommended.
  2. *"Store, ads, catalogue, WhatsApp. Ek team. Ek fee."*
  3. *"Freelancer, photographer, ads wala, sab alag? Ab ek hi team."*
- **Subhead:** *"Shopify store, Meta & Google ads, AI catalogue photos, video
  ads aur RTO control. Sab kuch ₹25,000/month mein. Ad spend aapke apne
  account se."*
- **CTA button:** *"Apply karein: free store audit ke saath"*
- **Microcopy under the button:** *"2 minute ka form · 24 ghante mein call ·
  Hum har mahine sirf 3 naye brands lete hain"*
- **Visual:** one kurti, **before (flat or hanger photo) → after (AI model
  shot)**. It shows our skill without words, and needs no client permission
  if we use our own sample or a consenting client.

### S2. Proof strip (checkable facts only)
**Psychology job:** "These people are real and have done this before."

- Logos or names of live client stores, each linking to the actual store.
  12+ are listed in `src/data/results.json`.
- **5.1x** return on Google Ads: Ladakh Berry, ₹6,70,173 on ₹1,31,198, lifetime.
- **₹6,50,410** revenue in 30 days on Flipkart: Divine Rudras.
- *"Founder ne Shopdeck (Bengaluru) mein ~25 sellers ke Google Ads chalaye."*
- **Slot for later:** the Savana Kurti "125 orders/day" story, once the
  seller agrees and we have the screenshots on file.

### S3. The seller's reality (problem)
**Psychology job:** make them feel understood. Describe their week; don't
lecture.

- Heading: *"Aaj aapka online business kaise chalta hai?"*
- A short visual list of the vendors they juggle: ads freelancer,
  photographer, catalogue person, WhatsApp tool, courier follow-ups, and
  themselves at midnight.
- **Three questions they can't answer** (self-diagnosis, as competitors do,
  but about money):
  - *"Pichhle mahine RTO aur returns ke baad asal profit kitna tha?"*
  - *"Aapke ads ka paisa kis product pe sabse zyada waste hua?"*
  - *"Kitne COD orders kabhi deliver hi nahi hue?"*
- Closing line: *"Agar in sawalon ka jawab nahi pata, to problem ads nahi,
  system hai."*

### S4. What we take over (solution)
**Psychology job:** show the full scope, grouped so it doesn't read like a
long menu.

| Group (Hinglish heading) | What's included |
|---|---|
| **Sales laana** | Meta + Google ads, Google Shopping (GMC), up to 10 AI video ads a month, Instagram reels and posting |
| **Store chalana** | Full Shopify support (fair use), AI model photos for the whole catalogue |
| **Paisa bachana** | RTO and COD control (WhatsApp confirmation, blocking bad pincodes), WhatsApp automation (abandoned cart, reorder reminders) |
| **Clarity** | Weekly profit report on WhatsApp, weekly review call, festive and sale calendar |

Each item gets a one-line **outcome in rupees or time**, never the feature
name alone. For example, *"COD order confirm hoga WhatsApp pe, fake orders
dispatch se pehle ruk jayenge."*

### S5. AI work showcase
**Psychology job:** "Can AI really make my kurti look premium?" This is
answered by showing, not claiming.

- A gallery of 3–4 kurti before → after pairs, plus 2–3 short vertical video
  ads (autoplay muted, with captions).
- Line: *"Photographer, model, studio, kuch nahi chahiye. Bas product photo
  bhejiye."*
- Label every sample *"AI se bana sample"*. This is honest, and it protects us
  under ASCI's disclosure rules.

### S6. What ₹25,000 replaces
**Psychology job:** reframe the price as a saving. This section is designed
to be **screenshotted and forwarded**.

| Aaj aap kharch karte hain (typical) | Orcas Prime ke saath |
|---|---|
| Ads freelancer: ₹10–15K/month | Included |
| Catalogue shoot: model, photographer, editing | Included (AI) |
| WhatsApp tool setup and campaigns | Included |
| Ecommerce executive salary: ₹15–30K/month | Not needed |
| RTO loss that no one tracks | Tracked and reduced |

Mark these as typical market ranges. They are estimates, not quotes.

### S7. Price, stated plainly
**Psychology job:** remove fear of hidden costs.

- **₹25,000 + GST per month, or 3.5% of net sales (after returns and RTO),
  whichever is higher.**
- Ad spend is paid from **your own** ad account on your own card. We never
  mark it up.
- **No lock-in.** Stop any month.
- **Not included** (stating this builds trust): customer support, influencer
  management, full page redesigns, inventory and logistics.
- *Do not show the ₹20K founding rate here.*

### S8. Who this is for, and who it isn't
**Psychology job:** selection. The capacity line only works if we are
visibly selective.

- **For:** fashion and ethnic wear brands or manufacturers, already selling
  **₹2L+ a month** (online or offline), with **₹30K+ a month for ads**, and
  their own product.
- **Not for:** dropshipping, starting with no budget, "sirf website chahiye".

### S9. The founders
**Psychology job:** turn "small team, no office" into a reason to choose us.

- Real photos of Kiran and Prashant, plus a 30–45 second founder video
  (phone-shot is fine).
- Credentials: SVNIT B.Tech; Shopdeck, Google Ads for ~25 sellers. Add
  Prashant's background when supplied.
- *"Hum Jaipur mein hain. Aapki factory ya shop pe aake milte hain."*
- Reframe the office: *"Badi office ka kiraya nahi, isliye aapki fee mein
  poori team."*
- *"Har hafte ek call. Aap seedha founder se baat karte hain, junior se
  nahi."*

### S10. How it works (4 steps, each with a time)
1. **Apply** (2 minutes)
2. **Call within 24 hours.** We look at your store and ads before calling.
3. **Free audit on the call:** store, ads and an RTO estimate.
4. **Live in 7 days:** setup, catalogue photos, first ads.

### S11. FAQs (objections, answered honestly)
- *Office nahi hai, trust kaise karein?* Meet us in person, speak to a live
  client, open the live stores. No lock-in, so you risk one month at most.
- *Results ki guarantee?* No revenue guarantee; anyone who guarantees revenue
  is lying. But there's no lock-in: we have to earn your fee every month.
- *Freelancer ₹10K mein karta hai, aap ₹25K kyun?* See S6: the freelancer
  covers ads only.
- *Ad accounts kiske naam pe?* Yours, always.
- *AI photos asli lagte hain?* See S5. You approve every image before it goes live.
- *Meesho / Flipkart / Amazon bhi?* (Confirm with Kiran whether marketplaces
  are included in this package or are an add-on.)
- *Kitne din mein results?* Setup takes 7 days; ad learning takes 2–4 weeks.
  Weekly reports from week 1.
- *Meri sales ₹7 lakh se kam hai, to 3.5% kaise?* Below about ₹7.1L of net
  sales, ₹25K is the fee. Above that, it's 3.5%.
- *Pehle agency se jal chuke hain.* Weekly profit report, plus a weekly call
  with a founder.

### S12. Final CTA and application form
Restate the H1 in short form plus the capacity line. The form:

| Field | Type |
|---|---|
| Naam | text |
| WhatsApp number | phone |
| Brand / store link | url (optional if offline only) |
| Aap kya bechte hain? | Kurti/suits, sarees, lehenga/festive, menswear, other fashion, non-fashion |
| Abhi kahan bechte hain? | Multi-select: Shopify, Meesho, Flipkart, Amazon, Instagram, offline/wholesale |
| Monthly sales | Under ₹1L / ₹1–3L / ₹3–10L / ₹10L+ |
| Har mahine ads pe kitna laga sakte hain? | Under ₹15K / ₹15–30K / ₹30K–1L / ₹1L+ |
| Kab shuru karna hai? | Abhi / 1 mahine mein / sirf dekh rahe hain |

**Scoring:**
- **A** = sales ₹3L+ and ad budget ₹30K+ and starting now. Call the same day.
- **B** = one condition short. Call within 24 hours.
- **C** = auto-reply with a free guide. No call.

**Thank-you page:** what happens next, the founder photo, and an automatic
WhatsApp message within 1 minute.

---

## 6. Page-wide rules

- **No menu**, logo only. One small WhatsApp link for people who refuse forms.
- **Mobile first.** S1 must fit one phone screen without scrolling.
- Repeat the CTA after S4, S7 and S9.
- Hidden from Google (noindex). The page is for ad traffic only.
- No countdowns, no "slots left", no popups, no stock photos of people.
- Every number on the page must exist in `results.json` or be marked as a
  typical market range.

## 7. What to test first (one at a time)

1. H1 option 1 vs option 2.
2. Price in the hero vs price first shown in S7.
3. Before/after kurti visual vs a video in the hero.

## 8. Assets needed from Kiran

- [ ] Founder photos (Kiran, Prashant) and a 30–45 second founder video
- [ ] Prashant's background, one line
- [ ] 3–4 kurti before/after pairs and 2–3 sample video ads, from our AI
      workflow
- [ ] Permission to name and link the client stores on an ad landing page
- [ ] Whether marketplaces (Meesho/Flipkart/Amazon) are included or an add-on
- [ ] Later: Savana Kurti data, permission and video

## 9. Sources

- Landing page benchmarks: [Digital Applied 2026 study (2,000 pages)](https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026), [Unbounce advertising industry](https://unbounce.com/industry/advertising/), [Landerlab benchmarks](https://landerlab.io/blog/landing-page-conversion-rate)
- Competitor pages: [Socio Labs case study](https://sociolabs.in/shopify-success-story-3l-to-28l-growth-case-study-india/), [Arlox](https://officialarlox.vercel.app/results/case-studies/bomaachi)
- MSME ad measurement gap: [FISME report](https://fisme.org.in/docs/Digital_FISME_Maximising_Advertising_Revenue_for_MSMEs_compressed.pdf)
- COD share of Indian D2C orders: [base.com](https://base.com/en-IN/blog/d2c-ecommerce-india-statistics-in-2026/)
