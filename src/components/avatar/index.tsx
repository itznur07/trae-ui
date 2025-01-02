import clsx from "clsx";
import React, { useState } from "react";
import { AvatarProps } from "./type";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  color = "default",
  radius = "full",
  size = "md",
  name,
  icon,
  fallback,
  isBordered = false,
  isDisabled = false,
  showFallback = false,
  isFocusable = false,
  ImgComponent = "img",
  imgProps,
  classNames,
}) => {
  const [isImageError, setIsImageError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-md",
    lg: "w-16 h-16 text-lg",
  };

  const colorClasses = {
    default: "bg-gray-200",
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    danger: "bg-red-500 text-white",
  };

  const borderClasses = isBordered ? "ring-2 ring-white" : "";
  const radiusClasses =
    radius === "full"
      ? "rounded-full"
      : radius === "sm"
      ? "rounded-sm"
      : radius === "md"
      ? "rounded-md"
      : "rounded-lg";
  const disableClasses = isDisabled ? "opacity-50 cursor-not-allowed" : "";
  const fallbackContent = fallback || (name ? name.charAt(0) : icon);

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center",
        colorClasses[color],
        sizeClasses[size],
        radiusClasses,
        borderClasses,
        disableClasses,
        classNames?.base
      )}
      aria-disabled={isDisabled}
      tabIndex={isFocusable ? 0 : -1}
      title={name} // Tooltip showing the full name
    >
      {!isImageError && src && !showFallback ? (
        <ImgComponent
          src={src}
          alt={name}
          onError={() => setIsImageError(true)} // Handle broken image URLs
          className={clsx("object-cover", radiusClasses, classNames?.img)}
          {...imgProps}
        />
      ) : (
        <div
          className={clsx(
            "flex items-center justify-center",
            classNames?.fallback
          )}
        >
          {fallbackContent}
        </div>
      )}
    </div>
  );
};
