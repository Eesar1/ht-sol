"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/ui/button";


const orbitHighlights = [
 
  {
    id: "rating",
    label: "Customer Rating",
    className: "top-[2%] right-[-6%]",
    imageSrc: "/ratings.png",
    variant: "rating" as const,
  },
  {
    id: "growth",
    label: "Growth Rate",
    className: "bottom-[-4%] left-[-5%]",
    imageSrc: "/growth.png",
    variant: "growth" as const,
  },
];

const orbitIcons = [
  {
    id: "google",
    label: "Google Ads",
    className: "top-[3%] left-[18%]",
    imageSrc: "/google-ads.svg",
  },
  {
    id: "Google",
    label: "Google Ads",
    className: "top-[25%] left-[-2%]",
    imageSrc: "/google-ads.svg",
  },
  {
    id: "meta",
    label: "Meta",
    className: "top-[60%] right-[-3%]",
    imageSrc: "/meta.svg",
  },
  {
    id: "tiktok",
    label: "TikTok",
    className: "bottom-[-2%] right-[25%]",
    imageSrc: "/tik-tok.svg",
  },
  {
    id: "Blue",
    label: "Blue ",
    className: "top-[56%] left-[-5%]",
    imageSrc: "/blue.svg",
  },
];

const orbitAnimationStyle = {
  "--orbit-duration": "32s",
} as CSSProperties;

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
              <div className="absolute inset-[15%] rounded-full bg-white/5 " />
              <div className="absolute inset-[15%] rounded-full border border-accent/70" />
              <div className="absolute inset-[26%] flex items-center justify-center rounded-full bg-white/5 ">
                <div
                  className="h-[64%] w-[64%] rounded-full  "
                  style={{
                    backgroundImage: "url('/banner-glob.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div className="absolute inset-[5%]" style={orbitAnimationStyle}>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 rounded-full border-3 border-dashed border-white" />
                  <div className="orbit-rotator absolute inset-0">
                    {orbitHighlights.map((icon) => (
                      <OrbitHighlight
                        key={icon.id}
                        className={icon.className}
                        label={icon.label}
                        imageSrc={icon.imageSrc}
                        variant={icon.variant}
                      />
                    ))}
                    {orbitIcons.map((icon) => (
                      <OrbitIcon
                        key={icon.id}
                        className={icon.className}
                        label={icon.label}
                        imageSrc={icon.imageSrc}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10  flex flex-col items-center gap-6"
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
    <Button href="#contact" icon={<ArrowTopRightIcon />}>
      Get In Touch
    </Button>
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

type OrbitHighlightVariant = "growth" | "rating";

function OrbitHighlight({
  className,
  label,
  imageSrc,
  variant,
}: {
  className?: string;
  label: string;
  imageSrc: string;
  variant: OrbitHighlightVariant;
}) {
  const wrapperClass = [
    "orbit-item absolute flex flex-col items-center text-center text-xs text-white",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "rating") {
    return (
      <div className={wrapperClass} aria-label={label}>
        <div className="orbit-item-counter rounded-xl bg-white px-4 py-3 shadow-[0_22px_60px_rgba(6,14,26,0.55)]">
          <div className="flex h-full w-[180px] items-center justify-center">
            <Image
              src={imageSrc}
              alt={label}
              width={198}
              height={81}
              className="h-auto w-full max-w-[198px] object-contain"
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "growth") {
    return (
      <div className={wrapperClass} aria-label={label}>
        <div className="orbit-item-counter flex h-[112px] w-[220px] items-center justify-center">
          <Image
            src={imageSrc}
            alt={label}
            width={128}
            height={107}
            className="h-auto w-full max-w-[140px] object-contain drop-shadow-[0_24px_60px_rgba(3,11,23,0.55)]"
            quality={100}
          />
        </div>
      </div>
    );
  }

  return null;
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
        "orbit-item absolute flex flex-col items-center text-center text-xs text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={label}
    >
      <div className="orbit-item-counter flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_18px_44px_rgba(5,13,28,0.55)]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={label}
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            quality={100}
          />
        ) : (
          <span className="text-sm font-semibold uppercase tracking-[0.12em]">
            {shortLabel}
          </span>
        )}
      </div>
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
