import clsx from "clsx";
import Link from "next/link";
import React, { Children, cloneElement, ReactElement } from "react";
import { BiChevronRight } from "react-icons/bi";
import { BreadcrumbItemProps, BreadcrumbsProps } from "./type";

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
  variant = "solid",
  color = "foreground",
  size = "md",
  radius = "none",
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  isDisabled = false,
  disableAnimation = false,
  classNames,
  renderEllipsis,
  onAction,
  itemClasses,
}) => {
  const handleAction = (index: number) => {
    if (onAction && !isDisabled) {
      onAction(index);
    }
  };

  const renderChildren = () => {
    const totalItems = Children.count(children);
    if (maxItems && totalItems > maxItems) {
      const start = Children.toArray(children).slice(0, itemsBeforeCollapse);
      const end = Children.toArray(children).slice(
        totalItems - itemsAfterCollapse
      );
      return (
        <>
          {start.map((child, index) =>
            cloneElement(child as ReactElement, {
              key: `breadcrumb-start-${index}`,
              ...(child as ReactElement<any>).props,
              className: clsx((child as ReactElement<any>).props.className, itemClasses),
              onClick: () => handleAction(index),
            })
          )}
          {renderEllipsis ? (
            renderEllipsis()
          ) : (
            <span className={clsx(classNames?.ellipsis, "mx-1")}>...</span>
          )}
          {end.map((child, index) =>
            cloneElement(child as ReactElement, {
              key: `breadcrumb-end-${index}`,
              ...(child as ReactElement<any>).props.className && { className: clsx((child as ReactElement<any>).props.className, itemClasses) },
              onClick: () =>
                handleAction(totalItems - itemsAfterCollapse + index),
            })
          )}
        </>
      );
    }
    return Children.map(children, (child, index) =>
      cloneElement(child as ReactElement, {
        ...(child as ReactElement<any>).props.className && { className: clsx((child as ReactElement<any>).props.className, itemClasses) },
        onClick: () => handleAction(index),
      })
    );
  };

  return (
    <nav
      aria-label='breadcrumbs'
      className={clsx(classNames?.base, "flex items-center", {
        "border border-gray-300": variant === "bordered",
        "bg-gray-100": variant === "solid",
        "text-gray-700": color === "foreground",
        "text-blue-600": color === "primary",
        "text-purple-600": color === "secondary",
        "text-green-600": color === "success",
        "text-yellow-600": color === "warning",
        "text-red-600": color === "danger",

        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",

        "rounded-none": radius === "none",
        "rounded-sm": radius === "sm",
        "rounded-md": radius === "md",
        "rounded-lg": radius === "lg",
        "rounded-full": radius === "full",

        "opacity-50 pointer-events-none": isDisabled,
        "transition-all duration-200": !disableAnimation,
      })}
    >
      <ol className={clsx(classNames?.list, "flex space-x-1")}>
        {renderChildren()}
      </ol>
    </nav>
  );
};

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  children,
  color = "foreground",
  size = "md",
  underline = "none",
  startContent,
  endContent,
  separator = <BiChevronRight size={20} />,
  isCurrent = false,
  hideSeparator = false,
  isDisabled = false,
  disableAnimation = false,
  classNames,
  link,
  onPress,
  onPressStart,
  onPressEnd,
  onKeyDown,
  onKeyUp,
}) => (
  <li
    className={clsx(classNames?.base, "inline-flex items-center cursor-pointer", {
      "text-gray-500": color === "foreground",
      "text-blue-500": color === "primary",
      "text-purple-500": color === "secondary",
      "text-green-500": color === "success",
      "text-yellow-500": color === "warning",
      "text-red-500": color === "danger",

      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",

      underline: underline === "always",
      "hover:underline": underline === "hover",
      "focus:underline": underline === "focus",

      "opacity-50 pointer-events-none": isDisabled,
      "transition-all duration-200": !disableAnimation,
    })}
    onClick={!isDisabled ? onPress : undefined}
    onMouseDown={!isDisabled ? onPressStart : undefined}
    onMouseUp={!isDisabled ? onPressEnd : undefined}
    onKeyDown={!isDisabled ? onKeyDown : undefined}
    onKeyUp={!isDisabled ? onKeyUp : undefined}
  >
    {startContent && <span className='mr-1'>{startContent}</span>}
    <span
      className={clsx(classNames?.item)}
      aria-current={isCurrent ? "page" : undefined}
    >
      {link ? <Link href={link}>{children}</Link> : children}
    </span>
    {!isCurrent && !hideSeparator && (
      <span className={clsx(classNames?.separator, "mx-1")}>{separator}</span>
    )}
    {endContent && <span className='ml-1'>{endContent}</span>}
  </li>
);