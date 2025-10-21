import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse, Brain, GraduationCap, BookOpen } from "lucide-react";

const services = [
  {
    title: "Psixologik yordam",
    desc: `O‘quvchilarning ruhiy holatini mustahkamlash, ularning o‘qishga bo‘lgan motivatsiyasini oshirish va stressni yengish uchun professional psixologik maslahatlar.`,
    icon: Brain,
  },
  {
    title: "Salomatlik yordami",
    desc: `Sog‘lom turmush tarzini shakllantirish, muntazam tibbiy ko‘rik va sog‘lom ovqatlanish bo‘yicha tavsiyalar taqdim etiladi.`,
    icon: HeartPulse,
  },
  {
    title: "SAT o‘qitish markazi",
    desc: `Chet el oliygohlariga kirishni maqsad qilgan o‘quvchilar uchun SAT dasturi bo‘yicha tayyorlov kurslari va mentorlik yordami.`,
    icon: GraduationCap,
  },
  {
    title: "Fakultativ darslar",
    desc: `O‘quvchilarning iqtidorini rivojlantirish, fan olimpiadalari va tanlovlarga tayyorlov uchun maxsus darslar va ustozlar bilan mashg‘ulotlar.`,
    icon: BookOpen,
  },
];

const ServicesSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [index]);

  const getPosition = (i) => {
    const diff = (i - index + services.length) % services.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === services.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-50 py-20 font-poppins overflow-hidden">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">
        Bizning xizmatlar
      </h1>

      <div className="relative w-full max-w-7xl flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-6 text-5xl text-gray-500 hover:text-blue-900 z-20 select-none"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 text-5xl text-gray-500 hover:text-blue-900 z-20 select-none"
        >
          ›
        </button>

        <div className="relative flex items-center justify-center w-full h-[500px] overflow-hidden">
          <AnimatePresence>
            {services.map((service, i) => {
              const position = getPosition(i);
              let scale = 0.75,
                opacity = 0.4,
                zIndex = 0,
                x = 0;

              if (position === "center") {
                scale = 1.05;
                opacity = 1;
                zIndex = 10;
                x = 0;
              } else if (position === "left") {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 5;
                x = -300;
              } else if (position === "right") {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 5;
                x = 300;
              } else {
                opacity = 0;
                scale = 0.5;
                zIndex = 0;
                x = 0;
              }

              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center text-center"
                  animate={{ scale, opacity, x }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ zIndex }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-10 w-[350px] md:w-[450px] flex flex-col items-center">
                    <div className="bg-[#e8ebf8] rounded-full p-5 mb-6">
                      <Icon className="w-10 h-10 text-[#1a237e]" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 text-[16px] leading-relaxed text-justify">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
