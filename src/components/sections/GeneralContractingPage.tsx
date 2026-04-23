const heroImage = 'https://www.figma.com/api/mcp/asset/1b876172-85fc-445a-b80a-69e153295f59';
const whatWeOfferImage = 'https://www.figma.com/api/mcp/asset/339e17ec-dae7-42ef-9e92-f9d271027784';
const processImage = 'https://www.figma.com/api/mcp/asset/69b2f4a7-9dd6-448c-8dbe-85681dafdbdc';
const whyBuildImage = 'https://www.figma.com/api/mcp/asset/5cae3caf-dd5a-4636-ad20-ee9b9befddd3';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

const offerings = [
  {
    title: 'Custom Home Construction',
    description:
      'End-to-end project management for new builds across Greater Vancouver, Coquitlam, Maple Ridge, and surrounding areas.',
  },
  {
    title: 'Development Management',
    description:
      'Comprehensive coordination for rezoning, subdivision, and development permit (DP) applications.',
  },
  {
    title: 'Permit & Documentation Support',
    description: 'Preparation and submission of all required municipal and provincial permits.',
  },
  {
    title: 'Pre-Construction Services',
    description:
      'Detailed cost estimating, feasibility studies, site assessments, and budgeting to align your project with financial and design goals.',
  },
  {
    title: 'Sustainable Construction',
    description:
      'Incorporating BC Hydro PowerSmart standards, advanced insulation, and energy-efficient mechanical systems to deliver comfortable, low-impact homes.',
  },
  {
    title: 'Project & Site Management',
    description:
      'Dedicated teams align procurement schedules, on-site coordination, and transparent communication to keep your project on track.',
  },
  {
    title: 'Warranty & Aftercare',
    description:
      'All Noura Homes projects are covered under the 2-5-10 Home Warranty Program mandated by the Homeowner Protection Act of British Columbia, backed by our ongoing support long after move-in.',
  },
];

const processItems = [
  {
    title: 'The Team listens to what you want',
    description:
      'By taking a closer look, a Noura Project Manager will determine the feasibility of the project and consult with you on ways to improve your investment. This is further emphasized through a realistic financial outlook with consideration of Noura Homes top-level trades and resources.',
  },
  {
    title: 'Form and function come together',
    description:
      'In this step where you will explore exterior and interior design options that best suit your needs and personal style. The purpose of this phase is to combine years of know-how experience with exciting challenges to truly create a custom home.',
  },
  {
    title: 'Personal expression',
    description:
      'Timeless design and appreciation for premium quality is explored in the final phase where you will be working closely with your appointed Interior Designer. The added experience, creativity, and technical knowledge of the Interior Designer will bring your original blueprint concepts to life and make it ready for years of enjoyment and entertainment.',
  },
];

const whyBuildItems = [
  {
    title: 'Custom Home Construction',
    description:
      'Over 30 years of experience navigating municipal regulations, permitting, and construction practices.',
  },
  {
    title: 'Turnkey Solutions',
    description:
      'We manage every detail, from concept to occupancy, so you can enjoy a stress-free building experience.',
  },
  {
    title: 'Sustainability Leadership',
    description:
      'Proven track record in energy-efficient construction and environmentally responsible development.',
  },
  {
    title: 'Craftsmanship You Can Trust',
    description:
      'Homes built with precision, integrity, and care; designed to stand the test of time.',
  },
];

function DetailList({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.title} className="space-y-1.5">
          <h3 className="text-[18px] font-semibold tracking-[0.01em] text-primary">{item.title}</h3>
          <div className="h-[2px] w-[90px] bg-primary" />
          <p className="text-[15px] leading-[1.55] text-primary/95">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function GeneralContractingPage() {
  return (
    <div className="bg-background">
      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto min-h-[820px] pt-[82px] grid grid-cols-1 lg:grid-cols-[40%_60%]">
          <div className="order-2 px-8 lg:order-1 lg:px-16 py-14 lg:py-24 flex items-center">
            <div className="max-w-[541px]">
              <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
                General Contracting and Development Services
              </h1>
              <p className="mt-4 text-[16px] leading-[1.5] text-primary/90">
                For over three decades, Noura Homes has been built by a family for families. From Coquitlam to
                communities across the Lower Mainland, our homes are designed to feel deeply personal and endure for
                generations.
              </p>
            </div>
          </div>
          <div className="relative order-1 min-h-[420px] lg:order-2 lg:min-h-[820px]">
            <img src={heroImage} alt="General contracting hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[615px_1fr] gap-12 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={whatWeOfferImage} alt="What we offer" className="self-start w-full h-[320px] md:h-[360px] lg:h-[420px] object-cover" />
          <div>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary mb-6">What We Offer</h2>
            <DetailList items={offerings} />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_683px] gap-12 items-center py-16 lg:py-20 px-8 lg:px-16">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary mb-8">Our Process</h2>
            <div className="space-y-6">
              {processItems.map((item) => (
                <p key={item.title} className="text-[15px] leading-[1.6] text-primary/95">
                  <span className="font-bold">{item.title} </span>
                  {item.description}
                </p>
              ))}
            </div>
          </div>
          <img
            src={processImage}
            alt="Our process"
            className="order-1 w-full h-full min-h-[360px] object-cover lg:order-2"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[683px_1fr] gap-12 items-center py-16 lg:py-20 px-8 lg:px-16">
          <img src={whyBuildImage} alt="Why build with Noura Homes" className="w-full h-full min-h-[360px] object-cover" />
          <div>
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary mb-6">
              Why Build with Noura Homes
            </h2>
            <DetailList items={whyBuildItems} />
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
