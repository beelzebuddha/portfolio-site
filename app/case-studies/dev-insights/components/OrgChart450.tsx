import styles from './OrgChart450.module.css';

const LEGEND = [
  {
    swatch: 'champions' as const,
    title: '45 : Champions',
    body: 'The original 45, now champions',
  },
  {
    swatch: 'panel' as const,
    title: '450 : Snapshot participants',
    body: 'Recruited across all six orgs, roughly one in seven developers',
  },
  {
    swatch: 'division' as const,
    title: '3,000 : All the developers in CIO',
    body: 'Every developer in the division',
  },
];

const SUMMARY =
  'After expansion, the 450-person panel covered about one in seven of the division’s 3,000+ developers, with the original 45 champions inside it.';

/**
 * Nested squares drawn to scale by AREA: the 450 box is sqrt(450/3000) of
 * the division's side, and the 45 box is sqrt(45/450) of the 450 box's side.
 * The ratios live in OrgChart450.module.css.
 */
export default function OrgChart450({
  variant = 'full',
}: {
  /** 'thumbnail' scales the whole diagram to a 569x405 card thumbnail and
      drops the caption (too small to read there). */
  variant?: 'full' | 'thumbnail';
}) {
  const isThumb = variant === 'thumbnail';
  const figure = (
    <figure className={`${styles.card} ${isThumb ? styles.thumb : ''}`}>
      <div className={styles.body}>
        <div className={styles.diagram} role="img" aria-label={SUMMARY}>
          <p className={styles.divisionLabel} aria-hidden="true">
            Division of 3,000+ developers
          </p>
          <div className={styles.panelBox} aria-hidden="true">
            <span className={styles.panelLabel}>450</span>
            <span className={styles.championsBox}>45</span>
          </div>
        </div>
        <div className={styles.legend}>
          <p className={styles.legendTitle}>The panel after expansion</p>
          <ul className={styles.legendList}>
            {LEGEND.map((row) => (
              <li key={row.title} className={styles.row}>
                <span
                  className={`${styles.swatch} ${styles[row.swatch]}`}
                  aria-hidden="true"
                />
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>{row.title}</span>
                  <span className={styles.rowBody}>{row.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {!isThumb && (
        <figcaption className={styles.caption}>
          Boxes drawn to scale: 450 is about one in seven developers.
        </figcaption>
      )}
    </figure>
  );

  return isThumb ? <div className={styles.thumbFrame}>{figure}</div> : figure;
}
