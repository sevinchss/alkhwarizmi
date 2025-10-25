import React from "react";
import october from "./images/october.jpg"
export default function OnlineTeam() {
  return (
    <section className="font-poppins     bg-gray-50 py-12 px-6  flex flex-col md:flex-row items-center justify-around">
      <div className="w-full md:w-[40%] rounded-2xl overflow-hidden shadow-md mb-8 md:mb-0">
        <img
          src={october}
          alt="Letovo jamoasi"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 md:pl-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Muhammad Al-Xorazmiy jamoasi
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
         Muhammad al-Xorazmiy jamoasi o'z sohasining yetuk mutaxassislari, shuningdek, O'zbekiston va xalqaro miqyosda tan olingan tajribali pedagoglardir. Jamoamiz a'zolari olimpiadalar uchun turli dasturlar va murakkab topshiriqlar ishlab chiqqan.
        </p>
        <p className="text-gray-700 leading-relaxed">
         Muhammad al-Xorazmiy jamoasidagi har bir o'qituvchi o'z faniga chuqur mehr bilan yondashadi, har bir o'quvchining qiziqishi va intilishlarini qo'llab- quvvatlaydi.

O'quvchilarimizning muvaffaqiyatlari bu jamoamizning mahoratli pedagoglardan tashkil topganligiga yorqin dalildir. Yagona davlat imtihonlaridagi yuqori natijalar, tuman, shahar, respublika va xalqaro darajadagi olimpiada va tanlovlardagi yutuqlar, xorijdagi nufuzli universitetlarga o'qishga kirish- bularning barchasi ustozlarimiz mehnatining samarasidir.
        </p>
      </div>
    </section>
  );
}
