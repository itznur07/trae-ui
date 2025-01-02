import clsx from "clsx";
import React from "react";
import { SpacerProps } from "./type";

export const Spacer: React.FC<SpacerProps> = ({ x = 1, y = 1, className }) => {
  const spacerClass = clsx(
    `w-${x} h-${y}`, // Tailwind class for width and height
    className
  );

  return <div className={spacerClass} />;
};

export default Spacer;
