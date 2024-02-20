/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        exo: ["var(--font-exo)"],
        lexend: ["var(--font-lexend)"],
        mulish: ["var(--font-mulish)"],
        mitr: ["var(--font-mitr)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundColor: {
        primary: "#0a0a68",
        secondary: "#f7faff",
        screen: "#e9f2ff",
      },
      colors: {
        primary: "#0a0a68",
        secondary: "#ff0075",
      },
      screens: {
        "xsm": { max: "450px" },
        "xxsm": { max: "350px" },
      },
    },
  },
  plugins: [],
};
