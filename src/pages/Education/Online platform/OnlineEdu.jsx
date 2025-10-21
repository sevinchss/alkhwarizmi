import React from "react";
import robo from '../images/kurs.jpg'
import olimp from '../images/olimp.jpg'
import test from '../images/test.jpg'
import prep from '../images/prep.jpg'
const courses = [
  {
    title: "Kurslar",
    img: robo,
    text: "Muhammad al-Xorazmiy maktabi o‘qituvchilari tomonidan ishlab chiqilgan kurslar va klublar bilan bilimlaringizni kengaytiring.",
  },
  {
    title: "Yozgi Olimpiya o‘yinlari",
    img: olimp,
    text: "Olimpiadalarimizda qatnashing va g‘olib bo‘ling. Yangi tajriba orttiring va o‘z iste’dodlaringizni kashf eting.",
  },
  {
    title: "Testlar",
    img: test,
    text: "Maktab fanlari bo‘yicha bilimingizni sinab ko‘ring.",
  },
  {
    title: "Olimpiadaga tayyorgarlik",
    img: prep,
    text: "Maktab o‘quvchilarining Respublika olimpiadasida va yozgi olimpiadalarda ishtirok etish uchun mahoratingizni oshiring.",
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Muhammad al-Xorazmiy .Online platformasi
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-lg group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-white text-sm md:text-base font-light leading-relaxed">
                  {course.text}
                </p>
              </div>

              <h3 className="absolute top-4 left-4 text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                {course.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
