import React from "react";
import MacbookImg from "../assets/MacBook.png";
import { Cctv } from "lucide-react";

const surveillanceFeatures = [
  {
    id: 1,
    text: (
      <>
        Aksha transforms ordinary CCTV into smart surveillance
        with real-time object detection powered by self-learning computer vision algorithms.
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        It identifies unusual activities and sends instant, customizable alerts tailored to your specific needs.
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        With Aksha, you get 24/7 intelligent monitoring – all with minimal human intervention.
      </>
    ),
  },
];

const SurveillanceFeature = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12">
      {/* MacBook Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          src={MacbookImg}
          alt="Aksha CCTV Surveillance Preview"
          className="w-full max-w-[600px] h-auto"
        />
      </div>

      {/* Features List */}
      <div className="w-full md:w-1/2 text-black max-w-xl">
        <ul className="space-y-10 text-lg leading-relaxed list-none">
          {surveillanceFeatures.map((feature) => (
            <li
              key={feature.id}
              className="relative group flex items-start gap-4 px-2 transition-all duration-300"
            >
              {/* Icon + Hover Animation */}
              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1  group-hover:-translate-x-1">
                <Cctv className="w-6 h-6 mt-1 text-blue-600 group-hover:rotate-[-10deg]" />
              </div>

              {/* Yellow Beam (Behind Text) */}
              <div className="absolute left-6 -top-10 w-[400px] h-full z-0 opacity-0 group-hover:opacity-80 transition-all duration-500">
                <div className="w-0 h-0 
                  border-l-[10px] border-r-[400px] border-b-[100px] 
                  border-l-transparent border-r-transparent border-b-yellow-200 
                  blur-sm brightness-125 rotate-[-15deg]"
                />
              </div>

              {/* Text */}
              <span className="relative z-10 text-xl">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SurveillanceFeature;
