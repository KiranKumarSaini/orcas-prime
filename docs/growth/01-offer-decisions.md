# Growth Offer — Decisions and Ideas

**Started:** 2026-11-05
**Status:** Brainstorm. Nothing here is final until it's priced, tested and on the site.

---

## 1. Price (proposed)

- **DECIDED 2026-11-05: list price ₹25,000 + GST a month, or 3.5% of net sales,
  whichever is higher.** Net sales = sales after returns and RTOs. This is the
  only price on the website.
- **Founding-partner rate: ₹20,000 + GST**, for the first 5 clients only,
  locked for 6 months. In exchange they give permission to publish their
  numbers, a short video testimonial, and agree to take reference calls.
  Offered on the sales call, never advertised (brand rule: no "limited slots").
- **Capacity line (DECIDED 2026-11-05, Kiran):** the site and ads say we take on
  **3 new brands a month**. This replaces the old "no limited slots" rule
  (LOCKED #36) for this one message. It must stay true and calm: a statement of
  capacity, never a countdown like "only 1 slot left".
- **Review rule:** if 10 qualified sales calls at this price close zero clients,
  revisit the price or the offer.
- Ad spend is separate. The client pays it from their own ad account.

## 2. What's included

| # | Feature | Notes |
|---|---|---|
| 1 | **AI catalogue photos** | Turn flat-lay or hanger product photos into model shots for the whole Shopify catalogue. Build an in-house tool on the Gemini image API or another image-generation API, or an offline model, that generates the photos and uploads them to Shopify. |
| 2 | **Weekly true-profit report on WhatsApp** | Orders, ad spend, RTO, returns, COD, GST, and the profit actually kept. Automated, likely with n8n plus Shopify and ad-account data. |
| 3 | **RTO and COD system** | WhatsApp COD confirmation, blocking bad pincodes, nudges to pay prepaid, monthly RTO % tracking. |
| 4 | **WhatsApp automation** | Abandoned cart, order updates, reorder reminders (for example, a juice reorder at 25–30 days), festival broadcasts. |
| 5 | **Festive and sale calendar** | Diwali, wedding season, Rakhi, end-of-season sales. Planned 4–6 weeks ahead with creatives ready. |
| 6 | **Weekly review call** | Changed from monthly to weekly at Kiran's request. Comes with a "what we changed and why" log. |
| 7 | **Google Merchant Center (GMC)** | Free product listings on Google, plus Shopping campaigns where ad budget allows. |
| 8 | **Full Shopify store support** | Day-to-day changes are included. Sellers usually ask for a few changes at onboarding, then rarely, and AI makes the work fast. **Not included:** designing whole new pages or a full product-page redesign (quoted separately). |
| 9 | **Social media handling** | Reels, captions and posting. Not "full social media management": no replying to comments or DMs, and no influencer work. Run by a new full-time daytime intern. |
| 10 | **AI video ads, up to 10 a month** | Promoted on the landing page. See the cost notes in §5. |

## 3. Dropped

- **Competitor watch as a client-facing feature.** We still use Meta Ad Library
  internally for creative ideas.
- **Product-level advice as a separate feature.** Sellers already know their
  best sellers. It's part of normal strategy work.

## 4. Never included

Customer support, influencer management, inventory or logistics management,
unlimited creative revisions.

## 5. Notes to resolve before the landing page

- **"Free" AI videos.** Say "included," not "free." "Free" draws freebie-seekers,
  the people we want to filter out.
- **10 videos a month.** Using a mix of tools (Gemini Pro, Kling, Veo Lite), this
  costs about ₹5–7.5K per client a month. A client spending ₹30K a month on ads
  can only properly test 4–6 new ads, so write **"up to 10"**. Most videos can be
  re-cuts of the same clips. These estimates are unverified until we run the
  free tool test (one kurti, one bottle).
- **Weekly calls and team hours.** Each call takes 30 minutes. With 15 clients
  that's about 7.5 hours a week, mostly in Kiran's day or Prashant's evenings.
  It's fine at today's client count; check again past about 10 clients.
- **Fair-use wording for Shopify support.** Write one line for the contract and
  sales script, for example: "Store changes and fixes are included. New page
  designs or redesigns are quoted separately."
- **New intern: sales calls and social media.** The intern can make first
  qualifying calls and handle social media. Kiran still closes every deal.
  Prospects who will pay ₹25K expect to speak to a founder.

## 6. Order to build the in-house tools (suggested)

1. WhatsApp automation and the COD/RTO system. Mostly existing apps, so they're
   live fastest and help retention right away.
2. Weekly true-profit report (n8n).
3. AI catalogue photo tool. It's the biggest sales hook, but quality needs to be
   tested on real kurtis first.
