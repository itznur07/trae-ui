import clsx from "clsx";
import React from "react";

export interface RadioGroupProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export interface RadioGroupItemProps {
  id: string;
  value: string;
  variant?: "circle" | "rounded" | "square";
  color?: "primary" | "secondary" | "error" | "success" | "warning";
  className?: string;
  onValueChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  defaultValue,
  onChange,
  children,
  className,
}) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div
      className={clsx("flex flex-col space-y-2", className)}
      role='radiogroup'
    >
      {React.Children.map(children, (child) =>
        React.isValidElement<RadioGroupItemProps & { selected?: boolean }>(child)
          ? React.cloneElement(child, {
              selected: child.props.value === selectedValue,
              onValueChange: handleChange,
            })
          : child
      )}
    </div>
  );
};

const RadioGroupItem: React.FC<
  RadioGroupItemProps & { selected?: boolean }
> = ({
  id,
  value,
  variant = "circle",
  color = "primary",
  selected,
  onValueChange,
  className,
}) => {
  const shapeClass = clsx({
    "rounded-full": variant === "circle",
    "rounded-md": variant === "rounded",
    "rounded-none": variant === "square",
  });

  const colorClass = clsx({
    "border-gray-400 bg-white": !selected,
    "border-blue-500 bg-blue-500": selected && color === "primary",
    "border-gray-500 bg-gray-500": selected && color === "secondary",
    "border-red-500 bg-red-500": selected && color === "error",
    "border-green-500 bg-green-500": selected && color === "success",
    "border-yellow-500 bg-yellow-500": selected && color === "warning",
  });

  return (
    <div className={clsx("flex items-center space-x-2", className)}>
      <input
        id={id}
        type='radio'
        value={value}
        checked={selected}
        onChange={() => onValueChange?.(value)}
        className='hidden'
      />
      <label
        htmlFor={id}
        className={clsx(
          "flex items-center justify-center w-5 h-5 border transition-all cursor-pointer",
          shapeClass,
          colorClass
        )}
      ></label>
    </div>
  );
};

export { RadioGroup, RadioGroupItem };
