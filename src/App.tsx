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
import RecognitionHighlights from './components/sections/RecognitionHighlights';
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
import MarbleHillPage from './components/sections/MarbleHillPage';
import EmeraldRidgePage from './components/sections/EmeraldRidgePage';
import MultiFamilyHomesPage from './components/sections/MultiFamilyHomesPage';
import PastCustomHomesPage from './components/sections/PastCustomHomesPage';
import Aura2Page from './components/sections/Aura2Page';
import TrafalgarLuxuryTownhomesPage from './components/sections/TrafalgarLuxuryTownhomesPage';
import PlatinumRoseEstatesPage from './components/sections/PlatinumRoseEstatesPage';
import NouraEstatesOneTwoPage from './components/sections/NouraEstatesOneTwoPage';
import AuraPhase1Page from './components/sections/AuraPhase1Page';
import HighlandPage from './components/sections/HighlandPage';
import ComingSoonPage from './components/sections/ComingSoonPage';
import ContactPage from './components/sections/ContactPage';
import BlogsPage from './components/sections/BlogsPage';
import BlogDetailPage from './components/sections/BlogDetailPage';
import LeylandCustomHomePage from './components/sections/LeylandCustomHomePage';
import RegentCustomHomePage from './components/sections/RegentCustomHomePage';
import MadoreCustomHomePage from './components/sections/MadoreCustomHomePage';
import RobsonCustomHomePage from './components/sections/RobsonCustomHomePage';
import StewartCustomHomePage from './components/sections/StewartCustomHomePage';
import WallsCustomHomePage from './components/sections/WallsCustomHomePage';
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
  const isMarbleHillPage = currentPath === '/projects/current/marble-hill';
  const isEmeraldRidgePage = currentPath === '/projects/current/emerald-ridge';
  const isMultiFamilyHomesPage = currentPath === '/projects/current/multi-family-homes';
  const isPastCustomHomesPage = currentPath === '/projects/past/custom-homes';
  const isLeylandCustomHomePage = currentPath === '/projects/past/custom-homes/leyland-custom-home';
  const isRegentCustomHomePage = currentPath === '/projects/past/custom-homes/regent-custom-home';
  const isMadoreCustomHomePage = currentPath === '/projects/past/custom-homes/madore-custom-home';
  const isRobsonCustomHomePage = currentPath === '/projects/past/custom-homes/robson-custom-home';
  const isStewartCustomHomePage = currentPath === '/projects/past/custom-homes/stewart-custom-home';
  const isWallsCustomHomePage = currentPath === '/projects/past/custom-homes/walls-custom-home';
  const isAura2Page = currentPath === '/projects/past/aura-2';
  const isTrafalgarLuxuryTownhomesPage = currentPath === '/projects/past/trafalgar-luxury-townhomes';
  const isPlatinumRoseEstatesPage = currentPath === '/projects/past/platinum-rose-estates';
  const isNouraEstatesOneTwoPage = currentPath === '/projects/past/noura-estates-1-and-2';
  const isAuraPhase1Page = currentPath === '/projects/past/aura-phase-1';
  const isLegacyHighlandHash =
    typeof window !== 'undefined' &&
    currentPath === '/' &&
    window.location.hash === '#highland';
  const isHighlandPage = currentPath === '/projects/past/highland' || isLegacyHighlandHash;
  const isLegacyComingSoonHash =
    typeof window !== 'undefined' &&
    currentPath === '/' &&
    window.location.hash === '#coming-soon';
  const isComingSoonPage = currentPath === '/projects/coming-soon' || isLegacyComingSoonHash;
  const blogListMatch = currentPath.match(/^\/blogs(?:\/page\/(\d+))?$/);
  const legacyBlogListMatch = currentPath.match(/^\/pages\/blogs(?:\/page\/(\d+))?$/);
  const isBlogsPage = Boolean(blogListMatch || legacyBlogListMatch);
  const blogsPageNumber = Number(blogListMatch?.[1] ?? legacyBlogListMatch?.[1] ?? '1') || 1;
  const blogDetailMatch = currentPath.match(/^\/blogs\/(.+)$/);
  const legacyBlogDetailMatch = currentPath.match(/^\/pages\/blogs\/blog\/(.+)$/);
  const blogSlug = blogDetailMatch?.[1] ?? legacyBlogDetailMatch?.[1] ?? '';
  const isBlogDetailPage = Boolean(blogSlug);
  const blogsTag =
    typeof window !== 'undefined' && isBlogsPage
      ? new URLSearchParams(window.location.search).get('tag') ?? undefined
      : undefined;
  const isContactPage = currentPath === '/contact';

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

  if (isMarbleHillPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <MarbleHillPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isEmeraldRidgePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <EmeraldRidgePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isMultiFamilyHomesPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <MultiFamilyHomesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isPastCustomHomesPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <PastCustomHomesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isLeylandCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <LeylandCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isRegentCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <RegentCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isMadoreCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <MadoreCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isRobsonCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <RobsonCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isStewartCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <StewartCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isWallsCustomHomePage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <WallsCustomHomePage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isAura2Page) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <Aura2Page />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isTrafalgarLuxuryTownhomesPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <TrafalgarLuxuryTownhomesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isPlatinumRoseEstatesPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <PlatinumRoseEstatesPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isNouraEstatesOneTwoPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <NouraEstatesOneTwoPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isAuraPhase1Page) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <AuraPhase1Page />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isHighlandPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <HighlandPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isComingSoonPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <ComingSoonPage />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isBlogsPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <BlogsPage activeTag={blogsTag} currentPage={blogsPageNumber} />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isBlogDetailPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <BlogDetailPage slug={decodeURIComponent(blogSlug)} />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    );
  }

  if (isContactPage) {
    return (
      <div className="min-h-screen bg-background text-text-dark font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <SmoothScroll>
          <main>
            <ContactPage />
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
          <RecognitionHighlights />
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
