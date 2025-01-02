import { UseEmblaCarouselType } from "embla-carousel-react";
import { ReactNode } from "react";

export type CarouselProps = {
  children: ReactNode;
  orientation?: "vertical" | "horizontal";
  autoplay?: boolean;
  delay?: number;
  spacing?: string;
  size?: string;
  nextButton?: ReactNode;
  prevButton?: ReactNode;
  indicator?: "dots" | "numbers" | "lines";
  className?: string;
  loop?: boolean;
  duration?: number;
  slidesToShow?: number;
  setApi?: (api: UseEmblaCarouselType | null) => void;
};
