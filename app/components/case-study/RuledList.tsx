import styles from './RuledList.module.css';

export default function RuledList({ items }: { items: string[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <div key={item} className={styles.row}>
          <p className={styles.text}>{item}</p>
        </div>
      ))}
    </div>
  );
}
