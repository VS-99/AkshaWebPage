import React from "react";
import { Linkedin, Instagram, X as XIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0D111C] text-white py-10 pl-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Aksha Info - start from 2nd column on medium and larger screens */}
          <div className="w-50">
            <h2 className="text-lg font-semibold mb-3">Aksha</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              AI-powered intelligent video surveillance solution by AlgoAnalytics,
              transforming security across industries.
            </p>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X" className="hover:text-white">
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Use Cases</a></li>
              <li><a href="#" className="hover:text-white">Applications</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Support</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Services</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© 2025 AlgoAnalytics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
