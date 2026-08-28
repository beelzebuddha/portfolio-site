import Image from 'next/image';
import styles from './Figure.module.css';

const FULL_WIDTH_SIZES =
  '(min-width: 1240px) 1080px, (min-width: 900px) calc(100vw - 80px), calc(100vw - 40px)';

export default function Figure({
  src,
  alt,
  caption,
  aspectRatio,
  sizes = FULL_WIDTH_SIZES,
  bare = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio: string;
  sizes?: string;
  bare?: boolean;
}) {
  return (
    <div className={styles.figure}>
      <div
        className={bare ? `${styles.frame} ${styles.bare}` : styles.frame}
        style={{ aspectRatio }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes={sizes}
          quality={90}
        />
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
