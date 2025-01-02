"use client";

import React from "react";
import { cn } from "../../utils/cn";

export const NavigationMenu = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav
      className={cn(
        "relative z-50 flex flex-col items-start w-full",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export const NavigationMenuList = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul
      className={cn("flex items-center space-x-4 p-0 m-0 list-none", className)}
      {...props}
    >
      {children}
    </ul>
  );
};

export const NavigationMenuItem = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={cn("relative", className)} {...props}>
      {children}
    </li>
  );
};

export const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none hover:bg-gray-100 focus:bg-gray-200",
        className
      )}
      {...props}
    />
  );
});
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = ({
  children,
  isVisible,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { isVisible?: boolean }) => {
  return (
    <div
      className={cn(
        "absolute top-full left-0 mt-2 bg-white shadow-md rounded-md transition-opacity duration-200 ease-in-out",
        isVisible ? "opacity-100 visible" : "opacity-0 invisible",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "block px-4 py-2 text-sm font-medium rounded-md no-underline transition-colors hover:bg-gray-100 focus:bg-gray-200",
        className
      )}
      {...props}
    />
  );
});
NavigationMenuLink.displayName = "NavigationMenuLink";

export const navigationMenuTriggerStyle = () =>
  "text-sm font-medium transition-colors focus:outline-none hover:text-gray-900";
