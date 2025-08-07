import React, { useState } from "react";
import { useCasesMain, useCasesDetails } from "../utils/useCase"; // Import both main grid and detailed use cases

const UseCase = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  // Handle card click
  const handleCardClick = (id) => {
    // Find data from detailed JSON (useCase) by matching the id
    const caseData = useCasesDetails.find((item, index) => index === id);
    setSelectedCase(caseData);
  };

  return (
    <div className="bg-[#fff3a6] min-h-screen py-10 px-4 overflow-y-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Industry Use Cases
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Discover how Aksha’s intelligent surveillance solutions are
          transforming security across various industries
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCasesMain.map((item, index) => (
          <div
            key={item.id}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-lg group"
            onClick={() => handleCardClick(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover transform  "
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold text-center px-4 py-1 backdrop-blur-md group-hover:scale-120 transition-transform duration-300">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 "
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="bg-[#ecf4fd] w-[95%] md:w-[70%] lg:w-[60%] max-h-[70vh] overflow-y-auto hide-scrollbar rounded-2xl shadow-2xl p-8 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 text-4xl font-bold hover:text-gray-900"
              onClick={() => setSelectedCase(null)}
            >
              &times;
            </button>

            {/* Title and Description */}
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              {selectedCase.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {selectedCase.description}
            </p>

            {/* Features List */}
            <div className=" max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {selectedCase.features.map((feature, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`flex items-stretch bg-white rounded-2xl  overflow-hidden transform `}
                  >
                    {/* Left colored bar if odd */}
                    {!isEven && (
                      <div
                        className="w-10"
                        style={{ backgroundColor: feature.color }}
                      ></div>
                    )}

                    {/* Image section */}
                    <div
                      className={`flex flex-col md:flex-row items-stretch  shadow-md overflow-hidden ${
                        isEven
                          ? "bg-gradient-to-l from-[#ffffff] to-[#ecf4fd]/90"
                          : "bg-gradient-to-r from-[#f9faff] to-[#eef5ff]"
                      }`}
                    >
                      {/* Image Section */}
                      <div className="flex-shrink-0 flex justify-center items-center w-full md:w-28 p-6 border-r border-gray-200">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-14 h-14 object-contain"
                        />
                      </div>

                      {/* Text Section */}
                      <div className="flex-1 p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-snug">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* Right colored bar if even */}
                    {isEven && (
                      <div
                        className="w-10"
                        style={{ backgroundColor: feature.color }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Modal Animations & Scrollbar */}
          <style jsx>{`
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-in-out;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cfd8e3;
              border-radius: 4px;
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default UseCase;
