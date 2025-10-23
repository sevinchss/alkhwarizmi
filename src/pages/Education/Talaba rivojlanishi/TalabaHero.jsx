import React from "react";
import elbekjon from "./images/elbekjon.jpg";
export default function StudentShowcase() {
  return (
    <section className="bg-white py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className=" mb-12">
          <h2 className="text-4xl font-extrabold text-[#0047AB] mb-4">
            O'quvchi rivojlanishi
          </h2>
        </div>
        <div>
          <img src={elbekjon} alt="" className="w-full lg" />
        </div>
        {/* Image and Text Section */}
        <div className="mt-5 flex lg:flex-row items-center flex-col justify-around  gap-12">
          {/* Image */}
          <div className="relative text-center flex justify-center items-center w-full lg:h-96 md:h-full overflow-hidden rounded-lg shadow-md">
            <h1 className="text-center">O'quvchi rivojlanishi</h1>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-base text-gray-700 mb-4">
              Talabalarni rivojlantirish bo'limi tushuncha kiritishdan tashqari
              mashg'ulotlar uchun mas'ul bo'lib, talabalar uchun keng
              imkoniyatlarni taqdim etadi.
            </p>
            <p className="text-base text-gray-700 mb-4">
              Teatr, musiqa, tasviriy san’at mashg'ulotlari va kam uchrashadigan
              tillar, moliyaviy savodxonlik va psixologiya asoslari — bu va
              boshqa ko'plab mashg'ulotlar va klub faoliyatlari talabalarga
              ma'lum bilim va malakalarni rivojlantirishga yordam beradi.
              Muhammad al-Xorazmiy nomidagi IT maktabida ushbu yo’nalishlar
              talabalar uchun zarur bo’lgan qobiliyatlarni rivojlantirishga
              yordam beradi.
            </p>
            <p className="text-base text-gray-700">
              Shuningdek, o’quvchilarni rivojlantirishda san’at va tasviriy
              faoliyatlarga, musiqa va nutqni rivojlantirishga yo'naltirilgan
              ko'plab dasturlar taqdim etiladi. Bu kurslar talabalarimizni
              kelajakdagi faoliyatlarida muvaffaqiyatga erishish uchun zarur
              bilimlar bilan ta’minlaydi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
