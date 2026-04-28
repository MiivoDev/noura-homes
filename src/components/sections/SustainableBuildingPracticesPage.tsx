import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { SyntheticEvent } from 'react';

const imgHero = '/sustainable-hero.webp?v=20260422a';
const imgIntro = '/sustainable-green-building.webp?v=20260422a';
const imgImpact = '/sustainable-measurable-impact.webp?v=20260422a';
const imgLeadership = '/sustainable-global-local.webp?v=20260422a';
const imgLegacy = '/Sustainable%20Building.jpg';
const imgCta = '/sustainable-green-building.webp?v=20260422a';
const fallbackImage = '/our-story-hero-original.png';

export default function SustainableBuildingPracticesPage() {
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;
    if (image.src.includes(fallbackImage)) return;
    image.src = fallbackImage;
  };

  return (
    <div className="bg-background">
      <section className="relative min-h-[900px] overflow-hidden">
        <img src={imgHero} alt="Sustainable Building Practices" className="absolute inset-0 h-full w-full object-cover" onError={handleImageError} />
        <div className="relative z-10 mx-auto flex min-h-[900px] w-full max-w-[1600px] items-center justify-center px-8 lg:px-16 pt-[82px]">
          <h1 className="max-w-[612px] text-center font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-white">
            Sustainable
            <br />
            Building Practices
          </h1>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[1fr_583px] lg:px-16">
          <div className="order-2 space-y-8 text-[16px] leading-[1.5] text-primary lg:order-1">
            <p>
              Since 1992, Noura Homes has been at the forefront of green building; long before sustainability became an
              industry standard. Our mission has always been simple: to build homes that are healthier, more efficient,
              and more responsible for families and communities alike.
            </p>
            <p>
              Every home reflects the same promise: thoughtful design, uncompromising quality, and a process rooted in
              trust. We build spaces that adapt to the way families live now while standing strong for what comes next.
            </p>
            <p>
              Decades before provincial energy codes required it, Noura Homes championed PowerSmart Homes, setting new
              benchmarks for environmentally responsible design across Maple Ridge, Coquitlam, and Metro Vancouver.
              Through forward-thinking innovation and lasting craftsmanship, we continue to redefine what it means to
              build responsibly.
            </p>
          </div>
          <img
            src={imgIntro}
            alt="Sustainable interior"
            className="order-1 h-[388px] w-full object-cover lg:order-2"
            onError={handleImageError}
          />
        </div>
      </section>

      <section className="w-full bg-background py-12">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[583px_1fr] lg:px-16">
          <img src={imgImpact} alt="Measurable impact" className="h-[388px] w-full object-cover" onError={handleImageError} />
          <div>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">Measurable Impact</h2>
            <div className="mt-5 space-y-5 text-[16px] leading-[1.5] text-primary">
              <p>Over the past 30 years, we have delivered more than 1,000 energy-efficient homes, featuring:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>High-efficiency heating and cooling systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>Advanced insulation and airtight construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>Double-glazed windows and energy-optimized layouts</span>
                </li>
              </ul>
              <p>
                On average, Noura homes achieve up to 20 percent greater energy efficiency than standard homes built
                before 2018; a measurable commitment to both performance and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-8 lg:grid-cols-[1fr_583px] lg:px-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
              Global and Local
              <br />
              Environmental Leadership
            </h2>
            <div className="mt-5 space-y-5 text-[16px] leading-[1.5] text-primary">
              <p>
                Our environmental responsibility extends far beyond construction; we believe that every action matters
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Preserving Nature:</strong> By integrating greenbelt areas into developments such as Emerald
                    Ridge, we maintain balance between modern living and the natural environment.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Carbon Offset Programs:</strong> Investing in global initiatives that reduce deforestation and
                    provide efficient, clean-burning stoves to communities in need.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowUpRight className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    <strong>Paperless Office:</strong> Operating with energy-efficient equipment, cloud-based systems, and
                    comprehensive recycling programs that minimize waste.
                  </span>
                </li>
              </ul>
              <p>
                At Noura Homes, sustainability is not a trend; it is a tradition rooted in integrity, innovation, and
                respect for the communities we help shape.
              </p>
            </div>
          </div>
          <img
            src={imgLeadership}
            alt="Environmental leadership"
            className="order-1 h-[388px] w-full object-cover lg:order-2"
            onError={handleImageError}
          />
        </div>
      </section>

      <section className="w-full h-[600px] relative overflow-hidden">
        <img src={imgLegacy} alt="A Legacy of Sustainable Living" className="absolute inset-0 h-full w-full object-cover" onError={handleImageError} />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center px-8 lg:px-16">
          <div className="max-w-[784px] text-center text-white mx-auto">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">A Legacy of Sustainable Living</h2>
            <p className="mt-[17px] text-[16px] leading-[1.5]">
              At Noura Homes, sustainability is more than a building practice; it is a guiding philosophy. Through
              energy-efficient design, carbon-conscious construction, and education that empowers homeowners, we create
              lasting change that reaches far beyond our communities. We may not be an environmental nonprofit, yet our
              legacy is one of stewardship, innovation, and care for the world we build within.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 lg:gap-20 px-8 lg:grid-cols-[693px_1fr] lg:px-16">
          <img src={imgCta} alt="Interior showcase" className="h-[606px] w-full object-cover" onError={handleImageError} />
          <div>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
              Your dream home begins with a conversation.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-primary">
              Whether you’re ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we’ll transform
              your ideas into a home that feels unmistakably yours.
            </p>
            <button className="mt-9 inline-flex items-center gap-2 border border-primary px-[18px] py-[10px] text-[16px] font-medium leading-[1.5] text-primary">
              Let's Connect
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
