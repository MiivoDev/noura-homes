import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import ServiceHeroCard from './ServiceHeroCard';

const heroImage = '/service-areas/hero.png';
const ctaImage = '/Your%20dream%20home.jpg';

const categoryTabs = ['Homes Available Now', 'Upcoming Communities', 'Past Communities'] as const;
type CategoryTab = (typeof categoryTabs)[number];
type ProjectCard = { title: string; image: string; href: string; location?: string };

const projectsByCategory: Record<CategoryTab, ProjectCard[]> = {
  'Homes Available Now': [
    { title: 'Marble Hill', image: '/service-areas/marble-hill.png', href: '/projects/current/marble-hill', location: 'Chilliwack' },
    { title: 'Emerald Ridge', image: '/service-areas/emerald-ridge.png', href: '/projects/current/emerald-ridge', location: 'Maple Ridge' },
    { title: 'Haversley', image: '/service-areas/haversley-luxury-duplex.png', href: '/projects/current/multi-family-homes', location: 'Coquitlam' },
    { title: 'Thomas', image: '/service-areas/thomas-luxury-fourplex.png', href: '/projects/current/multi-family-homes', location: 'Coquitlam' },
  ],
  'Upcoming Communities': [
    { title: 'Sapphire Living', image: '/service-areas/upcoming-16-luxury-townhomes.png', href: '/projects/coming-soon', location: 'Burke Mountain, Coquitlam' },
  ],
  'Past Communities': [
    { title: 'Custom Homes', image: '/service-areas/past-custom-homes.png', href: '/projects/past/custom-homes', location: 'West Vancouver, Pitt Meadows, Coquitlam, and others' },
    { title: 'Aura 2', image: '/service-areas/past-aura-2.png', href: '/projects/past/aura-2', location: 'Burke Mountain, Coquitlam' },
    { title: 'Trafalgar', image: '/service-areas/past-trafalgar-luxury-townhomes.png', href: '/projects/past/trafalgar-luxury-townhomes', location: 'Coquitlam' },
    { title: 'Platinum Rose Estates', image: '/service-areas/past-platinum-rose-estates.png', href: '/projects/past/platinum-rose-estates', location: 'Burke Mountain, Coquitlam' },
    { title: 'Aura Phase 1', image: '/service-areas/past-aura-phase-1.png', href: '/projects/past/aura-phase-1', location: 'Burke Mountain, Coquitlam' },
    { title: 'Noura Estates 1 & 2', image: '/service-areas/past-noura-estates-1-2.png', href: '/projects/past/noura-estates-1-and-2', location: 'Coquitlam' },
    { title: 'Highland', image: '/service-areas/past-highland.png', href: '/projects/past/highland', location: 'Coquitlam' },
  ],
};

export default function ServiceAreasPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('Homes Available Now');
  const activeProjects = projectsByCategory[activeCategory];

  return (
    <div className="bg-background">
      <ServiceHeroCard title="Service Areas" imageSrc={heroImage} imageAlt="Service areas hero">
        <p>
          Noura Homes has established a lasting presence across a range of sought-after communities throughout Greater
          Vancouver. From growing neighbourhoods to well-established cities, our work reflects a commitment to quality
          and thoughtful design. Our portfolio includes homes built in the following locations: West Vancouver,
          Burnaby, Port Moody, Port Coquitlam, Coquitlam, Surrey, Pitt Meadows, Maple Ridge, Langley, and Chilliwack.
        </p>
      </ServiceHeroCard>

      <section className="bg-background px-8 py-12 lg:px-16">
        <div className="max-w-[1312px] mx-auto">
          <div className="text-center">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.4] tracking-[-0.48px] text-primary">
              Crafting Your Vision, Building Your Dreams
            </h2>
            <p className="mt-3 text-[16px] font-medium text-primary/90">
              At Noura Homes, we proudly serve families across Lower Mainland.
            </p>
          </div>
          <div className="mt-10 mb-10 flex flex-wrap justify-center gap-[9px]">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={
                  tab === activeCategory
                    ? 'border border-primary bg-primary px-5 py-2.5 text-[16px] font-medium text-white md:text-[20px]'
                    : 'border border-primary bg-transparent px-5 py-2.5 text-[16px] font-medium text-primary md:text-[20px]'
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
            {activeProjects.map((project, index) => (
              <article key={`${project.title}-${index}`} className="space-y-[18px]">
                <div className="relative h-[290px] overflow-hidden bg-white lg:h-[385px]">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <h3 className="absolute left-4 bottom-5 max-w-[360px] text-white font-display text-[30px] leading-[1.2] tracking-[-0.3px] lg:left-7 lg:bottom-7 lg:text-[41px] lg:tracking-[-0.41px]">
                    {project.title}
                  </h3>
                </div>
                <div className="border-t border-primary/50 pt-0.5">
                  <div className="flex items-center justify-between gap-3">
                    <a href={project.href} className="inline-flex items-center gap-1 border-b border-primary py-1.5 text-[13px] font-medium text-primary">
                      See Project
                      <ArrowUpRight className="size-3.5" strokeWidth={1.6} />
                    </a>
                    {project.location && (
                      <span className="ml-auto inline-flex items-center justify-end gap-1.5 border-b border-primary py-1.5 text-right text-[13px] font-medium text-primary whitespace-nowrap">
                        <MapPin className="size-4 shrink-0" strokeWidth={2} />
                        {project.location}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[784px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn
              more about our process, our team is here to help. Share your goals and your vision; together, we&apos;ll
              transform your ideas into a home that feels unmistakably yours.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center border border-white px-5 py-2.5 text-[16px] font-medium text-white hover:bg-white hover:text-primary transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
