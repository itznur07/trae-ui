// const solid = {
//   default: "bg-default text-default-foreground",
//   primary: "bg-primary text-primary-foreground",
//   secondary: "bg-secondary text-secondary-foreground",
//   success: "bg-success text-success-foreground",
//   warning: "bg-warning text-warning-foreground",
//   danger: "bg-danger text-danger-foreground",
//   foreground: "bg-foreground text-background",
// };

// const shadow = {
//   default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
//   primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
//   secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
//   success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
//   warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
//   danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
//   foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background",
// };

// const bordered = {
//   default: "bg-transparent border-default text-foreground",
//   primary: "bg-transparent border-primary text-primary",
//   secondary: "bg-transparent border-secondary text-secondary",
//   success: "bg-transparent border-success text-success",
//   warning: "bg-transparent border-warning text-warning",
//   danger: "bg-transparent border-danger text-danger",
//   foreground: "bg-transparent border-foreground text-foreground",
// };

// const flat = {
//   default: "bg-default/40 text-default-700",
//   primary: "bg-primary/20 text-primary-700",
//   secondary: "bg-secondary/20 text-secondary-700",
//   success: "bg-success/20 text-success-800 dark:text-success",
//   warning: "bg-warning/20 text-warning-800 dark:text-warning",
//   danger: "bg-danger/20 text-danger-800 dark:text-danger-500",
//   foreground: "bg-foreground/10 text-foreground",
// };

// const faded = {
//   default: "border-default bg-default-100 text-default-foreground",
//   primary: "border-default bg-default-100 text-primary",
//   secondary: "border-default bg-default-100 text-secondary",
//   success: "border-default bg-default-100 text-success",
//   warning: "border-default bg-default-100 text-warning",
//   danger: "border-default bg-default-100 text-danger",
//   foreground: "border-default bg-default-100 text-foreground",
// };

// const light = {
//   default: "bg-transparent text-default-foreground",
//   primary: "bg-transparent text-primary",
//   secondary: "bg-transparent text-secondary",
//   success: "bg-transparent text-success",
//   warning: "bg-transparent text-warning",
//   danger: "bg-transparent text-danger",
//   foreground: "bg-transparent text-foreground",
// };

// const ghost = {
//   default: "border-default text-default-foreground",
//   primary: "border-primary text-primary",
//   secondary: "border-secondary text-secondary",
//   success: "border-success text-success",
//   warning: "border-warning text-warning",
//   danger: "border-danger text-danger",
//   foreground: "border-foreground text-foreground hover:!bg-foreground",
// };

// export const colorVariants = {
//   solid,
//   shadow,
//   bordered,
//   flat,
//   faded,
//   light,
//   ghost,
// };

const solid = {
  default: "bg-gray-200 text-gray-900",
  primary: "bg-blue-500 text-white",
  secondary: "bg-purple-500 text-white",
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-gray-900",
  danger: "bg-red-500 text-white",
  foreground: "bg-gray-800 text-white",
};

const shadow = {
  default: "shadow-lg shadow-gray-200/50 bg-gray-200 text-gray-900",
  primary: "shadow-lg shadow-blue-500/40 bg-blue-500 text-white",
  secondary: "shadow-lg shadow-purple-500/40 bg-purple-500 text-white",
  success: "shadow-lg shadow-green-500/40 bg-green-500 text-white",
  warning: "shadow-lg shadow-yellow-500/40 bg-yellow-500 text-gray-900",
  danger: "shadow-lg shadow-red-500/40 bg-red-500 text-white",
  foreground: "shadow-lg shadow-gray-800/40 bg-gray-800 text-white",
};

const bordered = {
  default: "bg-transparent border border-gray-200 text-gray-900",
  primary: "bg-transparent border border-blue-500 text-blue-500",
  secondary: "bg-transparent border border-purple-500 text-purple-500",
  success: "bg-transparent border border-green-500 text-green-500",
  warning: "bg-transparent border border-yellow-500 text-yellow-500",
  danger: "bg-transparent border border-red-500 text-red-500",
  foreground: "bg-transparent border border-gray-800 text-gray-800",
};

const flat = {
  default: "bg-gray-100 text-gray-900",
  primary: "bg-blue-100 text-blue-700",
  secondary: "bg-purple-100 text-purple-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  danger: "bg-red-100 text-red-700",
  foreground: "bg-gray-900 text-white",
};

const faded = {
  default: "bg-gray-100 border border-gray-200 text-gray-900",
  primary: "bg-blue-100 border border-blue-200 text-blue-700",
  secondary: "bg-purple-100 border border-purple-200 text-purple-700",
  success: "bg-green-100 border border-green-200 text-green-700",
  warning: "bg-yellow-100 border border-yellow-200 text-yellow-700",
  danger: "bg-red-100 border border-red-200 text-red-700",
  foreground: "bg-gray-100 border border-gray-900 text-gray-900",
};

const light = {
  default: "bg-transparent text-gray-900",
  primary: "bg-transparent text-blue-500",
  secondary: "bg-transparent text-purple-500",
  success: "bg-transparent text-green-500",
  warning: "bg-transparent text-yellow-500",
  danger: "bg-transparent text-red-500",
  foreground: "bg-transparent text-gray-800",
};

const ghost = {
  default: "border border-gray-200 text-gray-900",
  primary: "border border-blue-500 text-blue-500",
  secondary: "border border-purple-500 text-purple-500",
  success: "border border-green-500 text-green-500",
  warning: "border border-yellow-500 text-yellow-500",
  danger: "border border-red-500 text-red-500",
  foreground:
    "border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
};

export const colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost,
};
