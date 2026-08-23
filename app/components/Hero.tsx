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
          I design data-driven product experiences for the captive customer.
        </h1>
        <div className={styles.intro}>
          <p className={styles.muted}>
            In my career, I&apos;ve created experiences for the people who
            don&apos;t get to choose the applications and systems they use
            everyday, all day: the employee. I improve the internal tools,
            enterprise platforms, and golden path experiences that determine the
            workday for the people who depend on them.
          </p>
          <p>
            Currently, that means creating products tailored to improve the
            developer&apos;s work experience.
          </p>
        </div>
      </div>
    </section>
  );
}
