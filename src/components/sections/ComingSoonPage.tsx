import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImageTextGrid } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/41067b3f-ee51-46b9-888b-428ee6594dbf';
const introImage = 'https://www.figma.com/api/mcp/asset/ae14e0ad-14a5-412e-a422-228c87a28bdf';
const ctaImage = 'https://www.figma.com/api/mcp/asset/97f65625-4591-496d-82c4-77d567a4c206';

const floorPlanSlides = [
  '/sapphire-living/floor-plan-01-units-a.webp',
  '/sapphire-living/floor-plan-02-units-a5.webp',
  '/sapphire-living/floor-plan-03-units-b.webp',
  '/sapphire-living/floor-plan-04-units-b6-b9.webp',
  '/sapphire-living/floor-plan-05-units-b11.webp',
  '/sapphire-living/floor-plan-06-units-c.webp',
  '/sapphire-living/floor-plan-07-units-c13.webp',
  '/sapphire-living/floor-plan-08-units-c14.webp',
  '/sapphire-living/floor-plan-09-units-c16.webp',
] as const;

const gallerySlides = [
  '/sapphire-living/gallery-01.webp',
  '/sapphire-living/gallery-02.webp',
  '/sapphire-living/gallery-03.webp',
  '/sapphire-living/gallery-04.webp',
  '/sapphire-living/gallery-05.webp',
] as const;

export default function ComingSoonPage() {
  const floorPlanRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollFloorPlans = (left: number) => {
    if (!floorPlanRef.current) return;
    floorPlanRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  const scrollGallery = (left: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left, behavior: 'smooth' });
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
          <div ref={floorPlanRef} className="mt-8 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            {floorPlanSlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Sapphire Living floor plan ${index + 1}`}
                className="w-full md:w-[681px] h-[280px] md:h-[360px] lg:h-[426px] object-contain shrink-0 snap-start bg-white"
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

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Gallery
          </h2>
          <div ref={galleryRef} className="mt-8 flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            {gallerySlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Sapphire Living gallery ${index + 1}`}
                className="w-full md:w-[681px] h-[280px] md:h-[360px] lg:h-[426px] object-cover shrink-0 snap-start"
              />
            ))}
          </div>
          <div className="mt-7 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => scrollGallery(-700)}
              aria-label="Show previous gallery images"
              className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery(700)}
              aria-label="Show next gallery images"
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
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
