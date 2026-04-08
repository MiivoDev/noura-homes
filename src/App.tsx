/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/ui/SmoothScroll';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Legacy from './components/sections/Legacy';
import Projects from './components/sections/Projects';
import Trust from './components/sections/Trust';
import Awards from './components/sections/Awards';
import Process from './components/sections/Process';
import LeadGen from './components/sections/LeadGen';
import Associations from './components/sections/Associations';
import Testimonials from './components/sections/Testimonials';
import OurStoryPage from './components/sections/OurStoryPage';
import SustainableBuildingPracticesPage from './components/sections/SustainableBuildingPracticesPage';
import Footer from './components/layout/Footer';

export default function App() {
  const isOurStoryPage = typeof window !== 'undefined' && window.location.pathname === '/our-story';
  const isSustainablePage =
    typeof window !== 'undefined' && window.location.pathname === '/sustainable-building-practices';

  if (isOurStoryPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <OurStoryPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isSustainablePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <SustainableBuildingPracticesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <SmoothScroll>
        <main>
          <Hero />
          <Services />
          <Legacy />
          <Projects />
          <Trust />
          <Awards />
          <Process />
          <LeadGen />
          <Associations />
          <Testimonials />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  );
}
