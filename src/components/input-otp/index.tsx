import clsx from "clsx";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// Utility function for className merging
export function cn(...inputs: (string | undefined | null)[]) {
  return twMerge(clsx(inputs));
}

// Main InputOTP Component
export interface InputOTPProps {
  maxLength: number;
  onComplete?: (otp: string) => void;
  pattern?: RegExp; // Validation pattern (e.g., numbers only)
  children: ReactNode;
}

export const InputOTP: React.FC<InputOTPProps> = ({
  maxLength,
  onComplete,
  pattern,
  children,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(maxLength).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Function to handle value change from each slot
  const handleChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // If OTP is complete, trigger onComplete callback
    if (updatedOtp.every((char) => char !== "") && onComplete) {
      onComplete(updatedOtp.join(""));
    }
  };

  const focusNext = (index: number) => {
    if (index < maxLength - 1) {
      setActiveIndex(index + 1);
    }
  };

  const focusPrev = (index: number) => {
    if (index > 0) {
      setActiveIndex(index - 1);
    }
  };

  // Passing state and handlers to each slot
  const slots = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputOTPGroup) {
      return React.cloneElement(child, {
        otp,
        activeIndex,
        handleChange,
        focusNext,
        focusPrev,
        pattern,
      } as InputOTPGroupProps);
    }
    return child;
  });

  return <div className='flex items-center space-x-2'>{slots}</div>;
};

// Slot Group Component
interface InputOTPGroupProps {
  children: ReactNode;
  otp?: string[];
  activeIndex?: number;
  handleChange?: (value: string, index: number) => void;
  focusNext?: (index: number) => void;
  focusPrev?: (index: number) => void;
  pattern?: RegExp;
}

export const InputOTPGroup: React.FC<InputOTPGroupProps> = ({
  children,
  otp,
  activeIndex,
  handleChange,
  focusNext,
  focusPrev,
  pattern,
}) => {
  // Passing state and handlers to each slot
  const slots = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === InputOTPSlot) {
      return React.cloneElement(child, {
        otp,
        activeIndex,
        handleChange,
        focusNext,
        focusPrev,
        pattern,
      } as InputOTPSlotProps);
    }
    return child;
  });

  return <div className='flex space-x-2'>{slots}</div>;
};

// Individual Input Slot Component
interface InputOTPSlotProps {
  index: number;
  otp?: string[];
  activeIndex?: number;
  handleChange?: (value: string, index: number) => void;
  focusNext?: (index: number) => void;
  focusPrev?: (index: number) => void;
  pattern?: RegExp;
}

export const InputOTPSlot: React.FC<InputOTPSlotProps> = ({
  index,
  otp = [],
  activeIndex,
  handleChange,
  focusNext,
  focusPrev,
  pattern,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Set focus on the active input
  useEffect(() => {
    if (activeIndex === index && inputRef.current) {
      inputRef.current.focus();
    }
  }, [activeIndex, index]);

  const value = otp[index] || "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Validate input if pattern is provided
    if (pattern && !pattern.test(inputValue) && inputValue !== "") {
      return;
    }

    handleChange && handleChange(inputValue, index);

    // Move focus to next slot if valid input
    if (inputValue && inputValue.length === 1) {
      focusNext && focusNext(index);
    }
  };

  // Handle backspace to move to previous slot
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !value) {
      focusPrev && focusPrev(index);
    }
  };

  return (
    <input
      ref={inputRef}
      type='text'
      maxLength={1}
      value={value}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      className={cn(
        "w-12 h-12 border border-gray-300 rounded-md text-center text-xl",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "transition duration-200",
        activeIndex === index ? "ring-2 ring-blue-500" : ""
      )}
    />
  );
};

// Separator Component
export const InputOTPSeparator: React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-4 h-px bg-gray-400' />
    </div>
  );
};
