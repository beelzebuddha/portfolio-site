import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import CaseStudyHero from '../../components/case-study/CaseStudyHero';
import FactStrip from '../../components/case-study/FactStrip';
import Aside from '../../components/case-study/Aside';
import BodyPull from '../../components/case-study/BodyPull';
import EndCTA from '../../components/case-study/EndCTA';
import Figure from '../../components/case-study/Figure';
import FigureRow from '../../components/case-study/FigureRow';
import styles from './page.module.css';

const SCREENSHOT_CHASSIS = '/images/chassis-codegen/screenshot-chassis.png';
const SCREENSHOT_CART = '/images/chassis-codegen/screenshot-cart.png';
const SCREENSHOT_EDIT = '/images/chassis-codegen/screenshot-edit.png';
const SCREENSHOT_METADATA = '/images/chassis-codegen/screenshot-metadata.png';
const SCREENSHOT_DOWNLOAD = '/images/chassis-codegen/screenshot-download.png';

export const metadata: Metadata = {
  title: 'Chassis CodeGen — Kevin B. Doyle',
  description:
    'How a 55-component microservice catalog went from a single all-or-nothing package to a browse, configure, and download experience — while I taught the engineering team to build their own customization forms.',
};

export default function ChassisCodeGenPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <CaseStudyHero
          breadcrumb="Application design"
          company="FANNIE MAE"
          category="PLATFORM DESIGN"
          title="Chassis CodeGen"
          dek="Dozens of service components, each needing its own customization form. Designing them one at a time would have spent the platform's entire design capacity on a single tool. So I designed the application, the component and pattern library and taught the basics of form design to the dev team, and moved from drafting every screen to approving them at sprint review."
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
              value: '55-component microservice “shopping cart” catalog',
            },
            {
              label: 'PARTNERS',
              value: 'Chassis engineering, service teams',
            },
            {
              label: 'ALSO OWNED',
              value: 'Stack Overflow instance, Chassis Confluence space',
            },
          ]}
        />

        <section className={`${styles.section} ${styles.py10}`}>
          <div className={`container ${styles.inner}`}>
            <Figure
              src={SCREENSHOT_CHASSIS}
              alt="Screenshot of the Chassis CodeGen catalog and cart"
              aspectRatio="1080/768"
              caption='Developers can add and remove microservice components to their project "shopping cart". The microservice names are anonymized for confidentiality.'
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
                  Nobody picked Chassis's microservices but everyone had to use them.
                </p>
              </div>
              <div className={styles.body}>
                <p className={styles.lede}>
                  To use one Chassis component, a developer had to download all
                  55 of them. Before Chassis CodeGen, the Chassis enterprise 
                  microservice library was one package — every service, every 
                  dependency, whether the project needed it or not. Documentation 
                  for each service lived in different locations. Each service team
                  kept its own, in its own Confluence space, wherever that team 
                  decided to put it.
                </p>
                <p className={styles.bodyText}>
                  After adding the package, developers had to go through and
                  delete each microservice the project wasn&apos;t going to use.
                  Other teams left the whole library in place, unused files and
                  all. Whatever remained still had to be configured by hand, one
                  component at a time, against documentation a developer had to
                  know where to look for.
                </p>
                <p className={styles.bodyText}>
                  Nobody picked Chassis but every team needed to use it if they 
                  wanted to use any kind of microservice. All the little steps 
                  required to use those components added up and that extra time 
                  affected every team, on every service, every time.
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
              A one-stop shop for the back-end
            </p>
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.mutedText}>
                Scroll or search 55 components, add what the service needs to a
                cart, and leave by one of two doors: download the selection as a
                single zip, or open each component and configure it first. The
                last screen lists what&apos;s in the package before the code is 
                generated and downloaded.
              </p>
              <p className={styles.mutedText}>
                With the customized code generated by Chassis CodeGen, nothing 
                has to be deleted. Configuration happens in the cart, so a component 
                drops into the project ready to run.
              </p>
            </div>
            <Figure
              src={SCREENSHOT_CART}
              alt="Screenshot of the Chassis CodeGen cart review screen"
              aspectRatio="1252/891"
              caption="Step 1, developers view their cart - they can review, remove, and configure components."
            />
            <FigureRow
              figures={[
                {
                  src: SCREENSHOT_EDIT,
                  alt: 'Screenshot of the component configuration side panel',
                  aspectRatio: '393/1024',
                  caption:
                    'Step 1, configuring a component - configuring here means time saved later',
                },
                {
                  src: SCREENSHOT_METADATA,
                  alt: 'Screenshot of the project metadata side panel',
                  aspectRatio: '393/1024',
                  caption:
                    'Step 2, adding project metadata - by adding it here, it adds the data to all the files in the package.',
                },
                {
                  src: SCREENSHOT_DOWNLOAD,
                  alt: 'Screenshot of the download review side panel',
                  aspectRatio: '393/1024',
                  caption:
                    "Step 3, review the package is listed before it's packaged.",
                },
              ]}
            />
          </div>
        </section>

        <section className={`${styles.section} ${styles.py10}`}>
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>Working with a dev team</p>
            <BodyPull
              body={
                <>
                  <p className={styles.mutedText}>
                    I designed the application experience from end to end —
                    catalog browse and search, selection, the cart, the
                    download. That was one problem and it was solvable.
                  </p>
                  <p className={styles.mutedText}>
                    The customization forms were a different problem. Every
                    component exposed its own options, and new ones arrived on
                    the engineering team&apos;s schedule, not mine. Whatever I
                    built had to work for components that did not exist yet.
                  </p>
                  <p className={styles.mutedText}>
                    So I provided the guidance instead: how options group, which
                    control fits which kind of setting, what a default does when
                    a developer changes nothing, what the form has to document.
                    The engineering team built forms at their own pace from
                    there. I approved layouts at sprint review.
                  </p>
                </>
              }
              pull="As a lead designer, teach your developers design basics so you can focus on what's important: the experience."
            />
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.py10} ${styles.bgSurface} ${styles.borderAll}`}
        >
          <div className={`container ${styles.inner}`}>
            <p className={styles.sectionTitle}>Beyond the design...</p>
            <div className={`${styles.body} measure-prose`}>
              <p className={styles.mutedText}>
                Documentation was the part I could not design my way out of. Before Chassis CodeGen, documentation was in a spread of locations across
                Confluence. Each microservice belonged to the service teams and it lived wherever they put
                it. For the MVP (and, shocker, there wasn't anything released past it beyond maintenance and microservice version updates), 
                documentation for each service was consolidated into a central location in Confluence. Every component card had links to its documentation in the central location.
              </p>
              <p className={styles.mutedText}>
                To use the components they need, a developer now downloads only
                those. Chassis is still the standard. It just stopped making
                teams pay for it.
              </p>
            </div>
            <Aside label="THE TRADEOFF">
              Consolidating documentation solved discovery but moved a
              maintenance burden onto service teams as a condition of catalog
              membership. That only holds while the catalog is worth being in.
            </Aside>
          </div>
        </section>

        <div className={styles.seam} />

        <EndCTA
          nextTitle="DragOn UI Builder"
          nextHref="/case-studies/dragon-ui-builder"
        />
      </main>
      <SiteFooter />
    </>
  );
}
