import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {  LanguageProvider } from "./Context/LanguageContext.jsx";
import DarkMode from "./Context/DarkMode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <DarkMode>
      <App />
    </DarkMode>
  </LanguageProvider>
);
