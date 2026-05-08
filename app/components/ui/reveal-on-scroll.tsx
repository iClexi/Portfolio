"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = ".animated-entry";

function cleanInlineAnimationStyles(node: HTMLElement) {
  try {
    node.style.opacity = "";
    node.style.transform = "";
    node.style.filter = "";
    node.style.transition = "";
    node.style.webkitTransform = "";
    node.style.webkitFilter = "";
  } catch (e) {}
}

export function RevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              cleanInlineAnimationStyles(entry.target);
            }
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const tracked = new WeakSet<Element>();
    const registerNodes = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      nodes.forEach((node, index) => {
        if (tracked.has(node)) {
          return;
        }
        tracked.add(node);
        node.classList.add("reveal-on-scroll");
        cleanInlineAnimationStyles(node);
        if (!node.style.getPropertyValue("--reveal-delay")) {
          node.style.setProperty("--reveal-delay", `${Math.min(index * 36, 360)}ms`);
        }
        observer.observe(node);
      });
    };

    registerNodes();

    const mutationObserver = new MutationObserver(() => {
      registerNodes();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
