"use client";
import clsx from "clsx";
import { motion } from "framer-motion"; // Import Framer Motion
import React from "react";
import { GiCheckMark } from "react-icons/gi";

// ** Stepper Container Component **
interface StepperContainerProps {
  children: React.ReactNode;
  currentStep: number; // The current step index (0-based)
  className?: string;
  direction?: "vertical" | "horizontal"; // New prop for orientation
}

export const StepperContainer: React.FC<StepperContainerProps> = ({
  children,
  currentStep,
  className,
  direction = "vertical", // Default to vertical
}) => {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={clsx(
        "flex",
        isHorizontal ? "gap-x-4 items-center" : "flex-col space-y-4",
        className
      )}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement<StepProps>(child)
          ? React.cloneElement(child, {
              isActive: currentStep === index,
              isCompleted: currentStep > index,
              stepNumber: index + 1,
              isHorizontal, // Pass orientation down
            } as StepProps)
          : child
      )}
    </div>
  );
};

// ** Step Component **
interface StepProps {
  children: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
  stepNumber?: number;
  isHorizontal?: boolean; // New prop for orientation
  className?: string;
  customIcon?: React.ReactNode;
}

export const Step: React.FC<StepProps> = ({
  children,
  isActive = false,
  isCompleted = false,
  stepNumber = 0,
  isHorizontal = false,
  className,
  customIcon,
}) => {
  return (
    <div className={clsx("relative", isHorizontal ? "flex items-center" : "")}>
      <motion.div
        className={clsx(
          "flex items-start",
          isHorizontal ? "space-x-2" : "space-x-4",
          className
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <StepIndicator
          isActive={isActive}
          isCompleted={isCompleted}
          stepNumber={stepNumber}
          customIcon={customIcon}
        />
        <div className='flex-1'>{children}</div>
      </motion.div>
      {/* Add StepConnector */}
      <StepConnector isHorizontal={isHorizontal} isCompleted={isCompleted} />
    </div>
  );
};

// ** Step Indicator Component **
interface StepIndicatorProps {
  isActive: boolean;
  isCompleted: boolean;
  stepNumber: number;
  className?: string;
  customIcon?: React.ReactNode;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  isActive,
  isCompleted,
  stepNumber,
  className,
  customIcon,
}) => (
  <div
    className={clsx(
      "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-300",
      className,
      isActive
        ? "border-blue-600 bg-blue-100"
        : isCompleted
        ? "border-green-500 bg-green-100"
        : "border-gray-300 bg-white"
    )}
  >
    {isCompleted ? (
      <motion.span
        className='text-green-500 font-bold'
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <GiCheckMark size={16} />
      </motion.span>
    ) : customIcon ? (
      customIcon
    ) : (
      <span>{stepNumber}</span>
    )}
  </div>
);

// ** Step Label Component **
interface StepLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const StepLabel: React.FC<StepLabelProps> = ({
  children,
  className,
}) => <div className={clsx("text-sm", className)}>{children}</div>;

// ** Step Content Component (Optional) **
interface StepContentProps {
  children: React.ReactNode;
  className?: string;
}

export const StepContent: React.FC<StepContentProps> = ({
  children,
  className,
}) => <div className={clsx("text-gray-600", className)}>{children}</div>;

// ** Step Connector Component **
interface StepConnectorProps {
  isHorizontal?: boolean; // Orientation of the connector
  isCompleted?: boolean; // Connector color changes if completed
}

const StepConnector: React.FC<StepConnectorProps> = ({
  isHorizontal = false,
  isCompleted = false,
}) => (
  <motion.div
    className={clsx(
      "absolute transition-colors duration-300",
      isHorizontal ? "top-1/2 -right-4 w-8 h-0.5" : "left-4 top-10 w-0.5 h-8",
      isCompleted ? "bg-green-500" : "bg-gray-300"
    )}
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 }}
  />
);
