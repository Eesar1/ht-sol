"use client";

import { useRef } from "react";
import Image from "next/image";
import { SERVICES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/ui/button";

const SERVICE_ICONS: { src: string; alt: string }[] = [
  { src: "/ads.svg", alt: "Advertising services icon" },
  { src: "/social.svg", alt: "User experience icon" },
  { src: "/setting.svg", alt: "AI services icon" },
  { src: "/video.svg", alt: "Development services icon" },
  { src: "/mail.svg", alt: "Brand services icon" },
];

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
              <Button href="#contact" icon={<ArrowTopRightIcon />}>
                Get In Touch
              </Button>
            </div>
            <div
              className="max-w-xl text-base leading-relaxed text-white"
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
    "relative flex h-full flex-col items-center rounded-l border border-white/12 bg-black/5 text-center text-white shadow-none transition-all duration-300 hover:border-accent/50";
  const hoverShadowClass =
    "hover:shadow-[0_20px_60px_rgba(0,131,138,0.25)]";
  const defaultClasses = "px-6 pt-7 pb-10 min-h-[200px]";
  const featuredClasses =
    "px-8 pt-9 pb-12 min-h-[500px] border-accent/60 ";

  const featuredArrowClasses =
    "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-none transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-deep-900 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]";
  const defaultArrowClasses =
    "relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-none transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-deep-900 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.28)]";

  return (
    <div
      className={`group relative flex flex-col items-center ${
        variant === "default" ? "" : ""
      }`}
      data-animate="fade-up"
    >
      <div
        className={`${baseClasses} ${hoverShadowClass} ${
          variant === "featured" ? featuredClasses : defaultClasses
        }`}
      >
        <ServiceIcon index={index} variant={variant} />
        <h3 className="mt-8 text-base font-semibold uppercase tracking-[0.2em] text-white">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white">
          {description}
        </p>

        {variant === "featured" ? (
          <div className="mt-auto flex w-full justify-center">
            <div className="relative flex w-full max-w-[360px] flex-col items-center">
              <span className={featuredArrowClasses}>
                <ArrowTopRightIcon className="h-4 w-4" />
              </span>
              <div className="relative -mt-7 w-full overflow-hidden rounded-l border border-white/12 bg-[#040b13]/80">
                <Image
                  src="/social-media.png"
                  alt="Social media engagement"
                  width={720}
                  height={420}
                  className="h-77 w-full "
                  quality={100}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {variant === "default" ? (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5">
          <div className="relative">
            <span className={defaultArrowClasses}>
              <ArrowTopRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      ) : null}
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
  const icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
  const baseFillClass = variant === "featured" ? "bg-white/5" : "bg-white/5";

  return (
    <div
      className={`relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-white bg-black ${
        variant === "featured" ? "" : ""
      }`}
    >
      <span
        className={`pointer-events-none absolute inset-[6px] rounded-full ${baseFillClass} transition-colors duration-300 group-hover:bg-white`}
      />
      <span className="pointer-events-none absolute inset-2 rounded-full " />
      
      {/* Icon container */}
      <div className="relative z-10 h-10 w-10">
        {/* White icon (visible by default) */}
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className="h-10 w-10"
            style={{
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>
        
        {/* Black icon (visible on hover) */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className="h-10 w-10"
            style={{
              filter: 'brightness(0)',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ArrowTopRightIcon({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className ?? "h-3.5 w-3.5"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11L11 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3H11V9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
