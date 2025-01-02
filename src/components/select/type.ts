export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  placeholder?: string;
  isMulti?: boolean;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  className?: string;
  searchable?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  required?: boolean;
  color?: string; // Custom color
  variant?: "flat" | "bordered" | "underline" | "faded";
  radius?: string; // Border-radius
  label?: string;
  labelPlacement?: "inside" | "outside" | "outside-left";
  startContent?: React.ReactNode; // Custom content before the selected value
  isChip?: boolean; // Show selected items as chips
};
