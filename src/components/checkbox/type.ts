import { ReactNode } from "react";

// IconProps and CheckboxIconProps types
export type IconProps = {
  "data-checked": string;
  isSelected: boolean;
  isIndeterminate: boolean;
  disableAnimation: boolean;
  className: string;
};

export type CheckboxIconProps = ReactNode | ((props: IconProps) => ReactNode);

// Checkbox props types
export interface CheckboxProps {
  children?: ReactNode;
  icon?: CheckboxIconProps;
  value?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "foreground";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  lineThrough?: boolean;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isInvalid?: boolean;
  validationState?: "valid" | "invalid";
  disableAnimation?: boolean;
  classNames?: Record<"base" | "wrapper" | "icon" | "label", string>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (isSelected: boolean) => void;
}
