import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownVariant,
} from "./type";

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  isOpen = false,
  variant = "default",
  disabledKeys = [],
  selectedKeys = [],
  multiSelect = false,
  children,
  classNames,
  onSelectionChange,
}) => {
  const [open, setOpen] = useState(isOpen);
  const toggleOpen = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div className={clsx("relative", classNames?.base)}>
      <DropdownMenuTrigger trigger={trigger} onClick={toggleOpen} />
      <AnimatePresence>
        {open && (
          <DropdownMenuContent
            variant={variant}
            classNames={classNames}
            selectedKeys={selectedKeys}
            disabledKeys={disabledKeys}
            multiSelect={multiSelect}
            onSelectionChange={onSelectionChange}
            onClose={() => setOpen(false)}
          >
            {children}
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </div>
  );
};

const DropdownMenuContent: React.FC<
  DropdownMenuContentProps & {
    onClose: () => void;
    variant: DropdownVariant;
    selectedKeys: string[];
    disabledKeys: string[];
    multiSelect: boolean;
    onSelectionChange?: (selectedKeys: string[]) => void;
    classNames?: Record<"content", string>;
  }
> = ({
  children,
  onClose,
  variant,

  classNames,
}) => {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <motion.div
      className={clsx(
        "absolute z-10 mt-2 bg-white shadow-lg rounded-md",
        variant === "outline" && "border border-gray-300",
        variant === "ghost" && "bg-transparent shadow-none",
        classNames?.content
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={handleClose}
    >
      <ul className='py-1'>{children}</ul>
    </motion.div>
  );
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  key,
  label,
  icon,
  description,
  shortcut,
  disabled = false,
  isSelected = false,
  onAction,
  isSubmenu = false,
  children,
}) => {
  const handleClick = useCallback(() => {
    if (!disabled && onAction) {
      onAction(key);
    }
  }, [disabled, onAction, key]);

  return (
    <li
      className={clsx(
        "px-4 py-2 flex items-center justify-between cursor-pointer select-none",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100",
        isSelected && "bg-gray-200",
        "transition-colors duration-150 ease-in-out"
      )}
      data-disabled={disabled ? "true" : undefined}
      data-selected={isSelected ? "true" : undefined}
      onClick={handleClick}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      <div className='flex-1'>
        <div>{label}</div>
        {description && (
          <div className='text-sm text-gray-500'>{description}</div>
        )}
      </div>
      {shortcut && <div className='text-xs text-gray-400'>{shortcut}</div>}
      {isSubmenu && children}
    </li>
  );
};

const DropdownMenuTrigger: React.FC<
  DropdownMenuTriggerProps & {
    onClick: () => void;
  }
> = ({ trigger, onClick }) => (
  <div className='inline-flex items-center' onClick={onClick}>
    {trigger}
  </div>
);

const DropdownMenuLabel: React.FC<DropdownMenuLabelProps> = ({ children }) => (
  <div className='px-4 py-2 text-sm font-semibold text-gray-600'>
    {children}
  </div>
);

const DropdownMenuSeparator: React.FC = () => (
  <hr className='my-1 border-t border-gray-200' />
);

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
};
