import React, { useState, useEffect } from 'react';

// 8 TA PDF FAYLLARINI IMPORT QILISH
import academicIntegrityPdf from '../Hujjatlar/images/Academic integriry Policy reviewed by MAKSS new.pdf';
import assessmentPolicyPdf2026 from '../Hujjatlar/images/Assessment policy 2026 Reviewed by MAKSS.pdf';
import assessmentPolicyPdf2025 from '../Hujjatlar/images/Assessment policy 2025.pdf'; 
import admissionPolicyPdf from '../Hujjatlar/images/Admission policy 2026 reviewed by MAKSS.pdf';
import languagePolicyPdf from '../Hujjatlar/images/Language Policy 2025.pdf';
import inclusionPolicyPdf from '../Hujjatlar/images/Inclusion and access policy.pdf';
import rolesPolicyPdf from '../Hujjatlar/images/Roles and Responsibilities Policy 2025.pdf';
import complaintsPolicyPdf from '../Hujjatlar/images/Complaints and appeals policy 2025.pdf';

const DocumentsPage = () => {
  const [activeSection, setActiveSection] = useState('academic-integrity');

  const menuItems = [
    { id: 'academic-integrity', title: "AKADEMIK HALOLLIK", num: "01" },
    { id: 'assessment-policy-2026', title: "BAHOLASH SIYOSATI (2026)", num: "02" },
    { id: 'assessment-policy-2025', title: "BAHOLASH SIYOSATI (2025)", num: "03" },
    { id: 'admission-policy', title: "QABUL SIYOSATI", num: "04" },
    { id: 'language-policy', title: "TIL SIYOSATI", num: "05" },
    { id: 'inclusion-policy', title: "INKLYUZIV TA'LIM", num: "06" },
    { id: 'roles-policy', title: "MAS'ULIYATLAR", num: "07" },
    { id: 'complaints-policy', title: "SHIKOYATLAR", num: "08" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      menuItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#fcfcfc] font-poppins px-4 md:px-10 py-10 gap-10">
      
      {/* CHAP MENYU */}
      <aside className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-1/4 md:sticky md:top-24 self-start h-fit border border-gray-100">
        <h3 className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider font-bold">Bo'limlar</h3>
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-3 cursor-pointer py-3 px-3 rounded-md transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#00265b] font-semibold bg-blue-50 border-l-4 border-[#00265b] shadow-sm"
                  : "text-gray-500 hover:text-[#00265b] hover:bg-gray-50 border-l-4 border-transparent"
              }`}
            >
              <span className="text-sm font-bold w-8">{item.num}</span>
              <span className="uppercase text-[11px] tracking-wide leading-tight">{item.title}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* O'NG KONTENT */}
      <main className="flex-1 px-4 md:px-10">
        <header className="mb-16">
          <h1 className="text-4xl font-extrabold text-[#00265b] mb-4 mt-4">Maktab Nizomlari va Siyosati</h1>
        </header>

        <div className="space-y-16">
          
          {/* 01. Academic Integrity */}
          <section id="academic-integrity" className="scroll-mt-24 group">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[#00265b] text-xs font-bold tracking-[0.2em] uppercase">Siyosat 01</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-1">Akademik Halollik</h3>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl text-[#00265b]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04kM12 21a8.966 8.966 0 01-5.982-2.275M15 15h.01M12 21a8.966 8.966 0 01-5.982-2.275M15 15h.01" /></svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                O'quvchilarning mustaqil ish ko'nikmalarini shakllantirish, ko'chirmachilikka (plagiat) qarshi kurashish va intellektual mulk qoidalarini o'rgatish bo'yicha yo'riqnoma.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-[13px] text-gray-500">
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Manbalardan to'g'ri iqtibos olish</li>
                <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span> Sun'iy intellekt va axloq</li>
              </ul>
              <a href={academicIntegrityPdf} target="_blank" className="inline-block text-[13px] font-bold text-[#00265b] border-b-2 border-[#00265b] pb-1 hover:text-blue-500 hover:border-blue-500 transition-all">
                TO'LIQ NIZOMNI O'QISH →
              </a>
            </div>
          </section>

          {/* 02. Assessment Policy 2026 */}
          <section id="assessment-policy-2026" className="scroll-mt-24 group">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Baholash Siyosati (2026)</h3>
              <p className="text-gray-600 text-sm mb-6">
                IB MYP tizimidagi yangilangan baholash mezonlari va MAKSS tomonidan qayta ko'rib chiqilgan 2026-yilgi tahrir.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[11px] font-medium text-gray-600 uppercase">Yangilangan</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[11px] font-medium text-gray-600 uppercase">IB Standartlari</span>
              </div>
              <a href={assessmentPolicyPdf2026} target="_blank" className="flex items-center gap-3 text-sm font-bold text-[#00265b] hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Baholash tartibini yuklab olish (2026)
              </a>
            </div>
          </section>

          {/* 03. Assessment Policy 2025 */}
          <section id="assessment-policy-2025" className="scroll-mt-24 group">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Baholash Siyosati (2025)</h3>
              <p className="text-gray-600 text-sm mb-6">
                IB MYP tizimidagi 1 dan 7 gacha bo'lgan baholash mezonlari haqidagi 2025-yilgi arxiv hujjati.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[11px] font-medium text-gray-600 uppercase">Arxiv</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-[11px] font-medium text-gray-600 uppercase">Kriteryal baholash</span>
              </div>
              <a href={assessmentPolicyPdf2025} target="_blank" className="flex items-center gap-3 text-sm font-bold text-[#00265b] hover:underline">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Baholash tartibini yuklab olish (2025)
              </a>
            </div>
          </section>

          {/* 04. Admission Policy */}
          <section id="admission-policy" className="scroll-mt-24 group">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Qabul Siyosati (Admission)</h3>
              <p className="text-gray-600 text-sm mb-6">
                Maktabga qabul qilish qoidalari va saralash jarayonlari bo'yicha yo'riqnoma.
              </p>
              <a href={admissionPolicyPdf} target="_blank" className="inline-block text-[13px] font-bold text-[#00265b] border-b-2 border-[#00265b] pb-1 hover:text-blue-500 transition-all">
                QABUL QOIDALARI →
              </a>
            </div>
          </section>

          {/* 05. Language Policy */}
          <section id="language-policy" className="scroll-mt-24 group">
            <div className="bg-[#00265b] p-8 rounded-3xl text-white shadow-xl overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Til Siyosati (Language Policy)</h3>
                <p className="text-blue-100 text-sm mb-8 opacity-90 max-w-xl">
                  Maktabimizda ko'p tillilik qanday qo'llab-quvvatlanadi? O'zbek, ingliz va rus tillarida o'qitish metodikasi.
                </p>
                <a href={languagePolicyPdf} target="_blank" className="bg-white text-[#00265b] px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors inline-block">
                  Til bo'yicha strategiya (PDF)
                </a>
              </div>
              <div className="absolute top-[-20px] right-[-20px] opacity-10">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
              </div>
            </div>
          </section>

          {/* 06. Inclusion Policy */}
          <section id="inclusion-policy" className="scroll-mt-24 group">
            <div className="border-2 border-dashed border-gray-200 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center uppercase tracking-tight">Inklyuziv Ta'lim</h3>
              <p className="text-gray-500 text-sm text-center mb-8 italic">"Har bir bolaning ehtiyoji biz uchun muhim"</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-2xl"><h4 className="font-bold text-[#00265b] text-xs mb-1 uppercase">Tenglik</h4><p className="text-[10px] text-gray-400 leading-tight">Barcha o'quvchilar uchun bir xil imkoniyat.</p></div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl"><h4 className="font-bold text-[#00265b] text-xs mb-1 uppercase">Qo'llab-quvvatlash</h4><p className="text-[10px] text-gray-400 leading-tight">Maxsus ta'lim ehtiyojlari uchun individual reja.</p></div>
                <div className="text-center p-4 bg-gray-50 rounded-2xl"><h4 className="font-bold text-[#00265b] text-xs mb-1 uppercase">To'siqsizlik</h4><p className="text-[10px] text-gray-400 leading-tight">O'quv materiallari barcha uchun ochiq.</p></div>
              </div>
              <div className="flex justify-center">
                <a href={inclusionPolicyPdf} target="_blank" className="bg-gray-900 text-white px-8 py-3 rounded-full text-[12px] font-bold hover:bg-blue-600 transition-all">INKLYUZIVLIK SIYOSATI BILAN TANISHISH</a>
              </div>
            </div>
          </section>

          {/* 07. Roles & Responsibilities */}
          <section id="roles-policy" className="scroll-mt-24 group">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vazifa va mas'uliyatlar</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Maktab ma'muriyati, o'qituvchilar va o'quvchilarning vazifalari qat'iy belgilangan.
              </p>
              <a href={rolesPolicyPdf} target="_blank" className="inline-flex items-center text-blue-600 text-sm font-bold group">
                Vazifalar taqsimoti 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </section>

          {/* 08. Complaints Policy */}
          <section id="complaints-policy" className="scroll-mt-24 pb-40">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 shadow-sm relative overflow-hidden">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</div>
                 <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Shikoyatlar va Apellyatsiyalar</h3>
               </div>
               <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                 O'quv jarayoni yoki baholash natijasidan norozi bo'lgan taqdirda murojaat qilish tartibi.
               </p>
               <a href={complaintsPolicyPdf} target="_blank" className="bg-[#00265b] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase hover:shadow-lg transition-all inline-block">
                 APELLYATSIYA TARTIBI (PDF)
               </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default DocumentsPage;