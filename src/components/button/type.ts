import { ReactNode } from "react";

export type ButtonVariant =
  | "solid"
  | "faded"
  | "bordered"
  | "ghost"
  | "flat"
  | "light";

export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "default";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonRadius = "sm" | "md" | "lg" | "xl" | "full" | "none";

export interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
  disabled?: boolean;
  isLoading?: boolean;
  loadingPosition?: "left" | "right";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}
