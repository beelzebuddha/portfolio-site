import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>
          <span>PRODUCT DESIGN LEAD</span>
          <span className={styles.line} aria-hidden="true" />
          <span>ENTERPRISE AND INTERNAL PLATFORMS</span>
        </div>
        <h1 className={styles.headline}>
          I design complex enterprise tools around the people who have to use
          them.
        </h1>
        <div className={styles.intro}>
          <p>
            I&apos;ve spent my career on data-heavy enterprise applications:
            developer platforms, financial systems, and federal portals. I start
            with research, decide what matters most on each screen, and can show
            you why every design looks the way it does.
          </p>
          {/* Same-page anchor: eased by html { scroll-behavior: smooth } in
              globals.css, which is switched off under prefers-reduced-motion.
              #case-studies already offsets the sticky header. */}
          <a href="#case-studies" className={`${styles.cta} link-underline`}>
            See the case studies ↓
          </a>
        </div>
      </div>
    </section>
  );
}
