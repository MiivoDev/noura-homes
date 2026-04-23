import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImageTextGrid } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/41067b3f-ee51-46b9-888b-428ee6594dbf';
const introImage = 'https://www.figma.com/api/mcp/asset/ae14e0ad-14a5-412e-a422-228c87a28bdf';
const floorPlanHeroLeft = 'https://www.figma.com/api/mcp/asset/ea74ccd5-4550-4abc-b186-7ceb60fba4e6';
const floorPlanHeroRight = 'https://www.figma.com/api/mcp/asset/da00feb4-b5bb-4ad9-862d-93aaae78aa4a';
const ctaImage = 'https://www.figma.com/api/mcp/asset/97f65625-4591-496d-82c4-77d567a4c206';

const floorPlanSlides = [
  'https://www.figma.com/api/mcp/asset/93f20ef2-3506-4f0a-ae9c-0f2de4e96a38',
  'https://www.figma.com/api/mcp/asset/a1436955-dd08-42d4-8b59-54b81933176a',
  'https://www.figma.com/api/mcp/asset/72f764be-f3df-47b2-a1b8-796defe1774d',
  'https://www.figma.com/api/mcp/asset/5f480392-8778-4d0f-997b-bdc9ab7a1084',
  'https://www.figma.com/api/mcp/asset/9356cf83-5339-4d8c-a98e-3e744e450086',
  'https://www.figma.com/api/mcp/asset/5f9ff1c1-2f8a-49c8-b6ad-28920f7e0b68',
  'https://www.figma.com/api/mcp/asset/9b336b5a-8666-4e52-b59b-ae1a03f1ef81',
  'https://www.figma.com/api/mcp/asset/2523ff4c-259a-4c54-b5f9-c26bd9a70b55',
  'https://www.figma.com/api/mcp/asset/2b95bdba-5192-4b7a-894b-676f913dc4dc',
] as const;

export default function ComingSoonPage() {
  const floorPlanRef = useRef<HTMLDivElement>(null);

  const scrollFloorPlans = (left: number) => {
    if (!floorPlanRef.current) return;
    floorPlanRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Upcoming Projects hero"
        title="Upcoming Projects"
        overlayClassName="bg-black/30"
      />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-start gap-12 lg:gap-16"
          image={
            <img src={introImage} alt="Upcoming luxury townhomes" className="w-full h-[330px] object-cover lg:h-[453px]" />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">
            An Exclusive Collection of 16 Luxury Townhomes
          </h2>
          <p className="mt-6 text-[16px] leading-[1.5]">
            Welcome to Sapphire Living; an intimate community of 16 meticulously crafted townhomes in one of the Lower Mainland's
            most desirable neighbourhoods. Designed with elegance and comfort in mind, each home blends classic charm with modern
            sophistication to create a lifestyle beyond compare.
          </p>
          <p className="mt-4 text-[16px] leading-[1.5]">
            Spacious open-concept layouts, expansive windows, and refined finishes define every residence. Gourmet kitchens feature
            premium KitchenAid appliances, quartz countertops, and brushed brass accents, while spa-inspired bathrooms offer serene
            luxury with soaker tubs and porcelain tile.
          </p>
          <p className="mt-4 text-[16px] leading-[1.5]">
            Experience a new standard of sophisticated living.
            <br />
            Register now for exclusive updates, floorplans, and priority access.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center justify-center border border-primary px-[18px] py-2.5 text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Register Now
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Floor Plans
          </h2>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <img src={floorPlanHeroLeft} alt="Floor plan preview 1" className="w-full h-[260px] md:h-[360px] lg:h-[426px] object-cover" />
            <img src={floorPlanHeroRight} alt="Floor plan preview 2" className="w-full h-[260px] md:h-[360px] lg:h-[426px] object-cover" />
          </div>
          <div className="mt-7 flex items-center justify-center gap-2">
            <button
              type="button"
              aria-label="Previous floor plan preview"
              className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next floor plan preview"
              className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Floor Plans
          </h2>
          <div ref={floorPlanRef} className="mt-8 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            {floorPlanSlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Floor plan ${index + 1}`}
                className="w-full md:w-[681px] h-[280px] md:h-[360px] lg:h-[426px] object-cover shrink-0 snap-start"
              />
            ))}
          </div>
          <div className="mt-7 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => scrollFloorPlans(-700)}
              aria-label="Show previous floor plans"
              className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollFloorPlans(700)}
              aria-label="Show next floor plans"
              className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.5]">
              Whether you’re ready to design a custom home, exploring renovation options, or simply want to learn more about our
              process, our team is here to help. Share your goals and your vision; together, we’ll transform your ideas into a
              home that feels unmistakably yours.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center border border-white px-[18px] py-2.5 text-[16px] font-medium text-white hover:bg-white hover:text-primary transition-colors"
            >
              Lets Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
