import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { carouselItems } from '../utils/carousel'; // Adjust the import path as necessary
import { div } from 'framer-motion/client';

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
    setCurrentIndex(currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1);
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
        index: index
      });
    }
    
    return items;
  };

  const getItemClasses = (position) => {
    const baseClasses = "absolute transition-all duration-1000 ease-out cursor-pointer transform-gpu";
    
    switch (position) {
      case -2:
        return `${baseClasses} left-8 lg:left-12 xl:left-35 top-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-24 opacity-50 scale-40 z-10 blur-sm hover:opacity-40 hover:scale-45`;
      case -1:
        return `${baseClasses} left-16 lg:left-35 xl:left-60 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-36 lg:h-36 opacity-50 scale-90 z-20 hover:opacity-70 hover:scale-75`;
      case 0:
        return `${baseClasses} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 opacity-100 scale-100 z-30 shadow-2xl hover:scale-105  `;
      case 1:
        return `${baseClasses} right-16 lg:right-35 xl:right-60 top-1/2 -translate-y-1/2 w-32 h-32 lg:w-36 lg:h-36 opacity-50 scale-90 z-20 hover:opacity-70 hover:scale-75`;
      case 2:
        return `${baseClasses} right-8 lg:right-12 xl:right-35 top-1/2 -translate-y-1/2 w-20 h-20 lg:w-28 lg:h-24 opacity-50 scale-40 z-10 blur-sm hover:opacity-40 hover:scale-45`;
      default:
        return `${baseClasses} opacity-0 scale-0`;
    }
  };

  return (
    <div className='bg-white h-[980px]'>

    <div className="bg-slate-800 min-h-screen py-12 px-4 pb-[200px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Reasons To Choose Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            See how Aksha responds to real-world events, from overcrowding
            and fire alerts to unusual behaviour, enhancing safety and
            compliance across industries.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative h-80 mb-8 ">
          <div className="relative w-[90%] mx-auto h-full ">
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
                    <h3 className="text-center font-semibold text-gray-800 text-sm leading-tight transition-all duration-300 group-hover:text-blue-600">
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

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 lg:left-4 xl:left-15 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12 border border-white/20"
            aria-label="Previous item"
          >
            <ChevronLeft size={24} className="drop-shadow-lg" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 lg:right-4 xl:right-15 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-500 hover:scale-110 hover:-rotate-12 border border-white/20"
            aria-label="Next item"
          >
            <ChevronRight size={24} className="drop-shadow-lg" />
          </button>
        </div>

        {/* Current Item Title */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2 transition-all duration-500 hover:text-blue-300">
            {carouselItems[currentIndex].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full transition-all duration-700 hover:w-32"></div>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              className={`relative transition-all duration-500  cursor-pointer ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-125'
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 rounded-full hover:scale-110'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

       
      </div>
    </div>
    </div>
  );
}