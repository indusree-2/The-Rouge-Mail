"use client";

import { useState } from "react";
import Link from "next/link";
import InkBar from "@/components/InkBar";

export default function WritePage() {
  const [text, setText] = useState("");
  const MAX_INK = 280; // Forced brevity for wit

  const isOutOfInk = text.length >= MAX_INK;

  // Simulate a "Send" action
  const handleApplySeal = () => {
    if (text.length === 0) return;
    
    // Trigger a heavy haptic vibration if on mobile
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate(100);
    }
    
    console.log("Letter Sealed:", text);
    // Future step: Connect to Supabase here
    alert("The letter has been sealed and sent to the shadows.");
    setText("");
  };

  return (
    <main className="min-h-screen bg-cherry flex flex-col items-center justify-center p-6 selection:bg-wax/30">
      
      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-10 left-10 text-parchment/40 hover:text-parchment transition-colors text-xs tracking-widest uppercase"
      >
        ← Retreat
      </Link>

      <div className="w-full max-w-2xl space-y-8 animate-fade-in">
        
        {/* The Writing Paper (Parchment) */}
        <div className="bg-parchment shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-10 md:p-16 min-h-[450px] relative flex flex-col transition-transform duration-500 hover:scale-[1.01]">
          
          {/* Custom Ink Bar Component */}
          <div className="absolute top-0 left-0 w-full">
            <InkBar currentLength={text.length} maxLength={MAX_INK} />
          </div>

          {/* Header Area */}
          <div className="border-b border-ink/10 pb-4 mb-8 flex justify-between items-baseline">
            <h2 className="font-serif italic text-2xl text-ink select-none">
              To a Stranger in the Night...
            </h2>
            <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-ink/20">
              Stationery No. 042
            </span>
          </div>

          {/* The Composition Area */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX_INK))}
            placeholder="Write something sharp, poetic, or dangerous..."
            className={`flex-grow bg-transparent border-none outline-none text-ink text-xl md:text-2xl font-serif resize-none placeholder:text-ink/10 leading-relaxed transition-opacity duration-1000 ${
              isOutOfInk ? "opacity-80" : "opacity-100"
            }`}
            spellCheck="false"
          />

          {/* Footnote with dynamic ink count */}
          <div className="pt-6 flex justify-between items-center font-sans text-[10px] tracking-widest uppercase">
            <div className="flex space-x-4 text-ink/40">
              <span>{MAX_INK - text.length} drops remaining</span>
            </div>
            {isOutOfInk && (
              <span className="text-wax animate-pulse font-bold">Vessel Empty</span>
            )}
          </div>

          {/* Aesthetic Detail: Subtle Ink Blot in the corner */}
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-ink/5 rounded-full blur-xl pointer-events-none" />
        </div>

        {/* The Wax Seal Send Button */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleApplySeal}
            disabled={text.length === 0}
            className={`group relative flex flex-col items-center transition-all duration-1000 ${
              text.length === 0 
                ? "opacity-20 grayscale cursor-not-allowed scale-90" 
                : "opacity-100 scale-100"
            }`}
          >
            {/* The Seal Visual */}
            <div className="w-24 h-24 bg-wax rounded-full shadow-[0_10px_30px_rgba(139,0,0,0.5)] flex items-center justify-center border-2 border-[#5a0000] group-hover:shadow-[0_15px_40px_rgba(139,0,0,0.7)] group-active:scale-95 transition-all duration-300">
              <span className="text-parchment text-3xl font-serif select-none">R</span>
            </div>
            
            {/* Button Label */}
            <span className="mt-6 text-parchment/60 text-[10px] tracking-[0.4em] uppercase group-hover:text-parchment transition-colors">
              Apply Wax Seal
            </span>
          </button>
          
          <p className="text-parchment/20 text-[9px] italic tracking-widest uppercase">
            {text.length > 0 ? "Commit your words to the velvet void" : "Ink is required to leave a mark"}
          </p>
        </div>
      </div>
    </main>
  );
}