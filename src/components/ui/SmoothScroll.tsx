import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

/**
 * In-page hash links (e.g. #our-projects) are handled here so they animate with Lenis
 * instead of jumping past the fixed navbar.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    const onClickCapture = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const hash = a.getAttribute('href');
      if (!hash || hash.length < 2) return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
        return;
      }

      const id = hash.replace(/^#/, '');
      if (!id || !document.getElementById(id)) return;

      e.preventDefault();
      lenis.scrollTo(hash, { offset: 0 });
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    document.addEventListener('click', onClickCapture, true);
    requestAnimationFrame(raf);

    return () => {
      document.removeEventListener('click', onClickCapture, true);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
