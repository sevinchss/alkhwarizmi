import React from "react";
import headsImg from "./images/heads.svg"
export const Section5 = () => {
  return (
    <>
      <section className="mt-36 ">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
            Bizning o'quvchilar
          </h2>
          <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            O'quvchilarimiz nima deydi va ularning natijalari bilan tanishing.
          </p>
        </div>
        <img alt="team" loading="lazy" width="820" height="200" decoding="async" data-nimg="1" class="w-full md:w-2/3 mx-auto dark:filter dark:invert-[0.1]" style={{color:"transparent"}} src={headsImg}/>
      </section>
    </>
  );
};
