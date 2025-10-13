import Image from "next/image";

export type OrbitHighlightVariant = "growth" | "rating";

type OrbitHighlightProps = {
  className?: string;
  label: string;
  imageSrc: string;
  variant: OrbitHighlightVariant;
};

export default function OrbitHighlight({
  className,
  label,
  imageSrc,
  variant,
}: OrbitHighlightProps) {
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
