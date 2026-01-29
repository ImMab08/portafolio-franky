import React, { ElementType, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExperienceItem } from "@/types/types";

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
      onMouseEnter={setActive}
    >
      {/* Content card */}
      <div className={`${isTop ? "mt-20" : "mb-20"} w-[350px] cursor-default`}>
        <div
          className={`hover:scale-105 transition-all duration-300 bg-complementary rounded-xl ${
            isActive
              ? "shadow-xl border-blue-900"
              : "hover:shadow-lg"
          }`}
        >
          <div className="p-6 space-y-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="gap-2">
                  <p className="text-lg font-semibold text-text-primary">{item.organization}</p>
                  <div className="flex text-xs gap-2 mb-1">
                   <p className="text- text-text-primary/60">{item.type}</p>
                    {/* <p className="text-text-primary/60">{item.period}</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-tertiary mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-text-primary/70 mb-4 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-xs font-semibold border border-tertiary px-2 py-0.5 rounded-full text-text-primary transition-colors"
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
