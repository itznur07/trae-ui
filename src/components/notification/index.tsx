import { clsx } from "clsx";
import React from "react";
import { toast, Toaster } from "sonner";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes
function cn(...inputs: (string | false | undefined)[]) {
  return twMerge(clsx(inputs));
}

type NotificationType = "success" | "error" | "info" | "warning";

interface NotificationProps {
  type?: NotificationType;
  message: string;
  description?: string;
  position?:
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-center"
    | "bottom-left"
    | "bottom-right";
  duration?: number;
  customStyle?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  type = "info",
  message,
  description,
  position = "top-right",
  duration = 4000,
  customStyle,
}) => {
  // Handler to show notification based on the type
  const showNotification = () => {
    const typeStyles = getTypeStyles(type);

    toast(
      <div className={cn("p-4 rounded-lg shadow-md", typeStyles, customStyle)}>
        <div className='font-semibold'>{message}</div>
        {description && <div className='text-sm mt-1'>{description}</div>}
      </div>,
      {
        duration,
        position,
      }
    );
  };

  // Function to get type styles
  const getTypeStyles = (type: NotificationType) => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "error":
        return "bg-red-100 text-red-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "info":
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  // Expose a button or hook to trigger notifications
  return (
    <>
      {/* Render the Sonner's Toaster */}
      <Toaster position={position} richColors closeButton />

      {/* Button to trigger the notification for demo purposes */}
      <button
        onClick={showNotification}
        className={cn("px-4 py-2 rounded-md text-white", getTypeStyles(type))}
      >
        Show {type.charAt(0).toUpperCase() + type.slice(1)} Notification
      </button>
    </>
  );
};
