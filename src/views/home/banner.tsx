"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import OrbitHighlight, {
  type OrbitHighlightVariant,
} from "@/components/OrbitHighlight";
import OrbitIcon from "@/components/OrbitIcon";
import PhoneCTA from "@/components/PhoneCTA";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Button } from "@/ui/button";
import { GLOBE_WAVE_PATH } from "@/constant";


type OrbitHighlightConfig = {
  id: string;
  label: string;
  className: string;
  imageSrc: string;
  variant: OrbitHighlightVariant;
};

const orbitHighlights: OrbitHighlightConfig[] = [
  {
    id: "rating",
    label: "Customer Rating",
    className: "top-[2%] right-[-6%]",
    imageSrc: "/ratings.png",
    variant: "rating",
  },
  {
    id: "growth",
    label: "Growth Rate",
    className: "bottom-[-4%] left-[-5%]",
    imageSrc: "/growth.png",
    variant: "growth",
  },
];

const orbitIcons = [
  {
    id: "google",
    label: "Google Ads",
    className: "top-[3%] left-[18%]",
    imageSrc: "/laptop.svg",
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
  const [shouldAnimateGlobe, setShouldAnimateGlobe] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (event: MediaQueryListEvent) => {
      setShouldAnimateGlobe(!event.matches);
    };

    setShouldAnimateGlobe(!mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

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
              <Button href="#contact" icon={<ArrowTopRightIcon />}>
                Get In Touch
              </Button>
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
        className="relative z-10 mt-10 flex flex-col items-center gap-8"
        data-animate="fade-up"
      >
        <div className="relative w-full">
          <Image
            src="/globe-line.png"
            alt="Orbital line accent"
            width={1920}
            height={286}
            className="h-auto w-full"
            priority
          />
          <svg
            viewBox="0 0 1920 286"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path id="banner-globe-path" d={GLOBE_WAVE_PATH} />
            </defs>

            {shouldAnimateGlobe ? (
              <g>
                <g>
                  <image
                    href="/globe-for-line.svg"
                    width="96"
                    height="102"
                    x="-48"
                    y="-51"
                    opacity="0.95"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </g>
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;1"
                  keyPoints="0;1;0"
                  calcMode="spline"
                  keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
                  rotate="0"
                >
                  <mpath xlinkHref="#banner-globe-path" href="#banner-globe-path" />
                </animateMotion>
              </g>
            ) : (
              <image
                href="/globe-for-line.svg"
                width="100%"
                height="100%"
                x="912"
                y="173"
                opacity="0.95"
              />
            )}
          </svg>
        </div>

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
