import React, { useState, useEffect } from "react";

interface LetterProps {
  sender: string;
  content: string;
  timestamp: string;
}

const LetterCard = ({ sender, content, timestamp }: LetterProps) => {
  const [isNocturnal, setIsNocturnal] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const hour = now.getHours();

      // The Gate: 10 PM (22) to 4 AM (4)
      const nocturnalWindow = hour >= 22 || hour < 4;
      setIsNocturnal(nocturnalWindow);

      // Simple countdown logic if it's daytime
      if (!nocturnalWindow) {
        const moonrise = new Date();
        moonrise.setHours(22, 0, 0, 0);
        if (hour >= 4) {
          // If it's after 4 AM, the next moonrise is tonight
        } else {
          // This case is handled by the window, but good for safety
        }
        const diff = moonrise.getTime() - now.getTime();
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minsLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hoursLeft}h ${minsLeft}m`);
      }
    };

    checkTime();
    const timer = setInterval(checkTime, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative p-8 w-full max-w-md mx-auto my-10 transition-all duration-1000">
      {/* The Envelope / Parchment Style */}
      <div
        className={`bg-[#F5F5DC] text-[#2B0B0B] p-10 shadow-2xl rounded-sm transform 
        ${isNocturnal ? "rotate-0 scale-100" : "rotate-1 scale-95"}`}
        style={{ fontFamily: "'Pinyon Script', cursive" }}
      >
        <h3 className="text-xl mb-4 border-b border-[#2B0B0B]/20">
          From: {sender}
        </h3>

        {isNocturnal ? (
          <p className="text-2xl leading-relaxed animate-fade-in">{content}</p>
        ) : (
          <div className="text-center py-10">
            {/* The Blur Effect */}
            <p className="filter blur-md select-none opacity-40 text-xl">
              This message is hidden until the moon rises.
            </p>
            <div className="mt-4 font-sans text-xs uppercase tracking-widest text-[#8B0000]">
              Unlocks in: {timeLeft}
            </div>
          </div>
        )}

        {/* The Wax Seal - Only shows when locked */}
        {!isNocturnal && (
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 bg-[#8B0000] rounded-full shadow-inner flex items-center justify-center border-2 border-[#5a0000]">
              <span className="text-white font-serif">R</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterCard;
