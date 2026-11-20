import Image from 'next/image';
import Link from 'next/link';
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
          <span>About</span>
          <span className={styles.line} aria-hidden="true" />
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <h1 className={styles.title}>Hi! I&rsquo;m Kevin.</h1>
            <p className={styles.standfirst}>
              I design complex enterprise tools around the people who have to
              use them: internal operational tools, regulated financial
              systems, federal platforms, and most recently the tools
              developers build with. Different industries, one constant: the
              people on the other end can&rsquo;t switch to a competitor, and
              can&rsquo;t tell you what&rsquo;s broken unless someone builds
              them a channel.
            </p>
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
