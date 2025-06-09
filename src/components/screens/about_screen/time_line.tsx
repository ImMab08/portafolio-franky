import React, { ElementType, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceItem } from "@/components/types/types";

interface TimeLineProps {
  item: ExperienceItem;
  index: number;
  Icon: ElementType;
  isActive: boolean;
  setActive: () => void;
}

const TimeLine: React.FC<TimeLineProps> = ({
  item,
  index,
  Icon,
  isActive,
  setActive,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Determine if the item is positioned above or below the timeline
  const isTop = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col items-center ${
        isTop ? "flex-col" : "flex-col-reverse"
      }`}
      initial={{ opacity: 0, y: isTop ? -50 : 50 }}
      animate={
        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isTop ? -50 : 50 }
      }
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      onMouseEnter={setActive}
    >
      {/* Content card */}
      <div className={`${isTop ? "mt-20" : "mb-20"} w-80`}>
        <div
          className={`transition-all duration-300 bg-complementary rounded-xl ${
            isActive
              ? "shadow-xl border-blue-200 dark:border-blue-900"
              : "hover:shadow-lg"
          }`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm text-white">
                    {item.type}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-1">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-white">
                  {item.organization}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-xs font-semibold border border-secondary px-2 py-0.5 rounded-full text-white transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { TimeLine };