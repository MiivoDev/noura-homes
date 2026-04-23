const heroImage = 'https://www.figma.com/api/mcp/asset/72bc3da7-3907-43ad-8f56-03f716222572';
const detailsImage = 'https://www.figma.com/api/mcp/asset/0863fe28-59dd-4eb0-a223-34d0b9185d5d';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

export default function LuxuryTownhousePage() {
  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="order-2 px-8 lg:order-1 lg:px-16 py-14 lg:py-24 flex items-center lg:pr-10">
            <div className="max-w-[480px]">
              <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                Distinctive Living: Luxury Townhouse Excellence
              </h1>
              <p className="mt-5 text-[16px] leading-[1.5] text-primary/90">
                Experience the essence of refined, house-like living with Noura Homes' luxury townhouse communities,
                where craftsmanship, comfort, and individuality come together in perfect balance.
              </p>
              <p className="mt-3 text-[16px] leading-[1.5] text-primary/90">
                Our townhouse developments are designed to feel like private homes, offering the space, comfort, and
                design distinction you expect from Noura Homes. Each residence blends modern functionality with
                thoughtful architectural details, creating spaces that are as beautiful as they are livable.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[820px]">
            <img
              src={heroImage}
              alt="Luxury townhouse exterior"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

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
        <div className="absolute inset-0 bg-black/20" />
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
              Lets Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
