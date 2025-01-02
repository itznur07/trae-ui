import React from "react";
import { colorVariants } from "../../utils/variants";
import { CodeProps } from "./type";

export const Code: React.FC<CodeProps> = ({
  children,
  color = "default",
  size = "sm",
  radius = "sm",
  className,
}) => {
  const colorClasses = {
    default: colorVariants.flat.default,
    primary: colorVariants.flat.primary,
    secondary: colorVariants.flat.secondary,
    success: colorVariants.flat.success,
    warning: colorVariants.flat.warning,
    danger: colorVariants.flat.danger,
    foreground: colorVariants.flat.foreground,
  };

  const sizeClasses = {
    sm: "text-sm p-2",
    md: "text-base p-4",
    lg: "text-lg p-6",
    xl: "text-xl p-8",
  };

  const radiusClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  };

  return (
    <pre
      className={`font-mono overflow-auto ${colorClasses[color]} ${sizeClasses[size]} ${radiusClasses[radius]} ${className}`}
    >
      <code>{children}</code>
    </pre>
  );
};
