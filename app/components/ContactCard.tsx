import SectionHeader from './SectionHeader';
import styles from './ContactCard.module.css';

export default function ContactCard() {
  return (
    <div className={styles.contact}>
      <SectionHeader label="CONTACT" />
      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.rowLabel}>EMAIL</span>
          <a
            href="mailto:kbdoyle@gmail.com"
            className={`${styles.link} link-underline`}
          >
            kbdoyle@gmail.com
          </a>
        </div>
        <div className={styles.seam} />
        <div className={styles.row}>
          <span className={styles.rowLabel}>LINKEDIN</span>
          <a
            href="https://www.linkedin.com/in/kbdoyle"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link-underline`}
          >
            linkedin.com/in/kbdoyle
          </a>
        </div>
        <div className={styles.seam} />
        <div className={styles.row}>
          <span className={styles.rowLabel}>RESUME</span>
          <a href="/resume.pdf" className={`${styles.link} link-underline`}>
            Download PDF ↓
          </a>
        </div>
      </div>
    </div>
  );
}
