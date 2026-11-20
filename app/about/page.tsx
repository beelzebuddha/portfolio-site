import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AboutHero from '../components/AboutHero';
import FactStrip from '../components/case-study/FactStrip';
import ContactCard from '../components/ContactCard';
import CredentialsCard from '../components/CredentialsCard';
import EndCTA from '../components/case-study/EndCTA';
// Section headings use the Dev Insights h2 (and the TOKEN GAPS on .page it reads).
import caseStudy from '../case-studies/dev-insights/page.module.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — Kevin B. Doyle',
  description:
    'Kevin B. Doyle designs complex enterprise tools around the people who have to use them: internal operational tools, regulated financial systems, federal platforms, and the tools developers build with.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className={caseStudy.page}>
        <AboutHero />

        <FactStrip
          asDescriptionList
          facts={[
            {
              label: 'BASED',
              value: 'Richmond, VA — open to on-site, remote, or hybrid',
            },
            {
              label: 'RECENTLY',
              value:
                'Product Design Lead, Enterprise Developer Experience, Fannie Mae (2022–2026)',
            },
            {
              label: 'PRACTICE',
              value:
                '25+ years across enterprise SaaS, internal platforms, federal, and financial services',
            },
            {
              label: 'CREDENTIALS',
              value:
                'Certified Usability Analyst (HFI); Certified Scrum Master (Scrum Alliance); BFA, Art Education, Virginia Commonwealth University',
            },
          ]}
        />

        <section className={styles.section}>
          <div className={`container ${styles.inner}`}>
            <div className={styles.body}>
              <section className={styles.block}>
                <h2 className={caseStudy.h2}>How I work</h2>
                <p>
                  I start with the people who have to use the product. Research
                  tells me what&apos;s broken. Then I decide what matters most on
                  each screen, and I test until the design holds up.
                </p>
              </section>

              <section id="ai" className={styles.block}>
                <h2 className={caseStudy.h2}>How I work with AI</h2>
                <p>
                  I use AI tools in my process and say where. At Fannie Mae, I
                  evaluated GitHub Copilot, Codex, Kiro, and Glean with
                  developers, and built a ChatGPT project that let leadership
                  query our research directly.
                </p>
                <p>
                  In my own design work, I explore in Figma, using its agent
                  features to move fast, then connect through MCP to a working
                  prototype in VS Code. There I use Claude Code to add real
                  interactions and get the build close to production-ready. Then
                  it loops: back to Figma to refine, back to code to test it
                  live, until the design holds up under real interaction, not
                  just a click-through. By the time development picks it up, most
                  of the ambiguity is gone.
                </p>
                <p>
                  On this site, I used Claude to edit and structure case study
                  drafts and Figma to design. The work, the decisions, and the
                  words you&apos;re reading are mine.
                </p>
              </section>

              <section className={styles.block}>
                <h2 className={caseStudy.h2}>Where I&apos;ve done it</h2>
                <p>
                  <strong>Fannie Mae, 2022–2026.</strong> I led product design
                  and customer research for Enterprise Developer Experience, a
                  shared-service team building internal tools for 3,000+
                  developers. I founded{' '}
                  <Link href="/case-studies/dev-insights" className={styles.textLink}>
                    Dev Insights
                  </Link>
                  , a voice-of-customer program that grew from a 45-developer
                  panel to 450. Its findings became CIO-level OKRs, and after the
                  first org-wide developer survey, deep work rose 12% and
                  build-and-test 12.5%. As Product Owner delegate for Stack
                  Overflow Enterprise, I ran the developer engagement program,
                  growing activity 125% and saving 21,000+ developer-hours a
                  quarter.
                </p>
                <p>
                  <strong>CGI Federal, 2015–2022.</strong> Seven years of UX
                  leadership on federal platforms, including Medicare.gov&apos;s
                  Physician Compare and{' '}
                  <Link href="/case-studies/uspto-open-data" className={styles.textLink}>
                    USPTO&apos;s Open Data Initiative
                  </Link>
                  , where accessibility and regulatory compliance were the
                  baseline. I arrived as a User Experience Manager and left as a
                  Consulting Director.
                </p>
                <p>
                  <strong>Earlier.</strong> Websites, web apps, and internal
                  tools for Marriott, Capital One, AARP, PBS, and Navy Federal,
                  among others. That work taught me to move fluently between
                  design and development teams, product owners, and C-level
                  stakeholders.
                </p>
              </section>

              <section className={styles.block}>
                <h2 className={caseStudy.h2}>How I lead</h2>
                <p>
                  My leadership approach comes from my art education background.
                  The techniques that got a room of art students to critique each
                  other&apos;s work honestly and push past their first draft are
                  the ones I use with cross-functional teams of developers,
                  product managers, and designers.
                </p>
                <p>
                  I&apos;ve led cross-functional teams of eight to twelve and
                  governed design systems across multiple products and
                  organizations. For years I also ran a UX Dinner Meetup for the
                  NoVA/DC design community, mentoring dozens of designers who were
                  looking for guidance I was glad to give.
                </p>
              </section>

              <section className={styles.block}>
                <h2 className={caseStudy.h2}>Outside work</h2>
                <p>
                  I sketch in charcoal, play guitar, hike when the weather
                  cooperates, watch too much TV with my cats, and spend long
                  weekends around a campfire with my camping fam.
                </p>
              </section>
            </div>
            <div className={styles.aside}>
              <ContactCard />
              <CredentialsCard />
            </div>
          </div>
        </section>

        <EndCTA nextTitle="Dev Insights" nextHref="/case-studies/dev-insights" />
      </main>
      <SiteFooter />
    </>
  );
}
