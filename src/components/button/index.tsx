import clsx from "clsx";
import React from "react";
import { ButtonProps } from "./type";

const getVariantClasses = () => ({
  solid: `text-white hover:bg-opacity-90 focus:ring-4 focus:ring-opacity-50 focus:outline-none`,
  faded:
    "bg-opacity-20 hover:bg-opacity-30 focus:ring-2 focus:ring-opacity-40 focus:outline-none",
  bordered:
    "border-2 hover:bg-opacity-10 focus:ring-2 focus:ring-opacity-40 focus:outline-none",
  ghost:
    "bg-transparent hover:bg-opacity-10 focus:ring-2 focus:ring-opacity-40 focus:outline-none",
  flat: "border-none bg-transparent hover:bg-opacity-10 focus:ring-2 focus:ring-opacity-40 focus:outline-none",
  light:
    "bg-opacity-10 hover:bg-opacity-20 focus:ring-2 focus:ring-opacity-40 focus:outline-none",
});

const colorClasses = {
  primary: "bg-blue-500 text-white focus:ring-blue-500",
  secondary: "bg-purple-500 text-white focus:ring-purple-500",
  success: "bg-green-500 text-white focus:ring-green-500",
  warning: "bg-yellow-500 text-gray-800 focus:ring-yellow-500",
  danger: "bg-red-500 text-white focus:ring-red-500",
  default: "bg-gray-200 text-gray-700 focus:ring-gray-400",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
  xl: "px-6 py-4 text-xl",
};

const radiusClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
  none: "rounded-none",
};

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "solid",
  color = "primary",
  size = "md",
  radius = "md",
  disabled = false,
  isLoading = false,
  icon,
  iconPosition = "left",
  loadingPosition = "left",
  className = "",
  onClick,
  children,
}) => {
  const variantClasses = getVariantClasses();

  const buttonClasses = clsx(
    "inline-flex items-center justify-center font-semibold transition duration-200 ease-in-out",
    variantClasses[variant],
    colorClasses[color],
    sizeClasses[size],
    radiusClasses[radius],
    disabled && "opacity-50 cursor-not-allowed",
    !disabled && "cursor-pointer",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50",
    className
  );

  const renderIcon = () =>
    icon && (
      <span
        className={clsx(
          iconPosition === "left" ? "mr-2" : "ml-2",
          isLoading && loadingPosition === iconPosition && "opacity-0"
        )}
      >
        {icon}
      </span>
    );

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <span className='flex items-center justify-center space-x-2'>
          <span className='animate-spin h-5 w-5 border-4 border-t-transparent border-white rounded-full'></span>
          <span>Loading...</span>
        </span>
      ) : (
        <>
          {iconPosition === "left" && renderIcon()}
          <span>{label || children}</span>
          {iconPosition === "right" && renderIcon()}
        </>
      )}
    </button>
  );
};
