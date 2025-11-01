import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Formulas from "../component/Formula";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-alkGray font-sans">
      {/* FON — BIR MARTA, FIXED QATLAM */}
      <Formulas/>

      {/* KONTENT — FON USTIDA */}
      <Header />
      <main className="relative z-10 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
