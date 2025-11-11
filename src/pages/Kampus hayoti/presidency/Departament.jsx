import React from "react";
import {
  GraduationCap,
  Dumbbell,
  Users,
  Globe,
  Laptop,
  Film,
  Leaf,
  Music,
  Heart,
  BarChart,
} from "lucide-react";

const departments = [
  {
    title: "Ta’lim vazirligi",
    desc: "O‘quvchilar bilimini oshirish uchun viktorinalar va olimpiadalar tashkil etadi. Ustozlar bilan hamkorlikda o‘quvchilarning darslarga qiziqishini kuchaytiradi.",
    icon: <GraduationCap className="w-10 h-10" />,
  },
  {
    title: "Sport vazirligi",
    desc: "Maktabda sport musobaqalari, sog‘lomlashtirish mashg‘ulotlari va sport bayramlarini o‘tkazadi. Jismoniy tarbiya va sog‘lom turmush tarzini targ‘ib qiladi.",
    icon: <Dumbbell className="w-10 h-10" />,
  },
  {
    title: "Ichki ishlar vazirligi",
    desc: "Maktab ichidagi tartib va intizomni nazorat qiladi, sinf sardorlari bilan ishlaydi. O‘quvchilar haqidagi ma’lumotlarni tartibga soladi va ichki muammolarni hal etishga yordam beradi.",
    icon: <Users className="w-10 h-10" />,
  },
  {
    title: "Tashqi ishlar vazirligi",
    desc: "Boshqa maktablar, universitetlar va tashkilotlar bilan hamkorlikda qo‘shma loyihalar va almashinuv dasturlarini yo‘lga qo‘yadi.",
    icon: <Globe className="w-10 h-10" />,
  },
  {
    title: "Raqamli texnologiyalar vazirligi",
    desc: "Kompyuter savodxonligi, dasturlash, IT va texnologiya bo‘yicha loyihalar tashkil etadi. Maktabda raqamli yangiliklarni joriy etishga yordam beradi.",
    icon: <Laptop className="w-10 h-10" />,
  },
  {
    title: "Mass-media agentligi",
    desc: "Maktabning ijtimoiy tarmoqlardagi faoliyatini yuritadi, tadbirlarni suratga oladi va yangiliklarni yoritadi.",
    icon: <Film className="w-10 h-10" />,
  },
  {
    title: "Ekologiya vazirligi",
    desc: "Atrof-muhitni asrash, tozalikka rioya qilish, daraxt ekish va chiqindilarni to‘plash kabi ekologik aksiyalar o‘tkazadi. “Yashil maktab” g‘oyasini targ‘ib qiladi.",
    icon: <Leaf className="w-10 h-10" />,
  },
  {
    title: "Ma’daniyat vazirligi",
    desc: "San’at, teatr, musiqa va raqs yo‘nalishida tadbirlar o‘tkazib, maktab madaniy hayotini yanada boyitadi.",
    icon: <Music className="w-10 h-10" />,
  },
  {
    title: "Qizlar qo‘mitasi",
    desc: "Qizlar uchun turli uchrashuvlar, ijodiy tanlovlar va mahorat darslarini tashkil etadi. Ularning faolligini oshiradi va ijobiy muhit yaratadi.",
    icon: <Heart className="w-10 h-10" />,
  },
  {
    title: "Statistika va monitoring agentligi",
    desc: "Maktabdagi sinflar, olimpiadalar va  jamoalar faoliyatini kuzatadi va statistik koʻrsatkichlar orqali faoliyatni tahlil qiladi.",
    icon: <BarChart className="w-10 h-10" />,
  },
];

const Departament = () => {
  return (
    <div className=" font-poppins p-10">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
        Vazirliklar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between group overflow-hidden transition-transform duration-300 hover:scale-105 min-h-[265px]"
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
