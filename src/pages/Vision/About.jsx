import React from "react";
import maktab from "./images/maktab.jpeg";

export const About = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main content card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Text content */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Maktab haqida
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-9">
              Muhammad al-Xorazmiy nomidagi axborot-kommunikatsiya texnologiyalari yo'nalishiga oid fanlarni chuqurlashtirib o'qitishga ixtisoslashtirilgan maktab O‘zbekiston Respublikasi Prezidentining 2017-yil 14- sentabrdagi PQ-3274-sonli “Muhammad al-Xorazmiy nomidagi axborot kommunikatsiya texnologiyalari yo'nalishiga oid fanlarni chuqurlashtirib o'qitishga ixtisoslashtirilgan maktabni tashkil etish to'g'risida”gi qaroriga muvofiq Toshkent Davlat Iqtisodiyot Universiteti qoshidagi Aniq fanlarga ixtisoslashtirilgan davlat umumta’lim maktabi negizida tashkil etildi.
            </p>

          
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={maktab}
                alt="University campus"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
          {/* Students */}
          <div className="bg-white text-blue-600 rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-3 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-3a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">842</h2>
            <p className="text-xs sm:text-sm mt-1">O'quvchilar</p>
          </div>

          {/* Staff */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7V4h6v3m-9 0h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z"
              />
            </svg>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">89</h2>
            <p className="text-xs sm:text-sm mt-1">O'qituvchilar</p>
          </div>

          {/* Schools */}
          <div className="bg-white text-blue-600 rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-3 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21h18M9 8h6m-6 4h6m-9 4h12M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16"
              />
            </svg>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">37</h2>
            <p className="text-xs sm:text-sm mt-1">Sinflar</p>
          </div>

          {/* Faculty */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 sm:w-8 h-6 sm:h-8 mb-2 sm:mb-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0a8.003 8.003 0 01-7-4"
              />
            </svg>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">135</h2>
            <p className="text-xs sm:text-sm mt-1">Loyihalar</p>
          </div>
        </div>
      </div>
    </section>
  );
};