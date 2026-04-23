import { useState } from 'react';
import { MapPin } from 'lucide-react';

const heroImage = 'https://www.figma.com/api/mcp/asset/8196f344-8cff-4d0c-8be7-eea693811d0d';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

const categoryTabs = ['Homes Available Now', 'Upcoming Communities', 'Past Communities'] as const;
type CategoryTab = (typeof categoryTabs)[number];
type ProjectCard = { title: string; image: string; location?: string };

const projectsByCategory: Record<CategoryTab, ProjectCard[]> = {
  'Homes Available Now': [
    { title: 'Marble Hill', image: 'https://www.figma.com/api/mcp/asset/a5fe32d1-6bce-45ef-9b25-0fe7711ce00a', location: 'Chilliwack,BC' },
    { title: 'Emerald Ridge', image: 'https://www.figma.com/api/mcp/asset/9f06cf55-a52c-44a1-a4b5-939eeae0b188', location: 'Maple Ridge' },
    { title: 'Haversley Luxury Duplex', image: 'https://www.figma.com/api/mcp/asset/d98e1df8-55a4-49c6-8049-a43a00452e24', location: 'West Vancouver' },
    { title: 'Thomas Luxury Fourplex', image: 'https://www.figma.com/api/mcp/asset/2163cfe0-476f-4d69-946a-d6d6d826c02c', location: 'West Vancouver' },
  ],
  'Upcoming Communities': [
    { title: '16 Luxury Townhomes', image: 'https://www.figma.com/api/mcp/asset/3291fa48-ab26-4faf-a58d-e92df80a6fd6', location: 'West Vancouver' },
  ],
  'Past Communities': [
    { title: 'Custom Homes', image: 'https://www.figma.com/api/mcp/asset/e490d139-9f5d-4d7f-ae8b-5b1e058da8ef', location: 'West Vancouver' },
    { title: 'Aura 2', image: 'https://www.figma.com/api/mcp/asset/285a1fbb-90f4-430c-9bc3-eb066b1da7cb', location: 'Coquitlam' },
    { title: 'Trafalgar Luxury Townhomes', image: 'https://www.figma.com/api/mcp/asset/ec0a78ca-6c4d-460b-be50-586650381e27', location: 'Trafalgar' },
    { title: 'Platinum Rose Estates', image: 'https://www.figma.com/api/mcp/asset/51cffec4-3530-44ec-bcae-14d46ea80f48', location: 'West Vancouver' },
    { title: 'Noura Estates 1 & 2', image: 'https://www.figma.com/api/mcp/asset/0dbc65d8-14a5-49dc-b8be-622b01d77386', location: 'Mundy Park' },
    { title: 'Aura Phase 1', image: 'https://www.figma.com/api/mcp/asset/a42f4507-c32a-490d-8bf1-98a1b0d5dc86', location: 'West Vancouver' },
    { title: 'Highland', image: 'https://www.figma.com/api/mcp/asset/910ead0d-329a-45eb-a300-e0130cd13daf', location: 'Highland' },
  ],
};

export default function ServiceAreasPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('Homes Available Now');
  const activeProjects = projectsByCategory[activeCategory];

  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="order-2 px-8 lg:order-1 lg:px-16 py-14 lg:py-24 flex items-center">
            <div className="max-w-[541px]">
              <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                Service Areas
              </h1>
              <p className="mt-6 text-[16px] leading-[1.5] text-primary">
                Noura Homes has established a lasting presence across a range of sought-after communities throughout
                Greater Vancouver. From growing neighbourhoods to well-established cities, our work reflects a
                commitment to quality and thoughtful design. Our portfolio includes homes built in the following
                locations: West Vancouver, Burnaby, Port Moody, Port Coquitlam, Coquitlam, Surrey, Pitt Meadows,
                Maple Ridge, Langley, and Chilliwack.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[820px]">
            <img src={heroImage} alt="Service areas hero" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="text-center">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary">
              Crafting Your Vision, Building Your Dreams
            </h2>
            <p className="mt-3 text-[16px] font-medium text-primary/90">
              At Noura Homes, we proudly serve families across Lower Mainland.
            </p>
          </div>
          <div className="mt-8 mb-8 flex flex-wrap justify-center gap-2.5">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={
                  tab === activeCategory
                    ? 'border border-primary bg-primary px-5 py-2.5 text-[16px] font-medium text-white'
                    : 'border border-primary bg-transparent px-5 py-2.5 text-[16px] font-medium text-primary'
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            {activeProjects.map((project, index) => (
              <article key={`${project.title}-${index}`} className="space-y-2">
                <div className="relative h-[290px] lg:h-[360px] overflow-hidden">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20" />
                  <h3 className="absolute left-4 bottom-4 text-white font-display text-[26px] leading-[1.15] tracking-[-0.26px]">
                    {project.title}
                  </h3>
                </div>
                <div className="border-t border-primary/30 pt-2">
                  <div className="flex items-center justify-between gap-3">
                    <a href="#our-projects" className="text-[12px] font-medium text-primary border-b border-primary pb-0.5">
                      See Project
                    </a>
                    {project.location && (
                      <span className="inline-flex items-center gap-1 text-[12px] font-medium text-primary">
                        <MapPin className="w-3.5 h-3.5" />
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
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn
              more about our process, our team is here to help. Share your goals and your vision; together, we&apos;ll
              transform your ideas into a home that feels unmistakably yours.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center border border-white px-5 py-2.5 text-[16px] font-medium text-white hover:bg-white hover:text-primary transition-colors"
            >
              Lets Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
