import React, { useContext } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
import { LanguageContext } from "../../Context/LanguageContext";
import LanguageChanger from "../../Utils/languageChanger";
import ThemeChanger from "../../Utils/ThemeChanger";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { ThemeApi } from "../../Context/DarkMode";
export const Header = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  var { theme, setTheme } = useContext(ThemeApi);
  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <>
      <header
        className={`border-b   fixed  top-0 w-full z-50  ${ThemeChanger(
          "bg-white",
          "bg-[#020817] border-b-[#1E293B]"
        )}`}
      >
        <div className="container w-full mx-auto py-5 max-w-7xl px-5">
          <nav className="flex items-center justify-between">
            <a href="/">
              <div className="flex items-center gap-2">
                <svg
                  width="693"
                  height="452"
                  viewBox="0 0 693 452"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <path
                    d="M324 159.5L373.5 0L356 135H523L335.5 445L475 159.5H324Z"
                    className="fill-primary/20"
                  ></path>
                  <path
                    d="M322 159.5L371.5 0L354 135H521L333.5 445L473 159.5H322Z"
                    className="fill-primary/20"
                  ></path>
                  <path
                    d="M597.341 0H651.864L693 130.5L644 198C635.5 188 639.5 198 644 198L556.433 321.525H678.517L660.892 449H333.758L520.413 137.418H353.584L373.5 0H597.341Z"
                    className="fill-primary"
                  ></path>
                  <path
                    d="M373.983 0H211.983L16 260L0 369H198L184.483 451.5H330.483L362.983 250H184.983L373.983 0Z"
                    className="fill-primary"
                  ></path>
                </svg>
              </div>
            </a>
            <div className="hidden md:flex gap-1">
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/"
              >
                {LanguageChanger("Home", "Главное", "Bosh sahifa")}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/courses"
              >
                {LanguageChanger("Courses", "Курсы", "Kurslar")}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#features"
              >
                {LanguageChanger("Features", "предложение", "Taklifimiz")}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#team"
              >
                {LanguageChanger("Team", "Команды", "Jamoa")}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#reviews"
              >
                {LanguageChanger("Students", "Студенты", "  O'quvchilar")}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/faq"
              >
                {LanguageChanger("FAQ", "ФАК", "FAQ")}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={handleLanguageChange}
                className={`cursor-pointer outline-none ${ThemeChanger(
                  " text-[#0f172a] bg-white",
                  "text-[#f1f5f9] bg-[#020817] "
                )}`}
              >
                <option value="uzb" selected>
                  UZ
                </option>
                <option value="rus">RUS</option>
                <option value="en">ENG</option>
              </select>
              <div className="flex items-center gap-2">
                <a
                  class={`inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   h-11 rounded-md px-8 ${ThemeChanger(
                    "bg-[#0F172A] hover:bg-[#0f172ae6]  text-white",
                    "bg-white text-[#0F172A] hover:bg-[#f8fafce6] "
                  )}`}
                  href="/login"
                >
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
                    class="lucide lucide-zap w-4 h-4 mr-2"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
              {LanguageChanger("Log in", "Вход", "Kirish")}
                </a>
                <Menu className="">
                  <MenuHandler>
                    <div
                      className={`shadow-none ${ThemeChanger(
                        "text-black bg-white",
                        "bg-transparent text-white"
                      )} hover:rounded-full hover:bg-[#f1f5f9] cursor-pointer  overflow-x-hidden  p-0 sm:py-3 sm:px-6`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                      </svg>
                    </div>
                  </MenuHandler>
                  <MenuList className="z-50 overflow-x-hidden">
                    <MenuItem className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent text-black focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-layout-dashboard mr-2 h-4 w-4"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      <span>
                        {LanguageChanger("Kurslar", "Курсы", "Courses")}
                      </span>
                      <span className="ml-auto text-xs text-black tracking-widest opacity-60">
                        ⇧⌘K
                      </span>
                    </MenuItem>
                    <Menu placement="left-start">
                      <MenuHandler>
                        <div className="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent text-black">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-sun-moon mr-2 h-4 w-4"
                          >
                            <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.9 4.9 1.4 1.4"></path>
                            <path d="m17.7 17.7 1.4 1.4"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.3 17.7-1.4 1.4"></path>
                            <path d="m19.1 4.9-1.4 1.4"></path>
                          </svg>
                          <span>
                            {LanguageChanger(
                              "Mavzu sozlamalari",
                              "Настройки темы",
                              "Theme settings"
                            )}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-right ml-auto h-4 w-4"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </div>
                      </MenuHandler>
                      <MenuList className="z-50 overflow-x-hidden">
                        <MenuItem>
                          <button
                            onClick={() => {
                              setTheme("light");
                            }}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-secondary text-black"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-sun mr-2 h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="4"></circle>
                              <path d="M12 2v2"></path>
                              <path d="M12 20v2"></path>
                              <path d="m4.93 4.93 1.41 1.41"></path>
                              <path d="m17.66 17.66 1.41 1.41"></path>
                              <path d="M2 12h2"></path>
                              <path d="M20 12h2"></path>
                              <path d="m6.34 17.66-1.41 1.41"></path>
                              <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                            <span>
                              {LanguageChanger(
                                "Yorqin mavzu",
                                "Светлая тема",
                                "Vibrant theme"
                              )}
                            </span>
                          </button>
                        </MenuItem>
                        <MenuItem>
                          <button
                            onClick={() => setTheme("dark")}
                            role="menuitem"
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-black"
                            tabIndex="-1"
                            data-orientation="vertical"
                            data-radix-collection-item=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-moon mr-2 h-4 w-4"
                            >
                              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                            <span>
                              {LanguageChanger(
                                "Tungi mavzu (beta)",
                                "Ночная тема",
                                "Night theme"
                              )}
                            </span>
                          </button>
                        </MenuItem>
                        <div
                          role="separator"
                          aria-orientation="horizontal"
                          className="-mx-1 my-1 h-px bg-[#f1f5f9]"
                        ></div>
                        <MenuItem>
                          <button
                            onClick={() => setTheme("light")}
                            role="menuitem"
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-black"
                            tabIndex="-1"
                            data-orientation="vertical"
                            data-radix-collection-item=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-monitor-smartphone mr-2 h-4 w-4"
                            >
                              <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path>
                              <path d="M10 19v-3.96 3.15"></path>
                              <path d="M7 19h5"></path>
                              <rect
                                width="6"
                                height="10"
                                x="16"
                                y="12"
                                rx="2"
                              ></rect>
                            </svg>
                            <span>
                              {LanguageChanger(
                                "Sistema mavzusi",
                                "Системная тема",
                                "System theme"
                              )}
                            </span>
                          </button>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    <div className="-mx-1 my-1 h-px bg-[#f1f5f9]"></div>
                    <MenuItem className="p-0">
                      <button
                        target="_blank"
                        role="menuitem"
                        className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-black"
                        tabIndex="-1"
                        data-orientation="vertical"
                        data-radix-collection-item=""
                        href="https://t.me/yordam42"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-life-buoy mr-2 h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <span>
                          {LanguageChanger(
                            "Qo'llab-quvvatlash",
                            "Поддержка",
                            "Support"
                          )}
                        </span>
                      </button>
                    </MenuItem>

                    <MenuItem
                      role="menuitem"
                      className="w-full relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-black"
                      tabIndex="-1"
                      data-orientation="vertical"
                      data-radix-collection-item=""
                      href="/cloud"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-cloud mr-2 h-4 w-4"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                      Cloud 42
                      <span className="ml-auto text-xs tracking-widest opacity-60">
                        ⇧⌘C
                      </span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
