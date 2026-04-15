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
import AwardsAssociationsPage from './components/sections/AwardsAssociationsPage';
import GeneralContractingPage from './components/sections/GeneralContractingPage';
import LuxuryCustomHomesPage from './components/sections/LuxuryCustomHomesPage';
import LuxuryTownhousePage from './components/sections/LuxuryTownhousePage';
import LuxurySubdivisionsPage from './components/sections/LuxurySubdivisionsPage';
import HouseRenovationsPage from './components/sections/HouseRenovationsPage';
import ServiceAreasPage from './components/sections/ServiceAreasPage';
import TestimonialsPage from './components/sections/TestimonialsPage';
import FaqPage from './components/sections/FaqPage';
import Footer from './components/layout/Footer';

export default function App() {
  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/+$/, '') || '/'
      : '/';
  const isOurStoryPage = currentPath === '/our-story';
  const isSustainablePage =
    currentPath === '/sustainable-building-practices';
  const isAwardsAssociationsPage =
    currentPath === '/about/awards-associations-community';
  const isGeneralContractingPage = currentPath === '/services/general-contracting-development-services';
  const isLuxuryCustomHomesPage = currentPath === '/services/luxury-custom-homes';
  const isLuxuryTownhousePage = currentPath === '/services/luxury-townhouse';
  const isLuxurySubdivisionsPage = currentPath === '/services/luxury-subdivisions';
  const isHouseRenovationsPage = currentPath === '/services/house-renovations';
  const isServiceAreasPage = currentPath === '/services/service-areas';
  const isTestimonialsPage = currentPath === '/testimonials';
  const isFaqPage = currentPath === '/faq';

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

  if (isAwardsAssociationsPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <AwardsAssociationsPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isGeneralContractingPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <GeneralContractingPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isLuxuryCustomHomesPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <LuxuryCustomHomesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isLuxuryTownhousePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <LuxuryTownhousePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isLuxurySubdivisionsPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <LuxurySubdivisionsPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isHouseRenovationsPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <HouseRenovationsPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isServiceAreasPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <ServiceAreasPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isTestimonialsPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <TestimonialsPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isFaqPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <FaqPage />
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
