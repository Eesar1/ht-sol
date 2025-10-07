"use client";

import { useRef } from "react";
import { Button } from "@/ui/button";
import { SERVICES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 64, stagger: 0.08 });

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-6 lg:pt-12"
    >
      <div className="section-container">
        <div className="relative">
          <span className="pointer-events-none absolute left-1/2 top-0 -z-10 hidden w-full -translate-x-1/2 text-center font-display text-[8rem] uppercase tracking-[0.35em] text-white/5 md:block lg:text-[10rem]">
            Services
          </span>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div className="space-y-6" data-animate="fade-up">
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">
                What we offer
              </p>
              <h2 className="section-heading text-white">Full-service team</h2>
              <p className="max-w-[420px] text-base leading-relaxed text-muted-70">
                From brand story to deployment and scale, HT Solutions delivers
                complete product, marketing, and experience design for ambitious
                teams worldwide.
              </p>
              <Button href="#contact" variant="secondary" icon={<ArrowIcon />}>
                Get In Touch
              </Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  index={index + 1}
                  featured={index === Math.floor(SERVICES.length / 2)}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  featured?: boolean;
};

function ServiceCard({
  index,
  title,
  description,
  featured,
}: ServiceCardProps) {
  return (
    <div
      className={[
        "relative flex h-full flex-col justify-between gap-6 rounded-[28px] border border-white/12 bg-white/[0.04] p-6 text-left text-muted-70 transition-all duration-300",
        featured
          ? "border-accent/40 bg-accent/10 shadow-[0_35px_100px_rgba(12,120,148,0.4)] lg:-translate-y-8"
          : "hover:-translate-y-2 hover:border-accent/30 hover:bg-white/[0.08]",
      ].join(" ")}
      data-animate="fade-up"
    >
      <div className="flex flex-col gap-5">
        <div
          className={[
            "flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-accent/30 bg-white/5 text-sm font-semibold uppercase tracking-[0.2em] text-accent/80",
            featured ? "bg-accent/20 text-deep-900" : "",
          ].join(" ")}
        >
          {index.toString().padStart(2, "0")}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted-60">
        <span>Discover More</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
          <ArrowMiniIcon />
        </span>
      </div>
    </div>
  );
}

function ArrowIcon() {
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

function ArrowMiniIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 11L11 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5H11V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
