"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import clsx from "clsx";
import React from "react";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "success"
    | "foreground";
  className?: string;
  thumbIcon?: React.ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onCheckedChange,
  size = "md",
  disabled = false,
  readOnly = false,
  required = false,
  color = "primary",
  className,
  thumbIcon,
}) => {
  const sizeClasses = clsx({
    "w-10 h-6": size === "sm",
    "w-12 h-7": size === "md",
    "w-14 h-8": size === "lg",
  });

  const thumbSizeClasses = clsx({
    "w-4 h-4": size === "sm",
    "w-5 h-5": size === "md",
    "w-6 h-6": size === "lg",
  });

  const colorClasses = clsx({
    "bg-blue-500": color === "primary",
    "bg-gray-500": color === "secondary",
    "bg-red-500": color === "danger",
    "bg-yellow-500": color === "warning",
    "bg-teal-500": color === "info",
    "bg-green-500": color === "success",
    "bg-black": color === "foreground",
    "bg-gray-300": !checked, // Default off-state color
  });

  return (
    <RadixSwitch.Root
      className={clsx(
        "relative inline-flex items-center rounded-full transition-colors",
        sizeClasses,
        colorClasses,
        disabled || readOnly
          ? "opacity-50 cursor-not-allowed"
          : "cursor-pointer",
        className
      )}
      checked={checked}
      onCheckedChange={(value) => !readOnly && onCheckedChange?.(value)} // Prevent change if readOnly
      disabled={disabled}
      required={required}
    >
      <RadixSwitch.Thumb
        className={clsx(
          " rounded-full bg-white shadow-md flex items-center justify-center transition-transform",
          thumbSizeClasses,
          checked ? "translate-x-full" : "translate-x-0"
        )}
      >
        {thumbIcon && (
          <span className={clsx("text-sm flex items-center justify-center")}>
            {thumbIcon}
          </span>
        )}
      </RadixSwitch.Thumb>
    </RadixSwitch.Root>
  );
};
