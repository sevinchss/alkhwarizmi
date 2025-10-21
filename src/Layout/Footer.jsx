import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative font-[Poppins] bg-[#00265B] text-gray-200 pt-16 pb-8 overflow-hidden">
      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01306F] via-[#002B61] to-[#001C45] opacity-95" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#3BAAFF] pl-3">
            Bog‘lanish
          </h2>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#3BAAFF] mt-1" />
              <span>
                Mahtumquli ko‘chasi, 1a, Yashnobod, Toshkent 100047, O‘zbekiston
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#3BAAFF]" /> 1206
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#3BAAFF]" />
              info@al-khwarizmischool.uz
            </li>
          </ul>

          <div className="flex gap-5 mt-5 text-lg">
            <a href="t.me/ictschooluz" className="hover:text-[#3BAAFF] hover:scale-110 transition-all">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-[#3BAAFF] hover:scale-110 transition-all">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/itschool_uz?igsh=MTJpcjlqeXEzbzEyNw==" className="hover:text-[#3BAAFF] hover:scale-110 transition-all">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@itschooluzbekistan?si=oN09Uym62ZyM74_u" className="hover:text-[#3BAAFF] hover:scale-110 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#3BAAFF] pl-3">
            Biz haqimizda
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/rahbariyat" className="hover:text-[#3BAAFF] transition-colors">Rahbariyat</a></li>
            <li><a href="/maqsad-vazifalar" className="hover:text-[#3BAAFF] transition-colors">Maqsad va vazifalar</a></li>
            <li><a href="/asosiy-hujjatlar" className="hover:text-[#3BAAFF] transition-colors">Asosiy hujjatlar</a></li>
            <li><a href="/yangiliklar" className="hover:text-[#3BAAFF] transition-colors">Yangiliklar</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#3BAAFF] pl-3">
            Ta’lim va kampus
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/oquv-dasturlari" className="hover:text-[#3BAAFF] transition-colors">O‘quv dasturlari</a></li>
            <li><a href="/fan-yonalishlari" className="hover:text-[#3BAAFF] transition-colors">Fan yo‘nalishlari</a></li>
            <li><a href="/natijalar" className="hover:text-[#3BAAFF] transition-colors">Natijalar</a></li>
            <li><a href="/maktab-tadbirlari" className="hover:text-[#3BAAFF] transition-colors">Maktab tadbirlari</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#3BAAFF] pl-3">
            Maktab bilan aloqa
          </h2>
          <p className="text-sm mb-3">
            O‘zingizni qiziqtirgan savol va takliflarni yozib yuboring:
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded-md text-gray-900 focus:outline-none flex-1"
            />
            <button className="bg-[#3BAAFF] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#5FBFFF] transition-all">
              Jo‘natish
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 mt-12 border-t border-gray-600/40"></div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-6 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-sm text-gray-400">
        <p>
          © 2025{" "}
          <span className="text-[#3BAAFF]">
            Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan IT maktabi
          </span>
          . Barcha huquqlar himoyalangan.
        </p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/qabul-tartibi" className="hover:text-[#3BAAFF] transition-colors">Qabul</a>
          <a href="/kontaktlar" className="hover:text-[#3BAAFF] transition-colors">Aloqa</a>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-r from-[#00387D] via-[#00265B] to-[#001C45] origin-bottom-left skew-y-[-1.5deg]" />
    </footer>
  );
}
