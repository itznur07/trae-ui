export interface RatingProps {
  max?: number; // Maximum number of stars
  value?: number; // Current rating value
  defaultValue?: number; // Default value if uncontrolled
  onChange?: (value: number) => void; // Callback when rating changes
  readOnly?: boolean; // If true, disables interaction
  size?: "sm" | "md" | "lg"; // Size of the stars
  color?: "primary" | "secondary" | "warning" | "error" | "success"; // Color theme
  className?: string; // Custom class for the component
}
