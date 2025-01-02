export type PaginationVariant = "default" | "rounded" | "circle" | "compact";
export type PaginationSize = "sm" | "md" | "lg";
export type PaginationColor = "primary" | "secondary" | "accent";

export interface PaginationProps {
  total: number; // Total number of pages
  currentPage?: number; // Controlled current page
  onPageChange?: (page: number) => void; // Page change event
  loop?: boolean; // Loop pages from end to start
  variant?: PaginationVariant; // Shape variant
  size?: PaginationSize; // Size variant
  color?: PaginationColor; // Color variant
  showBoundaryLinks?: boolean; // Show first/last page links
  siblingCount?: number; // Number of page links to show on either side of the current
  boundaryCount?: number; // Number of boundary pages to show
}

export interface PaginationItemProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
  shape?: PaginationVariant;
}
