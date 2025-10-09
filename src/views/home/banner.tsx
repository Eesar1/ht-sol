"use client";

import { useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";


const orbitIcons = [
  {
    id: "Human",
    label: "Human",
    shortLabel: "H",
    className: "top-[0%] right-[30%]",
  },
  {
    id: "google",
    label: "Google",
    shortLabel: "G",
    className: "top-[10%] left-[15%]",
  },
    {
    id: "google",
    label: "Google",
    shortLabel: "G",
    className: "top-[30%] left-[2%] ",
  },
  {
    id: "meta",
    label: "Meta",
    shortLabel: "M",
    className: "top-[32%] right-[0%]",
  },
  {
    id: "tiktok",
    label: "TikTok",
    shortLabel: "TT",
    className: "bottom-[5%] right-[25%]",
  },
  {
    id: "growth",
    label: "Growth",
    shortLabel: "GR",
    className: "bottom-[4%] left-[15%]",
    imageSrc: "/growth.png",
  },
  {
    id: "ai",
    label: "AI",
    shortLabel: "AI",
    className: "top-[56%] left-[1%]",
  },
];

export default function BannerSection() {
  const containerRef = useRef<HTMLElement>(null);
  useGsapReveal(containerRef, { y: 80, stagger: 0.08 });
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat scroll-mt-32 pt-6 lg:pt-10 xl:pt-16"
    >
      <div className="absolute inset-0 bg-[url('/image-banner.png')] bg-cover bg-center bg-no-repeat opacity-10 z-0"></div>
      <div className="section-container relative z-10">
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
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              data-animate="fade-up"
            >
              <GetInTouchCTA />
              <PhoneCTA />
            </div>
          </div>

          <div
            className="relative mx-auto flex w-full max-w-[440px] items-center justify-center"
            data-animate="fade-up"
          >
            <div className="group relative aspect-square w-full">
              <div className="absolute inset-[15%] rounded-full bg-[#030914] shadow-[0_30px_120px_rgba(0,0,0,0.6)]" />
              <div className="absolute inset-[15%] rounded-full border border-accent/70" />
              <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-[#061526] shadow-[0_20px_60px_rgba(5,18,33,0.75)]">
                <div
                  className="h-[64%] w-[64%] rounded-full border border-accent/40 "
                  style={{
                    backgroundImage: "url('/banner-glob.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="absolute inset-[5%] rounded-full border border-dashed border-white/20" />
              {orbitIcons.map((icon) => (
                <OrbitIcon
                  key={icon.id}
                  className={icon.className}
                  label={icon.label}
                  shortLabel={icon.shortLabel}
                  imageSrc={icon.imageSrc}
                />
              ))}
              
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mt-16 flex flex-col items-center gap-6"
        data-animate="fade-up"
      >
        <Image
          src="/globe-line.png"
          alt="Orbital line accent"
          width={1920}
          height={286}
          className="h-auto w-full "
        />
        <Image
          src="/explore.svg"
          alt="Explore Now indicator"
          width={119}
          height={111}
          className="h-auto w-auto select-none"
        />
      </div>
    </section>
  );
}

function GetInTouchCTA() {
  return (
    <Link
      href="#contact"
      className="group relative inline-flex items-center focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="inline-flex h-11 items-center whitespace-nowrap rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_15px_45px_rgba(20,180,198,0.35)] transition-colors duration-300 group-hover:bg-accent/90">
        Get In Touch
      </span>
      <span className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-[0_15px_45px_rgba(20,180,198,0.35)] transition-colors duration-300 group-hover:bg-accent/90">
        <ArrowTopRightIcon />
      </span>
    </Link>
  );
}

function PhoneCTA() {
  return (
    <a
      href="tel:+923174201604"
      className="group relative inline-flex items-center  focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span className="inline-flex border-r-0 h-11 items-center whitespace-nowrap rounded-full border border-white bg-transparent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-white">
        +92 317 420 1604
      </span>
      <span className="-ml-2 border-l-0  flex h-11 w-11 items-center justify-center rounded-full  border border-white bg-transparent text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-deep-900">
        <Image
          src="/call.svg"
          width={18}
          height={18}
          alt="Call us"
          className="transition-[filter] duration-300 group-hover:invert"
        />
      </span>
    </a>
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

function OrbitIcon({
  className,
  label,
  shortLabel,
  imageSrc,
}: {
  className?: string;
  label: string;
  shortLabel?: string;
  imageSrc?: string;
}) {
  return (
    <div
      className={[
        "absolute flex flex-col items-center gap-2 text-center text-xs text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={label}
          width={48}
          height={48}
          className="h-full w-22 object-cover "
          quality={100}
        />
      ) : (
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-semibold uppercase tracking-[0.12em] backdrop-blur-sm">
          {shortLabel}
        </span>
      )}
    </div>
  );
}


function StarIcon() {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
    >
      <path
        d="M9.99987 2.5L12.2853 7.13305L17.3926 7.90983L13.6962 11.4869L14.5707 16.5902L9.99987 14.115L5.429 16.5902L6.30352 11.4869L2.60718 7.90983L7.71444 7.13305L9.99987 2.5Z"
        fill="currentColor"
      />
    </svg>
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
