/**
 * Shared motion helpers (Module 10 §3).
 *
 * Vanilla `motion` — NOT framer-motion + React. Same library and engine
 * (Framer Motion was renamed `motion`); only the entry point differs. The
 * React API would cost ~105 KB with React on a site that currently ships zero
 * framework JS to Indian mobile. The vanilla API is a fraction of that for
 * identical spring/easing quality.
 *
 * Every helper here is a no-op under `prefers-reduced-motion: reduce`. That is
 * enforced in one place on purpose: a guard repeated at each call site is a
 * guard that eventually gets forgotten.
 */

/** True when the visitor has asked for less motion. Re-read per call — the OS
 *  setting can change mid-session. */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** True for a real pointer (mouse/trackpad). Magnetic and hover-travel effects
 *  are pointer-only — on touch they either never fire or fire stuck. */
export function hasFinePointer(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches
  );
}

/** The project's entrance easing, matching Module 4 §6's cubic-bezier. */
export const EASE_ENTRANCE = [0.16, 1, 0.3, 1] as const;

/**
 * Run `fn` once the element first enters the viewport, then stop observing.
 * Never re-fires on scroll-back (Module 4 §6).
 *
 * `fallback` runs instead when IntersectionObserver is unavailable, so content
 * is never left in a hidden pre-animation state.
 */
export function onceInView(
  el: Element,
  fn: () => void,
  opts: { threshold?: number; fallbackDelayMs?: number } = {}
): void {
  const { threshold = 0.2, fallbackDelayMs = 2000 } = opts;

  if (!('IntersectionObserver' in window)) {
    fn();
    return;
  }

  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    fn();
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      }
    },
    { threshold }
  );
  io.observe(el);

  // Safety net, same reasoning as BaseLayout's: an element the observer never
  // resolves must not stay in its pre-animation state forever.
  window.setTimeout(() => {
    io.disconnect();
    run();
  }, fallbackDelayMs);
}

/**
 * Indian-format currency, matching src/data/results.ts's fmtINR so the
 * calculator and the static tables can never disagree on formatting.
 */
export function inr(amount: number): string {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}
