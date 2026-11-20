import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import Lightbox from '../../components/Lightbox';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import Aside from '../../components/case-study/Aside';
import RuledList from '../../components/case-study/RuledList';
import EndCTA from '../../components/case-study/EndCTA';
import OrgChart45 from './components/OrgChart45';
import OrgChart450 from './components/OrgChart450';
import PlanningCycle from './components/PlanningCycle';
import ResultTiles from './components/ResultTiles';
import styles from './page.module.css';

const JOURNEY_MAPS_URL =
  'https://www.figma.com/board/b8hWl6qmDhqAwQiVZqcMcE/Customer-Journey-example?node-id=0-1&t=OEHxS8l1rTj6EEKW-1';
const RESEARCH_ROADMAP_URL =
  'https://www.figma.com/board/UbbVhTLxKWahpoK04alE4O/Dev-Research?node-id=0-1&t=HQX0f1P11d6HfSoF-1';

/*
 * TODO(journey-map-dset): the DSET registration journey map export isn't in
 * the repo yet. When public/images/dev-insights/journey-map-dset.png lands,
 * replace `null` with its src and pixel dimensions, e.g.
 *   { src: '/images/dev-insights/journey-map-dset.png', width: 4000, height: 2000 }
 * Until then the image slot is not rendered, so no broken image ships.
 */
const JOURNEY_MAP_DSET: { src: string; width: number; height: number } | null =
  null;
const JOURNEY_MAP_DSET_ALT =
  'Journey map of dataset registration for a full-stack developer. Pain points cluster in preparation and submission, where developers repeat a manual spreadsheet cycle four to five times.';

export const metadata: Metadata = {
  title:
    'Dev Insights: Giving 3,000+ developers a say in what we built — Kevin B. Doyle',
  description:
    'How founding a 45-person, then 450-person developer research panel at Fannie Mae turned "developer productivity" into "developer focus" — and set the roadmap that followed.',
};

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.featureLink}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function DevInsightsPage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        {/* 2 · Hero */}
        <CaseStudyHero
          breadcrumb="Research"
          company="FANNIE MAE"
          category="DESIGN LEADERSHIP"
          title="Dev Insights: Giving 3,000+ developers a say in what we built"
          dek="Developers can be captive users, too. In a large enterprise, they don't choose their internal tools, platforms, or processes. They use what they're given, every day, whether it works or not. I founded Dev Insights so their experience could shape where the platform organization invested."
          tags={['Research & discovery', 'Design leadership', 'AI tools']}
        />

        {/* 3 · Fact strip */}
        <FactStrip
          asDescriptionList
          facts={[
            { label: 'ROLE', value: 'Founder and Lead, Dev Insights' },
            {
              label: 'TEAM',
              value:
                'Enterprise Developer Experience, a shared-service team building internal tools for developers',
            },
            {
              label: 'POPULATION',
              value: '3,000+ developers across 6 technology orgs',
            },
            {
              label: 'FRAMEWORK',
              value: 'DX Core 4, DX Snapshot self-assessment',
            },
          ]}
        />

        {/* 4 · The problem */}
        <section className={styles.section} aria-labelledby="the-problem">
          <div className={`container ${styles.inner}`}>
            <div className={styles.railRow}>
              <div className={styles.rail}>
                <h2 id="the-problem" className={styles.railLabel}>
                  The problem
                </h2>
                <p className={styles.lede}>
                  Leadership knew developers were losing time. No one could say
                  where.
                </p>
              </div>
              <div className={styles.prose}>
                <p>
                  Directors and VPs saw 3,000+ developers as one group:
                  &quot;full-stack.&quot; One label, one set of assumptions.
                  Developers had no channel to say what was broken, and no
                  choice but to keep using it.
                </p>
                <p>
                  The real problem wasn&apos;t a missing survey. Leadership had
                  no evidence to decide where to invest in developer experience.
                  Dev Insights gave them that evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 · My role */}
        <section
          className={`${styles.section} ${styles.bgPanel}`}
          aria-labelledby="my-role"
        >
          <div className={`container ${styles.inner}`}>
            <h2 id="my-role" className={styles.h2}>
              My role
            </h2>
            <p className={styles.lede}>
              I founded the program and led every part of it.
            </p>
            <div className={styles.twoCol}>
              <div className={`${styles.col} ${styles.prose}`}>
                <p>
                  I was the only designer on the Enterprise Developer Experience
                  team, a shared-service team building internal tools for 3,000+
                  developers.
                </p>
                <p>
                  I started Dev Insights after usage of Chassis CodeGen, one of
                  our own products, dipped. We wanted to know why and had no way
                  to ask developers. Dev Insights became that way.
                </p>
                <p>
                  I ran it alongside my product design work. I led every
                  engagement, from planning to the readout, with support from
                  teammates who observed and took notes. I presented findings to
                  the VP&apos;s leadership team and built the ChatGPT project
                  that let leadership query the research directly.
                </p>
              </div>
              <div className={styles.col}>
                <RuledList
                  items={[
                    {
                      lead: 'I owned:',
                      text: 'program design, recruiting, research plans, facilitation, synthesis, journey maps, and readouts to leadership.',
                    },
                    {
                      lead: "My team's Senior Director and managers:",
                      text: 'sponsorship and team priorities.',
                    },
                    {
                      lead: "The VP's leadership team",
                      text: '(Principals, Directors, and Senior Directors of the Developer Platform portfolio): the audience for findings, and the owners of the OKRs those findings set.',
                    },
                    {
                      lead: 'Participant team managers:',
                      text: "triaged their own team's Snapshot results.",
                    },
                    {
                      lead: 'Developers:',
                      text: '450 participants at every level, from Associate to Advisor.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6 · Research and discovery, Activities, Findings */}
        <section className={styles.section} aria-labelledby="research">
          <div className={`container ${styles.inner}`}>
            <h2 id="research" className={styles.h2}>
              Research and discovery
            </h2>
            <div className={`${styles.twoCol} ${styles.twoColWide}`}>
              <div className={styles.col}>
                <div className={styles.prose}>
                  <p className={styles.lede}>
                    I built a standing panel instead of running one-off studies,
                    so the method could match the question.
                  </p>
                  <p>
                    I started with referrals. I asked the people who worked
                    closest to developers who they liked working with. Then I
                    asked those developers the same question, and kept pulling
                    the thread. I characterized each panelist: front-end,
                    back-end, or full-stack; IDE; tenure; years of experience;
                    assets supported; and reporting chain.
                  </p>
                  <p>
                    That let me pick the method per question. If a product owner
                    needed to know whether a workflow was broken or just
                    unfamiliar, I could pull five back-end developers on
                    JetBrains who supported that asset. If we needed the whole
                    division&apos;s picture, we ran the Snapshot.
                  </p>
                </div>
              </div>
              <div className={`${styles.col} ${styles.pullCard}`}>
                <OrgChart45 />
              </div>
            </div>
            <p
              className={`${styles.prose} ${styles.proseWide} ${styles.muted}`}
            >
              <span>
                <span className={styles.methodsLabel}>Methods:</span> 1:1
                interviews, focus groups and empathy sessions, design reviews
                and cognitive walkthroughs, usability testing and UAT, priority
                card sorting, the quarterly DX Snapshot, and DX Studies
                deep-dive surveys.
              </span>
            </p>

            <h3 id="activities" className={styles.h3}>
              Activities
            </h3>
            <div className={styles.wide}>
              <PlanningCycle
                labelledBy="activities"
                describedBy="activities-caption"
              />
            </div>
            <p
              id="activities-caption"
              className={`${styles.caption} ${styles.wide}`}
            >
              Each activity looped back to Planning once it was done, so the
              next one started from what had changed. Activities with developers
              in the room had a facilitator and an observer: the facilitator ran
              the session and talked with developers, and the observer took
              notes and watched how they responded.
            </p>

            <h3 className={styles.h3}>Findings</h3>
            <div className={styles.wide}>
              <RuledList
                items={[
                  '"Full-stack" hid real differences in role, tooling, and experience that changed what each group needed.',
                  "Deep work and build-and-test scored below the industry P75 benchmark. Developers weren't failing at their jobs. Meetings, tool switching, and slow feedback loops kept them from doing them.",
                  'Work around the code cost as much as work in it. Registration processes ran through manual spreadsheets and repeated validation cycles (see section 4).',
                ]}
              />
            </div>
          </div>
        </section>

        {/* 7 · Journey maps and workflow artifacts */}
        <section
          className={`${styles.section} ${styles.bgSurface}`}
          aria-labelledby="journey-maps"
        >
          <div className={`container ${styles.inner}`}>
            <h2 id="journey-maps" className={styles.h2}>
              Journey maps and workflow artifacts
            </h2>
            <div className={styles.prose}>
              <p className={styles.lede}>
                I mapped the work developers had to do around their code, not
                just in it.
              </p>
              <p>
                To better understand the developer experience, I built customer journey maps for two registration processes
                every data-producing team had to complete: interface
                registration (ICR) and dataset registration (DSET). Each map
                followed a full-stack developer through seven stages, from
                awareness to access provisioning and feedback. Each stage had
                six layers: steps, pain points, positive points, frontstage,
                backstage, and support.
              </p>
            </div>
            {JOURNEY_MAP_DSET && (
              <figure className={styles.figure}>
                <Lightbox
                  src={JOURNEY_MAP_DSET.src}
                  alt={JOURNEY_MAP_DSET_ALT}
                  width={JOURNEY_MAP_DSET.width}
                  height={JOURNEY_MAP_DSET.height}
                >
                  <div
                    className={styles.mapFrame}
                    style={{
                      aspectRatio: `${JOURNEY_MAP_DSET.width}/${JOURNEY_MAP_DSET.height}`,
                    }}
                  >
                    <Image
                      src={JOURNEY_MAP_DSET.src}
                      alt={JOURNEY_MAP_DSET_ALT}
                      fill
                      className={styles.mapImage}
                      sizes="(min-width: 1240px) 1080px, (min-width: 900px) calc(100vw - 80px), calc(100vw - 40px)"
                      quality={90}
                    />
                  </div>
                </Lightbox>
              </figure>
            )}
            <p className={styles.prose}>
              <ExternalLink href={JOURNEY_MAPS_URL}>
                View the journey maps in FigJam
              </ExternalLink>
            </p>

            <h3 className={styles.h3}>Findings</h3>
            <div className={styles.wide}>
              <RuledList
                items={[
                  'Developers entered every field of the source-to-target mapping by hand.',
                  'Preparation and submission ran as a loop. Developers went through it four to five times. Errors came back in about an hour, and most were formatting errors.',
                  'Developers resubmitted a spreadsheet they had already submitted during dataset registration. Earlier submissions were hard to find.',
                  'Some integration patterns needed three separate requests: interface registration, producer offerings, and consumer contracts.',
                  'Developers asked for one UI to select data mappings and generate the request, instead of a chain of spreadsheets.',
                ]}
              />
            </div>
            <p className={`${styles.prose} ${styles.proseWide}`}>
              <span>
                <ExternalLink href={RESEARCH_ROADMAP_URL}>
                  View the Customer Research roadmap and service offerings in
                  FigJam
                </ExternalLink>{' '}
                - a 12-week plan of monthly check-ins, weekly office hours, 1:1s
                and focus groups, the Snapshot release, deep-dive surveys, and a
                test-plan → usability test → analysis → optimization cycle.
              </span>
            </p>
          </div>
        </section>

        {/* 8 · Working with users and partners */}
        <section className={styles.section} aria-labelledby="working-with">
          <div className={`container ${styles.inner}`}>
            <h2 id="working-with" className={styles.h2}>
              Working with users and partners
            </h2>
            <p className={styles.lede}>
              Leaders and developers were two audiences, so I gave each a
              different deal.
            </p>
            <div className={styles.wide}>
              <RuledList
                items={[
                  {
                    lead: 'Leaders (advocates):',
                    text: 'shared their business goals for developer experience, gave us access to their developers, passed updates to their teams, and attended monthly updates.',
                  },
                  {
                    lead: 'Developers:',
                    text: 'about five hours a month. Attend activities and monthly meetings. Speak up in group sessions. Cameras on. Bring back friction points from their teams.',
                  },
                ]}
              />
            </div>
            <div className={`${styles.prose} ${styles.proseWide}`}>
              <p>
                We ran it all through a dedicated Teams channel, monthly
                check-ins, and weekly office hours. Each Snapshot
                participant&apos;s manager could triage their team&apos;s
                results, so findings reached someone who could act on them at
                team level, not only at the VP level.
              </p>
              <p>
                Five hours a month from the panel gave us a standing line into
                how thousands of developers actually worked. Teams building
                public products pay a lot for that kind of access.
              </p>
            </div>
          </div>
        </section>

        {/* 9 · Iterations and decisions */}
        <section
          className={`${styles.section} ${styles.bgSurface}`}
          aria-labelledby="iterations"
        >
          <div className={`container ${styles.inner}`}>
            <h2 id="iterations" className={styles.h2}>
              Iterations and decisions
            </h2>
            <p className={styles.lede}>
              The first panel worked, but it didn&apos;t represent enough of the
              organization. So I rebuilt it.
            </p>
            <div className={styles.wide}>
              <RuledList
                items={[
                  {
                    lead: 'Version 1:',
                    text: '45 developers, recruited by referral. It got us passionate, engaged developers fast. But referral sampling favors the visible and well-connected. Too many teams and portfolios across the six orgs had no voice.',
                  },
                  {
                    lead: 'Version 2:',
                    text: '450 developers, recruited across all six orgs. When the DX Intelligence Platform was approved, I used the rollout to expand the panel to 450, roughly one in seven developers in the division. I used ChatGPT to sort the org data and find the strongest candidates from teams across every org.',
                  },
                  {
                    lead: 'What happened to the original 45:',
                    text: 'they became champions. They rallied their teams to take the quarterly Snapshot and stayed our first call for interviews, focus groups, and design reviews.',
                  },
                  {
                    lead: 'Pilot before scale:',
                    text: "we ran a pilot survey to validate the platform before the division's first full Snapshot.",
                  },
                ]}
              />
            </div>
            <OrgChart450 />
            <div className={styles.prose}>
              <p>
                Two tiers, two jobs. The champions gave us depth and outreach.
                They would rally the dev teams they worked in, listened to their
                pain points, jotted down their own pain points, and encouraged
                developers on their team to take the quarterly Snapshot survey.
              </p>
              <p>
                The 450 gave us a survey population that represented 1 in 7
                developers. Imagine having a product where you could speak to
                one-seventh of your customer base.
              </p>
              <p>
                That kind of representation made this a true Dev Insights team.
                We stood up the DX Intelligence Platform on the DX Core 4
                framework and ran the division&apos;s first developer
                self-assessment — the Snapshot — alongside driver deep-dive
                surveys and product assessments.
              </p>
              <p>
                The April Snapshot pointed hard at two things. Deep work scored
                low — developers weren&apos;t failing at their jobs, they were
                being prevented from doing them, fragmented across meetings,
                tools, and context switches. Build and test scored low alongside
                it: the loop between writing code and knowing whether it worked
                was slow enough to break concentration on its own.
              </p>
              <p>
                That reframed the problem for leadership from “developer
                productivity” to “developer focus,” and it set the priorities
                for the year.
              </p>
            </div>
          </div>
        </section>

        {/* 10 · Information hierarchy, What we built */}
        <section className={styles.section} aria-labelledby="info-hierarchy">
          <div className={`container ${styles.inner}`}>
            <h2 id="info-hierarchy" className={styles.h2}>
              Information hierarchy
            </h2>
            <div className={styles.prose}>
              <p className={styles.lede}>
                The April Snapshot flagged several problem areas. I put two in
                front of leadership.
              </p>
              <p>
                I chose deep work and build-and-test using two criteria: how far
                each fell below the industry P75 benchmark, and how much
                developers said it mattered. The other areas stayed in the data
                and in the research repository, but out of the headline.
              </p>
              <p>
                That choice reframed the conversation from &quot;developer
                productivity&quot; to &quot;developer focus,&quot; and it set
                the year&apos;s priorities.
              </p>
              <p>
                The ChatGPT project (section 8) handled the depth. The readout
                carried the headline. Leaders who wanted detail queried the
                research directly instead of digging through slides.
              </p>
            </div>

            <h3 className={styles.h3}>What we built</h3>
            <p className={`${styles.lede} ${styles.proseWide}`}>
              A research practice, not a research project.
            </p>
            <div className={styles.wide}>
              <RuledList
                items={[
                  {
                    lead: 'Two-tier panel:',
                    text: '45 champions and 450 Snapshot participants, across all six technology orgs.',
                  },
                  {
                    lead: 'A quarterly rhythm:',
                    text: 'DX Snapshot, deep-dive studies, and a standing rotation of qualitative activities.',
                  },
                  {
                    lead: 'Journey maps',
                    text: 'for the processes developers depended on.',
                  },
                  {
                    lead: 'An AI research assistant:',
                    text: 'I built a ChatGPT project loaded with Snapshot results, interview findings, and journey maps. I wrote its instructions and skills so it produced consistent reports and spreadsheets. My team and senior leadership, up through the portfolio VP, queried it directly.',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* 11 · The results */}
        <section
          className={`${styles.section} ${styles.bgSurface}`}
          aria-labelledby="results"
        >
          <div className={`container ${styles.inner}`}>
            <h2 id="results" className={styles.h2}>
              The results
            </h2>
            <p className={styles.lede}>
              From the April to the July Snapshot, the same 450 developers
              reported a 12% improvement in deep work and a 12.5% improvement in
              build and test.
            </p>
            <ResultTiles />
            <div className={styles.wide}>
              <RuledList
                items={[
                  'Findings set CIO-level OKRs, roadmap priorities, and DevEx North Star metrics.',
                  'Deep work intervention: No Recurring Meeting Thursdays, a division-wide protected day.',
                  'Build and test intervention: GitHub Copilot in VS Code and Codex, chosen through the AI tool pilot assessments.',
                  {
                    lead: 'An AI research assistant:',
                    text: 'I built a ChatGPT project loaded with Snapshot results, interview findings, and journey maps. I wrote its instructions and skills so it produced consistent reports and spreadsheets. My team and senior leadership, up through the portfolio VP, queried it directly.',
                  },
                ]}
              />
            </div>
            <div className={styles.asideWrap}>
              <Aside label="THE TRADEOFF">
                The division attributes the build-and-test gain to the
                assistants and the assessment process that picked them,
                together. Deep work&apos;s gain maps to one program cleanly. But
                one cycle isn&apos;t a trend, and no survey wave separates a
                protected Thursday — or a well-targeted pilot — from everything
                else that happened in the same quarter. We&apos;d want several
                more waves before calling either durable.
              </Aside>
            </div>
          </div>
        </section>

        {/* 12 · End CTA */}
        <EndCTA
          nextTitle="Chassis CodeGen"
          nextHref="/case-studies/chassis-codegen"
        />
      </main>
      <SiteFooter />
    </>
  );
}
