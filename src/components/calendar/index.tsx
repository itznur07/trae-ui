import clsx from "clsx";
import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  isSameDay,
  isToday,
  startOfMonth,
  subMonths,
} from "date-fns";
import React, { useState } from "react";

export interface Event {
  date: Date;
  label: string;
  color?: string;
}

export interface CalendarProps {
  initialDate?: Date;
  events?: Event[];
  range?: boolean; // Enable range selection
  onDateSelect?: (date: Date) => void;
  onRangeSelect?: (range: { start: Date; end: Date }) => void;
  disabledDates?: Date[]; // Disable specific dates
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  events = [],
  range = false,
  onDateSelect,
  onRangeSelect,
  disabledDates = [],
}) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const isDisabled = (date: Date) =>
    disabledDates.some((disabledDate) => isSameDay(date, disabledDate));

  const isInRange = (date: Date) =>
    rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;

  const handleDateClick = (date: Date) => {
    if (isDisabled(date)) return;

    if (range) {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(null);
        onRangeSelect?.({ start: date, end: date });
      } else {
        setRangeEnd(date);
        if (rangeStart && date >= rangeStart) {
          onRangeSelect?.({ start: rangeStart, end: date });
        }
      }
    } else {
      setSelectedDate(date);
      onDateSelect?.(date);
    }
  };

  const renderDays = () => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);

    const days = [];
    for (let day = startDate; day <= endDate; day = addDays(day, 1)) {
      const event = events.find((e) => isSameDay(e.date, day));

      days.push(
        <button
          key={day.toISOString()}
          className={clsx(
            "relative flex items-center justify-center p-2 w-10 h-10 rounded-md transition-colors",
            {
              "bg-blue-500 text-white": isSameDay(day, selectedDate as any),
              "bg-blue-200": isToday(day),
              "bg-green-300": event && !isDisabled(day),
              "opacity-50 cursor-not-allowed": isDisabled(day),
              "bg-gray-100 hover:bg-gray-200":
                !isSameDay(day, selectedDate as any) &&
                !event &&
                !isDisabled(day),
              "border-2 border-blue-500": isInRange(day),
            }
          )}
          onClick={() => handleDateClick(day)}
          disabled={isDisabled(day)}
        >
          {format(day, "d")}
          {event && (
            <span
              className='absolute bottom-1 left-1 w-2 h-2 rounded-full'
              style={{ backgroundColor: event.color || "blue" }}
            ></span>
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className='p-4 bg-white shadow rounded-md w-full max-w-md'>
      {/* Header */}
      <div className='flex items-center justify-between mb-4'>
        <button
          onClick={handlePrevMonth}
          className='p-2 rounded-md hover:bg-gray-200'
        >
          &lt;
        </button>
        <h2 className='text-lg font-semibold'>
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={handleNextMonth}
          className='p-2 rounded-md hover:bg-gray-200'
        >
          &gt;
        </button>
      </div>

      {/* Days of the Week */}
      <div className='grid grid-cols-7 gap-2 text-center font-semibold text-gray-600'>
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      {/* Days */}
      <div className='grid grid-cols-7 gap-2 mt-2'>{renderDays()}</div>
    </div>
  );
};
