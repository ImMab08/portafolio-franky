import React from "react";

export function IconLogoUnivalle({ width, height, ...props }) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 31 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M31 0H0V30H31V0Z" fill="#e30512" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H19V11.9499C19 16.3774 15.2795 20 10.7323 20H10.0819C5.63681 20 2 16.4589 2 12.1307V2Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11L30 11.0045L20.6046 28L11 11Z"
        fill="#FEFEFE"
        stroke="#e30512"
        strokeWidth="0.5"
        strokeMiterlimit="22.9256"
      />
    </svg>
  );
}
