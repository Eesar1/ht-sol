"use client";

import { useMemo, useRef } from "react";
import { Button } from "@/ui/button";
import { HERO_BADGES } from "@/constant";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const badgePositions = [
  "top-10 right-[-6%]",
  "bottom-14 right-[8%]",
  "bottom-6 left-[-10%]",
];

export default function BannerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGsapReveal(containerRef, { y: 80, stagger: 0.08 });

  const badges = useMemo(() => HERO_BADGES.slice(0, 3), []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 scroll-mt-32 pt-6 lg:pt-10 xl:pt-16"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-10">


            <div className="space-y-5 text-white" data-animate="fade-up">
              <div className="font-display text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.85] uppercase">
                <div className="flex items-center gap-2">
                  <span>Welc</span>
                  <div
                    className="h-[4rem] w-[8.5rem] rounded-[999px] sm:h-[4.2rem] sm:w-[9.8rem]"
                    aria-hidden
                    style={{
                      backgroundImage: "url('/letter-o.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >

                  </div>
                  <span>me</span>
                </div>
                <span className="block text-[clamp(3.2rem,6.5vw,5.5rem)]">
                  to HT Solutions
                </span>
              </div>
              <p className="max-w-xl text-base leading-relaxed text-muted-70">
                HT Solutions creates transformational brand, product, and
                marketing experiences. We combine forward-thinking strategy with
                stunning design and technology to help teams scale with
                confidence.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.22em] text-muted-70"
              data-animate="fade-up"
            >
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/90">
                Get In Touch
              </span>
              <span>-</span>
              <span>+92 317 420 1604</span>
            </div>

            <div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              data-animate="fade-up"
            >
              <Button href="#contact" icon={<ArrowTopRightIcon />}>
                Get In Touch
              </Button>
              <Button
                href="tel:+923174201604"
                variant="outline"
                icon={<PhoneIcon />}
              >
                +92 317 420 1604
              </Button>
            </div>
          </div>

          <div
            className="relative mx-auto flex w-full max-w-[440px] items-center justify-center"
            data-animate="fade-up"
          >
            <div className="relative aspect-square w-full rounded-full border border-accent/20 bg-[radial-gradient(circle_at_50%_50%,rgba(20,180,198,0.5),rgba(2,12,24,0.65)_58%,rgba(2,12,24,0.95)_100%)] p-10 shadow-[0_45px_120px_rgba(6,40,60,0.45)]">
              <div className="relative h-full w-full rounded-full border border-white/10">
                <div className="absolute inset-8 rounded-full border border-white/10 opacity-70" />
                <div className="absolute inset-16 rounded-full border border-white/10 opacity-60" />
                <div className="absolute inset-14 flex items-center justify-center rounded-full border border-accent/30 bg-[radial-gradient(circle,_rgba(21,152,182,0.4)_0%,_rgba(9,32,49,0.8)_65%,_rgba(3,12,24,0.95)_100%)]">
                  <div
                    className="h-[55%] w-[55%] rounded-full border border-accent/40 bg-accent/40 backdrop-blur-sm"
                    style={{
                      backgroundImage: "url('/hero-globe.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-[0.35em] text-white/65">
                      Globe
                    </div>
                  </div>
                </div>
                <span className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30" />
              </div>
              {badges.map((badge, index) => (
                <FloatingBadge
                  key={badge.id}
                  className={badgePositions[index] ?? ""}
                  title={badge.title}
                  description={badge.description}
                  image={badge.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({
  className,
  title,
  description,
  image,
}: {
  className?: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div
      className={[
        "absolute z-10 flex max-w-[200px] flex-col gap-1 rounded-2xl border border-white/10 bg-[#071522]/95 px-4 py-3 text-left text-xs text-white shadow-[0_20px_60px_rgba(1,8,18,0.65)] backdrop-blur-lg transition-transform duration-500 hover:scale-[1.03]",
        className,
      ].join(" ")}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <span className="text-sm font-semibold leading-tight text-white">
        {title}
      </span>
      <span className="text-[0.7rem] text-muted-70">{description}</span>
    </div>
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

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 9.68688V11.0836C11.6667 11.3649 11.437 11.5903 11.1493 11.5869C10.3833 11.5781 8.82767 11.3951 7.28908 10.3352C5.51783 9.10929 4.23692 6.9411 3.77258 6.07691C3.68825 5.92048 3.68825 5.7393 3.77258 5.58287C4.23692 4.71868 5.51783 2.55049 7.28908 1.32461C8.82767 0.264682 10.3833 0.0816746 11.1493 0.0729019C11.437 -0.000934714 11.6667 0.224531 11.6667 0.505765V1.90251C11.6667 2.15353 11.4883 2.37262 11.2427 2.42236L9.691 2.73538C9.46417 2.7805 9.30275 2.9852 9.327 3.21374C9.37858 3.69944 9.30983 4.2311 8.81058 4.69666C8.42092 5.05908 8.45117 5.64025 8.81058 6.00267L9.077 6.26204C9.93233 7.0955 10.9472 7.79766 11.6245 8.19322C11.8563 8.32666 11.9597 8.60784 11.8741 8.86065L11.2427 10.4705C11.1584 10.7052 10.9146 10.833 10.6735 10.7704C10.0732 10.6122 9.33092 10.3122 8.6885 9.81866"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
