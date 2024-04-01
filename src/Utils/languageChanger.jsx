import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

const LanguageChanger = (en, ru, uz) => {
  const { language } = useContext(LanguageContext);
  let text = language === "en" ? en : language === "rus" ? ru : uz;
  return text;
};
export default LanguageChanger;
