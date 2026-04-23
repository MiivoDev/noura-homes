import type { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

const shell = 'mx-auto grid w-full max-w-[1600px] grid-cols-1 px-8 lg:px-16';

const layoutGrid = {
  /** Image in first (wide) column, copy second — on mobile, image is already first in DOM. */
  imageStart: 'items-start gap-12 lg:grid-cols-[1.15fr_1fr]',
  /**
   * Copy left / image right on `lg+`. On mobile, image is first in DOM and stacks above
   * the title and body (explicit `row-start` so order does not depend on `order` + grid).
   */
  imageEnd: 'items-start gap-12 lg:grid-cols-[1fr_1.15fr]',
} as const;

type Layout = keyof typeof layoutGrid;

type ProjectImageTextGridProps = {
  layout: Layout;
  image: ReactNode;
  children: ReactNode;
  /** Merged with layout defaults, e.g. `items-center gap-10 lg:grid-cols-[1fr_583px] lg:gap-16` */
  className?: string;
  textClassName?: string;
};

export function ProjectImageTextGrid({ layout, image, children, className, textClassName }: ProjectImageTextGridProps) {
  if (layout === 'imageEnd') {
    return (
      <div className={cn(shell, layoutGrid.imageEnd, className)}>
        {image}
        <div className={cn('row-start-2 text-primary lg:col-start-1 lg:row-start-1', textClassName)}>{children}</div>
      </div>
    );
  }
  return (
    <div className={cn(shell, layoutGrid.imageStart, className)}>
      {image}
      <div className={cn('text-primary', textClassName)}>{children}</div>
    </div>
  );
}

/** Standard “image on the right on desktop” image slot — add height overrides as needed. */
export const projectImageEndSlotClass = 'h-[330px] w-full object-cover lg:col-start-2 lg:row-start-1 lg:h-[453px]';

/** Past custom home case-study feature row (`1fr_583px` on `lg+`). */
export const projectImageEndCaseStudyClass =
  'h-[360px] w-full object-cover lg:col-start-2 lg:row-start-1 lg:h-[420px]';
