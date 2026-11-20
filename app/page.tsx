import SiteHeader from './components/SiteHeader';
import HashScrollHandler from './components/HashScrollHandler';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import CaseStudiesSection from './components/CaseStudiesSection';
import ResourcesSection from './components/ResourcesSection';
import AboutContactSection from './components/AboutContactSection';
import SiteFooter from './components/SiteFooter';

export default function HomePage() {
  return (
    <>
      <HashScrollHandler />
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <CaseStudiesSection />
        <ResourcesSection />
        <AboutContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
