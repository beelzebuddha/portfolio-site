import styles from './MetricComparison.module.css';

export default function MetricComparison({
  eyebrow,
  label,
  beforePct,
  afterPct,
  delta,
  caption,
}: {
  eyebrow: string;
  label: string;
  beforePct: number;
  afterPct: number;
  delta: string;
  caption: string;
}) {
  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <div className={styles.row}>
        <span className={styles.label}>{label}</span>
        <div className={styles.bars}>
          <div className={styles.barTrack}>
            <div
              className={styles.barBefore}
              style={{ width: `${beforePct}%` }}
            />
          </div>
          <div className={styles.barTrack}>
            <div
              className={styles.barAfter}
              style={{ width: `${afterPct}%` }}
            />
          </div>
        </div>
        <span className={styles.delta}>{delta}</span>
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}
