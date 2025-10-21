import React from "react";
import DirectorMain from "./images/hilola.jpg"; // Umarova Hilola Uktamovna
import Director1 from "./images/fazliddin.png"; // Ismailov Fazliddin
import Director2 from "./images/sevara.png"; // Shakirova Sevara Baxodirovna
import Director3 from "./images/ulugbek.jpg"; // Odiljonov Ulug‘bek Komiljonovich
import Director4 from "./images/sanjar.png"; // Utepov Sanjar Shomuratovich

const team = [
  {
    name: "Umarova Hilola Uktamovna",
    title:
      "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab direktori va asoschisi.",
    photo: DirectorMain,
    main: true,
  },
  {
    name: "Shakirova Sevara Baxodirovna",
    title:
      "2024-yilda u Muhammad al-Xorazmiy maktabiga rahbarlik qilib, uning strategik maqsad va ustuvor yo‘nalishlarini belgiladi.",
    photo: Director2,
    side: "left",
  },
  {
    name: "Odiljonov Ulug‘bek Komiljonovich",
    title: "Ma’naviyat va ma’rifat ishlari bo‘yicha direktor o‘rinbosari.",
    photo: Director3,
    side: "right",
  },
  {
    name: "Ismailov Fazliddin",
    title:
      "Ixtisoslik fanlari bo’yicha direktor o‘rinbosari. Ko‘plab loyihalar muallifi. Eco Union asoschisi.",
    photo: Director1,
    side: "left",
  },
  {
    name: "Utepov Sanjar Shomuratovich",
    title: "O‘quv ishlari bo‘yicha direktor o‘rinbosari.",
    photo: Director4,
    side: "right",
  },
];

const Team = () => {
  const mainMember = team.find((m) => m.main);
  const leftMembers = team.filter((m) => m.side === "left");
  const rightMembers = team.filter((m) => m.side === "right");

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 font-poppins">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Rahbariyat
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto items-center">
        {/* Left side */}
        <div className="flex flex-col gap-10">
          {leftMembers.map((member, index) => (
            <SideCard key={index} member={member} side="left" />
          ))}
        </div>

        {/* Main director */}
        <MainCard member={mainMember} />

        {/* Right side */}
        <div className="flex flex-col gap-10">
          {rightMembers.map((member, index) => (
            <SideCard key={index} member={member} side="right" />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Components ---

const MainCard = ({ member }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 text-center h-[600px] flex flex-col">
    <div className="w-full h-[350px] overflow-hidden">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-6 flex flex-col justify-start">
      <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
      <div className="w-20 h-[3px] bg-blue-500 mt-2 mb-3 mx-auto"></div>
      <p className="text-gray-600 text-base leading-relaxed">{member.title}</p>
    </div>
  </div>
);

const SideCard = ({ member, side }) => (
  <div
    className={`bg-white rounded-2xl shadow-md flex items-center overflow-hidden hover:shadow-lg transition-all duration-300 h-[250px] ${
      side === "right" ? "flex-row-reverse text-right" : "text-left"
    }`}
  >
    {/* Image */}
    <div className="w-1/2 h-full overflow-hidden">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Info */}
    <div className="w-1/2 p-5">
      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
      <div
        className={`w-16 h-[3px] bg-blue-500 mt-2 mb-3 ${
          side === "right" ? "ml-auto" : ""
        }`}
      ></div>
      <p className="text-gray-600 text-sm leading-relaxed">{member.title}</p>
    </div>
  </div>
);

export default Team;
