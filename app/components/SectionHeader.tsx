import styles from './SectionHeader.module.css';

export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className={styles.header}>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
