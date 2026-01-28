"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface WaxSealProps {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
}

const WaxSeal = ({ onClick, disabled, label = "Apply Wax Seal" }: WaxSealProps) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.button
        whileHover={!disabled ? { scale: 1.05, rotate: 2 } : {}}
        whileTap={!disabled ? { scale: 0.9, y: 5 } : {}}
        onClick={onClick}
        disabled={disabled}
        className={`relative group flex items-center justify-center transition-all duration-700 ${
          disabled ? "opacity-20 grayscale cursor-not-allowed" : "opacity-100"
        }`}
      >
        {/* The Outer Wax Ring (The "Splat") */}
        <div className="w-24 h-24 bg-wax rounded-full shadow-[inset_0_-5px_10px_rgba(0,0,0,0.4),0_10px_30px_rgba(139,0,0,0.5)] flex items-center justify-center border-2 border-[#5a0000] relative overflow-hidden">
          
          {/* Subtle 3D "Shine" on the wax edge */}
          <div className="absolute top-2 left-4 w-8 h-4 bg-white/10 rounded-full blur-md -rotate-45" />

          {/* The Central Initial - "R" for Rouge */}
          <span className="text-parchment text-4xl font-serif select-none drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
            R
          </span>

          {/* Texture Overlay (Gives the wax an organic, imperfect feel) */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
        </div>

        {/* Haptic "Pulse" Effect on click */}
        {!disabled && (
          <div className="absolute inset-0 rounded-full border border-wax/0 group-active:border-wax/50 group-active:scale-150 transition-all duration-500 pointer-events-none" />
        )}
      </motion.button>

      {/* Label with spaced-out "Noir" typography */}
      <span className={`text-[10px] tracking-[0.4em] uppercase transition-colors duration-500 ${
        disabled ? "text-parchment/10" : "text-parchment/60 group-hover:text-parchment"
      }`}>
        {label}
      </span>
    </div>
  );
};

export default WaxSeal;