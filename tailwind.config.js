const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      base: {
        100: "#F2FBF9",
        200: "#DCE8E2",
        800: "#303633",
        900: "#1C211E"
      },
      neutral: {
        100: "#F5F5F5",
        200: "#E0E0E0",
        300: "#CCCCCC",
        400: "#B8B8B8",
        500: "#A3A3A3",
        600: "#8F8F8F",
        700: "#7A7A7A",
        800: "#666666",
        900: "#525252",
        950: "#383838"
      },
      primary: {
        100: "#FFF6F5",
        200: "#FFBDB3",
        300: "#FF9080",
        400: "#FF5940",
        500: "#FF381A",
        600: "#EA1F00",
        700: "#BF1900",
        800: "#951400",
        900: "#6A0E00",
        950: "#400800"
      },
      accent: {
        100: "#F3F6F7",
        200: "#DCE5E8",
        300: "#C4D4D8",
        400: "#ACC3C8",
        500: "#95B2B9",
        600: "#7DA1A9",
        700: "#65909A",
        800: "#567A82",
        900: "#46646A",
        950: "#27373B"
      }
    },
    extend: {
      fontFamily: {
        main: ["IBM Plex Mono", "monospace"],
        display: ["Piazzolla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
