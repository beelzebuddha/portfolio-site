import styles from './OrgChart45.module.css';

const DIVISIONS = [
  'Multi-Family Tech',
  'Capital Markets Tech',
  'Single Family Tech',
  'Tech, Products & Eng Services',
  'Technology Infrastructure',
  'Data Engineering & Platforms',
];

const SUMMARY =
  'The original Dev Insights team: 45 developers, recruited by referral from all six technology orgs in a division of more than 3,000 developers.';

/**
 * Exposed to assistive tech as a single image whose label states the point;
 * the boxes and connector are presentational.
 */
export default function OrgChart45() {
  return (
    <figure className={styles.card} role="img" aria-label={SUMMARY}>
      <div className={styles.superdivision}>
        <p className={styles.superdivisionLabel}>
          Division of 3,000+ developers
        </p>
        <div className={styles.grid}>
          {DIVISIONS.map((division) => (
            <div key={division} className={styles.cell}>
              {division}
            </div>
          ))}
        </div>
        {/* Elbow connector from the division grid down to the team. Drawn in
            currentColor so it follows the theme (the old SVG asset was
            hardcoded to the dark-theme line color). */}
        <svg
          className={styles.connector}
          viewBox="0 0 154 22"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M153 0V11H1V22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className={styles.teamRow}>
          <div className={styles.teamSwatch}>45</div>
          <p className={styles.teamText}>Developers from all across CIO</p>
        </div>
      </div>
      <p className={styles.caption}>Dev Insights Team</p>
    </figure>
  );
}
