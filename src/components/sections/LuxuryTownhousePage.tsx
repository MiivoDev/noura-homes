import ServiceHeroCard from './ServiceHeroCard';

const heroImage = '/services/luxury-townhouse/hero.png';
const detailsImage = '/services/luxury-townhouse/details.png';
const ctaImage = '/Your%20dream%20home.jpg';

export default function LuxuryTownhousePage() {
  return (
    <div className="bg-background">
      <ServiceHeroCard title="Distinctive Living: Luxury Townhouse Excellence" imageSrc={heroImage} imageAlt="Luxury townhouse exterior">
        <p>
          Experience the essence of refined, house-like living with Noura Homes&apos; luxury townhouse communities,
          where craftsmanship, comfort, and individuality come together in perfect balance.
        </p>
        <p>
          Our townhouse developments are designed to feel like private homes, offering the space, comfort, and design
          distinction you expect from Noura Homes. Each residence blends modern functionality with thoughtful
          architectural details, creating spaces that are as beautiful as they are livable.
        </p>
      </ServiceHeroCard>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[615px_1fr] gap-16 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={detailsImage} alt="Luxury townhouse interior living room" className="w-full h-full min-h-[400px] object-cover" />
          <div className="max-w-[614px]">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary mb-6">
              What Sets Our Townhouses Apart
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.5] text-primary">
              <p className="font-semibold">Boutique-scale communities designed for privacy and character</p>
              <p className="font-semibold">Open, light-filled layouts that feel expansive and connected</p>
              <p className="font-semibold">Distinctive finishes that reflect our commitment to craftsmanship</p>
              <p className="font-semibold">Comfort-driven design that enhances everyday living</p>
            </div>

            <h3 className="mt-10 font-display text-[32px] leading-[1.2] tracking-[-0.32px] text-primary">Elevate Your Lifestyle</h3>
            <p className="mt-3 text-[16px] leading-[1.5] text-primary/95">
              Discover a new standard of townhouse living that embodies comfort, function, and timeless style. Whether
              you're starting a new chapter or seeking a home that better fits your lifestyle, Noura Homes invites you
              to experience the extraordinary in every detail.
            </p>
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
              about our process, our team is here to help. Share your goals and your vision; together, we'll transform
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
