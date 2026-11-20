import Link from 'next/link';
import StatColumn from './StatColumn';
import styles from './StatsBand.module.css';

export default function StatsBand() {
  return (
    <section className={styles.band}>
      <span className={styles.seamChip}>AT FANNIE MAE, 2022–2026</span>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.cell}>
            <StatColumn
              label="REACH"
              lead="3,000+ developers"
              continuation="served by the internal tools and research program I led"
            />
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.cell}>
            <StatColumn
              label="RESEARCH"
              lead="+12% deep work, +12.5% build and test"
              continuation="after the first org-wide developer survey I led"
            />
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.cell}>
            <StatColumn
              label="EFFICIENCY"
              lead="21,000+ developer-hours saved per quarter"
              continuation="as Stack Overflow Enterprise activity grew 125%"
            />
          </div>
        </div>
        <div className={styles.featureLink}>
          <div className={styles.rule} aria-hidden="true" />
          <Link
            href="/case-studies/dev-insights"
            className={`${styles.link} link-underline`}
          >
            How I founded Dev Insights, Fannie Mae&apos;s developer research
            program →
          </Link>
        </div>
      </div>
    </section>
  );
}
