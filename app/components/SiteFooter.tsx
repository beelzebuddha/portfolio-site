import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.wordmark}>Kevin B. Doyle</span>
        <span className={styles.tagline}>
          PRODUCT DESIGN FOR ENTERPRISE PLATFORMS · 2026
        </span>
      </div>
    </footer>
  );
}
