import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import Aside from '../../components/case-study/Aside';
import RuledList from '../../components/case-study/RuledList';
import BodyPull from '../../components/case-study/BodyPull';
import MetricComparison from '../../components/case-study/MetricComparison';
import EndCTA from '../../components/case-study/EndCTA';
import OrgChart45 from './components/OrgChart45';
import OrgChart450 from './components/OrgChart450';
import PlanningCycle from './components/PlanningCycle';
import styles from './page.module.css';

export const metadata: Metadata = {
  title:
    "Leading the Research to Improve the Developer's Experience - Kevin B. Doyle",
  description:
    'How founding a 45-person, then 450-person developer research panel at Fannie Mae turned "developer productivity" into "developer focus" — and set the roadmap that followed.',
};

export default function DevInsightsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Research"
          company="FANNIE MAE"
          category="RESEARCH LEADERSHIP"
          title="Leading the Research to Improve the Developer's Experience"
          dek="Developers can be captive customers, too, and in large enterprise organizations they rarely get to choose the internal tools, platforms, and processes their job hands them, any more than an employee chooses the app they use to enter their time — they just have to use them, every day, whether the experience is good or not."
          tags={[
            'Design Leadership',
            'Developer Experience',
            'Customer Research',
          ]}
        />

        <FactStrip
          facts={[
            { label: 'ROLE', value: 'Founded and led the practice' },
            { label: 'PANEL', value: '45 champions → 450 participants' },
            {
              label: 'POPULATION',
              value: '3,000+ developers, 6 technology orgs',
            },
            {
              label: 'FRAMEWORK',
              value: 'DX Core 4, Snapshot self-assessment',
            },
          ]}
        />

        <section className={`${styles.section} ${styles.borderBottom}`}>
          <div className={`container ${styles.inner}`}>
            <div className={styles.prose}>
              <div className={styles.rail}>
                <p className={styles.railLabel}>BUILT FROM THE BOTTOM UP</p>
                <p className={styles.railIntro}>
                  Everyone knew developers were hitting friction. Nobody could
                  say where the worst of it was.
                </p>
                <OrgChart45 />
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  Before forming the DevInsights Team, we only had access to
                  directors, principals, and VPs, and that leadership viewed the
                  bulk of our 3,000+ developers as “full-stack” developers. One lump group,
                  one label, one set of assumptions.
                </p>
                <p className={styles.bodyText}>
                  It was clear that the top-down approach wasn&apos;t producing anything tangible we could
                  act on. I knew we had to skip the chain of command and reach out to the “front-line” coders — the
                  developers who lived, ate, and breathed code all day. The developers knew what was broken across our SDLC because they cared. Had passion. 
                  Their insight wouldn&apos;t just guide our team&apos;s roadmap. It
                  could guide an entire division of 3,000+ developers.
                </p>
                <p className={styles.bodyText}>
                  So I walked the frontline and spoke with other developers,
                  designers, team leads, and project managers — the people
                  who worked closest to developers — and asked them who they most liked working
                  with. Everyone had a someone they liked working with. After speaking with a few of those developers, I then asked those developers the same question, and
                  kept pulling the thread until I had a pool of very passionate, engaged developers.
                </p>
                <p className={styles.bodyText}>
                  What I found inside the “full-stack” label was far more
                  nuanced than leadership&apos;s understanding. Using active directory
                  information, 1:1 interviews, and focus groups, I built a
                  detailed dataset on every team member: full-stack or front-end
                  or back-end by preference, tooling (VS Code vs. JetBrains, etc.),
                  tenure at Fannie, years of professional experience, assets supported,
                  manager, team, director, and VP. 
                </p>
                <p className={styles.bodyText}>
                  That dataset became the instrument. The key. Forty-five developers,
                  precisely characterized, speaking for 3,000+.
                </p>
              </div>
            </div>
            <Aside label="THE TRADEOFF">
              Referral sampling surfaced the visible and the well-connected data. I
              used active directory data to check coverage across all seven
              technology organizations and corrected for gaps as the panel grew.
            </Aside>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.bgPanel} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              A chorus of passionate voices
            </p>
            <p className={styles.intro}>
              A panel is only useful if it stays warm. We ran DevInsights in a
              dedicated Microsoft Teams channel with monthly meetings and
              standing activity cycles, and we were explicit about the deal up
              front:
            </p>
            <RuledList
              items={[
                'Attend DevInsights activities and monthly meetings — roughly five hours a month',
                'Speak up in group activities; no one is silent',
                'Maintain access to the tools we work in: Mural, Figma, and others',
                'Talk to fellow developers about their friction points and report back',
                'Cameras on during recorded sessions',
              ]}
            />
            <p className={styles.intro}>
              Five hours a month from 45 developers bought us a standing line
              into how thousands of engineers actually worked. Public-product
              teams pay a fortune for access like that. We had it at our fingertips; whenever we needed it. 
            </p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.borderBottom}`}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              A research practice, not a research project
            </p>
            <BodyPull
              body={
                <>
                  <p className={styles.bodyText}>
                    The panel&apos;s real value was that it let us match the
                    method to the question instead of defaulting to a survey.
                  </p>
                  <p className={styles.bodyText}>
                    When a product owner needed to know whether a workflow was
                    broken or just unfamiliar, I could pull five back-end
                    developers on JetBrains who supported that specific asset.
                    When we needed to understand what the division as a whole
                    was struggling with, we ran the Snapshot.
                  </p>
                  <p className={styles.bodyText}>
                    Every activity ran the same shape: a facilitator who owned
                    the room and an observer who watched and took notes,
                    followed by analysis that ended in recommendations rather
                    than findings.
                  </p>
                </>
              }
              pull="Research that stops at a findings deck doesn't survive contact with an engineering roadmap."
            />
            <p className={styles.activities}>
              <span className={styles.activitiesLabel}>
                Activities in rotation:{' '}
              </span>
              1:1 interviews + focus groups and empathy sessions + design
              reviews + usability testing + card sorting and core modeling +
              surveys
            </p>
            <div className={styles.planningWrap}>
              <PlanningCycle />
              <p className={styles.planningCaption}>
                Activities that require direct input from customers should have
                a facilitator and an observer. The facilitator is the
                &quot;face&quot; of the activity and will interact directly with
                the customers. The observer will take notes and watch users
                while they interact with the facilitator.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.bgSurface} ${styles.borderBottom}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              Measuring what we couldn&apos;t see
            </p>
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.lede}>
                Forty-five developers could tell us what was wrong. However,
                having more developers would help us pinpoint exactly where
                improvements were needed down to the unit level and yield quantitative data to back up the qualitative
                insights.
              </p>
              <p className={styles.bodyText}>
                So the panel grew. DevInsights went from 45 to 450 developers
                — roughly one in seven people in the division — recruited across
                all seven technology organizations rather than by referral this
                time, so the larger pool corrected the sampling bias the
                original 45 carried. The original 45 stayed on as champions: the
                group we pulled from for interviews, focus groups, and design
                reviews.
              </p>
            </div>
            <OrgChart450 />
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.bodyText}>
                Two tiers, two jobs. The originial 45 developers became champions - captains that could rally the dev teams they represented and encourage the
                developers on their team to take the quarterly Snapshot survey.
              </p>
              <p className={styles.bodyText}>
                The full pool of 450 team members gave us a survey population that represented 1 in 7
                developers. Imagine having a product where you could speak to
                one-seventh of your customer base.
              </p>
              <p className={styles.bodyText}>
                That kind of representation made this a true DevInsights team.
                We first ran a pilot survey to validate the DX Core 4 platform, then ran the division&apos;s first developer
                self-assessment — the Snapshot. This would be the first comprehensive survey of our developers. It asked questions about every aspect of their developer experience, from the tools they used to the processes they followed to the culture they worked in.
              </p>
              <p className={styles.bodyText}>
                The April Snapshot called out several areas of concern but we decided to keep the focus on two, based on importance determined by developer feedback and DXI rating as it compared the the P75 - the top 25 percent of the tech industry. Deep work scored
                low — developers weren&apos;t failing at their jobs, they were
                being prevented from doing them, fragmented across meetings,
                tools, and context switches. Build and test scored low alongside
                it: the loop between writing code and knowing whether it worked
                was slow enough to break concentration on its own.
              </p>
              <p className={styles.bodyText}>
                That reframed the problem for leadership from “developer
                productivity” to “developer focus,” and it set the priorities
                for the year.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>What changed</p>
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.mutedText}>
                Leadership took the survey&apos;s findings into planning for the upcoming quarter. Deep work
                and build-and-test became the priorities the platform
                organization worked against — the DevEx North Star metrics the
                division judged itself by, translated into OKRs and roadmap
                commitments.
              </p>
              <p className={styles.mutedText}>
                Two interventions followed. For deep work: No Recurring Meeting
                Thursdays, a division-wide protected day. For build and test:
                GitHub Copilot in VS Code and OpenAI&apos;s Codex, rolled out at
                scale on the back of the pilot assessments.
              </p>
              <p className={styles.mutedText}>
                The July Snapshot went back to the same 450 developers.
              </p>
            </div>
            <MetricComparison
              eyebrow="DEEP WORK — APRIL → JULY SNAPSHOT"
              label="Deep work"
              beforePct={74}
              afterPct={89}
              delta="+12%"
              caption="Intervention: No Recurring Meeting Thursdays, a division-wide protected day. Bar lengths are indicative until the real driver scores go in; the labeled delta is the measured result."
            />
            <MetricComparison
              eyebrow="BUILD & TEST — APRIL → JULY SNAPSHOT"
              label="Build and test"
              beforePct={74}
              afterPct={89}
              delta="+12.5%"
              caption="Intervention: GitHub Copilot in VS Code and OpenAI's Codex, chosen on the back of the pilot assessments. Delta stated numerically alongside bar length — the comparison never depends on the colour difference."
            />
            <div className={styles.attributionRow}>
              <p className={styles.attributionText}>
                The improvements happened because our team made these areas a
                priority. One of the programs we initiated was a “No Recurring
                Meetings Thursday”. This meant that developers had a least one
                day where they could work without
              </p>
              <div className={styles.attributionAside}>
                <Aside label="THE TRADEOFF">
                  The division attributes the build-and-test gain to the
                  assistants and the assessment process that picked them,
                  together. Deep work&apos;s gain maps to one program cleanly.
                  But one cycle isn&apos;t a trend, and no survey wave separates
                  a protected Thursday — or a well-targeted pilot — from
                  everything else that happened in the same quarter. We&apos;d
                  want several more waves before calling either durable.
                </Aside>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.bgSurface}`}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>
              The panel as standing infrastructure
            </p>
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.mutedText}>
                DevInsights was a research initiative, not a design one. Its
                output was insight, and insight is only worth what someone does
                with it.
              </p>
              <p className={styles.mutedText}>
                What made it durable is that it stayed available. When our teams
                built Chassis CodeGen and DragOn, we didn&apos;t go recruit
                participants and wait three weeks — we already had a
                characterized panel and could pull the exact developers
                who&apos;d use the thing. Design decisions on both products ran
                through developers who did that work every day.
              </p>
              <p className={styles.mutedText}>
                That&apos;s the captive-user advantage. The people who depend on
                what you build are down the hall, and if you do the work to
                reach them once, they stay reachable.
              </p>
            </div>
          </div>
        </section>

        <EndCTA
          nextTitle="Chassis CodeGen"
          nextHref="/case-studies/chassis-codegen"
        />
      </main>
      <SiteFooter />
    </>
  );
}
