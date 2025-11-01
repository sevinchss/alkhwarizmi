import React, { useEffect, useMemo, useRef, useState } from "react";

export default function Formulas() {
  const formulaList = useMemo(
    () => ["+", "-", "=", "/", "×", "√a", "a²", "%", "π", "∞"],
    []
  );

  const [symbols, setSymbols] = useState(() => generateSymbols(formulaList));
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Har 6 soniyada yumshoq so'nish + yangilanish
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setSymbols(generateSymbols(formulaList));
        setFading(false);
      }, 1000); // fade davomiyligi bilan mos
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [formulaList]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* ixtiyoriy: juda engil gradient fon (direktorlar sevadi 😊) */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

      {symbols.map((s) => (
        <span
          key={s.id}
          className={`formula absolute select-none text-gray-400/40 ${
            s.size === "large" ? "text-3xl" : "text-xl"
          } ${fading ? "fade-out" : "animate-formula"}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.text}
        </span>
      ))}

      <style>{`
        @keyframes formula {
          0% { transform: scale(0) rotate(0deg); opacity:0; }
          10% { transform: scale(1.15) rotate(2deg); opacity:0.35; }
          40% { transform: scale(1) rotate(-2deg); opacity:0.35; }
          60% { transform: scale(1.05) rotate(1deg); opacity:0.35; }
          80% { transform: scale(0.95) rotate(-1deg); opacity:0.35; }
          100% { transform: scale(0) rotate(0deg); opacity:0; }
        }
        .animate-formula { animation: formula 6s ease-in-out infinite; will-change: transform, opacity; }
        .fade-out { transition: opacity 1s ease, transform 1s ease; opacity:0 !important; transform: scale(0.5) rotate(0deg) !important; }

        /* Accessibility: agar foydalanuvchi animatsiyani xohlamasa */
        @media (prefers-reduced-motion: reduce) {
          .animate-formula { animation: none !important; opacity: 0.2 !important; }
        }
      `}</style>
    </div>
  );
}

function generateSymbols(formulaList) {
  const COUNT = 80;
  const arr = [];
  for (let i = 0; i < COUNT; i++) {
    arr.push({
      id: `${i}-${Math.random().toString(36).slice(2)}`, // barqaror kalitlar
      text: formulaList[Math.floor(Math.random() * formulaList.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() > 0.5 ? "large" : "small",
      delay: Math.random() * 6,
    });
  }
  return arr;
}
