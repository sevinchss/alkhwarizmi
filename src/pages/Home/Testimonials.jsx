import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sarvar from "./images/sarvar.webp";
import sattor from "./images/duke.webp";
import sadoqat from "./images/sadoqat.webp";
import elshod from "./images/qodirali.webp";

const testimonials = [
  {
    name: "Sayfiddinov Sarvarjon",
    role: "Hanyang University talabasi",
    image: sarvar,
    text: "Bu maktab menga katta imkoniyatlar yaratdi. Ustozlar juda bilimli, darslar zamonaviy va motivatsion. Shu yerda men o‘zimni haqiqiy talaba sifatida his qildim.",
  },
  {
    name: "Xamroyev Sattor",
    role: "Duke Kunshan University talabasi",
    image: sattor,
    text: "Al-Xorazmiy maktabida o‘qish bu orzu. Platforma, darslar, va o‘qituvchilar — hammasi mukammal uyg‘unlikda ishlaydi.",
  },
  {
    name: "Aknazarova Sadoqat",
    role: "Bilkent University talabasi",
    image: sadoqat,
    text: "Bu maktabda bilim olish — bu shunchaki o‘qish emas, bu o‘z orzularing sari ishonch bilan yurishdir. Har bir dars yangi imkoniyat.",
  },
  {
    name: "Xushvaqtov Elshodjon",
    role: "Drexel University talabasi",
    image: elshod,
    text: "Bu maktabdagi imkoniyatlar meni o‘zgartirdi. Har bir loyiha va dars yangi fikrlar beradi. Kelajak shu yerdan boshlanadi!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) =>
      prev + (window.innerWidth < 768 ? 1 : 2) >= testimonials.length
        ? 0
        : prev + (window.innerWidth < 768 ? 1 : 2)
    );

  const prev = () =>
    setCurrent((prev) =>
      prev - (window.innerWidth < 768 ? 1 : 2) < 0
        ? testimonials.length - (window.innerWidth < 768 ? 1 : 2)
        : prev - (window.innerWidth < 768 ? 1 : 2)
    );

  useEffect(() => {
    const auto = setInterval(next, 7000);
    return () => clearInterval(auto);
  }, []);

  const visible = window.innerWidth < 768
    ? [testimonials[current]]
    : [
        testimonials[current],
        testimonials[(current + 1) % testimonials.length],
      ];

  return (
    <section className="relative py-24 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O‘quvchilar fikri
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bizning o‘quvchilarimizning fikrlari bizning eng katta yutug‘imiz.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative flex items-center justify-center">
          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-12 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 md:p-3 shadow-md transition z-20"
          >
            <ChevronLeft size={window.innerWidth < 768 ? 22 : 28} />
          </button>

          {/* CARDS */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 w-full sm:w-[85%] transition-all duration-700">
            {visible.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 md:p-10 flex flex-col items-center justify-between text-center transition-all duration-500 border border-gray-100 hover:-translate-y-1 min-h-[380px] md:min-h-[420px] flex-1"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-3xl"></div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-600 mb-4 md:mb-6 object-cover"
                />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-4 md:mb-6 flex-1">
                  “{item.text}”
                </p>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 text-xs md:text-sm mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-0 md:-right-12 bg-white/80 hover:bg-blue-100 text-blue-700 rounded-full p-2 md:p-3 shadow-md transition z-20"
          >
            <ChevronRight size={window.innerWidth < 768 ? 22 : 28} />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6 md:mt-10">
          {Array.from({ length: Math.ceil(testimonials.length / (window.innerWidth < 768 ? 1 : 2)) }).map(
            (_, i) => (
              <span
                key={i}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                  i === Math.floor(current / (window.innerWidth < 768 ? 1 : 2))
                    ? "bg-blue-700 w-6"
                    : "bg-blue-300"
                }`}
              ></span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
