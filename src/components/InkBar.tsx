"use client";

import React from "react";

interface InkBarProps {
  currentLength: number;
  maxLength: number;
}

const InkBar = ({ currentLength, maxLength }: InkBarProps) => {
  // Calculate the percentage of "ink" remaining
  const remainingPercentage = Math.max(
    0,
    100 - (currentLength / maxLength) * 100,
  );

  // Determine the color state based on how much ink is left
  const isLow = remainingPercentage < 20;
  const isEmpty = remainingPercentage === 0;

  return (
    <div className="w-full space-y-2">
      {/* The Container for the Bar */}
      <div className="h-1 w-full bg-ink/5 overflow-hidden relative">
        <div
          className={`h-full transition-all duration-500 ease-out ${
            isEmpty
              ? "bg-transparent"
              : isLow
                ? "bg-wax animate-pulse"
                : "bg-wax"
          }`}
          style={{ width: `${remainingPercentage}%` }}
        />
      </div>

      {/* Subtle Text Indicator */}
      <div className="flex justify-between items-center px-1">
        <span className="text-[9px] tracking-[0.2em] uppercase text-ink/30 font-sans">
          Vessel Capacity
        </span>
        <span
          className={`text-[9px] tracking-[0.2em] uppercase font-sans transition-colors duration-500 ${
            isLow ? "text-wax" : "text-ink/30"
          }`}
        >
          {isEmpty ? "Dry" : `${Math.floor(remainingPercentage)}% Ink`}
        </span>
      </div>
    </div>
  );
};

export default InkBar;
