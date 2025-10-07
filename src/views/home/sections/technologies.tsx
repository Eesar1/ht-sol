"use client";

import { useMemo, useRef } from "react";
import { TECHNOLOGIES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function TechnologiesSection() {
  const marqueeItems = useMemo(
    () => [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES],
    []
  );
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 50, stagger: 0.06 });

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-6 lg:pt-12"
    >
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-6 py-12 backdrop-blur-xl"
          data-animate="fade-up"
        >
          <span className="pointer-events-none absolute left-1/2 top-2 -z-10 hidden w-full -translate-x-1/2 text-center font-display text-[8rem] uppercase tracking-[0.35em] text-white/5 md:block lg:text-[9rem]">
            Technologies
          </span>
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                Technologies we use
              </p>
              <h2 className="section-heading mx-auto max-w-3xl text-white">
                Trusted tools and ecosystems
              </h2>
            </div>
          </div>
          <div className="mt-10 overflow-hidden">
            <div className="relative flex w-[200%] items-center gap-6">
              <div className="flex w-full items-center gap-6 animate-tech-marquee">
                {marqueeItems.map((tech, index) => (
                  <TechBadge key={`${tech.name}-${index}`} label={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechBadge({ label }: { label: string }) {
  return (
    <div className="flex min-w-[140px] flex-col items-center justify-center gap-2 rounded-full border border-white/15 bg-[#04121d]/80 px-6 py-6 text-center shadow-[0_25px_80px_rgba(1,8,18,0.55)] backdrop-blur">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-accent/40 bg-white/5 text-sm font-semibold uppercase tracking-[0.22em] text-accent/85">
        {label.slice(0, 2)}
      </span>
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  );
}
