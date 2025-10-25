import React from "react";
import {
  GraduationCap,
  Dumbbell,
  Users,
  Globe,
  Laptop,
  Film,
} from "lucide-react";

const departments = [
  {
    title: "Ta’lim va madaniyat departamenti",
    desc: "Fan olimpiadalari, kitobxonlik tashabbuslari va madaniy tadbirlarni tashkil etish orqali o'quvchilarning ijodiy fikrlashini rivojlantiradi.",
    icon: <GraduationCap className="w-10 h-10" />,
  },
  {
    title: "Sport departamenti",
    desc: "Maktab ichidagi sport va kibersport musobaqalarini o'tkazadi, sog'lom turmush tarzini targ'ib qiladi.",
    icon: <Dumbbell className="w-10 h-10" />,
  },
  {
    title: "O'quvchilar ishlari departamenti",
    desc: "O'quvchilar yetakchiligi va tashabbuslarini qo'llab-quvvatlaydi, ularning takliflarini yig'ib, muhitni yaxshilashga hissa qo'shadi.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: "Tashqi ishlar departamenti",
    desc: "Boshqa maktablar, universitetlar va tashkilotlar bilan hamkorlikda qo'shma loyihalar va almashinuv dasturlarini yo'lga qo'yadi.",
    icon: <Globe className="w-10 h-10" />,
  },
  {
    title: "IT departamenti",
    desc: "Maktabdagi texnik tizimlar, veb-saytlar va raqamli loyihalarni boshqaradi, IT infratuzilmani rivojlantiradi.",
    icon: <Laptop className="w-10 h-10" />,
  },
  {
    title: "Media departamenti",
    desc: "Maktabning ijtimoiy tarmoqlardagi faoliyatini yuritadi, tadbirlarni suratga oladi va yangiliklarni yoritadi.",
    icon: <Film className="w-10 h-10" />,
  },
];

const Departament = () => {
  return (
    <div className="bg-gray-100 font-poppins p-10">
      <h2 className="text-3xl font-bold mb-10  text-center">
        Vazirliklar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between group overflow-hidden transition-transform duration-300 hover:scale-105 min-h-[240px]"
          >
            <div className="absolute w-24 h-24 flex items-center justify-center bg-gradient-to-tr from-blue-800 to-blue-400 rounded-full text-white text-3xl bottom-[10px] right-[10px] transition-transform duration-500 ease-in-out group-hover:scale-[3] group-hover:opacity-10 overflow-hidden">
              {dept.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3 relative z-10">
                {dept.title}
              </h2>
              <p className="text-gray-600 relative z-10">{dept.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departament;
