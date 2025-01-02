"use client";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { CarouselProps } from "./type";

export const Carousel = ({
  children,
  orientation = "horizontal",
  autoplay = false,
  delay = 3000,
  spacing = "",
  size = "",
  nextButton,
  prevButton,
  indicator = "dots",
  className = "",
  loop = true,
  duration = 0.5,
  slidesToShow = 1, // New prop for controlling slides to show
  setApi,
}: CarouselProps) => {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    axis: orientation === "vertical" ? "y" : "x",
    loop,
    slidesToScroll: 1, // Keeps scrolling one slide at a time for a better user experience
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Pass API instance if needed
  useEffect(() => {
    if (setApi && emblaApi) setApi([viewportRef, emblaApi]);
  }, [emblaApi, setApi]);

  // Set slide count
  useEffect(() => {
    if (emblaApi) {
      setSlideCount(emblaApi.slideNodes().length);
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && emblaApi) {
      autoplayRef.current = setInterval(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, delay);
    }

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, delay, emblaApi]);

  // Styles for pagination indicator
  const renderindicator = () => {
    if (!slideCount) return null;

    switch (indicator) {
      case "dots":
        return (
          <div className='flex gap-2 mt-4 justify-center'>
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={
                  selectedIndex === index
                    ? "w-2 h-2 rounded-full border border-gray-900 bg-gray-900"
                    : "w-2 h-2 rounded-full border bg-gray-50"
                }
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        );
      case "numbers":
        return (
          <div className='flex gap-2 mt-4 justify-center'>
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={
                  selectedIndex === index
                    ? "px-2 py-1 bg-gray-800 text-white"
                    : "px-2 py-1 bg-gray-200 text-gray-700"
                }
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        );
      case "lines":
        return (
          <div className='flex gap-2 mt-4 justify-center'>
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={
                  selectedIndex === index
                    ? "w-8 h-1 bg-gray-800"
                    : "w-8 h-1 bg-gray-400"
                }
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Calculating the slide width based on the slidesToShow prop
  const slideWidth = `${100 / slidesToShow}%`;

  return (
    <div className={`relative ${size} ${className}`}>
      <div
        className={`overflow-hidden ${
          orientation === "vertical" ? "flex flex-col" : ""
        }`}
        ref={viewportRef}
      >
        <motion.div
          className={`flex ${
            orientation === "vertical" ? "flex-col" : "flex-row"
          } ${spacing}`}
          style={{
            transitionDuration: `${duration}s`,
          }}
        >
          {children &&
            Array.isArray(children) &&
            children.map((child, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${slideWidth}` }} // Set the width dynamically
              >
                {child}
              </div>
            ))}
        </motion.div>
      </div>

      {/* Next and Previous Buttons */}
      {nextButton && (
        <button
          className={`absolute z-10 border border-black rounded-full p-1 ${
            orientation === "vertical" ? "top-1/2 right-0" : "top-1/2 -right-12"
          }`}
          onClick={() => emblaApi && emblaApi.scrollNext()}
        >
          {nextButton}
        </button>
      )}
      {prevButton && (
        <button
          className={`absolute z-10 border border-black rounded-full p-1 ${
            orientation === "vertical" ? "top-1/2 left-0" : "top-1/2 -left-12"
          }`}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
        >
          {prevButton}
        </button>
      )}

      {/* indicator (dots/lines/numbers) */}
      {renderindicator()}
    </div>
  );
};

export const CarouselItem = ({ children }: { children: ReactNode }) => (
  <div className=''>{children}</div>
);
