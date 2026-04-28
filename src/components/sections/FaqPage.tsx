import { useState } from 'react';
import { Plus } from 'lucide-react';

const heroImage = 'https://www.figma.com/api/mcp/asset/c8a921f9-3e79-4155-b0a1-fe4046cf4e24';
const ctaImage = 'https://www.figma.com/api/mcp/asset/06a918b4-872a-4802-bf2b-a2cec6beb90a';

const faqs = [
  {
    question: 'How long does it take to build a custom home?',
    answer:
      'Most custom homes take anywhere from 8 to 14 months from the time the design is approved and permits are issued until you can move in. The timeline depends on the size and complexity of the home, as well as the time of year and weather conditions.',
  },
  {
    question: 'Can I customize the layout and design of my home?',
    answer:
      'Absolutely! That’s the beauty of building a custom home. We work closely with you to design a layout and select finishes that fit your unique lifestyle and needs.',
  },
  {
    question: 'What is the cost of building a custom home?',
    answer:
      'The cost of building a custom home varies depending on many factors, such as the size, complexity of the design, and the materials and finishes you choose. We provide transparent pricing and work with you to stay within your budget while still delivering the home of your dreams.',
  },
  {
    question: 'Do you do renovations?',
    answer:
      'Yes, we do! Whether you’re looking to update a single room or complete a full-home renovation, we have the experience and expertise to bring your vision to life.',
  },
  {
    question: 'Are your homes energy-efficient?',
    answer:
      'Yes, we prioritize energy efficiency in all our custom home builds. We use the latest building techniques and high-quality materials to ensure your home is as energy-efficient as possible, which can save you money on your utility bills and reduce your environmental impact.',
  },
  {
    question: 'Do you offer a warranty on your homes?',
    answer:
      'Yes, we offer a comprehensive home warranty to give you peace of mind and protect your investment. We stand behind our work and are committed to ensuring our clients are happy with their new homes for years to come.',
  },
  {
    question: 'How do I get started with building a custom home?',
    answer:
      'The first step is to schedule a consultation with us. We’ll discuss your vision for your dream home, your budget, and any other requirements you may have. From there, we’ll guide you through every step of the process, from design to construction and move-in.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-background">
      <section className="relative min-h-[820px] pt-[82px] overflow-hidden">
        <img src={heroImage} alt="Frequently asked questions hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[820px] px-8 lg:px-16 flex items-center justify-center">
          <h1 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-white text-center">
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 flex flex-col items-center">
          <p className="max-w-[1320px] text-center text-[28px] md:text-[32px] leading-[1.5] text-primary">
            At Noura Homes, we believe that building your dream home should be an exciting and transparent experience.
            Here, you&apos;ll find answers to some of the most common questions our clients ask as they begin their
            home-building journey.
          </p>

          <div className="mt-14 w-full max-w-[1132px] space-y-6">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="border border-primary bg-white">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-9 py-7 flex items-center justify-between text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[24px] font-medium leading-[1.5] text-primary">{item.question}</span>
                    <Plus className={`w-6 h-6 text-primary transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                  </button>
                  {isOpen && <div className="px-9 pb-7 text-[16px] leading-[1.6] text-primary/90">{item.answer}</div>}
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] tracking-[-0.48px] text-primary">
              Still have questions? Let&apos;s talk.
            </h2>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center border border-primary px-[18px] py-[10px] text-[16px] font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[520px] px-8 lg:px-16 flex items-center justify-center">
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
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
