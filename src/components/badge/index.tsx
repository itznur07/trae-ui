"use client";
import clsx from "clsx";
import React, { useMemo } from "react";
import { BadgeProps } from "./type";

export const Badge: React.FC<BadgeProps> = ({
  size = "md",
  color = "default",
  variant = "solid",
  shape = "rectangle",
  placement = "top-right",
  isVisible = true,
  showOutline = true,
  classNames = {},
  children,
}) => {
  if (!isVisible) return null;

  // Memoize class combinations
  const badgeClasses = useMemo(() => {
    const sizeClasses = {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-1.5",
      lg: "text-lg px-4 py-2",
    };

    const colorClasses = {
      default: "bg-gray-300 text-gray-800",
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-black",
      danger: "bg-red-500 text-white",
    };

    const variantClasses = {
      flat: "bg-transparent border-2",
      solid: "bg-current border-none",
      faded: "bg-opacity-30 text-opacity-50",
      shadow: "shadow-md",
    };

    const shapeClasses = {
      rectangle: "rounded-md",
      circle: "rounded-full w-8 h-8 flex items-center justify-center",
    };

    const placementClasses = {
      "top-right": "absolute top-0 right-0",
      "bottom-right": "absolute bottom-0 right-0",
      "top-left": "absolute top-0 left-0",
      "bottom-left": "absolute bottom-0 left-0",
    };

    return clsx(
      "inline-block transition-all duration-200 ease-in-out",
      sizeClasses[size],
      colorClasses[color],
      variantClasses[variant],
      shapeClasses[shape],
      placementClasses[placement],
      { "border-2 border-gray-800": showOutline },
      classNames
    );
  }, [size, color, variant, shape, placement, showOutline, classNames]);

  const badgeContentClasses = clsx("font-semibold text-center", classNames);

  return (
    <div
      className={badgeClasses}
      aria-label={children?.toString()}
      title={children?.toString()}
    >
      <span className={badgeContentClasses}>{children}</span>
    </div>
  );
};
