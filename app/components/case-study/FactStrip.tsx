import styles from './FactStrip.module.css';

export default function FactStrip({
  facts,
  borderTop = false,
  borderColor = 'line-strong',
}: {
  facts: { label: string; value: string }[];
  borderTop?: boolean;
  borderColor?: 'line' | 'line-strong';
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
        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.cell}>
              <span className={styles.label}>{fact.label}</span>
              <p className={styles.value}>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
