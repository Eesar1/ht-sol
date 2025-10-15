"use client";

import { useMemo, useRef } from "react";
import Container from "@/components/container";
import { TECHNOLOGIES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function TechnologiesSection() {
  const marqueeItems = useMemo(
    () => [...TECHNOLOGIES, ...TECHNOLOGIES],
    []
  );

  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 50, stagger: 0.06 });

  return (
    <section
      id="technologies"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 overflow-hidden pt-6 lg:pt-12"
      style={{
        background:
          "linear-gradient(180deg, #0A0909 0%, #0A0909 15%, #000000 78%, #000000 100%)",
      }}
    >
      <Container >
        <div className="relative px-6 py-16 lg:py-20" data-animate="fade-up">
          <svg
            className="pointer-events-none absolute left-1/2 top-0 -z-20 hidden w-[min(1600px,150%)] -translate-x-1/2 md:block"
            viewBox="0 0 1600 260"
            aria-hidden
          >
            <defs>
              <linearGradient id="about-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#075b65" />
                <stop offset="50%" stopColor="#00838a" />
                <stop offset="100%" stopColor="#328a99" />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              fontFamily="Poppins, var(--font-display), sans-serif"
              fontSize="220"
              style={{ letterSpacing: "0em", textTransform: "uppercase" }}
              fill="transparent"
              stroke="url(#about-stroke)"
              strokeWidth="1"
            >
              Technologies
            </text>
          </svg>
          <div className="pt-26 text-center">
            <h2 className="section-heading mx-auto max-w-3xl text-white">
              Technologies we use
            </h2>
          </div>
          <div className="mt-16">
            <div className="relative">
              <div className="marquee-track animate-tech-marquee items-center gap-14 whitespace-nowrap">
                {marqueeItems.map((tech, index) => (
                  <TechBadge
                    key={`${tech.name}-${index}`}
                    label={tech.name}
                    icon={tech.icon}
                  />
                ))}
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-24 "
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 w-24 "
              />
            </div>
          </div>
        </div>
      </Container>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 -z-10 bg-gradient-to-b from-transparent via-black/80 to-black blur-3xl opacity-90"
      />
    </section>
  );
}

function TechBadge({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex h-44 w-44 shrink-0 flex-col items-center justify-center rounded-full border border-[#0ca3ad]/70 bg-white/5 text-white  transition-transform duration-500 hover:scale-105">
      <span className="flex h-16 w-16 items-center justify-center rounded-full">
        <img
          src={icon}
          alt={label}
          loading="lazy"
          className="h-12 w-12 object-contain"
        />
      </span>
      <span className="mt-5 text-base font-medium">{label}</span>
    </div>
  );
}
