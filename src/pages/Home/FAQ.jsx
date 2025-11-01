import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import img1 from "./images/elb.jpg";
import { useNavigate } from "react-router-dom";

const FAQ_ITEMS = [
  {
    q: "O‘quvchilar qaysi dasturlash tillarini o‘rganishadi?",
    a: "Muhammad al-Xorazmiy maktabida o‘quvchilar Python, JavaScript, HTML, CSS va C++ kabi dasturlarni o‘rganadilar. Shuningdek, ular web va mobil ilovalar yaratish bo‘yicha amaliy ko‘nikmalarga ega bo‘ladilar.",
  },
  {
    q: "Maktabda amaliy mashg‘ulotlarga e’tibor beriladimi?",
    a: "Ha, darslar nazariyadan tashqari amaliy ishlanmalar bilan boyitilgan. O‘quvchilar real loyihalar ustida ishlashadi.",
  },
  {
    q: "Ta‘lim tizimi qanday tartibda ishlaydi?",
    a: "Muhammad al-Xorazmiy maktabida ta’lim xalqaro IB (International Baccalaureate) dasturi asosida olib boriladi. Bu tizim o‘quvchilarda mustaqil fikrlash, tanqidiy tahlil va ijodiy yondashuv ko‘nikmalarini rivojlantirishga qaratilgan.",
  },
  {
    q: "O‘quvchilar xalqaro musobaqalarda qatnashishadimi?",
    a: "Ha, al-Xorazmiy maktabi o‘quvchilari olimpiadalar, hackathon va ilmiy loyihalarda muntazam ishtirok etadi.",
  },
  {
    q: "Maktabda qabul qanday amalga oshiriladi?",
    a: "Qabul jarayoni test asosida amalga oshiriladi. To‘liqroq ma‘lumot olish uchun 1206 raqamiga qo‘ng‘iroq qiling.",
  },
];

export default function AlKhwarizmiFAQ() {
    const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    
    <section className="py-20 bg-gray-50 overflow-x-hidden font-poppins">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Flex container with items-stretch so left and right sides have same height */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 relative h-full" data-aos="fade-up">
            <img
              src={img1}
              alt="Al-Khwarizmi teacher"
              className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-200"
            />
            {/* Floating card top-left */}
            <div  onClick={() => navigate("/kontaktlar")} className="absolute cursor-pointer -top-5 -left-5 bg-blue-800 text-white px-5 py-3 rounded-md shadow-lg">
              <p className="font-medium text-sm">Savolingiz bormi?</p>
              <p className="text-xs opacity-90">Biz sizga javob beramiz</p>
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-between" data-aos="fade-up">
            <div>
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-[#1E40AF] px-3 py-1 rounded-full text-xs font-semibold">
                  Maktab haqida
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-snug">
                Maktabimiz haqida beriladigan savollar
              </h2>

              <div className="w-full border-t border-gray-200 divide-y divide-gray-200">
                {FAQ_ITEMS.map((item, i) => {
                  const isOpen = openIndex === i;
                  return (
                    <div key={i} className="py-1" data-aos="fade-up">
                      <button
                        onClick={() => toggle(i)}
                        className={`w-full flex items-center justify-between text-left p-3 rounded-lg transition-all duration-300 ${
                          isOpen ? " " : "hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-lg font-medium text-gray-800">{item.q}</span>
                     <svg
  className={`w-6 h-6 transform transition-transform ${
    isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
  }`}
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
</svg>

                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-80 mt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-gray-600 text-base leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Button to Admissions */}
            <div className="flex items-center  mt-2">
              <a href="/qabul-tartibi">
                <button
                  className="relative overflow-hidden
                  bg-blue-800 text-white font-semibold
                  px-6 py-3 rounded-xl
                  shadow-md
                  flex items-center gap-2
                  transition-all duration-300 ease-out
                  group
                  before:absolute before:inset-0 before:bg-white
                  before:translate-x-full before:transition-transform before:duration-500 before:ease-out
                  hover:before:translate-x-0
                  before:rounded-[inherit]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-800">
                    Maktabga qabul
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-blue-800"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
