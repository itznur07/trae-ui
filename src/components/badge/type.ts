export type BadgeSize = "sm" | "md" | "lg";
export type BadgeColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type BadgeVariant = "flat" | "solid" | "faded" | "shadow";
export type BadgeShape = "rectangle" | "circle";
export type BadgePlacement =
  | "top-right"
  | "bottom-right"
  | "top-left"
  | "bottom-left";

export interface BadgeProps {
  size?: BadgeSize;
  color?: BadgeColor;
  variant?: BadgeVariant;
  shape?: BadgeShape;
  placement?: BadgePlacement;
  isVisible?: boolean;
  showOutline?: boolean;
  classNames?: Record<"base" | "badge", string>;
  children: React.ReactNode;
}
