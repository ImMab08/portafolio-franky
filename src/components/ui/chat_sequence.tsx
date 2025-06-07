"use client";

import { useEffect, useRef, useState } from "react";
import BubbleMessage from "./bubble_message";
import { useTranslations } from "next-intl";

const ChatSequence = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState<string[]>([]);

  const t = useTranslations("bubbleMessage");

  useEffect(() => {
    let index = 0;
    const messages = [
      `${t("text1")}`,
      `${t("text2")}`,
      `${t("text3")}`,
      `${t("text4")}`,
      `${t("text5")}`,
      `${t("text6")}`,
      `${t("text7")}`,
    ];
    const showNext = () => {
      if (index >= messages.length) return;
      setVisibleMessages((prev) => [...prev, messages[index]]);
      index++;
      setTimeout(showNext, messages[index - 1].length * 20 + 1200);
    };

    showNext();
  }, [t]);

  return (
    <div className="messages flex flex-col p-4 overflow-auto h-screen">
      {visibleMessages.map((msg, i) => (
        <BubbleMessage key={i} text={msg} delay={i * 300} />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};

export default ChatSequence;
