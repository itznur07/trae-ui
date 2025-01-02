import clsx from "clsx";
import React from "react";

// Utility for class name merging
function cn(...inputs: (string | undefined | null)[]) {
  return clsx(inputs);
}

// ** Alert Types **
type AlertType = "default" | "success" | "warning" | "info";

interface AlertProps {
  type?: AlertType; // Type of the alert for styling
  title?: string; // Title for the alert
  description?: string; // Description for the alert
  className?: string; // Additional class names
}

export const Alert: React.FC<AlertProps> = ({
  type = "default",
  title,
  description,
  className,
}) => {
  const typeClasses = {
    default: "bg-gray-100 text-gray-800 border-gray-300",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    info: "bg-blue-100 text-blue-800 border-blue-500",
  };

  const iconClasses = {
    default: "text-gray-500",
    success: "text-green-500",
    warning: "text-yellow-500",
    info: "text-blue-500",
  };

  const Icon = () => {
    switch (type) {
      case "success":
        return (
          <span className={cn(iconClasses[type], "material-icons")}>
            check_circle
          </span>
        );
      case "warning":
        return (
          <span className={cn(iconClasses[type], "material-icons")}>
            warning
          </span>
        );
      case "info":
        return (
          <span className={cn(iconClasses[type], "material-icons")}>info</span>
        );
      default:
        return (
          <span className={cn(iconClasses[type], "material-icons")}>
            notifications
          </span>
        );
    }
  };

  return (
    <div
      className={cn(
        "flex items-start p-4 rounded border-l-4 shadow-sm space-x-3",
        typeClasses[type],
        className
      )}
    >
      {/* Icon */}
      <div className='flex-shrink-0'>
        <Icon />
      </div>
      {/* Content */}
      <div>
        {title && <h3 className='font-bold text-lg'>{title}</h3>}
        {description && <p className='text-sm mt-1'>{description}</p>}
      </div>
    </div>
  );
};
