import Link from 'next/link';
import TagChip from '../TagChip';
import styles from './CaseStudyHero.module.css';

export default function CaseStudyHero({
  breadcrumb,
  company,
  category,
  title,
  dek,
  tags,
  border = true,
  padding = 'default',
}: {
  breadcrumb: string;
  company: string;
  category: string;
  title: string;
  dek: string;
  tags: string[];
  border?: boolean;
  padding?: 'default' | 'compact';
}) {
  const heroClass = [
    styles.hero,
    border ? '' : styles.noBorder,
    padding === 'compact' ? styles.compact : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={heroClass}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.breadcrumb}>
          <Link
            href="/#case-studies"
            className={`${styles.breadcrumbAccent} link-underline`}
          >
            Case Studies
          </Link>
          <span className={styles.breadcrumbMuted}>/</span>
          <span className={styles.breadcrumbInk}>{breadcrumb}</span>
        </div>
        <div className={styles.eyebrow}>
          <span>{company}</span>
          <span className={styles.line} aria-hidden="true" />
          <span>{category}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.dek}>{dek}</p>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
