"use client";

import { useRef } from "react";
import { INDUSTRIES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function IndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 60, stagger: 0.07 });

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-6 lg:pt-12"
    >
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#040e19]/80 px-6 py-14 shadow-[0_30px_90px_rgba(1,8,18,0.55)] backdrop-blur-xl"
          data-animate="fade-up"
        >
          <span className="pointer-events-none absolute left-1/2 top-4 -z-10 hidden w-full -translate-x-1/2 text-center font-display text-[8rem] uppercase tracking-[0.35em] text-white/4 md:block lg:text-[10rem]">
            Industries
          </span>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
              Industries we serve
            </p>
            <h2 className="mt-4 section-heading text-white">
              Sector expertise at scale
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-70">
              Specialized squads support each vertical with research-driven
              design systems and measurable growth programs.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-[28px] border border-white/10">
            <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-5">
              {INDUSTRIES.map((industry, index) => {
                const isLastColumn = (index + 1) % 5 === 0;
                const isLastRow = index >= INDUSTRIES.length - 5;
                const borders = [
                  !isLastColumn ? "sm:border-r border-white/10" : "",
                  !isLastRow ? "border-b border-white/10" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <div
                    key={industry.name}
                    className={[
                      "flex flex-col items-center justify-center gap-4 bg-white/[0.04] px-6 py-10 text-center text-muted-70 transition hover:bg-white/[0.08]",
                      borders,
                    ].join(" ")}
                    data-animate="fade-up"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-accent/35 bg-white/5 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                      {getInitials(industry.name)}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
                      {industry.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getInitials(label: string) {
  return label
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);
}
