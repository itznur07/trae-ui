import { AvatarProps } from "../avatar/type";

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  total?: number;
  size?: AvatarProps['size'];
  color?: AvatarProps['color'];
  radius?: AvatarProps['radius'];
  isGrid?: boolean;
  isDisabled?: boolean;
  isBordered?: boolean;
  renderCount?: (count: number) => React.ReactNode;
  classNames?: {
    base?: string;
    count?: string;
  };
}