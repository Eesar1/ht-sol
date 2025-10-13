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
      className="relative z-10 scroll-mt-24 overflow-hidden  pt-6 lg:pt-12"
      style={{
        background:
          "linear-gradient(180deg, #0A0909 0%, #0A0909 55%, rgba(0, 0, 0, 0.85) 78%, #000000 100%)",
      }}
    >
      <div className="section-container">
        <div
          className="relative px-6 py-12 "
          data-animate="fade-up"
        >
           <svg
  className="pointer-events-none absolute left-1/2 top-0 -z-20 hidden md:block -translate-x-1/2 w-[min(1600px,150%)]"
  viewBox="0 0 1600 260"
  aria-hidden
>
  <defs>
    {/* gradient: 135deg, #075b65 → #00838a → #328a99 */}
    <linearGradient id="about-stroke" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"  stopColor="#075b65" />
      <stop offset="50%" stopColor="#00838a" />
      <stop offset="100%" stopColor="#328a99" />
    </linearGradient>
  </defs>

  <text
    x="50%" y="60%"
    textAnchor="middle"
    fontFamily="Poppins, var(--font-display), sans-serif"
    fontSize="220"               /* ≈ text-[8rem]–[10rem] */
    style={{ letterSpacing: "0em", textTransform: "uppercase" }}
    fill="transparent"
    stroke="url(#about-stroke)"
    strokeWidth="1"              /* thinner outline; try 0.8–1.2 */
  >
    Technologies
  </text>
</svg>
          <div className="space-y-8 text-center pt-29">
            <div className="space-y-4">

              <h2 className="section-heading mx-auto max-w-3xl text-white">
                Technologies we use
              </h2>
            </div>
          </div>
          <div className="mt-10 ">
            <div className="relative flex w-[200%] items-center gap-6">
              <div className="flex w-full items-center gap-6 animate-tech-marquee whitespace-nowrap">
                {marqueeItems.map((tech, index) => (
                  <TechBadge key={`${tech.name}-${index}`} label={tech.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-b from-transparent via-black/80 to-black blur-3xl opacity-90"
      />
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
