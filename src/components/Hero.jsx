import React from "react";
import full from "../assets/full.png";
import { useDeviceType } from "../hooks/useDeviceType"; // adjust path if needed

const Hero = () => {
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  return (
    <div className="relative w-full min-h-full overflow-hidden mb-10">
      {isMobile ? (
        // === Mobile Layout (No Background Image, Adjusted Text) ===
        <div className="relative z-50 flex flex-col items-start justify-center px-6 mt-20 pt-[20vh] text-black max-w-full">
          <h1 className="text-3xl font-bold">Aksha</h1>
          <p className="text-lg mt-2">
            AI powered Video <br /> Surveillance Solution
          </p>
          <p className="text-sm mt-4 leading-relaxed">
            Meet Aksha — Your Next-Gen Surveillance Companion. <br />
            Fast to install, cost-effective, and built with privacy in mind, <br />
            Aksha transforms your security with instant insights. <br />
            It’s the smarter, simpler way to safeguard your space.
          </p>
          <button className="mt-6 text-white btn-gradient px-5 py-2 rounded-lg shadow ">
            Brochure ↓
          </button>
        </div>
      ) : (
        // === Tablet and Laptop Layout (With Background Image) ===
        <>
          <img
            src={full}
            alt="Hero"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-50 flex flex-col items-start justify-center px-8 ml-16 mt-36 md:px-16 pt-[60vh] text-black max-w-4xl">
            <h1 className="text-6xl font-bold">Aksha</h1>
            <p className="text-2xl mt-2">
              AI powered Video <br className="hidden md:block" /> Surveillance
              Solution
            </p>
            <p className="text-md mt-4 leading-relaxed">
              Meet Aksha — Your Next-Gen Surveillance Companion. <br />
              Fast to install, cost-effective, and built with privacy in mind, <br />
              Aksha transforms your security with instant, easy-to-understand
              insights. <br />
              It’s the smarter, simpler way to safeguard your space.
            </p>
            <button className="mt-6 btn-gradient text-white px-6 py-3 rounded-lg shadow ">
              Brochure ↓
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
