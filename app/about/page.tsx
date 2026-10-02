import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import AboutHero from '../components/AboutHero';
import FactStrip from '../components/case-study/FactStrip';
import ContactCard from '../components/ContactCard';
import EndCTA from '../components/case-study/EndCTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About — Kevin B. Doyle',
  description:
    '25+ years designing for the captive user — internal tools, regulated financial systems, federal platforms, and now the tools engineers build with.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />

        <FactStrip
          facts={[
            {
              label: 'BASED',
              value: 'Richmond, VA — open to on-site, remote, or hybrid',
            },
            {
              label: 'RECENTLY',
              value:
                'Product Designer & Team Lead, Enterprise Developer Experience, Fannie Mae',
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
              <p>
                From very early on in my career I have designed websites, web apps, and internal tools across federal government (Medicare, USPTO) and Fortune 500 enterprises (Marriott, Capital One, Freddie Mac, Credit Suisse) — plus mission-driven organizations like PBS, AARP, and Navy Federal. What stuck with me wasn't the client roster; it was learning to move fluently between design and development teams, product owners, and C-level stakeholders — the same range I still lean on leading cross-functional teams today. It's also where I first noticed the pattern that still shapes my work: the people using these systems didn't choose them. They were captive customers, and that changed what "good design" had to mean.
              </p>
              <p>
               At CGI Federal I spent seven years in UX leadership on federal platforms, including the Medicare.gov Physician Compare tool and USPTO's Open Data Initiative — work where accessibility and regulatory compliance weren't optional, they were the baseline. I arrived as a User Experience Manager and left as a Consulting Director. More recently, I led product design and customer research for Enterprise Developer Experience at Fannie Mae, where 3,000+ engineers depended on the internal platforms I designed and helped improve.
              </p>
              <p>
               While at Fannie Mae, I founded Dev Insights — a Voice-of-Customer program that started as a 45-developer panel and grew into a network of 450 engineers actively weighing in on their own work experience. I built it because developer feedback deserved a structured, ongoing channel instead of ad hoc asks — so we ran focus groups, 1:1 interviews, design reviews, usability testing, and a quarterly survey. The findings didn't stop at a report: they became CIO-level OKRs and shaped what our internal developer platform prioritized next. As product owner for Stack Overflow Enterprise, I also ran the developer engagement and enablement program, growing activity 125% and returning 21,000+ developer-hours a quarter.
              </p>
              <p> 
                My design process has evolved to bridge design and engineering more directly. I start in Figma, using its agent features to move fast through exploration, then connect out through MCP to a working prototype in VS Code — where I use Claude Code to add real interactions, tune micro-interactions, and get the build close to production-ready. From there it's a loop: back to Figma to refine, back to code to test it live, until the design holds up under real interaction, not just a click-through. It's a workflow built for handoff — by the time engineering picks it up, most of the ambiguity is already gone.
              </p>
              <p>
                My leadership approach is deeply rooted in my education background — the same techniques that got a room of art students to critique each other's work honestly and push past their first draft are the ones I use to get cross-functional teams of engineers, product managers, and designers to do the same. Over the course of my career, I've led cross-functional teams of eight to twelve and governed design systems across multiple products and organizations. Outside work, I ran a UX Dinner Meetup for the NoVA/DC design community for years — mentoring dozens of designers who were looking for guidance I was glad to give.
              </p>
              <p>
                I hold a BFA from Virginia Commonwealth University, a{' '}
                <a
                  href="/Kevin%20CUA%20certificate_Compressed.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  Certified Usability Analyst credential
                </a>{' '}
                from Human Factors International, and a{' '}
                <a
                  href="/Kevin%20B.%20Doyle-ScrumAlliance_CSM_Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  Certified Scrum Master certification
                </a>{' '}
                from Scrum Alliance. More recently: Jared Spool&apos;s{' '}
                <a
                  href="/Win_Stakeholders_Influence_Decisions_cert.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  UX Leadership and Influence course
                </a>{' '}
                (previously titled How to Win Stakeholders and Influence
                Decisions), and{' '}
                <a
                  href="/Data-Driven%20Design%20Certificate%20of%20Completion%20-%20Kevin%20Doyle%20ECb78e.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  Data-Driven Design
                </a>{' '}
                and Advanced Figma with DesignLab. I&apos;m also a founding
                member of Fannie Mae&apos;s Enterprise Accessibility Council.
              </p>
              <p>
                Outside of work I sketch in charcoal, play guitar, hike when the
                weather cooperates, watch too much TV with my cats, and spend
                long weekends around a campfire with my camping fam.
              </p>
            </div>
            <div className={styles.aside}>
              <ContactCard />
            </div>
          </div>
        </section>

        <EndCTA
          nextTitle="Leading the Research to Improve the Developer's Experience"
          nextHref="/case-studies/dev-insights"
        />
      </main>
      <SiteFooter />
    </>
  );
}
