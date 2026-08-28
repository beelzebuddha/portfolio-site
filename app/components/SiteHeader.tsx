'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SiteHeader.module.css';

const THEME_STORAGE_KEY = 'theme';

function resolveStoredOrSystemTheme(): 'dark' | 'light' {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export default function SiteHeader() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const isAbout = pathname?.startsWith('/about') ?? false;

  // The root layout's bootstrap script (or a previous page's toggle) has
  // already applied the real theme to <html> before this ever mounts --
  // read it rather than overwriting it with our SSR-safe default, which
  // is what previously reset the theme to "dark" on every navigation.
  useEffect(() => {
    const applied = document.documentElement.getAttribute('data-theme');
    if (applied === 'dark' || applied === 'light') {
      setTheme(applied);
    } else {
      const resolved = resolveStoredOrSystemTheme();
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

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          Kevin B. Doyle
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          <Link
            href="/#case-studies"
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
            className={`${styles.navItem} link-underline`}
          >
            Resume
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
      </div>
    </header>
  );
}
