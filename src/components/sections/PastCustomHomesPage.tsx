import { ProjectImageTextGrid, projectImageEndSlotClass } from './ProjectImageTextGrid';
import { ProjectPageHero } from './ProjectPageHero';

const heroImage = '/custom-homes/hero.webp';
const leylandImage = '/custom-homes/leyland.webp';
const regentImage = '/custom-homes/regent.webp';
const madoreImage = '/custom-homes/madore.png';
const robsonImage = '/custom-homes/robson.webp';
const stewartImage = '/custom-homes/stewart.webp';
const wallsImage = '/custom-homes/walls.webp';
const ctaImage = '/Banner.jpg';

export default function PastCustomHomesPage() {
  return (
    <div className="bg-background">
      <ProjectPageHero imageSrc={heroImage} imageAlt="Custom homes hero" title="Custom Homes" />

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img
              src={leylandImage}
              alt="Leyland Custom Home"
              className="w-full h-[330px] object-cover lg:h-[453px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Leyland Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Custom-built home in West Vancouver. West Coast contemporary living: open floor plans, floor-to-ceiling windows,
            innovative design, and a neutral color palette with cedar accents.
          </p>
          <a
            href="/projects/past/custom-homes/leyland-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-12 lg:gap-16"
          image={<img src={regentImage} alt="Regent Custom Home" className={projectImageEndSlotClass} />}
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Regent Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            This custom home showcases all the features you can include when building your own home: custom-made wine
            rooms, gourmet kitchens, luxury powder rooms, built-in office cabinets, and indoor-outdoor living with
            sliding glass doors opening to a refined outdoor space.
          </p>
          <a
            href="/projects/past/custom-homes/regent-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img
              src={madoreImage}
              alt="Madore Custom Home"
              className="w-full h-[330px] object-cover lg:h-[453px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Madore Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Madore custom home is located in Central Coquitlam. This home is just under 4,200 sqft, with 6 bedrooms and 5.5
            bathrooms. Some main features of this home include a 2 bedroom rental suite, gourmet spice kitchen, and a private
            greenbelt.
          </p>
          <a
            href="/projects/past/custom-homes/madore-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-12 lg:gap-16"
          image={<img src={robsonImage} alt="Robson Custom Home" className={projectImageEndSlotClass} />}
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Robson Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Bring the outdoors in with this beautifully designed home surrounded by the lush forests of the West Coast. This
            custom home features a contemporary design nestled among majestic evergreen trees.
          </p>
          <a
            href="/projects/past/custom-homes/robson-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageStart"
          className="items-center gap-12 lg:gap-16"
          image={
            <img
              src={stewartImage}
              alt="Stewart Custom Home"
              className="w-full h-[330px] object-cover lg:h-[453px]"
            />
          }
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Stewart Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Thoughtfully Crafted by Noura Homes in the Coquitlam Maillardville Area With Lane Access in the Back. Each Home is
            Just Under 3,800 Sqft, With 6 Bedrooms and 4 Bathrooms. Some of the Main Features of These Homes Include a 2
            Bedroom Rental Suite, an Attached Garage, Unobstructed City Views and a Walk-out Basement.
          </p>
          <a
            href="/projects/past/custom-homes/stewart-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <ProjectImageTextGrid
          layout="imageEnd"
          className="items-center gap-12 lg:gap-16"
          image={<img src={wallsImage} alt="Walls Custom Home" className={projectImageEndSlotClass} />}
        >
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Walls Custom Home</h2>
          <p className="mt-8 text-[16px] leading-[1.5]">
            Designed and built by Noura Homes in the Coquitlam Maillardville Area with private greenbelt in the back.
          </p>
          <p className="mt-4 text-[16px] leading-[1.5]">
            Each home is just under 3,900 sq. ft., with 6 bedrooms and 5 bathrooms. Some of the main features of these homes
            include a 2 bedroom rental suite, gourmet spice kitchen and unobstructed city views.
          </p>
          <a
            href="/projects/past/custom-homes/walls-custom-home"
            className="mt-7 inline-flex items-center justify-center border border-primary bg-primary px-[18px] py-[10px] text-[14px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-primary/90 transition-colors"
          >
            View Property
          </a>
        </ProjectImageTextGrid>
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
