import Link from 'next/link';
import { nextCaseStudy, type CaseStudyHref } from '../../lib/caseStudies';
import styles from './EndCTA.module.css';

type EndCTAProps =
  /** Case study pages: pass the page's own href; the next case study (in
      home page card order, wrapping) is looked up from CASE_STUDY_ORDER. */
  | { current: CaseStudyHref }
  /** Other pages (About): an explicit destination. */
  | { label?: string; nextTitle: string; nextHref: string };

export default function EndCTA(props: EndCTAProps) {
  const { label, nextTitle, nextHref } =
    'current' in props
      ? {
          label: 'NEXT CASE STUDY',
          nextTitle: nextCaseStudy(props.current).title,
          nextHref: nextCaseStudy(props.current).href,
        }
      : { label: 'NEXT CASE STUDY', ...props };

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
