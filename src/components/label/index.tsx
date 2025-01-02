import clsx from "clsx";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Utility to merge class names
function cn(...inputs: (string | undefined | null)[]) {
  return twMerge(clsx(inputs));
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  htmlFor?: string;
  children?: React.ReactNode;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, htmlFor, ...props }, ref) => {
    return (
      <label
        ref={ref}
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-medium text-gray-700 select-none cursor-pointer", // Default styling
          className
        )}
        {...props}
        // Prevent text selection on double click
        onMouseDown={(e) => {
          if (e.detail > 1) {
            e.preventDefault();
          }
        }}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";
