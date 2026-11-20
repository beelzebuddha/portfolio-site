import type { ReactNode } from 'react';
import styles from './FactStrip.module.css';

export default function FactStrip({
  facts,
  borderTop = false,
  borderColor = 'line-strong',
  asDescriptionList = false,
}: {
  facts: { label: string; value: ReactNode }[];
  borderTop?: boolean;
  borderColor?: 'line' | 'line-strong';
  /** Render as a <dl> (label = <dt>, value = <dd>). Opt-in so pages that
      haven't been reviewed for it keep their current markup. */
  asDescriptionList?: boolean;
}) {
  const bandClass = [
    styles.band,
    borderTop ? styles.borderTop : '',
    borderColor === 'line' ? styles.borderLine : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={bandClass}>
      <div className={`container ${styles.inner}`}>
        {asDescriptionList ? (
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.cell}>
                <dt className={styles.label}>{fact.label}</dt>
                <dd className={styles.value}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label} className={styles.cell}>
                <span className={styles.label}>{fact.label}</span>
                <p className={styles.value}>{fact.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
