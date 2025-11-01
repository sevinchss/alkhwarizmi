import React, { useEffect, useState } from "react";
import bg1 from "./images/mk.jpg";
import bg2 from "./images/bg1.jpg";
import bg3 from "./images/bg3.jpg";

const slides = [
  {
    title: "Iqtidorli o‘quvchilar uchun zamonaviy ta’lim maskani",
    description:
      "Fan, texnologiya va ijod uyg‘unlashgan muhitda o‘quvchilar o‘z salohiyatlarini to‘liq namoyon etadilar. Bizning maqsad – tafakkurli, yangilik yaratuvchi avlodni tarbiyalash.",
    image: bg1,
  },
  {
    title: "Matematika, informatika va innovatsiya birlashgan maktab",
    description:  
      "O‘quvchilarda raqamli tafakkur, mantiqiy fikrlash va muammolarni tahliliy yechish qobiliyati shakllantiriladi.",
    image: bg2,
  },
  {
    title: "Kelajakni yaratadigan yosh avlod",
    description:
      "Dasturlash, robototexnika va ilmiy izlanishlar orqali o‘quvchilar o‘z g‘oyalarini hayotga tatbiq etadilar.",
    image: bg3,
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="font-poppins bg-[#f5f7fb] py-16 md:py-20 overflow-hidden">
      <div className="lg:max-w-7xl mx-auto px-6 md:px-10">
        {/* ==== TEXT BLOCK ==== */}
        <div className=" md:grid-cols-1 items-start md:items-center flex lg:flex-row flex-col justify-between gap-10 mb-12">
          {/* LEFT (title) */}
          <div className="lg:min-h-[130px] flex items-center">
            <h1
              key={current.title}
              className="text-3xl md:text-[44px] font-bold text-[#1c1e26] leading-tight max-w-xl transition-all duration-500"
            >
              {current.title}
            </h1>
          </div>

          {/* RIGHT (desc + button + pagination) */}
          <div className="flex flex-col justify-between lg:min-h-[130px] lg:max-w-md text-gray-700 text-base md:text-lg">
            <p
              key={current.description}
              className="leading-relaxed text-[#4b4b4b] transition-all duration-500"
            >
              {current.description}
            </p>

            <div className="flex flex-row items-center gap-4 pt-5 justify-between">
           <button
  onClick={() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="bg-[#0047AB] hover:bg-blue-900 text-white px-6 py-3 font-medium rounded-md transition-all"
>
  Batafsil
</button>


              <div className="flex items-center gap-3 sm:ml-4">
                <button
                  onClick={prevSlide}
                  className="w-9 lg:h-9 flex justify-center items-center rounded-full bg-gray-300/40 hover:bg-gray-400/60 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <span className="text-gray-600 font-medium w-8 text-center">
                  {index + 1}/{slides.length}
                </span>

                <button
                  onClick={nextSlide}
                  className="w-9 h-9 flex justify-center items-center rounded-full bg-gray-300/40 hover:bg-gray-400/60 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-800"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==== IMAGE ==== */}
        <div
          key={current.image}
          className="rounded-2xl overflow-hidden shadow-md transition-all ease-linear duration-500"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full lg:h-[420px] md:h-[480px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
