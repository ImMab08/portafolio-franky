import React from "react";

export function IconLogoUdemy({ width, height, ...props }) {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9989 8.93315L7.49837 4.46658L0 8.93315V4.46658L7.49946 0L15 4.46658V8.93315H14.9989Z"
        fill="#A435F0"
      />
      <path
        d="M0 12.684H3.9287V22.53C3.9287 25.0738 5.77004 26.314 7.49946 26.314C9.24377 26.314 11.0717 25.0408 11.0717 22.4959V12.684H15V22.7648C15 25.1079 14.2859 26.9163 12.8574 28.1561C11.4282 29.3952 9.64314 29.9987 7.46639 29.9987C5.29181 29.9987 3.50571 29.3964 2.11062 28.1561C0.714078 26.9174 0 25.1762 0 22.8649V12.684Z"
        fill="black"
      />
    </svg>
  );
}
