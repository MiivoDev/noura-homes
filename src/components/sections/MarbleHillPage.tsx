import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = '/Marble Hill/marble-hill-hero.webp';
const introImage = '/Marble Hill/marble-hill-gallery-pic-22.webp';
const designImage = '/Marble Hill/marble-hill-gallery-pic-1.webp';
const exploreImage = '/Marble Hill/minute.webp';
const ctaImage = '/Banner.jpg';

const propertyPlanImages = [
  '/Marble Hill/black-marble-front.webp',
  '/Marble Hill/black-marble-upper.webp',
  '/Marble Hill/blue-marble-front.webp',
  '/Marble Hill/blue-marble-upper.webp',
  '/Marble Hill/golden-marble-front.webp',
  '/Marble Hill/golden-marble-upper.webp',
  '/Marble Hill/green-marble-front.webp',
  '/Marble Hill/green-marble-upper.webp',
  '/Marble Hill/grey-marble-front.webp',
  '/Marble Hill/grey-marble-upper.webp',
  '/Marble Hill/pink-marble-front.webp',
  '/Marble Hill/pink-marble-upper.webp',
];

const MARBLE_HILL_FOLDER = 'Marble Hill';
/** Third tour on the Noura Homes legacy virtual tours page — 7138 Marble Hill Road. */
const marbleHillVirtualTourUrl = 'https://my.matterport.com/show/?m=tYVmwGvWnxz';
const marbleHillVirtualTourThumb = `/${encodeURIComponent(MARBLE_HILL_FOLDER)}/virtual-tour.webp?v=20260423a`;

const galleryImages = [
  '/Marble Hill/marble-hill-gallery-pic-3.webp',
  '/Marble Hill/marble-hill-gallery-pic-4.webp',
  '/Marble Hill/marble-hill-gallery-pic-5.webp',
  '/Marble Hill/marble-hill-gallery-pic-6.webp',
  '/Marble Hill/marble-hill-gallery-pic-7.webp',
  '/Marble Hill/marble-hill-gallery-pic-8.webp',
  '/Marble Hill/marble-hill-gallery-pic-9.webp',
  '/Marble Hill/marble-hill-gallery-pic-10.webp',
  '/Marble Hill/marble-hill-gallery-pic-11.webp',
  '/Marble Hill/marble-hill-gallery-pic-12.webp',
  '/Marble Hill/marble-hill-gallery-pic-13.webp',
  '/Marble Hill/marble-hill-gallery-pic-14.webp',
  '/Marble Hill/marble-hill-gallery-pic-15.webp',
  '/Marble Hill/marble-hill-gallery-pic-16.webp',
  '/Marble Hill/marble-hill-gallery-pic-17.webp',
  '/Marble Hill/marble-hill-gallery-pic-18.webp',
  '/Marble Hill/marble-hill-gallery-pic-19.webp',
  '/Marble Hill/marble-hill-gallery-pic-20.webp',
  '/Marble Hill/marble-hill-gallery-pic-21.webp',
  '/Marble Hill/marble-hill-gallery-pic-23.webp',
  '/Marble Hill/marble-hill-gallery-pic-24.webp',
  '/Marble Hill/marble-hill-gallery-pic-25.webp',
  '/Marble Hill/marble-hill-gallery-pic-26.webp',
  '/Marble Hill/marble-hill-gallery-pic-27.webp',
];

const parksAndRecreation = [
  'BRIDAL FALLS WATER PARK',
  'MT. THOM PARK',
  'ELK CREEK FALLS',
  'THE FALLS GOLF CLUB',
  'CHILLIWACK COMMUNITY FOREST',
  'THOMPSON ROAD COMMUNITY PARK',
  'MT. MERCER',
  'KENSINGTON PARK',
  'VEDDER PARK',
];

const communityAmenities = [
  'CHILLIWACK GENERAL HOSPITAL',
  'EAST CHILLIWACK ELEMENTARY',
  'ROSEDALE TRADITIONAL COMMUNITY SCHOOL',
  'CHILLIWACK SECONDARY',
  'UNITY CHRISTIAN SCHOOL',
  'PACIFIC WYND MONTESSORI ALL DAY LEARNING CENTER',
  'CHILLIWACK MUNICIPAL AIRPORT',
];

const restaurants = [
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

const shops = [
  'CHILLIWACK MALL',
  'COTTONWOOD CENTER',
  'SOUTHGATE SHOPPING CENTER',
  'SAVE-ON-FOODS',
  'SAFEWAY',
  'SUPERSTORE',
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

export default function MarbleHillPage() {
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
      <ProjectPageHero imageSrc={heroImage} imageAlt="Marble Hill hero" title="Marble Hill" showCta />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          image={
            <img src={introImage} alt="Marble Hill exterior" className="w-full h-[330px] object-cover lg:h-[453px]" />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">Embrace West Coast living</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Marble Hill is a luxury community of custom single-family residences nestled in the lush, forested
            hillsides of Chilliwack. Each home features distinctive contemporary architecture, spacious open-concept
            layouts with high ceilings, and large windows that invite in natural light and breathtaking mountain
            views, creating a seamless connection between indoor comfort and the great outdoors.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          image={<img src={designImage} alt="Marble Hill interior" className={projectImageEndSlotClass} />}
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">Exquisite Design</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            With up to 3,500 sq. ft. of thoughtfully planned living space, each 4 to 6-bedroom home is built for
            families seeking room to grow, entertain, and thrive. Energy-efficient systems, elegant finishes, and
            customizable design options reflect Noura Homes&apos; enduring commitment to craftsmanship and sustainability.
          </p>
          <p className="mt-6 text-[16px] leading-[1.5]">
            At Marble Hill, you&apos;ll find more than just a home; you&apos;ll discover a community where modern luxury meets
            nature, and every detail is designed to help your family flourish.
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
                onClick={showPrevPlans}
                aria-label="Show previous property plans"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
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
          <div className="mt-8 grid grid-cols-1 gap-6">
            <a
              href={marbleHillVirtualTourUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open virtual tour: 7138 Marble Hill Road"
              className="group relative block h-[220px] w-full overflow-hidden border border-primary/10 bg-[#0c1320] md:h-[300px] lg:h-[330px]"
            >
              <img
                src={marbleHillVirtualTourThumb}
                alt="7138 Marble Hill Road virtual tour thumbnail"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="inline-flex items-center gap-3 border border-white/60 bg-black/25 px-5 py-3 text-white backdrop-blur-[2px]">
                  <span className="font-medium tracking-[0.04em] uppercase text-[12px] md:text-[13px] lg:text-[14px]">
                    7138 MARBLE HILL ROAD
                  </span>
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </div>
            </a>
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
                  alt={`Marble Hill gallery ${index + 1}`}
                  className="w-full md:w-[660px] lg:w-[660px] shrink-0 h-[260px] md:h-[360px] lg:h-[426px] object-cover snap-start"
                />
              ))}
            </div>
            <div className="mt-7 flex items-center justify-center gap-2">
              <button
                onClick={showPrevGallery}
                aria-label="Show previous gallery images"
                className="h-[34px] w-[34px] rounded-full border border-primary flex items-center justify-center text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
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
              alt="Exploring Chilliwack map"
              className="h-[320px] w-full object-cover lg:col-start-2 lg:row-start-1 lg:h-[386px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px]">Exploring Chilliwack</h2>
          <p className="mt-8 text-[24px] md:text-[32px] leading-[1.5]">
            Enjoy the peace and serenity of nature without sacrificing convenience.
          </p>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-14">
          <ListBlock title="Parks & Recreation" items={parksAndRecreation} />
          <ListBlock title="Community & Amenities" items={communityAmenities} />
          <ListBlock title="Restaurants" items={restaurants} />
          <ListBlock title="Shops" items={shops} />
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we&apos;ll transform
              your ideas into a home that feels unmistakably yours.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center justify-center border border-white px-5 py-2.5 text-[16px] font-medium text-white hover:bg-white hover:text-primary transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
