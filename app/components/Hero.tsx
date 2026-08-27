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
            In my career, I've created experiences for the people who don't get to choose the applications and systems they use every day, all day — the employee. I designed internal tools, enterprise platforms, and golden-path experiences, and founded and led DevInsights, a voice-of-customer research program that turned signal from thousands of engineers into the roadmap for their tools.
          </p>
          <p>
            Today, I bring that same discipline — founding programs, reading data at scale, designing for the people who never chose their tools — to whatever comes next.
          </p>
        </div>
      </div>
    </section>
  );
}
