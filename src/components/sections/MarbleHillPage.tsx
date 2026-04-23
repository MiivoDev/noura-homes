import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = 'https://www.figma.com/api/mcp/asset/4cf69048-bdd9-4f6a-a824-bbaf3f875e3d';
const introImage = 'https://www.figma.com/api/mcp/asset/2fbee381-785b-4ee5-9c72-74ef61f6e2c2';
const designImage = 'https://www.figma.com/api/mcp/asset/f6b2347a-a0e8-4e8d-bc79-f78e5e4cd070';
const exploreImage = 'https://www.figma.com/api/mcp/asset/a8b4e515-8fd7-4f73-8a17-e04801129a87';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

const propertyPlanImages = [
  'https://www.figma.com/api/mcp/asset/b50410e0-fd1f-4c33-9739-3029a277ebe9',
  'https://www.figma.com/api/mcp/asset/50297273-dd47-4d39-8338-31c546c34002',
  'https://www.figma.com/api/mcp/asset/8b550368-2b41-43fe-9aa9-289d24ce5891',
  'https://www.figma.com/api/mcp/asset/5418326f-758e-432d-9e33-72aad6df551e',
  'https://www.figma.com/api/mcp/asset/8c6ef14f-0231-47d5-aadd-99d1209c5523',
  'https://www.figma.com/api/mcp/asset/93579602-149a-4b5e-8052-02f1ea18e88c',
  'https://www.figma.com/api/mcp/asset/fd3e655f-de0f-4f25-a6ca-6ecc74a3c4cd',
  'https://www.figma.com/api/mcp/asset/9fff3e3b-4d7e-431a-b87c-89e5e8a280b2',
  'https://www.figma.com/api/mcp/asset/98ac5e4c-8952-4671-847b-103036f56908',
  'https://www.figma.com/api/mcp/asset/65ee34b3-d447-40b7-8875-673d70821e0c',
  'https://www.figma.com/api/mcp/asset/b21fd692-1a8b-4c0c-85cf-a88616737d86',
  'https://www.figma.com/api/mcp/asset/18b7c609-4330-4267-a1ef-69b343455110',
];

const galleryImages = [
  '/Marble Hill/1092_4.jpg',
  '/Marble Hill/1494_3.jpg',
  '/Marble Hill/1505_55.jpg',
  '/Marble Hill/1711_50.jpg',
  '/Marble Hill/1950_16.jpg',
  '/Marble Hill/2049_53.jpg',
  '/Marble Hill/2228_1.jpg',
  '/Marble Hill/2547_20.jpg',
  '/Marble Hill/2644_25.jpg',
  '/Marble Hill/2756_21.jpg',
  '/Marble Hill/3041_48.jpg',
  '/Marble Hill/3046_60.jpg',
  '/Marble Hill/3321_54.jpg',
  '/Marble Hill/3777_10.jpg',
  '/Marble Hill/3827_57.jpg',
  '/Marble Hill/3847_49.jpg',
  '/Marble Hill/3980_61.jpg',
  '/Marble Hill/4052_59.jpg',
  '/Marble Hill/4682_23.jpg',
  '/Marble Hill/4760_46.jpg',
  '/Marble Hill/4828_32.jpg',
  '/Marble Hill/4874_31.jpg',
  '/Marble Hill/508_47.jpg',
  '/Marble Hill/5308_18.jpg',
  '/Marble Hill/5391_9.jpg',
  '/Marble Hill/5531_6.jpg',
  '/Marble Hill/5636_58.jpg',
  '/Marble Hill/5943_52.jpg',
  '/Marble Hill/6012_8.jpg',
  '/Marble Hill/6594_12.jpg',
  '/Marble Hill/6722_13.jpg',
  '/Marble Hill/6782_51.jpg',
  '/Marble Hill/7003_19.jpg',
  '/Marble Hill/7386_28.jpg',
  '/Marble Hill/9027_29.jpg',
  '/Marble Hill/9032_56.jpg',
  '/Marble Hill/9191_43.jpg',
  '/Marble Hill/9476_26.jpg',
  '/Marble Hill/9514_17.jpg',
  '/Marble Hill/9814_15.jpg',
  '/Marble Hill/98_24.jpg',
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
        <div className="absolute inset-0 bg-black/20" />
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
              Lets Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
