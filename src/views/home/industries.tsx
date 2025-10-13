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
        <div className="relative px-6 py-14" data-animate="fade-up">
 <svg
  className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden md:block -translate-x-1/2 w-[min(1600px,150%)]"
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
    Industries
  </text>
</svg>
          <div className="mx-auto py-10 max-w-3xl text-center">

            <h2 className="mt-20 section-heading text-white">
              Industries we serve
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quo, cum aliquid quia ad nesciunt explicabo voluptatem numquam sapiente sequi, culpa ex. 
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-5">
            {INDUSTRIES.map((industry, index) => {
              const isLastColumn = (index + 1) % 5 === 0;
              const isLastRow = index >= INDUSTRIES.length - 5;
              const borders = [
                !isLastColumn ? "border-r border-primary" : "",
                !isLastRow ? "border-b border-primary" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  key={industry.name}
                  className={[
                    "flex flex-col items-center justify-center gap-4 px-6 py-10 text-center text-primary",
                    borders,
                  ].join(" ")}
                  data-animate="fade-up"
                >
                  <span className="text-2xl font-semibold tracking-[0.18em] text-white">
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
