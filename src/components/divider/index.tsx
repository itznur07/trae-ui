"use client";

import clsx from "clsx";
import React from "react";
import { DividerProps } from "./type";

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  size = "md",
  color = "default",
  classNames,
  startContent,
  endContent,
}) => {
  // Define size classes
  const sizeClasses = {
    sm: orientation === "horizontal" ? "h-px" : "w-px",
    md: orientation === "horizontal" ? "h-2" : "w-2",
    lg: orientation === "horizontal" ? "h-4" : "w-4",
  };

  // Define variant classes
  const variantClasses = {
    solid: "border-t border-solid",
    dashed: "border-t border-dashed",
    dotted: "border-t border-dotted",
    double: "border-t-4 border-double",
  };

  // Define color classes based on theme
  const colorClasses = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-blue-500 text-white",
    secondary: "bg-purple-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-gray-800",
    danger: "bg-red-500 text-white",
    foreground: "bg-gray-800 text-gray-800",
  };

  // Orientation-specific classes
  const orientationClasses = orientation === "horizontal" ? "w-full" : "h-full";

  return (
    <div
      className={clsx(
        "flex items-center",
        orientation === "vertical" && "flex-col"
      )}
    >
      {startContent && (
        <span
          className={clsx(
            "mr-2",
            orientation === "horizontal" ? "mb-0" : "mb-2",
            classNames?.base
          )}
        >
          {startContent}
        </span>
      )}

      <div
        className={clsx(
          "bg-transparent",
          variantClasses[variant],
          colorClasses[color],
          sizeClasses[size],
          orientationClasses,
          classNames?.line
        )}
      />

      {endContent && (
        <span
          className={clsx(
            "ml-2",
            orientation === "horizontal" ? "mt-0" : "mt-2",
            classNames?.base
          )}
        >
          {endContent}
        </span>
      )}
    </div>
  );
};

export default Divider;
