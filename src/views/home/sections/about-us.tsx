"use client";

import { useRef } from "react";
import { Button } from "@/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function AboutUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 60, stagger: 0.08 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-8 lg:pt-12"
    >
      <div className="section-container">
        <div className="relative">
          <span className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden w-full -translate-x-1/2 text-center font-display text-[8rem] uppercase tracking-[0.35em] text-white/5 md:block lg:text-[10rem]">
            About Us
          </span>
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative" data-animate="fade-up">
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0a1b29]/60 shadow-[0_30px_90px_rgba(1,8,18,0.6)]">
                <div
                  className="relative block h-full min-h-[320px] w-full overflow-hidden bg-gradient-to-br from-[#102a3c] via-[#021522] to-[#010910] p-6 sm:min-h-[400px]"
                  style={{
                    backgroundImage: "url('/about-visual.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex h-full w-full items-end justify-start">
                    <div className="rounded-3xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-md">
                      <span className="font-display text-sm uppercase tracking-[0.45em] text-white/70">
                        Visual Placeholder
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-2 rounded-[28px] border border-white/10 opacity-40" />
              </div>
              <div className="absolute -right-8 bottom-10 hidden h-28 w-28 items-center justify-center rounded-full border border-accent/40 bg-white/5 text-accent shadow-[0_25px_65px_rgba(5,26,41,0.6)] backdrop-blur-md md:flex">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-accent/50 text-xs font-semibold uppercase tracking-[0.4em]">
                  <span className="-rotate-45">HT</span>
                </div>
              </div>
            </div>
            <div className="space-y-8 text-muted-70" data-animate="fade-up">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                  Who we are?
                </p>
                <h2 className="section-heading text-white">
                  Strategy-led, design obsessed
                </h2>
              </div>
              <p className="max-w-[520px] text-base leading-relaxed">
                Since our establishment, we have partnered with hundreds of
                forward-thinking brands. Our multi-disciplinary team builds
                conversion-focused websites, mobile applications, visual brand
                systems, and immersive content that scales with your business.
              </p>
              <p className="max-w-[520px] text-base leading-relaxed">
                From research and user journeys to end-to-end development,
                marketing automation, and analytics, we blend creative craft
                with measurable performance.
              </p>
              <Button href="#about-more" icon={<ArrowTopRightIcon />}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowTopRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11L11 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3H11V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
