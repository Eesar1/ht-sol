import type { MouseEvent } from "react";
import Image from "next/image";

type PhoneCTAProps = {
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export default function PhoneCTA({ className, onClick }: PhoneCTAProps) {
  const containerClasses = [
    "group relative inline-flex items-center focus-visible:outline-offset-2 focus-visible:outline-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href="tel:+923174201604"
      className={containerClasses}
      onClick={onClick}
    >
      <span className="inline-flex border-r-0 h-11 items-center whitespace-nowrap rounded-full border border-white bg-transparent px-6 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-white">
        +92 317 420 1604
      </span>
      <span className="-ml-2 border-l-0 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-transparent text-white transition-colors duration-300 group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-deep-900">
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
