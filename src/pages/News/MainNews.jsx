import React, { useEffect, useState } from "react";
import News from './News'

export const MainNews = () => {
  const formulaList = ["+", "-", "=", "S=V/t", "a²+b²=c²", "√a", "a²", "%"];
  const formulaCount = 50;

  // Generate formulas with random properties
  const generateSymbols = () =>
    Array.from({ length: formulaCount }, () => ({
      id: Math.random(),
      text: formulaList[Math.floor(Math.random() * formulaList.length)],
      top: Math.random() * 90, // random vertical position
      left: -10 - Math.random() * 20, // start slightly offscreen
      size: Math.random() > 0.5 ? "large" : "small",
      speed: (0.05 + Math.random()) * 0.1, // slower movement
    }));

  const [symbols, setSymbols] = useState(generateSymbols);

  // Smooth left movement for formulas
  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setSymbols((prev) =>
        prev.map((s) => {
          let newLeft = s.left + s.speed;
          if (newLeft > 110) newLeft = -10; // reset when offscreen
          return { ...s, left: newLeft };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 font-poppins">
      {/* Floating formulas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {symbols.map((symbol) => (
          <span
            key={symbol.id}
            className={`formula absolute text-gray-500 select-none opacity-0 ${
              symbol.size === "large" ? "text-4xl" : "text-2xl"
            }`}
            style={{
              top: `${symbol.top}%`,
              left: `${symbol.left}%`,
              transform: "scale(0.8)",
            }}
          >
            {symbol.text}
          </span>
        ))}
      </div>

      {/* Page content */}
      <div className="relative z-10">
       <News />
      </div>

      {/* Formulas animation only */}
      <style>{`
        .formula {
          animation: floatFormula 10s linear infinite; /* slightly slower */
        }
        @keyframes floatFormula {
          0% {
            opacity: 0;
            transform: scale(0.8) translateX(0);
          }
          10% {
            opacity: 0.25;
            transform: scale(1) translateX(10%);
          }
          50% {
            opacity: 0.75;
            transform: scale(1) translateX(50%);
          }
          90% {
            opacity: 0.25;
            transform: scale(0.95) translateX(90%);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};
