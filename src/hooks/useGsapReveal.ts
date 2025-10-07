"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";

type UseGsapRevealOptions = {
  trigger?: string;
  stagger?: number;
  y?: number;
  duration?: number;
};

/**
 * Reveals any `[data-animate="fade-up"]` elements inside the container using GSAP + ScrollTrigger.
 * Keeps the animation declarative in markup so sections stay compact.
 */
export function useGsapReveal(
  container: RefObject<HTMLElement>,
  {
    trigger,
    stagger = 0.12,
    y = 48,
    duration = 1,
  }: UseGsapRevealOptions = {}
) {
  useLayoutEffect(() => {
    const element = container.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(
        "[data-animate='fade-up']",
        element
      );

      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration,
          stagger,
          scrollTrigger: {
            trigger: trigger ? element.querySelector(trigger) ?? element : element,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [container, trigger, stagger, y, duration]);
}
