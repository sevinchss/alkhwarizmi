import React, { useState, useEffect, useRef } from "react";

const EducationalModel = () => {
  const [activeSection, setActiveSection] = useState("");
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const socialScienceRef = useRef(null);
  const naturalScienceRef = useRef(null);
  const informaticsRef = useRef(null);

  // Scrollni silliq qilish
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll kuzatish va aktiv bo‘limni aniqlash
  const handleScroll = () => {
    const sections = [
      { id: "mission", ref: missionRef },
      { id: "history", ref: historyRef },
      { id: "social-science", ref: socialScienceRef },
      { id: "natural-science", ref: naturalScienceRef },
      { id: "informatics", ref: informaticsRef },
    ];

    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let currentSection = "";

    for (const { id, ref } of sections) {
      const element = ref.current;
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          currentSection = id;
          break;
        }
      }
    }

    if (currentSection && currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="flex flex-col px-10 py-10 font-poppins bg-gray-50 min-h-screen">
      {/* TITLE */}
      <div className="mb-10 mt-5">
        <h1 className="text-4xl md:text-5xl font-bold  tracking-wide text-center md:text-left">
          Ta’lim modeli
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* ASIDE MENU */}
        <aside className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-1/4 md:sticky md:top-24 self-start h-fit">
          <h3 className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
            Menyu
          </h3>
          <nav className="space-y-3">
            {[
              { id: "mission", label: "Ta'lim yo'nalishi", num: "01" },
              { id: "history", label: "Matematika+", num: "02" },
              { id: "informatics", label: "Informatika", num: "03" },
              { id: "model", label: "Ta'lim modeli", num: "04" },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  const sectionRef = {
                    mission: missionRef,
                    history: historyRef,
                    "social-science": socialScienceRef,
                    "natural-science": naturalScienceRef,
                    informatics: informaticsRef,
                  }[item.id];
                  scrollToSection(sectionRef);
                }}
                className={`flex items-center gap-3 cursor-pointer py-2 px-2 rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#00265b] font-semibold bg-blue-50 border-l-4 border-[#00265b] shadow-sm"
                    : "text-gray-600 hover:text-[#00265b]"
                }`}
              >
                <span className="text-sm font-bold w-8">{item.num}</span>
                <span className="uppercase text-sm">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1  py-10 px-6 rounded-2xl shadow-inner">
          {/* Ta’lim yo‘nalishlari */}
          <section
            id="mission"
            ref={missionRef}
            className="mb-20 bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-semibold lg:text-start text-center text-[#00265b]">
              Ta'lim yo'nalishlari
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab — bu
              matematika, informatika fanlari chuqurlashtirib o'qitiladigan ta'lim muassasidir.
            </p>
            <p className="mt-6 text-lg text-gray-700">
              Ta’lim jarayoni xalqaro standartlarga asoslangan bo‘lib,
              o‘quvchilar robototexnika tanlovlari, dasturlash, ilmiy loyihalar va
              olimpiadalarda faol ishtirok etadilar. Bu yondashuv har bir
              o‘quvchini bilimli, yangilik yaratishga
              qodir shaxs sifatida shakllantiradi.
            </p>
          </section>

          {/* Matematika+ */}
          <section
            id="history"
            ref={historyRef}
            className="mb-20 bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-3xl font-semibold lg:text-start text-center text-[#00265b]">
              Matematika+
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Matematika fani o‘quvchilarga 5-sinfdan boshlab o‘qitiladi.
              7-sinfdan boshlab esa fan chuqurlashtirilgan shaklda olib
              borilib, asosiy e’tibor mantiqiy fikrlash va tahliliy tafakkurni
              shakllantirishga qaratiladi.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
              <li>Matematik modellar tuzish va tahlil qilish;</li>
              <li>Real hayotdagi masalalarni matematik yechish;</li>
              <li>Olimpiadalarga tayyorgarlik mashg‘ulotlari;</li>
              <li>Algoritmik fikrlash va dasturlash integratsiyasi;</li>
              <li>Ilmiy loyihalarda ishtirok etish.</li>
            </ul>
          </section>

        

          {/* Informatika */}
          <section
            id="informatics"
            ref={informaticsRef}
            className="mb-20 bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <h2 className="text-3xl font-semibold lg:text-start text-center text-[#00265b]">
              Informatika
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Muhammad al-Xorazmiy maktabida informatika fani chuqurlashtirilgan
              tarzda o'qitiladi. O'quvchilar 9-sinfdan boshlab o'zlari qiziqqan
              yo'nalishni tanlaydilar.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
              <li>Dasturlash tillari: Python, C++, JavaScript;</li>
              <li>Veb dasturlash va foydalanuvchi interfeyslari yaratish;</li>
              <li>Sun’iy intellekt va mashinaviy o‘qitish asoslari;</li>
              <li>Kiberxavfsizlik va axborot tizimlarini himoya qilish;</li>
            </ul>
            <p className="mt-4 text-lg text-gray-700">
              Bu yo‘nalish o‘quvchilarda algoritmik fikrlash, raqamli tafakkur
              va ijodkorlikni rivojlantiradi.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationalModel;
