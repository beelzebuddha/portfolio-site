import styles from './SectionHeader.module.css';

export default function SectionHeader({
  label,
  as: Tag = 'span',
}: {
  label: string;
  /** Render the label as a real heading. Defaults to the original <span>. */
  as?: 'span' | 'h2';
}) {
  return (
    <div className={styles.header}>
      <Tag className={styles.label}>{label}</Tag>
    </div>
  );
}
