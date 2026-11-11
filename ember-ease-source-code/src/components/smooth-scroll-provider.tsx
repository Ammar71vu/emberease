"use client";

import * as React from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll provider.
 * Adds buttery smooth momentum scrolling to the entire page.
 * Inspired by aaghaz.ai which uses the same library.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Handle anchor link clicks for smooth scroll to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && href.length > 1) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) {
            lenis.scrollTo(el as HTMLElement, {
              offset: -80,
              duration: 1.5,
            });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
