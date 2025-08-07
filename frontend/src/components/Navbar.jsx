import React, { useState } from "react";
import { useDeviceType } from "../hooks/useDeviceType";
import aksha from "../assets/Aksha.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const deviceType = useDeviceType();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-1 left-0 right-0 z-50 w-full overflow-x-hidden  bg-white border-b border-white/40 shadow-sm transition-transform duration-300 ease-in-out `}
    >
      <div
        className={`max-w-screen-xl mx-auto w-full flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
          deviceType === "mobile" ? "py-2 min-h-[48px]" : "py-2 min-h-[64px]"
        }`}
      >
        {/* Logo */}
        <img
          src={aksha}
          alt="logo"
          className={`${
            deviceType === "mobile" ? "w-7 h-7" : "w-14 h-14"
          } transition-all`}
        />

        {/* Desktop/Tablet Navigation */}
        {(deviceType === "tablet" || deviceType === "laptop") && (
          <ul className="hidden md:flex gap-13 text-[#27344a] text-xl font-medium  cursor-pointer">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#use-cases">Use cases</a>
            </li>
            <li>
              <a href="#applications">Applications</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        )}

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            className={`transition-all ${
              deviceType === "mobile"
                ? "text-xs px-3 py-1.5"
                : "text-base px-4 py-2"
            } text-white btn-gradient rounded-md shadow-md`}
          >
            Book Demo
          </button>

          {deviceType === "mobile" && (
            <button onClick={toggleMenu} className="text-gray-800">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {deviceType === "mobile" && (
        <div
          className={`md:hidden bg-white/80 px-6 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-3 text-gray-800 font-medium text-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#use-cases">Use cases</a>
            </li>
            <li>
              <a href="#applications">Applications</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
