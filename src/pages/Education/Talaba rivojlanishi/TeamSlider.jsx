import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import sanjar from "./images/sanjar.jpg";
import sabohat from "./images/sabohat.jpg";
import mirjambil from "./images/mirjambil.jpg";
import biolog from "./images/bilog.jpg";
import daler from "./images/daler.jpg";
import zuhriddin from "./images/nodir.jpg";
import ulugbek from "./images/ulugbek.jpg";
import pe from "./images/aziz.jpg";

const teamMembers = [
  {
    name: "Sanjar Utepov",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi o'quv ishlari bo'yicha direktor o'rinbosari",
    image: sanjar,
  },
  {
    name: "U.K. Odiljonov",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari.",
    image: ulugbek,
  },
  {
    name: "A. Ochilov",
    role: 'Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi matematika uslubiy birlashma raisi',
    image: sabohat,
  },
  {
    name: "S.Rahimova",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi ona tili va adabiyot uslubiy birlashma raisi. ",
    image: sabohat,
  },
  {
    name: "M.Mirg'iyosov",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi informatika uslubiy birlashma raisi.",
    image: mirjambil,
  },
  {
    name: "A.Jamilov",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi jismoniy tarbiya fani o'qituvchisi.",
    image: pe,
  }, 
  {
    name: "A.Hoshimov",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi biologiya fani o'qituvchisi.",
    image: biolog,
  },
   {
    name: "Z.Imomaliyev ",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi ingliz tili uslubiy birlashma raisi. Maktab IB koordinator.",
    image: zuhriddin,
  },
   {
    name: "D. Bafoyev",
    role: "Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabi fizika uslubiy birlashma raisi. ",
    image: daler,
  },
];

export default function TeamSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="container mx-auto py-20 relative font-poppins">
      <h2 className="text-3xl md:text-4xl text-center mb-12 font-semibold text-gray-900">
        O'quvchilarni rivojlantirish dasturi jamoasi
      </h2>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
          className="pb-20"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-72 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔘 Bottom Center Navigation */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-5 z-20">
          <button
            ref={prevRef}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-[#004AAD] shadow-md transition-all"
          >
            ←
          </button>
          <span className="text-[#004AAD] font-semibold text-lg">
            {activeIndex}/{teamMembers.length}
          </span>
          <button
            ref={nextRef}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-[#004AAD] shadow-md transition-all"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
