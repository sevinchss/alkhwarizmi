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
import logo from "./images/logo5.png";
import logo1 from "./images/iblogo.png";
import LanguageSelect from "../component/LanguageSelect";

const NAV = [
  {
    name: "Biz haqimizda",
    links: [
      { label: "Rahbariyat", to: "/rahbariyat" },
      { label: "Maqsad va vazifalar", to: "/maqsad-vazifalar" },
      { label: "Fotogalereya", to: "/fotogalereya" },
      { label: "Yangiliklar", to: "/yangiliklar" },
      { label: "Maktab tarixi", to: "/history" },
    ],
  },
  {
    name: "Qabul",
    links: [{ label: "Qabul tartibi", to: "/qabul-tartibi" }],
  },
  {
    name: "Ta’lim",
    links: [
      { label: "Ta‘lim modeli", to: "/oquv-dasturlari" },
      { label: "Online platforma", to: "/fan-yonalishlari" },
      { label: "Hujjatlar", to: "/documents" },
      { label: "O‘quvchi rivojlanishi", to: "/rivojlanishi" },
    ],
  },
  {
    name: "Maktab hayoti",
    links: [
      { label: "Yotoqxona", to: "/yotoqxona" },
      { label: "Presidency", to: "/presidency" },
      { label: "O‘quvchilar tashkilotlari", to: "/oquvchilar-tashkilotlari" },
      { label: "Maktab tadbirlari", to: "/maktab-tadbirlari" },
    ],
  },
  {
    name: "Yo‘nalishlar",
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
            : "h-14 bg-[#00265b] text-white translate-y-0 opacity-100"
        }`}
      >
        <div className="flex mt-4 mb-4 items-center gap-3 text-sm">
          <FaPhoneAlt className="text-white/90" />
          <span>
            Aloqa markazi: +998 55-502-62-22 <br /> info@al-khwarizmischool.uz
          </span>
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
        <div className=" flex items-center justify-between w-full pr-6 lg:pr-12 bg-white">
          {/* Logo */}
          <div className="px-2 flex-shrink-0 flex flex-row items-center">
            <img
              src={logo1}
              alt="Al-Xorazmiy logotipi"
              className={`mt-2 lg:ml-12 h-[58px]  my-4  duration-700 ${
                isScrolled ? "scale-100 " : "scale-100"
              }`}
            />
            <a href="/" className="m-0">
              <img
                src={logo}
                alt="Al-Xorazmiy logotipi"
                className={`mt-2 m-0 ml-2 h-[58px]  w-[275px] my-4 lg:w-[250px]  transition-transform duration-700 ${
                  isScrolled ? "scale-100 " : "scale-100"
                }`}
              />{" "}
            </a>
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
                  <NavLink
                    to={item.links[0].to}
                    className="flex items-center gap-1.5 hover:text-[#0047AB] transition-colors"
                  >
                    {item.name}
                  </NavLink>
                ) : (
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
            <li className="flex items-center">
              <LanguageSelect
                onChange={(lang) => console.log("Selected:", lang)}
              />
            </li>
            {/* Bog‘lanish link */}
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
          className={`lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50 transition-all duration-500 overflow-hidden ${
            open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
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
                            className="block py-1 hover:text-[#0047AB] hover:bg-blue-50"
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
            <li className="py-2">
              <LanguageSelect
                onChange={(lang) => console.log("Selected:", lang)}
              />
            </li>
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
