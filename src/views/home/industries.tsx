"use client";

import Image from "next/image";
import { useRef } from "react";
import Container from "@/components/container";
import { INDUSTRIES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function IndustriesSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 60, stagger: 0.07 });
  const totalIndustries = INDUSTRIES.length;
  const MOBILE_COLUMNS = 2;
  const DESKTOP_COLUMNS = 5;
  const getLastRowStartIndex = (total: number, columns: number) => {
    if (total === 0) {
      return 0;
    }
    const remainder = total % columns;
    const itemsInLastRow = remainder === 0 ? columns : remainder;
    return total - itemsInLastRow;
  };
  const mobileLastRowStartIndex = getLastRowStartIndex(
    totalIndustries,
    MOBILE_COLUMNS,
  );
  const desktopLastRowStartIndex = getLastRowStartIndex(
    totalIndustries,
    DESKTOP_COLUMNS,
  );

  return (
    <section
      id="industries"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 py-16 lg:py-20"
    >
      <Container >
        <div className="relative px-6 py-14" data-animate="fade-up">
 <svg
  className="pointer-events-none absolute left-1/2 top-0 -z-10 block -translate-x-1/2 w-[min(1600px,92vw)] sm:w-[min(1600px,90vw)] lg:w-[min(1600px,85vw)]"
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
    style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
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
              const isRightColumnMobile = (index + 1) % MOBILE_COLUMNS === 0;
              const isLastRowMobile = index >= mobileLastRowStartIndex;
              const isLastColumnDesktop = (index + 1) % DESKTOP_COLUMNS === 0;
              const isLastRowDesktop = index >= desktopLastRowStartIndex;
              const borders = [
                isRightColumnMobile
                  ? "border-l sm:border-l-0"
                  : "",
                !isLastRowMobile ? "border-b" : "",
                !isLastColumnDesktop ? "sm:border-r" : "",
                !isLastRowDesktop ? "sm:border-b" : "",
                isLastRowDesktop ? "sm:border-b-0" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  key={industry.name}
                  className={[
                    "flex flex-col items-center justify-center gap-4 px-6 py-10 text-center text-primary border-primary",
                    borders,
                  ].join(" ")}
                  data-animate="fade-up"
                >
                  <div className="flex h-16 w-16 items-center justify-center ">
                    <Image
                      src={industry.icon}
                      alt={`${industry.name} icon`}
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
