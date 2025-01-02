import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { CheckboxProps } from "./type";

// Main Checkbox Component
export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  icon,
  value,
  name,
  size = "md",
  color = "primary",
  radius = "full",
  lineThrough = false,
  isSelected,
  defaultSelected = false,
  isRequired = false,
  isReadOnly = false,
  isDisabled = false,
  isIndeterminate = false,
  isInvalid = false,
  validationState,
  disableAnimation = false,
  classNames,
  onChange,
  onValueChange,
}) => {
  const [checked, setChecked] = useState(defaultSelected);
  const [indeterminate, setIndeterminate] = useState(isIndeterminate);

  // Update internal state if isSelected is controlled
  useEffect(() => {
    if (typeof isSelected === "boolean") {
      setChecked(isSelected);
    }
  }, [isSelected]);

  // Update indeterminate state when prop changes
  useEffect(() => {
    setIndeterminate(isIndeterminate);
  }, [isIndeterminate]);

  // Handle checkbox change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    if (!isDisabled && !isReadOnly) {
      setChecked(newChecked);
      onChange?.(e);
      onValueChange?.(newChecked);
    }
  };

  // Render the icon inside the checkbox
  const renderIcon = () => {
    if (typeof icon === "function") {
      return icon({
        "data-checked": checked.toString(),
        isSelected: checked,
        isIndeterminate: indeterminate,
        disableAnimation,
        className: clsx(classNames?.icon, "checkbox-icon"),
      });
    }
    return icon;
  };

  return (
    <label
      className={clsx(
        classNames?.base,
        "checkbox-wrapper inline-flex items-center cursor-pointer",
        {
          "opacity-50 pointer-events-none": isDisabled,
          "transition-all duration-200": !disableAnimation,
        }
      )}
    >
      <div
        className={clsx(
          classNames?.wrapper,
          "relative flex items-center justify-center",
          {
            "w-4 h-4": size === "sm",
            "w-5 h-5": size === "md",
            "w-6 h-6": size === "lg",

            "rounded-none": radius === "none",
            "rounded-sm": radius === "sm",
            "rounded-md": radius === "md",
            "rounded-lg": radius === "lg",
            "rounded-full": radius === "full",

            "bg-gray-200 border-gray-300": color === "foreground",
            "bg-blue-500 border-blue-600": color === "primary",
            "bg-purple-500 border-purple-600": color === "secondary",
            "bg-green-500 border-green-600": color === "success",
            "bg-yellow-500 border-yellow-600": color === "warning",
            "bg-red-500 border-red-600": color === "danger",

            "border border-gray-300": !checked,
            "line-through": lineThrough,
            "focus:ring-2 focus:ring-offset-2": !isDisabled,
          }
        )}
      >
        <input
          type='checkbox'
          className='absolute opacity-0 cursor-pointer'
          checked={checked}
          value={value}
          name={name}
          required={isRequired}
          readOnly={isReadOnly}
          disabled={isDisabled}
          aria-invalid={isInvalid || validationState === "invalid"}
          aria-required={isRequired}
          aria-checked={indeterminate ? "mixed" : checked}
          onChange={handleChange}
        />
        {indeterminate ? (
          <span className='w-3 h-0.5 bg-gray-900 block' />
        ) : (
          checked && renderIcon()
        )}
      </div>
      {children && (
        <span
          className={clsx(
            classNames?.label,
            "ml-2",
            {
              "text-gray-500": color === "foreground",
              "text-blue-500": color === "primary",
              "text-purple-500": color === "secondary",
              "text-green-500": color === "success",
              "text-yellow-500": color === "warning",
              "text-red-500": color === "danger",
              "line-through": lineThrough && checked,
            },
            "checkbox-label"
          )}
        >
          {children}
        </span>
      )}
    </label>
  );
};
