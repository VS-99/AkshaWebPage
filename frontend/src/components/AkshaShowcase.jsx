import React, { useState } from "react";
import { akshaFeatures } from "../utils/akshaFeatures"; // Adjust the path as needed
import macbookImage from "../assets/MacBook.png"; // Adjust the path as needed

const AkshaShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, features } = akshaFeatures[0];
  features.forEach((feature) => console.log(feature));



  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center bg-[#fff3a6] min-h-screen py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-center">
        {title}
      </h2>
      <p className="text-center max-w-2xl text-gray-700 mb-8">
        {subtitle}
      </p>

      <div className="relative w-full max-w-5xl flex justify-center items-center">
        {/* Sidebar Dots (static right) */}
        <div className="absolute top-0 -right-15 h-full flex items-center z-30">
          <div className="flex flex-col justify-center space-y-4">
            {features.map((_, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`w-3 h-20 cursor-pointer transition-all duration-300 rounded-md ${
                  index === activeIndex ? "bg-[#27344a]" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Feature Image with Text Overlay */}
        <div className="relative w-full max-w-4xl z-10 mt-5">
          <img
            src={features[activeIndex].img}
            alt="feature"
            className="w-full h-auto "
          />

          {/* Right Aligned Text */}
          {activeIndex % 2 === 0 && (
            <div className="absolute top-10 left-0 right-5 bottom-0 flex flex-col justify-start items-end text-white p-6 max-w-[65%] ml-auto text-right">
              <h3 className="lg:text-5xl md:text-2xl font-bold mb-2">
                {features[activeIndex].title}
              </h3>
              <p className="lg:text-xl md:text-base break-words">
                {features[activeIndex].description}
              </p>
            </div>
          )}

          {/* Left Aligned Text */}
          {activeIndex % 2 !== 0 && (
            <div className="absolute top-10 left-5 right-0 bottom-0 flex flex-col justify-start items-start text-white p-6 max-w-[68%] mr-auto text-left">
              <h3 className="lg:text-5xl md:text-2xl font-bold mb-2">
                {features[activeIndex].title}
              </h3>
              <p className="lg:text-xl md:text-base break-words">
                {features[activeIndex].description}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Laptop Image Customized */}
      {activeIndex % 2 == 0 &&(
        <div className="relative mt-[-45px] z-20 w-full max-w-8xl">
            <div className="absolute -bottom-12 -left-60 right-0 flex justify-center">
            <img
                src={macbookImage}
                alt="Laptop"
                className="w-[70%] md:w-[80%] lg:w-[50%] object-contain"
            />
            </div>
        </div>                          
      )}
      {activeIndex % 2 !== 0 &&(
        <div className="relative mt-[-40px] z-20 w-full max-w-8xl">
            <div className="absolute -bottom-12 left-0 -right-60 flex justify-center">
            <img
                src={macbookImage}
                alt="Laptop"
                className="w-[50%] md:w-[80%] lg:w-[50%] object-contain"
            />
            </div>
        </div>                          
      )}
    </div>
  );
};

export default AkshaShowcase;
