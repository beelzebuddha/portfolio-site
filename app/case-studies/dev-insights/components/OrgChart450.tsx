import styles from './OrgChart450.module.css';

const LEGEND = [
  {
    swatch: 'accent' as const,
    title: '45 : Champions',
    body: 'The original 45 DevInsights team, now promoted to Champion',
  },
  {
    swatch: 'panel' as const,
    title: '450 : Snapshot participants',
    body: 'Recruited all across CIO, picked from teams using AI assistants — roughly one in seven developers',
  },
  {
    swatch: 'bg' as const,
    title: '3,000 : All the developers in CIO',
    body: 'Recruited all across CIO, picked from teams using AI assistants — roughly one in seven developers',
  },
];

export default function OrgChart450() {
  return (
    <div className={styles.card}>
      <div className={styles.diagram}>
        <div className={styles.superdivision}>
          <p className={styles.superdivisionLabel}>
            Division of 3,000+ developers
          </p>
          <div className={styles.newTeam}>
            <div className={styles.diTeam}>45</div>
            <p className={styles.newTeamLabel}>450</p>
          </div>
        </div>
      </div>
      <div className={styles.legend}>
        <p className={styles.heading}>The New DevInsights Team</p>
        {LEGEND.map((row) => (
          <div key={row.title} className={styles.row}>
            <div className={`${styles.swatch} ${styles[row.swatch]}`} />
            <div className={styles.rowText}>
              <p className={styles.rowTitle}>{row.title}</p>
              <p className={styles.rowBody}>{row.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
