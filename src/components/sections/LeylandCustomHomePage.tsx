import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';
import { ProjectImageTextGrid, projectImageEndCaseStudyClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = '/leyland/hero.webp?v=20260422a';
const featureImage = '/leyland/gal-5.jpg?v=20260422a';
const ctaBannerImage = '/leyland/gal-9.jpg?v=20260422a';

const galleryImages = [
  '/leyland/gal-1.jpg?v=20260422a',
  '/leyland/gal-2.jpg?v=20260422a',
  '/leyland/gal-3.jpg?v=20260422a',
  '/leyland/gal-4.jpg?v=20260422a',
  '/leyland/gal-5.jpg?v=20260422a',
  '/leyland/gal-6.jpg?v=20260422a',
  '/leyland/gal-7.jpg?v=20260422a',
  '/leyland/gal-8.jpg?v=20260422a',
  '/leyland/gal-9.jpg?v=20260422a',
  '/leyland/gal-10.jpg?v=20260422a',
  '/leyland/gal-11.jpg?v=20260422a',
  '/leyland/gal-12.jpg?v=20260422a',
] as const;

export default function LeylandCustomHomePage() {
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
        imageAlt="Leyland Custom Home hero"
        title="Leyland Custom Home"
        bottomPaddingClass="pb-14"
      />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-10 lg:grid-cols-[1fr_583px] lg:gap-16"
          image={<img src={featureImage} alt="Leyland living space" className={projectImageEndCaseStudyClass} />}
        >
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-secondary">Life Happens Here</p>
          <h2 className="mt-2 font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Make It Your Own</h2>
          <p className="mt-5 text-[16px] leading-[1.6]">
            Custom built home in West Vancouver. West Coast contemporary living: open-floor plans, floor-to-ceiling
            windows, innovative design and a neutral color palette with cedar accents.
          </p>
          <p className="mt-4 text-[16px] leading-[1.6]">
            Elevate your home, elevate your life in this sophisticated West Vancouver home.
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
                alt={`Leyland gallery ${index + 1}`}
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
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      <MoreMessagesFromOwners heading="Messages from Owners" />
    </div>
  );
}
