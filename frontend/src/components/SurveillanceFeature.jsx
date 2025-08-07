import React, { useRef }  from "react";
import MacbookImg from "../assets/MacBook.png";
import { Cctv } from "lucide-react";
import cameraicon from "../assets/cameraicon.png";
import demovideo from "../assets/Aksha_Video.mp4";

const surveillanceFeatures = [
  {
    id: 1,
    text: (
      <>
        Aksha transforms ordinary CCTV into smart surveillance with real-time
        object detection powered by self-learning computer vision algorithms.
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        It identifies unusual activities and sends instant, customizable alerts
        tailored to your specific needs.
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        With Aksha, you get 24/7 intelligent monitoring – all with minimal human
        intervention.
      </>
    ),
  },
];

const SurveillanceFeature = () => {
   const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <div className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 ">
      {/* MacBook Image */}
      <div className="flex justify-center w-full md:w-1/2 relative z-20">
      {/* MacBook Image */}
      <img
        src={MacbookImg}
        alt="Aksha CCTV Surveillance Preview"
        className="w-full max-w-[600px] h-auto "
      />

      {/* Overlayed Video on Screen */}
      <div className="absolute top-[5%] left-[15%] w-[70%] h-[85%] overflow-hidden rounded-lg shadow-md z-10">
        <video
          ref={videoRef}
          src={demovideo}
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
        />
      </div>
    </div>

      {/* Features List */}
      <div className="w-full md:w-1/2 text-black max-w-xl">
        <ul className="space-y-10 text-lg leading-relaxed list-none">
          {surveillanceFeatures.map((feature) => (
            <li
              key={feature.id}
              className="relative group flex items-start gap-5 px-2 transition-all duration-300"
            >
              {/* Icon + Hover Animation */}
              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1  group-hover:-translate-x-1">
                <img
                  src={cameraicon}
                  alt=""
                  className="w-10 h-10 max-w-[40px] max-h-[40px] min-w-[40px] min-h-[40px] object-contain mt-1 group-hover:rotate-[-10deg]"
                />
              </div>

              {/* Yellow Beam (Behind Text) */}
              {/* <div className="absolute left-6 -top-12  w-[0px] h-[0px] rounded-2xl bg-yellow-200 opacity-0 group-hover:opacity-70  z-0 transition-all duration-1000">
                <div className="w-0 h-0 
                  border-l-[10px] border-r-[400px] border-b-[100px] 
                  border-l-transparent border-r-transparent border-b-yellow-200 
                  blur-lg brightness-125 rotate-[-15deg]"
                />
              </div> */}
              <div
                className="absolute left-[29px] top-3 z-0 opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none"
                style={{
                  width: "300px",
                  height: "300px",
                  background:
                    "radial-gradient(ellipse at top, rgba(253, 224, 71, 0.4), transparent 100%)",
                  clipPath: "polygon(50% 0%, 50% 100%, 100% 100%)",
                  filter: "blur(0px)",
                  transform: "translate(0, -30%) rotate(-68deg)",
                }}
              ></div>

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
