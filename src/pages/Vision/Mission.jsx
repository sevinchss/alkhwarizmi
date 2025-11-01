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
  const graduateProfile = [
    {
      icon: <Heart className="text-red-500 w-6 h-6" />,

      title: "G'amxo'r",

      text: "Atrofdagilarga yordam beradigan, insonparvar va mehribon shaxs.",
    },

    {
      icon: <Search className="text-blue-500 w-6 h-6" />,

      title: "Izlanishga chanqoq",

      text: "Bilimga chanqoq, yangiliklarni o'rganishdan zavqlanadigan shaxs.",
    },

    {
      icon: <Brain className="text-yellow-500 w-6 h-6" />,

      title: "Tanqidiy fikrlovchi",

      text: "Har qanday g'oyani tahlil qilib, asosli qarorga keluvchi o'quvchi.",
    },

    {
      icon: <MessageCircle className="text-green-500 w-6 h-6" />,

      title: "Kommunikativ",

      text: "Tashabbuskor, boshqalar bilan ochiq muloqot qiluvchi shaxs.",
    },

    {
      icon: <Lightbulb className="text-amber-500 w-6 h-6" />,

      title: "Innovatsion fikrlovchi",

      text: "Muammolarni ijodkorlik bilan hal qiluvchi va yangicha yondashuv topuvchi.",
    },

    {
      icon: <Scale className="text-purple-500 w-6 h-6" />,

      title: "Prinsipial va mas’uliyatli",

      text: "O'z qadriyatlariga sodiq, qarorlarida qat’iy va halol.",
    },

    {
      icon: <Target className="text-pink-500 w-6 h-6" />,

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
      title: "Zamonaviy kampus",

      text: "Muhammad al-Xorazmiy maktabining kampusi — O'zbekistonda o'xshashi yo'q tarzda tashkil etilgan o'quv va yashash makoni bo'lib, u o'quvchilarga o'zlarining akademik, sport va ijodiy qiziqishlarini to'liq ro'yobga chiqarish imkonini beradi hamda ularning vaqtini, energiyasini va sog'lig'ini asraydi.",
    },
  ];

  const missionRef = useRef(null);

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

    [missionRef, profileRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [missionRef, profileRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen py-12 font-poppins scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 md:px-15 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}

        <aside className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-1/4 md:sticky md:top-24 self-start h-fit">
          <h3 className="text-sm font-medium text-gray-500 mb-6">Menyu</h3>

          <nav className="space-y-4">
            {[
              { id: "mission", num: "01", label: "Maktab missiyasi" },
              { id: "qadriyat", num: "02", label: "Maktab qadriyatlari" },

              { id: "profile", num: "03", label: "Bitiruvchi profili" },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  scrollToSection(
                    item.id === "mission" ? missionRef : profileRef
                  )
                }
                className={`flex items-center gap-3 cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-blue-900 font-semibold"
                    : "text-gray-500 hover:text-blue-900"
                }`}
              >
                <span className="text-sm font-bold">{item.num}</span>

                <span className="uppercase text-sm">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}

        <main className="bg-white rounded-2xl shadow-sm p-8 flex-1">
          {/* MISSION SECTION */}

          <section id="mission" ref={missionRef}>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Maktab missiyasi
            </h1>

            <img
              src={MissionPhoto}
              alt="Maktab missiyasi"
              className="w-full h-[380px] object-cover rounded-xl mb-6"
            />

            <p className="text-gray-700 leading-relaxed">
              Ixtisoslashtirilgan maktabning asosiy vazifasi —
              axborot-kommunikatsiya texnologiyalarini keng jalb qilgan holda
              matematika, fizika, informatika va chet tili fanlarini chuqur
              o'zlashtirish, o'quvchilarni dasturlash asoslari, ma’lumotlar
              bazasi bilan ishlash va axborot xavfsizligini ta’minlash bo'yicha
              ko'nikmalarga ega qilishdan iborat.
            </p>

            <hr className="my-8 border-gray-200" />

            {/* Mission Details */}

            <div className="space-y-10">
              {missionDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10"
                >
                  <h3 className="text-lg font-semibold text-blue-900 md:w-1/3">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 md:w-2/3 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* GRADUATE PROFILE SECTION */}

          <section id="profile" ref={profileRef} className="mt-20">
            <hr className="my-12 border-gray-200" />

            <h2 className="text-2xl font-semibold text-gray-800 mb-10">
              Muhammad al-Xorazmiy maktabi bitiruvchisi profili
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {graduateProfile.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="mb-3">{item.icon}</div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
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

            box-shadow: 0 0 15px 5px rgba(30, 58, 138, 0.4);

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
