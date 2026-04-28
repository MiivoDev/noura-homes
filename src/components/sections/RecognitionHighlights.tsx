import type { ReactNode } from 'react';

const articleUrl =
  'https://mapleridgenews.com/2026/03/09/ridge-meadows-chambers-honours-excellent-businesses-at-2026-awards-night/';
const awardsPageUrl = '/about/awards-associations-community';

function Highlight({
  text,
}: {
  text: ReactNode;
}) {
  return (
    <div className="flex items-start gap-5">
      <img
        src="/home/recognition-award-icon.svg"
        alt=""
        aria-hidden
        className="h-[72px] w-[72px] shrink-0 object-contain opacity-90"
      />
      <div className="space-y-2 text-primary">
        <p className="text-[18px] leading-[1.45]">{text}</p>
        <div className="flex items-center gap-4 text-[15px] font-bold">
          <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary/80">
            Read Article
          </a>
          <a href={awardsPageUrl} className="underline hover:text-primary/80">
            View Awards
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RecognitionHighlights() {
  return (
    <section className="bg-[#fffef7] py-12">
      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:gap-12 lg:px-16">
        <Highlight text={<><span>Proud recipient of the 2026 </span><strong>Environmental Leader Award</strong><span>, as featured in Maple Ridge News</span></>} />
        <div className="hidden lg:block lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[96px] lg:w-px lg:-translate-x-1/2 lg:-translate-y-1/2 lg:bg-primary/20" />
        <Highlight text={<><span>Recognized by the </span><strong>Ridge Meadows Chamber of Commerce</strong><span> and featured in Maple Ridge News</span></>} />
      </div>
    </section>
  );
}
