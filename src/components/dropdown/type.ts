import React from "react";

export type DropdownVariant = "default" | "outline" | "ghost" | "underline";

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  isOpen?: boolean;
  variant?: DropdownVariant;
  disabledKeys?: string[];
  selectedKeys?: string[];
  onSelectionChange?: (selectedKeys: string[]) => void;
  multiSelect?: boolean;
  children?: React.ReactNode;
  classNames?: Record<"trigger" | "base" | "content" | "item" | "label" | "separator", string>;
  
}

export interface DropdownItemProps {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  description?: string;
  shortcut?: string;
  disabled?: boolean;
  isSubmenu?: boolean;
  children?: React.ReactNode;
}

export interface DropdownMenuContentProps {
  children?: React.ReactNode;
}

export interface DropdownMenuItemProps extends DropdownItemProps {
  onAction?: (key: string) => void;
  isSelected?: boolean;
}

export interface DropdownMenuLabelProps {
  children: React.ReactNode;
}

export interface DropdownMenuTriggerProps {
  trigger: React.ReactNode;
}
