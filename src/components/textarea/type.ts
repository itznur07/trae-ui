import { TextareaHTMLAttributes } from "react";

// Define TextArea types for props
export type TextAreaProps = {
  label?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'outline' | 'filled' | 'underline';
  color?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  maxLength?: number;
  isResizable?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  showCounter?: boolean;
  description?: string;
  errorMessage?: string;
  classNames?: Record<'base' | 'textarea' | 'label' | 'description' | 'error', string>;
  autoResize?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;
