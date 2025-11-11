import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Director1 from "./images/fazliddin.png"; // Ismailov Fazliddin
import Director2 from "./images/sevara.png"; // Shakirova Sevara
import Director3 from "./images/dilrabo.jpg"; // Davidova Dilrabo
import Director4 from "./images/hilola.jpg"; // Hilola Umarova

const directors = [
  {
    name: "Hilola Umarova",
    title: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab direktori va asoschisi.",
    photo: Director4,
    text: `“Mana olti yildirki, Muhammad al-Xorazmiy maktabi eng yuqori natijalarni namoyish etmoqda. 
    Biz doimiy ravishda O‘zbekiston va jahon reytinglarida yuqori o‘rinlarni egallab kelmoqdamiz. 
    Barcha bitiruvchilarimiz orzu qilgan oliy o‘quv yurtlariga kirishmoqda. 
    Ammo eng muhimi – bu natijalar emas, balki biz tarbiyalayotgan o‘quvchilarning insoniy qadriyatlari 
    va o‘z ajdodlaridan faxrlanadigan avlod bo‘lishidir.”`,
  },
  {
    name: "Davidova Dilrabo Tajibayevna",
    title: "",
    photo: Director3,
    text: `“Zamonaviy maktab bolaga keyingi hayot uchun zarur bo‘lgan ko‘nikmalarni – fan, amaliyot va 
    o‘zini o‘zi rag‘batlantirish qobiliyatini – berishi kerak. 
    Shuningdek, maktab – bu baxtli joy bo‘lishi zarur. 
    Buning uchun kuchli o‘qituvchilar jamoasi va do‘stona muhit kerak. 
    Biz aynan shunday tizimni yaratganmiz.”`,
  },
  {
    name: "Ismailov Fazliddin",
    title: "Ixtisoslik fanlari bo’yicha direktor o‘rinbosari.Ko‘plab loyihalar muallifi.Eco Union asoschisi.",
    photo: Director1,
    text: `“Maktabimiz bugungi kunda xalqaro ta’lim standartlariga mos holda, IB (International Baccalaureate) dasturining ilg‘or tamoyillarini 
    o‘z amaliyotiga tatbiq etayotgan yetakchi ta’lim maskanlaridan biridir. 
    Bizning maqsadimiz — o‘quvchilarni bilimli, global fikrlovchi, mas’uliyatli va insonparvar shaxslar sifatida tarbiyalashdir.”`,
  },
  {
    name: "Shakirova Sevara Baxadirovna",
    title: "",
    photo: Director2,
    text: `“Muhammad al-Xorazmiy maktabi — yurtimizda zamonaviy ta’lim, ma’naviyat va tarbiyani uyg‘unlashtirgan nufuzli ta’lim maskanidir. 
    Maktabimizda har bir o‘quvchining salohiyatini ro‘yobga chiqarish, ularning mustaqil fikrlashini, izlanuvchanlik va yangilikka intilishini 
    qo‘llab-quvvatlash asosiy maqsadimizdir. Bugungi kunda o‘quvchilarimiz nafaqat fan olimpiadalari va tanlovlarda, balki hayotning turli 
    sohalarida ham o‘z bilim va qobiliyatlari bilan ajralib turishmoqda.”`,
  },
];

const Message = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % directors.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + directors.length) % directors.length);

  const getPosition = (i) => {
    const diff = (i - index + directors.length) % directors.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === directors.length - 1) return "left";
    return "hidden";
  };

  return (
    <div className="relative flex flex-col items-center justify-center  min-h-screen overflow-hidden py-20 font-poppins">
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Maktab faxrlari</h1>

      <div className="relative w-full max-w-7xl flex justify-center items-center">
        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 text-5xl text-gray-500 hover:text-gray-800 z-20 select-none"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 text-5xl text-gray-500 hover:text-gray-800 z-20 select-none"
        >
          ›
        </button>

        <div className="relative flex items-center justify-center w-full h-[700px] overflow-hidden">
          <AnimatePresence>
            {directors.map((director, i) => {
              const position = getPosition(i);
              let scale = 0.75,
                opacity = 0.4,
                zIndex = 0,
                x = 0;
              if (position === "center") {
                scale = 1.05;
                opacity = 1;
                zIndex = 10;
                x = 0;
              } else if (position === "left") {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 5;
                x = -300;
              } else if (position === "right") {
                scale = 0.85;
                opacity = 0.6;
                zIndex = 5;
                x = 300;
              } else {
                opacity = 0;
                scale = 0.5;
                zIndex = 0;
                x = 0;
              }

              return (
                <motion.div
                  key={i}
                  className="absolute flex flex-col items-center text-center"
                  animate={{ scale, opacity, x }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ zIndex }}
                >
                  {/* Rasm — carddan alohida */}
                  <div className="w-[260px] h-[320px] overflow-hidden rounded-2xl shadow-md mb-6 bg-white">
                    <img
                      src={director.photo}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card — faqat matn qismi */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 w-[500px] md:w-[600px]">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {director.name}
                    </h2>
                    {director.title && (
                      <p className="text-sm text-gray-500 mt-1">
                        {director.title}
                      </p>
                    )}
                    <p className="text-gray-700 text-[16px] mt-4 leading-relaxed text-justify">
                      {director.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Message;
