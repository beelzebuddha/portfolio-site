import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import TagChip from './TagChip';
import type { CaseStudyTags } from '../lib/tags';
import styles from './CaseStudyRow.module.css';

export default function CaseStudyRow({
  company,
  title,
  href,
  tags,
  summary,
  imageSrc,
  imageAlt,
  preview,
}: {
  company: string;
  title: string;
  href: string;
  tags: CaseStudyTags;
  summary: string;
  /** Omit (with no `preview`) to render a neutral placeholder panel. */
  imageSrc?: string;
  imageAlt: string;
  /** Live content for the thumbnail slot instead of an image. */
  preview?: ReactNode;
}) {
  return (
    <div className={styles.row}>
      <div className={styles.copy}>
        <span className={styles.meta}>{company}</span>
        <h3 className={styles.title}>
          <Link href={href}>{title}</Link>
        </h3>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <TagChip key={tag} label={tag} />
          ))}
        </div>
        <p className={styles.summary}>{summary}</p>
        <Link href={href} className={`${styles.cta} link-underline`}>
          Read the case study →
        </Link>
      </div>
      <Link
        href={href}
        className={`${styles.preview} ${preview ? styles.previewLive : ''}`}
        aria-hidden="true"
        tabIndex={-1}
      >
        {preview ? (
          preview
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={569}
            height={405}
            quality={90}
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholder} />
        )}
      </Link>
    </div>
  );
}
