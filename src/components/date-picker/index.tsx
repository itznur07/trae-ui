"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Calendar } from "../calendar";
import { cn } from "../input-otp";

export interface DatePickerProps {
  range?: boolean;
  placeholder?: string;
  onDateChange?: (date: Date | { start: Date; end: Date }) => void;
  disabledDates?: Date[];
}

export const DatePicker: React.FC<DatePickerProps> = ({
  range = false,
  placeholder = "Select date",
  onDateChange,
  disabledDates = [],
}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateChange?.(date);
    setOpen(false);
  };

  const handleRangeSelect = (range: { start: Date; end: Date }) => {
    setSelectedRange(range);
    onDateChange?.(range);
    setOpen(false);
  };

  const formatDate = (date: Date | null) => {
    return date ? date.toLocaleDateString() : "";
  };

  const formatRange = () => {
    const { start, end } = selectedRange;
    return start && end
      ? `${formatDate(start)} - ${formatDate(end)}`
      : placeholder;
  };

  return (
    <div className='relative w-full max-w-md'>
      {/* Input Field */}
      <div
        className={clsx(
          "flex items-center justify-between px-4 py-2 border rounded-lg cursor-pointer",
          "bg-white border-gray-300 hover:border-gray-400",
          { "border-blue-500": open }
        )}
        onClick={toggleOpen}
      >
        <span className='text-sm text-gray-700'>
          {range ? formatRange() : formatDate(selectedDate) || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className='ml-2 transform'
        >
          ▼
        </motion.span>
      </div>

      {/* Calendar Dropdown */}
      {open && (
        <div
          className={cn(
            "absolute z-50 w-full mt-2 bg-white border rounded-lg shadow-lg"
          )}
        >
          <Calendar
            range={range}
            onDateSelect={handleDateSelect}
            onRangeSelect={handleRangeSelect}
            disabledDates={disabledDates}
          />
        </div>
      )}
    </div>
  );
};
