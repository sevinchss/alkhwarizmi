import React from "react";
import elbekjon from "./images/elbekjon.jpg";
export default function StudentShowcase() {
  return (
    <section className="bg-white py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className=" mb-12">
          <h2 className="text-4xl font-extrabold text-[#0047AB] mb-4">
            O'quvchilarning o'zini namoyon eta olishi
          </h2>
        </div>
        <div>
          <img src={elbekjon} alt="" className="w-full lg" />
        </div>
        {/* Image and Text Section */}
        <div className="mt-5 flex lg:flex-row items-center flex-col justify-around  gap-12">
          {/* Image */}
          <div className="relative text-center flex justify-center items-center w-full lg:h-96 md:h-full overflow-hidden rounded-lg shadow-md">
            <h1 className="text-center"> O'quvchilarning o'zini namoyon eta olishi</h1>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-base text-gray-700 mb-4">
              O'quvchilar kunning ikkinchi yarmida o'quv dasturidan tashqari faoliyatlari bilan mashg'ul bo'ladilar. Bu jarayon maktab o'quvchilariga asosiy ta'lim doirasidan tashqarida turli imkoniyatlarni taqdim etadi, ularning bilim va ko'nikmalarini rivojlantirishga yordam beradi bu esa Muhammad al-Xorazmiy nomli ixtisoslashtirilgan maktabi bitiruvchisi uchun zarurdir.
            </p>
            <p className="text-base text-gray-700 mb-4">
             Teatr, musiqa, tasviriy san'at mashg'ulotlari va kam uchraydigan tillar, moliyaviy savodxonlik va psixologiya asoslari bu va boshqa ko'plab mashg'ulot va to'garaklar Muhammad al-Xorazmiy nomli ixtisoslashtirilgan maktabidagi o'quv dasturidan tashqari rivojlanish dasturlariga kiradi
            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
}
