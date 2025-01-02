import { ReactNode } from "react";

export interface Tab {
  label: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  chip?: ReactNode;
}

export type TabsPosition = "top" | "bottom" | "left" | "right";
export type TabsOrientation = "horizontal" | "vertical";
export type TabsColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type TabsVariant = "solid" | "underlined" | "bordered" | "light";

export interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  color?: TabsColor;
  variant?: TabsVariant;
  position?: TabsPosition;
  orientation?: TabsOrientation;
  className?: string;
}
