'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import MobileNav from './MobileNav';
import styles from './SiteHeader.module.css';

const THEME_STORAGE_KEY = 'theme';

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
  const pathname = usePathname();
  const isAbout = pathname?.startsWith('/about') ?? false;

  // Covers same-page hash clicks (pathname doesn't change, so the menu
  // wouldn't otherwise close) and belt-and-suspenders for any other nav.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Small threshold (rather than > 0) avoids flicker from momentum-scroll
  // rubber-banding at the very top on some browsers.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              isAbout
                ? `${styles.navItem} link-underline`
                : styles.navItemActive
            }
          >
            Case Studies
            {!isAbout && (
              <span className={styles.underline} aria-hidden="true" />
            )}
          </Link>
          <Link
            href="/#resources"
            scroll={false}
            onClick={handleHashNav('resources')}
            className={`${styles.navItem} link-underline`}
          >
            Resources
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
        theme={theme}
        onToggleTheme={toggleTheme}
        onCaseStudiesClick={handleMobileHashNav('case-studies')}
        onResourcesClick={handleMobileHashNav('resources')}
      />
    </header>
  );
}
