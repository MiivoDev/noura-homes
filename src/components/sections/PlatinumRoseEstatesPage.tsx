import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';
import { ProjectImageTextGrid } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/e89fb717-9a65-438b-bc15-de2fd19e9d7f';
const lifeHappensImage = 'https://www.figma.com/api/mcp/asset/716e24bb-ca13-4911-9ef0-a0329120cccc';
const ctaImage = 'https://www.figma.com/api/mcp/asset/9eb22385-8919-4a5f-9839-8ecf82246df4';

const platinumRoseAsset = (filename: string) =>
  `/Platinum%20Rose%20Estates/${encodeURIComponent(filename)}?v=20260420`;

const platinumRoseGalleryImages = [
  platinumRoseAsset('05.jpg'),
  platinumRoseAsset('06_1409-Kingston-St-360hometours.jpg'),
  platinumRoseAsset('07_1409-Kingston-St-complete_360hometours.jpg'),
  platinumRoseAsset('08.jpg'),
  platinumRoseAsset('08_1409-Kingston-St-complete_360hometours.jpg'),
  platinumRoseAsset('10_1409-Kingston-St-complete_360hometours.jpg'),
  platinumRoseAsset('13_1409-Kingston-St-complete_360hometours.jpg'),
];
export default function PlatinumRoseEstatesPage() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (left: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Platinum Rose Estates hero"
        title="Platinum Rose Estates"
        overlayClassName="bg-black/30"
        extraTitleClassName="max-w-[1200px]"
      />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img
              src={lifeHappensImage}
              alt="Life Happens Here"
              className="w-full h-[330px] object-cover lg:h-[453px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Life Happens Here</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Platinum Rose set a new benchmark for refined living, with each home thoughtfully designed to embrace its natural
            surroundings, two lush greenbelts to the east and west, and sweeping city views to the south. The showhome earned
            Georgie Award nominations in 2014 for Best Single Family Home Over 2,000 sq. ft. and Best Landscape Design,
            reflecting Noura Homes’ dedication to timeless craftsmanship and design excellence.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Gallery</h2>
          <div className="mt-8">
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {platinumRoseGalleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Platinum Rose Estates gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
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
