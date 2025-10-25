import React from "react";
import presidencyImg from "./images/presidency.png";

const About = () => {
  return (
    <div className="bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-10">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">
              IT-School Presidency
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabdagi
              IT-School Prezidenti — maktabning eng oliy tashkiloti hisoblanadi.
              To'rtinchi Prezident (joriy prezident) Sardorbek Abdumanabov
              tomonidan amalga oshirilgan islohotlardan so'ng, Prezidentlik
              “Tartib bilan taraqqiyot” shiori ostida faoliyat yurita boshladi.
              U o'quvchilar tomonidan saylanadigan boshqaruv organiga aylanishi
              bilan maktabning "demokratik yuragi" sifatida tanildi.
              <br />
              <br />
              Jamoa Prezident, Vitse-prezident va oltita asosiy bo'limdan
              iborat: Ta’lim va Madaniyat, Sport, Tashqi
              ishlari, IT va Media. Prezidentlik jamoasi o'quvchilarning
              manfaatlarini himoya qiladi, ularning fikrlarini ma’muriyatga
              yetkazadi va maktabdagi ichki muhitni yaxshilash ustida ishlaydi.
            </p>
            <a href="">
         <button
              className=" mt-4
    relative overflow-hidden
    bg-blue-600 text-white font-semibold
    px-6 py-3 rounded-xl
    shadow-md
    flex items-center gap-2
    transition-all duration-300 ease-out
    group
    before:absolute before:inset-0 before:bg-white
    before:translate-x-full before:transition-transform before:duration-500 before:ease-out
    hover:before:translate-x-0
    before:rounded-[inherit]
  "
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">
                Batafsil
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            </a>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 relative">
            <img
              src={presidencyImg}
              alt="Presidency"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>
        </div>

        {/* Stats cards */}
        <div className="max-w-7xl mx-auto px-6 pb-20">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Vazirliklar */}
            <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
              {/* Government Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 mb-3 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M4 10h16M4 10l8-6 8 6M9 21V10h6v11"
                />
              </svg>
              <h2 className="text-2xl font-bold">6</h2>
              <p className="text-sm mt-1">Vazirliklar</p>
            </div>

            {/* Departamentlar */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-6 shadow-md flex flex-col items-center">
              {/* Office Building Icon (Changed) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21h18M5 21V9a2 2 0 012-2h10a2 2 0 012 2v12M9 9V5a2 2 0 012-2h2a2 2 0 012 2v4"
                />
              </svg>
              <h2 className="text-2xl font-bold">12</h2>
              <p className="text-sm mt-1">Departamentlar</p>
            </div>

            {/* Loyihalar */}
            <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
              {/* Lightbulb / Innovation Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 mb-3 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a7 7 0 00-4 12.74V18a2 2 0 002 2h4a2 2 0 002-2v-3.26A7 7 0 0012 2z"
                />
              </svg>
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="text-sm mt-1">Loyihalar</p>
            </div>

            {/* Ishtirokchilar */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-6 shadow-md flex flex-col items-center">
              {/* Users Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-3a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <h2 className="text-2xl font-bold">50+</h2>
              <p className="text-sm mt-1">Ishtirokchilar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
