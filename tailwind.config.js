/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#312651",
        secondary: "#444262",
        tertiary: "#FF7754",
        gray1: "#83829A",
        gray2: "#C1C0C8",
        white1: "#F3F4F8",
        lightWhite: "#FAFAFC",
      },
    },
  },
  plugins: [],
};
