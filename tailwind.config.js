/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Soleil: ["Soleil"],
        poppins: "Poppins",
      },
      backgroundImage: {
        "hero-bg": "url('../images/bg.webp')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      keyframes: {
        slipp: {
          "0%": {
            transform: "rotate(-12deg)",
          },
          "100%": {
            transform: "rotate(-12deg)",
          },
          "50%": {
            transform: "rotate(12deg)",
          },
        },
        
        text: {
          "0%": {
            backgroundPosition: "0",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100%",
            backgroundSize: "200% 200%",
          },
          "100%": {
            backgroundPosition: "0",
            backgroundSize: "200% 200%",
          },
        },
        "rotate-y": {
          "0%": {
            transform: "rotateY(360deg)",
          },
          "100%": {
            transform: "rotateY(0)",
          },
        },
        typing: {
          "0%": {
            visibility: "hidden",
            width: "0",
          },
          "100%": {
            width: "70%",
          },
        },
        floting: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(15px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slipp: "slipp 1s infinite both",
        text: "text 5s ease-in infinite",
        "rotate-y": "rotate-y 1s infinite both",
        typing: "typing 7s steps(50)",
        floting: "floting 2s infinite",
      },
      colors: {
        alkPrimary: "#004AAD", // deep blue (main logo color)
        alkSecondary: "#FFD700", // golden yellow accent
        alkGray: "#F5F6FA", // light gray background
        alkText: "#1E1E1E", // dark text
      },
    },
    screens: {
      sm1: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      rem: ["REM"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
