---
question: How do you reduce COD return rates in India?
shortTitle: How to reduce COD returns in India
category: RTO and returns
directAnswer: Cut COD RTO by verifying addresses before dispatch, confirming high-risk orders by WhatsApp or call, offering a small prepaid discount, and blocking repeat offenders. Most Indian D2C brands can move RTO down several points with these alone.
description: Practical tactics for cutting cash-on-delivery RTO rates in India — address validation, order confirmation, prepaid incentives and courier choice.
updated: 2026-08-05
faqs:
  - question: Should I just turn off COD?
    answer: Almost never. COD is the majority payment method in India and switching it off removes a large share of your addressable market, especially in tier-2 and tier-3 cities. The goal is to make COD less risky, not to eliminate it. The exception is a specific high-value SKU where a single RTO wipes out the margin on several good orders — capping COD above a price threshold is reasonable.
  - question: Does a prepaid discount actually pay for itself?
    answer: Usually yes, if it is sized correctly. A 5% prepaid discount on a ₹1,200 order costs ₹60. One RTO on that order costs you two-way shipping plus packaging plus wasted acquisition — often ₹300 or more. If the discount converts even one order in five from COD to prepaid, it pays for itself several times over. Run the arithmetic on your own numbers before setting the rate.
  - question: How do I know which orders are risky?
    answer: The reliable signals are address quality (incomplete, no landmark, PIN mismatch), order value far above your average, first-time buyer on COD, a PIN code with a history of failed deliveries, and multiple orders to the same address in quick succession. You can score these manually at low volume; above a few hundred orders a month it needs to be automated.
related:
  - what-is-rto-and-what-does-it-cost
  - gross-vs-net-revenue-agency
---

## Start by knowing your actual number

Before changing anything, calculate your RTO rate honestly: RTO'd orders divided by total dispatched orders, over at least 60 days. Split it by payment method, by category, and by PIN code. Almost every brand we look at discovers the problem is concentrated — a handful of PIN codes, one or two SKUs, or a specific price band doing most of the damage.

You cannot fix an average. You can fix a concentration.

## The tactics, roughly in order of return on effort

### 1. Validate the address before dispatch

The cheapest fix. A large share of Indian RTOs are not refusals at all — they are failed deliveries against incomplete addresses.

- Make the phone number field mandatory and validate the format
- Flag addresses missing a house number, landmark, or locality
- Check the PIN code against the stated city and reject mismatches at checkout
- For anything ambiguous, confirm before the parcel leaves

### 2. Confirm high-risk COD orders

Not every order. That wastes your time and annoys good customers. Score orders on risk and confirm only the top slice.

A WhatsApp message works better than a call in India — it is asynchronous, it does not feel like a sales attempt, and the customer replies at their convenience. Something short: confirm the order, confirm the address, confirm they will be available. Orders that go unanswered after two attempts get held, not shipped.

### 3. Make prepaid genuinely more attractive

A small discount, free shipping on prepaid only, or a small loyalty credit. The point is not to punish COD but to give the undecided buyer a reason to commit. Every order converted from COD to prepaid is an order that will almost certainly be delivered.

Size the discount against your actual RTO cost, not against a competitor's offer.

### 4. Block or restrict repeat offenders

Keep a list of phone numbers and addresses that have RTO'd more than once. Restrict them to prepaid. Most platforms and RTO tools can automate this; at low volume a spreadsheet is fine.

### 5. Choose couriers on delivery success, not just rate

The cheapest courier in a given PIN code is frequently not the cheapest once RTO is priced in. Track first-attempt delivery success by courier by region, and route accordingly. A courier that is ₹8 more expensive but delivers 6% more successfully is cheaper.

### 6. Set delivery expectations honestly

A meaningful share of refusals come from parcels arriving later than the buyer expected, after the impulse has passed. If your realistic delivery window is 5–7 days, say 5–7 days. Promising 2–3 and delivering in 6 manufactures refusals.

## What not to do

- **Do not hide the COD option** to force prepaid. Buyers leave.
- **Do not add a large COD fee.** It reads as a penalty and depresses conversion more than it saves in RTO.
- **Do not ignore the courier data.** Most sellers never look at delivery success by partner, and it is one of the largest available levers.

## How we handle it

RTO management is inside the 3.5%, not an add-on — address validation, confirmation flows, courier routing, dispute filing on incorrectly marked attempts, and monthly reporting on the rate by SKU and region. Because we are paid on net sales after RTOs are deducted, a high RTO rate costs us directly. That is the point of the structure.

## Sources

RTO rate context from published Indian logistics analyses, 2026, including [GoKwik](https://www.gokwik.co/blog/what-is-return-to-origin-rto-in-ecommerce) and [Shipmozo](https://www.shipmozo.com/blog/how-to-reduce-rto-in-ecommerce). Tactics reflect standard practice across the accounts we run; the arithmetic examples are illustrative — use your own shipping cost and CPA.
