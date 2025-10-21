import React, { useState } from "react";
import logoA from "./images/mainlogo.png";
import presidency from "./images/presidency.png";
import volunteers from "./images/volunteering.jpg";
import eco from "./images/eco-union.png";
import aksa from "./images/aksa.png";
import ted from "./images/ted.png";

const communities = [
  {
    id: 1,
    name: "It-School Presidency",
    logo: presidency,
    founder: "Abdumanabov Sardorbek",
    leader: "Abdumanabov Sardorbek",
    info: `Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabdagi IT-School Prezidenti — maktabning eng oliy tashkiloti hisoblanadi. To‘rtinchi Prezident (joriy prezident) Sardorbek Abdumanabov tomonidan amalga oshirilgan islohotlardan so‘ng, Prezidentlik “Tartib bilan taraqqiyot” shiori ostida faoliyat yurita boshladi. U o‘quvchilar tomonidan saylanadigan boshqaruv organiga aylanishi bilan maktabning demokratik yuragi sifatida tanildi.

Jamoa Prezident, Vitse-prezident va oltita asosiy bo‘limdan iborat: Ta’lim va Madaniyat, Sport, Talabalar ishlari, Tashqi aloqalar, IT va Media. Prezidentlik jamoasi o‘quvchilarning manfaatlarini himoya qiladi, ularning fikrlarini ma’muriyatga yetkazadi va maktabdagi ichki muhitni yaxshilash ustida ishlaydi.`,
  },
  {
    id: 2,
    name: "Al-Khwarizmi Volunteers",
    logo: volunteers,
    founder: "Abdumanabov Sardorbek",
    leader: "Sayfutdinova Sevinch",
    info: `Al-Xorazmiy Ko‘ngillilari — Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabning 200 dan ortiq fidoyi ko‘ngillilar va minglab izdoshlaridan iborat jamoasi tomonidan boshqariladigan tashabbusdir.
Faoliyati davomida jamoa turli musobaqalarda (Xalqaro Matematika va Informatika Olimpiadasi), ekologik tadbirlarda (“Green Games” loyihasi) hamda festivallarda (Jahon Yoshlar Festivali) ishtirok etgan.`,
  },
  {
    id: 3,
    name: "Eco-Union",
    logo: eco,
    founder: "Dilmurod Yuldashev",
    leader: "Umidova Muslima",
    info: `2021-yilda tashkil etilgan, o‘quvchilar tomonidan boshqariladigan tashkilot bo‘lib, Markaziy Osiyoda birinchi marta Atrof-muhit ta’limi jamg‘armasi (FEE) tomonidan beriladigan “Yashil bayroq” mukofotini qo‘lga kiritgan.

Tashkilotning asosiy maqsadi — “maktabimizni ekologik jihatdan toza hududga ko‘chirish va kelajak avlodlar uchun barqaror hayotni ta’minlash.”

Tashkil etilganidan beri Eco-Union bir qator yirik tadbirlarni o‘tkazgan, jumladan: MCOP24 (Model Conference of Parties), Green Games va ekologik trening mashg‘ulotlari. Tashkilot, shuningdek, televidenie intervyulari va ijtimoiy tarmoqlar orqali ekologik muammolar haqida xabardorlikni oshirib, ommaviy e’tiborni qozongan.`,
  },
  {
    id: 4,
    name: "AKSA",
    logo: aksa,
    founder: "Abdugafurov Muhammad",
    leader: "Rustamov Shaxzod",
    info: `**Al-Xorazmiy Sport Assotsiatsiyasi** — bu o‘quvchilar tomonidan boshqariladigan tashkilot bo‘lib, futbol, mini-futbol, voleybol va kibersport kabi turli sport yo‘nalishlarida musobaqalarni tashkil etadi.

Yaqinda tashkil etilganiga qaramay, assotsiatsiya **Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab**dagi eng mashhur va tez rivojlanayotgan o‘quvchi tashkilotlaridan biriga aylandi. U hozirgacha **har birida 50–150 nafar ishtirokchi qatnashgan olti ta musobaqani** muvaffaqiyatli o‘tkazgan.`,
  },
  {
    id: 5,
    name: "The Zakovat Club",
    logo: logoA,
    founder: "Doniyor Kamoliddinov",
    leader: "Komilov Anasxon",
    info: `An intellectual community that engages over 200 students monthly
through fun and challenging intellectual games. Similar to Quiz Bowl, this club organizes league tournaments where students compete in various subjects, testing their knowledge and quick thinking. The Zakovat Club helps students develop critical thinking, problem-solving skills, and knowledge beyond the standard school curriculum.`,
  },
  {
    id: 6,
    name: "TedxAl-Khwarizmi School",
    logo: ted,
    founder: "Ibrokhim Pulatov",
    leader: "Ibrokhim Pulatov",
    info: `TEDxAl-Khwarizmi School is an official TEDx-licensed event hosted by the Specialized Muhammad al-Khwarizmi School. It provides a platform for students to share inspiring ideas and stories through TED-style talks, promoting creativity, innovation, and intellectual curiosity. In 2025, the event featured 13 speakers who presented their ideas to an audience of over 250 guests. Organized by students and staff, TEDxAl-Khwarizmi School embodies the spirit of “ideas worth spreading,” encouraging young minds to explore topics in technology, science, society, and personal growth while developing their communication and leadership skills.`,
  },
];

export default function Communities() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  return (
    <div className="bg-white py-20 px-6 font-poppins relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Maktab o‘quvchilarning faol jamoalari
        </h2>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {communities.map((community) => (
            <div
              key={community.id}
              onMouseEnter={() => setHoveredId(community.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedCommunity(community)}
              className={`flex flex-col items-center transition-all duration-500 ease-out cursor-pointer transform ${
                hoveredId && hoveredId !== community.id
                  ? "blur-[2px] opacity-70"
                  : "opacity-100"
              } ${hoveredId === community.id ? "scale-105" : "scale-100"}`}
            >
              <img
                src={community.logo}
                alt={community.name}
                className={`w-40 h-40 mb-6 object-contain transition-transform duration-500 ${
                  hoveredId === community.id ? "scale-110" : "scale-100"
                } ${community.id === 2 ? "rounded-2xl bg-white p-1" : ""}`}
              />
              <h3
                className={`text-2xl font-semibold text-gray-800 transition-transform duration-500 ${
                  hoveredId === community.id ? "scale-110" : "scale-100"
                }`}
              >
                {community.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {selectedCommunity && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 flex flex-col md:flex-row items-center relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCommunity(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            {/* Left side — Logo */}
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img
                src={selectedCommunity.logo}
                alt={selectedCommunity.name}
                className={`w-48 h-48 object-contain ${
                  selectedCommunity.id === 2 ? "rounded-2xl bg-white p-2" : ""
                }`}
              />
            </div>

            {/* Right side — Info */}
            <div className="md:w-2/3 md:pl-8 text-center md:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCommunity.name}
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>Founder:</strong> {selectedCommunity.founder}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Leader:</strong> {selectedCommunity.leader}
              </p>
              <p className="text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                {selectedCommunity.info}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
