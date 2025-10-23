import React from "react";
import { Code, Network, Smartphone, PenTool, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg1 from "./images/fac1.jpg";
import bg2 from "./images/kamron.jpg";
import bg3 from "./images/web.jpg";
import bg4 from "./images/fac4.jpg";

export const Faculties = () => {
  const faculties = [
    {
      title: "Kompyuter grafikasi",
      desc: "Photoshop, CorelDraw va Blender dasturlarida 2D va 3D dizayn loyihalarini yaratish amaliyoti o‘rgatiladi.",
      icon: <PenTool className="w-7 h-7 text-blue-700" />,
      img: bg1,
      link: "/grafika",
    },
    {
      title: "Mobil dasturlash",
      desc: "Android va iOS platformalarida Flutter, Kotlin va Swift yordamida mobil ilovalar yaratish amaliyoti o‘rgatiladi.",
      icon: <Smartphone className="w-7 h-7 text-blue-700" />,
      img: bg2,
      link: "/mobil",
    },
    {
      title: "Web dasturlash",
      desc: "HTML, CSS, JavaScript va React yordamida zamonaviy, responsiv web saytlar ishlab chiqish ko‘nikmalari beriladi.",
      icon: <Code className="w-7 h-7 text-blue-700" />,
      img: bg3,
      link: "/web",
    },
    {
      title: "Kompyuter tarmoqlari",
      desc: "Server va tarmoq konfiguratsiyalari, xavfsizlik va tizim boshqaruvi bo‘yicha amaliy bilimlar o‘rgatiladi.",
      icon: <Network className="w-7 h-7 text-blue-700" />,
      img: bg4,
      link: "/tarmoq",
    },
  ];

  return (
    <section className="py-20 bg-[#eef3ff] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#0047AB] font-extrabold text-4xl mb-16 tracking-wide">
          YO‘NALISHLAR
        </h2>

        <div data-aos="zoom-in" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {faculties.map((item, i) => (
            <motion.div
              key={i}
              className="relative flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl bg-white group hover:shadow-2xl transition-all duration-700"
              whileHover={{ scale: 1.015 }}
            >
              {/* IMAGE SIDE */}
              <div className="flex-1 relative overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full brightness-[0.9] transition-all duration-700  group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-40"></div>
              </div>

              {/* TEXT SIDE */}
              <div className="relative flex-1 bg-gradient-to-br f text-gray-800 p-10 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-[15px]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 relative z-10">
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 bg-blue-800 hover:bg-white/30 hover:border-blue-800 border hover:text-blue-800 text-cyan-100 px-5 py-2 rounded-full text-sm font-medium transition-all"
                  >
                    Batafsil <ArrowRight size={16} />
                  </Link>
                </div>

                {/* 🔥 ENHANCED MULTILAYER WAVES */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
                  animate={{
                    y: ["0%", "-2%", "0%"],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-44"
                  >
                    {/* Wave Layer 1 */}
                    <path
                      d="M0,50 C150,120 350,10 500,100"
                      fill="none"
                      stroke="#4cc9ff"
                      strokeWidth="1.5"
                    />
                    {/* Wave Layer 2 */}
                    <path
                      d="M0,70 C150,140 350,30 500,120"
                      fill="none"
                      stroke="#6ed1ff"
                      strokeWidth="1.2"
                    />
                    {/* Wave Layer 3 */}
                    <path
                      d="M0,90 C150,160 350,50 500,140"
                      fill="none"
                      stroke="#9adfff"
                      strokeWidth="1"
                    />
                    {/* Wave Layer 4 */}
                    <path
                      d="M0,110 C150,180 350,70 500,160"
                      fill="none"
                      stroke="#c4ecff"
                      strokeWidth="0.9"
                    />
                  </svg>
                </motion.div>

                {/* Light reflection overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
