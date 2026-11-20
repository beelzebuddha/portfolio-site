import SectionHeader from './SectionHeader';
import styles from './AiPracticeSection.module.css';

export default function AiPracticeSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <SectionHeader label="HOW I WORK WITH AI" as="h2" />
        <p className={styles.body}>
          I use AI tools in my process and say where. At Fannie Mae, I evaluated
          GitHub Copilot, Codex, Kiro, and Glean with developers, and built a
          ChatGPT project that let leadership query our research directly. On
          this site, I used Claude to edit and structure case study drafts and
          Figma to design. The work, the decisions, and the words you&apos;re
          reading are mine.
        </p>
      </div>
    </section>
  );
}
