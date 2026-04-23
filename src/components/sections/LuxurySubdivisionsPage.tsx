const heroImage = 'https://www.figma.com/api/mcp/asset/536c2b67-4276-4c76-8ae8-302f6f8fc0a0';
const detailImage = 'https://www.figma.com/api/mcp/asset/ac4abf6e-c72c-4ef2-a49b-514f8b5ff745';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

export default function LuxurySubdivisionsPage() {
  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="order-2 px-8 lg:order-1 lg:px-16 py-14 lg:py-24 flex items-center lg:pr-10">
            <div className="max-w-[541px]">
              <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                Transforming Communities Through Luxury Subdivisions
              </h1>
              <p className="mt-4 text-[16px] leading-[1.5] text-primary/90">
                At Noura Homes, we believe that great communities start with thoughtful design and a vision for the
                future. For over 30 years, we have been shaping neighbourhoods, creating spaces where families can
                grow, connect, and thrive.
              </p>
              <p className="mt-4 text-[16px] leading-[1.5] text-primary/90">
                Each subdivision is carefully planned to reflect the unique character of its surroundings while
                offering the modern comfort and sustainability today&apos;s homeowners value most.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[820px]">
            <img
              src={heroImage}
              alt="Luxury subdivisions hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-background py-10 lg:py-14">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="bg-secondary text-white p-8 lg:p-10 min-h-[260px]">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Shape Your Dream Home</h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-white/95 max-w-[500px]">
              Experience the freedom to personalize your living space within our new subdivisions. Collaborate with
              our interior designers and craftsmen to create a home that reflects your unique style, values, and way
              of life.
            </p>
          </div>
          <div className="bg-secondary text-white p-8 lg:p-10 min-h-[260px]">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px]">Built Around You</h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-white/95 max-w-[530px]">
              Every home in a Noura subdivision is an opportunity to express individuality. From layout to finishes,
              we ensure every detail is tailored to your preferences, blending practicality with timeless design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[683px_1fr] gap-12 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={detailImage} alt="Luxury subdivision exterior at night" className="w-full h-full min-h-[420px] object-cover" />
          <div className="max-w-[586px]">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary mb-8">
              Why Choose Noura Homes
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.5] text-primary">
              <p className="font-semibold">Communities that balance modern living with natural surroundings</p>
              <p className="font-semibold">Customization options that reflect your personal aesthetic</p>
              <p className="font-semibold">Collaboration with experienced designers and trades</p>
              <p className="font-semibold">A proven legacy of craftsmanship, trust, and innovation</p>
            </div>
            <p className="mt-8 text-[16px] leading-[1.5] text-primary/90">
              Elevate your lifestyle; start your journey with Noura Homes today.
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
              Whether you&apos;re ready to design a custom home, exploring renovation options, or simply want to learn
              more about our process, our team is here to help. Share your goals and your vision; together, we&apos;ll
              transform your ideas into a home that feels unmistakably yours.
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
