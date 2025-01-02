
export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";
  label?: string;
  labelColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning";
  classNames?: {
    base?: string;
    wrapper?: string;
    circle1?: string;
    circle2?: string;
    label?: string;
  };
}
