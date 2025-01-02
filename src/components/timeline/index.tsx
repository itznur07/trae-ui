import clsx from "clsx";
import React from "react";
import {
  TimelineConnectorProps,
  TimelineContentProps,
  TimelineItemProps,
  TimelineOppositeContentProps,
  TimelinePointProps,
  TimelineProps,
} from "./type";

// Main Timeline component
export const Timeline: React.FC<TimelineProps> = ({
  children,
  className,
  align = "left",
}) => {
  const containerClass = clsx(
    "flex flex-col relative py-4 pl-8",
    {
      "items-start": align === "left",
      "items-end": align === "right",
      "items-center": align === "alternate" || align === "reverse-alternate",
    },
    className
  );

  return <div className={containerClass}>{children}</div>;
};

// TimelineItem component
export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("relative mb-8 ", className)}>{children}</div>;
};

// TimelinePoint component
export const TimelinePoint: React.FC<TimelinePointProps> = ({
  className,
  variant = "outlined",
  color = "primary",
  icon,
  image,
}) => {
  const pointClass = clsx(
    "relative flex items-center justify-center w-5 h-5 rounded-full border-2 z-10",
    variant === "filled" ? "bg-current text-white" : "bg-white",
    {
      "border-blue-500 text-blue-500": color === "primary",
      "border-gray-500 text-gray-500": color === "secondary",
      "border-green-500 text-green-500": color === "success",
      "border-red-500 text-red-500": color === "danger",
      "border-yellow-500 text-yellow-500": color === "warning",
      "border-teal-500 text-teal-500": color === "info",
    },
    className
  );

  return (
    <div className={pointClass}>
      {image ? (
        <img
          src={image}
          alt='Timeline Point'
          className='w-full h-full rounded-full'
        />
      ) : (
        icon
      )}
    </div>
  );
};

// TimelineContent component
export const TimelineContent: React.FC<TimelineContentProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("ml-8 -mt-5", className)}>{children}</div>;
};

// TimelineOppositeContent component
export const TimelineOppositeContent: React.FC<
  TimelineOppositeContentProps
> = ({ children, className }) => {
  return <div className={clsx("mr-8", className)}>{children}</div>;
};

// TimelineConnector component
export const TimelineConnector: React.FC<TimelineConnectorProps> = ({
  className,
  color,
  variant,
}) => {
  const connectorClass = clsx(
    "absolute top-2 left-2 w-[2px] h-full  mt-4 rounded-full",
    variant === "solid" ? "border" : "bg-gray-200",
    {
      "bg-blue-500 ": color === "primary",
      "bg-gray-500 ": color === "secondary",
      "bg-green-500 ": color === "success",
      "bg-red-500 ": color === "danger",
      "bg-yellow-500": color === "warning",
      "bg-teal-500 ": color === "info",
    },
    className
  );

  return <div className={connectorClass}></div>;
};

// TimelineSeparator component
export const TimelineSeparator: React.FC = () => {
  return <div className='flex items-center justify-center mr-2' />;
};
