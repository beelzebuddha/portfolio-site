import { ReactNode } from 'react';
import styles from './BodyPull.module.css';

export default function BodyPull({
  body,
  pull,
}: {
  body: ReactNode;
  pull: string;
}) {
  return (
    <div className={styles.row}>
      <div className={styles.body}>{body}</div>
      <div className={styles.pull}>
        <p className={styles.pullText}>{pull}</p>
      </div>
    </div>
  );
}
