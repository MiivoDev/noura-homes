const heroImage = 'https://www.figma.com/api/mcp/asset/642a792e-d9c8-4557-a602-f15712daa1dc';
const detailImage = 'https://www.figma.com/api/mcp/asset/a3c659e8-cd5d-48cd-94d6-245c765affaf';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

export default function HouseRenovationsPage() {
  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="order-2 px-8 lg:order-1 lg:px-16 py-14 lg:py-24 flex items-center">
            <div className="max-w-[541px]">
              <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                House Renovations
              </h1>
              <p className="mt-4 text-[16px] leading-[1.5] text-primary/90">
                Reimagine your space with Noura Homes, where vision, innovation, and craftsmanship come together to
                create homes that evolve with your life. Whether it&apos;s a full kitchen or bathroom transformation,
                structural changes, or a full home remodel, our experienced team brings the same meticulous attention
                to detail that defines every Noura home.
              </p>
              <p className="mt-4 text-[16px] leading-[1.5] text-primary/90">
                We manage each renovation from start to finish; design, planning, construction, and finishing;
                ensuring a seamless, stress-free experience. Our team blends modern functionality, elegant design, and
                energy efficiency, elevating your space while maintaining the heart of what makes it home.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[820px]">
            <img src={heroImage} alt="House renovations hero" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[683px_1fr] gap-12 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={detailImage} alt="Luxury bathroom renovation" className="w-full h-full min-h-[420px] object-cover" />
          <div className="max-w-[586px]">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.48px] text-primary mb-8">
              Our Renovation Expertise:
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.5] text-primary">
              <p className="font-semibold">Custom kitchen and bathroom remodels</p>
              <p className="font-semibold">Whole-home transformations and additions</p>
              <p className="font-semibold">Layout optimization and structural reconfigurations</p>
              <p className="font-semibold">Luxury interiors, smart home upgrades, and bespoke finish</p>
            </div>
            <p className="mt-8 text-[16px] leading-[1.5] text-primary/90">
              Each renovation reflects the same quality, personalization, and care that have earned Noura Homes its
              reputation for excellence, transforming the homes you have into the homes you&apos;ve always envisioned.
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
