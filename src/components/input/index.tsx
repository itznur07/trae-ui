import clsx from "clsx";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { InputProps } from "./type";

export const Input: React.FC<InputProps> = ({
  label,
  size = "md",
  color = "default",
  variant = "outline",
  radius = "md",
  disabled = false,
  readOnly = false,
  required = false,
  errorMessage,
  description,
  startContent,
  endContent,
  showClearButton = false,
  type = "text",
  value,
  onChange,
  onClear,
  classNames,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState<string>(value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      const newValue = e.target.value;
      setInternalValue(newValue);
      if (onChange) {
        onChange(e);
      }
    }
  };

  const handleClear = () => {
    setInternalValue("");
    if (onClear) {
      onClear();
    }
  };

  const inputClasses = clsx(
    classNames?.input,
    "px-2",
    "w-full",
    "focus:outline-none",
    "transition-colors",
    "border",
    {
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
      "border-gray-300": color === "default",
      "border-blue-500 text-blue-600": color === "primary",
      "border-purple-500 text-purple-600": color === "secondary",
      "border-green-500 text-green-600": color === "success",
      "border-yellow-500 text-yellow-600": color === "warning",
      "border-red-500 text-red-600": color === "danger",
      "bg-transparent": variant === "ghost",
      "bg-white border": variant === "outline",
      "bg-gray-100": variant === "solid",
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-full": radius === "full",
      "cursor-not-allowed opacity-50": disabled,
    }
  );

  const wrapperClasses = clsx(
    classNames?.wrapper,
    "flex items-center",
    "relative",
    {
      "cursor-not-allowed": disabled,
    }
  );

  return (
    <div className='flex flex-col'>
      {label && (
        <label className={clsx(classNames?.label, "mb-1", "text-gray-700")}>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <div className={wrapperClasses}>
        {startContent && (
          <span className={clsx(classNames?.startContent, "mr-2")}>
            {startContent}
          </span>
        )}
        <input
          {...props}
          type={type}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          className={inputClasses}
        />
        {showClearButton && internalValue && (
          <button
            type='button'
            onClick={handleClear}
            className='absolute right-2 text-gray-700 hover:text-gray-900'
            aria-label='Clear input'
          >
            <CgClose size={14} />
          </button>
        )}
        {endContent && (
          <span className={clsx(classNames?.endContent, "ml-2")}>
            {endContent}
          </span>
        )}
      </div>
      {description && (
        <p
          className={clsx(
            classNames?.description,
            "text-sm",
            "text-gray-500",
            "mt-1"
          )}
        >
          {description}
        </p>
      )}
      {errorMessage && (
        <p
          className={clsx(
            classNames?.errorMessage,
            "text-sm",
            "text-red-500",
            "mt-1"
          )}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};
