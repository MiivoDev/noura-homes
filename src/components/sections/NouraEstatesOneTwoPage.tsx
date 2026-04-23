import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImageTextGrid } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';

const heroImage = 'https://www.figma.com/api/mcp/asset/07b8b871-b51b-4d4c-a0a4-22b88318d97c';
const lifeHappensImage = 'https://www.figma.com/api/mcp/asset/2777a558-988c-4fdd-a033-efa091cf5e04';
const ctaImage = 'https://www.figma.com/api/mcp/asset/561ff49a-eb05-41cb-85d3-571692b95cd2';

/** Same files as `public/Noura Estates 1 & 2`; URL-safe folder for reliable static serving */
const nouraEstatesAsset = (filename: string) => `/noura-estates-1-2/${filename}?v=20260420-2`;

const nouraEstatesGalleryImages = [
  nouraEstatesAsset('640-Hillcrest-St-360hometours-02s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-03s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-06s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-10s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-12s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-17s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-19s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-23s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-25s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-32s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-33s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-36s.jpg'),
  nouraEstatesAsset('640-Hillcrest-St-360hometours-40s.jpg'),
];
export default function NouraEstatesOneTwoPage() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (left: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Noura Estates 1 & 2 hero"
        title="Noura Estates 1 & 2"
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
            An exclusive enclave of eight luxury residences in Central Coquitlam, ideally located across from the serene beauty
            of Mundy Park. Each home showcases Noura Homes’ signature craftsmanship, sophisticated design, and timeless elegance.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Gallery</h2>
          <div className="mt-8">
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {nouraEstatesGalleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Noura Estates gallery ${index + 1}`}
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
