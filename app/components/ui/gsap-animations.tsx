"use client";

import { useEffect } from "react";
import gsap from "gsap";

const REVEAL_SELECTOR = ".animated-entry";

function cleanInlineAnimationStyles(node: HTMLElement) {
  try {
    node.style.opacity = "";
    node.style.transform = "";
    node.style.filter = "";
    node.style.transition = "";
  } catch (e) {}
}

export function GsapAnimations() {
  useEffect(() => {
    gsap.registerEffect({
      name: "fadeIn",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.to(targets, { opacity: 1, duration: 0.6, ease: "power2.out" });
      },
      defaults: { opacity: 0 },
    });

    gsap.registerEffect({
      name: "slideUp",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        });
      },
      defaults: { opacity: 0, y: 20 },
    });

    gsap.registerEffect({
      name: "scaleIn",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.to(targets, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
      },
      defaults: { opacity: 0, scale: 0.8 },
    });

    gsap.registerEffect({
      name: "rotateIn",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.to(targets, {
          opacity: 1,
          rotation: 0,
          duration: 0.9,
          ease: "back.out",
        });
      },
      defaults: { opacity: 0, rotation: -15 },
    });

    const animationEffects = ["slideUp", "scaleIn", "rotateIn", "fadeIn"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const node = entry.target as HTMLElement;
            cleanInlineAnimationStyles(node);
            const effect = animationEffects[idx % animationEffects.length];
            gsap.effects[effect as keyof typeof gsap.effects]?.(node);
            observer.unobserve(node);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    let nodeCount = 0;
    const tracked = new WeakSet<Element>();
    const registerNodes = () => {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
      nodes.forEach((node) => {
        if (tracked.has(node)) return;
        tracked.add(node);
        cleanInlineAnimationStyles(node);
        const effect = animationEffects[nodeCount % animationEffects.length];
        nodeCount++;
        node.style.opacity = "0";
        if (effect === "slideUp") {
          node.style.transform = "translateY(20px)";
        } else if (effect === "scaleIn") {
          node.style.transform = "scale(0.8)";
        } else if (effect === "rotateIn") {
          node.style.transform = "rotate(-15deg)";
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
