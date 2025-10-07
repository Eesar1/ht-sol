"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function OurWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 55, stagger: 0.08 });

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-6 lg:pt-12"
    >
      <div className="section-container">
        <div
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#050f1a]/70 px-6 py-16 text-center shadow-[0_30px_90px_rgba(1,8,18,0.55)] backdrop-blur-xl"
          data-animate="fade-up"
        >
          <span className="pointer-events-none absolute left-1/2 top-4 -z-10 hidden w-full -translate-x-1/2 font-display text-[8rem] uppercase tracking-[0.35em] text-white/4 md:block lg:text-[10rem]">
            Our Work
          </span>
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
            Our Work Portfolio
          </p>
          <h2 className="mt-6 text-3xl font-semibold uppercase tracking-[0.28em] text-white sm:text-4xl">
            Case Studies Coming Soon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-70">
            We are curating our latest launches and campaign results. Drop your
            email below and be the first to see the interactive showcase as soon
            as it goes live.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              className="h-12 flex-1 rounded-full border border-white/15 bg-white/5 px-5 text-sm text-white placeholder:text-muted-60 focus:outline-none"
              placeholder="Your email address"
            />
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-[0.2em] text-deep-900 transition hover:bg-accent/90"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
