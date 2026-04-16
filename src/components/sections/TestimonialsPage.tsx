import { Play } from 'lucide-react';

const heroImage = '/testimonials-hero-force-refresh-20260416.png';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

type FeaturedTestimonial = {
  quoteTitle: string;
  quoteBody: string;
  author: string;
  image: string;
  imageLeft: boolean;
};

const featuredTestimonials: FeaturedTestimonial[] = [
  {
    quoteTitle: 'Turning a Vision into a Reality with Unmatched Quality',
    quoteBody:
      'What drew us to Noura Homes was the attention to detail and the ability to customize our home exactly how we wanted it. From initial design to final touches, the team was supportive throughout. They did not just build a house; they built our home. The craftsmanship and care made all the difference.',
    author: 'The Smith Family',
    image: 'https://www.figma.com/api/mcp/asset/b6b9954a-ca0c-449f-8fa1-28402cf16dfe',
    imageLeft: true,
  },
  {
    quoteTitle: 'A Seamless, Fun Experience with Noura Homes',
    quoteBody:
      'Noura stood out among other builders, and when we walked into their homes, we felt the high quality immediately. Despite hearing horror stories about building, the team made the process easy and smooth by explaining every step. We incorporated every wish we had, and they delivered on time. They treated us like family, and we would definitely work with them again.',
    author: 'Sebastian and Stephanie',
    image: 'https://www.figma.com/api/mcp/asset/2d42a8e7-6e39-4af4-9f9c-67e244107863',
    imageLeft: false,
  },
  {
    quoteTitle: 'One-Minute Decision.',
    quoteBody:
      'This was the first house we ever built, and everything was new to us. Noura Construction walked us through the entire process and was incredibly helpful. We saw the quality of their work on another house, and it was a one-minute decision to go with them. Now, it truly feels like our home, like putting on a shoe that perfectly fits. I would absolutely recommend Noura Homes.',
    author: 'Alex',
    image: 'https://www.figma.com/api/mcp/asset/e60b567b-9972-4307-bd19-78d5b37b059c',
    imageLeft: true,
  },
];

const ownerMessages = [
  {
    author: 'Vivian Kerr',
    body: 'I have had the pleasure of owning a Noura Home for the past 10 years. Their homes are beautiful, and their long-term support has been outstanding.',
  },
  {
    author: 'The Jung Family',
    body: 'We are so thrilled that our dream home has been built. Our home is stunning and we love every corner of it.',
  },
  {
    author: 'The Harrisons, Coquitlam',
    body: 'The entire Noura team made our dream home possible. Their attention to detail and willingness to personalize every element set them apart.',
  },
  {
    author: 'K. Lee, Maple Ridge',
    body: 'Noura Homes delivered a home that was beyond what we imagined - the craftsmanship is truly exceptional.',
  },
  {
    author: 'G & S',
    body: 'Everyone we dealt with was knowledgeable, courteous and a genuine pleasure to work with. I know of no other construction company that truly puts quality and customer satisfaction as their #1 priority.',
  },
  {
    author: 'Rosa Rosa',
    body: 'It was a great pleasure to get to know Jamila and her two daughters, Asana and Aram. This builder/seller team is all about making their clients happy, even at the expense of their profit. I was absolutely amazed that in that kind of business people like them still exist.',
  },
  {
    author: 'The Smith Family',
    body: 'What drew us to Noura Homes was the attention to detail and the ability to customize our home exactly how we wanted it. From initial design to final touches, the team was supportive throughout and delivered exceptional quality.',
  },
  {
    author: 'Sebastian and Stephanie',
    body: 'Noura stood out among other builders from day one. The process felt smooth and transparent, every step was explained clearly, and the final home reflected every detail we asked for.',
  },
  {
    author: 'Alex',
    body: 'This was the first house we ever built, and Noura Construction guided us through everything with patience and care. The quality made it a one-minute decision for us, and the result truly feels like home.',
  },
  {
    author: 'Homeowner, Coquitlam',
    body: 'The quality is exceptional and the team truly cares about the details. Their communication, reliability, and craftsmanship made the entire experience stress-free for our family.',
  },
];

function FeaturedRow({ item }: { item: FeaturedTestimonial }) {
  const media = (
    <div className="relative w-full lg:w-[57%] h-[320px] lg:h-[465px] overflow-hidden">
      <img src={item.image} alt={item.author} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-14 w-14 lg:h-20 lg:w-20 rounded-full border border-white/70 bg-white/20 backdrop-blur-[1px] flex items-center justify-center">
          <Play className="h-7 w-7 lg:h-10 lg:w-10 text-white ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );

  const text = (
    <div className="w-full lg:w-[40%] text-primary">
      <img src="/mdi_comma.svg" alt="" aria-hidden="true" className="h-10 w-10" />
      <h3 className="mt-2 text-[22px] font-medium leading-[1.5]">{item.quoteTitle}</h3>
      <p className="mt-4 text-[16px] leading-[1.5] text-primary/95">{item.quoteBody}</p>
      <p className="mt-6 text-[30px] leading-[1.3]">{item.author}</p>
    </div>
  );

  return <div className="flex flex-col lg:flex-row items-center justify-between gap-12">{item.imageLeft ? <>{media}{text}</> : <>{text}{media}</>}</div>;
}

export default function TestimonialsPage() {
  const loopingOwnerMessages = [...ownerMessages, ...ownerMessages];

  return (
    <div className="bg-background">
      <section className="relative min-h-[820px] pt-[82px] overflow-hidden">
        <img
          src={heroImage}
          alt="Happy family in their home"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[820px] px-8 lg:px-16 flex items-center justify-center">
          <h1 className="-translate-y-5 font-display text-[46px] md:text-[64px] leading-[1.08] tracking-[-0.6px] text-white text-center">
            What Our Clients Love
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-primary text-center">Testimonials</h2>
          <div className="mt-14 space-y-20">
            {featuredTestimonials.map((item) => (
              <div key={`${item.author}-${item.quoteTitle}`}>
                <FeaturedRow item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15] text-primary text-center">More Messages from Owners</h2>
          <div className="mt-12 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden">
            <div className="flex gap-[30px] w-max animate-marquee">
              {loopingOwnerMessages.map((item, index) => (
                <article key={`${item.author}-${index}`} className="w-[414px] h-[340px] border border-primary bg-white px-[27px] py-6 flex flex-col shrink-0">
                  <img src="/mdi_comma.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                  <p className="mt-3 text-[16px] leading-[1.5] text-primary/95 flex-1 pr-1">{item.body}</p>
                  <p className="mt-7 text-[24px] leading-[1.4] text-primary">{item.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[600px] overflow-hidden">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-[1600px] mx-auto min-h-[600px] px-8 lg:px-16 flex items-center justify-center">
          <div className="max-w-[790px] text-center text-white">
            <h2 className="font-display text-[40px] md:text-[48px] leading-[1.15]">Your dream home begins with a conversation.</h2>
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
