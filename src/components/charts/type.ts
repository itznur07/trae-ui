// Enhanced types to support multiple data keys
export interface ChartProps {
  type: "pie" | "bar" | "line" | "area"; // Chart type
  data: unknown[]; // Array of data points for the chart
  dataKeys: string[]; // Data keys for the chart values (for multiple series)
  categoryKey?: string; // Category key for bar/line/area x-axis
  colors?: string[]; // Colors to use for chart segments
  title?: string; // Optional title for the chart
  width?: number | string; // Width of the chart
  height?: number | string; // Height of the chart
}