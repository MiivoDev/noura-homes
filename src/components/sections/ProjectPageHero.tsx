import { cn } from '@/src/lib/utils';

export type ProjectPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  ctaHref?: string;
  ctaLabel?: string;
  showCta?: boolean;
  /** Scrim over the image (e.g. `bg-black/30` for a darker hero) */
  overlayClassName?: string;
  extraTitleClassName?: string;
  /** Some pages use more bottom padding (e.g. custom home case studies) */
  bottomPaddingClass?: 'pb-12' | 'pb-14';
};

const titleBaseClass =
  'min-w-0 max-w-full font-display leading-[1.2] tracking-[-0.01em] text-primary ' +
  'text-[38px] md:text-[44px] lg:text-[56px]';

const ctaClass =
  'inline-flex items-center justify-center bg-secondary px-[18px] py-[10px] text-[16px] font-medium text-white transition-colors hover:bg-secondary/90';

/**
 * Project detail hero: full-bleed image and large display title. Optional CTA
 * (e.g. “Register Now” for Marble Hill & Emerald Ridge only).
 */
export function ProjectPageHero({
  imageSrc,
  imageAlt,
  title,
  ctaHref = '#contact',
  ctaLabel = 'Register Now',
  showCta = false,
  overlayClassName = 'bg-black/20',
  extraTitleClassName,
  bottomPaddingClass = 'pb-12',
}: ProjectPageHeroProps) {
  return (
    <section className="relative min-h-[460px] overflow-hidden pt-[82px] sm:min-h-[540px] md:min-h-[700px] lg:min-h-[885px]">
      <img src={imageSrc} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className={cn('absolute inset-0', overlayClassName)} />
      <div
        className={cn(
          'relative z-10 mx-auto flex min-h-[378px] w-full max-w-[1600px] items-end px-5 sm:min-h-[458px] md:min-h-[618px] lg:min-h-[803px] lg:px-16',
          bottomPaddingClass,
        )}
      >
        <div className="w-fit max-w-[calc(100vw-2.5rem)] bg-background px-6 py-6 text-primary md:max-w-[680px] md:px-8 md:py-8 lg:ml-[40px] lg:max-w-[920px] lg:px-[40px] lg:py-[36px]">
          <div className={cn('flex flex-col items-start', showCta ? 'gap-6' : 'gap-0')}>
            <h1 className={cn('min-w-0', titleBaseClass, extraTitleClassName)}>{title}</h1>
            {showCta ? (
              <a href={ctaHref} className={ctaClass}>
                {ctaLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
