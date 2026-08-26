import Figure from './Figure';
import styles from './FigureRow.module.css';

const ROW_GAP = 28; // var(--space-6)

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
  const cols = figures.length;
  const desktopWidth = Math.round((1080 - ROW_GAP * (cols - 1)) / cols);
  const midBreakpointWidth = `calc((100vw - ${80 + ROW_GAP * (cols - 1)}px) / ${cols})`;
  const sizes = `(min-width: 1240px) ${desktopWidth}px, (min-width: 900px) ${midBreakpointWidth}, calc(100vw - 40px)`;

  return (
    <div className={styles.row}>
      {figures.map((figure) => (
        <div key={figure.src} className={styles.cell}>
          <Figure {...figure} sizes={sizes} />
        </div>
      ))}
    </div>
  );
}
