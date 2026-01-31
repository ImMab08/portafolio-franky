"use client";

import { animate } from "animejs";
import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  delay?: number;
  scrollRef?: React.RefObject<HTMLDivElement>;
}

const BubbleMessage = ({ text, delay = 0, scrollRef }: Props) => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const [showLoading, setShowLoading] = useState(true);
  const [showText, setShowText] = useState(false);

  const loadingDuration = text.replace(/<(?:.|\n)*?>/gm, "").length * 20 + 1000;

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    animate(bubble, {
      opacity: [0, 1],
      scale: [0.95, 1],
      easing: "easeOutElastic(1, 0.6)",
      duration: 700,
      delay,
    });

    const circles = bubble.querySelectorAll(".circle");

    const loadingPulse = animate(circles, {
      scale: [1, 1.25],
      opacity: [0.5, 1],
      duration: 400,
      loop: true,
      direction: "alternate",
      delay: (el, i) => i * 100 + 50,
    });

    const timeout = setTimeout(() => {
      loadingPulse.pause(); // 👈 DETIENE el efecto de pulso para evitar bugs
      setShowLoading(false);
      setShowText(true);

      if (messageRef.current) {
        const chars = messageRef.current.querySelectorAll(".char");
        animate(chars, {
          opacity: [0, 1],
          translateY: ["0.5rem", "0rem"],
          duration: 300,
          delay: (el, i) => i * 15,
          easing: "easeOutQuad",
        });
      }

      scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
    }, delay + loadingDuration);

    return () => {
      clearTimeout(timeout);
      loadingPulse.pause(); // 👈 también al desmontar el componente
    };
  }, [text, delay, scrollRef]);

  return (
    <div
      ref={bubbleRef}
      className={`bubble left bg-[rgba(206,206,206,.125)] text-white p-4 rounded-full w-fit h-auto mb-2`}
    >
      {showLoading && (
        <div className="loading flex space-x-2">
          <div className="circle size-2 rounded-full bg-white"></div>
          <div className="circle size-2 rounded-full bg-white"></div>
          <div className="circle size-2 rounded-full bg-white"></div>
        </div>
      )}

      {showText && (
        <div ref={messageRef} className="message text-2xl flex flex-wrap">
          {text.split("").map((char, i) => (
            <span key={i} className="char text-white">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default BubbleMessage;
