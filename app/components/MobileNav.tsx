'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.css';

type HashClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export default function MobileNav({
  isOpen,
  onClose,
  isAbout,
  theme,
  onToggleTheme,
  onCaseStudiesClick,
  onResourcesClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  isAbout: boolean;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onCaseStudiesClick: HashClickHandler;
  onResourcesClick: HashClickHandler;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  // Focus trap + Escape-to-close + body scroll lock, all scoped to while
  // the overlay is actually open. Restores focus to whatever had it before
  // opening (the hamburger trigger, in every real case) on close.
  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    const getFocusable = () =>
      panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');

    getFocusable()?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = getFocusable();
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  // Per-item stagger-in delay on open; uniform (no delay) on close so the
  // panel fades out as one piece instead of un-staggering in reverse.
  const delay = (index: number) => (isOpen ? `${index * 60}ms` : '0ms');

  return (
    <div
      ref={panelRef}
      id="mobile-nav"
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <nav className={styles.nav} aria-label="Primary">
        <Link
          href="/#case-studies"
          scroll={false}
          onClick={onCaseStudiesClick}
          className={
            isAbout
              ? styles.navLink
              : `${styles.navLink} ${styles.navLinkActive}`
          }
          style={{ transitionDelay: delay(0) }}
        >
          Case Studies
        </Link>
        <Link
          href="/#resources"
          scroll={false}
          onClick={onResourcesClick}
          className={styles.navLink}
          style={{ transitionDelay: delay(1) }}
        >
          Resources
        </Link>
        <Link
          href="/about"
          onClick={onClose}
          className={
            isAbout
              ? `${styles.navLink} ${styles.navLinkActive}`
              : styles.navLink
          }
          style={{ transitionDelay: delay(2) }}
        >
          About
        </Link>
        <Link
          href="/resume.pdf"
          onClick={onClose}
          className={styles.navLink}
          style={{ transitionDelay: delay(3) }}
        >
          Resume
        </Link>
      </nav>
      <button
        type="button"
        className={styles.modeToggle}
        onClick={onToggleTheme}
        aria-pressed={theme === 'dark'}
        style={{ transitionDelay: delay(4) }}
      >
        <span className={styles.modeDot} aria-hidden="true" />
        {theme.toUpperCase()}
      </button>
    </div>
  );
}
