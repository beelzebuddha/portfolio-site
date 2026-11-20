import styles from './ResultTiles.module.css';

const TILES = [
  {
    value: '+12%',
    label: 'Deep work',
    period: 'April → July Snapshot, same 450 developers',
    driver: 'No Recurring Meeting Thursdays',
  },
  {
    value: '+12.5%',
    label: 'Build and test',
    period: 'April → July Snapshot, same 450 developers',
    driver:
      'GitHub Copilot and Codex, chosen through the AI tool pilot assessments',
  },
];

/** Two stat tiles side by side; stacked below 900px. */
export default function ResultTiles() {
  return (
    <ul className={styles.tiles}>
      {TILES.map((tile) => (
        <li key={tile.label} className={styles.tile}>
          <p className={styles.value}>{tile.value}</p>
          <p className={styles.label}>{tile.label}</p>
          <p className={styles.period}>{tile.period}</p>
          <p className={styles.driver}>
            <span className={styles.driverLabel}>Driver:</span> {tile.driver}
          </p>
        </li>
      ))}
    </ul>
  );
}
