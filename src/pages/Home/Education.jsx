import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  PiMathOperationsBold,
  PiFlaskBold,
  PiBookOpenTextBold,
  PiCodeBold,
  PiLightbulbBold,
  PiSoccerBallBold,
} from "react-icons/pi";
import school from "./images/shavkataka.jpg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const features = [
 {
     title: "IT va kodlash",
     desc: "Dasturlash, raqamli dizayn, sun’iy intellekt va texnologik innovatsiyalar.",
     icon: <PiCodeBold className="h-8 w-8 text-sky-600" />,
     color: "from-sky-500/10 to-sky-100",
   },
   {
     title: "Matematika+",
     desc: "Algebra, tahlil, ehtimollar, kombinatorika va algoritmik tafakkur asoslari.",
     icon: <PiMathOperationsBold className="h-8 w-8 text-indigo-600" />,
     color: "from-indigo-500/10 to-indigo-100",
   },
   {
     title: "Fizika",
     desc: "Fizika, kimyo, biologiya va ekologiya bo'yicha amaliy va laboratoriya tajribalari.",
     icon: <PiFlaskBold className="h-8 w-8 text-amber-500" />,
     color: "from-amber-500/10 to-amber-100",
   },
   {
     title: "Ingliz tili",
     desc: "Tarix, iqtisod, falsafa va kommunikatsiya fanlarini IT bilan integratsiya qilish.",
     icon: <PiBookOpenTextBold className="h-8 w-8 text-emerald-600" />,
     color: "from-emerald-500/10 to-emerald-100",
   },
 
];

const FeatureCard = ({ icon, title, desc, color }) => (
  <motion.div
    className={`group relative flex flex-col gap-3 rounded-2xl bg-gradient-to-br ${color} p-6 shadow-md hover:shadow-xl transition-transform border border-white/40 backdrop-blur-sm cursor-pointer`}
  >
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md ring-1 ring-slate-200 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-indigo-700 transition-colors duration-300">
        {title}
      </h3>
    </div>
    <p className="text-[15px] text-slate-700 leading-relaxed pl-[3.5rem] group-hover:text-slate-900 transition-colors duration-300">
      {desc}
    </p>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]" />
  </motion.div>
);

export default function AlKhwarizmiEducation() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust the duration for your animations
      once: true,     // Animations only run once
    });
  }, []);

  return (
    <section
      className="relative font-[Poppins] w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 lg:px-12 overflow-hidden"
      style={{ overflowX: "hidden" }} // Prevent horizontal scroll
    >
          <motion.div
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[450px] bg-gradient-to-tr from-[#3BAAFF20] via-[#4DB7FF10] to-[#0096FF20] blur-3xl"
      />

      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch relative z-10"
        data-aos="fade-right"
      >
        {/* Image block */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-end min-h-[650px] group cursor-pointer"
        >
          <motion.img
            src={school}
            alt="Al-Khwarizmi School campus"
            className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="relative p-6 bg-white/90 backdrop-blur-md border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              5–11-sinflar · IT, matematika, tabiiy fanlar va loyihaviy ta’lim
            </p>
          </div>
        </motion.div>

        <motion.div
          data-aos="fade-left"
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
            Ta’lim Al-Xorazmiyda
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mt-4 max-w-xl">
          Al-Xorazmiy maktabi 5–11-sinf o'quvchilariga chuqurlashtirilgan ta’lim beradi. Yo'nalishlar informatika,matematika, fizika va ingliz tili fanlarini qamrab oladi.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
