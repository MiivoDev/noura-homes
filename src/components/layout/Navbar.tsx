import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '../ui/Button';
import { ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    children: [
      { label: 'Our Story', href: '#our-story' },
      { label: 'Sustainable Building Practices', href: '#sustainable-building-practices' },
      { label: 'Awards, Associations and Community Involvements', href: '#awards-associations-and-community-involvements' },
      { label: 'Meet the Team', href: '#meet-the-team' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  {
    label: 'Services',
    href: '#services',
    children: [
      { label: 'General Contracting and Development Services', href: '#general-contracting-and-development-services' },
      { label: 'Luxury Custom Homes', href: '#luxury-custom-homes' },
      { label: 'Luxury Townhouse', href: '#luxury-townhouse' },
      { label: 'Luxury Subdivisions', href: '#luxury-subdivisions' },
      { label: 'House Renovations', href: '#house-renovations' },
      { label: 'Service Areas', href: '#service-areas' }
    ]
  },
  {
    label: 'Our Projects',
    href: '#our-projects',
    children: [
      { label: 'Current Projects', href: '#current-projects' },
      { label: 'Marble Hill', href: '#marble-hill' },
      { label: 'Emerald Ridge', href: '#emerald-ridge' },
      { label: 'Multi-Family Homes', href: '#multi-family-homes' },
      { label: 'Past Projects', href: '#past-projects' },
      { label: 'Coming Soon', href: '#coming-soon' }
    ]
  },
  { label: 'Virtual Tours', href: '#virtual-tours' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blogs', href: '#blogs' }
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
            N
          </div>
          <span className={`font-display text-xl tracking-wide ${isScrolled ? 'text-primary' : 'text-white'}`}>
            NOURA HOMES
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent inline-flex items-center gap-1 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white text-gray-700 shadow-xl border border-gray-100 min-w-[320px] py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <Button variant={isScrolled ? 'default' : 'white'} className="hidden md:inline-flex">
          Contact Us
        </Button>
      </div>
    </motion.nav>
  );
}
