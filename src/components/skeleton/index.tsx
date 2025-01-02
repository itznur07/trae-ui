import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { SkeletonProps } from "./type";

export const Skeleton: React.FC<SkeletonProps> = ({
  children,
  isLoaded = false,
  disableAnimation = false,
  classNames,
  variant = "rectangle",
  width = "100%",
  height = "1rem",
  rounded = false,
}) => {
  // Define animation using Framer Motion or Tailwind for shimmer effect
  const shimmerAnimation =
    !disableAnimation && !isLoaded ? (
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent dark:via-gray-800/30`}
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
      />
    ) : null;

  // Variant classes
  const variantClasses = {
    rectangle: `w-full ${height}`,
    circle: `rounded-full ${width} ${height}`,
    text: `w-full h-4 my-2`,
  };

  // Conditional classes for loaded state
  const baseClasses = clsx(
    "relative overflow-hidden bg-gray-200 dark:bg-gray-700",
    disableAnimation || isLoaded ? "bg-transparent" : "animate-pulse",
    rounded ? "rounded-md" : "",
    classNames?.base
  );

  // Skeleton structure
  return (
    <div
      className={clsx(baseClasses, variantClasses[variant])}
      style={{ width: width, height: height }}
    >
      {/* Show shimmer animation if loading */}
      {!isLoaded && shimmerAnimation}

      {/* Loaded Content */}
      <div className={clsx(isLoaded ? "block" : "hidden", classNames?.content)}>
        {isLoaded && children}
      </div>
    </div>
  );
};
