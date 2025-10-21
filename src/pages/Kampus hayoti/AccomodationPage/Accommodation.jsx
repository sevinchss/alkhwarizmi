import React, { useState, useEffect, useRef } from 'react';
import { Home, Dumbbell, BookOpen, Clock, X } from 'lucide-react';

import image1 from './Accommodation/residential_rooms.jpg';
import image2 from './Accommodation/dormitory_interior.jpg';
import image2b from './Accommodation/dormitory_interior2.jpg';
import image3 from './Accommodation/sports_facilities.jpg';
import image4 from './Accommodation/study_zones.jpg';
import image5 from './Accommodation/gallery1.jpg';
import image6 from './Accommodation/gallery2.jpg';
import image7 from './Accommodation/gallery3.jpg';
import image8 from './Accommodation/gallery4.jpg';

/* New images you requested (make sure these files exist in the same folder) */
import zal from './Accommodation/zal.jpg';
import faye from './Accommodation/faye.jpg';
import informatics from './Accommodation/informatika.jpg';
import uztelecom from './Accommodation/uztelecom.jpg';
import kiber from './Accommodation/kiber.jpg';
import robo from './Accommodation/robo.jpg';
import hamkor from './Accommodation/uztelecom.jpg'; // optional placeholder for Hamkorlarimiz image

const AccommodationPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFacility, setSelectedFacility] = useState(null);
  const timerRef = useRef(null);

  const galleryImages = [image5, image6, image7, image8];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentImageIndex((p) => (p + 1) % galleryImages.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [galleryImages.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    startTimer();
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    startTimer();
  };

  // Facilities cards data (six cards as you asked)
  const facilities = [
    {
      id: 'sport',
      title: 'Sport zali',
      subtitle: 'Sog‘lom tana — sog‘lom aql',
      text: `Zamonaviy inson hayotini sportsiz tasavvur qilib bo‘lmaydi. Qolaversa, o‘sib kelayotgan yosh avlodni jismonan va ruhan sog‘lom tarzda voyaga yetkazish al-Xorazmiy nomidagi ixtisoslashtirilgan maktab pedagogik jamoasining eng asosiy maqsadidir. Maktab ixtiyorida sport mashg‘ulotlarini talab darajasida tashkil etish uchun stadion va sport zali mavjud. Stadionda futbol, basketbol, volleybol va katta tennis mashg‘ulotlarini o‘tkazish uchun barcha sharoitlar yaratilgan. Sport zalida esa minifutbol, stol tennisi musobaqalarini ham tashkil qilish mumkin. Jismoniy tarbiya darslari ob-havo sharoitidan kelib chiqib tashkil qilinadi. Shuningdek, maktabda barcha sport mashg‘ulotlarini tashkil qilish uchun sport anjomlari yetarli. Darsdan keyin sport turlari bo‘yicha sinflararo musobaqalar tashkil qilinadi. Sport musobaqalari maktab hayotining jonli va qizg‘in bo‘lishiga xizmat qiladi.`,
      image: zal,
    },
    {
      id: 'study',
      title: "O'qish maydonchalari",
      subtitle: 'Tinchlik va bilim uchun jihozlangan makon',
      text: `Muhammad al-Xorazmiy maktabining o‘quv fayesi o‘quvchilar uchun qulay dam olish va mustaqil tayyorgarlik joyi hisoblanadi. Bu yerda yumshoq o‘tirg‘ichlar, kitob javonlari va ochiq o‘qish zonalari mavjud bo‘lib, o‘quvchilar darslar orasida tinch muhitda kitob o‘qish yoki loyihalar ustida ishlashlari mumkin. O‘quv maydonchalari esa interaktiv ta’lim jarayoniga moslashtirilgan — har bir joyda zamonaviy texnika, keng monitorlar va guruhda ishlash uchun mos stollar joylashtirilgan. Bu muhit o‘quvchilarning bilimga qiziqishini kuchaytiradi va ularni ijodiy fikrlashga undaydi.`,
      image: faye,
    },
    {
      id: 'informatics',
      title: 'Informatika xonalari',
      subtitle: 'Texnologiyalar bilan shug‘ullanish uchun xonalar',
      text: `Informatika xonasi: Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga ixtisoslashtirilgan maktab asosan IT sohasiga yo‘naltirilganligi sababli zamonaviy standartlar asosida jihozlangan. Bu xonalar o‘quvchilarning nazariy bilimlarini amalda mustahkamlash uchun maxsus ishlab chiqilgan uskunalar bilan boyitilgan. Xonalar kompyuterlar, interaktiv panel va o‘quv dasturlari bilan ta'minlangan.

Dasturlash xonalari: Yosh dasturchilarning sevimli sinf xonasi bo‘lib, unda IT sohasiga oid zaruriy texnika va jihozlar mavjud. Ushbu xonalarda o‘quvchilar virtual haqiqat, dasturlash, web va mobil ilovalar asoslarini o‘rganishadi. Bu xonalar loyihalar ustida ishlash, hackathon va amaliy mashg‘ulotlar uchun mo‘ljallangan.`,
      image: informatics,
    },
    {
      id: 'partners',
      title: "Hamkorlarimiz xonalari",
      subtitle: 'Tashqi hamkorlik asosidagi maxsus laboratoriyalar',
      text: `ZTE XONASI:
Muhammad al-Xorazmiy maktabida ZTE kabi kompaniyalar bilan hamkorlikda maxsus xonalar tashkil etilgan. Bu xonalar kompaniya dizayni va zamonaviy jihozlar bilan ta'minlangan bo‘lib, chuqurlashtirilgan mashg‘ulotlar va fakultativ dasturlar olib boriladi. O‘quvchilar loyihalar ustida ishlash va amaliy mashg‘ulotlardan keng foydalanadilar.

UCELL XONASI:
Shuningdek, Ucell kabi hamkorlar tomonidan tashkil etilgan xonalar mavjud. Bu joylar mobil va telekommunikatsiya texnologiyalari, IoT va sanoat tarmoqlari bo‘yicha amaliy mashg‘ulotlar uchun mo‘ljallangan. O‘quvchilar loyiha ishlarini amalga oshirishda hamkorlar ko‘magidan foydalanadilar.`,
      image: uztelecom,
    },
    {
      id: 'robotics',
      title: 'Robototexnika xonalari',
      subtitle: 'Yaratish va tajriba uchun maydon',
      text: `ROBOTOTEXNIKA XONASI:
Robototexnika xonalari — bu texnologiya olami. Bu xonalarda o‘quvchilar robotlarni yig‘ish, Arduino va boshqa mikrokontrollerlar dasturlash asoslarini o‘rganishadi. Maktda Arduinonning turli platalari, datchiklar, motorlar, simlar va boshqa qurilmalar mavjud. Darslar davomida o‘quvchilar loyihalar yaratadi, robotlar sinovdan o‘tkaziladi va musobaqalarga tayyorlanadi. Bu xonalar ixtirolar yaratish va amaliy ko‘nikmalarni rivojlantirish uchun ideal muhit yaratadi.`,
      image: robo,
    },
    {
      id: 'cybersport',
      title: 'Kibersport xonasi',
      subtitle: 'Raqamli sport va strategiya markazi',
      text: `KIBERSPORT XONASI:
Kibersport xonasi — bu jamoaviy o‘yinlar, treninglar va musobaqalar uchun mo‘ljallangan joy. Bu xonada katta ekranli sensor kompyuterlar, jostiklar, qulay kreslolar va o‘yin texnikasi mavjud. O‘quvchilar darsdan keyin kibersport jamoalarida mashg‘ulotlar o‘tkazadilar, o‘yinlarni yaratish va test qilish bo‘yicha ko‘nikmalarni rivojlantiradilar. Kibersport xonasi o‘quvchilarga strategik fikrlash va jamoaviy ishni o‘rgatadi.`,
      image: kiber,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white mt-10">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-sans { font-family: 'Poppins', sans-serif; }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes blob { 0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)} }
        .animate-slide-up { animation: slide-up 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.5s ease-out; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 py-8 px-4">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-20 right-10 w-64 h-64 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 animate-slide-up text-center">Sizning ikkinchi uyingiz</h2>
                <p className="text-sm md:text-base text-gray-700 max-w-md mb-6 leading-relaxed animate-slide-up animation-delay-200 text-center">
                  Muhammad al-Xorazmiy turar joyida biz talabalarining har tomonlama rivojlanishini ta'minlash uchun zamonaviy turar joy binolari, keng o'quv maydonlari, sport inshootlari va dam olish zonalarini taqdim etamiz.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
                  {/* Students */}
                  <div className="bg-white text-blue-600 rounded-2xl p-4 h-32 shadow-md flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mb-2 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-3a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                    <h2 className="text-xl font-semibold leading-tight">500+</h2>
                    <p className="text-xs mt-1 text-center">Talabalar</p>
                  </div>

                  {/* Sport Facilities */}
                  <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-4 h-32 shadow-md flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 7V4h6v3m-9 0h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
                    </svg>
                    <h2 className="text-xl font-semibold leading-tight">10+</h2>
                    <p className="text-xs mt-1 text-center">Sport obyektlari</p>
                  </div>

                  {/* Study Zones */}
                  <div className="bg-white text-blue-600 rounded-2xl p-4 h-32 shadow-md flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mb-2 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M9 8h6m-6 4h6m-9 4h12M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16" />
                    </svg>
                    <h2 className="text-xl font-semibold leading-tight">5+</h2>
                    <p className="text-xs mt-1 text-center">O‘quv zonalari</p>
                  </div>

                  {/* Security */}
                  <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-4 h-32 shadow-md flex flex-col items-center justify-center hover:-translate-y-1 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0a8.003 8.003 0 01-7-4" />
                    </svg>
                    <h2 className="text-xl font-semibold leading-tight">24/7</h2>
                    <p className="text-xs mt-1 text-center">Xavfsizlik</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden h-80 rounded-2xl shadow-lg">
                <img src={image1} alt="Muhammad al-Xorazmiy turar joyi" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* TABS SECTION - made transparent so it doesn't leave a white card behind the gallery */}
        <section className="bg-transparent py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'description' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('description')}
              >
                <Home className="w-5 h-5 inline-block mr-2" />
                Tavsif
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'facilities' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('facilities')}
              >
                <Dumbbell className="w-5 h-5 inline-block mr-2" />
                Obyektlar
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'rules' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('rules')}
              >
                <BookOpen className="w-5 h-5 inline-block mr-2" />
                Qoidalar
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'daily-life' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab('daily-life')}
              >
                <Clock className="w-5 h-5 inline-block mr-2" />
                Kun tartibi
              </button>
            </div>

            {/* Made this inner container transparent (was bg-white rounded-2xl shadow-lg in your original) */}
            <div className="bg-transparent rounded-none shadow-none p-0">
              {/* Tab contents: keep the content but don't give it a white card background */}
              <div className="p-6">
                {activeTab === 'description' && (
                  <div className="animate-slide-up">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Turar joy tavsifi</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-3">
                      Turar joy 500 talabani sig'diradi. Har bir binoda individual va umumiy xonalar, dush va kir yuvish joylari kabi zamonaviy qulayliklar mavjud bo'lib, xavfsizlik va gigienaga alohida e'tibor qaratilgan.
                    </p>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-600 text-base">
                      <li>O'g'il va qizlar uchun alohida turar joylar</li>
                      <li>1–4 kishilik xonalar</li>
                      <li>24/7 monitoring va tibbiy yordam</li>
                    </ul>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative overflow-hidden h-48 rounded-2xl shadow-lg group">
                        <img src={image2} alt="Turar joy ichki ko'rinishi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="relative overflow-hidden h-48 rounded-2xl shadow-lg group">
                        <img src={image2b} alt="Turar joy ichki ko'rinishi 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="animate-slide-up">
                    {/* NEW: expanded facilities grid with 6 independent cards (click -> modal) */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Obyektlar va infratuzilma</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-4">
                      Turar joyda suzish havzasi, sport zali, kutubxona va maxsus o'quv maydonlari kabi dam olish va o'qish uchun turli obyektlar mavjud. Quyida ular haqida batafsil ma'lumot olishingiz mumkin — karta ustiga bosing.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {facilities.map((fac) => (
                        <div
                          key={fac.id}
                          className="bg-white/0 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                          onClick={() => setSelectedFacility(fac)}
                        >
                          <div className="relative overflow-hidden h-72">
                            <img
                              src={fac.image}
                              alt={fac.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="p-6 text-center">
                            <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{fac.title}</h4>
                            <p className="text-gray-600 text-base leading-relaxed">{fac.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Modal for facility details */}
                    {selectedFacility && (
                      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden relative">
                          <button
                            onClick={() => setSelectedFacility(null)}
                            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>

                          <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="h-64 md:h-auto">
                              <img src={selectedFacility.image} alt={selectedFacility.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedFacility.title}</h2>
                              <p className="text-gray-500 mb-4">{selectedFacility.subtitle}</p>
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">{selectedFacility.text}</p>

                              {/* Special case: for Hamkorlarimiz, show two subtexts if needed */}
                              {selectedFacility.id === 'partners' && (
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold">ZTE XONASI</h4>
                                    <p className="text-gray-600 text-sm">
                                      Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga ixtisoslashtirilgan maktabda IT sohasiga yo’naltirilgan o’quv xonalari mavjud. Ushbu xonalar dizaynida mavzuga mos muhit yaratish maqsadida ZTE, Ucell, HUAWEI, Kibersport, Robototexnika, IT park kabi xonalar mavjud. Xonadagi o’quv jihozlar eng so’nggi zamonaviy texnologiyalar bilan jihozlangan. Bu xonada chuqurlashtirilgan mashg’ulotlardan tashqari to’garak va qo’shimcha fakultativ darslar olib boriladi.
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold">UCELL XONASI</h4>
                                    <p className="text-gray-600 text-sm">
                                      Muhammad al-Xorazmiy maktabida Ucell xonasi ham mavjud bo‘lib, bu xonada mobil va telekommunikatsiya texnologiyalari bo‘yicha amaliy mashg‘ulotlar o‘tadi. O‘quvchilar darsdan so‘ng loyihalar ustida ishlash va amaliyot o‘tkazish imkoniga ega bo‘ladilar.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'rules' && (
                  <div className="animate-slide-up">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Maktab hududidagi amal qilinishi kerak bo'ladigan qoidalar</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-3">
                      Biz hurmatli va intizomli muhitni saqlaymiz. Talabalar kelganida qoidalar bilan tanishtiriladi.
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-gray-600 text-base">
                      <li>Kun tartibiga rioya qiling</li>
                      <li>Boshqa yashovchilar va mulkni hurmat qiling</li>
                      <li>Chekish va spirtli ichimliklar taqiqlanadi</li>
                      <li>Gadjetlarni faqat belgilangan vaqtlarda ishlating</li>
                      <li>Maktab maydonida shovqin qilmaslik va tartibni saqlash</li>
                      <li>Sport va o‘quv inshootlaridan xavfsizlik qoidalariga rioya qilgan holda foydalanish</li>
                      <li>Talabalar o‘rtasida hurmat va mehr-oqibatni saqlash</li>
                      <li>Atrof-muhitni ifloslamaslik va chiqindilarni belgilangan joyga tashlash</li>
                      <li>Maktab maydonida kelishmovchiliklarni tinch yo‘l bilan hal qilish</li>
                      <li>Favqulodda vaziyatlarda o‘qituvchilar va xodimlarning ko‘rsatmalariga amal qilish</li>
                    </ol>
                  </div>
                )}

                {activeTab === 'daily-life' && (
                  <div className="animate-slide-up">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Kun tartibi</h3>
                    <table className="w-full border-collapse mt-4 rounded-2xl shadow-lg overflow-hidden">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="p-3 text-left">Vaqt</th>
                          <th className="p-3 text-left">Faoliyat</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">7:00</td>
                          <td className="p-3 text-gray-600">Uyg'onish</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">7:30–8:00</td>
                          <td className="p-3 text-gray-600">Jismoniy mashqlar va gigiena</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">8:00–8:30</td>
                          <td className="p-3 text-gray-600">Nonushta</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">8:30–15:00</td>
                          <td className="p-3 text-gray-600">Darslar</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">15:00–18:00</td>
                          <td className="p-3 text-gray-600">Mustaqil o'qish</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">18:00–19:00</td>
                          <td className="p-3 text-gray-600">Kechki ovqat</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">19:00–21:00</td>
                          <td className="p-3 text-gray-600">Bo'sh vaqt / to'garaklar</td>
                        </tr>
                        <tr className="even:bg-gray-50">
                          <td className="p-3 text-gray-600">21:00</td>
                          <td className="p-3 text-gray-600">Yonib o'chirish</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION - fully transparent container (no card behind images) */}
        <section className="bg-transparent py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12 animate-slide-up">Galereya</h2>

            <div className="relative flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-0 z-30 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Transparent gallery wrapper: no bg, no shadow, just images */}
              <div className="relative w-full max-w-5xl h-96 overflow-visible rounded-none">
                {galleryImages.map((image, index) => {
                  const isMain = index === currentImageIndex;
                  const isPrev = index === (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
                  const isNext = index === (currentImageIndex + 1) % galleryImages.length;

                  return (
                    <div
                      key={index}
                      className={`absolute top-0 transition-all duration-700 ease-in-out transform ${isMain
                        ? 'left-1/2 -translate-x-1/2 z-20 w-3/5 opacity-100 scale-100'
                        : isPrev
                          ? 'left-[5%] z-10 w-2/5 opacity-50 scale-90'
                          : isNext
                            ? 'right-[5%] z-10 w-2/5 opacity-50 scale-90'
                            : 'opacity-0 invisible'
                        }`}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="relative overflow-hidden h-96 group">
                        {/* keep rounded corners on images but no background card behind them */}
                        <img
                          src={image}
                          alt={`Galereya ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleNext}
                className="absolute right-0 z-30 p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccommodationPage;
