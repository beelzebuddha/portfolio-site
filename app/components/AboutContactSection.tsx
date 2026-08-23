import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ContactCard from './ContactCard';
import styles from './AboutContactSection.module.css';

export default function AboutContactSection() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.about}>
          <SectionHeader label="ABOUT ME" />
          <div className={styles.bio}>
            <div className={styles.photoSlot}>
              <Image
                src="/images/home/about-photo.png"
                alt="Photo of Kevin B. Doyle"
                width={168}
                height={168}
                className={styles.photo}
              />
            </div>
            <div className={styles.bioCopy}>
              <p>Hi! I&rsquo;m Kevin.</p>
              <p>
                Designing experiences that truly improve people&rsquo;s lives is
                my professional passion.
              </p>
              <a href="/about" className={`${styles.link} link-underline`}>
                More about me →
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactCol}>
          <ContactCard />
        </div>
      </div>
    </section>
  );
}
