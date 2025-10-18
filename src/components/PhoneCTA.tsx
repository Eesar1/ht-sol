import type { MouseEvent } from "react";
import Image from "next/image";

type PhoneCTAProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export default function PhoneCTA({ className, onClick }: PhoneCTAProps) {
  const containerClasses = [
    "group relative inline-flex items-center",
    // sizing & math vars
    "[--h:44px] [--r:calc(var(--h)/2)] [--overlap:8px] [--b:1px]",
    // focus ring
    "focus-visible:outline-accent focus-visible:outline-offset-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href="tel:+923174201604"
      aria-label="Call +92 317 420 1604"
      className={containerClasses}
      onClick={onClick}
    >
      {/* Left pill — notch positioned to match circle's center */}
      <span
        className="inline-flex h-11 items-center whitespace-nowrap rounded-full border border-white bg-transparent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-white"
        style={{
          // Notch circle center is at: 100% - overlap + r from the right edge
          // Cut out radius r, starting at r - b to account for border thickness
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at calc(100% - var(--overlap) + var(--r)) 50%, transparent calc(var(--r) - var(--b)), #000 calc(var(--r) - var(--b) + 0.5px))",
          maskImage:
            "radial-gradient(circle var(--r) at calc(100% - var(--overlap) + var(--r)) 50%, transparent calc(var(--r) - var(--b)), #000 calc(var(--r) - var(--b) + 0.5px))",
        }}
      >
        +92 317 420 1604
      </span>

      {/* Right circle — mask left edge to prevent double border */}
     <span
  className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10"
  style={{
    marginLeft: "calc(var(--overlap) * -1)",
    // symmetric trim: use two mirrored planes so top & bottom connect equally
    // --theta is the bevel angle; tweak 6–12deg to taste
    WebkitMaskImage:
      "linear-gradient(calc(90deg + var(--theta, 9deg)), transparent calc(var(--overlap) + var(--b)), #000 calc(var(--overlap) + var(--b) + 0.5px))," +
      "linear-gradient(calc(90deg - var(--theta, 9deg)), transparent calc(var(--overlap) + var(--b)), #000 calc(var(--overlap) + var(--b) + 0.5px))",
    maskImage:
      "linear-gradient(calc(90deg + var(--theta, 9deg)), transparent calc(var(--overlap) + var(--b)), #000 calc(var(--overlap) + var(--b) + 0.5px))," +
      "linear-gradient(calc(90deg - var(--theta, 9deg)), transparent calc(var(--overlap) + var(--b)), #000 calc(var(--overlap) + var(--b) + 0.5px))",
  }}
>
  <Image
    src="/call.svg"
    width={18}
    height={18}
    alt="Call"
    className="duration-300"
  />
</span>

    </a>
  );
}