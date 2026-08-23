'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const pathname = usePathname();
  const isAbout = pathname?.startsWith('/about') ?? false;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
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
