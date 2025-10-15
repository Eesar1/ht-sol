"use client";

import { useRef } from "react";
import Container from "@/components/container";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function OurWorkSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 55, stagger: 0.08 });

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 py-16 lg:py-20"
    >
      <Container >
        <div className="flex justify-center py-160 lg:py-200">
          <svg
            className="pointer-events-none absolute left-1/2 top-0 -z-20 hidden md:block -translate-x-1/2 w-[min(1500px,150%)]"
            viewBox="0 0 1600 320"
            aria-hidden
          >
            <defs>
              <linearGradient id="services-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#075b65" />
                <stop offset="50%" stopColor="#00838a" />
                <stop offset="100%" stopColor="#328a99" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontFamily="Poppins, var(--font-display), sans-serif"
              fontSize="240"
              style={{ letterSpacing: "0.08em", textTransform: "uppercase" }}
              fill="transparent"
              stroke="url(#services-stroke)"
              strokeWidth="1"
            >
              Our work
            </text>
          </svg>
        </div>
      </Container>
    </section>
  );
}
