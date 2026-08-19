import styles from './Aside.module.css';

export default function Aside({
  label,
  children,
  fill = false,
}: {
  label: string;
  children: string;
  fill?: boolean;
}) {
  return (
    <div className={`${styles.aside} ${fill ? styles.fill : ''}`}>
      <span className={styles.label}>{label}</span>
      <p className={styles.body}>{children}</p>
    </div>
  );
}
