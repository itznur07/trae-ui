"use client";
import clsx from "clsx";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { createPortal } from "react-dom";

// Utility to merge class names
function cn(...inputs: (string | undefined | null)[]) {
  return clsx(inputs);
}

// Toast Types
export type ToastType = "success" | "error" | "info" | "warning";

// Toast Positions
export type ToastPositionType =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

interface ToastOptions {
  id?: string; // Unique ID for toast
  type?: ToastType; // Type of the toast (for styling)
  title?: string; // Title of the toast
  description?: string; // Description of the toast
  position?: ToastPositionType; // Position to display the toast
  duration?: number; // Time to display the toast (ms)
}

interface ToastContextProps {
  addToast: (toast: ToastOptions) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

// ** ToastProvider Component **
export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    const id = toast.id || Date.now().toString();
    const position = toast.position || "top-right"; // Default position
    setToasts((prev) => [...prev, { ...toast, id, position }]);

    // Auto-remove toast after duration
    setTimeout(() => removeToast(id), toast.duration || 3000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Group toasts by position
  const groupedToasts = toasts.reduce<
    Record<ToastPositionType, ToastOptions[]>
  >(
    (acc, toast) => {
      const position = toast.position || "top-right";
      if (!acc[position]) acc[position] = [];
      acc[position].push(toast);
      return acc;
    },
    {
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      "bottom-right": [],
      "top-center": [],
      "bottom-center": [],
    }
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {Object.entries(groupedToasts).map(([position, positionToasts]) =>
        createPortal(
          <div
            key={position}
            className={clsx("fixed space-y-3 z-50", {
              "top-5 left-5": position === "top-left",
              "top-5 right-5": position === "top-right",
              "bottom-5 left-5": position === "bottom-left",
              "bottom-5 right-5": position === "bottom-right",
              "top-5 left-1/2 transform -translate-x-1/2":
                position === "top-center",
              "bottom-5 left-1/2 transform -translate-x-1/2":
                position === "bottom-center",
            })}
          >
            {positionToasts.map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </div>,
          document.body
        )
      )}
    </ToastContext.Provider>
  );
};

// ** Toast Component **
const Toast: React.FC<ToastOptions> = ({
  id,
  type = "info",
  title,
  description,
}) => {
  const { removeToast } = useToast();

  const typeClasses = {
    success: "bg-green-100 text-green-800 border-green-500",
    error: "bg-red-100 text-red-800 border-red-500",
    info: "bg-blue-100 text-blue-800 border-blue-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
  };

  return (
    <div
      className={cn(
        "px-4 py-2 rounded shadow-md border-l-4 transition-all duration-300 flex flex-col space-y-1",
        typeClasses[type]
      )}
    >
      {title && <h3 className='font-bold'>{title}</h3>}
      {description && <p className='text-sm'>{description}</p>}
      <button
        onClick={() => id && removeToast(id)}
        className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none'
      >
        ✕
      </button>
    </div>
  );
};
