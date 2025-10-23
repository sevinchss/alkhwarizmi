import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Globe, Braces, Palette, Boxes } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import webBg from "../Home/images/fac3.jpg";
import person1 from "./images/webde.jpg";
import person2 from "./images/zafar.jpg";

export const WebPage = () => {
  const technologies = [
    { name: "HTML / CSS / JS", icon: <Code className="w-8 h-8 text-sky-400" /> },
    { name: "React & Next.js", icon: <Globe className="w-8 h-8 text-sky-400" /> },
    { name: "Tailwind CSS", icon: <Braces className="w-8 h-8 text-sky-400" /> },
    { name: "Bootstrap", icon: <Palette className="w-8 h-8 text-sky-400" /> },
    { name: "Node.js & Express", icon: <Server className="w-8 h-8 text-sky-400" /> },
    { name: "SQL / MongoDB", icon: <Database className="w-8 h-8 text-sky-400" /> },
    { name: "API Integratsiya", icon: <Boxes className="w-8 h-8 text-sky-400" /> },
  ];

  const teachers = [
    {
      name: "Davron Avlakulov",
      role: "Senior Frontend Dasturchi",
      img: person1,
      bio: "6 yillik tajribaga ega. React.js, UI/UX va SPA arxitekturasi bo‘yicha yetakchi dasturchi.",
    },
    {
      name: "Zafar Mirzaboyev",
      role: "Fullstack Mentor",
      img: person2,
      bio: "Backend (Node.js, Express), SQL va MongoDB bo‘yicha professional o‘qituvchi.",
    },
  ];

  return (
    <section className="relative min-h-screen font-poppins bg-gradient-to-b from-[#001635] via-[#002b80] to-[#003fa8] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={webBg}
          alt="Web Dasturlash"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000e2d]/70 to-[#002a7b]/90"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 mb-6 drop-shadow-sm"
        >
          Web Dasturlash Yo‘nalishi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-blue-100 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Ushbu yo‘nalishda talabalar HTML, CSS, JavaScript, React va backend
          texnologiyalarini chuqur o‘rganadilar. Amaliy loyihalar orqali haqiqiy
          dasturchilik tajribasiga ega bo‘ladilar.
        </motion.p>
      </div>

      {/* Technologies Slider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r  from-blue-300 via-blue-100 to-blue-300 mb-10">
          Ishlatiladigan Texnologiyalar
        </h2>

        <Swiper
          spaceBetween={25}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          className="pb-6"
        >
          {technologies.map((tech, i) => (
            <SwiperSlide key={i}>
              <motion.div
                className="p-8 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 
                border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3"
              >
                <div className="p-4 rounded-full bg-blue-500/20 border border-blue-400/40">
                  {tech.icon}
                </div>
                <p className="text-base font-medium text-blue-100 text-center">
                  {tech.name}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Teachers Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 mb-16">
          Ustozlar
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              className="relative group w-[300px] md:w-[340px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-110 "
                />
                <div className="absolute inset-0   group-hover:opacity-50 transition-all duration-500"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1 text-blue-300 group-hover:text-sky-400 transition-all duration-300">
                  {teacher.name}
                </h3>
                <p className="text-blue-200 text-sm mb-2">{teacher.role}</p>
                <motion.p className="text-blue-100 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {teacher.bio}
                </motion.p>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 via-sky-400/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center items-center mb-6">
        <a
          href="/"
          className="relative overflow-hidden bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md flex items-center gap-2 transition-all duration-300 ease-out group before:absolute before:inset-0 before:bg-white before:translate-x-full before:transition-transform before:duration-500 before:ease-out hover:before:translate-x-0 before:rounded-[inherit]"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-blue-600">
            ← Bosh sahifaga o'tish
          </span>
        </a>
      </div>
    </section>
  );
};
