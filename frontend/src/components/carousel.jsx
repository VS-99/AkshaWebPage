import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselItems } from "../utils/carousel"; // Adjust the import path as necessary
import { div } from "framer-motion/client";

// Sample images - replace with your actual imports

export default function DetectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality with enhanced timing
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Increased to 4 seconds for better viewing time

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const getVisibleItems = () => {
    const items = [];
    const totalItems = carouselItems.length;

    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      items.push({
        ...carouselItems[index],
        position: i,
        index: index,
      });
    }

    return items;
  };

  const getItemClasses = (position) => {
  const baseClasses =
    "absolute transition-all duration-1000 ease-out cursor-pointer transform-gpu";

  switch (position) {
    case -2:
      return `${baseClasses} left-0 lg:left-16 xl:left-28 top-1/2 -translate-y-1/2 
              w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 
              opacity-50 scale-50 z-10 blur-sm 
              hover:opacity-40 hover:scale-55`;

    case -1:
      return `${baseClasses} left-32 lg:left-56 xl:left-0 top-1/2 -translate-y-1/2
              w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 
              opacity-70 scale-95 z-20 
              hover:opacity-70 hover:scale-90`;

    case 0:
      return `${baseClasses} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] 
              opacity-100 scale-105 z-30 shadow-2xl 
              hover:scale-110`;

    case 1:
      return `${baseClasses} right-32 lg:right-56 xl:right-0 top-1/2 -translate-y-1/2 
              w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 xl:w-72 xl:h-72 
              opacity-70 scale-95 z-20 
              hover:opacity-70 hover:scale-90`;

    case 2:
      return `${baseClasses} right-0 lg:right-16 xl:right-28 top-1/2 -translate-y-1/2 
              w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 
              opacity-50 scale-50 z-10 blur-sm 
              hover:opacity-40 hover:scale-55`;

    default:
      return `${baseClasses} opacity-0 scale-0`;
  }
};

  return (
    <div className="bg-white h-[1100px]">
      <div className="bg-slate-800 min-h-screen py-12 px-4 pb-[265px] ">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Reasons To Choose Us
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See how Aksha responds to real-world events, from overcrowding and
              fire alerts to unusual behaviour, enhancing safety and compliance
              across industries.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative h-96 mb-8 mt-30">
            {" "}
            {/* Increased height */}
            <div className="relative w-[95%] mx-auto h-full">
              {" "}
              {/* Increased from w-[90%] to w-[95%] */}
              {getVisibleItems().map((item) => (
                <div
                  key={`${item.id}-${item.position}`}
                  className={getItemClasses(item.position)}
                  onClick={() => {
                    if (item.position !== 0) {
                      setIsAutoPlaying(false);
                      setCurrentIndex(item.index);
                      setTimeout(() => setIsAutoPlaying(true), 5000);
                    }
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                    <div className="h-3/4 overflow-hidden relative group">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {item.position === 0 && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </div>
                    <div className="h-1/4 flex items-center justify-center p-2 relative overflow-hidden">
                      <h3 className="text-center font-semibold text-gray-800 text-xl leading-tight transition-all duration-300 group-hover:text-blue-600">
                        {item.title}
                      </h3>
                      {item.position === 0 && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons at bottom */}
            <div className="flex justify-center gap-6 mt-25">
              <button
                onClick={goToPrevious}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12 border border-white/20"
                aria-label="Previous item"
              >
                <ChevronLeft size={24} className="drop-shadow-lg" />
              </button>

              <button
                onClick={goToNext}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-500 hover:scale-110 hover:-rotate-12 border border-white/20"
                aria-label="Next item"
              >
                <ChevronRight size={24} className="drop-shadow-lg" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
