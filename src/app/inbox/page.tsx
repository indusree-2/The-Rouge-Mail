"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Mock data for your letters
const MOCK_LETTERS = [
  {
    id: 1,
    sender: "A Midnight Admirer",
    content:
      "The way you describe the rain feels like music. Perhaps we are both made of the same storms.",
    timestamp: "2026-01-28T23:15:00Z",
  },
  {
    id: 2,
    sender: "The Archivist",
    content:
      "I found the vintage camera you were looking for. It still smells like cherry wood and old memories.",
    timestamp: "2026-01-29T01:45:00Z",
  },
];

export default function InboxPage() {
  const [isNocturnal, setIsNocturnal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours();
      // Logic: Unlocked between 10 PM (22) and 4 AM (4)
      setIsNocturnal(hour >= 22 || hour < 4);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-cherry p-6 md:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="flex justify-between items-end border-b border-parchment/10 pb-8">
          <div>
            <Link
              href="/"
              className="text-wax text-xs tracking-[0.4em] uppercase hover:opacity-70 transition-opacity"
            >
              ← Retreat to Shadows
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif italic text-parchment mt-4">
              The Received
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-parchment/40 text-[10px] tracking-widest uppercase">
              Current Phase
            </p>
            <p className="text-wax font-serif italic">
              {isNocturnal ? "Nocturnal (Unlocked)" : "Daylight (Sealed)"}
            </p>
          </div>
        </header>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_LETTERS.map((letter) => (
            <div key={letter.id} className="relative group">
              <div
                className={`bg-parchment p-8 md:p-12 shadow-2xl transition-all duration-1000 transform 
                ${isNocturnal ? "rotate-0 opacity-100" : "rotate-1 opacity-80 scale-95"}`}
              >
                <div className="border-b border-ink/5 pb-4 mb-6 flex justify-between items-center">
                  <span className="font-serif italic text-ink/60">
                    From: {letter.sender}
                  </span>
                  {!isNocturnal && (
                    <span className="text-[10px] text-wax tracking-widest uppercase">
                      Sealed
                    </span>
                  )}
                </div>

                <div className="relative min-h-[150px]">
                  {isNocturnal ? (
                    <p className="text-ink text-xl font-serif leading-relaxed animate-fade-in">
                      {letter.content}
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {/* The Blur Effect */}
                      <p className="text-ink text-xl font-serif leading-relaxed filter blur-lg select-none">
                        {letter.content}
                      </p>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-wax rounded-full flex items-center justify-center shadow-lg mb-4">
                          <span className="text-parchment font-serif">R</span>
                        </div>
                        <p className="text-ink/40 text-[9px] tracking-[0.3em] uppercase">
                          Readable at Moonrise
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-4 border-t border-ink/5 text-[9px] text-ink/30 tracking-widest uppercase">
                  Delivered via Rouge Mail
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State / Footer */}
        <footer className="text-center pt-20">
          <p className="text-parchment/20 text-xs italic">
            "Some secrets are only safe in the dark."
          </p>
        </footer>
      </div>
    </main>
  );
}
