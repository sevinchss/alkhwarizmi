import React from "react";
import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.webp";
import icon4 from "./images/icon4.svg";

const features = [
  {
    img: icon1,
    title: "O‘quvchilar uchun bepul ta’lim",
    text: "Motivatsiyalangan o‘quvchilar uchun bepul onlayn darslar va o‘quv dasturlari.",
  },
  {
    img: icon2,
    title: "Maktab fanlari bo‘yicha bilim darajasini tekshirish",
    text: "Fanlar bo‘yicha testlar orqali o‘z bilim darajangizni baholang.",
  },
  {
    img: icon3,
    title: "O‘zbekistonning yetakchi o‘qituvchilaridan kurslar",
    text: "Eng tajribali o‘qituvchilar tomonidan tashkil etilgan to‘garaklar va maxsus kurslarda qatnashing.",
  },
  {
    img: icon4,
    title: "Turli darajadagi olimpiadalarga tayyorgarlik",
    text: "Maktab va respublika olimpiadalariga puxta tayyorlanish imkoniyatiga ega bo‘ling.",
  },
];

const PlatformInfo = () => {
  return (
    <section className="font-poppins bg-white dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto border-4 border-blue-800 rounded-3xl p-8 md:p-12 shadow-lg transition-all duration-500 hover:shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Muhammad al-Xorazmiy .Online platformasi haqida
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition-colors">
            PLATFORMA HAQIDA KO‘PROQ BILIB OLING
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformInfo;
