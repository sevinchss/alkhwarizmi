import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Theme } from "../../Context/DarkMode";

const Section3 = () => {
  var { theme } = useContext(Theme);
  return (
    <section className="flex flex-col justify-around mx-auto">
      <div class="mx-auto flex max-w-[58rem] justify-around flex-col items-center space-y-4 text-center">
        <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
          Shu kunga qadar
        </h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Bizning maqsadimiz - o'quvchilarni IT sohasida professional
          mutaxassislar bo'lishiga yordam berish.
        </p>
      </div>
      <dl class="mt-8 grid grid-cols-1 justify-around  px-10 gap-5 sm:grid-cols-3">
        <div class="rounded-lg bg-[#f1f5f9] px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md">
          <dt class="truncate text-xl font-medium text-[#0f172a]">
            O'rtacha jamoaviy tajriba
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight text-[#020817]">
            5+ yil
          </dd>
        </div>
        <div class="rounded-lg bg-[#f1f5f9] px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md">
          <dt class="truncate text-xl font-medium text-[#0f172a]">
            Umumiy o'quvchilar soni
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight text-[#020817]">
            422+
          </dd>
        </div>
        <div class="rounded-lg bg-[#f1f5f9] px-4 py-5 shadow flex flex-col gap-4 sm:p-6 hover:bg-[#f1f5f9] cursor-pointer transition-all hover:shadow-md">
          <dt class="truncate text-xl font-medium text-[#0f172a]">
            Yozilgan darslar davomiyligi
          </dt>
          <dd class="mt-1 text-5xl font-semibold tracking-tight text-[#020817]">
            61+ soat
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default Section3;
