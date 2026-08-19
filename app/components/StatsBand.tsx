import Link from 'next/link';
import StatColumn from './StatColumn';
import styles from './StatsBand.module.css';

export default function StatsBand() {
  return (
    <section className={styles.band}>
      <span className={styles.seamChip}>THE LAST FOUR YEARS</span>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.cell}>
            <StatColumn
              label="REACH"
              lead="Served 3,000+ developers"
              continuation="by designing products and resource portals that allowed developers to focus on the work they love doing"
            />
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.cell}>
            <StatColumn
              label="EFFICIENCY"
              lead="Saved 21,000+ developer-hours annually"
              continuation="by applying customer research principles to product engagement"
            />
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.cell}>
            <StatColumn
              label="RESEARCH"
              lead="Led org-wide survey initiative"
              continuation="which led to 12-25% improvements in deep work and build and release drivers across org"
            />
          </div>
        </div>
        <div className={styles.featureLink}>
          <div className={styles.rule} aria-hidden="true" />
          <Link
            href="/case-studies/dev-insights"
            className={`${styles.link} link-underline`}
          >
            Learn how I founded a developer research community at Fannie Mae →
          </Link>
        </div>
      </div>
    </section>
  );
}
