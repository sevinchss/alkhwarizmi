import React from "react";
import img1 from "./images/ZapIcon-64.gif";
import img2 from "./images/hey.svg";
import { TypeAnimation } from "react-type-animation";
import "./styles.css";
import LanguageChanger from "../../Utils/languageChanger";
import ThemeChanger from "../../Utils/ThemeChanger";
export const Hero = () => {
  return (
    <>
      <section className={`container  w-full mx-auto  max-w-7xl px-5 flex gap-4 flex-col pt-9 p-6 md:p-12 pb-0 md:pb-0 shadow-sm  mt-32 rounded-md  items-start md:items-end md:flex-row  justify-between min-h-64 ${ThemeChanger("bg-[#f1f5f9] ","bg-[#1E293B]" )}`} >
        <div className="flex flex-col gap-4 pb-12 w-full">
          <h2 class="text-4xl md:text-5xl text-start xl:text-7xl font-bold text-foreground">
            <span
              class="block sm:inline-block md:text-5xl
              xl:text-7xl "
            >
              {LanguageChanger("In 42 days", "За 42 дня ", "42 kunda ")}
              &nbsp;
            </span>
            
            <TypeAnimation
              sequence={[`${LanguageChanger("frontend", "фронтенд","frontend")}`, 1000, "backend", 1000, "mobil", 1000]}
              speed={50}
              style={{ fontSize: "4.25rem", textDecoration: "underline" }}
              repeat={Infinity}
            />
            <br />
            {LanguageChanger(
              "learn programming",
              "изучать программирование ",
              "dasturlashni o'rganing "
            )}
          </h2>
          <p class="max-w-lg text-lg">
            {LanguageChanger(
              "⚡️42 days work on yourself and find a path to your future!",
              "⚡️42 дня работайте над собой и найдите путь в свое будущее! ",
              "⚡️ 42 kun o'z ustingizda ishlang va kelajagingiz sari yo'l toping! "
            )}
          </p>
          <div class="flex flex-col md:flex-row items-start gap-2">
            <a
              class={`inline-flex items-center justify-center text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   h-12 rounded-md px-8  md:text-xl font-semibold md:py-10"
              href="/courses" cursor-pointer ${ThemeChanger(
                "bg-[#0F172A] hover:bg-[#0f172ae6] text-white",
                "bg-white text-[#0F172A] hover:bg-[#0f172ae6] hover:text-white"
              )}`}
            >
              <img
                alt="ZapIcon"
                loading="lazy"
                width="24"
                height="24"
                decoding="async"
                data-nimg="1"
                class="mr-2"
                style={{ color: "transparent" }}
                src={img1}
              />
              {LanguageChanger("Participation", "Участие ", "Ishtirok etish ")}

              
            </a>
          </div>
        </div>
        <img alt="team" loading="lazy" width="620" height="200" decoding="async" data-nimg="1" className={`w-full md:w-2/5 ${ThemeChanger("invert-0", "filter invert-[0.9]")}`} src="https://42.uz/home/hey.svg" style={{ color: 'transparent' }} />
      </section>
    </>
  );
};
export default Hero;
