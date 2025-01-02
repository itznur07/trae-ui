"use client";

import clsx from "clsx";
import React, { ReactNode } from "react";

// Types for the main Table component props
interface TableProps {
  children: ReactNode;
  className?: string;
  loading?: boolean;
}

// Main Table component without pagination
export const Table: React.FC<TableProps> = ({
  children,
  className,
  loading = false,
}) => {
  return (
    <div className={clsx("overflow-x-auto", className)}>
      <div className={clsx("relative", { "opacity-50": loading })}>
        <table className='min-w-full bg-white border border-gray-200 rounded-md'>
          {loading && (
            <div className='absolute inset-0 flex items-center justify-center bg-opacity-70 bg-gray-200'>
              <span className='loader'>Loading...</span>
            </div>
          )}
          {React.Children.map(children, (child) => {
            // Render only valid table sections: TableHeader, TableFooter, TableBody
            if (
              React.isValidElement(child) &&
              (child.type === TableHeader ||
                child.type === TableBody ||
                child.type === TableFooter)
            ) {
              return child;
            }
            return null;
          })}
        </table>
      </div>
    </div>
  );
};

// Table Caption component
interface TableCaptionProps {
  children: ReactNode;
}

export const TableCaption: React.FC<TableCaptionProps> = ({ children }) => (
  <caption className='text-sm text-gray-500 p-2'>{children}</caption>
);

// Table Header component
export const TableHeader: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <thead className={clsx(className, "bg-gray-100")}>{children}</thead>
);

// Table Body component
export const TableBody: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <tbody className={clsx(className)}>{children}</tbody>
);

// Table Footer component
export const TableFooter: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <tfoot className={clsx(className, "bg-gray-50")}>{children}</tfoot>
);

// Table Row component
interface TableRowProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  selectable?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  onClick,
  selectable = false,
}) => (
  <tr
    className={clsx(
      className,
      selectable && "cursor-pointer hover:bg-gray-100"
    )}
    onClick={onClick}
  >
    {children}
  </tr>
);

// Table Cell component
interface TableCellProps {
  children: ReactNode;
  className?: string;
  colSpan?: number;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  colSpan,
}) => (
  <td className={clsx("px-4 py-2 border-b", className)} colSpan={colSpan}>
    {children}
  </td>
);

// Table Head component
interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
  children,
  className,
}) => (
  <th className={clsx("px-4 py-2 border-b font-semibold text-left", className)}>
    {children}
  </th>
);
