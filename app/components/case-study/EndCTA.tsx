import Link from 'next/link';
import styles from './EndCTA.module.css';

export default function EndCTA({
  label = 'NEXT CASE STUDY',
  nextTitle,
  nextHref,
}: {
  label?: string;
  nextTitle: string;
  nextHref: string;
}) {
  return (
    <div className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.next}>
          <span className={styles.label}>{label}</span>
          <Link href={nextHref} className={`${styles.title} link-underline`}>
            {nextTitle} →
          </Link>
        </div>
        <Link href="/#case-studies" className={styles.button}>
          All case studies
        </Link>
      </div>
    </div>
  );
}
