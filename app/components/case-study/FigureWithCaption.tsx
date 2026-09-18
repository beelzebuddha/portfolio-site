import Image from 'next/image';
import type { ReactNode } from 'react';
import Lightbox from '../Lightbox';
import styles from './FigureWithCaption.module.css';

const SIZES =
  '(min-width: 1240px) 650px, (min-width: 900px) calc((100vw - 80px) * 0.6), calc(100vw - 40px)';

export default function FigureWithCaption({
  src,
  alt,
  aspectRatio,
  width,
  height,
  zoomable = true,
  captionTitle,
  children,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  width: number;
  height: number;
  zoomable?: boolean;
  captionTitle: string;
  children?: ReactNode;
}) {
  const image = (
    <div className={styles.frame} style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.image}
        sizes={SIZES}
        quality={90}
      />
    </div>
  );

  return (
    <div className={styles.row}>
      <div className={styles.imageSlot}>
        {zoomable ? (
          <Lightbox src={src} alt={alt} width={width} height={height}>
            {image}
          </Lightbox>
        ) : (
          image
        )}
      </div>
      <div className={styles.caption}>
        <p className={styles.captionTitle}>{captionTitle}</p>
        {children}
      </div>
    </div>
  );
}
