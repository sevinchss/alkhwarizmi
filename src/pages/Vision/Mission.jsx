import React, { useEffect, useRef, useState } from "react";
import MissionPhoto from "./images/mission.jpg";
import {
  Heart,
  Search,
  Brain,
  MessageCircle,
  Lightbulb,
  Scale,
  Target,
} from "lucide-react";

const Mission = () => {
  const timeline = [
    {
      year: "2017 -",
      text: "Ulugʻ alloma Muhammad al-Xorazmiyning buyuk va bebaho merosini qadrlash, uni yosh avlod ongiga chuqur singdirish, oʻquvchilarning aniq fanlarning yuksak marralarini zabt etishiga koʻmaklashish, axborot-kommunikatsiya texnologiyalari sohasidagi iqtidorlarini aniqlash hamda qobiliyatlarini roʻyobga chiqarish uchun zarur shart-sharoitlar yaratish maqsadida Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabni tashkil etish toʻgʻrisida Oʻzbekiston Respublikasi Prezidentining 14.09.2017 yildagi PQ-3274-sonli Qarori qabul qilindi. Qarorga muvofiq maktab Toshkent Davlat Iqtisodiyot Universiteti qoshidagi Aniq fanlarga ixtisoslashtirilgan davlat umumta’lim maktabi negizida tashkil etildi.",
    },
    { 
      year: "2019 -",
      text: "Toshkent shahri, Yashnabod tumani, Mahtumquli ko’chasi joylashuvida yangi bino Umarova Xilola Uktamovna rahbarligida o’z ish faoliyatini boshladi va jamoa shakllantirildi.",
    },
    {
      year: "2020 -",
      text: "Onlayn arizalar qabuli ostida maktabga 5-9-sinflarga 330 nafar o’quvchilar qabul qilindi.",
    },
    {
      year: "2021-2022",
      text: "Ushbu o'quv yili — maktab an’analarining shakllanish yili, birinchi jiddiy yutuqlar va olimpiadalarda g'alabalar yili bo'ldi. 2020-yil O’zbekistonda ilk bor o’tkazilgan “Roboto-uz.” musobaqasida maktab o’quvchilari qatnashib sovrinli birinchi o’rinni egallashdi.",
    },
    {
      year: "2022-2023",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining birinchi bitiruvchilari. __ nafar bitiruvchi Yurtimiz hamda dunyoning yetakchi oliy ta’lim muassasalariga qabul qilindilar.",
    },
    {
      year: "2023-2025",
      text: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabining ikkinchi bitiruvchilari. Maktab bitiruvchilari assotsiatsiyasida allaqachon ____ nafar o'quvchi bor.",
    },
  ];

  const graduateProfile = [
    {
      icon: <Heart className="text-red-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "G'amxo'r",
      text: "Atrofdagilarga yordam beradigan, insonparvar va mehribon shaxs.",
    },
    {
      icon: <Search className="text-blue-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Izlanishga chanqoq",
      text: "Bilimga ochiq, yangiliklarni o'rganishdan zavqlanadigan shaxs.",
    },
    {
      icon: <Brain className="text-yellow-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Tanqidiy fikrlovchi",
      text: "Har qanday g'oyani tahlil qilib, asosli qarorga keluvchi o'quvchi.",
    },
    {
      icon: <MessageCircle className="text-green-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Kommunikativ",
      text: "Tashabbuskor, boshqalar bilan ochiq muloqot qiluvchi shaxs.",
    },
    {
      icon: <Lightbulb className="text-amber-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Innovatsion fikrlovchi",
      text: "Muammolarni ijodkorlik bilan hal qiluvchi va yangicha yondashuv topuvchi.",
    },
    {
      icon: <Scale className="text-purple-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Prinsipial va mas’uliyatli",
      text: "O'z qadriyatlariga sodiq, qarorlarida qat’iy va halol.",
    },
    {
      icon: <Target className="text-pink-500 w-5 sm:w-6 h-5 sm:h-6" />,
      title: "Tashkilchi va yetakchi",
      text: "Jamoani birlashtira oladigan, reja tuzuvchi va ilhom baxsh etuvchi shaxs.",
    },
  ];

  const missionDetails = [
    {
      title: "Tajriba va tahlil",
      text: "Muhammad al-Xorazmiy maktabi eng yaxshi o'zbekistonlik va xorijiy maktablarning tajribasidan foydalanadi hamda ta’limdagi eng zamonaviy yondashuvlarni amalga oshiradi.",
    },
    {
      title: "Eng yaxshi pedagoglar",
      text: "Muhammad al-Xorazmiy maktabining o'quv dasturlari ustida tajribali o'qituvchilar va metodistlardan iborat malakali jamoa ishlaydi.",
    },
    {
      title: "Zamonaviy maktab majmuasi",
      text: "Muhammad al-Xorazmiy maktabining majmuasi — O'zbekistonda o'xshashi yo'q tarzda tashkil etilgan o'quv va yashash makoni bo'lib, u o'quvchilarga o'zlarining akademik, sport va ijodiy qiziqishlarini to'liq ro'yobga chiqarish imkonini beradi hamda ularning vaqti, energiyasi va sog'ligini asraydi.",
    },
  ];

  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const profileRef = useRef(null);
  const [activeSection, setActiveSection] = useState("mission");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    [missionRef, historyRef, profileRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [missionRef, historyRef, profileRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-10 md:py-12 font-poppins scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 md:p-6 w-full md:w-1/4 md:sticky md:top-4 self-start h-fit">
          <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-4 sm:mb-6">Menyu</h3>
          <nav className="space-y-3 sm:space-y-4">
            {[
              { id: "mission", num: "01", label: "Maktab missiyasi" },
              { id: "history", num: "02", label: "Maktab tarixi" },
              { id: "profile", num: "03", label: "Bitiruvchi profili" },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  scrollToSection(
                    item.id === "mission"
                      ? missionRef
                      : item.id === "history"
                      ? historyRef
                      : profileRef
                  )
                }
                className={`flex items-center gap-2 sm:gap-3 cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-blue-900 font-semibold"
                    : "text-gray-500 hover:text-blue-900"
                }`}
              >
                <span className="text-xs sm:text-sm font-bold">{item.num}</span>
                <span className="uppercase text-xs sm:text-sm">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 flex-1">
          {/* MISSION SECTION */}
          <section id="mission" ref={missionRef}>
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
              Maktab missiyasi
            </h1>

            <img
              src={MissionPhoto}
              alt="Maktab missiyasi"
              className="w-full h-64 sm:h-80 md:h-[380px] object-cover rounded-xl mb-4 sm:mb-6"
            />

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Ixtisoslashtirilgan maktabning asosiy vazifasi — axborot-kommunikatsiya
              texnologiyalarini keng jalb qilgan holda matematika, fizika, informatika
              va chet tili fanlarini chuqur o'zlashtirish, o'quvchilarni dasturlash
              asoslari, ma’lumotlar bazasi bilan ishlash va axborot xavfsizligini
              ta’minlash bo'yicha ko'nikmalarga ega qilishdan iborat.
            </p>

            <hr className="my-6 sm:my-8 border-gray-200" />

            {/* Mission Details */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10">
              {missionDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 md:gap-10"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900 sm:w-1/3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 sm:w-2/3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* HISTORY SECTION */}
          <section id="history" ref={historyRef} className="mt-12 sm:mt-16 md:mt-20">
            <hr className="my-8 sm:my-10 md:my-12 border-gray-200" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 md:mb-10">
              Muhammad al-Xorazmiy IT maktabi tarixi
            </h2>

            <div className="relative pl-8 sm:pl-10 md:pl-12">
              <div className="absolute left-[37px] sm:left-[47px] md:left-[57px] top-0 w-[3px] h-full bg-gray-400"></div>
              {timeline.map((item, index) => {
                const isLatest = index === timeline.length - 1;
                return (
                  <div key={index} className="relative mb-8 sm:mb-10 md:mb-12 flex items-start">
                    <div
                      className={`absolute left-0 top-1.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full border-3 sm:border-4 border-white shadow-md ${
                        isLatest
                          ? "bg-blue-900 animate-pulse-blue"
                          : "bg-blue-900"
                      }`}
                    ></div>
                    <div className="ml-8 sm:ml-10 md:ml-12">
                      <h3
                        className={`${
                          isLatest
                            ? "text-blue-900 text-base sm:text-lg md:text-xl font-bold"
                            : "text-blue-900 text-sm sm:text-base md:text-lg font-semibold"
                        } mb-1 sm:mb-2`}
                      >
                        {item.year} yil
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* GRADUATE PROFILE SECTION */}
          <section id="profile" ref={profileRef} className="mt-12 sm:mt-16 md:mt-20">
            <hr className="my-8 sm:my-10 md:my-12 border-gray-200" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 md:mb-10">
              Muhammad al-Xorazmiy maktabi bitiruvchisi profili
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {graduateProfile.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start bg-gray-50 rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Custom Blue Pulse Animation */}
      <style>{`
        @keyframes pulseBlue {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.6);
          }
          50% {
            box-shadow: 0 0 10px 3px sm:0 0 15px 5px rgba(30, 58, 138, 0.4);
          }
        }
        .animate-pulse-blue {
          animation: pulseBlue 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Mission;