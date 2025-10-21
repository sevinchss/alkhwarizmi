import React, { useEffect, useRef, useState } from "react";
import {
  FileText,
  Calendar,
  ClipboardList,
  BookOpen,
  AlertTriangle,
  Award,
} from "lucide-react";
import AdmissionPhoto from "./images/admissionboy.jpg";

const AdmissionPage = () => {
  const applicationRef = useRef(null);
  const documentsRef = useRef(null);
  const gradesRef = useRef(null);
  const examDatesRef = useRef(null);
  const rulesRef = useRef(null);
  const resultsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("application");

  const sections = [
    { id: "application", num: "01", label: "Ariza topshirish" },
    { id: "documents", num: "02", label: "Kerakli hujjatlar" },
    { id: "grades", num: "03", label: "Maktab baholari" },
    { id: "examDates", num: "04", label: "Imtihon sanalari" },
    { id: "rules", num: "05", label: "Imtihon qoidalari" },
    { id: "results", num: "06", label: "Natijalar" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    [
      applicationRef,
      documentsRef,
      gradesRef,
      examDatesRef,
      rulesRef,
      resultsRef,
    ].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [
        applicationRef,
        documentsRef,
        gradesRef,
        examDatesRef,
        rulesRef,
        resultsRef,
      ].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 font-poppins scroll-smooth">
      <div className="max-w-7xl mx-auto px-6 md:px-15 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow-sm p-6 w-full md:w-1/4 md:sticky md:top-24 self-start h-fit">
          <h3 className="text-sm font-medium text-gray-500 mb-6">Menyu</h3>
          <nav className="space-y-4">
            {sections.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  scrollToSection(
                    item.id === "application"
                      ? applicationRef
                      : item.id === "documents"
                      ? documentsRef
                      : item.id === "grades"
                      ? gradesRef
                      : item.id === "examDates"
                      ? examDatesRef
                      : item.id === "rules"
                      ? rulesRef
                      : resultsRef
                  )
                }
                className={`flex items-center gap-3 cursor-pointer transition-colors ${
                  activeSection === item.id
                    ? "text-blue-900 font-semibold"
                    : "text-gray-500 hover:text-blue-900"
                }`}
              >
                <span className="text-sm font-bold">{item.num}</span>
                <span className="uppercase text-sm">{item.label}</span>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="bg-white rounded-2xl shadow-sm p-8 flex-1">
          {/* 01 — Ariza topshirish */}
          <section id="application" ref={applicationRef}>
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
              Qabul qilish uchun ariza topshirish
            </h1>

            <img
              src={AdmissionPhoto}
              alt="Admission process"
              className="w-full h-[340px] object-cover rounded-xl mb-6"
            />

            <p className="text-gray-700 leading-relaxed">
              Muhammad al-Xorazmiy nomidagi maktabga qabul faqat{" "}
              <strong>onlayn ariza topshirish</strong> orqali amalga oshiriladi.
              Arizalar odatda <strong>may oyining o‘rtalaridan</strong>{" "}
              <strong>iyun oyining boshigacha</strong> davom etadi.
            </p>
            <p className="text-gray-700 mt-4">
              Arizani topshirish havolasi maktabning rasmiy veb-saytida
              e’lon qilinadi. Har bir nomzod o‘z ma’lumotlarini to‘liq va
              aniq kiritishi shart.
            </p>
            <hr className="my-10 border-gray-200" />
          </section>

          {/* 02 — Kerakli hujjatlar */}
          <section id="documents" ref={documentsRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Kerak bo‘ladigan hujjatlar
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-blue-800 mt-1" />
                <ul className="list-disc ml-5 text-gray-700 space-y-2">
                  <li>Nomzodning pasporti yoki ID-kartasi nusxasi</li>
                  <li>O‘quvchining so‘nggi 5 yillik baholari (tabeli)</li>
                  <li>1 dona 3x4 o‘lchamdagi rasm</li>
                  <li>Onlayn ariza to‘ldirilganligini tasdiqlovchi kvitansiya</li>
                </ul>
              </div>
            </div>
            <hr className="my-10 border-gray-200" />
          </section>

          {/* 03 — Maktab baholari */}
          <section id="grades" ref={gradesRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Maktab baholari
            </h2>
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-blue-800 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Nomzodning maktabdagi umumiy o‘qish natijalari — qabul jarayonida
                hisobga olinadigan muhim omillardan biridir. Maktabda fanlardan olingan baholar 1 sinfdan boshlab
              <strong> 5 bo'lishi shart</strong>.
              </p>
            </div>
            <hr className="my-10 border-gray-200" />
          </section>

          {/* 04 — Imtihon sanalari */}
          <section id="examDates" ref={examDatesRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Imtihon topshirish sanalari
            </h2>
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 text-blue-800 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Imtihonlar odatda <strong>avgust oyining birinchi yarmida</strong>{" "}
                o‘tkaziladi. Har bir nomzod ingliz tili va matematika fanlaridan
                test topshiradi. Hech qanday intervyu yoki boshqa bosqich mavjud emas.
              </p>
            </div>
            <p className="text-gray-700 mt-3">
              Imtihon joyi va vaqti haqida ma’lumot ariza topshilayotgan payt aniqlanadi. 
            </p>
            <hr className="my-10 border-gray-200" />
          </section>

          {/* 05 — Imtihon qoidalari */}
          <section id="rules" ref={rulesRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Imtihon kunidagi qoidalar
            </h2>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>O‘quvchi bilan birga pasport yoki ID karta olib kelish shart.</li>
                <li>Telefon, soat, planshet va boshqa elektron qurilmalar taqiqlanadi.</li>
                <li>Nomzodlar imtihon boshlanishidan 30 daqiqa oldin yetib kelishlari kerak.</li>
                <li>Faoliyat davomida boshqa o‘quvchilar bilan gaplashish yoki yordam so‘rash man etiladi.</li>
              </ul>
            </div>
            <hr className="my-10 border-gray-200" />
          </section>

          {/* 06 — Natijalar */}
          <section id="results" ref={resultsRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Natijalar
            </h2>
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-blue-800 mt-1" />
              <p className="text-gray-700 leading-relaxed">
                Imtihon natijalari odatda <strong>20 kun ichida</strong>{" "}
                maktabning rasmiy veb-saytida e’lon qilinadi. Natijalarda har
                bir o‘quvchining umumiy bali va qabul holati ko‘rsatiladi.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Animation (optional) */}
      <style>{`
        @keyframes pulseBlue {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.6);
          }
          50% {
            box-shadow: 0 0 15px 5px rgba(30, 58, 138, 0.4);
          }
        }
        .animate-pulse-blue {
          animation: pulseBlue 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default AdmissionPage;
