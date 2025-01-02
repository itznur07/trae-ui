export type CodeProps = {
  children: React.ReactNode;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "foreground";
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg";
  className?: string;
};
