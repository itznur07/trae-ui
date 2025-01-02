import { ReactNode } from "react";

export interface BreadcrumbsProps {
  children: ReactNode;
  variant?: "solid" | "bordered" | "light";
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  underline?: "none" | "active" | "hover" | "focus" | "always";
  separator?: ReactNode;
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  hideSeparator?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  itemClasses?: Record<"base" | "item" | "separator", string>;
  classNames?: Record<"base" | "list" | "ellipsis" | "separator", string>;
  onAction?: (key: React.Key) => void;
  renderEllipsis?: () => ReactNode;
}

export interface BreadcrumbItemProps {
  children: ReactNode;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  underline?: "none" | "active" | "hover" | "focus" | "always";
  startContent?: ReactNode;
  endContent?: ReactNode;
  separator?: ReactNode;
  isCurrent?: boolean;
  isLast?: boolean;
  hideSeparator?: boolean;
  isDisabled?: boolean;
  disableAnimation?: boolean;
  classNames?: Record<"base" | "item" | "separator", string>;
  link?: string;
  onPress?: (e: React.MouseEvent) => void;
  onPressStart?: (e: React.MouseEvent) => void;
  onPressEnd?: (e: React.MouseEvent) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onKeyUp?: (e: React.KeyboardEvent) => void;
}
