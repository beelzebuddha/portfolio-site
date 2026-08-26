import Image from 'next/image';
import Link from 'next/link';
import TagChip from './TagChip';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.breadcrumb}>
          <Link
            href="/#case-studies"
            className={`${styles.breadcrumbAccent} link-underline`}
          >
            Case Studies
          </Link>
          <span className={styles.breadcrumbMuted}>/</span>
          <span className={styles.breadcrumbInk}>About</span>
        </div>
        <div className={styles.eyebrow}>
          <span>PRODUCT DESIGN LEADERSHIP</span>
          <span className={styles.line} aria-hidden="true" />
        </div>
        <h1 className={styles.title}>Hi! I&rsquo;m Kevin.</h1>
        <div className={styles.row}>
          <div className={styles.left}>
            <p className={styles.headline}>
              I design experiences that truly improve people&rsquo;s lives is my
              professional passion.
            </p>
            <p className={styles.standfirst}>
              I&rsquo;ve spent 25+ years on complex, data-heavy enterprise
              applications — internal operational tools, regulated financial
              systems, federal platforms, and now the tools engineers build
              with. Different industries, one constant: the people on the other
              end can&rsquo;t leave, can&rsquo;t switch to a competitor, and
              have no way to tell you anything unless someone deliberately
              builds them a channel.
            </p>
            <div className={styles.tags}>
              <TagChip label="Design Leadership" />
              <TagChip label="Developer Experience" />
              <TagChip label="Customer Research" />
            </div>
          </div>
          <Image
            src="/images/about/portrait.png"
            alt="Photo of Kevin B. Doyle"
            width={349}
            height={349}
            className={styles.photo}
          />
        </div>
      </div>
    </div>
  );
}
