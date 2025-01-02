"use client";

import * as RadixSheet from "@radix-ui/react-dialog";
import clsx from "clsx";
import { motion } from "framer-motion";
import * as React from "react";

// Trigger
export const SheetTrigger = RadixSheet.Trigger;

// Root
export const Sheet = RadixSheet.Root;

// Content
interface SheetContentProps extends React.ComponentPropsWithoutRef<"div"> {
  position?: "top" | "right" | "bottom" | "left";
  size?: "sm" | "md" | "lg" | "full";
  children: React.ReactNode;
  className?: string;
}

export const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ position = "right", size = "md", children, className, ...props }, ref) => {
    // Position-specific classes
    const positionClasses = clsx({
      // Top and Bottom: Width always full
      "top-0 left-0 right-0 w-full": position === "top",
      "bottom-0 left-0 right-0 w-full": position === "bottom",
      // Left and Right: Height always full
      "top-0 right-0 h-full": position === "right",
      "top-0 left-0 h-full": position === "left",
    });

    // Size-specific classes
    const sizeClasses = clsx({
      // Height for Top/Bottom
      "h-[20%]": size === "sm" && (position === "top" || position === "bottom"),
      "h-[40%]": size === "md" && (position === "top" || position === "bottom"),
      "h-[60%]": size === "lg" && (position === "top" || position === "bottom"),
      "h-full":
        size === "full" && (position === "top" || position === "bottom"),
      // Width for Left/Right
      "max-w-sm":
        size === "sm" && (position === "right" || position === "left"),
      "max-w-md":
        size === "md" && (position === "right" || position === "left"),
      "max-w-lg":
        size === "lg" && (position === "right" || position === "left"),
      "w-full":
        size === "full" && (position === "right" || position === "left"),
    });

    return (
      <RadixSheet.Portal>
        <RadixSheet.Overlay className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40' />
        <RadixSheet.Content
          asChild
          className={clsx(
            "fixed bg-white shadow-md z-50 transition-transform",
            positionClasses,
            sizeClasses,
            className
          )}
          ref={ref}
          {...props}
        >
          <motion.div
            initial={{
              x:
                position === "right"
                  ? "100%"
                  : position === "left"
                  ? "-100%"
                  : 0,
              y:
                position === "top"
                  ? "-100%"
                  : position === "bottom"
                  ? "100%"
                  : 0,
            }}
            animate={{ x: 0, y: 0 }}
            exit={{
              x:
                position === "right"
                  ? "100%"
                  : position === "left"
                  ? "-100%"
                  : 0,
              y:
                position === "top"
                  ? "-100%"
                  : position === "bottom"
                  ? "100%"
                  : 0,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {/* Default Close Button */}
            <RadixSheet.Close className='absolute top-4 right-4 text-gray-500 hover:text-gray-800'>
              ✕
            </RadixSheet.Close>
            {/* Children */}
            {children}
          </motion.div>
        </RadixSheet.Content>
      </RadixSheet.Portal>
    );
  }
);
SheetContent.displayName = "SheetContent";

// Header
export const SheetHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className='p-4 border-b'>{children}</div>;

// Title
export const SheetTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className='text-lg font-bold'>
    <RadixSheet.Title>{children}</RadixSheet.Title>
  </div>
);

// Description
export const SheetDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className='text-sm text-gray-500'>{children}</p>;

// Footer
export const SheetFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className='p-4 border-t'>{children}</div>;

// Close
export const SheetClose = RadixSheet.Close;
