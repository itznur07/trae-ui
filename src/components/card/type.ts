// Card Variants and Sizes
export type CardVariant = "default" | "elevated" | "outlined";
export type CardSize = "sm" | "md" | "lg";

// Data Attributes Type
export type CardDataAttributes = {
  "data-selected"?: boolean;
  "data-disabled"?: boolean;
};

// Card Props Interface
export interface CardProps extends CardDataAttributes {
  variant?: CardVariant;
  size?: CardSize;
  rounded?: boolean;
  hoverEffect?: boolean;
  blurredFooter?: boolean;
  className?: string;
  children: React.ReactNode;
}

// Slots and Subcomponents Interfaces
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  withDivider?: boolean;
}

export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  blurred?: boolean;
  withDivider?: boolean;
}

export interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
