"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TimeLine } from "./time_line";
import { experience, MoreExperienceIcons } from "./data/info";
import { IconLightBulb } from "@/shared/icons";
import { ExperienceItem } from "@/shared/types/types";
import { useTranslations } from "next-intl";

const AboutScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const t = useTranslations();
  const tAbout = useTranslations("about");
  const tExperience = useTranslations("experience");
  const tMoreExperience = t.raw("more_experience");

  return (
    <section className="flex flex-col md:flex-row items-center h-auto md:h-screen max-w-6xl mx-auto px-6">
      <div className="h-screen md:h-auto flex flex-col justify-center gap-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-1 md:gap-2 bg-gradient-to-r from-tertiary bg-clip-text text-transparent text-sm md:text-lg font-semibold mb-2 md:mb-1">
              <IconLightBulb className="size-4 md:size-6 fill-tertiary" />
              {tAbout("title")}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 md:mb-4">
              {tAbout("subtitle")}{" "}
              <span className="text-tertiary">{tAbout("subtitle-span")}</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 md:pr-20">
              {tAbout("description")}
            </p>
          </motion.div>
        </div>
        {/* Stats section */}
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {tMoreExperience.map(
            (stat: { label: string; value: string }, index: number) => {
              const Icon = MoreExperienceIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex hover:shadow-lg transition-shadow"
                >
                  <div className="bg-tertiary text-text-primary p-3 rounded-full w-fit mx-auto mb-4 mr-3 md:mr-4">
                    <Icon className="size-5 md:size-7" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg md:text-2xl font-bold text-text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-text-primary/60">{stat.label}</p>
                  </div>
                </motion.div>
              );
            },
          )}
        </motion.div>
      </div>

      <div className="h-screen md:h-auto w-full md:w-auto md:max-w-2xl relative flex overflow-auto">
        {/* Horizontal timeline container */}

        {/* Timeline line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-tertiary via-emerald-500 to-green-400 transform -translate-y-1/2 z-0"
        ></motion.div>

        {/* Scrollable container */}
        <motion.div
          className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory md:snap-none"
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-16 px-0 md:px-8 min-w-max bg-red">
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
                      tExperience(`${index}.skills.${i}`),
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
    </section>
  );
};

export { AboutScreen };
