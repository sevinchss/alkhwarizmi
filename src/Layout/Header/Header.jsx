import React from "react";

export const Header = () => {
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
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#f1f5f9] hover:text-[#0f172a] h-10 w-10 outline-none"
                type="button"
                id="radix-:r2:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
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
                  className="lucide lucide-menu w-5 h-5"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
