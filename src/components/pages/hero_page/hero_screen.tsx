"use client";

import ChatSequence from "@/components/ui/chat_sequence";
import React from "react";

// import { useTranslations } from "next-intl";

const HeroScreen = () => {
  // const t = useTranslations("hero");

  return (
    <section className="bg-primary h-screen flex flex-col items-start p-5">
      <ChatSequence />
    </section>
  );
};

export default HeroScreen;
