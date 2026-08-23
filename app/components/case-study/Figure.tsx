import Image from 'next/image';
import styles from './Figure.module.css';

export default function Figure({
  src,
  alt,
  caption,
  aspectRatio,
}: {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio: string;
}) {
  return (
    <div className={styles.figure}>
      <div className={styles.frame} style={{ aspectRatio }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
}
