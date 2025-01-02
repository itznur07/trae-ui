import { ReactNode } from "react";

export type ChipColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type ChipVariant =
  | "solid"
  | "bordered"
  | "light"
  | "flat"
  | "dot"
  | "fade"
  | "shadow";
export type ChipSize = "sm" | "md" | "lg";
export type ChipRadius = "rounded" | "rounded-full" | "pill";

export interface ChipProps {
  children: ReactNode;
  color?: ChipColor;
  variant?: ChipVariant;
  size?: ChipSize;
  radius?: ChipRadius;
  disabled?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  avatar?: ReactNode;
  onClose?: () => void;
  className?: string;
}
