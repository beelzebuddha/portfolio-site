import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import BodyPull from '../../components/case-study/BodyPull';
import EndCTA from '../../components/case-study/EndCTA';
import Figure from '../../components/case-study/Figure';
import styles from './page.module.css';

const SCREENSHOT_START = '/images/dragon-ui-builder/screenshot-start.png';
const SCREENSHOT_SETTINGS = '/images/dragon-ui-builder/screenshot-settings.png';
const SCREENSHOT_MODALS = '/images/dragon-ui-builder/screenshot-modals.png';
const SCREENSHOT_COMPONENTS =
  '/images/dragon-ui-builder/screenshot-components.png';

export const metadata: Metadata = {
  title: 'DragOn UI Builder — Kevin B. Doyle',
  description:
    'How a hard-to-use open-source Angular foundation became a drag-and-drop UI builder that solved onboarding, concept collaboration, and a lack of design support with one small tool developers chose to adopt.',
};

export default function DragonUiBuilderPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Platform Design"
          company="FANNIE MAE"
          category="PLATFORM DESIGN"
          title="DragOn UI Builder"
          dek="DragOn helped solve three problems: project onboarding for new and junior developers inefficiency, supportive tools for concept collaboration, and a lack of design support. DragOn became the design support they didn't have: new developers learned our Angular system by dragging its real components into place, developers and product managers built and shared working concepts without writing a line of code, and daily stand-ups turned into the place dev teams built the UI instead of just talking about it."
          tags={['Platform Design', 'Developer Experience', 'Visual Design']}
          border={false}
        />

        <FactStrip
          borderTop
          borderColor="line"
          facts={[
            { label: 'ROLE', value: 'Product designer, platform' },
            {
              label: 'SCOPE',
              value:
                'Drag-and-drop UI builder for the enterprise Angular Development Kit',
            },
            {
              label: 'PARTNERS',
              value: 'Team product manager and development team',
            },
            {
              label: 'ALSO DESIGNED',
              value: 'Custom icon set for every component in the builder',
            },
          ]}
        />

        <section className={`${styles.section} ${styles.py10}`}>
          <div className={`container ${styles.inner}`}>
            <Figure
              src={SCREENSHOT_START}
              alt="Screenshot of the DragOn UI Builder build area"
              aspectRatio="1922/1026"
              caption="Developers can drag and drop components onto the build area and start configuring their application's layout."
            />
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.bgSurface} ${styles.borderTop}`}
        >
          <div className={`container ${styles.inner}`}>
            <div className={styles.prose}>
              <div className={styles.rail}>
                <p className={styles.railLabel}>WHERE IT STARTED</p>
                <p className={styles.railIntro}>
                  Dev teams needed to be more efficient starting up their
                  projects
                </p>
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  New and junior developers had no way into the design system
                  that didn&apos;t start with weeks of documentation. Teams
                  without a dedicated designer — most of them — had no way to
                  build or share a real interface concept without me.
                </p>
                <p className={styles.bodyText}>
                  And teams that hit a UI question mid-sprint had no way to work
                  through it together that produced anything by the time the
                  conversation ended. DragOn became the answer to all three,
                  which is a stranger thing for one small tool to be than it
                  sounds.
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
              The developer couldn&apos;t build it wrong
            </p>
            <div className={styles.body}>
              <p className={styles.mutedText}>
                The usual path onto a new team looked the same everywhere: read
                the design system documentation, guess at how a component was
                supposed to behave, submit something, and find out in code
                review what you&apos;d gotten wrong. That loop worked,
                eventually, but it put the correction after the mistake instead
                of before it — and on a team with no designer to catch things
                early, code review was often the first time anyone looked
                closely at whether an interface decision was right.
              </p>
              <p className={styles.mutedText}>
                DragOn moved that correction earlier. A new developer&apos;s
                first contact with the design system wasn&apos;t a page of
                documentation, it was the system itself, already configured
                correctly, sitting in a build area they could drag pieces into.
                The tool only offered the components and settings the system
                actually supported, so there was no version of &quot;wrong&quot;
                to accidentally build — the constraints that would normally
                surface as review comments were just the boundaries of what the
                builder let you do. Someone could learn what a correct interface
                looked like by assembling one, before they&apos;d written a line
                of code anyone else had to fix.
              </p>
            </div>
            <Figure
              src={SCREENSHOT_SETTINGS}
              alt="Screenshot of the DragOn UI Builder settings panel"
              aspectRatio="1920/1024"
              caption="Once the component is in the build area, the developer can adjust the UI in the Settings panel."
            />
            <Figure
              src={SCREENSHOT_MODALS}
              alt="Screenshot of the DragOn UI Builder export and share modals"
              aspectRatio="1449/540"
              caption="Developers could copy and paste the code from DragOn directly into their IDE, share a link to the DragOn UI with someone, and save the project for later."
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.py10}`}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>Lack of design team support</p>
            <div className={styles.bodyPullRow}>
              <div className={styles.body}>
                <p className={styles.mutedText}>
                  At the scale DragOn served, this wasn&apos;t a queue teams
                  could join to borrow design help. It was that there was no
                  design help to queue for. Across a superdivision of more than
                  3,000 developers, over 90% of product teams had no design
                  resource of any kind — no designer on staff, no contractor, no
                  realistic path to getting either.
                </p>
                <p className={styles.mutedText}>
                  DragOn gave developers and product managers a way to build and
                  share a working concept without a line of code or a running
                  dev environment. A product manager could put together a real
                  interface, not a description of one, and hand it to a
                  developer already mostly done. That&apos;s design capacity no
                  single designer, or even a small team, could ever have covered
                  at this scale — the tool supplied it instead.
                </p>
              </div>
              <div className={styles.imageColumn}>
                <Figure
                  src={SCREENSHOT_COMPONENTS}
                  alt="Screenshot of the DragOn UI Builder custom component icon set"
                  aspectRatio="524/418"
                  caption="I wanted the icons to be as simplified as possible yet immediately recognizable as the component they represented."
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.borderTop} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              Daily stand-ups became build sessions
            </p>
            <BodyPull
              body={
                <>
                  <p className={styles.mutedText}>
                    Plenty of teams ran into a UI question they couldn&apos;t
                    answer by talking about it. We reached out to several teams
                    that our metrics noted high DragOn usage — several teams
                    stated that they started using DragOn after their morning
                    stand-up to work through UI obstacles together, live, in a
                    shared screen session.
                  </p>
                  <p className={styles.mutedText}>
                    That&apos;s a different use than the one I designed for. I
                    built a tool for one person to prototype alone. Teams turned
                    it into a room. Whatever got built in that session was
                    already real code, so the meeting produced something the
                    next meeting didn&apos;t have to redo.
                  </p>
                  <p className={styles.mutedText}>
                    A tool built to cover design work no single designer could
                    ever have reached ended up being the thing three different
                    roles could stand in front of at once.
                  </p>
                  <p className={styles.mutedText}>
                    Methods in rotation: component and icon design — interaction
                    design for the build/configure/export flow —
                    collaborative-link sharing — code export to working Angular.
                  </p>
                </>
              }
              pull="Several teams stated that they started using DragOn after their morning stand-up to work through UI obstacles together, live, in a shared screen session."
            />
          </div>
        </section>

        <div className={styles.seam} />

        <EndCTA
          nextTitle="AXA Vantage Agent Portal"
          nextHref="/case-studies/axa-vantage"
        />
      </main>
      <SiteFooter />
    </>
  );
}
