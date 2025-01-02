import clsx from "clsx";
import React, { useMemo } from "react";

import { Avatar } from "../avatar";
import { AvatarGroupProps } from "./type";

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 5,
  total,
  size = "md",
  color = "default",
  radius = "full",
  isGrid = false,
  isDisabled = false,
  isBordered = false,
  renderCount,
  classNames,
}) => {
  const displayedAvatars = avatars.slice(0, max);
  const hiddenCount = useMemo(
    () => total || avatars.length - max,
    [avatars.length, max, total]
  );

  return (
    <div
      className={clsx(
        "flex",
        isGrid ? "grid grid-cols-3 gap-2" : "-space-x-2",
        classNames?.base
      )}
    >
      {displayedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          {...avatar}
          size={size}
          color={color}
          radius={radius}
          isBordered={isBordered}
          isDisabled={isDisabled}
          classNames={{
            base: clsx(
              "relative z-10 focus:ring focus:ring-offset-2",
              avatar.classNames?.base
            ),
          }}
        />
      ))}

      {hiddenCount > 0 && (
        <div
          className={clsx(
            "flex items-center justify-center text-sm font-semibold bg-gray-300 rounded-full z-10 hover:bg-gray-400 transition",
            classNames?.count
          )}
          tabIndex={0}
          aria-label={`+${hiddenCount} more`}
          title={`+${hiddenCount} more`}
        >
          {renderCount ? renderCount(hiddenCount) : `+${hiddenCount}`}
        </div>
      )}
    </div>
  );
};
