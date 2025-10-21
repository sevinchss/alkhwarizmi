import React from "react";
import servicesImg from "./images/services.jpg";

const Services = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("services-section not found"); // fallback
    }
  };

  return (
    <section className="bg-gray-50 py-16 font-poppins">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main content card */}
        <div className="bg-white rounded-2xl shadow-sm p-10 flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: Text content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              O‘quvchi Xizmatlari
            </h1>

            <p className="text-gray-700 leading-relaxed mb-9 text-base">
              Maktabimiz o‘quvchilarning nafaqat bilim olishiga, balki ularning
              shaxsiy rivojlanishi, sog‘lomligi va kelajakdagi muvaffaqiyatiga
              e’tibor qaratadi. Quyidagi xizmatlar orqali biz o‘quvchilarni har
              tomonlama qo‘llab-quvvatlaymiz. Sog‘liqni saqlash markazi,
              psixologik yordam, SAT o‘qitish markazi, texnik yordam, karyera
              markazi va darsdan tashqari qo‘shimchalar — bularning barchasi
              o‘quvchilarimizning muvaffaqiyatli, ijodkor va baxtli hayot
              kechirishlari uchun yaratilgan.
            </p>

            <button
              onClick={scrollToServices}
              className="
                relative overflow-hidden
                bg-[#1a237e] text-white font-semibold
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
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1a237e]">
                Batafsil
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 relative z-10 transition-colors duration-300 group-hover:text-[#1a237e]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex-1">
            <div className="relative rounded-2xl overflow-hidden shadow-md">
              <img
                src={servicesImg}
                alt="O‘quvchi xizmatlari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
