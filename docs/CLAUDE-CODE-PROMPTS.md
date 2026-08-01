# Orcas Prime — Claude Code Setup & Prompt Sequence

How to use this file: work top to bottom. Copy each prompt into Claude Code
exactly as written, one at a time. Review the result before moving to the next.
Don't skip ahead — later prompts assume earlier ones are done.

---

## Part 0 — One-time setup (do this first)

### Step 1: Make a folder for the project

Open your terminal and run these one at a time:

```bash
mkdir ~/orcas-prime
cd ~/orcas-prime
```

### Step 2: Put the brief in the folder

Save `PROJECT-BRIEF.md` into `~/orcas-prime/`.
(Drag it there in Finder/Explorer — no terminal needed.)

### Step 3: Start Claude Code in that folder

```bash
claude
```

That's it. Claude Code will handle installing Astro and everything else — the
first prompt below tells it to.

> **If a command fails**, paste the exact error into Claude Code and ask it to
> fix it. That's the fastest path — don't debug alone.

---

## Part 1 — Foundation

### Prompt 1 — Orientation

```
Read PROJECT-BRIEF.md in this directory, completely, before doing anything else.

Then, without writing any code yet, tell me:
1. Your one-paragraph summary of what we're building and why it's shaped this way
2. The three decisions in the brief you think are most likely to be executed badly
3. Anything in the brief that's ambiguous or that you'd need clarified

I want to confirm you've understood the strategy before we start building.
```

**Why this first:** it verifies the brief transferred correctly. If Claude Code's
summary doesn't match what we decided, fix that before any code exists.

---

### Prompt 2 — Scaffold the project

```
Set up the Astro project in this directory, following PROJECT-BRIEF.md §10.

Requirements:
- Astro with TypeScript
- Tailwind CSS integration
- Astro content collections configured for two collections: `guides` and `work`
- Fonts via Fontsource (self-hosted, not Google Fonts CDN — render-blocking):
  Fraunces variable, Geist Sans, Geist Mono
- Sitemap integration
- A sensible src/ structure: components, layouts, pages, data, content, styles

Explain what you're installing and why before you run anything.
Then run it, and confirm `npm run dev` starts cleanly.
```

---

### Prompt 3 — Design tokens

```
Create the design token system from PROJECT-BRIEF.md §8.

- All colours as CSS custom properties in a global stylesheet
- Extend the Tailwind config so tokens are usable as utilities
  (bg-paper, text-ink, text-ochre, border-rule, etc.)
- A type scale for the three faces with sensible fluid sizing
- Geist Mono must use tabular figures by default — set font-feature-settings
  so numbers align in columns. This is important, don't skip it.
- Small, consistent border radius. No large rounded corners.

Then build me a single test page at /styleguide that shows every token,
every type size, and a sample data table, so I can see the system before we
build real pages.

Pay attention to the execution warning in §8 — this palette is close to a
common AI-generated look and the difference is entirely in precision.
```

**Review point:** open `localhost:4321/styleguide`. If it feels generic here,
it'll feel generic everywhere. Say so and iterate before continuing.

---

### Prompt 4 — Base layout, header, footer

```
Build the base layout, header, and footer.

Header: minimal. Wordmark left, nav right (Pricing, Work, Services, About).
No sticky-on-scroll glassmorphism. Mobile menu should be simple and fast.

Footer: this is where location and founder identity live (see §3 — deliberately
kept out of the hero). Include full Jaipur address, both founder names, contact,
and nav. Leave clear TODO comments where I need to supply the real address,
phone, and email.

Base layout must include:
- Proper semantic landmarks (header/main/footer, skip-to-content link)
- Meta tag handling with per-page title and description as props
- Open Graph and Twitter card tags
- A slot for per-page JSON-LD schema

Follow the quality floor in §9. Show me the header and footer on the styleguide
page when done.
```

---

### Prompt 5 — AEO plumbing

```
Implement the AI discoverability layer from PROJECT-BRIEF.md §7.

1. robots.txt allowing every AI crawler listed in §7 explicitly, plus sitemap ref
2. llms.txt at the site root describing the site for AI crawlers
3. A reusable Schema.astro component that emits JSON-LD, with typed variants for:
   Organization, LocalBusiness, Service, FAQPage, Person, BreadcrumbList
4. Wire Organization + LocalBusiness schema into the base layout sitewide
5. Canonical URL handling

Use placeholder values for address/phone where I haven't given you real data,
but mark each one with an obvious TODO comment so I can find them all later.

When done, list every TODO you left me, in one place.
```

**After this:** you'll have a list of real-world details to fill in. Get those
sorted before launch.

---

## Part 2 — Pages

Build order is fixed: **Homepage → Pricing → Amazon → Services → Work → About →
How We Work → Contact.** Review each before the next.

### Prompt 6 — Results data file

```
Create src/data/results.json containing every metric from PROJECT-BRIEF.md §5,
structured so figures can be updated without touching any component.

Include the client list, the ad spend figures, and the derived headline numbers.
Add a `lastUpdated` field.

Then create a typed helper for reading it.

Critical: only the numbers in §5 go in this file. No placeholders, no rounded-up
versions, no invented figures. If a client has no metric, the field stays as the
qualitative description given.
```

---

### Prompt 7 — Homepage

```
Build the homepage following PROJECT-BRIEF.md §3 (message hierarchy), §4
(pricing table), §5 (proof), §8 (visual direction), §9 (UX rules).

Use the headline and subhead verbatim from §3.

The pricing comparison table is the signature element and goes above the fold.
It must be genuinely well-set — this is the thing that gets screenshotted and
forwarded on WhatsApp, so it has to look excellent at mobile widths too.

Pull all metrics from results.json. No hardcoded numbers.

Contextual WhatsApp CTAs per §9 — pre-filled messages, no popups, no fake scarcity.

Before you write code: show me your section-by-section plan and the copy you
intend to use for anything not already specified in the brief. I want to approve
the copy before it's built.
```

**This is the big one.** Expect to iterate two or three times.

---

### Prompt 8 — Pricing page

```
Build /pricing following PROJECT-BRIEF.md §4.

This is the most strategically important page on the site — it's the one most
likely to be cited by an AI answering "how much do ecommerce agencies charge in
India."

Structure it for extraction: direct answer in the first 40 words, then detail.
Add FAQPage schema.

Footnote the competitor comparison column with sources per §4.

Do NOT include the ₹2,000 security deposit — explicitly excluded in §4.
Do NOT mention that the rate is negotiable.

Show me your copy plan first.
```

---

### Prompt 9 — Amazon free onboarding page

```
Build /amazon-free-onboarding.

This is the wedge offer — zero-risk entry for sellers not yet on Amazon.
It gets its own page (not a homepage section) because it's the most defensible
thing the business offers and a strong AI-citation target.

It needs to answer honestly: how the free 3 months works, what's included, what
happens after, why it's free (referral commission from the platform), and that
there's no lock-in.

I'll need to give you the exact referral program mechanics — ask me for what
you need before writing the copy.
```

---

### Prompt 10 — Services

```
Build the /services hub and all five service pages listed in §6.

Each service page must convert independently — a visitor may land here from
ChatGPT having never seen the homepage. So each needs: what it is, what's
included, what it costs (the 3.5% covers it), proof, and a contextual WhatsApp CTA.

Add Service schema to each.

Keep them genuinely different from each other. Five near-identical pages is
worse than three good ones.
```

---

### Prompt 11 — Work / case studies

```
Build /work and the case study collection per §6 and §8.

The showcase framing is results, not aesthetics — use the copy in §8.

Feature ladakhberry.in, thevastramahal.in, thesavanakurti.com. Show the stores
in device frames with visibly different colour worlds side by side.

Note from §8: these stores have known defects. Link to homepages only, never
deep-link into them.

Metrics come from results.json only.
```

---

### Prompt 12 — About, How We Work, Contact

```
Build /about, /how-we-work, and /contact.

/about is where "two founders in Jaipur" becomes a strength — explain what it
actually means for a client (you talk to the people doing the work, not an
account manager). Add Person schema for Kiran and Prashant.

I'll supply bios and photos — ask me for exactly what you need in what format.

/how-we-work: process, reporting cadence, what a client should expect.
/contact: WhatsApp-first per §9.
```

---

## Part 3 — Content engine & launch

### Prompt 13 — Guides infrastructure

```
Build /guides — the hub and the individual guide template.

Per §7 Layer 3, every guide follows: real question as h1, direct answer in the
first 40 words, then detail. FAQPage and BreadcrumbList schema on each.

Then suggest 10 guide topics that (a) real Indian ecommerce sellers actually ask,
(b) Orcas Prime can answer from genuine operating experience, and (c) currently
have no good citable answer on the web.

Don't write them yet — I want to pick which ones first.
```

---

### Prompt 14 — Audit before launch

```
Full pre-launch audit. Don't fix anything yet — report first.

1. Run Lighthouse on every page. Report all four scores per page.
2. Validate every JSON-LD block.
3. Check WCAG AA contrast on every colour pairing in use.
4. Test keyboard navigation end to end.
5. Check every internal link resolves.
6. Confirm no placeholder or TODO text remains in any user-visible copy.
7. Verify robots.txt and llms.txt are served correctly.
8. Check the site at 360px, 640px, 1024px, 1280px.

Give me a prioritised list of what's broken. Then wait for me to say what to fix.
```

**Important:** the brief says to publish the real Lighthouse score on the site.
Use the number from this audit — never an aspirational one.

---

### Prompt 15 — Deploy

```
Walk me through deploying to Vercel, step by step, assuming I'm not technical.

Cover: what I need to create an account for, exactly what to click, how to point
the domain, and how to verify it worked.

Then give me a separate checklist for the things I have to do outside the code:
Google Search Console, Bing Webmaster Tools, IndexNow, Google Business Profile,
LinkedIn company page, Clutch listing.

For each one: why it matters for AI discoverability, and roughly how long it takes.
```

---

## Useful mid-build prompts

Keep these for when you need them:

```
Show me what this looks like at 360px width and tell me what's wrong with it.
```

```
This section feels generic to me. Diagnose why, then propose two alternatives
that are specific to this brief rather than defaults.
```

```
Re-read PROJECT-BRIEF.md §9 and check this page against every rule in it.
```

```
I don't have the data for this yet. Build it so the numbers come from
results.json and leave the fields empty rather than inventing values.
```

```
Before you build that, show me the copy.
```

---

## Two habits worth keeping

**Update the brief as decisions change.** When you and Claude Code settle
something new, ask it to add that to `PROJECT-BRIEF.md`. The file stays the
source of truth and survives every future session.

**Commit after each approved page.** Ask Claude Code to set up git at the start
and commit after each page you sign off on. If something breaks later, you can
go back.
