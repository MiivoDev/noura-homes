import { ArrowRight } from 'lucide-react';
import type { CSSProperties } from 'react';

const imgHero = '/Our Story.jpg';
const imgStorySide = 'https://www.figma.com/api/mcp/asset/2206473b-7c72-4035-86a8-f8373bd16580';
const imgMission = 'https://www.figma.com/api/mcp/asset/077ff84e-238f-4462-8352-12bb7298da5e';
const imgVision = 'https://www.figma.com/api/mcp/asset/3d0cfd33-339f-46d7-a43a-826846a22a25';
const imgSocial = 'https://www.figma.com/api/mcp/asset/a532402a-6d70-4160-947c-3ee5997b690b';
const imgNouraFamily = 'https://www.figma.com/api/mcp/asset/3b11dae3-b6f0-478c-92c7-3a38d51dfe28';
const imgCulture = '/our-culture.jpg';
const imgTeam1 = 'https://www.figma.com/api/mcp/asset/088306b4-ae29-42c1-b6da-e70f165056be';
const imgTeam2 = 'https://www.figma.com/api/mcp/asset/e86d8675-120c-49cf-ad9a-0ad3fcf8a1af';
const imgTeam3 = 'https://www.figma.com/api/mcp/asset/71be363e-ef54-404b-844d-2dc42856ba5c';
const imgTeam4 = 'https://www.figma.com/api/mcp/asset/ba46b1a3-4716-4a3f-9c29-137a4fd6a40d';
const imgTeam5 = 'https://www.figma.com/api/mcp/asset/60f114ec-4055-4e7c-a018-385e13d54571';
const imgTeam6 = 'https://www.figma.com/api/mcp/asset/d9b5513d-22cf-4d23-9825-bae180db0825';
const imgCta = 'https://www.figma.com/api/mcp/asset/fdf8d9f4-f0c2-4620-a66f-dd459fd45d17';

const team = [
  {
    name: 'Hooshang Askarian',
    role: 'Founder',
    image: imgTeam1,
    description:
      'Together with Jamileh, Hooshang co-founded Noura Homes in 1992 with a shared vision of blending craftsmanship, integrity, and family values. Over three decades, he helped grow the company from a small family business into one of the region’s respected custom home builders across Coquitlam, Port Moody, Maple Ridge, Pitt Meadows, Mission, Burnaby, and beyond.\n\nAs an immigrant entrepreneur with a deep passion for construction and design, Hooshang continues to lead with discipline, humility, and a long-term commitment to quality homes that stand the test of time.',
  },
  {
    name: 'Jamileh Askarian',
    role: 'Co-founder and President',
    image: imgTeam2,
    description:
      'Jamileh co-founded Noura Homes in 1992 and continues to lead the company with purpose and resilience. With over $150M in project experience, she has earned deep respect in the construction industry and helped pave the way for the next generation of builders through values rooted in honesty, hard work, and community impact.\n\nHer leadership style combines sharp operational insight with people-first decision-making, ensuring every project reflects both high standards and meaningful contribution to the communities Noura serves.',
  },
  {
    name: 'Aram Askarian',
    role: 'Managing Director',
    image: imgTeam3,
    description:
      'Aram combines business strategy, design understanding, and community-focused leadership in her role as Managing Director. With over a decade in real estate investment and development, she brings insight shaped by SFU and Harvard Business School, while supporting local non-profits, entrepreneurs, and women in business through mentorship and advocacy.\n\nAs a mother and mentor, she brings empathy and purpose into every decision, helping Noura Homes evolve with market demands while preserving the company’s family-centered values.',
  },
  {
    name: 'Asana Askarian',
    role: 'Vice President Of Operations',
    image: imgTeam4,
    imageStyle: {
      transform: 'scale(1.02)',
      objectPosition: 'center 18%',
    } as CSSProperties,
    description:
      'Growing up in a family immersed in construction, Asana developed an early passion for building and operations. Today, she brings strong execution, innovation, and process discipline to Noura Homes, helping maintain quality and efficiency across projects while continuing the family’s commitment to excellence.\n\nHer focus on systems, delivery, and team coordination plays a key role in keeping projects on schedule and aligned with the premium standards clients expect from Noura.',
  },
  {
    name: 'Wayne Jackson',
    role: 'Vice President Of Development',
    image: imgTeam5,
    description:
      'With over 30 years in land development and house construction, Wayne has built a legacy of shaping communities with strong planning, quality execution, and long-term value. His leadership spans community-building, sustainability initiatives, and a consistent focus on delivering homes and neighborhoods families can truly thrive in.\n\nFrom early-stage land strategy to final delivery, Wayne brings a practical, experience-driven approach that strengthens project outcomes and supports sustainable growth.',
  },
  {
    name: 'Mohammad Askarpoor',
    role: 'Vice President Of Construction',
    image: imgTeam6,
    description:
      'Mohammad brings advanced engineering expertise and practical site leadership to his role in construction management. With a Master’s degree from UBC, he is known for technical precision, attention to detail, and implementing practical solutions that improve project quality, efficiency, and on-site coordination.\n\nHis hands-on leadership style helps teams maintain safety, consistency, and craftsmanship throughout construction, ensuring each home is delivered to the highest standard.',
  },
];

export default function OurStoryPage() {
  return (
    <div className="bg-background">
      <section id="home" className="relative min-h-[900px] pt-[82px] overflow-hidden">
        <img src={imgHero} alt="Our story hero" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto flex min-h-[818px] w-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <h1 className="max-w-[612px] text-center font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-white">
            A Family Legacy of Craftsmanship, Luxury, and Trust
          </h1>
        </div>
      </section>

      <section id="our-story" className="w-full bg-background py-14">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 px-8 lg:grid-cols-[1fr_441px] lg:gap-16 lg:px-16">
          <div>
          <h2 className="font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">Our Story</h2>
          <div className="mt-6 max-w-[780px] space-y-10 text-[16px] leading-[1.7] text-primary">
            <p>
              For over three decades, Noura Homes has been built by a family for families. From Coquitlam to
              communities across the Lower Mainland, our homes are designed to feel deeply personal and endure for
              generations.
            </p>
            <p>
              Founded by Jamileh and Hooshang Askarian, Noura Homes began as a vision to create residences that honor
              both beauty and structural integrity. What started as an immigrant dream has become a multi-generational
              company known for detail-driven luxury and long-standing client relationships.
            </p>
            <p className="max-w-[980px]">
              Every home reflects the same promise: thoughtful design, uncompromising quality, and a process rooted in
              trust. We build spaces that adapt to the way families live now while standing strong for what comes next.
            </p>
          </div>
          </div>
          <aside className="border border-[#d9d9d9] bg-white p-10">
          <div className="space-y-10">
            <div>
              <p className="font-display text-[56px] leading-[1.4] tracking-[-0.56px] text-secondary">30+</p>
              <p className="text-[24px] leading-[1.5] text-primary">Years of Legacy Experience</p>
            </div>
            <div>
              <p className="font-display text-[56px] leading-[1.4] tracking-[-0.56px] text-secondary">12+</p>
              <p className="text-[24px] leading-[1.5] text-primary">Communities Served</p>
            </div>
            <div>
              <p className="font-display text-[56px] leading-[1.4] tracking-[-0.56px] text-secondary">1000+</p>
              <p className="text-[24px] leading-[1.5] text-primary">Custom Homes Built</p>
            </div>
          </div>
          </aside>
        </div>
      </section>

      <section className="w-full bg-background py-16">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-8 lg:grid-cols-[583px_1fr] lg:gap-16 lg:px-16">
          <img src={imgStorySide} alt="Our philosophy" className="h-[508px] w-full object-cover" />
          <div>
          <h2 className="font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">Our Philosophy</h2>
          <div className="mt-6 space-y-6 text-[16px] leading-[1.5] text-primary">
            <p>
              At Noura Homes, building homes is deeply personal. We believe true luxury lies in the details; in the
              precision of our craftsmanship; in the care behind every design choice; and in the trust we build with
              every client.
            </p>
            <p>Our philosophy is simple:</p>
            <ul className="space-y-3">
              <li>
                <strong>Craftsmanship with Purpose:</strong> Every element is built to last, where aesthetics and
                performance work in harmony.
              </li>
              <li>
                <strong>Personalization at Every Step:</strong> From floor plan to finish, every home reflects your
                lifestyle, taste, and aspirations.
              </li>
              <li>
                <strong>An Extraordinary Experience:</strong> We don’t just deliver homes; we guide families through a
                seamless, transparent, and inspiring journey.
              </li>
            </ul>
            <p>
              Every home reflects the same promise: thoughtful design, uncompromising quality, and a process rooted in
              trust. We build spaces that adapt to the way families live now while standing strong for what comes next.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[72px]">
        <div className="mx-auto w-full max-w-[1600px] space-y-14 px-8 lg:px-16">
          <div className="flex items-center gap-6">
            <img src={imgMission} alt="Mission" className="h-[102px] w-[102px] object-cover" />
            <div>
              <h3 className="font-display text-[40px] leading-[1.2] tracking-[-0.4px] text-[#2f446e]">MISSION</h3>
              <p className="text-[16px] leading-[1.5] text-primary">
                Connecting families and delivering unbeatable customer satisfaction is our passion, our clients trust us
                to craft unique homes that meet their specific needs. We are sincerely committed to delivering the
                highest level of excellence in every home we build.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={imgVision} alt="Vision" className="h-[102px] w-[102px] object-cover" />
            <div>
              <h3 className="font-display text-[40px] leading-[1.2] tracking-[-0.4px] text-[#2f446e]">VISION</h3>
              <p className="text-[16px] leading-[1.5] text-primary">
                Mastering the art of creating safe and stable spaces where individuals can nest in the comfort of
                their home, allowing them to thrive in their community. We will continually improve the inclusivity and
                sustainability of these communities using innovative construction practices for generations to come.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <img src={imgSocial} alt="Social Responsibility" className="h-[102px] w-[102px] object-cover" />
            <div>
              <h3 className="font-display text-[40px] leading-[1.2] tracking-[-0.4px] text-[#2f446e]">
                SOCIAL RESPONSIBILITY
              </h3>
              <p className="text-[16px] leading-[1.5] text-primary">
                At Noura, we believe every person and every company is responsible for making a better world. Therefore,
                we honour ethical values and respect people, communities and the natural environment. We work seriously
                to build energy-efficient homes for a healthier environment and we place a high value on listening to
                our community and responding to their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[721px] relative overflow-hidden">
        <img src={imgNouraFamily} alt="Noura Family" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <h2 className="max-w-[612px] text-center font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-white">
            Noura Family
          </h2>
        </div>
      </section>

      <section className="w-full bg-primary py-16">
        <div className="mx-auto w-full max-w-[1600px] px-8 lg:px-16">
          <h2 className="text-center font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-white">Meet Our Executive Team</h2>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article key={`${member.name}-${index}`} className="flex flex-col items-center gap-6 text-center text-white">
              <div className="relative h-[452px] w-full overflow-hidden group">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`h-full w-full object-cover object-top ${member.imageClassName ?? ''}`}
                  style={member.imageStyle}
                />
                <div className="absolute inset-0 translate-y-full bg-primary/92 px-5 py-5 text-left transition-transform duration-300 ease-out group-hover:translate-y-0 overflow-y-auto">
                  <div className="space-y-3 text-[14px] leading-[1.5] text-white/95">
                    {member.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-display text-[32px] leading-[1.2] tracking-[-0.32px]">{member.name}</h3>
                <p className="mt-2 text-[20px] leading-[1.2] tracking-[-0.2px]">{member.role}</p>
              </div>
            </article>
          ))}
          </div>
          <div className="mt-16 flex justify-center">
            <button className="bg-white px-[18px] py-[10px] text-[16px] font-medium leading-[1.5] text-primary">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

      <section className="w-full h-[600px] relative overflow-hidden bg-black">
        <img src={imgCulture} alt="Our culture" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center justify-center px-8 lg:px-16">
          <div className="max-w-[648px] text-center text-white">
            <h2 className="font-display text-[48px] leading-[1.2] tracking-[-0.48px]">Our Culture</h2>
            <p className="mt-[17px] text-[16px] leading-[1.5]">
              At Noura Homes, we’re more than a team; we’re a family. Collaboration, respect, and pride in our craft
              guide everything we do. We celebrate milestones together and share the joy of seeing each client’s dream
              home come to life.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 lg:gap-20 px-8 lg:grid-cols-[693px_1fr] lg:px-16">
          <img src={imgCta} alt="Interior showcase" className="h-[606px] w-full object-cover" />
          <div>
            <h2 className="font-display text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
              Your dream home begins with a conversation.
            </h2>
            <p className="mt-4 text-[16px] leading-[1.5] text-primary">
              Whether you’re ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help. Share your goals and your vision; together, we’ll transform
              your ideas into a home that feels unmistakably yours.
            </p>
            <button className="mt-9 inline-flex items-center gap-2 border border-primary px-[18px] py-[10px] text-[16px] font-medium leading-[1.5] text-primary">
              Lets Connect
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
