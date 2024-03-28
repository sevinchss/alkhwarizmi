import React from "react";
import img1 from "./images/ZapIcon-64.gif";
import img2 from "./images/hero-2.svg";

export const Section6 = () => {
  return (
    <>
      <section className="p-8 md:pt-24 pb-0 flex flex-col gap-12 ">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
            Sizni qiziqtira oldikmi?
          </h2>
          <p class="max-w-5xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni
            o'rganishni boshlang!
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center py-2 gap-1 md:gap-3">
            <a
              class="inline-flex items-center justify-center text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0F172A] text-white hover:bg-[#0f172ae6] rounded-md   font-semibold          h-10 px-4 py-2"
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
            <span class="border-l"></span>
            <a class="inline-flex items-center justify-center rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  bg-white hover:bg-[#f1f5f9] hover:text-[#0f172a] h-10 px-4 py-2" href="/faq">Savolingiz bormi?</a>
          </div>
          <img alt="team" loading="lazy" width="620" height="200" decoding="async" data-nimg="1" class="w-full md:w-2/5 mx-auto dark:filter dark:invert-[0.85]" style={{color: "transparent"}} src={img2}/>
        </div>
      </section>
    </>
  );
};
