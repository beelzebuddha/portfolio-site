'use client';

import { useEffect } from 'react';

// SiteHeader's Case Studies / Resources links pass `scroll={false}` so
// Next.js's router doesn't do its own post-navigation scroll restoration --
// it deliberately disables CSS smooth-scroll while it does that, which would
// make the cross-page click (e.g. from About) snap instantly instead of
// easing in like a same-page click does. This does the scroll ourselves so
// both cases animate the same way, and respects prefers-reduced-motion
// explicitly since the imperative scrollIntoView `behavior` option isn't
// guaranteed to consult that media feature on its own.
export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  return null;
}
