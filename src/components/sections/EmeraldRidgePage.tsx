import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import MoreMessagesFromOwners from './MoreMessagesFromOwners';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = '/Emerald Ridge/emarald-gallery-image-33.webp';
const introImage = '/Emerald Ridge/emarald-gallery-image-23.webp';
const designImage = '/Emerald Ridge/emerald-ridge-exquisite.jpeg';
const exploreImage = '/Emerald Ridge/emarald-gallery-image-35-scaled.webp';
const ctaImage = '/Banner.jpg';
const EMERALD_RIDGE_PUBLIC = 'Emerald Ridge';
const virtualTours = [
  {
    title: '24469 JENEWEIN DRIVE, EMELAD RIDGE',
    link: 'https://my.matterport.com/show/?m=HwC9L1sXA1C',
    thumbnail: `/${encodeURIComponent(EMERALD_RIDGE_PUBLIC)}/virtual-tour-24469.webp?v=20260422a`,
  },
  {
    title: '24417 JENEWEIN DRIVE, EMELAD RIDGE',
    link: 'https://my.matterport.com/show/?m=Bqu3xUCQ3m8',
    thumbnail: `/${encodeURIComponent(EMERALD_RIDGE_PUBLIC)}/virtual-tour-24417.webp?v=20260422a`,
  },
] as const;
const propertyPlanImages = [
  '/Emerald Ridge/dark-emerald.webp',
  '/Emerald Ridge/dark-emerald2.webp',
  '/Emerald Ridge/green-emerald.webp',
  '/Emerald Ridge/green-emerald2.webp',
  '/Emerald Ridge/phlox-emerald.webp',
  '/Emerald Ridge/phlox-emerald2.webp',
  '/Emerald Ridge/pink-emerald.webp',
  '/Emerald Ridge/pink-emerald2.webp',
  '/Emerald Ridge/starling-emerald.webp',
  '/Emerald Ridge/starling-emerald2.webp',
];

const galleryImages = [
  '/Emerald Ridge/emarald-gallery-image-4.webp',
  '/Emerald Ridge/emarald-gallery-image-5.webp',
  '/Emerald Ridge/emarald-gallery-image-6.webp',
  '/Emerald Ridge/emarald-gallery-image-7.webp',
  '/Emerald Ridge/emarald-gallery-image-8.webp',
  '/Emerald Ridge/emarald-gallery-image-9.webp',
  '/Emerald Ridge/emarald-gallery-image-10.webp',
  '/Emerald Ridge/emarald-gallery-image-11.webp',
  '/Emerald Ridge/emarald-gallery-image-12.webp',
  '/Emerald Ridge/emarald-gallery-image-14.webp',
  '/Emerald Ridge/emarald-gallery-image-15.webp',
  '/Emerald Ridge/emarald-gallery-image-16.webp',
  '/Emerald Ridge/emarald-gallery-image-17.webp',
  '/Emerald Ridge/emarald-gallery-image-18.webp',
  '/Emerald Ridge/emarald-gallery-image-19.webp',
  '/Emerald Ridge/emarald-gallery-image-20.webp',
  '/Emerald Ridge/emarald-gallery-image-21.webp',
  '/Emerald Ridge/emarald-gallery-image-22.webp',
  '/Emerald Ridge/emarald-gallery-image-24.webp',
  '/Emerald Ridge/emarald-gallery-image-25.webp',
  '/Emerald Ridge/emarald-gallery-image-26.webp',
  '/Emerald Ridge/emarald-gallery-image-27.webp',
  '/Emerald Ridge/emarald-gallery-image-28.webp',
  '/Emerald Ridge/emarald-gallery-image-29.webp',
  '/Emerald Ridge/emarald-gallery-image-30.webp',
  '/Emerald Ridge/emarald-gallery-image-31.webp',
  '/Emerald Ridge/emarald-gallery-image-32.webp',
  '/Emerald Ridge/emarald-gallery-image-33-1.webp',
  '/Emerald Ridge/emarald-gallery-image-34.webp',
  '/Emerald Ridge/emarald-gallery-image-36.webp',
  '/Emerald Ridge/emarald-gallery-image-37.webp',
  '/Emerald Ridge/emarald-gallery-image-38.webp',
  '/Emerald Ridge/emarald-gallery-image-39.webp',
  '/Emerald Ridge/emarald-gallery-image-40.webp',
  '/Emerald Ridge/emarald-gallery-image-1.webp',
];

const shopping = [
  'Save-On Foods',
  'Maple Ridge Shopping Centre',
  '7Eleven',
  'No Frills',
  'Walmart Supercenter',
  'Haney Place Mall',
  'Bruce Country Market',
];

const schools = [
  'Eric Langton Elementary (French Immersion)',
  'Golden Ears Elementary(French Immersion)',
  'Garibaldi Secondary',
  'Blue Mountain Elementary',
  'Meadowridge School',
  'Kanaka Creek Elementary',
  'c̓əsqənelə Elementary',
  'Samuel Robertson Technical Secondary',
];

const barsRestaurants = [
  'OCEAN SUSHI',
  'BUBBA’S BIG BITES',
  'WILDCAT GRILL',
  'FIESTA LOCA',
  'CHILLIWACK AIRPORT RESTAURANT',
  'FRANKIE’S ITALIAN CHILLIWACK',
  'COCONUT THAI RESTAURANT',
  'BROWNS SOCIALHOUSE',
  'EARLS KITCHEN + BAR',
  'BARCELOS FLAME GRILLED CHICKEN',
  'RANCHERS RESTAURANT',
  'GREEK ISLANDS RESTAURANT',
  'RENDERVOUS RESTAURANT',
];

const parkTrails = [
  'Albion Park',
  'Albion Sports Complex',
  'Planet Ice',
  'Kanaka Creek Regional Park',
  'Firefighter Park',
  'Erskine Trails',
  'North Fork Loop Trail',
  'Cliff Falls',
  'Kanaka Creek Park Fish Fence',
  'Thorn Hill Park',
];

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-[30px] md:text-[40px] leading-[1.2] text-primary">{title}</h3>
      <ol className="mt-6 list-decimal pl-5 space-y-1 text-[14px] md:text-[16px] leading-[1.5] text-primary">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default function EmeraldRidgePage() {
  const propertyPlanRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const showPrevPlans = () => {
    if (!propertyPlanRef.current) return;
    propertyPlanRef.current.scrollBy({ left: -520, behavior: 'smooth' });
  };

  const showNextPlans = () => {
    if (!propertyPlanRef.current) return;
    propertyPlanRef.current.scrollBy({ left: 520, behavior: 'smooth' });
  };

  const showPrevGallery = () => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: -700, behavior: 'smooth' });
  };

  const showNextGallery = () => {
    if (!galleryRef.current) return;
    galleryRef.current.scrollBy({ left: 700, behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      <ProjectPageHero imageSrc={heroImage} imageAlt="Emerald Ridge hero" title="Emerald Ridge" showCta />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          image={
            <img src={introImage} alt="Emerald Ridge exterior" className="w-full h-[330px] object-cover lg:h-[453px]" />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">
            Experience refined family living
          </h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Emerald Ridge is an exclusive enclave of estate homes in Maple Ridge. Each residence sits on a generous
            6,000 + sq. ft. lot backing onto a tranquil greenbelt and includes a two-bedroom suite and gourmet spice
            kitchen; thoughtfully designed and customizable to fit your lifestyle.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          image={
            <img
              src={designImage}
              alt="Emerald Ridge interior"
              className={projectImageEndSlotClass}
              loading="eager"
              decoding="async"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">Exquisite Design</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Using the expertise of award-winning Noura Homes&apos; team of experts, the uniquely contemporary homes at
            Emerald Ridge are built to meet the needs of families seeking balance and sanctuary. Bright, spacious open
            - concept design with loft ceilings; flooded with light and seamlessly connected with the natural
            surroundings.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary text-center">
            Property Plan
          </h2>
          <div className="mt-10">
            <div ref={propertyPlanRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {propertyPlanImages.map((image, index) => (
                <img
                  key={`plan-${index}`}
                  src={image}
                  alt={`Property plan ${index + 1}`}
                  className="w-full md:w-[480px] lg:w-[480px] shrink-0 h-[250px] md:h-[300px] lg:h-[360px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={showPrevPlans}
                aria-label="Show previous property plans"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNextPlans}
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
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary text-center">
            Virtual Tour
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {virtualTours.map((tour) => (
              <a
                key={tour.link}
                href={tour.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open virtual tour: ${tour.title}`}
                className="group relative block h-[220px] w-full overflow-hidden border border-primary/10 bg-[#0c1320] md:h-[300px] lg:h-[330px]"
              >
                <img
                  src={tour.thumbnail}
                  alt={`${tour.title} virtual tour thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 border border-white/60 bg-black/25 px-5 py-3 text-white backdrop-blur-[2px]">
                    <span className="font-medium tracking-[0.04em] uppercase text-[12px] md:text-[13px] lg:text-[14px]">{tour.title}</span>
                    <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary text-center">
            Gallery
          </h2>
          <div className="mt-8">
            <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth">
              {galleryImages.map((image, index) => (
                <img
                  key={`gallery-${index}`}
                  src={image}
                  alt={`Emerald Ridge gallery ${index + 1}`}
                  className="w-full md:w-[660px] lg:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={showPrevGallery}
                aria-label="Show previous gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNextGallery}
                aria-label="Show next gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          image={
            <img
              src={exploreImage}
              alt="Maple Ridge area map"
              className="h-[320px] w-full object-cover lg:col-start-2 lg:row-start-1 lg:h-[386px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">Exploring Maple Ridge</h2>
          <p className="mt-8 text-[24px] md:text-[32px] leading-[1.5]">
            Bathe in tranquility from the comfort of your own home only minutes away from local stores and trails.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
          <ListBlock title="Shopping" items={shopping} />
          <ListBlock title="Schools" items={schools} />
          <ListBlock title="Bars/Restaurants/Cafes" items={barsRestaurants} />
          <ListBlock title="Park & Trails" items={parkTrails} />
        </div>
      </section>

      <MoreMessagesFromOwners heading="Messages from Owners" />

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.5]">
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we&apos;ll transform
              your ideas into a home that feels unmistakably yours.
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
