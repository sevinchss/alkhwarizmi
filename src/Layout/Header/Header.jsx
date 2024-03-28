import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import "./styles.css";
export const Header = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");
  return (
    <>
      <header className="bg-white border-b border sticky top-0 w-full z-50">
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
                Bosh sahifa
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/courses"
              >
                Kurslar
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#features"
              >
                Taklifimiz
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#team"
              >
                Jamoa
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/#reviews"
              >
                O'quvchilar
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  hover:bg-[#f1f5f9] hover:text-[#0f172a]  h-10 px-4 py-2"
                href="/faq"
              >
                FAQ
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0F172A] text-white hover:bg-[#0f172ae6] h-11 rounded-md px-8"
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
                  className="lucide lucide-zap w-4 h-4 mr-2"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Kirish
              </a>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button className="IconButton" aria-label="Customise options">
                    <HamburgerMenuIcon />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="DropdownMenuContent"
                    sideOffset={5}
                  >
                    <DropdownMenu.Item className="DropdownMenuItem">
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
                        class="lucide lucide-layout-dashboard mr-2 h-4 w-4"
                      >
                        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                      </svg>
                      Kurslar
                    </DropdownMenu.Item>

                    <DropdownMenu.Sub>
                      <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
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
                          class="lucide lucide-sun-moon mr-2 h-4 w-4"
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
                        </svg>{" "}
                        Mavzu sozlamalari
                        <div className="RightSlot">
                          <ChevronRightIcon />
                        </div>
                      </DropdownMenu.SubTrigger>
                      <DropdownMenu.DropdownMenuSeparator />
                      <DropdownMenu.Portal>
                        <DropdownMenu.SubContent
                          className="DropdownMenuSubContent"
                          sideOffset={2}
                          alignOffset={-5}
                        >
                          <DropdownMenu.Item className="DropdownMenuItem">
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
                              class="lucide lucide-sun mr-2 h-4 w-4"
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
                            </svg>{" "}
                            Yorqin mavzu
                          </DropdownMenu.Item>
                          <DropdownMenu.Item className="DropdownMenuItem">
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
                              class="lucide lucide-moon mr-2 h-4 w-4"
                            >
                              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                            Tungi Mavzu (beta)
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator className="DropdownMenu.Separator" />
                          <DropdownMenu.Item className="DropdownMenuItem">
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
                              class="lucide lucide-monitor-smartphone mr-2 h-4 w-4"
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
                            Sistema mavzusi
                          </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Item className="DropdownMenuItem">
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
                        class="lucide lucide-life-buoy mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m4.93 4.93 4.24 4.24"></path>
                        <path d="m14.83 9.17 4.24-4.24"></path>
                        <path d="m14.83 14.83 4.24 4.24"></path>
                        <path d="m9.17 14.83-4.24 4.24"></path>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      Qo'llab-quvvatlash
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="DropdownMenuItem">
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
                        class="lucide lucide-cloud mr-2 h-4 w-4"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                      Cloud 42
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
