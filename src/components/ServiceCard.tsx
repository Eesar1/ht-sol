import Image from "next/image";
import ArrowTopRightIcon from "@/components/ArrowTopRightIcon";
import ServiceIcon from "@/components/ServiceIcon";

type ServiceCardVariant = "default" | "featured";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: { src: string; alt: string };
  variant?: ServiceCardVariant;
  featuredImageSrc?: string;
  featuredImageAlt?: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
  variant = "default",
  featuredImageSrc = "/social-media.png",
  featuredImageAlt = "Social media engagement",
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
    <div className="group relative flex h-full flex-col items-center" data-animate="fade-up">
      <div
        className={`${baseClasses} ${hoverShadowClass} ${
          variant === "featured" ? featuredClasses : defaultClasses
        }`}
      >
        <ServiceIcon icon={icon} variant={variant} />
        <h3 className="mt-8 text-base font-semibold uppercase tracking-[0.2em] text-white">
          {title}
        </h3>
        <p className="mt-6 text-sm leading-relaxed text-white">
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
                  src={featuredImageSrc}
                  alt={featuredImageAlt}
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
