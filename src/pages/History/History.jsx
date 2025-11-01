import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const History = () => {
  const timeline = [
    {
      year: "2017-2018",
      text: "Ulugʻ alloma Muhammad al-Xorazmiyning buyuk va bebaho merosini qadrlash, uni yosh avlod ongiga chuqur singdirish, oʻquvchilarning aniq fanlarning yuksak marralarini zabt etishiga koʻmaklashish, axborot-kommunikatsiya texnologiyalari sohasidagi iqtidorlarini aniqlash hamda qobiliyatlarini roʻyobga chiqarish uchun zarur shart-sharoitlar yaratish maqsadida Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabni tashkil etish toʻgʻrisida Oʻzbekiston Respublikasi Prezidentining 14.09.2017 yildagi PQ-3274-sonli Qarori qabul qilindi. Qarorga muvofiq maktab Toshkent Davlat Iqtisodiyot Universiteti qoshidagi Aniq fanlarga ixtisoslashtirilgan davlat umumta’lim maktabi negizida tashkil etildi",
    },
    {
      year: "2019-2020",
      text: "Toshkent shahri,Yashnabod tumani, Mahtumquli ko’chasi joylashuvida yangi bino Umarova Xilola Uktamovna rahbarligida o’z ish faoliyatini boshladi va jamoa shakllantirildi.",
    },
    {
      year: "2020-2021",
      text: "Onlayn arizalar qabuli ostida maktabga 5-9-sinflarga 360 nafar o’quvchilar qabul qilindi.",
    },
    {
      year: "2021–2022",
      text: "Ushbu o‘quv yili — maktab an’analarining shakllanish yili, birinchi jiddiy yutuqlar va olimpiadalarda g‘alabalar yili bo‘ldi.2020-yil O’zbekistonda ilk bor o’tkazilgan  “Roboto-uz.” musobaqasida maktabi o’quvchilari qatnashib sovrinli birinchi o’rinni egallashdi.",
    },
    {
      year: "2022–2023",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining birinchi bitiruvchilari. 6 nafar bitiruvchi Yurtimiz hamda dunyoning yetakchi oliy ta’lim muassasalariga qabul qilinadilar.",
    },
    {
      year: "2023–2024",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining ikkinchi bitiruvchilari. Maktab bitiruvchilari assotsiatsiyasida allaqachon 242 nafar shaxs bor.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="relative bg-gray-50 min-h-screen py-20 font-poppins overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-20 leading-snug"
          data-aos="fade-down"
        >
          Muhammad al-Xorazmiy IT maktabi tarixi
        </h1>

        {/* Center Vertical Line with extended fade zones */}
        <div className="absolute left-1/2 top-[60px] bottom-[10px] transform -translate-x-1/2 w-[7px]">
          <div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(30, 58, 138, 0) 0%,      /* very top fade */
rgba(30, 58, 138, 0) 3%,      /* start invisible higher */
rgba(30, 58, 138, 1) 14%,     /* fade-in starts earlier */
rgba(30, 58, 138, 1) 92%,     /* main timeline body */
rgba(30, 58, 138, 0) 100%     /* fully disappear */
              )`,
            }}
          ></div>
        </div>

        {/* Timeline Items */}
        {timeline.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex items-center mb-24 ${isLeft ? "justify-start" : "justify-end"
                }`}
            >
              {/* Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-900 border-4 border-white rounded-full shadow-lg dot-pulse z-10"></div>

{/* Card */}
              <div
                data-aos={isLeft ? "fade-right" : "fade-left"}
                className={`w-full md:w-[45%] bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${isLeft ? "text-right" : "text-left"
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

      {/* Circle pulse animation */}
      <style>{`
        @keyframes pulseBlue {
          0%, 100% { box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.6); }
          50% { box-shadow: 0 0 20px 5px rgba(30, 58, 138, 0.4); }
        }
        .dot-pulse {
          animation: pulseBlue 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default History;