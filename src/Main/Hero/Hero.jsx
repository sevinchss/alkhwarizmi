import React from "react";
import img1 from "./images/ZapIcon-64.gif";
import img2 from "./images/hey.svg";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <>
      <section className="container w-full mx-auto  max-w-7xl px-5 flex gap-4 flex-col pt-9 p-6 md:p-12 pb-0 md:pb-0 shadow-sm bg-[#f1f5f9] mt-10 rounded-md  items-start md:items-end md:flex-row  justify-between min-h-64">
        <div className="flex flex-col gap-4 pb-12 w-full">
          <h2 class="text-4xl md:text-5xl text-start xl:text-7xl font-bold text-foreground">
            <span class="block sm:inline-block">42 kunda  &nbsp;</span>
            <TypeAnimation
              sequence={[
                "frontend",
                1000,
              
                "backend",
                1000,
                "mobil",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "4.25rem" , textDecoration: "underline" }}
              repeat={Infinity}
            />
            <br />
            dasturlashni o'rganing
          </h2>
          <p class="max-w-lg text-lg">
            ⚡️ 42 kun o'z ustingizda ishlang va kelajagingiz sari yo'l toping!
          </p>
          <div class="flex flex-col md:flex-row items-start gap-2">
            <a
              class="inline-flex items-center justify-center text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0F172A] text-white hover:bg-[#0f172ae6] h-11 rounded-md px-8  md:text-xl font-semibold md:py-8"
              href="/courses"
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
              Ishtirok etish
            </a>
          </div>
        </div>
        <img alt="team" loading="lazy" width="620" height="200" decoding="async" data-nimg="1" class="w-full md:w-2/5 dark:filter dark:invert-[0.9]" style={{color: "transparent"}} src={img2}/>
      </section>
    </>
  );
};
export default Hero;
