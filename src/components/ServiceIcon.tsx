import Image from "next/image";

type ServiceIconProps = {
  icon: { src: string; alt: string };
  variant?: "default" | "featured";
};

export default function ServiceIcon({
  icon,
  variant,
}: ServiceIconProps) {
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

      <div className="relative z-10 h-10 w-10">
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className="h-10 w-10"
            style={{
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={40}
            height={40}
            className="h-10 w-10"
            style={{
              filter: "brightness(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
