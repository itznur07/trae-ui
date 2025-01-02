import { ReactNode } from "react";

export interface AccordionProps {
  items: {
    key: string;
    title: string | ReactNode;
    subtitle?: string;
    content: React.ReactNode;
    startContent?: React.ReactNode;
    indicator?: React.ReactNode;
  }[];
  expandMultiple?: boolean;
  selectionMode?: "single" | "multiple";
  variant?: "light" | "shadow" | "bordered" | "splitted";
  defaultExpanded?: string[];
  disableKeys?: string[];
  customIndicator?: (isExpanded: boolean) => React.ReactNode;
  compact?: boolean;
  className?: string;
}

export interface AccordionItemProps {
  title: string | ReactNode;
  subtitle?: string;
  content: React.ReactNode;
  startContent?: React.ReactNode;
  isExpanded: boolean;
  onClick: () => void;
  customIndicator?: (isExpanded: boolean) => React.ReactNode;
  indicator?: React.ReactNode;
}
