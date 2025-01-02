export interface SheetContentProps extends React.ComponentPropsWithoutRef<"div"> {
  position?: "top" | "right" | "bottom" | "left";
  size?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  className?: string;
}
