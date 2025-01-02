"use client";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { ModalProps } from "./type";

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  backdropColor = "rgba(0, 0, 0, 0.5)",
  className = "",
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" && onClose();
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => document.body.removeEventListener("keydown", closeOnEscapeKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className='fixed inset-0 z-40'
            style={{ backgroundColor: backdropColor }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={clsx(
              "fixed z-50 left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-lg max-w-lg w-full",
              className
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
              onClick={onClose}
              aria-label='Close Modal'
            >
              ✕
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
