import styles from './StatColumn.module.css';

export default function StatColumn({
  label,
  lead,
  continuation,
}: {
  label: string;
  lead: string;
  continuation: string;
}) {
  return (
    <div className={styles.column}>
      <span className={styles.label}>{label}</span>
      <p className={styles.stat}>
        <span className={styles.lead}>{lead}</span>{' '}
        <span className={styles.continuation}>{continuation}</span>
      </p>
    </div>
  );
}
