"use client";

import { useRef } from "react";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import { Button } from "@/ui/button";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function AboutUsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 60, stagger: 0.08 });

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 scroll-mt-24 pt-8 lg:pt-10"
    >
      <div className="section-container">
        <div className="relative pt-14 md:pt-20">
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
    About Us
  </text>
</svg>
          <div className="flex flex-col gap-12 pt-14 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="relative" data-animate="fade-up">
              <div className="group relative overflow-hidden rounded-[12px] border border-white/10 bg-[#0a1b29]/60 shadow-[0_30px_90px_rgba(1,8,18,0.6)]">
                <div
                  className="relative block h-full min-h-[320px] w-full overflow-hidden bg-gradient-to-br from-[#102a3c] via-[#021522] to-[#010910] pt-16 sm:min-h-[400px]"
                  style={{
                    backgroundImage: "url('/about-visual.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex h-full w-full items-end justify-start">
                  </div>
                </div>
              </div>
              <div className="absolute -right-18 top-[-14%] hidden h-28 w-28 items-center justify-center rounded-full border border-accent/40 bg-accent text-white shadow-[0_25px_65px_rgba(5,26,41,0.6)] backdrop-blur-md md:flex">
                <div className="relative flex h-full w-full items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] text-white animate-spin-slower"
                    aria-hidden
                  >
                    <defs>
                      <path
                        id="about-circle-text-path"
                        d="M50 10a40 40 0 1 1 0 80 40 40 0 1 1 0-80"
                        fill="none"
                      />
                    </defs>
                    <text fill="currentColor" fontSize="15" fontWeight="600">
                      <textPath xlinkHref="#about-circle-text-path">
                        HT SOLUTIONS{"\u00A0\u00A0\u00A0\u00A0"}HT SOLUTIONS{"\u00A0\u00A0\u00A0"}
                      </textPath>
                    </text>
                  </svg>
                  <span className="relative flex h-14 w-14 items-center justify-center text-white">
                    <ArrowTopRightIcon className="h-7 w-7" color="#ffffff" />
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2 pl-4 text-white" data-animate="fade-up">
              <div className="space-y-5" >

                <h2 className="section-heading text-white">
                  Who We Are?
                </h2>
              </div>
              <p className="max-w-[520px] text-base leading-relaxed">
                Since our establishment we have successfully served hundreds of clients world wide. Our primary skills are around web designing and mobile application development. We have a team of 40+ dedicated professionals for all kinds of tasks.
              </p>
              <p className="max-w-[520px] text-base leading-relaxed">
                HTSolutions provides you Website Designing, Web Development, SEO Services, Graphic Designing, Mobile Application Development Video Production, Voice Over, Digital Marketing and Network Solutions.
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
