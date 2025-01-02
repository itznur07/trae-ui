export interface TooltipProps {
  content?: string;
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant?: "subtle" | "bordered" | "light";
  placement?: "top" | "bottom" | "left" | "right";
  customContent?: React.ReactNode;
  delay?: number;
  offset?: number;
  animation?: boolean;
}
