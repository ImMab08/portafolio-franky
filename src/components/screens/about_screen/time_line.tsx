import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const TimeLine = ({ item, index, Icon, isActive, setActive }) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  // Update scroll button states
  const handleScrollUpdate = () => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScrollUpdate);
      return () => container.removeEventListener("scroll", handleScrollUpdate);
    }
  }, []);
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
      {/* Timeline dot */}
      <motion.div
        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full z-10 border-4 border-white dark:border-gray-800 ${
          isActive
            ? "bg-gradient-to-r from-blue-500 to-purple-600"
            : "bg-gray-300 dark:bg-gray-600"
        }`}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      />

      {/* Connector line */}
      <motion.div
        className={`absolute w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent ${
          isTop ? "top-1/2 bottom-0 h-16" : "top-0 bottom-1/2 h-16"
        }`}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      />

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
                  <div className="text-xs">
                    {item.type === "education" ? "Educación" : "Experiencia"}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {item.organization}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {item.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Year indicator */}
      <motion.div
        className={`absolute ${
          isTop ? "-bottom-2" : "-top-2"
        } left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md border border-gray-200 dark:border-gray-700 z-20`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
      >
        <span className="text-sm font-medium">
          {item.period.split(" - ")[0]}
        </span>
      </motion.div>
    </motion.div>
  );
};

export { TimeLine };
