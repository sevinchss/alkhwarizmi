import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import img1 from "./images/image1.png";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.png";
import img4 from "./images/image4.png";
import site1 from "./images/site1.png";
import site2 from "./images/site2.png";
import site3 from "./images/site3.png";
import site4 from "./images/site4.png";
import site5 from "./images/site5.png";
import site6 from "./images/site6.png";
import site7 from "./images/site7.png";
import site8 from "./images/site8.png";
import site9 from "./images/site9.png";

import { TeamCard } from "./TeamCard";
import LanguageChanger from "../../Utils/languageChanger";
import { ThemeApi } from "../../Context/DarkMode";
const Section4 = () => {
  var { theme } = useContext(ThemeApi);
  return (
    <>
      <section className="space-y-6 pt-36 dark:bg-transparent container">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
          {LanguageChanger(
            "Teams",
            "Команды ",
            "Jamoa"
          )}
            
          </h2>
          <p class="max-w-[85%] leading-normal text-[#64748b] sm:text-lg sm:leading-7">
          {LanguageChanger(
            "Learn programming from experts with international experience",
            "Изучайте программирование у экспертов с международным опытом            ",
            "  Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni o'rganing"
          )}
         
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <TeamCard
            img={img1}
            auth={"Azimjon Pulatov"}
            text={"Software Engineer @ Google, Ex-Amazon, Ex-Facebook"} site1={site1} site2={site2} site3={site3}
          ></TeamCard>
          <TeamCard img={img2} auth={"Muhammadyusuf Abdullaev"} text={"Software Engineer @ Google, Ex-Amazon, Ex-Facebook" } site1={site4} site2={site5} ></TeamCard>
          <TeamCard img={img3} auth={"Jasurbek Zokirov"} text={"Software Engineer @ Google, Ex-Amazon, Ex-Facebook"} site1={site6} site2={site7}></TeamCard>
          <TeamCard img={img4} auth={"Otabek Nurmatov"} text={"Software Engineer @ Google, Ex-Amazon, Ex-Facebook"} site1={site8} site2={site9}></TeamCard>

        </div>
      </section>
    </>
  );
};

export default Section4;
