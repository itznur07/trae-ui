export type KbdKey =
  | "command"
  | "shift"
  | "ctrl"
  | "option"
  | "enter"
  | "delete"
  | "escape"
  | "tab"
  | "capslock"
  | "up"
  | "right"
  | "down"
  | "left"
  | "pageup"
  | "pagedown"
  | "home"
  | "end"
  | "help"
  | "space";

export interface KbdProps {
  children?: React.ReactNode;
  keys?: KbdKey | KbdKey[];
  classNames?: Record<"base" | "abbr" | "content", string>;
}
