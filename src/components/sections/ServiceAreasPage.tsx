import { useState } from 'react';

const heroImage = 'https://www.figma.com/api/mcp/asset/8196f344-8cff-4d0c-8be7-eea693811d0d';
const ctaImage = 'https://www.figma.com/api/mcp/asset/19d8a2a3-bef1-4890-aae2-22348001343b';

const areaTabs = ['Coquitlam', 'Burke Mountain', 'Chilliwack', 'Maple Ridge', 'West Vancouver'];

type AreaTab = (typeof areaTabs)[number];
type ProjectCard = { title: string; image: string };

const projectsByArea: Record<AreaTab, ProjectCard[]> = {
  Coquitlam: [
    { title: 'Haversley Luxury Duplex', image: 'https://www.figma.com/api/mcp/asset/f9f4669b-d5b6-42e7-8c16-16b1b2a6087f' },
    { title: 'Thomas Luxury Fourplex', image: 'https://www.figma.com/api/mcp/asset/34521ba3-9128-42f1-888f-120c73d7ee09' },
    { title: 'Madore Custom Homes', image: 'https://www.figma.com/api/mcp/asset/99404cfa-d864-4a03-b0e7-f5ebe8625b80' },
    { title: 'Trafalgar Luxury Townhouses', image: 'https://www.figma.com/api/mcp/asset/4e3d0545-4137-41a2-9219-9770ab6fbb10' },
    { title: 'Noura Estates 1&2', image: 'https://www.figma.com/api/mcp/asset/c5772faf-66ff-4bff-b32c-26ce3f7f763d' },
    { title: 'Stewart Custom Homes', image: 'https://www.figma.com/api/mcp/asset/a43dcd40-2fa9-4f6e-8938-407eaa29ae09' },
    { title: 'Noura Estates 1&2', image: 'https://www.figma.com/api/mcp/asset/a43dcd40-2fa9-4f6e-8938-407eaa29ae09' },
    { title: 'Robson Custom Homes', image: 'https://www.figma.com/api/mcp/asset/c75ed370-8ae1-43cb-b4fd-ff51d12915bf' },
    { title: 'Highland', image: 'https://www.figma.com/api/mcp/asset/ef52eba5-2e1d-4d15-a267-ff584e25402f' },
  ],
  'Burke Mountain': [
    { title: 'Sapphire Living', image: 'https://www.figma.com/api/mcp/asset/f5e391a8-7cb4-45ba-9bf6-58dc889d6aa6' },
    { title: 'Aura 2', image: 'https://www.figma.com/api/mcp/asset/97ad0234-ed94-45ca-9011-cdb6dc420868' },
    { title: 'Platinum Rose Estate', image: 'https://www.figma.com/api/mcp/asset/cc999fba-980a-4a36-ad9c-3ffd3a9c88a8' },
    { title: 'Aura 1', image: 'https://www.figma.com/api/mcp/asset/f8146acc-c8f8-490b-960c-b70ead3cb60e' },
  ],
  Chilliwack: [{ title: 'Marble Hill', image: 'https://www.figma.com/api/mcp/asset/b7efe734-c006-4d4b-bbc3-713bd672f656' }],
  'Maple Ridge': [{ title: 'Emerald Ridge', image: 'https://www.figma.com/api/mcp/asset/d78845fd-44d3-4316-b371-2b87a5139074' }],
  'West Vancouver': [{ title: 'Leyland Custom Homes', image: 'https://www.figma.com/api/mcp/asset/83432ccb-441a-4a73-a43c-4a232ad8aef2' }],
};

export default function ServiceAreasPage() {
  const [activeArea, setActiveArea] = useState<AreaTab>('Coquitlam');
  const activeProjects = projectsByArea[activeArea];

  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 lg:px-16 py-14 lg:py-24 flex items-center">
            <div className="max-w-[541px]">
              <h1 className="font-display text-[46px] md:text-[64px] leading-[1.08] tracking-[-0.6px] text-primary">
                Crafting Your Vision, Building Your Dreams
              </h1>
              <p className="mt-6 text-[16px] leading-[1.5] text-primary font-semibold">
                At Noura Homes, we proudly serve families across Lower Mainland, including:
              </p>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[820px]">
            <img src={heroImage} alt="Service areas hero" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="text-center">
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary">
              Crafting Your Vision, Building Your Dreams
            </h2>
            <p className="mt-3 text-[16px] font-medium text-primary/90">
              At Noura Homes, we proudly serve families across Lower Mainland.
            </p>
          </div>
          <div className="mt-8 mb-8 flex flex-wrap justify-center gap-2.5">
            {areaTabs.map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(area)}
                className={
                  area === activeArea
                    ? 'border border-primary bg-primary px-5 py-2.5 text-[16px] font-medium text-white'
                    : 'border border-primary bg-transparent px-5 py-2.5 text-[16px] font-medium text-primary'
                }
              >
                {area}
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
                  <a href="#our-projects" className="text-[12px] font-medium text-primary border-b border-primary pb-0.5">
                    See Project
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[520px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
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
