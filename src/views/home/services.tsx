"use client";

import { useRef } from "react";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import Container from "@/components/container";
import ServiceCard from "@/components/ServiceCard";
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
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 64, stagger: 0.08 });

  const servicesWithIndex = SERVICES.map((service, index) => ({
    ...service,
    originalIndex: index,
    icon: SERVICE_ICONS[index % SERVICE_ICONS.length],
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
      className="relative z-10 scroll-mt-24 overflow-hidden py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-30"
        style={{
          background:
            "linear-gradient(#000000 0%,#0A0909 60%, #0A0909 100%)",
        }}
      />
      <Container>
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

        <div className="relative mt-4 px-6 pb-12 pt-25 lg:px-12 ">
          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            <div className="mt-8 space-y-6 text-white" data-animate="fade-up">
              <p className="section-heading">What We Offer</p>
              <Button href="#contact" icon={<ArrowTopRightIcon />}>
                Get In Touch
              </Button>
            </div>
            <p
              className="max-w-xl text-base leading-relaxed text-white mt-6 lg:mt-0 lg:pt-4"
              data-animate="fade-up"
            >
              We specialize in CGI and Mixed Reality Ads, 3D Animations, Web
              Design, UI/UX Design, Branding, and Digital Marketing (including
              SEO, Google Ads, and Social Media). Additionally, we provide AI
              and Custom Software Development, tailored to meet your unique
              needs.
            </p>
          </div>

          <div className="relative mt-14">
            {/* Mobile & tablet fallback layout */}
            <div className="grid gap-7 md:grid-cols-2 xl:hidden">
              {servicesWithIndex.map(
                ({ title, description, icon }) => (
                  <ServiceCard
                    key={title}
                    title={title}
                    description={description}
                    icon={icon}
                  />
                )
              )}
            </div>

            {/* Desktop three-column layout */}
            <div className="hidden xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] xl:gap-8">
              <div className="flex flex-col gap-7">
                {leftColumnServices.map(
                  ({ title, description, icon }) => (
                    <ServiceCard
                      key={title}
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  )
                )}
              </div>

              <div className="flex flex-col gap-7">
                {featuredService && (
                  <ServiceCard
                    title={featuredService.title}
                    description={featuredService.description}
                    icon={featuredService.icon}
                    variant="featured"
                  />
                )}
              </div>

              <div className="flex flex-col gap-7">
                {rightColumnServices.map(
                  ({ title, description, icon }) => (
                    <ServiceCard
                      key={title}
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
