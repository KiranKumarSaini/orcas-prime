---
question: How do you choose a courier partner for a D2C store in India?
shortTitle: How we choose a courier partner
category: RTO and returns
directAnswer: We choose a courier by real delivery success in your specific pin codes, not headline rate. A cheaper courier that fails more often costs more overall — you pay for it as RTOs instead of on the invoice.
description: How to actually choose between courier partners for an Indian D2C store — why the cheapest rate card is rarely the cheapest courier, and the region-by-region way to compare them properly.
updated: 2026-08-09
faqs:
  - question: Should I use one courier for everything, or split volume across a few?
    answer: Split it, once you have enough order volume to see the pattern. Most couriers are strong in some regions and weak in others — there is no single national courier that's genuinely best everywhere. Two or three couriers, routed by pin code to whichever performs best there, consistently beats one courier used for every order.
  - question: How much order volume do I need before this is worth doing properly?
    answer: A few hundred orders a month is usually enough for a region-by-region pattern to become visible. Below that, the sample per pin code is too small to trust — wait, or lean on your aggregator's aggregate data in the meantime rather than switching couriers on a handful of bad experiences.
  - question: What about courier aggregators like Shiprocket or Pickrr?
    answer: Aggregators are a reasonable starting point — they give you access to several couriers without separate contracts and often auto-route by their own performance data. The limitation is that their routing logic optimises across their whole client base, not specifically for your categories and regions, so it's still worth checking their choices against your own data once you have some.
related:
  - what-is-rto-and-what-does-it-cost
  - how-to-reduce-cod-returns-india
  - when-to-scale-or-stop-an-ad-campaign
---

## What choosing a courier actually involves

Choosing a courier means deciding which logistics company physically carries your orders from your warehouse to the customer — and, just as importantly, which one handles the return leg when a delivery fails. In India this is rarely a single decision. Most sellers end up working with two or three courier partners at once, routed by region, rather than picking one and sending every order through it.

The decision gets made badly in one very specific way: by comparing rate cards. Courier A charges ₹42 per shipment, Courier B charges ₹38, so Courier B looks cheaper. That comparison leaves out the number that actually determines your cost — how often each courier successfully delivers the parcel.

## Why the rate card is the wrong number to start with

A shipment that RTOs (comes back as return to origin — the courier couldn't deliver it, whether refused at the door, address not found, or repeated failed attempts) costs you the forward shipping fee, the return shipping fee, the packaging, and the ad spend you paid to acquire that order in the first place, with no revenue at the end of it. A ₹4 difference in the per-shipment rate is irrelevant next to that.

Work the arithmetic on 1,000 monthly orders. Courier A, at ₹42/shipment with a 12% RTO rate in your main states, costs ₹42,000 in shipping plus roughly ₹50,400 in RTO losses (120 failed orders, each costing an estimated ₹420 in both-leg shipping and lost acquisition spend) — call it ₹92,400 total. Courier B, at ₹38/shipment but a 20% RTO rate in the same states, costs ₹38,000 in shipping plus roughly ₹84,000 in RTO losses (200 failed orders at the same ₹420) — ₹122,000 total. The "cheaper" courier costs nearly ₹30,000 more a month on identical volume, entirely because of a delivery-success gap the rate card never showed you.

## Why the same courier performs differently by region

No courier is uniformly good or bad across India, and that's the structural reason a single national choice is usually wrong. A courier's local delivery network, the density of its delivery agents, and its familiarity with regional address formats all vary state by state and often city by city. A courier that delivers 95% successfully in Bengaluru might run at 78% in parts of Bihar or the Northeast — not because the company is worse, but because its ground network there is thinner.

Address quality compounds this. Outside metros, addresses are more often incomplete, informally described, or shared across households, which raises RTO risk regardless of courier — but some couriers' local agents are simply better at resolving an ambiguous address with a phone call before marking it undeliverable, and that skill is regional, not company-wide.

## What we actually check before choosing or switching

**Delivery success rate by state, not a national average.** A national number hides exactly the variation that matters. We look at successful-delivery percentage broken down by the states or even pin-code clusters an account actually ships to.

**RTO reason codes, where the courier provides them.** "Refused" and "address not found" point at different fixes — refused is often a COD or expectation problem on your side, address-not-found is more often a genuine courier or address-data issue. Treating them the same hides which lever to pull.

**First-attempt delivery rate**, not just eventual delivery. A courier that takes four attempts to deliver ties up your customer's patience and your working capital longer than one that delivers on the first or second try, even if both eventually succeed.

**Dispute and claim responsiveness.** Couriers occasionally mark a delivery attempt that never happened, or lose a parcel on the return leg. How consistently a courier resolves disputed claims is itself a real cost difference, not a footnote.

When one courier is meaningfully stronger in a given region, we route that region's orders to it — even if it means running two or three couriers at once rather than one relationship for simplicity's sake. Simplicity that costs 8 percentage points of RTO isn't actually simpler.

## How we approach this for Partner Brands

We track delivery performance by courier and by state monthly, not once at onboarding and then never again — a courier's regional network changes, and a choice that was right six months ago can quietly stop being right. Where a courier has marked a delivery attempt that didn't happen, or lost a return-leg parcel, we file the dispute; most sellers don't bother, which is part of why the money is recoverable when someone does. This work sits inside the 3.5% we charge on net sales, not as a separate line item, because a courier choice that raises your RTO rate lowers what we get paid too.

## Sources

Regional courier performance variation and dispute-handling context reflect standard practice across the accounts we run and published Indian logistics analyses, including [GoKwik](https://www.gokwik.co/blog/what-is-return-to-origin-rto-in-ecommerce) and [Shipmozo](https://www.shipmozo.com/blog/how-to-reduce-rto-in-ecommerce). The worked arithmetic is illustrative — substitute your own rate cards and RTO rates.
