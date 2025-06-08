"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { TimeLine } from "./time_line";
import { experience, experiencia } from "./data/info";
import { IconLightBulb } from "@/components/icons";
import { ExperienceItem } from "@/components/types/types";

const AboutScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex items-center h-screen px-5 md:px-48">
      <div className="w-1/2 flex flex-col gap-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-secondary  bg-clip-text text-transparent text-lg font-semibold">
              <IconLightBulb className="w-6 h-6 fill-secondary" />
              MI TRAYECTORIA
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Sobre <span className="text-secondary">mí</span>
            </h2>
            <p className="text-xl text-gray-300 pr-92">
              Un viaje de crecimiento continuo, desde los fundamentos académicos
              hasta liderar proyectos innovadores
            </p>
          </motion.div>
        </div>
        <div className="py-5">
          {/* Stats section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-2"
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
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="w-1/2 overflow-auto">
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
              {experience.map((item: ExperienceItem, index) => {
                const Icon = item.icon;
                return (
                  <TimeLine
                    key={item.id}
                    item={item}
                    index={index}
                    Icon={Icon}
                    isActive={activeIndex === index}
                    setActive={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { AboutScreen };

{
  /* Timeline navigation controls
        <div className="flex justify-between items-center mb-8">
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div onClick={() => handleScroll("left")} className="rounded-full">
              <div className="h-4 w-4" />
            </div>
            <div onClick={() => handleScroll("right")} className="rounded-full">
              <div className="h-4 w-4" />
            </div>
          </motion.div>
        </div> */
}
