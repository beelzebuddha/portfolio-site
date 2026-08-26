import SectionHeader from './SectionHeader';
import CaseStudyRow from './CaseStudyRow';
import styles from './CaseStudiesSection.module.css';

const CHASSIS_IMG = '/images/home/chassis-thumb.png';
const DRAGON_IMG = '/images/home/dragon-thumb.png';
const AXA_IMG = '/images/home/axa-thumb.png';
const REARVIEW_IMG = '/images/home/rearview-thumb.png';

export default function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <div className={`container ${styles.inner}`}>
        <SectionHeader label="CASE STUDIES" />
        <CaseStudyRow
          company="FANNIE MAE"
          title="Chassis CodeGen"
          href="/case-studies/chassis-codegen"
          tags={['Platform Design', 'Visual Design', 'Developer Experience']}
          summary="55 microservice components, each needing its own customization form, with new ones shipping continuously. Designing them one at a time would have made me a permanent dependency of the release process. So I designed the application experience and created the form guidance the developers built from — then approved the layouts at sprint review."
          imageSrc={CHASSIS_IMG}
          imageAlt="Screenshot of the Chassis CodeGen homepage"
        />
        <CaseStudyRow
          company="FANNIE MAE"
          title="DragOn UI Builder"
          href="/case-studies/dragon-ui-builder"
          tags={['Platform Design', 'Design System', 'Developer Experience']}
          summary="A drag-and-drop UI builder that lets developers assemble interfaces from live components and generate design-system-aligned code by construction. I led the UX work that turned a hard-to-use open-source foundation into a tool teams chose to adopt across the organization."
          imageSrc={DRAGON_IMG}
          imageAlt="Screenshot of the DragOn UI Builder component palette"
        />
        <CaseStudyRow
          company="HUGE"
          title="AXA Vantage Agent Portal"
          href="/case-studies/axa-vantage"
          tags={['Enterprise Portal', 'Customer Research', 'Design Strategy']}
          summary="A professional portal for insurance advisors managing complex client portfolios — turning dense, regulated financial data into workflows an advisor could use directly with their clientele."
          imageSrc={AXA_IMG}
          imageAlt="Screenshot of the AXA Vantage Agent Portal"
        />
        <CaseStudyRow
          company="LIVINGSOCIAL"
          title="Rearview Engineering Platform"
          href="/case-studies/rearview"
          tags={['Platform Design', 'Developer Experience', 'Visual Design']}
          summary="When servers went down, the company lost thousands per minute. I designed the monitoring tool engineers used to see system health at a glance and act before small failures cascaded — built in direct partnership with the engineers who'd live in it."
          imageSrc={REARVIEW_IMG}
          imageAlt="Screenshot of the Rearview engineering monitoring platform"
        />
      </div>
    </section>
  );
}
