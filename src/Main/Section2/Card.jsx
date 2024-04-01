import React from 'react'
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";
import ThemeChanger from '../../Utils/ThemeChanger';

export const Card = ({img,title,text,en, ru, uz}) => {
  const { language } = useContext(LanguageContext);
  return (
    <>
     <div class={`relative overflow-hidden rounded-lg border y  p-2 cursor-pointer ${ThemeChanger(" border-white", "bg-transparent border-[#1E293B] hover:text-[#1E293B]")}  hover:bg-[#f1f5f9] hover:shadow-lg transition-all duration-200 ease-in-out`}>
            <div class="flex flex-col gap-3 justify-between rounded-md p-6">
              <img
                alt="team"
                loading="lazy"
                width="200"
                height="200"
                decoding="async"
                data-nimg="1"
                class="w-20 h-20 dark:filter dark:invert-[0.9]"
                style={{color:"transparent"}}
              src={img}
              />
              <div class="space-y-2">
                <h3 class="font-bold">{language === "en" ? en : language === "rus" ? ru : uz}{title}</h3>
                <p class="text-sm text-[#64748b]">
                 {language === "en" ? en : language === "rus" ? ru : uz}{text}
                </p>
              </div>
            </div>
          </div>
    </>
  )
}
