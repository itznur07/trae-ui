"use client";

import clsx from "clsx";
import React from "react";
import { Drawer as VaulDrawer } from "vaul";

// Root
export const Drawer = VaulDrawer.Root;

// Trigger
export const DrawerTrigger = VaulDrawer.Trigger;

// Content
interface DrawerContentProps {
  position?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
  className?: string;
}

export const DrawerContent: React.FC<DrawerContentProps> = ({
  position = "bottom", // Default position
  children,
  className,
}) => {
  const positionClasses = clsx({
    "inset-y-0 left-0 w-80": position === "left",
    "inset-y-0 right-0 w-80": position === "right",
    "inset-x-0 top-0 h-1/3": position === "top",
    "inset-x-0 bottom-0 h-1/3": position === "bottom",
  });

  // Animate based on position
  const enterAnimation = clsx({
    "translate-x-0": position === "right",
    "-translate-x-full": position === "left",
    "-translate-y-full": position === "top",
    "translate-y-full": position === "bottom",
  });

  const exitAnimation = clsx({
    "translate-x-full": position === "right",
    "-translate-x-0": position === "left",
    "-translate-y-0": position === "top",
    "translate-y-0": position === "bottom",
  });

  return (
    <VaulDrawer.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
      {/* Hidden DialogTitle for Accessibility */}
      <VaulDrawer.Title className="sr-only">Drawer Title</VaulDrawer.Title>
      <VaulDrawer.Content
        className={clsx(
          "fixed bg-white shadow-lg z-50 overflow-auto transition-transform duration-300",
          positionClasses,
          className
        )}
        data-state-open={enterAnimation}
        data-state-closed={exitAnimation}
      >
        {/* Default Close Button */}
        <VaulDrawer.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          ✕
        </VaulDrawer.Close>
        {children}
      </VaulDrawer.Content>
    </VaulDrawer.Overlay>
  );
};

// Header
export const DrawerHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="p-4 border-b">{children}</div>;

// Title
export const DrawerTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-lg font-bold">{children}</h2>;

// Description
export const DrawerDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm text-gray-500">{children}</p>;

// Footer
export const DrawerFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="p-4 border-t">{children}</div>;

// Close
export const DrawerClose = VaulDrawer.Close;
