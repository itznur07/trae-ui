"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

// ** Progress Component Props **
interface ProgressProps {
  value: number; // Current progress value (0 - 100)
  max?: number; // Max progress value (default 100)
  label?: boolean; // Show percentage label or not
  color?: string; // Predefined color class or custom color (default blue)
  size?: "small" | "medium" | "large"; // Size of the progress bar/circle
  variant?: "line" | "circle"; // Line or circular progress
  backgroundColor?: string; // Background color of the bar (default gray)
  className?: string; // Additional class names for styling
  animated?: boolean; // Whether to animate the progress or not
  style?: React.CSSProperties; // Custom inline styles
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  label = true,
  color = "bg-blue-500",
  size = "medium",
  variant = "line",
  backgroundColor = "bg-gray-300",
  className,
  animated = true,
  style,
}) => {
  // Calculate progress percentage
  const progressPercentage = Math.min((value / max) * 100, 100);

  // Size classes for line and circle variants
  const sizeClasses = {
    small: variant === "line" ? "h-2" : "w-16 h-16",
    medium: variant === "line" ? "h-4" : "w-24 h-24",
    large: variant === "line" ? "h-6" : "w-32 h-32",
  };

  // Render Line Variant
  const renderLine = () => (
    <div className={clsx("w-full", className)} style={style}>
      <div className={clsx("rounded-full", backgroundColor, sizeClasses[size])}>
        <motion.div
          className={clsx(" rounded-full", color, sizeClasses[size])}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: animated ? 0.5 : 0 }}
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      {label && (
        <div className='text-sm text-gray-600 mt-1 text-right'>
          {Math.round(progressPercentage)}%
        </div>
      )}
    </div>
  );

  // Render Circle Variant
  const renderCircle = () => {
    const circleSize = sizeClasses[size];
    const strokeWidth = size === "small" ? 4 : size === "medium" ? 6 : 8;
    const radius = 50 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;

    return (
      <div
        className={clsx(
          "relative flex items-center justify-center",
          circleSize,
          className
        )}
        style={style}
      >
        <svg className='rotate-[-90deg]' width='100' height='100'>
          <circle
            cx='50'
            cy='50'
            r={radius}
            fill='transparent'
            strokeWidth={strokeWidth}
            className={backgroundColor}
          />
          <motion.circle
            cx='50'
            cy='50'
            r={radius}
            fill='transparent'
            strokeWidth={strokeWidth}
            className={color}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: animated ? 0.5 : 0 }}
            strokeLinecap='round'
          />
        </svg>
        {label && (
          <span className='absolute text-sm font-medium text-gray-700'>
            {Math.round(progressPercentage)}%
          </span>
        )}
      </div>
    );
  };

  // Render based on variant
  return variant === "circle" ? renderCircle() : renderLine();
};
