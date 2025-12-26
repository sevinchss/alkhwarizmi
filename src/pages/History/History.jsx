import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import video1 from "./images/1217.mp4";
import video2 from "./images/yutuq.jpg";
import video3 from "./images/navroz.mp4";
import video4 from "./images/campus.mp4";
import video5 from "./images/navroz2.mp4";
import video6 from "./images/elbekd.mp4";

const History = () => {
  const timeline = [
    {
      year: "2017-2018",
      text: "Ulugʻ alloma Muhammad al-Xorazmiyning buyuk va bebaho merosini qadrlash, uni yosh avlod ongiga chuqur singdirish, oʻquvchilarning aniq fanlarning yuksak marralarini zabt etishiga koʻmaklashish, axborot-kommunikatsiya texnologiyalari sohasidagi iqtidorlarini aniqlash hamda qobiliyatlarini roʻyobga chiqarish uchun zarur shart-sharoitlar yaratish maqsadida Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabni tashkil etish toʻgʻrisida Oʻzbekiston Respublikasi Prezidentining 14.09.2017 yildagi PQ-3274-sonli Qarori qabul qilindi. Qarorga muvofiq maktab Toshkent Davlat Iqtisodiyot Universiteti qoshidagi Aniq fanlarga ixtisoslashtirilgan davlat umumta’lim maktabi negizida tashkil etildi",
      media: video1,
    },
    {
      year: "2019-2020",
      text: "Toshkent shahri,Yashnabod tumani, Mahtumquli ko’chasi joylashuvida yangi bino Umarova Xilola Uktamovna rahbarligida o’z ish faoliyatini boshladi va jamoa shakllantirildi.",
      media: video2,
    },
    {
      year: "2020-2021",
      text: "Onlayn arizalar qabuli ostida maktabga 5-9-sinflarga 360 nafar o’quvchilar qabul qilindi.",
      media: video3,
    },
    {
      year: "2021–2022",
      text: "Ushbu o‘quv yili — maktab an’analarining shakllanish yili, birinchi jiddiy yutuqlar va olimpiadalarda g‘alabalar yili bo‘ldi.2020-yil O’zbekistonda ilk bor o’tkazilgan  “Roboto-uz.” musobaqasida maktabi o’quvchilari qatnashib sovrinli birinchi o’rinni egallashdi.",
      media: video4,
    },
    {
      year: "2022–2023",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining birinchi bitiruvchilari. 6 nafar bitiruvchi Yurtimiz hamda dunyoning yetakchi oliy ta’lim muassasalariga qabul qilinadilar.",
      media: video5,
    },
    {
      year: "2023–2024",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining ikkinchi bitiruvchilari. Maktab bitiruvchilari assotsiatsiyasida allaqachon 242 nafar shaxs bor.",
      media: video6,
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const isVideo = (file) =>
    file.endsWith(".mp4") || file.endsWith(".webm");

  return (
    <div className="relative bg-gray-50 min-h-screen py-20 font-poppins overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20"
          data-aos="fade-down"
        >
          Muhammad al-Xorazmiy IT maktabi tarixi
        </h1>

        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[6px]">
          <div
            className="h-full rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(30,58,138,0) 0%, rgba(30,58,138,.3) 10%, rgba(30,58,138,1) 20%, rgba(30,58,138,1) 80%, rgba(30,58,138,.3) 90%, rgba(30,58,138,0) 100%)",
            }}
          />
        </div>

        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 items-center mb-28 ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-900 border-4 border-white rounded-full shadow-lg z-10 dot-pulse" />

              {/* MEDIA (image OR video) */}
              <div className="w-full md:w-1/2 px-4 md:px-8">
               {isVideo(item.media) ? (
  <video
    src={item.media}
    controls
    preload="metadata"
    playsInline
    className="w-full h-[260px] md:h-[340px] rounded-2xl shadow-xl object-cover"
  />
) : (
  <img
    src={item.media}
    alt={item.year}
    className="w-full h-[260px] md:h-[340px] rounded-2xl shadow-xl object-cover"
  />
)}

              
              </div>

              {/* Text */}
              <div
                data-aos={isLeft ? "fade-right" : "fade-left"}
                className={`w-full md:w-1/2 bg-white rounded-2xl shadow-xl px-6 py-6 md:px-8 md:py-8 ${
                  isLeft ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                  {item.year}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify text-lg">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulseBlue {
          0%,100% { box-shadow: 0 0 0 0 rgba(30,58,138,.6); }
          50% { box-shadow: 0 0 18px 6px rgba(30,58,138,.35); }
        }
        .dot-pulse {
          animation: pulseBlue 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default History;
