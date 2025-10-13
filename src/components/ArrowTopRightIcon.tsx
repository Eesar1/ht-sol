import type { SVGProps } from "react";

export type ArrowTopRightIconProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

export default function ArrowTopRightIcon({
  className,
  color = "currentColor",
  width = 14,
  height = 14,
  ...props
}: ArrowTopRightIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 11L11 3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3H11V9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
