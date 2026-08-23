import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import BodyPull from '../../components/case-study/BodyPull';
import EndCTA from '../../components/case-study/EndCTA';
import Figure from '../../components/case-study/Figure';
import styles from './page.module.css';

const SCREENSHOT_ECOSYSTEM = '/images/rearview/screenshot-ecosystem.png';
const SCREENSHOT_APPLICATIONS = '/images/rearview/screenshot-applications.png';
const SCREENSHOT_MONITOR_WIREFRAME =
  '/images/rearview/screenshot-monitor-wireframe.png';
const SCREENSHOT_MONITOR_FINAL =
  '/images/rearview/screenshot-monitor-final.png';

export const metadata: Metadata = {
  title: 'Rearview Engineering Platform — Kevin B. Doyle',
  description:
    'How watching which alert channel on-call engineers actually answered first — not asking what they wanted — shaped a monitoring platform built for a 2am, four-minutes-awake decision.',
};

export default function RearviewPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Platform Design"
          company="HUGE"
          category="PLATFORM DESIGN"
          title="Rearview Engineering Platform"
          dek="When a deal was live, an outage didn't defer revenue — it deleted it. I designed the monitoring tool engineers used to see system health at a glance and act before small failures cascaded — built in direct partnership with the engineers who'd live in it."
          tags={[
            'Platform Design',
            'Developer Experience',
            'Interaction Design',
          ]}
          padding="compact"
        />

        <FactStrip
          facts={[
            {
              label: 'ROLE',
              value: 'Experience lead, internal engineering tools',
            },
            {
              label: 'SCOPE',
              value:
                'Monitoring platform — system health, alerting, incident diagnosis',
            },
            {
              label: 'PARTNERS',
              value: 'LivingSocial engineering, on-call engineers',
            },
            {
              label: 'RESEARCH',
              value:
                'Working sessions with on-call engineers, alert channel testing',
            },
          ]}
        />

        <section
          className={`${styles.section} ${styles.py10} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <Figure
              src={SCREENSHOT_ECOSYSTEM}
              alt="Screenshot of the Rearview ecosystem view showing every monitored application"
              aspectRatio="1440/900"
              caption="Ecosystem view. Every monitored application, one screen, one question answered before the engineer has to think: which of these needs me right now."
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
                  Nobody browses a monitoring tool. They open it at 2am.
                </p>
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  LivingSocial ran on deals with a fixed sales window. An outage
                  during one did not defer revenue — it deleted it. And the
                  failure was rarely that nobody noticed. It was that the
                  engineer who noticed could not tell fast enough which system
                  was actually broken, or what else was about to break because
                  of it. Every minute spent orienting was money that did not
                  come back.
                </p>
                <p className={styles.mutedText}>
                  That set the design constraint before anything else did.
                  Rearview&apos;s user is not at a desk with coffee. They were
                  asleep four minutes ago, they are being paid to make a fast
                  correct decision, and they are working with the smallest
                  amount of cognitive capacity a person has all week.
                  Comprehension speed beats feature depth. A screen that reads
                  as clear in daylight can still fail at 2am, and the only way
                  to know is to design for the second condition.
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
              The pager beat every channel we thought was better.
            </p>
            <div className={styles.body}>
              <p className={styles.bodyText}>
                Alerts went out by text, phone call, email, and pager. In
                testing, the pager got the fastest response.
              </p>
              <p className={styles.bodyText}>
                That was not the answer anyone expected in 2013, and it was easy
                to treat as a joke about obsolete hardware. It was not. The
                pager was the fastest channel because it was the only channel
                that meant one thing. A text competes with every other text.
                Email competes with everything. A pager going off in the dark
                carries no ambiguity about what it is or whether it can wait.
              </p>
              <p className={styles.bodyText}>
                The finding changed what I designed for. If the alert
                channel&apos;s value is unambiguous meaning, then the
                tool&apos;s job on arrival is to preserve that clarity rather
                than dump the engineer into a wall of graphs. So the entry point
                became an ecosystem view — every monitored application on one
                screen, one obvious answer to &quot;which of these needs
                me&quot; — and depth lived one level down, in the
                per-application dashboard, where an engineer who had already
                oriented could work.
              </p>
              <p className={styles.bodyText}>
                I did not get that from asking engineers what they wanted. I got
                it from watching which alert they answered first.
              </p>
            </div>
            <Figure
              src={SCREENSHOT_APPLICATIONS}
              alt="Screenshot of the Rearview per-application dashboard"
              aspectRatio="1080/609"
              caption="Per-application dashboard. Once an engineer knows which application needs them, every monitor for that service is visible at once — status at a glance, detail one click away."
            />
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.bgSurface} ${styles.borderAll}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              Building for the three minutes that matter
            </p>
            <BodyPull
              body={
                <>
                  <p className={styles.bodyText}>
                    From the application dashboard, an engineer could see every
                    monitor&apos;s alert state at once, then open a single
                    monitor to diagnose it — scrubbing back to any incident in
                    the recent past, zooming for more or less detail, testing
                    metrics and expressions against real data before committing
                    a change.
                  </p>
                  <p className={styles.bodyText}>
                    That last part was a deliberate concession to a user I could
                    not sit next to at 2am. Engineers needed to author and tune
                    their own monitors without design or product in the loop, so
                    the configuration surfaces had to be honest about the
                    underlying system rather than simplified into something an
                    on-call engineer would stop trusting. I spent design
                    capacity on making the mechanics visible instead of on
                    making the tool look approachable to someone who would never
                    use it.
                  </p>
                </>
              }
              pull="I spent design capacity on making the mechanics visible instead of on making the tool look approachable to someone who would never use it."
            />
            <Figure
              src={SCREENSHOT_MONITOR_WIREFRAME}
              alt="Wireframe of the Rearview monitor detail screen"
              aspectRatio="3146/1702"
              caption="Monitor detail, wireframe. Alerts history sits beside the graph so an incident and its data are readable together. The annotation at right is the decision that mattered: Save stays disabled until the engineer has tested the expression against the graph. Nobody ships an untested alert at 2am."
            />
            <Figure
              src={SCREENSHOT_MONITOR_FINAL}
              alt="Final design of the Rearview monitor detail screen"
              aspectRatio="1080/609"
              caption='Monitor detail, final. Two changes from the wireframe, both from working with the engineers. The graph moved to the primary position and the series got color, so the anomaly is visible before anything is read. And the absolute date range became "minutes back from now," with a jump to previous errors — because an on-call engineer&apos;s question is never "show me July 17," it&apos;s "what just happened."'
            />
            <div className={styles.body}>
              <p className={styles.bodyText}>
                The tradeoff worth naming: Rearview is dense, and it was built
                in direct partnership with the engineers who&apos;d live in it,
                which means it is fitted to them and would not survive contact
                with a general audience. That was the correct call for an
                internal tool with a known population and a known worst case. It
                is also the reason a tool like this quietly rots when the
                population turns over and nobody re-runs the research.
              </p>
              <p className={styles.bodyText}>
                The pattern showed up again years later, with different users
                and a much larger population. People who do not choose their
                tools do not send feedback. You have to go find out which alert
                they answered first.
              </p>
            </div>
          </div>
        </section>

        <EndCTA label="LEARN" nextTitle="About me" nextHref="/about" />
      </main>
      <SiteFooter />
    </>
  );
}
