'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import Icon from './Icon';
import styles from './Lightbox.module.css';

export default function Lightbox({
  src,
  alt,
  width,
  height,
  children,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const labelId = useId();

  // Focus trap + Escape-to-close + body scroll lock, scoped to while the
  // overlay is open -- same pattern as MobileNav. Restores focus to the
  // triggering thumbnail on close.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const overlay = overlayRef.current;
    const getFocusable = () =>
      overlay?.querySelectorAll<HTMLElement>('button:not([disabled])');

    getFocusable()?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
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
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(true)}
        aria-label={`Open enlarged view of ${alt}`}
      >
        {children}
        <span className={styles.badge} aria-hidden="true">
          <Icon name="magnifying-glass" size="sm" color="accent" />
          Click to zoom
        </span>
      </button>
      {isOpen && (
        <div
          ref={overlayRef}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setIsOpen(false)}
            aria-label="Close enlarged image"
          >
            <Icon name="xmark" size="lg" color="ink" />
          </button>
          <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
            <span id={labelId} className="sr-only">
              {alt}
            </span>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={styles.image}
              sizes="90vw"
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  );
}
