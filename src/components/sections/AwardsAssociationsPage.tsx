import Awards from './Awards';
import Associations from './Associations';

const heroImage = 'https://www.figma.com/api/mcp/asset/88e7d7e6-066a-46f6-b1fa-a602c79a0ef1';
const communityImage = 'https://www.figma.com/api/mcp/asset/59158fca-ae64-4ba2-85c7-ebd662322159';

const charityLogos = [
  'https://www.figma.com/api/mcp/asset/37b5b2ea-a56d-4d3c-b3af-ed3970c8894b',
  'https://www.figma.com/api/mcp/asset/9fcc7507-8193-4514-8f85-eb5be50c62fb',
  'https://www.figma.com/api/mcp/asset/6afc07d8-5e62-4c4b-989f-4100378039af',
  'https://www.figma.com/api/mcp/asset/8738fce6-3e97-4476-88e9-2ce694d469bc',
  'https://www.figma.com/api/mcp/asset/0e2230d5-8289-4f3b-b103-fc1a743cd381',
  'https://www.figma.com/api/mcp/asset/524ce264-d4c1-42ce-a536-737a5a518ebc',
  'https://www.figma.com/api/mcp/asset/862f7f58-f38e-4c18-84cb-cf361249c2b3',
  '/community-logo-firefighters.png',
  '/community-logo-meadowridge.png',
  'https://www.figma.com/api/mcp/asset/57b097b1-f875-42c9-ba73-24dec86c4414',
  'https://www.figma.com/api/mcp/asset/343dd395-7972-437e-be76-594c82ec4e33',
  'https://www.figma.com/api/mcp/asset/0dd586d1-9eb9-4051-9fb3-ff275a7751cb',
  'https://www.figma.com/api/mcp/asset/e7a62761-71ea-47e2-9080-4989efdb0b0d',
  '/community-logo-smiling-creek.png',
  'https://www.figma.com/api/mcp/asset/4dc0d30c-a47d-4260-8ab4-92a286af21f3',
  'https://www.figma.com/api/mcp/asset/923aa9b0-2fa6-43b2-89f1-f703ec1ff08d',
  'https://www.figma.com/api/mcp/asset/b1c20f45-25f3-4d77-962e-b67c97498183'
];

export default function AwardsAssociationsPage() {
  const displayedCharityLogos = charityLogos.slice(0, 14);
  const charityLogosRow1 = displayedCharityLogos.slice(0, 7);
  const charityLogosRow2 = displayedCharityLogos.slice(7, 14);

  return (
    <div className="bg-background">
      <section className="relative min-h-[760px] md:min-h-[900px] overflow-hidden">
        <img src={heroImage} alt="About Noura Homes" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 min-h-[760px] md:min-h-[900px] flex items-center justify-center pt-[82px]">
          <h1 className="max-w-[680px] text-center font-display text-[42px] md:text-[56px] leading-[1.15] text-white tracking-[-0.5px]">
            A Family Legacy of Craftsmanship, Luxury, and Trust
          </h1>
        </div>
      </section>

      <section id="awards-associations-and-community-involvements">
        <Awards />
      </section>

      <Associations />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <img src={communityImage} alt="Noura Homes Community Fund" className="w-full h-full min-h-[340px] object-cover" />
          <div className="text-primary">
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.15]">Noura Homes Community Fund</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              In 2017, Hooshang and Jamileh established a donor-advised fund with the Coquitlam Foundation in
              celebration of Noura's 25th Anniversary. The fund's purpose is to improve the quality of life and provide
              assistance to residents in Tri-Cities communities by providing financial assistance.
            </p>
            <ul className="mt-5 list-disc pl-5 space-y-2 text-[15px] md:text-[16px] leading-[1.6]">
              <li>For and in support of women and children in need and requiring shelter, clothing and food or other support services</li>
              <li>For and in support of those with mental health challenges</li>
              <li>To students through scholarships for attendance at post-secondary institutions or career training programs</li>
              <li>For charitable programs that address a need of residents in the Tri-Cities communities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="text-center font-display text-[34px] md:text-[48px] leading-[1.15] text-primary mb-10 md:mb-14">
            Charities &amp; Community Groups supported by Noura Homes
          </h2>
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
              {charityLogosRow1.map((logo, index) => (
                <div key={`row1-${index}`} className="w-full h-[80px] flex items-center justify-center">
                  <img src={logo} alt="Community partner logo" className="max-h-[72px] w-auto object-contain" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
              {charityLogosRow2.map((logo, index) => (
                <div key={`row2-${index}`} className="w-full h-[80px] flex items-center justify-center">
                  <img src={logo} alt="Community partner logo" className="max-h-[72px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <img src="/Custom Build.png" alt="Interior" className="w-full h-full min-h-[340px] object-cover" />
          <div className="text-primary">
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6]">
              Whether you're ready to design a custom home, exploring renovation options, or simply want to learn more
              about our process, our team is here to help.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center border border-primary px-5 py-2.5 text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Lets Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
