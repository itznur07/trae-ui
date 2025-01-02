import { InputHTMLAttributes, ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Color =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "default";
type Variant = "solid" | "outline" | "ghost";
type Radius = "none" | "sm" | "md" | "lg" | "full";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: Size;
  color?: Color;
  variant?: Variant;
  radius?: Radius;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  errorMessage?: string;
  description?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  showClearButton?: boolean;
  type?: "text" | "password" | "email" | "number";
  value?: string;
  onClear?: () => void;
  classNames?: Record<
    | "base"
    | "wrapper"
    | "input"
    | "label"
    | "startContent"
    | "endContent"
    | "description"
    | "errorMessage",
    string
  >;
}
