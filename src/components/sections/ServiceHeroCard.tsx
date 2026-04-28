import type { ReactNode } from 'react';

type ServiceHeroCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  overlayClassName?: string;
  imageClassName?: string;
};

export default function ServiceHeroCard({
  title,
  imageSrc,
  imageAlt,
  children,
  overlayClassName = 'bg-black/20',
  imageClassName = 'object-cover',
}: ServiceHeroCardProps) {
  return (
    <section className="bg-background pt-[82px]">
      <div className="relative mx-auto w-full max-w-[1600px] min-h-[640px] overflow-hidden lg:min-h-[818px]">
        <img src={imageSrc} alt={imageAlt} className={`absolute inset-0 h-full w-full ${imageClassName}`} />
        <div className={`absolute inset-0 ${overlayClassName}`} />

        <div className="relative z-10 flex min-h-[640px] items-end lg:min-h-[818px]">
          <div className="mb-5 ml-5 mr-5 bg-background px-6 py-6 text-primary md:mb-8 md:ml-8 md:max-w-[540px] md:px-8 md:py-8 lg:mb-[35px] lg:ml-[35px] lg:w-[504px] lg:px-[34px] lg:py-[32px]">
            <h1 className="font-display text-[34px] leading-[1.2] tracking-[-0.4px] md:text-[40px]">{title}</h1>
            <div className="mt-[11px] space-y-4 text-[16px] leading-[1.5] text-primary/90">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
