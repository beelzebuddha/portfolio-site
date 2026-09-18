import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import EndCTA from '../../components/case-study/EndCTA';
import Figure from '../../components/case-study/Figure';
import FigureWithCaption from '../../components/case-study/FigureWithCaption';
import styles from './page.module.css';

const HERO_HOME_PAGE = '/images/uspto-open-data/hero-home-page.png';
const VISION_WIREFRAMES = '/images/uspto-open-data/vision-wireframes.png';
const WHITEBOARD_JAD = '/images/uspto-open-data/whiteboard-jad.jpg';
const SITEMAP = '/images/uspto-open-data/sitemap.png';
const FINAL_HOME_DESIGN = '/images/uspto-open-data/final-home-design.jpg';
const MICHELLE_LEE_LETTER = '/images/uspto-open-data/michelle-lee-letter.jpg';

export const metadata: Metadata = {
  title: 'USPTO Open Data Initiative — Kevin B. Doyle',
  description:
    "How three months in a war room with USPTO's Director, before a single line of code, produced the product vision and information architecture for a federal open-data mandate that ran for nearly a decade.",
};

export default function UsptoOpenDataPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Portal Design"
          company="CGI FEDERAL"
          category="PORTAL DESIGN"
          title="USPTO Open Data Initiative"
          dek="In the summer of 2015 – my first large project after joining CGI – the USPTO tasked me with leading the design vision for a federal mandate: make the agency's “treasure trove” of patent and trademark data open, machine-readable, and usable by the public. I spent three months defining the product vision and information architecture with senior USPTO stakeholders ahead of development that September, then kept running weekly JAD sessions and supporting the project through its release the following summer."
          tags={[
            'Federal Platform',
            'Product Vision',
            'Information Architecture',
          ]}
        />

        <FactStrip
          borderColor="line"
          facts={[
            { label: 'ROLE', value: 'Product design lead' },
            {
              label: 'SCOPE',
              value:
                "Product vision & IA for USPTO's public open data platform",
            },
            {
              label: 'STAKEHOLDERS',
              value: (
                <>
                  USPTO executive leadership; Director{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Michelle_K._Lee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline"
                  >
                    Michelle K. Lee&apos;s
                  </a>{' '}
                  <span className="sr-only">(opens in a new tab)</span>
                  office
                </>
              ),
            },
            {
              label: 'OUTCOME',
              value:
                "Shipped ahead of schedule; ran ~8 years before evolving into USPTO's current platform",
            },
          ]}
        />

        <section className={`${styles.section} ${styles.py10}`}>
          <div className={`container ${styles.inner}`}>
            <Figure
              src={HERO_HOME_PAGE}
              alt="Home page of the USPTO Open Data Portal, beta public release"
              aspectRatio="1280/800"
              caption="Home page for the Open Data Portal (beta public release)"
            />
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
                  USPTO had a mandate from the White House: all patent and
                  trademark data must be made available to the public by
                  August of 2016.
                </p>
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  In 2013, Executive Order 13642 changed the default posture
                  of the federal government: agency data would be open unless
                  there was a specific reason to withhold it. For USPTO – an
                  agency whose entire mission is built on disclosure in
                  exchange for exclusive rights – that mandate landed
                  somewhere it already made philosophical sense: the agency
                  had long treated itself as responsible for sharing what it
                  held.
                </p>
                <p className={styles.bodyText}>
                  I was brought in in June 2015 – before scope, before a dev
                  team, before even a firm sense of what &quot;done&quot;
                  looked like. My job was to build that picture with the
                  people who&apos;d be accountable for it.
                </p>
                <p className={styles.bodyText}>
                  For three months, I worked daily with USPTO&apos;s senior
                  stakeholders, out of a war room where our team reported
                  directly to then-USPTO Director Michelle Lee, to define the
                  product vision and information architecture ahead of
                  development kicking off that September.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py12} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              The process began with the product vision.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                With the foundation set, I kept running weekly JAD sessions
                and stayed on through the site&apos;s release the following
                summer – refining scope, working through open questions, and
                keeping the vision coherent as development moved forward,
                even as I took on other CGI and USPTO work alongside it. I
                presented the evolving picture to USPTO&apos;s executive
                leadership every two weeks.
              </p>
              <p className={styles.bodyText}>
                Design owned the product vision on this project, not just the
                interface.
              </p>
            </div>

            <FigureWithCaption
              src={VISION_WIREFRAMES}
              alt="Home page concept wireframes from the Product Vision"
              aspectRatio="4/3"
              width={1433}
              height={4096}
              captionTitle="Home page concept from the Product Vision."
            >
              <p className={styles.bodyText}>
                During the first three months of the project, I was able to sit
                with stakeholders to get a sense of what they needed. The
                Product Vision was fully established before development –
                this allowed us to easily communicate the site concept to
                senior leadership and scope the Product Backlog for the dev
                team.
              </p>
            </FigureWithCaption>

            <FigureWithCaption
              src={WHITEBOARD_JAD}
              alt="Whiteboard sketch from a home page JAD session"
              aspectRatio="4/3"
              width={4032}
              height={3024}
              zoomable={false}
              captionTitle="Whiteboard from the home page JAD session."
            >
              <p className={styles.bodyText}>
                Once development started, the stakeholders and I met weekly
                to discuss concepts and direction so we could quickly move to
                design. This allowed us to refine the design several Sprints
                ahead of development.
              </p>
            </FigureWithCaption>

            <FigureWithCaption
              src={SITEMAP}
              alt="Site map of the Open Data Portal"
              aspectRatio="4/3"
              width={1920}
              height={2152}
              captionTitle="Open Data Portal site map."
            >
              <p className={styles.bodyText}>
                The site map was our &quot;secret sauce&quot; for PI planning.
                We used it as the framework for planning each PI and breaking
                down the Product Backlog for the dev team.
              </p>
            </FigureWithCaption>

            <FigureWithCaption
              src={FINAL_HOME_DESIGN}
              alt="Final visual design for the Open Data Portal home page"
              aspectRatio="4/3"
              width={984}
              height={4096}
              captionTitle="Final visual design for the home page."
            >
              <p className={styles.bodyText}>
                Design was able to stay several Sprints ahead of development
                for the entire project, allowing us to deliver and release
                the Open Data Portal two months ahead of time.
              </p>
            </FigureWithCaption>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.bgSurface}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>What the vision earned.</p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Nearly a decade after the platform I helped envision first
                shipped, its structure is still recognizable in the system
                USPTO runs today – absorbed, by the agency&apos;s own
                description, into the Open Data Portal that eventually
                replaced it. That kind of staying power isn&apos;t an
                accident on a federal timeline; it&apos;s what happens when a
                vision gets built with the people who have to live with it,
                defended in the room meeting after meeting, and held to even
                when nothing in the market was forcing the issue.
              </p>
              <p className={styles.bodyText}>
                The clearest proof of that isn&apos;t a metric. It&apos;s
                this:
              </p>
            </div>

            <FigureWithCaption
              src={MICHELLE_LEE_LETTER}
              alt="A personal letter from Michelle Lee, then-Director of USPTO"
              aspectRatio="4/3"
              width={650}
              height={488}
              captionTitle="A personal letter from Michelle Lee, then-Director of USPTO."
            />
          </div>
        </section>

        <EndCTA
          nextTitle="AXA Vantage Agent Portal"
          nextHref="/case-studies/axa-vantage"
        />
      </main>
      <SiteFooter />
    </>
  );
}
