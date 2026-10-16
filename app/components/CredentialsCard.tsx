import SectionHeader from './SectionHeader';
import styles from './CredentialsCard.module.css';

export default function CredentialsCard() {
  return (
    <div className={styles.credentials}>
      <SectionHeader label="EDUCATION & CERTIFICATIONS" />
      <ul className={styles.card}>
        <li className={styles.row}>
          <span className={styles.title}>Bachelor of Fine Arts</span>
          <span className={styles.issuer}>
            Virginia Commonwealth University
          </span>
        </li>
        <li className={styles.row}>
          <a
            href="/Kevin%20CUA%20certificate_Compressed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} link-underline`}
          >
            Certified Usability Analyst
          </a>
          <span className={styles.issuer}>Human Factors International</span>
        </li>
        <li className={styles.row}>
          <a
            href="/Kevin%20B.%20Doyle-ScrumAlliance_CSM_Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} link-underline`}
          >
            Certified Scrum Master
          </a>
          <span className={styles.issuer}>Scrum Alliance</span>
        </li>
        <li className={styles.row}>
          <a
            href="/Win_Stakeholders_Influence_Decisions_cert.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} link-underline`}
          >
            UX Leadership and Influence with Jared Spool
          </a>
          <span className={styles.issuer}>Center Centre</span>
          <span className={styles.issuer}>
            Previously titled &ldquo;How to Win Stakeholders and Influence
            Decisions&rdquo;
          </span>
        </li>
        <li className={styles.row}>
          <a
            href="/Data-Driven%20Design%20Certificate%20of%20Completion%20-%20Kevin%20Doyle%20ECb78e.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} link-underline`}
          >
            Data-Driven Design
          </a>
          <span className={styles.issuer}>DesignLab</span>
        </li>
      </ul>
    </div>
  );
}
