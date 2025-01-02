 export interface AvatarProps {
  src?: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  size?: 'sm' | 'md' | 'lg';
  name?: string;
  icon?: React.ReactNode;
  fallback?: React.ReactNode;
  isBordered?: boolean;
  isDisabled?: boolean;
  showFallback?: boolean;
  isFocusable?: boolean;
  ImgComponent?: React.ElementType;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  classNames?: {
    base?: string;
    img?: string;
    fallback?: string;
    name?: string;
    icon?: string;
  };
}
