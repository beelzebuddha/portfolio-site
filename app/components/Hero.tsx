import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.eyebrow}>
          <span>PRODUCT DESIGN LEADER</span>
          <span className={styles.line} aria-hidden="true" />
          <span>ENTERPRISE &amp; INTERNAL PLATFORMS</span>
        </div>
        <h1 className={styles.headline}>
          I lead data-driven design for the captive customer.
        </h1>
        <div className={styles.intro}>
          <p className={styles.muted}>
           The captive customer is the employee - the person who uses software all day and never got to choose it.
          </p>
          <p>
            I've spent my career on complex, data-heavy enterprise applications -- internal operational tools, regulated financial systems, federal platforms, and most recently the tools engineers build with.
          </p>
        </div>
      </div>
    </section>
  );
}
