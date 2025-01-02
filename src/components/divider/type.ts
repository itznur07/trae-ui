import { ReactNode } from "react";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerVariant = "solid" | "dashed" | "dotted" | "double";
export type DividerSize = "sm" | "md" | "lg";
export type DividerColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "foreground";

export interface DividerProps {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  size?: DividerSize;
  color?: DividerColor;
  classNames?: {
    base?: string;
    line?: string;
  };
  startContent?: ReactNode;
  endContent?: ReactNode;
}
