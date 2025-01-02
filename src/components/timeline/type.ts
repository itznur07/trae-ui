// Types for the Timeline components
export type TimelineProps = {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "alternate" | "reverse-alternate";
};

export type TimelineItemProps = {
  children: React.ReactNode;
  className?: string;
};

export type TimelinePointProps = {
  className?: string;
  variant?: "outlined" | "filled";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  icon?: React.ReactNode;
  image?: string;
};

export type TimelineConnectorProps = {
  className?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  variant?: "dotted" | "dashed" | "solid";
};

export type TimelineContentProps = {
  children: React.ReactNode;
  className?: string;
};

export type TimelineOppositeContentProps = {
  children: React.ReactNode;
  className?: string;
};
