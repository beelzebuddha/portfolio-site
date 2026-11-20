import type { ReactNode } from 'react';
import styles from './RuledList.module.css';

/** One row: a plain string, or an optional bold lead-in followed by text. */
export type RuledListItem = string | { lead: string; text: ReactNode };

export default function RuledList({ items }: { items: RuledListItem[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        const key = typeof item === 'string' ? item : item.lead;
        return (
          <li key={key} className={styles.row}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <strong className={styles.lead}>{item.lead}</strong> {item.text}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
