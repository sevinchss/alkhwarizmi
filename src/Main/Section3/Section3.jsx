import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import LanguageChanger from "../../Utils/languageChanger";
import { ThemeApi } from "../../Context/DarkMode";
import ThemeChanger from "../../Utils/ThemeChanger";

const Section3 = () => {
  var { theme } = useContext(ThemeApi);
  return (
    <section className="flex flex-col justify-around mx-auto">
      <div class="mx-auto flex max-w-[58rem] justify-around flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
          {LanguageChanger(
            "Up to this day",
            "До сегодняшнего дня ",
            "Shu kunga qadar"
          )}
        </h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {LanguageChanger(
            "Our goal is to help students become IT professionals.”",
            "Наша цель — помочь студентам стать ИТ-специалистами».",
            " Bizning maqsadimiz - o'quvchilarni IT sohasida professional mutaxassislar bo'lishiga yordam berish."
          )}
        </p>
      </div>
      <dl class="mt-8 grid grid-cols-1 justify-around  px-10 gap-5 sm:grid-cols-3">
        <div class={`rounded-lg   px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md ${ThemeChanger("bg-[#f1f5f9], border-[#f1f5f9]", "bg-[#1E293B] border-[#1E293B] hover:text-[#1E293B]")} `}>
          <dt class="truncate text-xl font-medium ">
          {LanguageChanger(
            "Average team experience",
            "Средний опыт команды",
            " O'rtacha jamoaviy tajriba"
          )}
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight ">
          {LanguageChanger(
            "5+ year",
            "5+ год",
            "5+ yil"
          )}
          </dd>
        </div>
        <div class={`rounded-lg   px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md ${ThemeChanger("bg-[#f1f5f9], border-[#f1f5f9]", "bg-[#1E293B] border-[#1E293B] hover:text-[#1E293B]")} `}>
          <dt class="truncate text-xl font-medium ">
          {LanguageChanger(
            "Total number of students",
            "Общее количество студентов",
            " Umumiy o'quvchilar soni"
          )}
            
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight ">
          {LanguageChanger(
            " 422+",
            " 422+",
            " 422+"
          )}
           
          </dd>
        </div>
        <div class={`rounded-lg   px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md ${ThemeChanger("bg-[#f1f5f9], border-[#f1f5f9]", "bg-[#1E293B] border-[#1E293B] hover:text-[#1E293B]")} `}>
          <dt class="truncate text-xl font-medium ">
          {LanguageChanger(
            "Duration of writing classes",
            "Продолжительность письменных занятий",
            " Yozilgan darslar davomiyligi"
          )}
            
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight ">

          {LanguageChanger(
            "61+ hous",
            "61+ час",
            "61+ soat"
          )}
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default Section3;
