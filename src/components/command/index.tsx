import clsx from "clsx";
import React, { ReactNode } from "react";
import { KbdKey, KbdProps } from "./type";

const keyMap: Record<KbdKey, string | ReactNode> = {
  command: "⌘",
  shift: "⇧",
  ctrl: "⌃",
  option: "⌥",
  enter: "⏎",
  delete: "⌫",
  escape: "⎋",
  tab: "⇥",
  capslock: "⇪",
  up: "↑",
  right: "→",
  down: "↓",
  left: "←",
  pageup: "⇞",
  pagedown: "⇟",
  home: "↖",
  end: "↘",
  help: "?",
  space: "␣",
};

export const Command: React.FC<KbdProps> = ({ children, keys, classNames }) => {
  const renderKey = (key: KbdKey) => (
    <abbr
      className={clsx(
        classNames?.abbr,
        "px-2",
        "py-1",
        "bg-gray-700",
        "text-white",
        "rounded",
        "inline-flex",
        "items-center",
        "justify-center",
        "text-sm",
        "mr-1"
      )}
      title={key}
    >
      {keyMap[key] || key.toUpperCase()}
    </abbr>
  );

  return (
    <kbd
      className={clsx(
        classNames?.base,
        "inline-flex",
        "items-center",
        "rounded-md",
        "p-1"
      )}
    >
      {Array.isArray(keys)
        ? keys.map((key) => renderKey(key))
        : keys && renderKey(keys)}
      {children && (
        <span className={clsx(classNames?.content, "ml-2")}>{children}</span>
      )}
    </kbd>
  );
};
