import React from "react";
import opendata from "./images/opendata.jpg";
import { FaLightbulb, FaRunning, FaGraduationCap, FaHandsHelping, FaUsers } from "react-icons/fa";

export const RivojlanishBolimi = () => {
  const icons = [
    {
      title: "Ijodkorlik va ixtiro",
      icon: <FaLightbulb className="text-[#0047AB] text-4xl mb-3" />,
    },
    {
      title: "Sport va salomatlik",
      icon: <FaRunning className="text-[#0047AB] text-4xl mb-3" />,
    },
    {
      title: "Ilm va bilim",
      icon: <FaGraduationCap className="text-[#0047AB] text-4xl mb-3" />,
    },
    {
      title: "Fuqarolik va ijtimoiy mas'uliyat",
      icon: <FaHandsHelping className="text-[#0047AB] text-4xl mb-3" />,
    },
    {
      title: "Etakchilik va o'zaro ta'sir",
      icon: <FaUsers className="text-[#0047AB] text-4xl mb-3" />,
    },
  ];

  return (
    <>
      <section className="container font-poppins flex flex-col justify-around">
        {/* Title and Intro */}
        <div className="flex lg:flex-row flex-col gap-5">
          <h1 className="text-lg font-bold lg:w-[600px] w-full">
            Muhammad Al-Xorazmiy nomli ixtisoslashtirilgan maktabining o'quvchilar rivojlanishi bo'limi
          </h1>
          <p>
            Bu — dastur doirasida tanlab olish mumkin bo'lgan 20dan ortiq to'garaklar, klublar, bo'limlar
            kurslaridan iborat qo'shimcha mashg'ulotlardir.
          </p>
        </div>

        {/* Icon Section */}
        <div className="flex mt-6 lg:flex-row flex-col items-center justify-around">
          <img
            src={opendata}
            alt="Open Data"
            width={600}
            className="lg:h-[400px] rounded-2xl border border-[#0047AB]/10 shadow-md object-cover"
          />

          <div className="py-12 px-6 bg-white/70 backdrop-blur-md border border-[#0047AB]/10 rounded-2xl shadow-sm mt-6 lg:mt-0">
            <h2 className="text-2xl font-bold text-[#00214f] text-center mb-8">
              Asosiy yo‘nalishlar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {icons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col text-center bg-white/80 border border-[#E5E9F0] p-6 rounded-xl shadow-sm"
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold text-[#0047AB] mt-2">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-extrabold text-[#0047AB] mb-6">
            Qo'shimcha darslar jadvali
          </h2>

          <div className="space-y-4 border-l-4 border-[#0047AB] pl-4">
            <p className="text-lg">
              Qo'shimcha mashg'ulotlar asosiy darslardan so'ng, kunning ikkinchi yarmida boshlanadi (soat 15:00 dan).
            </p>
            <p className="text-lg">
              Kurslarni tanlash va ularning soni — har bir o'quvchining shaxsiy tanlovi; jadvalni uyg'un va xilma-xil
              qilishda unga murabbiy va rivojlantirish xodimlari yordam beradi.
            </p>
            <p className="text-lg">
              Kunning ikkinchi yarmidagi qo'shimcha mashg'ulotlarda ishtirok etish o'quvchilarga asosiy ta'lim
              vazifalaridan dam olish, qulay muhitda o'zlari uchun yangi va noodatiy narsalarni sinab ko'rish, boshqa
              sinf va yo'nalishlardan bo'lgan o'quvchilar bilan tanishish, turli o'qituvchilar bilan muloqot qilish
              imkonini beradi.
            </p>
          </div>

          {/* Info Box */}
          <div className="mt-8 p-6 bg-[#E5F2FF]/70 rounded-md border border-[#0047AB]/20 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="bg-[#0047AB] p-5 w-5 h-5 flex justify-center items-center rounded-full text-white text-xl">
              !
              </div>
              <p className="text-lg">
                Kunning ikkinchi yarmidagi qo'shimcha mashg'ulotlarda ishtirok etish o'quvchilarga asosiy ta'lim
                vazifalaridan dam olish, qulay muhitda o'zlari uchun yangi va noodatiy narsalarni sinab ko'rish,
                boshqa sinf va yo'nalishlardan bo'lgan o'quvchilar bilan tanishish, turli o'qituvchilar bilan muloqot
                qilish imkonini beradi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
