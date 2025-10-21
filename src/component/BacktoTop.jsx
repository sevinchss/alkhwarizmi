import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="backToTop"
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={scrollToTop}
          title="Back to Top"
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center 
                     w-12 h-12 rounded-full shadow-xl backdrop-blur-md 
                     bg-gradient-to-br from-blue-600/90 to-blue-400/90
                     border border-white/20 
                     text-white cursor-pointer transition-all duration-300
                     hover:scale-110 hover:shadow-[0_0_25px_rgba(0,100,255,0.5)]
                     active:scale-95"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="w-6 h-6 group-hover:animate-bounce transition-all duration-300"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </motion.svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
