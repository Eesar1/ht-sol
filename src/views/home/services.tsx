"use client";

import { useRef } from "react";
import { SERVICES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/ui/button";

const SERVICE_GLYPHS = ["Ads", "UX", "AI", "Dev", "Brand"];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 64, stagger: 0.08 });

  const servicesWithIndex = SERVICES.map((service, index) => ({
    ...service,
    originalIndex: index,
  }));

  const FEATURED_SERVICE_INDEX = 1;
  const featuredService = servicesWithIndex[FEATURED_SERVICE_INDEX];
  const sideServices = servicesWithIndex.filter(
    ({ originalIndex }) => originalIndex !== FEATURED_SERVICE_INDEX
  );
  const leftColumnServices = sideServices.filter((_, idx) => idx % 2 === 0);
  const rightColumnServices = sideServices.filter((_, idx) => idx % 2 === 1);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative z-10 overflow-hidden scroll-mt-24 pt-12 pb-16 lg:pt-20 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-1/12 bottom-0 -z-10 bg-[url('/dark.png')] bg-cover bg-center bg-no-repeat" />
      <div className="section-container">
        <div className="flex justify-center">
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
              Services
            </text>
          </svg>
        </div>

        <div className="relative mt-4 overflow-hidden px-6 pb-12 pt-25 lg:px-12 ">
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start ">
            <div className="mt-8 space-y-6  text-white" data-animate="fade-up">
              <p className="section-heading">What We Offer</p>
              <Button href="#contact" icon={<ArrowIcon />}>
                Get In Touch
              </Button>
            </div>
            <div
              className="max-w-xl text-base leading-relaxed text-muted-60"
              data-animate="fade-up"
            >
              We specialize in CGI and Mixed Reality Ads, 3D Animations, Web
              Design, UI/UX Design, Branding, and Digital Marketing (including
              SEO, Google Ads, and Social Media). Additionally, we provide AI
              and Custom Software Development, tailored to meet your unique
              needs.
            </div>
          </div>

          <div className="relative mt-14">
            {/* Mobile & tablet fallback layout */}
            <div className="grid gap-7 md:grid-cols-2 xl:hidden">
              {servicesWithIndex.map(
                ({ title, description, originalIndex }) => (
                  <ServiceCard
                    key={title}
                    index={originalIndex}
                    title={title}
                    description={description}
                  />
                )
              )}
            </div>

            {/* Desktop three-column layout */}
            <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-8">
              <div className="flex flex-col gap-7">
                {leftColumnServices.map(
                  ({ title, description, originalIndex }) => (
                    <ServiceCard
                      key={title}
                      index={originalIndex}
                      title={title}
                      description={description}
                    />
                  )
                )}
              </div>

              <div className="flex flex-col gap-7">
                {featuredService && (
                  <ServiceCard
                    index={featuredService.originalIndex}
                    title={featuredService.title}
                    description={featuredService.description}
                    variant="featured"
                  />
                )}
              </div>

              <div className="flex flex-col gap-7">
                {rightColumnServices.map(
                  ({ title, description, originalIndex }) => (
                    <ServiceCard
                      key={title}
                      index={originalIndex}
                      title={title}
                      description={description}
                    />
                  )
                )}
              </div>
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
  variant?: "default" | "featured";
};

function ServiceCard({
  index,
  title,
  description,
  variant = "default",
}: ServiceCardProps) {
  const baseClasses =
    "group relative flex h-full flex-col items-center rounded-[32px] border border-white/12 bg-[#070f19]/90 px-8 pb-12 pt-14 text-center text-muted-60 transition-all duration-300 hover:border-accent/50";
  const featuredClasses =
    "border-accent/60 bg-[#061624]/95 shadow-[0_22px_88px_rgba(0,131,138,0.25)]";

  const arrowBaseClasses =
    "inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-deep-900 transition-transform duration-300 group-hover:-translate-y-1";
  const arrowFeaturedClasses =
    "bg-white text-accent shadow-[0_12px_42px_rgba(0,0,0,0.35)]";

  return (
    <div
      className={`${baseClasses} ${
        variant === "featured" ? featuredClasses : ""
      }`}
      data-animate="fade-up"
    >
      <ServiceIcon index={index} variant={variant} />
      <h3 className="mt-8 text-base font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-50">{description}</p>

      <div className="mt-12 flex w-full justify-center">
        <span
          className={`${arrowBaseClasses} ${
            variant === "featured" ? arrowFeaturedClasses : ""
          }`}
        >
          <ArrowMiniIcon />
        </span>
      </div>
    </div>
  );
}

function ServiceIcon({
  index,
  variant,
}: {
  index: number;
  variant?: "default" | "featured";
}) {
  const label = SERVICE_GLYPHS[index % SERVICE_GLYPHS.length];

  return (
    <div
      className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-accent/45 bg-[#0c1824] ${
        variant === "featured"
          ? "border-accent/70 bg-[#0d1f30] shadow-[0_12px_36px_rgba(0,131,138,0.25)]"
          : ""
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-2 rounded-full border border-white/10 ${
          variant === "featured" ? "border-white/20" : ""
        }`}
      />
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
        {label}
      </span>
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
