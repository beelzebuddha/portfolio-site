import SectionHeader from './SectionHeader';
import styles from './ResourcesSection.module.css';

const templates = [
  { num: '01', label: 'Customer Interview template', href: null },
  { num: '02', label: 'Stakeholder Interview template', href: null },
  {
    num: '03',
    label: 'Activity Planning template',
    href: 'https://www.figma.com/board/7i0zBQ7hWIBM8VS5WzQzUm/Activity-Planner-template',
  },
  {
    num: '04',
    label: 'Feature Discussion template',
    href: 'https://www.figma.com/board/pHTOnnNXSrqizrcO9JiEY7/Feature-Discussion-Template',
  },
  { num: '05', label: 'Persona template', href: null },
  { num: '06', label: 'Customer Journey template', href: null },
  { num: '07', label: 'Usability Test Planning template', href: null },
];

export default function ResourcesSection() {
  return (
    <section className={styles.section} id="resources">
      <div className={`container ${styles.inner}`}>
        <SectionHeader label="RESOURCES" />
        <div className={styles.columns}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>Gathering Data</h2>
            <p className={styles.body}>
              These are resources I use to gather the data to help me, the
              dev team, and stakeholders make informed decisions. These
              templates are for collaborative exercises — you&apos;re welcome
              to use with your design team, developers, and business
              stakeholders.
            </p>
          </div>
          <div className={styles.grid}>
            {templates.map((t) =>
              t.href ? (
                <a
                  key={t.num}
                  href={t.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.cellActive}
                >
                  <span className={styles.num}>{t.num}</span>
                  <span className={`${styles.linkLabel} link-underline`}>
                    {t.label}
                  </span>
                </a>
              ) : (
                <div key={t.num} className={styles.cell}>
                  <span className={styles.comingSoon}>Coming Soon</span>
                  <span className={styles.num}>{t.num}</span>
                  <span className={styles.mutedLabel}>{t.label}</span>
                </div>
              )
            )}
            <div className={styles.emptyCell} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
