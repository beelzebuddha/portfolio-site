import Link from 'next/link';
import Image from 'next/image';
import TagChip from './TagChip';
import styles from './CaseStudyRow.module.css';

export default function CaseStudyRow({
  company,
  title,
  href,
  tags,
  summary,
  imageSrc,
  imageAlt,
}: {
  company: string;
  title: string;
  href: string;
  tags: string[];
  summary: string;
  imageSrc: string;
  imageAlt: string;
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
        className={styles.preview}
        aria-hidden="true"
        tabIndex={-1}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={569}
          height={405}
          quality={90}
          className={styles.image}
        />
      </Link>
    </div>
  );
}
