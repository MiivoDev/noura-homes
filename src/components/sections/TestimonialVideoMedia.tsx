import { useState } from 'react';
import { Play } from 'lucide-react';

const defaultPlayButtonClass =
  'h-14 w-14 lg:h-20 lg:w-20 rounded-full border border-white/70 bg-white/20 backdrop-blur-[1px] flex items-center justify-center text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

const carouselPlayButtonClass =
  'h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

type TestimonialVideoMediaProps = {
  image: string;
  author: string;
  youtubeId?: string;
  youtubeStartSeconds?: number;
  className?: string;
  /** Use `carousel` to match the homepage card sizing, or `featured` (default) for the testimonials page. */
  variant?: 'featured' | 'carousel';
};

export function TestimonialVideoMedia({
  image,
  author,
  youtubeId,
  youtubeStartSeconds,
  className = '',
  variant = 'featured',
}: TestimonialVideoMediaProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const hasVideo = Boolean(youtubeId);
  const start = youtubeStartSeconds ?? 0;
  const embedSrc =
    hasVideo && youtubeId
      ? `https://www.youtube.com/embed/${youtubeId}?start=${start}&autoplay=1&rel=0&modestbranding=1`
      : null;

  const playButtonClass = variant === 'carousel' ? carouselPlayButtonClass : defaultPlayButtonClass;
  const playIconClass =
    variant === 'carousel' ? 'h-7 w-7 md:h-10 md:w-10 ml-1' : 'h-7 w-7 lg:h-10 lg:w-10 ml-1';

  return (
    <div className={`relative overflow-hidden bg-black ${className}`.trim()}>
      {hasVideo && videoPlaying && embedSrc ? (
        <iframe
          title={`${author} testimonial video`}
          src={embedSrc}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <>
          <img src={image} alt={`${author} testimonial`} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          {hasVideo ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setVideoPlaying(true)}
                className={playButtonClass}
                aria-label="Play testimonial video"
              >
                <Play className={playIconClass} fill="currentColor" />
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
