/**
 * Behaviour for the ad landing pages (docs/growth/02b).
 *
 * Motion: `motion` only (mini WAAPI animate + inView). Every animation is
 * skipped under prefers-reduced-motion; the inline head script in
 * LandingLayout only sets hidden pre-animation states when motion is
 * allowed, so with reduced motion or no JS everything is simply visible.
 */
import { animate } from 'motion/mini';
import { inView } from 'motion';
import EmblaCarousel from 'embla-carousel';

declare global { interface Window { __lpReady?: boolean } }

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function fadeUp(el: Element, delayMs = 0, y = 24, duration = 0.6) {
  return animate(
    el,
    { opacity: [0, 1], transform: [`translateY(${y}px)`, 'translateY(0)'] },
    { duration, delay: delayMs / 1000, ease: EASE }
  );
}

/* ── Entrance motion ─────────────────────────────────────────────────── */
function initMotion() {
  const anim = document.documentElement.classList.contains('lp-anim') && !reduced();
  if (!anim) return;

  // Hero load order (02b §1): 0 / 120 / 200 / 300 / 360 ms, cards at 700 / 1,100.
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((el) => {
    fadeUp(el, Number(el.dataset.hero), el.dataset.hero === '360' ? 32 : 16);
  });
  document.querySelectorAll<HTMLElement>('[data-float]').forEach((el) => {
    el.style.opacity = '0';
    animate(
      el,
      { opacity: [0, 1], transform: ['translateY(12px) scale(0.96)', 'translateY(0) scale(1)'] },
      { duration: 0.5, delay: Number(el.dataset.float) / 1000, ease: EASE }
    );
  });

  // Sections: slide up and fade in once. Items inside [data-stagger] go
  // one after another at that gap; everything else 0 delay.
  const seen = new WeakSet<Element>();
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    inView(el, () => {
      if (seen.has(el)) return;
      seen.add(el);
      const group = el.parentElement?.closest<HTMLElement>('[data-stagger]');
      let delay = 0;
      if (group && el.parentElement === group) {
        const gap = Number(group.dataset.stagger) || 80;
        // Stagger only among siblings entering together.
        const now = performance.now();
        const last = Number(group.dataset.lastAt || 0);
        const idx = now - last < 120 ? Number(group.dataset.idx || 0) + 1 : 0;
        group.dataset.idx = String(idx);
        group.dataset.lastAt = String(now);
        delay = idx * gap;
      }
      fadeUp(el, delay);
    }, { amount: 0.15 });
  });

  // Section 2: problem first, then the fix slides in under (or beside) it.
  document.querySelectorAll<HTMLElement>('[data-ba]').forEach((row) => {
    const now = row.querySelector('[data-ba-now]')!;
    const fix = row.querySelector('[data-ba-fix]')!;
    const line = row.querySelector<SVGPathElement>('[data-ba-line]');
    (now as HTMLElement).style.opacity = '0';
    (fix as HTMLElement).style.opacity = '0';
    inView(row, () => {
      fadeUp(now, 0, 12, 0.5);
      if (line) animate(line, { strokeDashoffset: [40, 0] }, { duration: 0.4, delay: 0.25 });
      const wide = window.matchMedia('(min-width: 900px)').matches;
      animate(
        fix,
        { opacity: [0, 1], transform: [wide ? 'translateX(-16px)' : 'translateY(-10px)', 'translate(0,0)'] },
        { duration: 0.55, delay: 0.35, ease: EASE }
      );
    }, { amount: 0.6 });
  });

  // Bars grow in once.
  const chart = document.querySelector('[data-chart]');
  if (chart) {
    inView(chart, () => {
      chart.querySelectorAll('.lp-bar').forEach((bar, i) => {
        animate(bar, { transform: ['scaleY(0)', 'scaleY(1)'] }, { duration: 0.5, delay: 0.1 + i * 0.04, ease: EASE });
      });
    }, { amount: 0.4 });
  }

  // WhatsApp chat: typing, daily summary, typing, weekly report (~0.8 s apart).
  const chat = document.querySelector<HTMLElement>('[data-chat]');
  if (chat) {
    const typing = chat.querySelector<HTMLElement>('[data-typing]')!;
    const msgs = Array.from(chat.querySelectorAll<HTMLElement>('[data-chat-msg]'));
    inView(chat, () => {
      (async () => {
        for (const m of msgs) {
          typing.style.display = 'flex';
          await sleep(800);
          typing.style.display = 'none';
          m.style.display = 'block';
          fadeUp(m, 0, 8, 0.35);
          await sleep(300);
        }
      })();
    }, { amount: 0.5 });
  }
}

/* ── Dashboard tabs (desktop) ────────────────────────────────────────── */
function initTabs() {
  const list = document.querySelector<HTMLElement>('[role="tablist"]');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls')!)!;
      const desc = document.querySelector<HTMLElement>(`[data-desc="${t.id.replace('tab-', '')}"]`);
      if (desc) desc.hidden = !on;
      if (on) {
        panel.hidden = false;
        if (!reduced()) animate(panel, { opacity: [0, 1] }, { duration: 0.2 });
      } else {
        panel.hidden = true;
      }
    });
    if (focus) tab.focus();
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      let n = -1;
      if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') n = 0;
      else if (e.key === 'End') n = tabs.length - 1;
      if (n >= 0) { e.preventDefault(); select(tabs[n], true); }
    });
  });
}

/* ── Dashboard carousel (mobile) ─────────────────────────────────────── */
function initCarousel() {
  const root = document.querySelector<HTMLElement>('[data-embla]');
  const dotsWrap = document.querySelector<HTMLElement>('[data-embla-dots]');
  if (!root || !dotsWrap) return;
  const embla = EmblaCarousel(root, { align: 'start', containScroll: 'trimSnaps', duration: reduced() ? 0 : 25 });
  const dots = Array.from(dotsWrap.querySelectorAll<HTMLButtonElement>('button'));
  dotsWrap.hidden = false;
  dots.forEach((d, i) => d.addEventListener('click', () => embla.scrollTo(i)));
  const sync = () => {
    const i = embla.selectedScrollSnap();
    dots.forEach((d, j) => d.setAttribute('aria-current', String(i === j)));
  };
  embla.on('select', sync);
  embla.on('reInit', sync);
}

/* ── Kurti thumbnails swap the comparison slider ─────────────────────── */
function initKurtis() {
  const thumbs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-kurti]'));
  const before = document.querySelector<HTMLElement>('[data-before] strong');
  const after = document.querySelector<HTMLElement>('[data-after] strong');
  const slider = document.querySelector<HTMLElement & { value?: number }>('img-comparison-slider');
  thumbs.forEach((b) => b.addEventListener('click', () => {
    const k = b.dataset.kurti;
    thumbs.forEach((t) => t.setAttribute('aria-pressed', String(t === b)));
    // Placeholder labels for now; with real assets swap the <img> src here.
    if (before) before.textContent = `Hanger photo · Kurti ${k}`;
    if (after) after.textContent = `AI model shot · Kurti ${k}`;
    if (slider) slider.value = 50;
  }));
}

/* ── Sticky mobile CTA ───────────────────────────────────────────────
   Appears once the hero button has scrolled away, and steps aside whenever
   another in-page button or the form is on screen, so it never covers one. */
function initSticky() {
  const bar = document.getElementById('lp-sticky');
  const hero = document.querySelector<HTMLElement>('.lp-hero__cta');
  const form = document.getElementById('apply');
  if (!bar || !hero || !form || !('IntersectionObserver' in window)) return;
  const link = bar.querySelector('a')!;
  const others = Array.from(document.querySelectorAll<HTMLElement>('main a[href="#apply"]')).filter((a) => !hero.contains(a));
  let pastHero = false;
  const onScreen = new Set<Element>();
  const update = () => {
    const show = pastHero && onScreen.size === 0;
    bar.dataset.shown = String(show);
    link.tabIndex = show ? 0 : -1;
    bar.toggleAttribute('inert', !show);
  };
  bar.toggleAttribute('inert', true);
  // The hero button starts on screen, so leaving it always fires, even on a fast fling.
  new IntersectionObserver(([e]) => {
    pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
    update();
  }).observe(hero);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
    update();
  }, { threshold: 0.05 });
  others.forEach((a) => io.observe(a));
  io.observe(form);
}

/* ── Form: WhatsApp hand-off now, Google Sheet once data-endpoint is set ── */
function initForm() {
  const form = document.getElementById('lp-form') as HTMLFormElement | null;
  const thanks = document.getElementById('lp-thanks');
  if (!form || !thanks) return;
  const name = form.querySelector<HTMLInputElement>('#f-name')!;
  const phone = form.querySelector<HTMLInputElement>('#f-phone')!;
  const link = form.querySelector<HTMLInputElement>('#f-link')!;
  const opts = form.querySelector<HTMLElement>('#f-spend')!;
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;

  const setErr = (el: HTMLElement, errId: string, bad: boolean) => {
    el.setAttribute('aria-invalid', String(bad));
    document.getElementById(errId)!.classList.toggle('is-on', bad);
  };
  const digits = (v: string) => v.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '');
  const checks = {
    name: () => name.value.trim().length >= 2,
    phone: () => /^[6-9]\d{9}$/.test(digits(phone.value)),
    // Accepts a full URL, a bare domain, an instagram.com link or an @handle.
    link: () => /^(@[\w.]{2,}|(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?)$/i.test(link.value.trim()),
    spend: () => Boolean(form.querySelector('input[name="adspend"]:checked')),
  };
  const validate = () => {
    const r = { name: checks.name(), phone: checks.phone(), link: checks.link(), spend: checks.spend() };
    setErr(name, 'e-name', !r.name);
    setErr(phone, 'e-phone', !r.phone);
    setErr(link, 'e-link', !r.link);
    setErr(opts, 'e-spend', !r.spend);
    return r;
  };

  // Clear an error as soon as the field is fixed.
  name.addEventListener('input', () => name.getAttribute('aria-invalid') === 'true' && checks.name() && setErr(name, 'e-name', false));
  phone.addEventListener('input', () => phone.getAttribute('aria-invalid') === 'true' && checks.phone() && setErr(phone, 'e-phone', false));
  link.addEventListener('input', () => link.getAttribute('aria-invalid') === 'true' && checks.link() && setErr(link, 'e-link', false));
  opts.addEventListener('change', () => setErr(opts, 'e-spend', false));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const r = validate();
    const firstBad = (['name', 'phone', 'link', 'spend'] as const).find((k) => !r[k]);
    if (firstBad) {
      const target = firstBad === 'spend' ? form.querySelector<HTMLInputElement>('input[name="adspend"]')! : ({ name, phone, link } as const)[firstBad];
      target.focus();
      return;
    }
    btn.setAttribute('aria-busy', 'true');
    btn.disabled = true;
    const data = new FormData(form);
    // The lead's details, typed out for WhatsApp. Sent by the visitor, so it
    // reaches us even before the Sheet is connected.
    const waText = [
      'Namaste, mujhe apne brand ke liye Orcas Prime se baat karni hai.',
      `Naam: ${data.get('name')}`,
      `WhatsApp: ${data.get('whatsapp')}`,
      `Store / Instagram: ${data.get('link')}`,
      `Har mahine ka ad spend: ${data.get('adspend')}`,
    ].join('\n');
    const waHref = `${form.dataset.wa}?text=${encodeURIComponent(waText)}`;
    const endpoint = form.dataset.endpoint;
    try {
      // Saving to the Sheet must never block the WhatsApp hand-off.
      if (endpoint) {
        await Promise.race([
          fetch(endpoint, { method: 'POST', body: data, mode: 'no-cors' }).catch(() => undefined),
          sleep(2500),
        ]);
      } else {
        await sleep(400);
      }
    } finally {
      btn.removeAttribute('aria-busy');
      btn.disabled = false;
    }
    form.hidden = true;
    thanks.hidden = false;
    const fallback = document.getElementById('lp-thanks-wa') as HTMLAnchorElement | null;
    if (fallback) { fallback.href = waHref; fallback.hidden = false; }
    thanks.focus();
    if (!reduced()) fadeUp(thanks, 0, 12, 0.4);
    window.location.href = waHref;
  });
}

export function initLanding() {
  window.__lpReady = true;
  initMotion();
  initTabs();
  initCarousel();
  initKurtis();
  initSticky();
  initForm();
}
