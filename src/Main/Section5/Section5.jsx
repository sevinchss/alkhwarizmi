import React from "react";
import headsImg from "./images/heads.svg";
import person1 from "./images/person1.png";
import company1 from "./images/company.png";
import Slider from "react-slick";
import LanguageChanger from "../../Utils/languageChanger";
export const Section5 = () => {
  const settings = {
    dots: true,
    overflow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Shukhrat Mirrakhimov",
      company: "Backend Dev",
      companyImg: company1,
      description:
        "I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer.    I have always been so curious about working at Google and now I am super excited ",
      img: person1,
    },
    {
      name: "Shukhrat Mirrakhimov",
      company: "Backend Dev",
      companyImg: company1,
      description:
        "I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer.    I have always been so curious about working at Google and now I am super excited ",
      img: person1,
    },
  ];
  return (
    <>
      <section className="mt-36 flex flex-col gap-2 ">
        <img
          alt="team"
          loading="lazy"
          width="820"
          height="200"
          decoding="async"
          data-nimg="1"
          class="w-full md:w-2/3 mx-auto dark:filter dark:invert-[0.1]"
          style={{ color: "transparent" }}
          src={headsImg}
        />
        <div>
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 gap-2 text-center">
            <h2 class="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
              {LanguageChanger(
                "Our students            ",
                "Наши студенты                ",
                " Bizning o'quvchilar"
              )}
            </h2>
            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {LanguageChanger(
                " Find out what our readers are saying and their results.                ",
                "Узнайте, что говорят наши читатели, и их результаты.                ",
                " O'quvchilarimiz nima deydi va ularning natijalari bilan tanishing."
              )}
            </p>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item, key) => (
              <div className="flex flex-col justify-around gap-20 container mt-10">
                <div
                  key={key}
                  className=" w-[744px] h-[318px] text-center border  rounded-md  overflow-x-hidden [&::-webkit-scrollbar]:[display:none]"
                >
                  <div className=" flex flex-row px-5 py-5 items-center gap-5 rounded-lg border bg-white text-[#020817] shadow-sm rounded-b-none border-none">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-full w-[72px] h-[72px]"
                      width={100}
                      height={100}
                    />
                    <div className="flex flex-col gap-3 ">
                      <h1 className=" text-xl font-semibold">{item.name}</h1>
                      <div className="flex flex-row gap-2 ">
                        <p className="text-xs md:text-lg flex  flex-col md:flex-row  gap-2">
                          {item.company}
                        </p>
                        <img
                          src={item.companyImg}
                          alt=""
                          className="h-[24px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-left pt-5 flex flex-col gap-2">
                    <p>{item.description}</p>
                    <div className="flex items-start md:items-center flex-col md:flex-row gap-1 text-lg font-semibold">
                      <span class="mr-2">5.0</span>
                      <div class="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          class="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          class="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          class="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          class="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          class="w-4 h-4 fill-yellow-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          ></path>
                        </svg>
                      </div>
                      <a
                        class="flex gap-1 items-center"
                        href="https://www.linkedin.com/posts/javokhirbek-kh_coding-google-intern-activity-7038846041785307136-_APB/?utm_source=share&amp;utm_medium=member_desktop"
                      >
                        on LinkedIn
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-external-link w-4 h-4"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
