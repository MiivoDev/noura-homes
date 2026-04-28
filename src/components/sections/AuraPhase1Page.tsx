import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

/** First embed on Noura Homes legacy page (Aura Phase 1; page also lists two more testimonial videos below). */
const AURA_PHASE_1_YOUTUBE_VIDEO_ID = '_j0ohUlzef4';

const heroImage = '/aura-1/main-photo.jpg';
const qualityImage = '/aura-1/1406-Strawline-Hill-St-Coquitlam-360hometours-03s.jpg';
const startsHereImage = '/aura-1/1406-Strawline-Hill-St-Coquitlam-360hometours-04s.jpg';
/** Files in `public/aura-1/` — main photo first for video poster + carousel order */
const auraPhase1GalleryFiles = [
  'main-photo.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-03s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-04s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-05s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-15s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-20s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-25s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-33s.jpg',
  '1406-Strawline-Hill-St-Coquitlam-360hometours-34s.jpg',
] as const;

const auraPhase1PublicImage = (file: string) =>
  `/aura-1/${encodeURIComponent(file)}`;

const ctaImage = '/Banner.jpg';

export default function AuraPhase1Page() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (left: number) => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Aura Phase 1 hero"
        title="Aura 1"
        overlayClassName="bg-black/30"
      />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img
              src={qualityImage}
              alt="Quality Comfort Nature Space"
              className="w-full h-[330px] object-cover lg:h-[453px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">
            Quality Comfort Nature Space
          </h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Thoughtfully designed for families of all sizes, The Towns at Trafalgar blend spacious elegance with everyday comfort.
            Expansive ceilings and oversized windows bathe each home in natural light, while open-concept living areas create a
            perfect balance of connection and privacy. The gourmet kitchens, featuring premium appliances and abundant storage,
            offer the ideal setting for the in-house chef to create and gather.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-12 lg:gap-16"
          image={<img src={startsHereImage} alt="It All Starts Here" className={projectImageEndSlotClass} />}
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">It All Starts Here</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Each three-bedroom residence, ranging from 2,095 to 2,163 sq. ft., offers spacious layouts designed to complement
            diverse lifestyles. Nestled steps away from scenic parks and hiking trails, these homes provide the perfect balance
            of elegance, comfort, and connection to nature; a place for families to truly thrive and grow.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">Gallery</h2>
          <div className="mt-8">
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {auraPhase1GalleryFiles.map((file, index) => (
                <img
                  key={file}
                  src={auraPhase1PublicImage(file)}
                  alt={`Aura Phase 1 gallery ${index + 1}`}
                  className="w-full md:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                  loading={index < 2 ? 'eager' : 'lazy'}
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

      <section className="bg-white pt-4 pb-12 lg:pb-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary text-center">
            Video tour
          </h2>
          <div className="mt-8 w-full max-w-[988px] mx-auto aspect-video bg-black/5">
            {videoPlaying ? (
              <iframe
                title="Aura Phase 1 video"
                src={`https://www.youtube.com/embed/${AURA_PHASE_1_YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                className="group relative flex h-full w-full items-center justify-center overflow-hidden text-left"
                aria-label="Play Aura Phase 1 video"
              >
                <img
                  src={auraPhase1PublicImage(auraPhase1GalleryFiles[0])}
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
