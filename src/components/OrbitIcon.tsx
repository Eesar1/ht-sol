import Image from "next/image";

type OrbitIconProps = {
  className?: string;
  label: string;
  shortLabel?: string;
  imageSrc?: string;
};

export default function OrbitIcon({
  className,
  label,
  shortLabel,
  imageSrc,
}: OrbitIconProps) {
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
