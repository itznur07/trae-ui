import { ReactNode } from "react";

export type SwitchSize = "sm" | "md" | "lg";
export type SwitchColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface ThumbIconProps {
  icon: ReactNode;
}

export interface SwitchProps {
  children?: React.ReactNode;
  value?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  thumbIcon?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  classNames?: {
    base?: string;
    wrapper?: string;
    thumb?: string;
    label?: string;
    startContent?: string;
    endContent?: string;
    thumbIcon?: string;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
}