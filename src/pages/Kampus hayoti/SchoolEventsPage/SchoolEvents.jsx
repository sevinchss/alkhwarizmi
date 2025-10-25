import React, { useState } from 'react';
import { Calendar, Users, Award, BookOpen, Rocket } from 'lucide-react';


import event1 from './SchoolEvents/event1.jpg';
import event2 from './SchoolEvents/event2.jpg';
import event3 from './SchoolEvents/event3.jpg';
import event4 from './SchoolEvents/event4.jpg';
import event5 from './SchoolEvents/event5.jpg';
import event6 from './SchoolEvents/event6.jpg';
import event7 from './SchoolEvents/event7.jpg';
import event8 from './SchoolEvents/event8.jpg';
import event9 from './SchoolEvents/event9.jpg';
import event10 from './SchoolEvents/event10.jpg';
import event11 from './SchoolEvents/event11.jpg';
import event12 from './SchoolEvents/event12.jpg';

const SchoolEventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    { id: 1, name: 'Arena', date: '24 Oktyabr 2025', description: 'ARENA ga tayyorlaning — bu hayajonli informatika musobaqasi, unda o\'quvchilar hayajonli sinovlarda bir-biriga qarshi chiqadi! Har bir o\'yin sizning ko\'nikmalaringizni sinaydi, sizga ochkolar olib keladi Supporting va g\'alabaga yaqinlashtiradi. Faqat eng yuqori ball to\'plagan kishi chempion unvonini qo\'lga kiritadi!', image: event1 },
    { id: 2, name: 'University of Bristol', date: '17 Oktyabr 2025', description: 'Buyuk Britaniyaning yetakchi institutlaridan biri bo\'lgan Bristol universitetining akademik a\'zolari bilan tanishing! Universitet vakillari o\'quv va hayoti, qabul qilish va stipendiyalar haqida ma\'lumotlar bilan o\'rtoqlashadi.', image: event2 },
    { id: 3, name: 'Monash University', date: "17 Oktyabr 2025', description: 'Monash universiteti vakillari bilan ilhomlantiruvchi sessiyaga qo\'shiling va Avstraliyadagi o\'quv yo\'nalishlari, tadqiqot imkoniyatlari va o'quvchi hayoti bilan tanishing!", image: event3 },
    { id: 4, name: 'Meeting with MAAB Innovation', date: '26 Sentabr 2025', description: '9-11-sinf o\'quvchilari Muhammad al-Xorazmiy maktabida MAAB Innovation vakillari bilan ilhomlantiruvchi sessiyada qatnashdi. Kompaniya o\'quvchilarga 15 Oktyabrgacha Ma\'lumotlar fanlari testida ishtirok etish uchun maxsus imkoniyatni taqdim etdi.', image: event4 },
    { id: 5, name: 'Chess Tournament', date: '2 Oktyabr 2025', description: 'Muhammad al-Xorazmiy ixtisoslashtirilgan maktabida 5-11-sinf o\'quvchilari o\'rtasida qiziqarli shaxmat musobaqasi o\'tkazildi, bu ularning mantiqiy fikrlash, strategiya va sabr-toqatini namoyish etdi.', image: event5 },
    { id: 6, name: 'Meeting with a Harvard Graduate', date: '8 Oktyabr 2025', description: '8 Oktyabr kuni bizning maktabimizga Pollie Prep asoschisi va Sent-Pol maktabi va Garvard kolleji bitiruvchisi Dmitriy Soljenitsin xush kelib keldi. Dmitriy o\'z avlodining eng iste\'dodli o\'quvchilaridan biri va AQShning eng yaxshi universitetlariga qabul qilish bo\'yicha mutaxassis sifatida tanilgan.', image: event6 },
  ];

  const pastEvents = [
    { id: 7, name: 'Ingliz tili va IT olimpiadasi', date: '10 Oktyabr 2025', description: '5–11-sinf o‘quvchilari Muhammad al-Xorazmiy maktabida informatika va ingliz tili fanlaridan o‘tkazilgan maktab bosqichi olimpiadasida qatnashib, o‘z bilim va ko‘nikmalarini sinovdan o‘tkazdilar. Tadbir o‘quvchilarni intellektual o‘sishga va yangi yutuqlarga ilhomlantirdi.', image: event7 },
    { id: 8, name: 'Ta\'lim kompaniyasi vakillari bilan uchrashuv', date: '6 Oktyabr 2025', description: 'Muhammad al-Xorazmiy maktabida Latviya va Finlandiya ta’lim kompaniyalari vakillari bilan uchrashuv bo‘lib o‘tdi. Mehmonlar xalqaro ta’lim tajribalari bilan o‘rtoqlashib, hamkorlik aloqalarini yo‘lga qo‘yish istagini bildirdilar hamda kelgusidagi hamkorlik imkoniyatlarini muhokama qildilar.', image: event8 },
    { id: 9, name: 'Oila-Mahalla-Maktab hamkorlig', date: '7 Oktyabr 2025', description: 'Muhammad al-Xorazmiy maktabida “Oila–Mahalla–Maktab hamkorligi” oyligi doirasida ota-onalar yig‘ilishi o‘tkazildi. Unda o‘quvchilarning intizomi, o‘qishdagi yutuqlari va tarbiyaviy masalalar muhokama qilinib, farzandlar tarbiyasi va ta’lim samaradorligini oshirish bo‘yicha tavsiyalar berildi.', image: event9 },
    { id: 10, name: 'Ustozlar bayrami', date: '1 Oktyabr 2025', description: 'Muhammad al-Xorazmiy maktabida 1-oktyabr — “Ustoz va murabbiylar kuni” munosabati bilan bayram tadbiri o‘tkazildi. Tadbirda ustozlar tabriklanib, o‘quvchilar she’r va qo‘shiqlari bilan bayramona kayfiyat yaratdilar. So‘ng ustozlarga minnatdorlik bildirilib, ularga muvaffaqiyatlar tilandi.', image: event10 },
    { id: 11, name: 'BAA delegatsiyasi tashrifi', date: '30 Sentyabr 2025', description: 'Bu kun Muhammad al-Xorazmiy maktabiga BAA Prezidenti Devonining ta’lim masalalari bo‘yicha maslahatchisi Luay Jerudi boshchiligidagi delegatsiya tashrif buyurdi. Mehmonlar maktabdagi shart-sharoitlar bilan yaqindan tanishdilar.', image: event11 },
    { id: 12, name: 'IB trening', date: '26 Sentyabr 2025', description: 'Muhammad al-Xorazmiy maktabida xalqaro bakalavriat (IB) dasturi doirasida o‘qituvchilar uchun navbatdagi seminar-trening o‘tkazildi. Unda fanlararo integratsiya, so‘rovlarga asoslangan ta’lim va zamonaviy o‘qitish uslublarini qo‘llash masalalari muhokama qilinib, amaliy reja va maqsadlar belgilandi.', image: event12 },
  ];

  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className="font-sans text-gray-800 bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-sans {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50 py-12 px-4">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12">

              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-up relative inline-block">
                Maktab hayotida ishtirok eting
              </h2>

              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up animation-delay-200">
                Muhammad al-Xorazmiyda tadbirlar o'sish uchun imkoniyatlar bo'lib, ilmiy konferensiyalardan madaniy festivallargacha ko'nikmalar, do'stlik va xotiralar qurishga yordam beradi.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                {/* Tadbirlar */}
                <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
                  {/* Calendar Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 mb-3 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold">100+ kun</h2>
                  <p className="text-sm mt-1 text-center">Tadbirlar</p>
                </div>

                {/* Ishtirokchilar */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-6 shadow-md flex flex-col items-center">
                  {/* Users Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-3a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6z"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold">300+</h2>
                  <p className="text-sm mt-1 text-center">Ishtirokchilar</p>
                </div>

                {/* Musobaqalar */}
                <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
                  {/* Star Icon */}
                  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-10 h-10 text-blue-600 transform scale-110" // slightly bigger star
      style={{ flexShrink: 0 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.5l1.35 2.73 3.02.44-2.18 2.12.51 2.99-2.7-1.42-2.7 1.42.51-2.99-2.18-2.12 3.02-.44L11.48 3.5z"
      />
    </svg>
                  <h2 className="text-2xl font-bold">50+</h2>
                  <p className="text-sm mt-1 text-center">Musobaqalar</p>
                </div>

                {/* Imkoniyatlar */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white rounded-2xl p-6 shadow-md flex flex-col items-center">
                  {/* Check Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h2 className="text-2xl font-bold">100%</h2>
                  <p className="text-sm mt-1 text-center">Imkoniyatlar</p>
                </div>

              </div>





            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'upcoming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('upcoming')}
              >
                <Calendar className="w-5 h-5 inline-block mr-2" />
                Kelajakdagi
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${activeTab === 'past'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                onClick={() => setActiveTab('past')}
              >
                <BookOpen className="w-5 h-5 inline-block mr-2" />
                O'tgan
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-blue-600 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SchoolEventsPage;