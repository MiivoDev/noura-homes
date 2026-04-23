import { featuredTestimonials, type FeaturedTestimonial } from '@/src/data/featuredTestimonials';
import { cn } from '@/src/lib/utils';
import { TestimonialVideoMedia } from './TestimonialVideoMedia';

const heroImage = '/testimonials-hero-force-refresh-20260416.png';
const ctaImage = 'https://www.figma.com/api/mcp/asset/0dddc23f-4fba-4322-b17b-c4adbe41ecd7';

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
  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
      <div
        className={cn(
          'w-full lg:w-[57%] order-1',
          item.imageLeft ? 'lg:order-1' : 'lg:order-2',
        )}
      >
        <TestimonialVideoMedia
          image={item.image}
          author={item.author}
          youtubeId={item.youtubeId}
          youtubeStartSeconds={item.youtubeStartSeconds}
          className="h-[240px] w-full min-h-0 sm:h-[300px] md:h-[380px] lg:h-[465px]"
          variant="featured"
        />
      </div>
      <div
        className={cn(
          'w-full text-primary lg:w-[40%] order-2',
          item.imageLeft ? 'lg:order-2' : 'lg:order-1',
        )}
      >
        <img src="/mdi_comma.svg" alt="" aria-hidden="true" className="h-8 w-8 sm:h-10 sm:w-10" />
        <h3 className="mt-2 text-[20px] font-medium leading-[1.5] sm:text-[22px]">{item.quoteTitle}</h3>
        <p className="mt-4 text-[15px] leading-[1.5] text-primary/95 sm:text-[16px]">{item.quoteBody}</p>
        <p className="mt-5 text-[26px] leading-[1.3] sm:mt-6 sm:text-[30px]">{item.author}</p>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const loopingOwnerMessages = [...ownerMessages, ...ownerMessages];

  return (
    <div className="bg-background">
      <section className="relative min-h-[480px] overflow-hidden bg-zinc-900 pt-[82px] sm:min-h-[540px] md:min-h-[640px] lg:min-h-[820px]">
        {/* object-cover: pin to top of photo on small screens so the crop includes max headroom above the family. */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Happy family in their home"
            className="h-full w-full object-cover object-top sm:object-[50%_14%] md:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[398px] w-full max-w-[1600px] items-center justify-center px-8 sm:min-h-[458px] md:min-h-[558px] lg:min-h-[738px] lg:px-16">
          <h1 className="font-display text-[26px] leading-[1.2] tracking-[-0.48px] text-white sm:text-[32px] md:text-[40px] lg:-translate-y-5 lg:text-[48px] text-center [text-wrap:balance] max-w-[20ch] sm:max-w-none">
            What Our Clients Love
          </h1>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary text-center">Testimonials</h2>
          <div className="mt-10 space-y-12 sm:mt-12 md:mt-14 md:space-y-16 lg:space-y-20">
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
          <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary text-center [text-wrap:balance] px-1">
            More Messages from Owners
          </h2>
          <div className="mt-8 sm:mt-10 md:mt-12 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden">
            <div className="flex w-max animate-marquee gap-4 sm:gap-6 md:gap-[30px] pl-4 pr-2 sm:pl-6 sm:pr-4 md:pl-0 md:pr-0">
              {loopingOwnerMessages.map((item, index) => (
                <article
                  key={`${item.author}-${index}`}
                  className="flex h-[min(300px,70dvh)] w-[min(100vw-2rem,320px)] shrink-0 flex-col border border-primary bg-white px-5 py-5 sm:h-[320px] sm:w-[min(100vw-3rem,380px)] sm:px-[22px] sm:py-6 md:h-[340px] md:w-[414px] md:px-[27px]"
                >
                  <img src="/mdi_comma.svg" alt="" aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" />
                  <p className="mt-2 flex-1 pr-0.5 text-[15px] leading-[1.5] text-primary/95 sm:mt-3 sm:text-[16px]">{item.body}</p>
                  <p className="mt-4 text-[20px] leading-[1.4] text-primary sm:mt-6 sm:text-[24px]">{item.author}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] md:min-h-[560px] lg:min-h-[600px]">
        <img src={ctaImage} alt="Lets connect background" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[420px] w-full max-w-[1600px] items-center justify-center px-8 py-12 sm:min-h-[500px] sm:py-14 md:min-h-[560px] md:py-16 lg:min-h-[600px] lg:px-16">
          <div className="w-full max-w-[790px] text-center text-white">
            <h2 className="font-display text-[24px] leading-[1.2] sm:text-[28px] md:text-[40px] lg:text-[48px] lg:leading-[1.15] [text-wrap:balance]">
              Your dream home begins with a conversation.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] md:text-[16px]">
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
