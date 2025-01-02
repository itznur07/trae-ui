// Spinner.tsx
"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import { SpinnerProps } from "./type";

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "default",
  label,
  labelColor = "default",
  classNames = {},
}) => {
  // Size mapping
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-4",
    lg: "w-12 h-12 border-4",
  };

  // Color mapping for circles
  const colorClasses = {
    default: "border-gray-400",
    primary: "border-blue-500",
    secondary: "border-purple-500",
    success: "border-green-500",
    danger: "border-red-500",
    warning: "border-yellow-500",
  };

  // Color mapping for label
  const labelColorClasses = {
    default: "text-gray-600",
    primary: "text-blue-500",
    secondary: "text-purple-500",
    success: "text-green-500",
    danger: "text-red-500",
    warning: "text-yellow-500",
  };

  const spinnerBaseClasses = clsx(
    "flex flex-col items-center space-y-2",
    classNames.base
  );

  const wrapperClasses = clsx(
    "relative flex items-center justify-center",
    classNames.wrapper
  );

  const circleClasses1 = clsx(
    "absolute rounded-full border-t-transparent animate-spin",
    sizeClasses[size],
    colorClasses[color],
    classNames.circle1
  );

  const circleClasses2 = clsx(
    "absolute rounded-full border-b-transparent animate-spin",
    sizeClasses[size],
    colorClasses[color],
    classNames.circle2
  );

  const labelClasses = clsx(
    "text-sm font-medium",
    labelColorClasses[labelColor],
    classNames.label
  );

  return (
    <div className={spinnerBaseClasses}>
      <div className={wrapperClasses}>
        <motion.div
          className={circleClasses1}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div
          className={circleClasses2}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>
      <div className='pt-5'>
        {label && <span className={labelClasses}>{label}</span>}
      </div>
    </div>
  );
};
