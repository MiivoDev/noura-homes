import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

/** Virtual tour from Noura Homes legacy page (Aura 2). */
const AURA_2_YOUTUBE_VIDEO_ID = 'tRwsI0ItImU';

const heroImage = 'https://www.figma.com/api/mcp/asset/3c050fd7-8c88-4dcd-9980-b5844927f414';
const lifeHappensImage = 'https://www.figma.com/api/mcp/asset/224e38c7-ff7f-436e-b020-faadafa5fc58';
const uniqueExperienceImage = 'https://www.figma.com/api/mcp/asset/5f420880-9dea-41da-9650-969c7219f9ea';
const ctaImage = 'https://www.figma.com/api/mcp/asset/b1fd598c-d379-4208-90f2-89ac1557ad1f';

const aura3 = (file: string) => `/Aura%203/${file}?v=20260420`;

const aura3GalleryImages = [
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-04.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-05.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-07.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-14.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-16.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-18.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-19.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-23.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-25.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-28.jpg'),
  aura3('3579-Brownlee-Ave-Coquitlam-360hometours-29.jpg'),
];

export default function Aura2Page() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const galleryPairRef = useRef<HTMLDivElement>(null);

  const scrollGalleryPair = (left: number) => {
    if (!galleryPairRef.current) return;
    galleryPairRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Aura 2 hero"
        title="Aura 2"
        overlayClassName="bg-black/30"
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
            An exclusive collection of 33 custom single-family homes in the heart of Burke Mountain. Surrounded by lush forest
            and breathtaking views, these luxury residences offer an unmatched West Coast living experience, where nature and
            modern design exist in perfect harmony. Just minutes from parks, trails, and urban conveniences, each contemporary
            five-bedroom home can be fully customized to reflect your vision, creating a one-of-a-kind sanctuary designed
            around the life you’ve always dreamed of.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-12 lg:gap-16"
          image={
            <img src={uniqueExperienceImage} alt="The Unique Experience" className={projectImageEndSlotClass} />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">The Unique Experience</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Expertly crafted by a team of visionaries, the contemporary homes at Aura 2 are designed for families seeking
            balance, comfort, and connection. Expansive open-concept layouts, soaring ceilings, and abundant natural light create
            a sense of calm and spaciousness, while seamless integration with the surrounding landscape brings nature to your
            doorstep. Enjoy tranquil living just minutes from the vibrant heart of Coquitlam.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Gallery
          </h2>
          <div className="mt-8">
            <div
              ref={galleryPairRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
            >
              {aura3GalleryImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Aura 2 gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => scrollGalleryPair(-700)}
                aria-label="Show previous gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollGalleryPair(700)}
                aria-label="Show next gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pt-12 pb-[90px] lg:pt-12">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Video tour
          </h2>
          <div className="mt-8 w-full max-w-[988px] mx-auto aspect-video bg-black/5">
            {videoPlaying ? (
              <iframe
                title="Aura 2 virtual tour"
                src={`https://www.youtube.com/embed/${AURA_2_YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                className="group relative flex h-full w-full items-center justify-center overflow-hidden text-left"
                aria-label="Play Aura 2 virtual tour video"
              >
                <img
                  src={aura3GalleryImages[0]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/35" aria-hidden />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg ring-2 ring-white/50 transition-transform group-hover:scale-105 md:h-20 md:w-20">
                  <Play className="h-8 w-8 translate-x-0.5 md:h-10 md:w-10" fill="currentColor" strokeWidth={0} aria-hidden />
                </span>
              </button>
            )}
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
              process, our team is here to help. Share your goals and your vision; together, we’ll transform your ideas into a home
              that feels unmistakably yours.
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
