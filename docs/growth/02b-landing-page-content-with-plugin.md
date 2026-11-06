# Landing Page, v2: Fashion and ethnic wear sellers

**Written:** 2026-11-06 · **Status:** Draft for Kiran's review. No copy is final.
**Built with:** the copywriting plugin (`landing-page-copy`, `copy-proof-check`) and the `ui-ux-pro-max` skill for layout and motion.
**Facts used:** `01-offer-decisions.md`, Kiran's changes of 2026-11-06 (fee 4%, no notice to stop, store-listing policy, 15-minute weekly call, daily summary, dashboard), `src/data/results.json` (the only client numbers), and the Orcas Dashboard features in `pnl-engine/docs/PROJECT_STATE.md`.

**How to read this:** every section has the copy (ready to paste), then **Design** (layout, visuals, motion). The list of images to make is in Part 2.

---

## Look and feel (whole page)

- **Brand colours stay:** paper `#FAF7F2`, ink `#1A1815`, deep green `#2F4739` (from Module 4). Charts use green for profit and a muted brick red (`#B4533C`) for loss, RTO and alerts.
- **Fonts:** a serif (Instrument Serif or Fraunces) for headlines and big numbers, Inter for everything else.
- **Icons:** Lucide line icons in green, not emojis. Emojis render differently on every phone and look cheap next to a dashboard. Icon names are given per section.
- **Background motif:** a very light block-print pattern (custom SVG, 4% opacity) behind the hero and the fee card. It nods to ethnic wear without stock photos.
- **Motion:** sections slide up and fade in once as they scroll into view (600 ms, 80 ms stagger, no bounce). Charts draw in once. Everything is still if the phone has "reduce motion" on, and readable without JavaScript.
- **Mobile first:** the hero fits one phone screen. A sticky bottom bar with the button appears after the hero.
- **No menu.** Logo only, plus a small WhatsApp icon in the corner.

---

## Part 1. The page

### 1. Hero

**Fashion aur ethnic wear brands ke liye**

# Meta ads, Shopify store, RTO control aur profit dashboard. Sab ek team ke paas.

Hum aapke ads chalate hain, store sambhalte hain, RTO pe control rakhte hain, aur dashboard pe dikhate hain ki asal mein kitna profit hua.

`[Meta Ads]` `[Google Ads]` `[Shopify]` `[Profit dashboard]` `[RTO + NDR]` `[WhatsApp]`

**[Button] Apne brand ke baare mein batayein**

Koi lock-in nahi · Hum har mahine sirf 3 naye brands lete hain

**Design**
- Left (desktop) or top (mobile): text. Right or below: a **phone showing the dashboard's "Aaj ka hisaab" screen** (orders, sales value, ad spend, cost per order, Meta wallet).
- Two small cards float in around the phone, one after another: a WhatsApp message ("Aaj: 42 orders · CPP ₹186 · Wallet ₹8,400") and a green alert ("RTO risk: 3 orders, pincode block"). All numbers here are sample data, with a small "Sample data" tag.
- Chips use Lucide icons: `megaphone`, `search`, `shopping-bag`, `line-chart`, `package-x`, `message-circle`.
- Load order: headline (0 ms), subhead (120), chips (200), button (300), phone (360), floating cards (700 and 1,100 ms).

---

### 2. Kya aapka online business aise chalta hai?

| Abhi | Orcas Prime ke saath |
|---|---|
| Mahine ke end mein bhi pata nahi ki RTO aur returns ke baad profit hua ya loss. | **Profit dashboard:** har din, har hafte, har mahine ka P&L, RTO, shipping aur ad spend ke baad. |
| COD orders dispatch hote hain, aur kai wapas aa jaate hain. | **RTO control:** WhatsApp pe COD confirmation, problem wale pincodes block, prepaid ke liye nudge. |
| NDR wale parcels ka kisi ko pata nahi, customer ko call kisi ne nahi kiya. | **NDR desk:** har NDR parcel ki list, kisko call karna hai, re-attempt kab hai. Sab dashboard pe. |
| Prepaid orders kam, COD zyada. | **Meta CAPI setup**, taaki ads zyada prepaid khareedne wale customers tak pahunchein. |
| Ads pe paisa jaata hai, par kaun sa ad profit de raha hai, pata nahi. | **Har ad ka faisla:** Scale, Keep ya Cut, RTO aur shipping ke baad ke profit pe. |
| Meta wallet khatam, ads band, aur pata baad mein chalta hai. | **Wallet alert:** paisa khatam hone se pehle hi khabar. |
| Ads ek freelancer, photos doosra, website teesra. | **Ek team, ek fee.** |

**Design**
- Mobile: one card per row. Each card shows the "Abhi" line in ink with a brick-red `x-circle` icon. As it scrolls into view, the solution slides in under it with a green `check-circle`, like a before/after flip.
- Desktop: two columns, "Abhi" on the left and the solution on the right, joined by a thin animated arrow.
- Mini CTA under the list: **Apne brand ke baare mein batayein**

---

### 3. Ek team. Poora kaam.

**Meta Ads, poori management** (large tile)
Campaign structure, audiences, creative testing, budget pacing, Pixel aur CAPI tracking. Har hafte kya badla, uska likha hua log.

**Google Ads** (large tile)
Search, Shopping, Performance Max aur remarketing. Google Merchant Center pe aapke products ki free listings bhi.

**Shopify store**
Store ke roz ke changes aur fixes, fee mein included.

**AI catalogue photos**
Flat-lay ya hanger photo se model shot, poore catalogue ke liye.

**AI video ads**
Har mahine 10 tak, fee mein included.

**WhatsApp automation**
Abandoned cart, order updates, reorder reminders, festival broadcasts.

**Instagram**
Reels, captions aur posting.

**Festive calendar**
Diwali, shaadi season, Rakhi, end-of-season sale. Planning 4–6 hafte pehle, creatives ready.

**Design**
- Bento grid: the Meta and Google tiles are double width, with a small animated graphic each (Meta: three ad cards with Scale / Keep / Cut tags; Google: a Shopping result card with a product image).
- Other tiles are single, each with one Lucide icon: `store`, `image`, `clapperboard`, `message-square`, `instagram`, `calendar-days`.
- Tiles stagger in (60 ms apart). On desktop each tile lifts 2 px on hover.

---

### 4. Aapka poora business, ek dashboard pe

Orders, ad spend, RTO aur profit. Ek jagah, live.

Tabs:
- **Aaj** · Aaj ke orders, sales, Meta aur Google spend, cost per order, kitne orders ship hone baaki.
- **P&L** · Din, hafte ya mahine ka P&L, ek click mein Excel.
- **Ads** · Campaign se ad tak, har ad pe Scale, Keep ya Cut, asal profit ke hisaab se.
- **RTO aur NDR** · COD vs prepaid, courier-wise RTO, risky pincodes, NDR call list.
- **Products** · Kaun sa product profit de raha hai, kaun sa nahi.

**Design**
- Desktop: a laptop frame with the tabs above it; clicking a tab crossfades to that screenshot (200 ms).
- Mobile: a phone frame with swipeable screens and dots underneath.
- Next to the frame: one animated chart, "Profit by day" bars that grow in once, green above zero and brick red below.
- Every screenshot is from a demo store, tagged "Sample data". No real client data.

---

### 5. Har din aur har hafte, hisaab aapke paas

**Daily summary, WhatsApp, email aur dashboard pe**
Aaj kitne orders aaye, marketing pe kitna kharch hua, cost per purchase (CPP) kitna raha, aur Meta wallet mein kitna paisa bacha.

**Weekly report, WhatsApp pe**
Orders, ad spend, RTO, returns, COD, GST, aur aakhir mein kitna profit bacha.

**Har hafte 15 minute ki review call**
Saath mein "kya badla aur kyun" ka likha hua log.

**Design**
- A phone showing a WhatsApp chat. When the section comes into view, a typing indicator appears, then the daily summary bubble, then the weekly report bubble (about 0.8 s apart). Built in HTML and CSS, not an image, so it stays sharp.
- Beside it: a small calendar strip showing a `phone-call` icon on one day each week, labelled "15 min".

---

### 6. AI catalogue photos

## Photographer, model, studio ka kharcha nahi

Aap product ki flat-lay ya hanger photo bhejiye. Model shot hum AI se banate hain, poore catalogue ke liye.

**Design**
- A **before/after slider**: drag the handle to move between the hanger photo and the AI model shot. Show 3–4 kurtis as thumbnails underneath; tapping one swaps the slider.
- Under it: 2–3 AI video ads in phone frames, autoplaying muted with captions.
- Every sample carries a small "AI se bana sample" tag.

---

### 7. Fee

**₹25,000** <small>/mahina + GST</small>

ya net sales ka 4%, jo bhi zyada ho
*Net sales matlab returns aur RTO ke baad ki sales.*

- Meta aur Google ads management
- Shopify store support
- Profit dashboard, daily aur weekly summary
- RTO, COD aur NDR control
- AI catalogue photos aur 10 tak AI video ads
- WhatsApp automation, Instagram, festive calendar
- Har hafte 15 minute ki review call

`Koi lock-in nahi` `Jab chahein band kar sakte hain`

**[Button] Apne brand ke baare mein batayein**

**Design**
- One raised white card on the block-print background. "₹25,000" in the display serif at about 56 px. "/mahina + GST" sits on the same line in 16 px Inter, `--ink-secondary`: smaller than the price but clearly readable.
- The included list uses green `check` icons and staggers in.

---

### 8. Yeh brands hamare saath hain

**5.1x** · Ladakh Berry · Google Ads
₹1,31,198 ke spend pe ₹6,70,173 ki conversion value (lifetime).

**₹6,50,410** · Divine Rudras · Flipkart
30 din ka revenue.

**13 brands** · Shopify aur Flipkart pe

Live stores, jinke saath hum kaam karte hain:
Savana Kurti · Vastranama · Khamma Ghani · Rajvanshi Suit · Amrit Valley · Brinza · HealthScot · PD Wellness · Ladakh Berry

**Design**
- The three numbers in the display serif, green, side by side (stacked on mobile). They don't count up: exact numbers look more believable when they sit still.
- Below them: a **row of store cards**, each a mobile screenshot of the store's homepage with its name, opening the live store in a new tab. On mobile it scrolls sideways; on desktop it drifts slowly and pauses on hover. This doubles as your Shopify design portfolio.

---

### 9. Aapke sawaal

**Ad account kiska hota hai?**
Aapka. Ads aapke apne Meta aur Google account se chalte hain, control aapke paas.

**Band karna ho to?**
Jab chahein. Koi lock-in nahi, koi notice period nahi.

**Store mein kitne changes included hain?**
Roz ke changes aur fixes included hain. Naya page design ya poora redesign alag quote pe.

**Dashboard kab milta hai?**
Onboarding ke 7 din ke andar.

**Design**
- Accordion with a `plus` icon that rotates to `minus`. One answer open at a time.

---

### 10. Form

## Apne brand ke baare mein batayein

| Field | Type |
|---|---|
| Aapka naam | text |
| WhatsApp number | phone |
| Store ya Instagram link | url |
| Har mahine ki sales | Under ₹1L · ₹1–3L · ₹3–10L · ₹10L+ |

**[Button] Application bhejiye**

Koi lock-in nahi · Hum har mahine sirf 3 naye brands lete hain

**Thank-you screen:** Shukriya. Hamari team jaldi aapke WhatsApp pe sampark karegi.

**Design**
- Visible labels above each field, never placeholder-only. Sales as four tap buttons, not a dropdown. Errors show under the field. The button shows a spinner while sending.

---

## Part 2. Images and assets to make

| # | Asset | Where | How to make it |
|---|---|---|---|
| 1 | Dashboard screenshots: Aaj, P&L, Ads, RTO/NDR, Products (mobile 390 px and desktop 1440 px) | Hero, section 4 | Load a **demo store with made-up data** in the Orcas Dashboard and screenshot it. Never use a real client's numbers. |
| 2 | 3–4 kurti pairs: hanger or flat-lay photo, plus the AI model shot | Section 6 | From the AI catalogue tool, on our own sample kurtis or a consenting client's |
| 3 | 2–3 AI video ads, 9:16, 10–15 s, with captions | Section 6 | From the video workflow (Gemini, Kling, Veo) |
| 4 | Mobile homepage screenshots of the 9 live stores | Section 8 | I can capture these from the live sites with the built-in browser |
| 5 | Store logos (SVG or transparent PNG) | Section 8 | From each store's theme files |
| 6 | Block-print pattern | Hero, fee card | Custom SVG; I can draw it |
| 7 | WhatsApp share image, 1200 × 630 | Link preview when the page is forwarded | Headline plus the dashboard phone; I can make it |
| 8 | Meta and Google tile graphics | Section 3 | Built in HTML and CSS, no image needed |

---

## Part 3. Notes for Kiran

1. **Fee is now 4%.** `01-offer-decisions.md` still says 3.5%. Update it so the page and the offer file agree.
2. **GST stays visible.** "+ GST" sits next to the price in smaller text, not hidden. India's 2023 dark-pattern guidelines (CCPA) treat a price element that's revealed late as "drip pricing", and a seller who finds GST only on the invoice stops trusting you on the first bill.
3. **Store list.** Jaipur Rang is still in `results.json` but is no longer a client (pnl-engine roster, 26 Aug), so it's left out. Savana Kurti is listed under the store-listing policy, but not as a case study.
4. **AI samples:** section 6 waits until the photo tool passes the kurti test.

### Claims check (copy-proof-check)

Every number and term on the page traces to a source. No open facts remain.

| Claim | Source |
|---|---|
| ₹25,000/mahina + GST, or 4% of net sales, whichever is higher | Kiran, 2026-11-06 (updates the offer file's 3.5%) |
| Net sales = after returns and RTO | Offer doc §1 |
| No lock-in, stop anytime, no notice | `02` §0 and Kiran, 2026-11-06 |
| 3 new brands a month | Offer doc §1, `02` §0 |
| Meta and Google ad management, with the listed tasks | Kiran, 2026-11-06; task list from `founders.ts` "does" |
| Weekly 15-minute call with change log | Kiran, 2026-11-06 (was 30 minutes); log from offer doc §2 #6 |
| Daily summary: orders, marketing spend, CPP, Meta wallet; on WhatsApp, email and dashboard | Kiran, 2026-11-06 |
| Dashboard live within 7 days of onboarding | Kiran, 2026-11-06 |
| Weekly report contents | Offer doc §2 #2 |
| Dashboard tabs and features, NDR desk, wallet alert, Scale/Keep/Cut | `pnl-engine/docs/PROJECT_STATE.md` (Oct 17, 20 and 29 entries) |
| Meta CAPI for prepaid orders | Kiran, 2026-11-06 |
| Up to 10 AI video ads, included | Offer doc §2 #10 and §5 |
| RTO/COD, WhatsApp, GMC, Instagram, festive calendar, store support | Offer doc §2 #3, #4, #5, #7, #8, #9 |
| 5.1x, ₹6,70,173 on ₹1,31,198; ₹6,50,410 in 30 days; 13 brands | `results.json` |
| Live store names and links | `results.json` `liveUrl`; listing policy, Kiran 2026-11-06 |
| Ad account belongs to the brand | Offer doc §1 ("their own ad account") |

---

## Part 4. What changed from the last draft (v1b)

- **Added:** the profit dashboard (its own section, plus the hero visual), NDR desk, Meta CAPI, wallet alert, daily summary, and full Meta and Google ad management.
- **Changed:** fee 3.5% → 4%; weekly call 30 → 15 minutes; "+ GST" now smaller and next to the price; proof moved to the end; AI photos moved out of the hero to section 6.
- **Removed:** founders, "aage kya hota hai", the no-office and guarantee FAQs, the "not included" list, the ad-spend line, the fee breakpoint example, and four form fields (the form now has 4).
- **Added design:** layout, icons, motion and an asset list for every section, so the page shows off what you can build.

---

## Part 5. Changes after the build (Kiran, 2026-11-06)

Built as `/fashion` (`src/pages/fashion.astro`). These changes override Part 1:

- **Order:** "Ek team. Poora kaam." now comes before "Kya aapka online business aise chalta hai?" (a stronger hook).
- **Form:** "Har mahine ki sales" is replaced by **"Har mahine ka ad spend"**: ₹50K se kam · ₹50K–1L · ₹1–3L · ₹3L+ (bands drafted, Kiran to confirm). Ad spend shows the seller's spending capacity.
- **Leads:** submitting opens WhatsApp with the lead's details typed out to our number. A Google Sheet will be added (needs an Apps Script URL, plus its host in `vercel.json` connect-src). A CRM in the internal tool comes later.
- **FAQ rewritten** (the old questions weren't ones sellers ask): ad spend not in the fee, what the 4% is on, fashion brands we work with, stopping anytime, who keeps account access, GST invoice.
- **Demo dashboard link:** a "Demo dashboard kholiye" button in section 4 appears once `DEMO_DASHBOARD_URL` is set (needs a demo client with made-up data).
- **Desktop width:** content now spans up to 1280 px.
