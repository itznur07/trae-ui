import clsx from "clsx";
import React from "react";
import {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./type";

// Card.tsx
export const Card: React.FC<CardProps> = ({
  variant = "default",
  size = "md",
  rounded = true,
  hoverEffect = true,
  // blurredFooter = false,
  className,
  children,
  ...dataAttributes
}) => {
  // Variant classes
  const variantClasses = {
    default: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg",
    outlined: "bg-white border border-gray-300",
  };

  // Size classes
  const sizeClasses = {
    sm: "p-4 text-sm",
    md: "p-6 text-base",
    lg: "p-8 text-lg",
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        variantClasses[variant],
        sizeClasses[size],
        rounded ? "rounded-lg" : "",
        hoverEffect ? "transition-transform transform hover:scale-105" : "",
        className
      )}
      {...dataAttributes}
    >
      {children}
    </div>
  );
};

// CardHeader.tsx
export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className,
  withDivider = false,
}) => (
  <div className={clsx("px-4 py-2", className)}>
    {children}
    {withDivider && <div className='border-b border-gray-200 my-2' />}
  </div>
);

// CardContent.tsx
export const CardContent: React.FC<CardContentProps> = ({
  children,
  className,
}) => <div className={clsx("p-4", className)}>{children}</div>;

// CardFooter.tsx
export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  blurred = false,
  withDivider = false,
}) => (
  <div
    className={clsx(
      "px-4 py-2",
      blurred ? "backdrop-blur-lg bg-opacity-30" : "",
      className
    )}
  >
    {withDivider && <div className='border-t border-gray-200 my-2' />}
    {children}
  </div>
);

// CardTitle.tsx
export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className,
}) => <h2 className={clsx("text-xl font-semibold", className)}>{children}</h2>;

// CardDescription.tsx
export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className,
}) => <p className={clsx("text-gray-600", className)}>{children}</p>;
