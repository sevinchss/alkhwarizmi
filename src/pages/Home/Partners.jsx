import React from "react";
import { motion } from "framer-motion";
import artel from "./images/artel.png";
import zamin from "./images/zamin.png";
import huawei from "./images/huawei.png";
import ucell from "./images/ucell.jpg";
import zte from "./images/zte.png";
import uztelecom from "./images/uztelecom.png";
import itpark from "./images/itpark.png";
import epam from "./images/epam.png";
import amity from "./images/amity.png";
import bristol from "./images/bristol.png";
import dianzi from "./images/dianzi.png";
import kunshan from "./images/dukekunshan.png";
import king from "./images/king.png";
import tuit from "./images/tuit.png";
import arizona from "./images/arizona.png";
import inha from "./images/inha.jpg";
import shanhai from "./images/shanhai.png";

const partnersRow1 = [
  { name: "Artel Electronics", logo: artel },
  { name: "Ucell", logo: ucell },
  { name: "ZTE", logo: zte },
  { name: "Zamin", logo: zamin },
  { name: "Huawei", logo: huawei },
  { name: "UZTELECOM", logo: uztelecom },
  { name: "IT Park Uzbekistan", logo: itpark },
  { name: "EPAM Systems", logo: epam },
];

const partnersRow2 = [
  { name: "TUIT", logo: tuit },
  { name: "Amity University", logo: amity },
  { name: "Bristol", logo: bristol },
  { name: "Dianzi", logo: dianzi },
  { name: "Duke Kunshan", logo: kunshan },
  { name: "King's College", logo: king },
  { name: "Shanghai University", logo: shanhai },
  { name: "University of Arizona", logo: arizona },
  { name: "Inha University", logo: inha },
];

export default function PartnersSection() {
  return (
    <section className="relative py-24 font-poppins overflow-hidden ">
      {/* Subtle background orbs */}
      <div className="absolute top-0 left-0 w-80 h-80  rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80  rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent mb-12">
          Bizning Hamkorlarimiz
        </h2>
        <p className="text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
          Biz faxr bilan ta’lim, texnologiya va sanoat sohasidagi eng nufuzli
          tashkilotlar bilan hamkorlik qilamiz.
        </p>

        {/* Row 1: Continuous scroll with mask */}
        <div className="relative overflow-hidden mb-14 py-4">
          <div className="absolute inset-0 pointer-events-none"></div>
          <motion.div
            className="flex items-center gap-14 justify-center py-2"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 18, repeat: Infinity }}
          >
            {[...partnersRow1, ...partnersRow1].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-28  border border-blue-100 shadow-lg rounded-2xl flex items-center justify-center  transition-all duration-500  "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-28 h-auto object-contain opacity-90  transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Continuous scroll opposite direction */}
        <div className="relative overflow-hidden">
          <div className="absolute my-4 inset-0 pointer-events-none"></div>
          <motion.div
            className="flex items-center gap-14 justify-center"
            animate={{ x: ["100%", "0%"] }}
          >
            {[...partnersRow2, ...partnersRow2].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-28  border border-indigo-100 shadow-lg rounded-2xl flex items-center justify-center hover:shadow-indigo-400/60 transition-all duration-500  "
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-28 h-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm mt-16 italic tracking-wide">
          Muhammad al-Xorazmiy nomidagi maktab — global hamkorlik orqali
          innovatsion ta’lim sari.
        </p>
      </div>
    </section>
  );
}
