import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "./images/logouz.png";

const NAV = [
  {
    name: "Biz haqimizda",
    links: [
      { label: "Rahbariyat", to: "/rahbariyat" },
      { label: "Maqsad va vazifalar", to: "/maqsad-vazifalar" },
      { label: "Fotogalereya", to: "/fotogalereya" },
      { label: "Yangiliklar", to: "/yangiliklar" },
    ],
  },
  {
    name: "Qabul", // Removed dropdown, only one link for Qabul
    links: [
      { label: "Qabul tartibi", to: "/qabul-tartibi" },  // Ensure this is correct and matches route definition
    ],
  },
  {
    name: "Ta’lim",
    links: [
      { label: "Ta'lim modeli", to: "/oquv-dasturlari" },
      { label: "Fan yo‘nalishlari", to: "/fan-yonalishlari" },
      { label: "Ta'laba rivojlanishi", to: "/rivojlanishi" },
    ],
  },
  {
    name: "Kampus hayoti",
    links: [
      { label: "O'quvchilar xizmati", to: "/oquvchilar-xizmati" },
      { label: "Yotoqxona", to: "/yotoqxona" },
      { label: "Presidency", to: "/presidency" },
      { label: "O'quvchilar tashkilotlari", to: "/oquvchilar-tashkilotlari" },
      { label: "Maktab tadbirlari", to: "/maktab-tadbirlari" },
    ],
  },
  {
    name: "Yo'nalishlar",
    links: [
      { label: "Web dasturlash", to: "/web" },
      { label: "Mobil dasturlash", to: "/mobil" },
      { label: "Kompyuter grafikasi", to: "/grafika" },
      { label: "Kompyuter tarmoqlari", to: "/tarmoq" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-[Poppins] tracking-tight transition-all duration-700 ease-in-out">
      {/* Top strip */}
      <div
        className={`hidden lg:flex justify-between items-center px-6 lg:px-10 transition-all duration-700 ${
          isScrolled
            ? "h-0 opacity-0 -translate-y-3"
            : "h-12 bg-[#00265b] text-white translate-y-0 opacity-100"
        }`}
      >
        <div className="flex items-center gap-3 text-sm">
          <FaPhoneAlt className="text-white/90" />
          <span>Aloqa markazi: info@al-khwarizmischool.uz</span>
        </div>
        <div className="flex items-center gap-5 text-lg">
          <a href="t.me/ictschooluz" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="hover:text-[#2AA9E0] transition" />
          </a>
          <a
            href="https://www.instagram.com/itschool_uz"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="hover:text-[#E1306C] transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="hover:text-[#1877F2] transition" />
          </a>
          <a
            href="https://youtube.com/@itschooluzbekistan"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="hover:text-[#FF0000] transition" />
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`w-full transition-all duration-700 ${
          isScrolled
            ? "shadow-lg bg-white/80 backdrop-blur-xl py-[0px]"
            : "bg-transparent py-0"
        }`}
      >
        <div className="flex items-center justify-between w-full pr-6 lg:pr-12 bg-white">
          {/* Logo */}
          <div className="flex-shrink-0 items-center">
            <div
              className="relative bg-[#0047AB] text-white font-semibold pr-12 pl-0 py-3 h-[82px]"
              style={{
                clipPath: "polygon(0 0, 93% 0, 100% 100%, 0% 100%)",
              }}
            >
              <a href="/">
                <img
                  src={logo}
                  alt="Al-Xorazmiy logotipi"
                  className={`mt-3 w-[315px] sm:w-[320px] ml-5 transition-transform duration-700 ${
                    isScrolled ? "scale-[0.96] opacity-90" : "scale-100"
                  }`}
                />
              </a>
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] text-gray-800 font-medium px-10">
            {NAV.map((item, idx) => (
              <li
                key={item.name}
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative"
              >
                {item.links.length === 1 ? (
                  // No dropdown for Qabul (only one link)
                  <NavLink
                    to={item.links[0].to}
                    className="flex items-center gap-1.5 hover:text-[#0047AB] transition-colors"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  // Dropdown for other items
                  <>
                    <button className="flex items-center gap-1.5 hover:text-[#0047AB] transition-colors">
                      {item.name}
                      <ChevronDown size={15} />
                    </button>

                    <div
                      className={`absolute left-0 top-full pt-3 transition-all duration-300 ${
                        activeDropdown === idx
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden">
                        <ul className="min-w-56 py-2">
                          {item.links.map((link) => (
                            <li key={link.to}>
                              <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                  `block px-4 py-2 transition-all ${
                                    isActive
                                      ? "text-[#0047AB] font-semibold border-l-4 border-[#0047AB] bg-blue-50"
                                      : "text-gray-700 hover:text-[#0047AB] hover:bg-blue-50"
                                  }`
                                }
                              >
                                {link.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </li>
            ))}

            {/* Bog'lanish link */}
            <li>
              <NavLink
                to="/kontaktlar"
                className="hover:text-[#0047AB] transition-colors"
              >
                Bog‘lanish
              </NavLink>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#0047AB] border border-gray-200 rounded p-2 mr-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-40 transition-all duration-500 ${
            open
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col p-4 text-gray-800 font-medium text-[15px]">
            {NAV.map((item) => (
              <li key={item.name} className="py-2">
                {item.links.length > 1 ? (
                  <details>
                    <summary className="cursor-pointer flex justify-between items-center">
                      {item.name}
                      <ChevronDown size={15} />
                    </summary>
                    <ul className="pl-4 mt-1 space-y-1">
                      {item.links.map((link) => (
                        <li key={link.to}>
                          <NavLink
                            to={link.to}
                            className={({ isActive }) =>
                              `block py-1 transition-all ${
                                isActive
                                  ? "text-[#0047AB] font-semibold border-l-4 border-[#0047AB] bg-blue-50"
                                  : "text-gray-700 hover:text-[#0047AB] hover:bg-blue-50"
                              }`
                            }
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <NavLink
                    to={item.links[0].to}
                    className="block py-2 hover:text-[#0047AB]"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}

            {/* Bog‘lanish dropdownsiz */}
            <li className="py-2">
              <NavLink
                to="/kontaktlar"
                className="block py-2 hover:text-[#0047AB]"
                onClick={() => setOpen(false)}
              >
                Bog‘lanish
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
