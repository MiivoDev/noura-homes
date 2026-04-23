import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

const defaultPlayButtonClass =
  'h-14 w-14 lg:h-20 lg:w-20 rounded-full border border-white/70 bg-white/20 backdrop-blur-[1px] flex items-center justify-center text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

const carouselPlayButtonClass =
  'h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/70 bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80';

type TestimonialVideoMediaProps = {
  image: string;
  author: string;
  /** Self-hosted MP4 in `public/` (e.g. `/testimonials/alex.mp4`). Used when set and no `youtubeId`. */
  videoSrc?: string;
  startSeconds?: number;
  /** YouTube embed; used when set (takes priority over `videoSrc` so playback works while files are missing). */
  youtubeId?: string;
  /** @deprecated Use `startSeconds` */
  youtubeStartSeconds?: number;
  className?: string;
  /** Use `carousel` to match the homepage card sizing, or `featured` (default) for the testimonials page. */
  variant?: 'featured' | 'carousel';
};

export function TestimonialVideoMedia({
  image,
  author,
  videoSrc,
  startSeconds: startSecondsProp,
  youtubeId,
  youtubeStartSeconds,
  className = '',
  variant = 'featured',
}: TestimonialVideoMediaProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const start = startSecondsProp ?? youtubeStartSeconds ?? 0;
  const hasYoutube = Boolean(youtubeId);
  const hasFile = Boolean(videoSrc);
  const hasVideo = hasYoutube || hasFile;
  const youtubeSrc =
    hasYoutube && youtubeId
      ? `youtube/${youtubeId}${start > 0 ? `?start=${start}` : ''}`
      : null;

  const playButtonClass = variant === 'carousel' ? carouselPlayButtonClass : defaultPlayButtonClass;
  const playIconClass =
    variant === 'carousel' ? 'h-7 w-7 md:h-10 md:w-10 ml-1' : 'h-7 w-7 lg:h-10 lg:w-10 ml-1';

  useEffect(() => {
    setVideoPlaying(false);
  }, [videoSrc, youtubeId]);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`.trim()}>
      {videoPlaying && hasYoutube && youtubeSrc ? (
        <MediaPlayer
          key={`${youtubeId}-${start}`}
          title={`${author} testimonial video`}
          src={youtubeSrc}
          className="absolute inset-0 z-20 h-full w-full"
          autoPlay
          playsInline
        >
          <MediaProvider />
          <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
      ) : videoPlaying && hasFile && videoSrc && !hasYoutube ? (
        <video
          key={videoSrc}
          className="absolute inset-0 z-20 h-full w-full object-cover"
          src={videoSrc}
          poster={image}
          controls
          playsInline
          autoPlay
          preload="metadata"
          onLoadedMetadata={(e) => {
            if (start > 0) e.currentTarget.currentTime = start;
          }}
        />
      ) : null}

      {!videoPlaying && (
        <>
          <img src={image} alt={`${author} testimonial`} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          {hasVideo ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
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
