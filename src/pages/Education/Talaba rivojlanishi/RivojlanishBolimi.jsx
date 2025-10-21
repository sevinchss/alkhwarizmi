import React from "react";
import sarik from "./images/sarik.jpg"
import icon1 from './images/icons1.svg'
import icon2 from './images/icons2.svg'
import icon3 from './images/icons3.svg'
import icon4 from './images/icons4.svg'
export const RivojlanishBolimi = () => {
  return (
    <>
      <section className=" container  font-poppins flex  lg:flex-col flex-col justify-around">
        <div className="flex lg:flex-row flex-col gap-5">
          <h1 className="text-lg font-bold lg:w-[600px] w-full">
            Muhammad Al-Xorazmiy nomli ixtisoslashtirilgan maktabining
            o'quvchilar rivojlanishi bo'limi
          </h1>
          <p>
            Bu - dastur doirasida tanlab olish mumkin bo'lgan 20dan ortiq
            to'garaklar, klublar, bo'limlar kurslaridan iborat qo'shimcha
            mashg'ulotlardir.
          </p>
        </div>
        
        <div className="flex  mt-2 lg:flex-row items-center flex-col justify-around">
            <img src={sarik} alt="" width={600} className="lg:h-[400px] rounded-lg"/>
            <div className="py-12 px-6 bg-white">
      

      {/* Icon Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Icon 1 */}
        <div className="flex items-center justify-center flex-col bg-[#f0f4f8] p-6 rounded-lg shadow-lg">
          <img className="w-16 h-16 mb-4" src={icon1} alt="Icon 1" />
          <h3 className="text-lg font-semibold text-[#0047AB]">Ijodkorlik va ixtiro</h3>
        </div>

        {/* Icon 2 */}
        <div className="flex items-center justify-center flex-col bg-[#f0f4f8] p-6 rounded-lg shadow-lg">
          <img className="w-16 h-16 mb-4" src={icon2} alt="Icon 2" />
          <h3 className="text-lg font-semibold text-[#0047AB]">Sport va salomatlik</h3>
        </div>

        {/* Icon 3 */}
        <div className="flex items-center justify-center flex-col bg-[#f0f4f8] p-6 rounded-lg shadow-lg">
          <img className="w-16 h-16 mb-4" src={icon3} alt="Icon 3" />
          <h3 className="text-lg font-semibold text-[#0047AB]">Ilm va bilim</h3>
        </div>

        {/* Icon 4 */}
        <div className="flex items-center justify-center flex-col text-center bg-[#f0f4f8] p-6 rounded-lg shadow-lg">
          <img className="w-16 h-16 mb-4" src={icon4} alt="Icon 4" />
          <h3 className="text-lg font-semibold text-[#0047AB]">Fuqarolik va ijtimoiy mas'uliyat</h3>
        </div>

        {/* Icon 5 */}
        <div className="flex items-center justify-center flex-col bg-[#f0f4f8] p-6 rounded-lg shadow-lg">
          <img className="w-16 h-16 mb-4" src={icon1} alt="Icon 5" />
          <h3 className="text-lg font-semibold text-[#0047AB]">Etakchilik va o'zaro ta'sir</h3>
        </div>
      </div>
    </div>
        </div>


         <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold text-[#0047AB] mb-6">
        Qo'shimcha darslar jadvali
      </h2>

      {/* Section Text */}
      <div className="space-y-4  border-l-4 border-[#0047AB] pl-4">
        <p className="text-lg ">
         Qo'shimcha mashg'ulotlar asosiy darslardan so'ng, kunning ikkinchi yarmida boshlanadi (soat 15:00 dan).
        </p>
        <p className="text-lg ">
         Kurslarni tanlash va ularning soni — har bir o'quvchining shaxsiy tanlovi; jadvalni uyg'un va xilma-xil qilishda unga murabbiy va Rivojlantirish xodimlari yordam beradi.
        </p>
        <p className="text-lg ">
        Kunning ikkinchi yarmidagi qo'shimcha mashg'ulotlarda ishtirok etish o'quvchilarga asosiy ta'lim vazifalaridan dam olish, qulay muhitda o'zlari uchun yangi va noodatiy narsalarni sinab ko'rish, boshqa sinf va yo'nalishlardan bo'lgan o'quvchilar bilan tanishish, turli o'qituvchilar bilan muloqot qilish imkonini beradi.
        </p>
      </div>

      {/* Info Section with Highlighted Box */}
      <div className="mt-8 p-6 bg-[#E5F2FF] rounded-md shadow-lg">
        <div className="flex items-center gap-4">
          <div className="bg-[#0047AB] p-2 rounded-full text-white">
            <i className="fas fa-info-circle"></i>
          </div>
            <p className="text-lg  mt-2">
        Kunning ikkinchi yarmidagi qo'shimcha mashg'ulotlarda ishtirok etish o'quvchilarga asosiy ta'lim vazifalaridan dam olish, qulay muhitda o'zlari uchun yangi va noodatiy narsalarni sinab ko'rish, boshqa sinf va yo'nalishlardan bo'lgan o'quvchilar bilan tanishish, turli o'qituvchilar bilan muloqot qilish imkonini beradi.
        </p>
        </div>
      
      </div>
    </div>
      </section>
    </>
  );
};
