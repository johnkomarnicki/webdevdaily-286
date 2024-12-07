/** @type {import('tailwindcss').Config} */
import { colors } from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      alto: {
        50: "#f7f7f7",
        100: "#ededed",
        200: "#d9d9d9",
        300: "#c8c8c8",
        400: "#adadad",
        500: "#999999",
        600: "#888888",
        700: "#7b7b7b",
        800: "#676767",
        900: "#545454",
        950: "#363636",
      },
      turquoise: {
        50: "#eefffb",
        100: "#c6fff2",
        200: "#8effe8",
        300: "#4dfbdb",
        400: "#19e8c8",
        500: "#00dfc0",
        600: "#00a491",
        700: "#028375",
        800: "#08675e",
        900: "#0c554e",
        950: "#003431",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
