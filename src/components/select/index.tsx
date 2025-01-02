import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { CgChevronDown, CgChevronUp, CgClose } from "react-icons/cg";
import { SelectProps } from "./type";

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select...",
  isMulti = false,
  value,
  onChange,
  className,
  searchable = false,
  disabled = false,
  clearable = false,
  required = false,
  color = "blue", // Default color
  variant = "bordered", // Default variant
  radius = "0.375rem", // Default radius
  label,
  labelPlacement = "outside",
  startContent,
  isChip = false,
}) => {
  // State for managing dropdown visibility, selected options, and search input
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | string[]>(
    isMulti ? [] : ""
  );
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize value if provided through props
  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  // Handle selection of options
  const handleSelect = (optionValue: string) => {
    if (isMulti) {
      const selectedArray = selected as string[];
      const newValue = selectedArray.includes(optionValue)
        ? selectedArray.filter((item) => item !== optionValue)
        : [...selectedArray, optionValue];
      setSelected(newValue);
      onChange?.(newValue);
    } else {
      setSelected(optionValue);
      onChange?.(optionValue);
      setIsOpen(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // Check if option is selected
  const isSelected = (optionValue: string) => {
    return isMulti
      ? (selected as string[]).includes(optionValue)
      : selected === optionValue;
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // UseEffect for handling outside click event
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter options based on search input
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  // Classes based on props for styling flexibility
  const selectClasses = clsx(
    "w-full px-3 py-2 flex items-center justify-between focus:outline-none",
    {
      border: variant === "bordered",
      "border-b": variant === "underline",
      "bg-gray-100": variant === "flat",
      "border-0 shadow-sm": variant === "faded",
      [`border-${color}-500`]: color && variant === "bordered",
      [`text-${color}-600`]: color,
      "cursor-not-allowed bg-gray-200": disabled,
    }
  );

  const labelClasses = clsx(
    "text-sm font-medium mb-1",
    labelPlacement === "outside-left" && "inline-block mr-2",
    labelPlacement === "outside" && "block",
    labelPlacement === "inside" &&
      "absolute top-0 left-2 transform -translate-y-6"
  );

  return (
    <div className={clsx("relative", className)} ref={dropdownRef}>
      {/* Label */}
      {label && labelPlacement !== "inside" && (
        <label className={labelClasses} aria-required={required}>
          {label} {required && "*"}
        </label>
      )}

      <div className={clsx("relative", labelPlacement === "inside" && "pt-6")}>
        {/* Select Box */}
        <button
          type='button'
          className={clsx(
            selectClasses,
            "rounded",
            radius && `rounded-${radius}`
          )}
          onClick={toggleDropdown}
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          disabled={disabled}
        >
          {/* Start Content */}
          {startContent && <span className='mr-2'>{startContent}</span>}
          {/* Placeholder or selected value */}
          <span
            className={clsx("flex-1 truncate", !selected && "text-gray-500")}
          >
            {selected && isMulti && isChip
              ? (selected as string[]).map((val) => (
                  <span
                    key={val}
                    className={clsx(
                      "inline-block px-2 py-0.5 mr-1 rounded-full bg-gray-200 text-gray-800 text-sm",
                      `bg-${color}-100 text-${color}-700`
                    )}
                  >
                    {options.find((option) => option.value === val)?.label}
                  </span>
                ))
              : options.find((option) => option.value === selected)?.label ||
                placeholder}
          </span>
          {/* Clear Button */}
          {clearable && selected && (
            <button
              type='button'
              className='ml-2 text-gray-400 hover:text-gray-600 focus:outline-none'
              onClick={() => {
                setSelected(isMulti ? [] : "");
                onChange?.(isMulti ? [] : "");
              }}
              aria-label='Clear selection'
            >
              <CgClose />
            </button>
          )}
          <span className='ml-2'>
            {isOpen ? <CgChevronUp size={20} /> : <CgChevronDown size={20} />}
          </span>
        </button>

        {/* Label (Inside) */}
        {label && labelPlacement === "inside" && (
          <label className={labelClasses} aria-required={required}>
            {label} {required && "*"}
          </label>
        )}

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className='absolute z-10 w-full mt-2 bg-white border rounded shadow-lg max-h-60 overflow-y-auto'
            role='listbox'
          >
            {searchable && (
              <input
                type='text'
                className='w-full p-2 border-b focus:outline-none'
                placeholder='Search...'
                value={search}
                onChange={handleSearchChange}
              />
            )}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={clsx(
                    "px-3 py-2 cursor-pointer hover:bg-gray-200",
                    isSelected(option.value) && "bg-gray-300"
                  )}
                  onClick={() => handleSelect(option.value)}
                  role='option'
                  aria-selected={isSelected(option.value)}
                >
                  {option.label}
                </div>
              ))
            ) : (
              <div className='px-3 py-2 text-gray-500'>No options found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
