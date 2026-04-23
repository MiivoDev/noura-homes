import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';
import { ProjectImageTextGrid, projectImageEndCaseStudyClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = '/madore/hero.png?v=20260422a';
const featureImage = '/madore/home-02.webp?v=20260422a';
const ctaBannerImage = '/madore/home-01.webp?v=20260422b';
const virtualTourThumbnail = '/madore/virtual-tour.webp?v=20260422a';
const virtualTourLink = 'https://my.matterport.com/show/?m=4tbquomUPRS';

const galleryImages = [
  '/madore/home-01.webp?v=20260422a',
  '/madore/home-02.webp?v=20260422a',
  '/madore/home-03.webp?v=20260422a',
  '/madore/home-04.webp?v=20260422a',
  '/madore/home-05.webp?v=20260422a',
  '/madore/home-06.webp?v=20260422a',
  '/madore/home-07.webp?v=20260422a',
] as const;

export default function MadoreCustomHomePage() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({
      left: direction === 'left' ? -640 : 640,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero
        imageSrc={heroImage}
        imageAlt="Madore Custom Home hero"
        title="Madore Custom Home"
        bottomPaddingClass="pb-14"
      />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-10 lg:grid-cols-[1fr_583px] lg:gap-16"
          image={<img src={featureImage} alt="Madore living space" className={projectImageEndCaseStudyClass} />}
        >
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-secondary">Life Happens Here</p>
          <h2 className="mt-2 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Make It Your Own</h2>
          <p className="mt-5 text-[16px] leading-[1.6]">
            Madore Custom Home is located in Central Coquitlam. This home is just under 4,200 sqft, with 6 bedrooms and
            5.5 bathrooms.
          </p>
          <p className="mt-4 text-[16px] leading-[1.6]">
            Some main features of this home include a 2 bedroom rental suite, gourmet spice kitchen, and a private
            greenbelt.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-16">
          <h2 className="mb-8 text-center font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
            Property Gallery
          </h2>
          <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
            {galleryImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Madore gallery ${index + 1}`}
                className="h-[280px] w-full shrink-0 snap-start object-cover md:w-[720px] md:h-[420px]"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              aria-label="Previous gallery image"
              onClick={() => scrollGallery('left')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next gallery image"
              onClick={() => scrollGallery('right')}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-20">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-16">
          <h2 className="mb-8 text-center font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
            Virtual Tour
          </h2>
          <a
            href={virtualTourLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Madore Custom Home virtual tour"
            className="group relative block h-[220px] w-full overflow-hidden border border-primary/10 bg-[#0c1320] md:h-[300px] lg:h-[360px]"
          >
            <img
              src={virtualTourThumbnail}
              alt="Madore custom home virtual tour thumbnail"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="inline-flex items-center gap-3 border border-white/60 bg-black/25 px-5 py-3 text-white backdrop-blur-[2px]">
                <span className="font-medium tracking-[0.04em] uppercase text-[13px] md:text-[14px]">Madore House</span>
                <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaBannerImage} alt="Lets connect background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto flex min-h-[600px] w-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.5]">
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn more about
              our process, our team is here to help. Share your goals and your vision; together, we&apos;ll transform your ideas into
              a home that feels unmistakably yours.
            </p>
            <a
              href="/contact"
              className="mt-7 inline-flex items-center justify-center border border-white px-[18px] py-2.5 text-[16px] font-medium text-white hover:bg-white hover:text-primary transition-colors"
            >
              Lets Connect
            </a>
          </div>
        </div>
      </section>

      <MoreMessagesFromOwners heading="Messages from Owners" />
    </div>
  );
}
