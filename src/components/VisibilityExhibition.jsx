import React from "react";
import docomo1 from "../assets/Exhibition/img1.png";
import docomo2 from "../assets/Exhibition/img2.png";
import imc1 from "../assets/Exhibition/img3.png";
import imc2 from "../assets/Exhibition/img4.png";

const VisibilityExhibition = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-30 -mt-10">
        Visibility and Exhibition
      </h2>

      {/* BLUE LINE STRUCTURE */}
      {/* Start DOT */}
      <div className="hidden md:block absolute top-28 right-4 w-3 h-3 bg-blue-600 rounded-full z-10 -mt-1" />

      {/* Horizontal line from right to left above Docomo */}
      <div className="hidden md:block absolute top-28 right-4 w-[calc(100%-2rem)] h-1 bg-blue-600 z-0 " />

      {/* Vertical line down to IMC */}
      <div className="hidden md:block absolute top-28 left-4 w-1 h-[360px] bg-blue-600 z-0" />

      {/* Horizontal line above IMC */}
      <div className="hidden md:block absolute top-[calc(7rem+360px)] left-4 w-[calc(100%-2rem)] h-1 bg-blue-600 z-0" />

      {/* Vertical line below IMC */}
      <div className="hidden md:block absolute top-[calc(7rem+360px)] right-4 w-1 h-[360px] bg-blue-600 z-0" />

      {/* Horizontal line below IMC */}  
      <div className="hidden md:block absolute top-[calc(7rem+720px)] left-4 w-[calc(100%-2rem)] h-1 bg-blue-600 z-0" />

      {/* End DOT */}
      <div className="hidden md:block absolute top-[calc(7rem+720px)] left-4 w-3 h-3 bg-blue-600 rounded-full z-10 -mt-1" />

      {/* DOCOMO Block */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-14 mb-6 mt-6">
        <img src={docomo1} alt="docomo1" className="w-full md:w-1/3 rounded shadow" />
        <img src={docomo2} alt="docomo2" className="w-full md:w-1/3 rounded shadow" />
      </div>
      <p className="text-center mb-16 text-lg">
        <strong>Docomo Business Forum</strong><br />
        October 2024 (Tokyo, Japan)
      </p>

      {/* IMC Block */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-14 mb-6 mt-6">
        <img src={imc1} alt="imc1" className="w-full md:w-1/3 rounded shadow" />
        <img src={imc2} alt="imc2" className="w-full md:w-1/3 rounded shadow" />
      </div>
      <p className="text-center text-lg">
        <strong>Indian Mobile Congress (IMC)</strong><br />
        October 2024 (Delhi, India)
      </p>
    </div>
  );
};

export default VisibilityExhibition;
