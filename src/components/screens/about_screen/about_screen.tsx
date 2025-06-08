"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TimeLine } from "./time_line";
import { experience, experiencia } from "./data/info";
import { IconLightBulb } from "@/components/icons";
import { ExperienceItem } from "@/components/types/types";
import { useTranslations } from "next-intl";

const AboutScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const tAbout = useTranslations("about");
  const tExperience = useTranslations("experience");

  return (
    <section className="flex flex-col md:flex-row items-center h-auto pt-44 md:pt-0 md:h-screen px-5 md:px-48">
      <div className="w-full md:w-1/2 flex flex-col gap-10 md:gap-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1 md:gap-2 bg-gradient-to-r from-secondary bg-clip-text text-transparent text-sm md:text-lg font-semibold mb-2 md:mb-0">
              <IconLightBulb className="size-4 md:size-6 fill-secondary" />
              {tAbout("title")}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
              {tAbout("subtitle")}{" "}
              <span className="text-secondary">{tAbout("subtitle-span")}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 pr-10 md:pr-92">
              {tAbout("description")}
            </p>
          </motion.div>
        </div>
        <div className="py-5">
          {/* Stats section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {experiencia.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-center hover:shadow-lg transition-shadow">
                    <div className="bg-secondary text-white p-3 rounded-full w-fit mx-auto mb-4">
                      <Icon className="size-5 md:size-6" />
                    </div>
                    <div className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-1/2 overflow-auto">
        {/* Horizontal timeline container */}

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-secondary via-emerald-500 to-green-400 transform -translate-y-1/2 z-0"></div>

          {/* Scrollable container */}
          <motion.div
            className="flex overflow-auto scrollbar-hide"
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex gap-16 px-8 py-16 min-w-max bg-red">
              <div className="w-5 h-full bg-primary absolute top-0 left-0 z-40 mask-radial-[100%_100%] mask-radial-from-40% mask-radial-at-left"></div>
              {experience.map((item: ExperienceItem, index) => {
                const Icon = item.icon;
                return (
                  <TimeLine
                    key={item.id}
                    item={{
                      ...item,
                      type: tExperience(`${index}.type`),
                      title: tExperience(`${index}.title`),
                      organization: tExperience(`${index}.organization`),
                      period: tExperience(`${index}.period`),
                      location: tExperience(`${index}.location`),
                      description: tExperience(`${index}.description`),
                      skills: item.skills.map((_, i) =>
                        tExperience(`${index}.skills.${i}`)
                      ),
                    }}
                    index={index}
                    Icon={Icon}
                    isActive={activeIndex === index}
                    setActive={() => setActiveIndex(index)}
                  />
                );
              })}
              <div className="w-5 h-full bg-primary absolute top-0 right-0 z-40 mask-radial-[100%_100%] mask-radial-from-40% mask-radial-at-right"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutScreen };
