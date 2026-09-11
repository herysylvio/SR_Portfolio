import React from 'react';
import { Sidebar } from './components/Sidebar';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { Intro } from './components/Intro';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyMe } from './components/WhyMe';
import { CaseStudies } from './components/CaseStudies';
import { Expertise } from './components/Expertise';
import { Testimonials } from './components/Testimonials';
import { Journey } from './components/Journey';
import { Resources } from './components/Resources';
import { Method } from './components/Method';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NoiseOverlay } from './components/primitives/NoiseOverlay';

type SidebarMode = 'sidebar' | 'header';

interface AppProps {
  sidebarMode?: SidebarMode;
  showTestimonials?: boolean;
  showResources?: boolean;
}

export function App({
  sidebarMode = 'sidebar',
  showTestimonials = true,
  showResources = true
}: AppProps) {
  const isSidebar = sidebarMode === 'sidebar';

  return (
    <div className="min-h-screen w-full bg-sr-night font-heading text-sr-light">
      <NoiseOverlay />
      {isSidebar ? <Sidebar /> : <NavBar />}

      <div className={isSidebar ? 'pt-[72px] lg:pl-[260px] lg:pt-0' : 'pt-[72px]'}>
        <main>
          <Hero />
          <TrustMarquee />
          <Intro />
          <Services />
          <Projects />
          <WhyMe />
          <CaseStudies />
          <Expertise />
          {showTestimonials && <Testimonials />}
          <Journey />
          {showResources && <Resources />}
          <Method />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>);

}