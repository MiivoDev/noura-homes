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

const DEFAULT_HEADING = 'More Messages from Owners';

type MoreMessagesFromOwnersProps = {
  /** Testimonials page uses the default; project pages use "Messages from Owners". */
  heading?: string;
};

export default function MoreMessagesFromOwners({ heading = DEFAULT_HEADING }: MoreMessagesFromOwnersProps) {
  const loopingOwnerMessages = [...ownerMessages, ...ownerMessages];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        <h2 className="font-display text-[28px] md:text-[40px] lg:text-[48px] leading-[1.15] text-primary text-center">{heading}</h2>
        <div className="mt-12 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] overflow-hidden">
          <div className="flex gap-[30px] w-max animate-marquee">
            {loopingOwnerMessages.map((item, index) => (
              <article
                key={`${item.author}-${index}`}
                className="w-[414px] h-[340px] border border-primary bg-white px-[27px] py-6 flex flex-col shrink-0"
              >
                <img src="/mdi_comma.svg" alt="" aria-hidden="true" className="h-5 w-5" />
                <p className="mt-3 text-[16px] leading-[1.5] text-primary/95 flex-1 pr-1">{item.body}</p>
                <p className="mt-7 text-[24px] leading-[1.4] text-primary">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
