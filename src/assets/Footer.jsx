import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-20 px-4">
      {/* Main Card */}
      <div
        className="
        w-full max-w-[1400px] bg-[#BEE7FF] rounded-[40px] 
        p-10 md:p-16 
        flex flex-col md:flex-row justify-between items-center gap-12
      "
      >
        {/* Left */}
        <div className="flex flex-col gap-8 w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-semibold text-black">
            Have something in mind?
          </h2>

          {/* Button */}
          <div
            className="
            bg-[#F8D33A] px-10 py-4 rounded-full flex items-center justify-center text-lg font-semibold text-black 
            hover:scale-[1.03] transition mx-auto md:mx-0
          "
          >
            Let’s Connect
          </div>

          <p className="text-sm text-black/70 leading-relaxed">
            This website is built by <br />
            Vishal Patil and developed in React.
          </p>
        </div>

        {/* Right */}
        <div
          className="
          flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full md:w-auto
        "
        >
          {/* Social Links */}
          <div className="flex flex-col text-lg gap-4 text-black text-center md:text-left">
            <a
              href="https://www.linkedin.com/in/vishalpatil0111/"
              className="flex justify-center md:justify-start items-center gap-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FiArrowUpRight />
            </a>
            <a
              href="https://github.com/Vishalpatil0111"
              className="flex justify-center md:justify-start items-center gap-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FiArrowUpRight />
            </a>
            <a
              href="mailto:vishall.patil0111@gmail.com?subject=Get%20Quote%20Request&body=Hi,%20I%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center md:justify-start items-center gap-2 hover:underline"
            >
              Mail <FiArrowUpRight />
            </a>
          </div>

          {/* Logo Badge */}
          <div
            className="
            w-36 h-36 md:w-44 md:h-44 bg-[#F8D33A] 
            rounded-[50px] flex items-center justify-center 
            text-2xl md:text-3xl font-bold text-white rotate-[8deg]
          "
          >
            Vishal
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="
        w-full max-w-[1400px] bg-[#1D1D1D] rounded-[40px] 
        py-6 text-center text-gray-400 text-sm
      "
      >
        All Rights Reserved | Copyright © 2025
      </div>
    </div>
  );
}
