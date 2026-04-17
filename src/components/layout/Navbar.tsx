import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronDown, ChevronRight, Menu, Phone, X } from 'lucide-react';

type NavSubItem = {
  label: string;
  href: string;
};

type NavChildItem = {
  label: string;
  href: string;
  subItems?: NavSubItem[];
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChildItem[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Our Story', href: '/our-story' },
      { label: 'Sustainable Building Practices', href: '/sustainable-building-practices' },
      { label: 'Awards, Associations and Community Involvements', href: '/about/awards-associations-community' },
      { label: 'FAQ', href: '/faq' }
    ]
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'General Contracting and Development Services', href: '/services/general-contracting-development-services' },
      { label: 'Luxury Custom Homes', href: '/services/luxury-custom-homes' },
      { label: 'Luxury Townhouse', href: '/services/luxury-townhouse' },
      { label: 'Luxury Subdivisions', href: '/services/luxury-subdivisions' },
      { label: 'House Renovations', href: '/services/house-renovations' },
      { label: 'Service Areas', href: '/services/service-areas' }
    ]
  },
  {
    label: 'Our Projects',
    href: '#our-projects',
    children: [
      {
        label: 'Current Projects',
        href: '#current-projects',
        subItems: [
          { label: 'Marble Hill', href: '#marble-hill' },
          { label: 'Emerald Ridge', href: '#emerald-ridge' },
          { label: 'Multi-Family Homes', href: '#multi-family-homes' }
        ]
      },
      {
        label: 'Past Projects',
        href: '#past-projects',
        subItems: [
          { label: 'Custom Homes', href: '#custom-homes' },
          { label: 'Aura 2', href: '#aura-2' },
          { label: 'Trafalgar Luxury Townhomes', href: '#trafalgar-luxury-townhomes' },
          { label: 'Platinum Rose Estates', href: '#platinum-rose-estates' },
          { label: 'Noura Estates 1 & 2', href: '#noura-estates-1-and-2' },
          { label: 'Aura Phase 1', href: '#aura-phase-1' },
          { label: 'Highland', href: '#highland' }
        ]
      },
      { label: 'Coming Soon', href: '#coming-soon' }
    ]
  },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blogs', href: '#blogs' }
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate="visible"
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
    >
      <div className="bg-secondary text-white border-b border-white/20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-light">
            <a href="tel:+16042003524" className="inline-flex items-center gap-1.5 hover:text-white/90 transition-colors">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Sales: (604)200-3524</span>
            </a>
            <a href="tel:+17782850503" className="hidden sm:inline-flex items-center gap-1.5 hover:text-white/90 transition-colors">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>Office: (778)285-0503</span>
            </a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.facebook.com/NouraCustomHomes" target="_blank" rel="nofollow noreferrer" aria-label="Facebook" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/Facebook.svg" alt="Facebook" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.instagram.com/noura.homes/" target="_blank" rel="nofollow noreferrer" aria-label="Instagram" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/Google.svg" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.linkedin.com/company/noura-construction/" target="_blank" rel="nofollow noreferrer" aria-label="LinkedIn" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/Linkedin.svg" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://x.com/teamnoura" target="_blank" rel="nofollow noreferrer" aria-label="X (Twitter)" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/Twitter.svg" alt="X" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.youtube.com/@nourahomes1240" target="_blank" rel="nofollow noreferrer" aria-label="YouTube" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/Youtube.svg" alt="YouTube" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://goo.gl/maps/7xGbVKmpyiVszKQm9" target="_blank" rel="nofollow noreferrer" aria-label="Google Maps" className="opacity-100 hover:opacity-80 transition-opacity">
              <img src="/GoogleMaps.svg" alt="Google Maps" className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-[72px] flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center overflow-hidden h-14 md:h-16 w-[250px] md:w-[300px]">
          <img
            src="/Logo.png"
            alt="Noura Homes logo"
            className="h-full w-auto max-w-full object-contain shrink-0"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-accent inline-flex items-center gap-1"
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white text-gray-700 shadow-xl border border-gray-100 min-w-[320px] py-2">
                    {item.children.map((child) => (
                      'subItems' in child ? (
                        <div key={child.label} className="relative group/current-projects">
                          <a
                            href={child.href}
                            className="flex items-center justify-between px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            <span>{child.label}</span>
                            <ChevronRight className="w-4 h-4" />
                          </a>
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/current-projects:opacity-100 group-hover/current-projects:visible transition-all duration-200">
                            <div className="bg-white text-gray-700 shadow-xl border border-gray-100 min-w-[250px] py-2">
                              {child.subItems.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors"
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <a
                          key={child.label}
                          href={child.href}
                          className={`px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors ${
                            item.label === 'Our Projects' ? 'flex items-center justify-between' : 'block'
                          }`}
                        >
                          {item.label === 'Our Projects' ? (
                            <>
                              <span>{child.label}</span>
                              <ChevronRight className="w-4 h-4" />
                            </>
                          ) : (
                            child.label
                          )}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button variant="default" className="hidden md:inline-flex">
          Contact Us
        </Button>

        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-primary"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="max-w-[1600px] mx-auto px-8 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="py-1">
                <a
                  href={item.href}
                  className="block text-sm font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="mt-2 pl-3 border-l border-gray-200 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block text-sm text-gray-600"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center justify-center h-10 px-5 bg-secondary text-white text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
