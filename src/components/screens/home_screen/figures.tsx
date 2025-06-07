import React from "react";
import { motion } from "framer-motion";

const Figures = () => {
  return (
    <div className="absolute z-50">
      <div className="relative md:top-0 left-20 md:left-32 z-30">
        <motion.svg
          className="size-9 md:size-18 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <path
            d="M4.2433 17.6513L10.5859 5.67095C11.0445 4.80456 11.2739 4.37136 11.5798 4.22973C11.8463 4.10637 12.1535 4.10637 12.42 4.22973C12.726 4.37136 12.9553 4.80456 13.414 5.67094L19.7565 17.6513C20.1668 18.4263 20.372 18.8138 20.3305 19.13C20.2943 19.4059 20.1448 19.6543 19.9179 19.8154C19.6579 19.9999 19.2194 19.9999 18.3425 19.9999H5.65737C4.78044 19.9999 4.34198 19.9999 4.08198 19.8154C3.85505 19.6543 3.70551 19.4059 3.66932 19.13C3.62785 18.8138 3.833 18.4263 4.2433 17.6513Z"
            stroke="#00bb01"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </motion.svg>
      </div>

      <div className="relative top-4 md:top-10 left-28 md:left-48 z-30">
        <motion.svg
          className="size-5 md:size-12 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: -360,
            y: [0, -15, 0, 15, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        >
          <path
            d="M4.2433 17.6513L10.5859 5.67095C11.0445 4.80456 11.2739 4.37136 11.5798 4.22973C11.8463 4.10637 12.1535 4.10637 12.42 4.22973C12.726 4.37136 12.9553 4.80456 13.414 5.67094L19.7565 17.6513C20.1668 18.4263 20.372 18.8138 20.3305 19.13C20.2943 19.4059 20.1448 19.6543 19.9179 19.8154C19.6579 19.9999 19.2194 19.9999 18.3425 19.9999H5.65737C4.78044 19.9999 4.34198 19.9999 4.08198 19.8154C3.85505 19.6543 3.70551 19.4059 3.66932 19.13C3.62785 18.8138 3.833 18.4263 4.2433 17.6513Z"
            stroke="#424242"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </motion.svg>
      </div>

      <div className="relative -top-10 md:-top-20 right-28 md:right-44 z-30">
        <motion.svg
          className="size-9 md:size-18 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="#00bb01"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></rect>
        </motion.svg>
      </div>

      <div className="relative -top-4 md:-top-10 right-28 md:right-60 z-30">
        <motion.svg
          className="size-5 md:size-12 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: 360,
            y: [0, -15, 0, 15, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="2"
            stroke="#424242"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></rect>
        </motion.svg>
      </div>

      <div className="relative top-24 md:top-36 right-28 md:right-58 z-30">
        <motion.svg
          className="size-9 md:size-18 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: 360,
            y: [0, -15, 0, 15, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#00bb01"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </motion.svg>
      </div>

      <div className="relative top-20 md:top-28 right-10 md:right-32 z-30">
        <motion.svg
          className="size-5 md:size-12 opacity-50 md:opacity-100"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: -360,
            y: [0, -15, 0, 15, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
        >
          <path
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="#424242"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </motion.svg>
      </div>

      <div className="relative top-10 md:top-0 left-32 md:left-50 z-30">
        <motion.svg
          className="size-9 md:size-18 opacity-50 md:opacity-100"
          fill="#00bb01"
          viewBox="-3.5 0 19 19"
          animate={{ rotate: [0, 90, 0] }}
          transition={{
            repeat: Infinity,
            times: [0, 0.4, 0.2, 1],
            duration: 4,
            ease: ["easeInOut", "easeInOut", "easeInOut"],
          }}
        >
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
        </motion.svg>
      </div>

      <div className="relative md:top-0 left-24 md:left-32 z-30">
        <motion.svg
          className="size-5 md:size-12 opacity-50 md:opacity-100"
          fill="#424242"
          viewBox="-3.5 0 19 19"
          animate={{
            rotate: 360,
            y: [0, -15, 0, 15, 0],
            x: [0, 15, 0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
        </motion.svg>
      </div>
    </div>
  );
};

export { Figures };
