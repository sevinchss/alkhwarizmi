import React, { useState } from 'react';
import { Users, BookOpen, Leaf } from 'lucide-react';

import presidency from './StudentOrganizations/clubImage6.png';
import volunteers from './StudentOrganizations/clubImage2.jpg';
import eco from './StudentOrganizations/clubImage3.png';
import aksa from './StudentOrganizations/clubImage4.jpg';
import ted from './StudentOrganizations/clubImage5.png';
import logoA from './StudentOrganizations/clubImage1.png';
import gallery1_1 from './StudentOrganizations/clubImage1-1.png';
import gallery1_2 from './StudentOrganizations/clubImage1-2.png';
import gallery1_3 from './StudentOrganizations/clubImage1-3.png';
import gallery1_4 from './StudentOrganizations/clubImage1-4.png';
import gallery2_1 from './StudentOrganizations/clubImage2-1.jpg';
import gallery2_2 from './StudentOrganizations/clubImage2-2.jpg';
import gallery2_3 from './StudentOrganizations/clubImage2-3.jpg';
import gallery2_4 from './StudentOrganizations/clubImage2-4.jpg';
import gallery3_1 from './StudentOrganizations/clubImage3-1.png';
import gallery3_2 from './StudentOrganizations/clubImage3-2.jpg';
import gallery3_3 from './StudentOrganizations/clubImage3-3.jpg';
import gallery3_4 from './StudentOrganizations/clubImage3-4.jpg';
import gallery4_1 from './StudentOrganizations/clubImage4-1.jpg';
import gallery4_2 from './StudentOrganizations/clubImage4-2.jpg';
import gallery4_3 from './StudentOrganizations/clubImage4-3.jpg';
import gallery4_4 from './StudentOrganizations/clubImage4-4.jpg';
import gallery5_1 from './StudentOrganizations/clubImage6-1.jpg';
import gallery5_2 from './StudentOrganizations/clubImage6-2.jpg';
import gallery5_3 from './StudentOrganizations/clubImage6-3.jpg';
import gallery5_4 from './StudentOrganizations/clubImage6-4.jpg';
import gallery6_1 from './StudentOrganizations/clubImage5-1.jpg';
import gallery6_2 from './StudentOrganizations/clubImage5-2.jpg';
import gallery6_3 from './StudentOrganizations/clubImage5-3.jpg';
import gallery6_4 from './StudentOrganizations/clubImage5-4.jpg';

const communities = [
  {
    id: 1,
    name: 'IT-School Presidency',
    logo: presidency,
    founder: 'Abdumanabov Sardorbek',
    leader: 'Abdumanabov Sardorbek',
    info: `Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabdagi IT-School Prezidenti — maktabning eng oliy tashkiloti hisoblanadi. To'rtinchi Prezident (joriy prezident) Sardorbek Abdumanabov tomonidan amalga oshirilgan islohotlardan so'ng, Prezidentlik “Tartib bilan taraqqiyot” shiori ostida faoliyat yurita boshladi. U o'quvchilar tomonidan saylanadigan boshqaruv organiga aylanishi bilan maktabning "demokratik yuragi" sifatida tanildi.

Jamoa Prezident, Vitse-prezident va oltita asosiy bo'limdan iborat: Ta’lim va Madaniyat, Sport, Talabalar ishlari, Tashqi aloqalar, IT va Media. Prezidentlik jamoasi o'quvchilarning manfaatlarini himoya qiladi, ularning fikrlarini ma’muriyatga yetkazadi va maktabdagi ichki muhitni yaxshilash ustida ishlaydi.`,
    category: 'social',
    gallery: [
      { src: gallery1_1, caption: 'Futbol musobaqasi' },
      { src: gallery1_2, caption: 'Shaxmat turniri' },
      { src: gallery1_3, caption: 'IT Case Hakaton - Lumora' },
      { src: gallery1_4, caption: 'Stol tennisi musobaqasi' },
    ],
  },
  {
    id: 2,
    name: 'Al-Khwarizmi Volunteers',
    logo: volunteers,
    founder: 'Abdumanabov Sardorbek',
    leader: 'Sayfutdinova Sevinch',
    info: `Al-Xorazmiy Ko'ngillilari — Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabning 200 dan ortiq fidoyi ko'ngillilar va ularning yuzlab izdoshlaridan iborat jamoasi tomonidan boshqariladigan tashabbusdir.
Faoliyati davomida jamoa turli musobaqalarda (Xalqaro Matematika va Informatika Olimpiadasi), ekologik tadbirlarda (“Green Games” loyihasi) hamda festivallarda (Jahon Yoshlar Festivali) ishtirok etgan.`,
    category: 'social',
    gallery: [
      { src: gallery2_1, caption: '\'Yil volontyori\'' },
      { src: gallery2_2, caption: 'Nobel mukofoti sovrindori bilan uchrashuv' },
      { src: gallery2_3, caption: 'Tabiiy fanlar festivali' },
      { src: gallery2_4, caption: 'Digital Generation Girls' },
    ],
  },
  {
    id: 3,
    name: 'Eco-Union',
    logo: eco,
    founder: 'Dilmurod Yuldashev',
    leader: 'Umidova Muslima',
    info: `2021-yilda tashkil etilgan, o'quvchilar tomonidan boshqariladigan tashkilot bo'lib, Markaziy Osiyoda birinchi marta Atrof-muhit ta’limi jamg'armasi (FEE) tomonidan beriladigan “Yashil bayroq” mukofotini qo'lga kiritgan.

Tashkilotning asosiy maqsadi — “maktabimizni ekologik jihatdan toza hududga aylantirish va kelajak avlodlar uchun barqaror hayotni ta’minlash.”

Tashkilot etilganidan beri Eco-Union bir qator yirik tadbirlarni o'tkazgan, jumladan: MCOP24 (Model Conference of Parties), Green Games va ekologik trening mashg'ulotlari. Tashkilot, shuningdek, televidenie intervyulari va ijtimoiy tarmoqlar orqali ekologik muammolar haqida xabardorlikni oshirib, ommaviy e’tiborni qozongan.`,
    category: 'ecology',
    gallery: [
      { src: gallery3_1, caption: 'Mirzo Ulug\'bek maktabiga tashrif' },
      { src: gallery3_2, caption: 'Eco forum' },
      { src: gallery3_3, caption: 'Abdulla Qodiriy maktabiga tashrif' },
      { src: gallery3_4, caption: 'Eco-Zakovat' },
    ],
  },
  {
    id: 4,
    name: 'AKSA',
    logo: aksa,
    founder: 'Abdugafurov Muhammad',
    leader: 'Rustamov Shaxzod',
    info: `Al-Xorazmiy Sport Assotsiatsiyasi — bu o'quvchilar tomonidan boshqariladigan tashkilot bo'lib, futbol, mini-futbol, voleybol va kibersport kabi turli sport yo'nalishlarida musobaqalarni tashkil etadi.
Yaqinda tashkil etilganiga qaramay, assotsiatsiya Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabdagi eng mashhur va tez rivojlanayotgan o'quvchi tashkilotlaridan biriga aylandi. U hozirgacha har birida 50–150 nafar ishtirokchi qatnashgan olti ta musobaqani muvaffaqiyatli o'tkazgan.`,
    category: 'sports',
    gallery: [
      { src: gallery4_1, caption: 'Volleybol musobaqasi' },
      { src: gallery4_2, caption: 'Kuzgi chempionat' },
      { src: gallery4_3, caption: 'Futsal musobaqasi' },
      { src: gallery4_4, caption: 'CS musobaqasi' },
    ],
  },
  {
    id: 5,
    name: 'The Zakovat Club',
    logo: logoA,
    founder: 'Doniyor Kamoliddinov',
    leader: 'Komilov Anasxon',
    info: `An intellectual community that engages over 200 students monthly through fun and challenging intellectual games. Similar to Quiz Bowl, this club organizes league tournaments where students compete in various subjects, testing their knowledge and quick thinking. The Zakovat Club helps students develop critical thinking, problem-solving skills, and knowledge beyond the standard school curriculum.`,
    category: 'social',
    gallery: [
      { src: gallery6_1, caption: 'Ustozlar orasida Zakovat' },
      { src: gallery6_2, caption: 'Bilimlar Bellashuvi' },
      { src: gallery6_3, caption: 'Oliy Liga' },
      { src: gallery6_4, caption: 'Xorazmiy Avlodlari bellashuvi' },
    ],
  },
  {
    id: 6,
    name: 'TedxAl-Khwarizmi School',
    logo: ted,
    founder: 'Ibrokhim Pulatov',
    leader: 'Ibrokhim Pulatov',
    info: `TEDxAl-Khwarizmi School is an official TEDx-licensed event hosted by the Specialized Muhammad al-Khwarizmi School. It provides a platform for students to share inspiring ideas and stories through TED-style talks, promoting creativity, innovation, and intellectual curiosity. In 2025, the event featured 13 speakers who presented their ideas to an audience of over 250 guests. Organized by students and staff, TEDxAl-Khwarizmi School embodies the spirit of “ideas worth spreading,” encouraging young minds to explore topics in technology, science, society, and personal growth while developing their communication and leadership skills.`,
    category: 'social',
    gallery: [
      { src: gallery5_1, caption: 'TEDxAl-Khwarizmi 2025' },
      { src: gallery5_2, caption: 'TEDxAl-Khwarizmi 2025' },
      { src: gallery5_3, caption: 'TEDxAl-Khwarizmi 2025' },
      { src: gallery5_4, caption: 'TEDxAl-Khwarizmi 2025' },
    ],
  },
];

const StudentOrganizationsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const filteredClubs = activeTab === 'all' ? communities : communities.filter(club => club.category === activeTab);

  return (
    <div className="font-sans text-gray-800 bg-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-sans {
          font-family: 'Poppins', sans-serif;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: scale(1); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
                Jamoalar orqali o'sing
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up animation-delay-200">
                Muhammad al-Xorazmiyda o'quvchilar tashkilotlari o'zini namoyon qilish uchun maydon taqdim etadi. 20 dan ortiq qiziqish klublari bilan o'quvchilar rahbarlik, ijodkorlik va jamoaviy ishni rivojlantiradi. Qo'shiling va o'xshash fikrdagi tengdoshlar bilan bog'laning!
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

  {/* Tashkilotlar */}
  <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
    {/* Building Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8 mb-3 text-blue-600 flex-shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21h18M9 8h6m-6 4h6m-6 4h6M4 21V5a1 1 0 011-1h14a1 1 0 011 1v16"
      />
    </svg>
    <h2 className="text-2xl font-bold">20+</h2>
    <p className="text-sm mt-1 text-center">Tashkilotlar</p>
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
      className="w-8 h-8 mb-3 flex-shrink-0"
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

  {/* Tadbirlar */}
  <div className="bg-white text-blue-600 rounded-2xl p-6 shadow-md flex flex-col items-center">
    {/* Calendar Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-8 h-8 mb-3 text-blue-600 flex-shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <h2 className="text-2xl font-bold">50+</h2>
    <p className="text-sm mt-1 text-center">Tadbirlar</p>
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
      className="w-8 h-8 mb-3 flex-shrink-0"
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
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('all')}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Hammasi
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'social' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('social')}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Ijtimoiy
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'sports' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('sports')}
              >
                <Users className="w-5 h-5 inline-block mr-2" />
                Sport
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'ecology' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('ecology')}
              >
                <Leaf className="w-5 h-5 inline-block mr-2" />
                Ekologiya
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClubs.map((club, index) => (
                <div
                  key={club.id}
                  onMouseEnter={() => setHoveredId(club.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedCommunity(club)}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group ${
                    hoveredId && hoveredId !== club.id ? 'opacity-70' : 'opacity-100'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={club.logo}
                      alt={club.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {club.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Founder:</strong> {club.founder}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <strong>Leader:</strong> {club.leader}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedCommunity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 flex flex-col items-center relative overflow-y-auto max-h-[80vh] animate-slide-up">
              <button
                onClick={() => setSelectedCommunity(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl transition-colors duration-300"
              >
                ✕
              </button>
              <div className="text-center md:text-left w-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 animate-slide-up">
                  {selectedCommunity.name}
                </h3>
                <p className="text-base text-gray-700 mb-2">
                  <strong>Founder:</strong> {selectedCommunity.founder}
                </p>
                <p className="text-base text-gray-700 mb-4">
                  <strong>Leader:</strong> {selectedCommunity.leader}
                </p>
                <p className="text-base text-gray-600 leading-relaxed text-justify whitespace-pre-line animate-slide-up animation-delay-200">
                  {selectedCommunity.info}
                </p>
              </div>
              <div className="mt-6 w-full">
                <h4 className="text-xl font-bold text-gray-900 mb-4 animate-slide-up">Gallery</h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCommunity.gallery.map((photo, index) => (
                    <div key={index} className="text-center">
                      <div className="relative overflow-hidden h-32">
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          className="w-full h-full object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentOrganizationsPage;