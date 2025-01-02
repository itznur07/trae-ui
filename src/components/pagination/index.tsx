import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { PaginationProps, PaginationVariant } from "./type";

type PaginationColor =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "foreground"
  | "success"
  | "accent";

interface PaginationItemProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  shape?: PaginationVariant;
  color?: PaginationColor;
  customStyle?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  currentPage = 1,
  onPageChange,
  loop = false,
  variant = "default",
  color = "primary",
  showBoundaryLinks = false,
  siblingCount = 1
}) => {
  const [page, setPage] = useState<number>(currentPage);

  const totalPages = Math.max(total, 1);

  // Helper functions
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  const handlePageChange = (newPage: number) => {
    if (newPage === page) return;

    // Loop handling
    const nextPage =
      newPage < 1
        ? loop
          ? totalPages
          : 1
        : newPage > totalPages
        ? loop
          ? 1
          : totalPages
        : newPage;

    setPage(nextPage);
    onPageChange?.(nextPage);
  };

  // Pagination range calculation
  const getPageRange = () => {
    const range: number[] = [];
    const startPage = Math.max(1, page - siblingCount);
    const endPage = Math.min(totalPages, page + siblingCount);

    for (let i = startPage; i <= endPage; i++) {
      range.push(i);
    }

    return range;
  };

  return (
    <div className={clsx("flex items-center justify-center space-x-2")}>
      {/* Show "First" if boundary links are enabled */}
      {showBoundaryLinks && (
        <PaginationItem
          isDisabled={isFirstPage}
          onClick={() => handlePageChange(1)}
          shape={variant}
          color={color}
        >
          First
        </PaginationItem>
      )}

      {/* Previous Button */}
      <PaginationPrevious
        isDisabled={isFirstPage}
        onClick={() => handlePageChange(page - 1)}
        shape={variant}
        color={color}
        customStyle='bg-gray-100 hover:bg-gray-300'
      >
        Previous
      </PaginationPrevious>

      {/* Pagination Content */}
      <PaginationContent>
        {getPageRange().map((pageNumber) => (
          <PaginationItem
            key={pageNumber}
            isActive={pageNumber === page}
            onClick={() => handlePageChange(pageNumber)}
            shape={variant}
            color={color}
          >
            {pageNumber}
          </PaginationItem>
        ))}
      </PaginationContent>
      <PaginationNext
        isDisabled={isLastPage}
        onClick={() => handlePageChange(page + 1)}
        shape={variant}
        color={color}
        customStyle='bg-gray-100'
      >
        Next
      </PaginationNext>
     

      {/* Show "Last" if boundary links are enabled */}
      {showBoundaryLinks && (
        <PaginationItem
          isDisabled={isLastPage}
          onClick={() => handlePageChange(totalPages)}
          shape={variant}
          color={color}
        >
          Last
        </PaginationItem>
      )}
    </div>
  );
};

const PaginationContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='flex items-center space-x-2'
    >
      {children}
    </motion.div>
  );
};

export const PaginationItem: React.FC<PaginationItemProps> = ({
  children,
  isDisabled = false,
  isActive = false,
  onClick,
  shape = "default",
  color = "primary",
  customStyle,
}) => {
  const colorClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    foreground: "bg-gray-800 hover:bg-gray-900 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    default: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    accent: "bg-purple-500 hover:bg-purple-600 text-white",
  };

  const itemClasses = clsx(
    "px-4 py-2 rounded-md transition-colors duration-200",
    isDisabled
      ? "cursor-not-allowed opacity-50"
      : customStyle || colorClasses[color],
    isActive ? colorClasses[color] : "bg-gray-100",
    shape === "circle"
      ? "rounded-full"
      : shape === "rounded"
      ? "rounded-md"
      : ""
  );

  return (
    <button className={itemClasses} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

const PaginationPrevious: React.FC<PaginationItemProps> = (props) => (
  <PaginationItem {...props} shape='rounded'>
    Previous
  </PaginationItem>
);

const PaginationNext: React.FC<PaginationItemProps> = (props) => (
  <PaginationItem {...props} shape='rounded'>
    Next
  </PaginationItem>
);
