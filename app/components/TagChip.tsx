import type { Tag } from '../lib/tags';
import styles from './TagChip.module.css';

export default function TagChip({ label }: { label: Tag }) {
  return <span className={styles.chip}>{label}</span>;
}
