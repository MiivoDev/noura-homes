import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImageTextGrid } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/919bb4e3-8d6a-4a11-9dc1-274f3b74b8a5';
const lifeHappensImage = 'https://www.figma.com/api/mcp/asset/2828a219-5435-4d6c-997b-e0b0bc979ae6';
const ctaImage = 'https://www.figma.com/api/mcp/asset/20bce064-57ea-4a71-97e5-0584cabe11cd';

const highlandAsset = (file: string) => `/Highland/${encodeURIComponent(file)}`;

const highlandGalleryFiles = [
  '3418-Highland-Dr-Coquitlam-360hometours-03s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-04s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-06s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-07s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-08s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-09s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-10s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-14s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-16s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-21s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-24s.jpg',
  '3418-Highland-Dr-Coquitlam-360hometours-25s.jpg',
  'make this the main photo.jpg',
] as const;

export default function HighlandPage() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (left: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero imageSrc={heroImage} imageAlt="Highland hero" title="Highland" overlayClassName="bg-black/30" />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img src={lifeHappensImage} alt="Life Happens Here" className="w-full h-[330px] object-cover lg:h-[453px]" />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Life Happens Here</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Experience the essence of modern living with open floor plans, expansive windows, and breathtaking southern views.
            Each interior is professionally designed with a cool contemporary aesthetic, blending natural light, refined finishes,
            and timeless luxury to create a home that inspires every day.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Gallery</h2>
          <div className="mt-8">
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {highlandGalleryFiles.map((file, index) => (
                <img
                  key={file}
                  src={highlandAsset(file)}
                  alt={`Highland gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => scrollGallery(-700)}
                aria-label="Previous gallery image"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(700)}
                aria-label="Next gallery image"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
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
