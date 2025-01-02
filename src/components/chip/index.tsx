
import clsx from "clsx";
import React from "react";
import { ChipProps } from "./type";

const colorClasses = {
  default: "bg-gray-200 text-gray-800",
  primary: "bg-blue-500 text-white",
  secondary: "bg-purple-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-gray-800",
  danger: "bg-red-500 text-white",
};

const variantClasses = {
  solid: "",
  bordered: `border bg-transparent`,
  light: "bg-opacity-10 text-opacity-90",
  flat: "shadow-none",
  dot: `before:content-['•'] before:mr-1`,
  fade: "bg-opacity-20",
  shadow: "shadow-lg",
};

export const Chip: React.FC<ChipProps> = ({
  children,
  color = "default",
  variant = "solid",
  size = "md",
  radius = "rounded-full",
  disabled = false,
  startContent,
  endContent,
  avatar,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center px-2 py-1",
        colorClasses[color],
        variantClasses[variant],
        radius,
        size === "sm"
          ? "text-xs px-2 py-0.5"
          : size === "lg"
          ? "text-lg px-3 py-1.5"
          : "text-sm",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      {avatar && <span className='mr-2'>{avatar}</span>}
      {startContent && <span className='mr-1'>{startContent}</span>}
      <span>{children}</span>
      {endContent && <span className='ml-1'>{endContent}</span>}
      {onClose && (
        <button
          onClick={onClose}
          className='ml-2 focus:outline-none hover:bg-opacity-20 p-1 rounded-full'
          aria-label='Remove'
        >
          ✕
        </button>
      )}
    </div>
  );
};
