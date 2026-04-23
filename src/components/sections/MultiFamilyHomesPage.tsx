import { useRef, type RefObject } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/2be5fc5e-0a63-4a86-b23a-60d7dd608298';
const thomasImage = 'https://www.figma.com/api/mcp/asset/0ac8e3b4-804b-4049-a986-3e53a8b20efb';
const haversleyImage = '/Haversley/office.jpg?v=20260420';
const ctaImage = 'https://www.figma.com/api/mcp/asset/d6ff4c98-2ea6-4f81-855a-2f512fbaeb51';
const propertyPlanImages = [
  'https://www.figma.com/api/mcp/asset/18c3b12e-d085-45ef-a98d-82ead31e0a9a',
  'https://www.figma.com/api/mcp/asset/6984efa2-28f4-4112-85a7-55ed4bc2562d',
  'https://www.figma.com/api/mcp/asset/d2987963-14f2-49ff-b613-5aac9a240520',
  'https://www.figma.com/api/mcp/asset/e5e7f9a6-82e1-4eaa-8c6d-278aa03c7e3f',
  'https://www.figma.com/api/mcp/asset/f9ea2308-ca61-4b06-b095-a773091afea9',
  'https://www.figma.com/api/mcp/asset/9919826d-c378-4ce8-953f-82a50e158c16',
  'https://www.figma.com/api/mcp/asset/328a54c5-1d04-4fb1-83e2-5db2fa17edf3',
  'https://www.figma.com/api/mcp/asset/5b05e655-0cea-4ca1-b503-73c5955ed540',
  'https://www.figma.com/api/mcp/asset/cd7276f5-d475-4160-87ce-5dd798616a70',
];

const thomasGalleryImages = [
  '/thomas-avenue/entry.jpg?v=20260419-2',
  '/thomas-avenue/living.jpg?v=20260419-2',
  '/thomas-avenue/kitchen.jpg?v=20260419-2',
  '/thomas-avenue/kitchen after.jpg?v=20260419-2',
  '/thomas-avenue/23.jpg?v=20260419-2',
  '/thomas-avenue/25.jpg?v=20260419-2',
  '/thomas-avenue/34.jpg?v=20260419-2',
  '/thomas-avenue/exterior.jpeg?v=20260419-2',
];

const haversleyGalleryImages = [
  '/Haversley/office.jpg?v=20260420',
  '/Haversley/7.jpg?v=20260420',
  '/Haversley/18.jpg?v=20260420',
  '/Haversley/26.jpg?v=20260420',
  '/Haversley/29.jpg?v=20260420',
  '/Haversley/30.jpg?v=20260420',
  '/Haversley/Haversley%202.jpg?v=20260420',
  '/Haversley/Haversley%203.jpg?v=20260420',
  '/Haversley/Haversley%20floorplan%201.png?v=20260420',
  '/Haversley/Haversley%20floorplan%202.png?v=20260420',
  '/Haversley/Haversley%20floorplan%203.png?v=20260420',
  '/Haversley/Haversley%20floorplan%204.png?v=20260420',
  '/Haversley/Haversley%20garage%20floorplan.png?v=20260420',
];

export default function MultiFamilyHomesPage() {
  const propertyPlanRef = useRef<HTMLDivElement>(null);
  const thomasGalleryRef = useRef<HTMLDivElement>(null);
  const haversleyGalleryRef = useRef<HTMLDivElement>(null);

  const scrollBy = (ref: RefObject<HTMLDivElement | null>, left: number) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero imageSrc={heroImage} imageAlt="Multi-family homes hero" title="Multi-Family Homes" />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          image={
            <img src={thomasImage} alt="Thomas Luxury Fourplex" className="w-full h-[330px] object-cover lg:h-[453px]" />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Thomas Luxury Fourplex</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            A contemporary four-residence development now under construction. Each home is thoughtfully designed to
            balance modern architecture with functional living, featuring open-concept layouts, refined finishes, and
            abundant natural light.
          </p>
          <p className="mt-4 text-[16px] leading-[1.5]">
            Upstairs, spacious bedrooms and well-appointed ensuites offer comfort and privacy, while energy-efficient
            construction ensures lasting quality. Ideally located near schools, parks, and essential amenities, Thomas
            Fourplex reflects Noura Homes' enduring commitment to craftsmanship, design integrity, and elevated everyday
            living.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex border border-primary px-[18px] py-[10px] text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Register Now
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          image={
            <img src={haversleyImage} alt="Haversley Luxury Duplex" className={projectImageEndSlotClass} />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Haversley Luxury Duplex</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            A modern duplex thoughtfully crafted to blend architectural elegance with practical design. Now under
            construction, this project embodies Noura Homes' dedication to creating spaces that unite contemporary
            aesthetics, sustainable building, and lasting quality.
          </p>
          <p className="mt-4 text-[16px] leading-[1.5]">
            Perfectly located within a connected and vibrant community, the duplex offers both privacy and convenience;
            just minutes from schools, parks, shops, and essential amenities. It reflects Noura Homes' continued pursuit
            of craftsmanship and contemporary living built to stand the test of time.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex border border-primary px-[18px] py-[10px] text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Register Now
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Property Plan</h2>
          <div className="mt-10">
            <div ref={propertyPlanRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {propertyPlanImages.map((image, index) => (
                <img
                  key={`plan-${index}`}
                  src={image}
                  alt={`Property plan ${index + 1}`}
                  className="w-full md:w-[480px] shrink-0 h-[320px] md:h-[420px] lg:h-[477px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => scrollBy(propertyPlanRef, -520)}
                aria-label="Show previous property plans"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(propertyPlanRef, 520)}
                aria-label="Show next property plans"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Thomas Avenue Gallery</h2>
          <div className="mt-8">
            <div ref={thomasGalleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {thomasGalleryImages.map((image, index) => (
                <img
                  key={`thomas-gallery-${index}`}
                  src={image}
                  alt={`Thomas Avenue Gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => scrollBy(thomasGalleryRef, -700)}
                aria-label="Show previous Thomas Avenue gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(thomasGalleryRef, 700)}
                aria-label="Show next Thomas Avenue gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Haversley Luxury Duplex</h2>
          <div className="mt-8">
            <div ref={haversleyGalleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {haversleyGalleryImages.map((image, index) => (
                <img
                  key={`haversley-gallery-${index}`}
                  src={image}
                  alt={`Haversley Luxury Duplex gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => scrollBy(haversleyGalleryRef, -700)}
                aria-label="Show previous Haversley gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(haversleyGalleryRef, 700)}
                aria-label="Show next Haversley gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <MoreMessagesFromOwners heading="Messages from Owners" />

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.5]">
              Whether you're ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we'll transform
              your ideas into a home that feels unmistakably yours.
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
