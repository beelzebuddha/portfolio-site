import SectionHeader from './SectionHeader';
import CaseStudyRow from './CaseStudyRow';
import type { ReactNode } from 'react';
import type { CaseStudyTags } from '../lib/tags';
import OrgChart450 from '../case-studies/dev-insights/components/OrgChart450';
import styles from './CaseStudiesSection.module.css';

type CaseStudyCard = {
  /** Eyebrow: company · domain */
  company: string;
  title: string;
  href: string;
  tags: CaseStudyTags;
  summary: string;
  /** Omit (with no `preview`) for a neutral placeholder panel. */
  imageSrc?: string;
  imageAlt: string;
  /** Live, theme-aware content for the thumbnail instead of an image. */
  preview?: ReactNode;
};

// Card order on the home page.
const CASE_STUDIES: CaseStudyCard[] = [
  {
    company: 'FANNIE MAE · DEVELOPER PLATFORM',
    title: 'Dev Insights',
    href: '/case-studies/dev-insights',
    tags: ['Research & discovery', 'Design leadership', 'AI tools'],
    summary:
      "Leadership knew 3,000+ developers were losing time but couldn't say where. I founded a developer research program, grew its panel from 45 to 450, and turned survey findings into the priorities that lifted deep work 12% and build-and-test 12.5%.",
    // Live panel diagram from the Dev Insights page (not a screenshot), so it
    // follows the light/dark theme. The thumbnail link is aria-hidden; the
    // card's title and summary carry the content.
    imageAlt: '',
    preview: <OrgChart450 variant="thumbnail" />,
  },
  {
    company: 'FANNIE MAE · DEVELOPER PLATFORM',
    title: 'Chassis CodeGen',
    href: '/case-studies/chassis-codegen',
    tags: ['Complex workflows', 'Design systems'],
    summary:
      "To use one component from Fannie Mae's microservice library, developers had to download all 55. I turned a planned table of download links into a catalog and cart where developers pick only what they need, and wrote the form standards developers built from.",
    imageSrc: '/images/home/chassis-thumb.png',
    imageAlt: 'Screenshot of the Chassis CodeGen homepage',
  },
  {
    company: 'LIVINGSOCIAL · MONITORING',
    title: 'Rearview',
    href: '/case-studies/rearview',
    tags: ['Dashboards & data', 'Research & discovery'],
    summary:
      'On-call engineers opened this monitoring tool at 2am, when an outage was erasing revenue. A pager pilot shaped a three-screen path from alert to diagnosis. Rearview was adopted across LivingSocial and later released as open source.',
    imageSrc: '/images/home/rearview-thumb.png',
    imageAlt: 'Screenshot of the Rearview engineering monitoring platform',
  },
  {
    company: 'HUGE FOR AXA · FINANCIAL SERVICES',
    title: 'AXA Vantage',
    href: '/case-studies/axa-vantage',
    tags: ['Research & discovery', 'Complex workflows'],
    summary:
      'AXA asked for a digital library to replace the pamphlets insurance agents carried. Agent interviews showed their real problem was choosing the right product for each client, so I reframed the portal around a guided client assessment.',
    imageSrc: '/images/home/axa-thumb.png',
    imageAlt: 'Screenshot of the AXA Vantage Agent Portal',
  },
  {
    company: 'CGI FEDERAL · PUBLIC SECTOR',
    title: 'USPTO Open Data Portal',
    href: '/case-studies/uspto-open-data',
    tags: [
      'Information architecture',
      'Search & filtering',
      'Design leadership',
    ],
    summary:
      "USPTO's patent and trademark data was scattered or available only on request. I set the product vision and information architecture for one public portal covering data back to the late 1800s, and it launched two months early.",
    imageSrc: '/images/home/uspto-thumb.png',
    imageAlt: 'Screenshot of the USPTO Open Data Portal home page',
  },
  {
    company: 'FANNIE MAE · DEVELOPER PLATFORM',
    title: 'DragOn UI Builder',
    href: '/case-studies/dragon-ui-builder',
    tags: ['Design systems', 'Complex workflows'],
    summary:
      'A drag-and-drop builder that let developers assemble interfaces from live components and generate design-system-aligned code. I led the UX that turned a hard-to-use open-source base into a tool teams chose to adopt.',
    imageSrc: '/images/home/dragon-thumb.png',
    imageAlt: 'Screenshot of the DragOn UI Builder component palette',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className={styles.section} id="case-studies">
      <div className={`container ${styles.inner}`}>
        <SectionHeader label="CASE STUDIES" />
        {CASE_STUDIES.map((study) => (
          <CaseStudyRow key={study.href} {...study} />
        ))}
      </div>
    </section>
  );
}
