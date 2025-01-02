import clsx from "clsx";
import React, { useState } from "react";
import { TextAreaProps } from "./type";

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  defaultValue,
  placeholder,
  size = "md",
  variant = "outline",
  color = "primary",
  radius = "md",
  maxLength,
  isResizable = true,
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  showCounter = false,
  description,
  errorMessage,
  classNames,
  autoResize = false,
  onChange,
  ...props
}) => {
  const [content, setContent] = useState(defaultValue || "");

  // Handle content change
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
    if (!value) setContent(event.target.value);
  };

  // Dynamic class names
  const textareaClasses = clsx(
    "w-full px-4 py-2 transition-colors focus:outline-none focus:ring-2", // Base styles
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
      "border border-gray-300 focus:border-blue-500": variant === "outline",
      "bg-gray-100 border-none focus:bg-white": variant === "filled",
      "border-b-2 border-gray-300 focus:border-blue-500":
        variant === "underline",
      "text-primary": color === "primary",
      "text-secondary": color === "secondary",
      "text-red-500": color === "danger",
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-full": radius === "full",
      "cursor-not-allowed opacity-50": isDisabled,
      "resize-none": !isResizable,
      resize: isResizable,
    },
    classNames?.textarea
  );

  return (
    <div className={clsx("flex flex-col space-y-1", classNames?.base)}>
      {label && (
        <label className={clsx("font-medium", classNames?.label)}>
          {label}
          {isRequired && <span className='text-red-500'> *</span>}
        </label>
      )}
      <textarea
        value={value || content}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        onChange={handleChange}
        className={textareaClasses}
        rows={autoResize ? undefined : 4}
        style={autoResize ? { height: "auto" } : undefined}
        {...props}
      />
      {showCounter && maxLength && (
        <div className='text-right text-sm text-gray-500'>
          {content.length} / {maxLength}
        </div>
      )}
      {description && (
        <div className={clsx("text-sm text-gray-600", classNames?.description)}>
          {description}
        </div>
      )}
      {errorMessage && (
        <div className={clsx("text-sm text-red-500", classNames?.error)}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
