import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  width?: string | number;
  height?: string | number;
};

export function IconArrowLeft({ width = 24, height = 24, ...props }: IconProps) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      fill="#EDEDED"
      viewBox="0 -960 960 960"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
  );
}
