import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TabsProps } from "./type";

const colorClasses = {
  default: "text-gray-800",
  primary: "text-blue-600",
  secondary: "text-purple-600",
  success: "text-green-600",
  warning: "text-yellow-600",
  danger: "text-red-600",
};

const variantClasses = {
  solid: "bg-gray-100 hover:bg-gray-200",
  underlined: "border-b-2",
  bordered: "border border-gray-300",
  light: "text-gray-500",
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  onChange,
  color = "default",
  variant = "solid",
  position = "top",
  orientation = "horizontal",
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (onChange) onChange(index);
  };

  const isHorizontal = orientation === "horizontal";
  const isPositionTop = position === "top";

  return (
    <div
      className={clsx("flex w-full", className, { "flex-col": isPositionTop })}
    >
      <div
        className={clsx(
          "flex",
          isHorizontal ? "space-x-4" : "space-y-4",
          position === "left" || position === "top"
            ? "order-first"
            : "order-last",
          variantClasses[variant]
        )}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={clsx(
              "py-2 px-4 flex items-center space-x-2 focus:outline-none",
              colorClasses[color],
              activeIndex === index ? "font-bold" : "opacity-70"
            )}
          >
            {tab.icon && <span className='mr-2'>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.chip && <span className='ml-2'>{tab.chip}</span>}
          </button>
        ))}
      </div>

      <div className='mt-4 w-full'>
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[activeIndex].content}
        </motion.div>
      </div>
    </div>
  );
};
