import styles from './OrgChart45.module.css';

const CONNECTOR_IMG = '/images/dev-insights/connector.svg';

const DIVISIONS = [
  'Multi-Family Tech',
  'Capital Markets Tech',
  'Single Family Tech',
  'Tech, Products & Eng Services',
  'Technology Infrastructure',
  'Data Engineering & Platforms',
];

export default function OrgChart45() {
  return (
    <div className={styles.card}>
      <div className={styles.superdivision}>
        <p className={styles.superdivisionLabel}>
          Division of 3,000+ developers
        </p>
        <div className={styles.grid}>
          {DIVISIONS.map((division) => (
            <div key={division} className={styles.cell}>
              <p className={styles.cellText}>{division}</p>
            </div>
          ))}
        </div>
        <img
          src={CONNECTOR_IMG}
          alt=""
          className={styles.connector}
          aria-hidden="true"
        />
        <div className={styles.teamRow}>
          <div className={styles.teamSwatch}>45</div>
          <p className={styles.teamText}>Developers from all across CIO</p>
        </div>
      </div>
      <p className={styles.caption}>DevInsights Team</p>
    </div>
  );
}
