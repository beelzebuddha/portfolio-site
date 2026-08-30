'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import MobileNav from './MobileNav';
import styles from './SiteHeader.module.css';

const THEME_STORAGE_KEY = 'theme';

// 5% steps -- see the scroll-spy IntersectionObserver setup below for why
// a single threshold isn't enough here.
const SCROLL_SPY_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);

// First-time visitors (no stored value) default to dark, not OS preference.
// Keep in sync with the bootstrap script in app/layout.tsx.
function resolveStoredOrDefaultTheme(): 'dark' | 'light' {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return 'dark';
}

export default function SiteHeader() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<
    'case-studies' | 'resources' | null
  >(null);
  const [isAtPageBottom, setIsAtPageBottom] = useState(false);
  const pathname = usePathname();
  const isAbout = pathname?.startsWith('/about') ?? false;
  const isHome = pathname === '/';
  const isCaseStudyDetailPage = pathname?.startsWith('/case-studies/') ?? false;

  // "Case Studies" reads as active on every case-study detail page (route-
  // based, intentional) or, on Home, whichever section IntersectionObserver
  // below says is actually in view. "Resources" only ever gets that scroll-
  // spied treatment -- there's no detail-page equivalent for it. Both defer
  // to isAtPageBottom (see the scroll-listener effect below) once there's
  // nowhere further to scroll.
  const isCaseStudiesActive =
    isCaseStudyDetailPage ||
    (isHome && !isAtPageBottom && activeSection === 'case-studies');
  const isResourcesActive =
    isHome && !isAtPageBottom && activeSection === 'resources';

  // Scroll-spy: only meaningful on Home, since #case-studies/#resources
  // only exist there. rootMargin shrinks the observed viewport to a thin
  // band just below the sticky header -- top offset is the header's own
  // height (read from the same --header-height token it uses, so this
  // can't drift out of sync with it) so a section isn't considered "in
  // view" while still hidden underneath the pinned header; -70% on the
  // bottom keeps that band to roughly the top third of the remaining
  // viewport, so a section has to meaningfully reach the upper part of the
  // screen to count, not just barely peek in at the bottom edge. A section
  // is "active" for as long as any part of it overlaps that band. Scrolled
  // up above Case Studies (into the hero), this correctly clears to null
  // on its own. Scrolled down past Resources it normally would too, but
  // isAtPageBottom above handles that case instead -- see its comment.
  useEffect(() => {
    if (!isHome) return;

    const ids = ['case-studies', 'resources'] as const;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const headerHeightPx =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--header-height',
        ),
        10,
      ) || 72;

    // Tracks each section's overlap with the band in px, not just a
    // boolean -- sections are directly adjacent with no gap, so landing a
    // scroll exactly on scroll-margin-top (e.g. the click handler's
    // scrollIntoView) can put both sections' edges right at the band's top
    // line at once, each reporting isIntersecting: true with one of them
    // overlapping by a fraction of a pixel. Picking by overlap amount
    // instead of document order resolves that correctly in favor of
    // whichever section is actually, substantially in view.
    const overlapPx = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          overlapPx.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRect.height : 0,
          );
        });
        let bestId: string | null = null;
        let bestOverlap = 0;
        elements.forEach((el) => {
          const overlap = overlapPx.get(el.id) ?? 0;
          if (overlap > bestOverlap) {
            bestOverlap = overlap;
            bestId = el.id;
          }
        });
        setActiveSection(bestId as 'case-studies' | 'resources' | null);
      },
      {
        rootMargin: `-${headerHeightPx}px 0px -70% 0px`,
        // A single threshold of 0 only fires on the intersecting/not
        // boundary -- once a section is already intersecting, its overlap
        // can keep growing or shrinking (as the user keeps scrolling)
        // without ever firing again, leaving overlapPx stale for exactly
        // the "pick the bigger overlap" comparison above. Firing every 5%
        // of intersection ratio keeps both entries current enough that the
        // comparison reflects where the user actually is.
        threshold: SCROLL_SPY_THRESHOLDS,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  // Covers same-page hash clicks (pathname doesn't change, so the menu
  // wouldn't otherwise close) and belt-and-suspenders for any other nav.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Small threshold (rather than > 0) avoids flicker from momentum-scroll
  // rubber-banding at the very top on some browsers.
  //
  // Also tracks "at the bottom of the page" here, on Home, as a backstop
  // for the scroll-spy above. Resources' own exit trigger (its bottom
  // clearing the header line) needs the About/Contact + footer content
  // below it to be at least about a viewport's height tall -- on this
  // page that trailing content is only ~560px, which isn't enough at any
  // common viewport height (checked 667-1440px), so Resources would
  // otherwise stay lit all the way to the true bottom of the page. This
  // guarantees "neither active" is still reachable once there's nowhere
  // further to scroll, independent of the IntersectionObserver's own
  // per-element timing.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4);
      if (isHome) {
        setIsAtPageBottom(
          window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 2,
        );
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // The root layout's bootstrap script (or a previous page's toggle) has
  // already applied the real theme to <html> before this ever mounts --
  // read it rather than overwriting it with our SSR-safe default, which
  // is what previously reset the theme to "dark" on every navigation.
  useEffect(() => {
    const applied = document.documentElement.getAttribute('data-theme');
    if (applied === 'dark' || applied === 'light') {
      setTheme(applied);
    } else {
      const resolved = resolveStoredOrDefaultTheme();
      document.documentElement.setAttribute('data-theme', resolved);
      setTheme(resolved);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
      return next;
    });
  };

  // Links pass scroll={false} so Next's router never does its own
  // post-navigation scroll restoration -- it deliberately disables CSS
  // smooth-scroll while doing that, which would make the cross-page case
  // snap instantly instead of easing in like a same-page click does.
  // When already on Home, we scroll ourselves so it animates the same way;
  // when navigating over from another page, HashScrollHandler (mounted on
  // the Home page) picks up the hash and does the same thing once it lands.
  const handleHashNav =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== '/') return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${id}`);
    };

  const closeMenu = () => setIsMenuOpen(false);

  // Same-page hash clicks don't change pathname, so the effect above won't
  // catch them -- close explicitly here instead.
  const handleMobileHashNav =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      handleHashNav(id)(e);
    };

  return (
    <header
      className={
        isScrolled ? `${styles.header} ${styles.headerScrolled}` : styles.header
      }
    >
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          Kevin B. Doyle
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link
            href="/#case-studies"
            scroll={false}
            onClick={handleHashNav('case-studies')}
            className={
              isCaseStudiesActive
                ? styles.navItemActive
                : `${styles.navItem} link-underline`
            }
          >
            Case Studies
            {isCaseStudiesActive && (
              <span className={styles.underline} aria-hidden="true" />
            )}
          </Link>
          <Link
            href="/#resources"
            scroll={false}
            onClick={handleHashNav('resources')}
            className={
              isResourcesActive
                ? styles.navItemActive
                : `${styles.navItem} link-underline`
            }
          >
            Resources
            {isResourcesActive && (
              <span className={styles.underline} aria-hidden="true" />
            )}
          </Link>
          <Link
            href="/about"
            className={
              isAbout
                ? styles.navItemActive
                : `${styles.navItem} link-underline`
            }
          >
            About
            {isAbout && (
              <span className={styles.underline} aria-hidden="true" />
            )}
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navItem} ${styles.navItemExternal} link-underline`}
          >
            Resume
            <Icon
              name="up-right-from-square"
              size="xs"
              color="muted"
              className={styles.externalIcon}
            />
            <span className="sr-only">(opens in a new tab)</span>
          </Link>
          <button
            type="button"
            className={styles.modeToggle}
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
          >
            <span className={styles.modeDot} aria-hidden="true" />
            {theme.toUpperCase()}
          </button>
        </nav>
        <button
          type="button"
          className={styles.navToggle}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.navToggleIconStack}>
            <Icon
              name="bars"
              className={
                isMenuOpen
                  ? `${styles.navToggleIcon} ${styles.navToggleIconHidden}`
                  : `${styles.navToggleIcon} ${styles.navToggleIconVisible}`
              }
            />
            <Icon
              name="xmark"
              className={
                isMenuOpen
                  ? `${styles.navToggleIcon} ${styles.navToggleIconVisible}`
                  : `${styles.navToggleIcon} ${styles.navToggleIconHidden}`
              }
            />
          </span>
        </button>
      </div>
      <MobileNav
        isOpen={isMenuOpen}
        onClose={closeMenu}
        isAbout={isAbout}
        isCaseStudiesActive={isCaseStudiesActive}
        isResourcesActive={isResourcesActive}
        theme={theme}
        onToggleTheme={toggleTheme}
        onCaseStudiesClick={handleMobileHashNav('case-studies')}
        onResourcesClick={handleMobileHashNav('resources')}
      />
    </header>
  );
}
