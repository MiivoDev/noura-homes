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
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
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
      </div>
    </SmoothScroll>
  );
}
