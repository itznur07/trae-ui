"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React from "react";
import clsx from "clsx";

// Utility function to merge class names
function cn(...classes: (string | undefined | null)[]) {
  return clsx(classes);
}

// **AlertDialog Components**
export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <AlertDialogPrimitive.Trigger className={cn("cursor-pointer", className)}>
      {children}
    </AlertDialogPrimitive.Trigger>
  );
};

export const AlertDialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 bg-black/50 z-50 transition-opacity",
      className
    )}
    {...props}
  />
));
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogOverlay />
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
          "bg-white rounded-lg shadow-lg p-6 max-w-lg w-full space-y-4",
          "focus:outline-none",
          className
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </div>
  </AlertDialogPrimitive.Portal>
));
AlertDialogContent.displayName = "AlertDialogContent";

export const AlertDialogHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("space-y-2", className)}>{children}</div>
);

export const AlertDialogTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AlertDialogPrimitive.Title
    className={cn("text-lg font-semibold text-gray-900", className)}
  >
    {children}
  </AlertDialogPrimitive.Title>
);

export const AlertDialogDescription: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AlertDialogPrimitive.Description
    className={cn("text-sm text-gray-600", className)}
  >
    {children}
  </AlertDialogPrimitive.Description>
);

export const AlertDialogFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("flex justify-end space-x-2", className)}>{children}</div>
);

export const AlertDialogCancel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AlertDialogPrimitive.Cancel
    className={cn(
      "px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",
      className
    )}
  >
    {children}
  </AlertDialogPrimitive.Cancel>
);

export const AlertDialogAction: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <AlertDialogPrimitive.Action
    className={cn(
      "px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700",
      className
    )}
  >
    {children}
  </AlertDialogPrimitive.Action>
);
