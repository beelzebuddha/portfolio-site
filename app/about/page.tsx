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
    "25+ years designing for the captive user — internal tools, regulated financial systems, federal platforms, and now the tools engineers build with.",
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
                'Product Design Lead, Enterprise Developer Experience, Fannie Mae',
            },
            {
              label: 'PRACTICE',
              value:
                '25+ years across enterprise SaaS, internal platforms, federal, and financial services',
            },
            {
              label: 'CREDENTIALS',
              value:
                'Certified Usability Analyst (HFI); Certified Scrum Master (Scrum Alliance); BFA, Virginia Commonwealth University',
            },
          ]}
        />

        <section className={styles.section}>
          <div className={`container ${styles.inner}`}>
            <div className={styles.body}>
              <p>
                My work moved through three chapters. Early on I designed
                internal tools and portals for financial services and
                membership organizations — Capital One, Navy Federal, Credit
                Suisse, AARP — where a confusing screen didn&apos;t cost a
                conversion, it cost someone an hour a day for the rest of
                their tenure. At CGI Federal I spent seven years directing UX
                for public platforms, including the Medicare.gov Compare
                Tools and GSA marketplaces, where accessibility and
                regulatory compliance were the floor rather than the finish
                line. I arrived as a User Experience Manager and left as a
                Consulting Director. Today I lead design for Enterprise
                Developer Experience at Fannie Mae, where 3,000+ engineers
                depend on internal platforms nobody asked them to adopt.
              </p>
              <p>
                The captive-user problem has one honest fix: build the
                feedback channel yourself, because the market won&apos;t hand
                you one. That&apos;s what Dev Insights is. I founded it as a
                45-developer panel with no mandate and grew it to 450 through
                org-wide Snapshot surveys built on the DX Core 4 framework.
                The findings didn&apos;t stop at a readout — they became
                CIO-level OKRs and the priorities behind an internal
                developer platform. As product owner for Stack Overflow
                Enterprise, I ran the engagement program that grew activity
                125% and returned 21,000+ developer-hours a year.
              </p>
              <p>
                How I lead is mostly player-coach. I&apos;ve directed
                cross-functional teams of eight to twelve, mentored
                designers in and out of the office, governed design systems across multiple products,
                and run design for programs where I was the only designer in
                the room. Most of the authority I&apos;ve had came from
                evidence rather than reporting lines. I&apos;d rather say
                that plainly than dress it up.
              </p>
              <p>
                I hold a BFA in Art Education from Virginia Commonwealth University, a
                Certified Usability Analyst credential from Human Factors
                International, and a Certified Scrum Master certification
                from Scrum Alliance. More recently: Jared Spool&apos;s UX
                Leadership and Influence course, and Data-Driven Design and
                Advanced Figma with DesignLab. I&apos;m a founding member of
                Fannie Mae&apos;s Enterprise Accessibility Council.
              </p>
              <p>
                Outside of work I sketch in charcoal, play guitar, hike when
                the weather cooperates, watch too much TV with my cats, and
                spend long weekends around a campfire with my camping fam.
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
