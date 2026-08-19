import Figure from './Figure';
import styles from './FigureRow.module.css';

export default function FigureRow({
  figures,
}: {
  figures: {
    src: string;
    alt: string;
    caption?: string;
    aspectRatio: string;
  }[];
}) {
  return (
    <div className={styles.row}>
      {figures.map((figure) => (
        <div key={figure.src} className={styles.cell}>
          <Figure {...figure} />
        </div>
      ))}
    </div>
  );
}
