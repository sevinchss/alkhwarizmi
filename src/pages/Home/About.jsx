import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import aboutImg from "./images/ADABIYOT.jpg";
import { Link } from "react-router-dom";

export default function AboutAlKhwarizmi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration for your animations
      once: true, // Animations only run once
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full bg-white py-20 px-6 md:px-12 font-[Poppins]"
      style={{ overflowX: "hidden" }} // Prevent horizontal scroll
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[40%_30%_30%] gap-10 items-center">
        {/* Left - Text */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug text-gray-900">
            Biz haqimizda 
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan
            zamonaviy texnologiyalar va chuqurlashtirilgan ta’lim uyg‘unligiga
            asoslangan innovatsion o‘quv maskani. O‘quvchilar axborot texnologiyalari, matematika, fizika,  va ingliz tili fanlaridan chuqur bilimga ega
            bo‘lishadi.
          </p>
          <Link to="/maqsad-vazifalar">
            <button
              className="
              relative overflow-hidden
              bg-blue-800 text-white font-semibold
              px-8 w-40 mt-2 py-3 rounded-xl
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
              <span className="relative z-10  transition-colors duration-300 group-hover:text-blue-800">
                Batafsil
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Middle - Image */}
        <div
          className="relative w-full  rounded-3xl overflow-hidden shadow-xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={aboutImg}
            alt="Al-Xorazmiy maktabi"
            className="lg:w-96 h-[420px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] hover:scale-[1.05]"
          />
        </div>

        {/* Right - Cards (2x2) */}
        <div className="grid grid-cols-2 gap-6 w-full">
          <div
            className="bg-white text-[#004AAD] rounded-3xl p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-400"
            data-aos="fade-right"
            data-aos-delay="500"
          >
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
            <h2 className="text-2xl font-bold">842</h2>
            <p className="text-sm mt-1">O‘quvchilar</p>
          </div>

          <div
            className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-400"
            data-aos="fade-left"
            data-aos-delay="500"
          >
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
                d="M9 7V4h6v3M6 7h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z"
              />
            </svg>
            <h2 className="text-2xl font-bold">89</h2>
            <p className="text-sm mt-1">O‘qituvchilar</p>
          </div>

          <div
            className="bg-white text-[#004AAD] rounded-3xl p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-400"
            data-aos="fade-right"
          >
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
                d="M3 21h18M9 8h6m-6 4h6m-9 4h12M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16"
              />
            </svg>
            <h2 className="text-2xl font-bold">37</h2>
            <p className="text-sm mt-1">Sinflar</p>
          </div>

          <div
            className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-3xl p-6 shadow-md flex flex-col items-center hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-400"
            data-aos="fade-left"
          >
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
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0a8.003 8.003 0 01-7-4"
              />
            </svg>
            <h2 className="text-2xl font-bold">135</h2>
            <p className="text-sm mt-1">Loyihalar</p>
          </div>
        </div>
      </div>
    </section>
  );
}
