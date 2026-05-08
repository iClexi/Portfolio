"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const PREVENT_SELECTOR = "[data-lenis-prevent]";
const HEADER_OFFSET = 82;

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.1,
      prevent: (node) =>
        node instanceof Element && node.closest(PREVENT_SELECTOR) !== null,
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      event.preventDefault();
      window.history.pushState(null, "", href);

      const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      lenis.scrollTo(Math.max(0, top));
    };

    const stopLenis = () => {
      lenis.stop();
    };

    const startLenis = () => {
      lenis.scrollTo(window.scrollY, { immediate: true });
      lenis.start();
    };

    let frameId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    frameId = window.requestAnimationFrame(raf);
    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("rh-stage-lock", stopLenis);
    window.addEventListener("rh-stage-unlock", startLenis);

    const initialHash = window.location.hash;
    if (initialHash) {
      const section = document.querySelector<HTMLElement>(initialHash);
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        lenis.scrollTo(Math.max(0, top), { immediate: true });
      }
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("rh-stage-lock", stopLenis);
      window.removeEventListener("rh-stage-unlock", startLenis);
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return null;
}
