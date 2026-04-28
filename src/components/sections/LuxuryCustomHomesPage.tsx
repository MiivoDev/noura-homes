import ServiceHeroCard from './ServiceHeroCard';

const heroImage = '/services/luxury-custom-homes/hero.png';
const whyChooseImage = '/services/luxury-custom-homes/why-choose.png';
const ctaImage = '/Your%20dream%20home.jpg';

export default function LuxuryCustomHomesPage() {
  return (
    <div className="bg-background">
      <ServiceHeroCard title="Your Vision, Our Expertise: Crafting Custom Dream Homes" imageSrc={heroImage} imageAlt="Luxury custom homes hero">
        <p>
          For over three decades, Noura Homes has been crafting custom homes that embody timeless design, modern
          luxury, and family-centered living. As a family-owned builder, we approach each project with care.
        </p>
        <p>
          From initial consultation to final detail, our process is personal, transparent, and collaborative. We work
          closely with homeowners, architects, and artisans to bring every vision to life.
        </p>
        <p>
          Each Noura home is a statement of excellence, designed to last for generations and built on integrity,
          craftsmanship, and family values since 1992.
        </p>
      </ServiceHeroCard>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[615px_1fr] gap-16 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={whyChooseImage} alt="Luxury custom bathroom interior" className="w-full h-full min-h-[360px] object-cover" />
          <div>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary mb-6">
              Why Choose Noura Homes
            </h2>
            <div className="space-y-4 text-[16px] leading-[1.5] text-primary">
              <p className="font-semibold">Complete design flexibility: No two Noura homes are ever the same.</p>
              <p className="font-semibold">Three decades of trusted expertise and award-nominated craftsmanship.</p>
              <p className="font-semibold">
                Sustainable and energy-efficient building practices that protect both comfort and the planet.
              </p>
              <p className="font-semibold">
                Transparent communication and trusted relationships, from concept to completion.
              </p>
              <p className="font-semibold">Proven legacy of community investment, supporting local families and trades.</p>
              <p className="italic text-primary/85">Built for families, by a family, since 1992.</p>
            </div>
            <a
              href="#our-projects"
              className="mt-7 inline-flex items-center justify-center border border-primary px-5 py-2.5 text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Explore Our Projects
            </a>
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              Whether you're ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we’ll transform
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
