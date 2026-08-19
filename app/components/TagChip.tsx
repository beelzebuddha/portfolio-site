import styles from './TagChip.module.css';

export default function TagChip({ label }: { label: string }) {
  return <span className={styles.chip}>{label}</span>;
}
