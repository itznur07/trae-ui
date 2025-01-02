import React from "react";

export interface SkeletonProps {
  children?: React.ReactNode; // Content to show when loaded
  isLoaded?: boolean; // To control when loading is complete
  disableAnimation?: boolean; // Whether to disable animation
  classNames?: Record<"base" | "content", string>; // Custom class names for base and content
  variant?: "rectangle" | "circle" | "text"; // Type of skeleton shape
  width?: string; // Width of the skeleton
  height?: string; // Height of the skeleton
  rounded?: boolean; // Option for rounded corners
}
