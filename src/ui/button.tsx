"use client";

import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  target?: "_blank" | "_self";
};

const baseStyles =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-deep-900 shadow-[0_15px_45px_rgba(20,180,198,0.35)] hover:bg-accent/90",
  secondary:
    "bg-white/10 text-muted-80 border border-white/15 backdrop-blur-sm hover:bg-white/20",
  outline:
    "border border-white/15 text-muted-80 hover:border-accent/70 hover:text-white",
};

export function Button({
  href,
  children,
  icon,
  variant = "primary",
  className,
  target = "_self",
}: ButtonProps) {
  const classes = [baseStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        <span>{children}</span>
        {icon ? <span className="text-lg">{icon}</span> : null}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      <span>{children}</span>
      {icon ? <span className="text-lg">{icon}</span> : null}
    </button>
  );
}
