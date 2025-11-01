import React from "react";
import {
  GraduationCap,
  CheckSquare,
  Users,
  Award,
} from "lucide-react"; // modern line icons
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <GraduationCap size={42} strokeWidth={1.6} className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
    title: "O‘quvchilar uchun bepul ta’lim",
    text: "Motivatsiyalangan o‘quvchilar uchun bepul onlayn darslar va o‘quv dasturlari.",
  },
  {
    icon: <CheckSquare size={42} strokeWidth={1.6} className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
    title: "Maktab fanlari bo‘yicha bilim darajasini tekshirish",
    text: "Fanlar bo‘yicha testlar orqali o‘z bilim darajangizni baholang.",
  },
  {
    icon: <Users size={42} strokeWidth={1.6} className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
    title: "O‘zbekistonning yetakchi o‘qituvchilaridan kurslar",
    text: "Eng tajribali o‘qituvchilar tomonidan tashkil etilgan to‘garaklar va maxsus kurslarda qatnashing.",
  },
  {
    icon: <Award size={42} strokeWidth={1.6} className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
    title: "Turli darajadagi olimpiadalarga tayyorgarlik",
    text: "Maktab va respublika olimpiadalariga puxta tayyorlanish imkoniyatiga ega bo‘ling.",
  },
];

const PlatformInfo = () => {
    const navigate = useNavigate();
  return (
    <section className="font-poppins bg-gradient-to-br from-[#f8fafc] to-[#eef3fa] dark:from-[#0b0f17] dark:to-[#141a25] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto border border-blue-800/40 rounded-3xl p-10 md:p-14 shadow-xl backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-14 tracking-tight">
          Muhammad Al-Khwarizmi{" "}
          <span className="text-blue-800">Onlayn platformasi</span> haqida
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white/70 dark:bg-[#0d121b] shadow-md hover:shadow-lg hover:bg-blue-50/40 dark:hover:bg-[#131a25] transition-all duration-500"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100/70 dark:bg-blue-900/30 mb-5 shadow-inner">
                {feature.icon}
              </div>

              <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button  onClick={() => navigate("/coming-soon")} className="bg-blue-700 text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-blue-800 transition-all duration-300 shadow-md hover:shadow-blue-500/30">
            PLATFORMANI BATAFSIL KO‘RISH
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformInfo;
