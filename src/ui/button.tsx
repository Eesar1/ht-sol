"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

const containerBase =
  "group relative inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const textBase =
  "inline-flex h-11 items-center whitespace-nowrap rounded-full px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-300";

const iconBase =
  "flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300";

type VariantStyles = {
  text: string;
  icon: string;
  textOnly?: string;
};

const variantStyles: Record<ButtonVariant, VariantStyles> = {
  primary: {
    text: "bg-accent text-white  group-hover:bg-accent/90",
    icon: "-ml-2 bg-accent text-white  group-hover:bg-accent/90",
    textOnly:
      "bg-accent text-white  hover:bg-accent/90",
  },
  secondary: {
    text: "border border-white/15 bg-white/10 text-muted-80 backdrop-blur-sm group-hover:bg-white/20",
    icon: "-ml-2 border border-white/15 bg-white/10 text-white backdrop-blur-sm group-hover:bg-white/20",
    textOnly:
      "border border-white/15 bg-white/10 text-muted-80 backdrop-blur-sm hover:bg-white/20",
  },
  outline: {
    text: "border border-white/15 bg-transparent text-muted-80 group-hover:border-accent/70 group-hover:text-white",
    icon: "-ml-2 border border-white/15 bg-transparent text-white group-hover:border-accent/70 group-hover:bg-white/10 group-hover:text-deep-900",
    textOnly:
      "border border-white/15 bg-transparent text-muted-80 hover:border-accent/70 hover:text-white",
  },
};

export function Button({
  href,
  children,
  icon,
  variant = "primary",
  className,
  target = "_self",
  onClick,
  type = "button",
}: ButtonProps) {
  const variantClass = variantStyles[variant];

  const textClasses = [
    textBase,
    icon ? variantClass.text : variantClass.textOnly ?? variantClass.text,
  ]
    .filter(Boolean)
    .join(" ");

  const iconClasses = icon
    ? [iconBase, variantClass.icon].filter(Boolean).join(" ")
    : null;

  const containerClasses = [containerBase, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className={textClasses}>{children}</span>
      {icon ? (
        <span className={iconClasses!}>
          <span className="text-lg leading-none">{icon}</span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={containerClasses}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={containerClasses} onClick={onClick}>
      {content}
    </button>
  );
}
