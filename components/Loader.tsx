// components/Loader.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for 4 seconds, then trigger the hide animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-(--color-core-blue) overflow-hidden transition-transform duration-1000 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Centered White Logo */}
      <div className="relative w-96 h-64 ">
        <Image
          src="/assets/images/logo/logo_white.png"
          alt="Building Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom Right Wheel/Shape */}
      {/* Adjusted positioning to match the cropped look in the reference image */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-64 md:h-64 opacity-30">
        <Image
          src="/assets/images/svg/transparent-wheel.svg"
          alt="Decorative Wheel"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;