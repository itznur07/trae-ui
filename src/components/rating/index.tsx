import clsx from "clsx";
import React from "react";
import { RatingProps } from "./type";

export const Rating: React.FC<RatingProps> = ({
  max = 5,
  value,
  defaultValue = 0,
  onChange,
  readOnly = false,
  size = "md",
  color = "primary",
  className,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);

  const currentValue = value !== undefined ? value : internalValue;

  const handleClick = (newValue: number) => {
    if (readOnly) return;
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const sizeClass = clsx({
    "w-4 h-4": size === "sm",
    "w-6 h-6": size === "md",
    "w-8 h-8": size === "lg",
  });

  const colorClass = clsx({
    "text-yellow-400": color === "primary",
    "text-gray-400": color === "secondary",
    "text-red-500": color === "error",
    "text-green-500": color === "success",
    "text-yellow-500": color === "warning",
  });

  return (
    <div className={clsx("flex space-x-1", className)} role='radiogroup'>
      {Array.from({ length: max }, (_, i) => (
        <button
          key={i}
          type='button'
          role='radio'
          aria-checked={currentValue > i}
          onClick={() => handleClick(i + 1)}
          disabled={readOnly}
          className={clsx(
            "focus:outline-none transition-all",
            sizeClass,
            colorClass,
            currentValue > i ? "fill-current" : "text-gray-300"
          )}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            stroke='currentColor'
          >
            <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
          </svg>
        </button>
      ))}
    </div>
  );
};
