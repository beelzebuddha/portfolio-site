import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import BodyPull from '../../components/case-study/BodyPull';
import EndCTA from '../../components/case-study/EndCTA';
import FigureRow from '../../components/case-study/FigureRow';
import styles from './page.module.css';

const WIREFRAME_HOME = '/images/axa-vantage/wireframe-home.svg';
const FINAL_HOME = '/images/axa-vantage/final-home.png';
const SCREENSHOT_ASSESSMENT_1 = '/images/axa-vantage/screenshot-assessment-1.png';
const SCREENSHOT_ASSESSMENT_2 = '/images/axa-vantage/screenshot-assessment-2.png';

export const metadata: Metadata = {
  title: 'AXA Vantage Agent Portal — Kevin B. Doyle',
  description:
    'How field research on insurance agents carrying briefcases of pamphlets reframed a "move the library online" brief into a guided client assessment agents could lead in the room.',
};

export default function AxaVantagePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Portal Design"
          company="HUGE"
          category="PLATFORM DESIGN"
          title="AXA Vantage Agent Portal"
          dek="A professional portal for insurance advisors managing complex client portfolios — turning dense, regulated financial data into workflows an advisor could actually move through with their clients."
          tags={['Customer Research', 'Platform Design', 'Creative Direction']}
          border={false}
          padding="compact"
        />

        <FactStrip
          borderTop
          borderColor="line"
          facts={[
            { label: 'ROLE', value: 'Experience lead, agency engagement' },
            {
              label: 'SCOPE',
              value:
                'National career-agent portal — product library, client guide, courses, news, glossary',
            },
            {
              label: 'PARTNERS',
              value:
                'AXA executives and field managers, HUGE product manager and visual designer',
            },
            {
              label: 'RESEARCH',
              value:
                'Field interviews with agents, stakeholder interviews with executives and managers',
            },
          ]}
        />

        <section className={`${styles.section} ${styles.py10} ${styles.borderBottom}`}>
          <div className={`container ${styles.inner}`}>
            <div className={styles.figurePair}>
              <FigureRow
                figures={[
                  {
                    src: WIREFRAME_HOME,
                    alt: 'Wireframe of the AXA Vantage home page',
                    aspectRatio: '526/1690',
                  },
                  {
                    src: FINAL_HOME,
                    alt: 'Final design of the AXA Vantage home page',
                    aspectRatio: '1400/3463',
                  },
                ]}
              />
              <p className={styles.figurePairCaption}>
                Wireframe to final. The concept for the home page was a
                well-organized front door to a library that kept the agent
                informed in the office and on the road.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.bgSurface} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <div className={styles.prose}>
              <div className={styles.rail}>
                <p className={styles.railLabel}>WHERE IT STARTED</p>
                <p className={styles.railIntro}>
                  Agents would drag brief cases (some had suit cases) full
                  of pamphlets and guides.
                </p>
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  An AXA career agent cannot switch to a competitor&apos;s
                  product library. They can, and do, work from memory. An
                  agent sitting across a kitchen table from a client does
                  not stop to search a portal — they recommend the product
                  they already know well, out of dozens they could have
                  recommended. That was the real failure mode the portal
                  had to solve, and it was not the one we were hired to
                  solve.
                </p>
                <p className={styles.bodyText}>
                  There was no old site to replace. There was a brief
                  case. Agents carried a library of printed pamphlets and
                  guidebooks to every appointment, and the pamphlets
                  worked — an agent could pull the right one, hand it
                  across the table, and leave it behind. So I spent the
                  first weeks asking agents about their appointments
                  rather than about software, and what came back was a
                  physical workflow: what they packed, what they ran out
                  of, what they handed over, what the client kept.
                </p>
                <p className={styles.bodyText}>
                  The incumbent was not a broken system. It was a system
                  that fit in a brief case.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py12} ${styles.borderTop} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              We moved the library from the brief case to their laptop.
            </p>
            <div className={styles.body}>
              <p className={styles.mutedText}>
                Executives and field managers described a distribution
                problem. Printed material goes stale, reprints cost money,
                and an agent in the field is carrying whatever they packed
                that morning. All true, and all solvable by putting the
                pamphlets on a server.
              </p>
              <p className={styles.mutedText}>
                The agent interviews described something else. Nobody was
                struggling to locate a document. They were deciding which
                of dozens of products fit a specific person — age,
                dependents, income, risk tolerance, what the client
                already held — and then finding the material that
                supported that recommendation. The packing decision at
                7am was the same decision, made earlier and with less
                information. A searchable library would have handed an
                agent forty correct documents and left the hard part
                exactly where it was.
              </p>
              <p className={styles.lede}>
                I did not have language like &quot;captive customer&quot;
                yet. What I had was a research finding I could not
                reconcile with the brief we had been given, and a product
                manager willing to reopen the brief.
              </p>
            </div>
            <FigureRow
              figures={[
                {
                  src: SCREENSHOT_ASSESSMENT_1,
                  alt: 'Screenshot of the guided client assessment flow',
                  aspectRatio: '1250/2834',
                },
                {
                  src: SCREENSHOT_ASSESSMENT_2,
                  alt: 'Screenshot of a product recommendation screen',
                  aspectRatio: '861/4096',
                },
              ]}
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.py10} ${styles.borderAll}`}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>The reasoning is the artifact.</p>
            <BodyPull
              body={
                <>
                  <p className={styles.mutedText}>
                    I proposed centering the portal on a guided client
                    assessment. The agent asks the client a short series of
                    questions — in person or on the phone — and the portal
                    resolves the answers into a tailored product
                    recommendation and the documentation that supports it,
                    ready to print ahead or email to the client on the
                    spot.
                  </p>
                  <p className={styles.mutedText}>
                    The constraint that shaped every screen was that this
                    happens in front of the customer. An agent working a
                    form while a prospect watches looks like a clerk, and
                    an agent who looks like a clerk loses the room. So the
                    assessment had to read as a conversation the agent was
                    leading rather than a record they were filling in —
                    few questions per screen, plain language an agent
                    could say out loud verbatim, and no visible dead ends
                    when a client&apos;s situation did not fit cleanly.
                  </p>
                  <p className={styles.mutedText}>
                    The product manager and I built a shared vision of the
                    portal so AXA&apos;s stakeholders and the development
                    team were arguing about one picture instead of three.
                    I set creative direction with the visual designer
                    rather than drawing the final screens, which was a
                    deliberate trade: I could hold the argument with the
                    client and keep the assessment from being
                    value-engineered into a search filter, or I could push
                    pixels, and not both on that timeline.
                  </p>
                  <p className={styles.mutedText}>
                    Two costs worth naming. A recommendation engine is
                    only as current as the product content behind it,
                    which pushed real ongoing work onto AXA&apos;s content
                    owners — a wizard that recommends a discontinued
                    product is worse than a pamphlet. And the home page
                    still got an editorial, magazine-style treatment
                    answering the brief as originally stated. It consumed
                    design capacity, and I would defend about half of it
                    now.
                  </p>
                </>
              }
              pull="The client asked us to move a library. What the agent needed was the freedom to make decisions with their customers."
            />
          </div>
        </section>

        <EndCTA
          nextTitle="Rearview Engineering Platform"
          nextHref="/case-studies/rearview"
        />
      </main>
      <SiteFooter />
    </>
  );
}
