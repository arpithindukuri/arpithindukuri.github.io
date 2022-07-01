const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography")],
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  variants: {},
  theme: {
    extend: {
      fontFamily: {
        defaultFont: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  darkMode: false,
};
