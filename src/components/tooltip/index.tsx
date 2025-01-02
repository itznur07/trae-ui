import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { TooltipProps } from "./type";

const colorClasses = {
  default: "bg-gray-800 text-white",
  primary: "bg-blue-500 text-white",
  secondary: "bg-purple-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-gray-800",
  danger: "bg-red-500 text-white",
};

const variantClasses = {
  subtle: "opacity-90",
  bordered: "border-2 border-current",
  light: "bg-gray-100 text-gray-900",
};

const placementClasses = {
  top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
  left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  color = "default",
  variant = "subtle",
  placement = "top",
  customContent,
  delay = 0,
  offset = 8,
  animation = true,
}) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setVisible(true), delay);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setVisible(false), delay);
  };

  const tooltipContent = (
    <div
      className={clsx(
        "absolute z-10 p-2 rounded shadow-lg",
        colorClasses[color],
        variantClasses[variant],
        placementClasses[placement],
        { "animate-fadeIn": animation }
      )}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {customContent || content}
    </div>
  );

  return (
    <div
      className='relative inline-flex'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          {tooltipContent}
        </motion.div>
      )}
    </div>
  );
};
