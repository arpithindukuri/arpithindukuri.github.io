const colors = require("./util/colors")
const defaultTheme = require('tailwindcss/defaultTheme')


const primary = {
  50: "#fefdf8",
  100: "#fbfaf5",
  200: "#f7f6eb",
  300: "#f4f1e2",
  400: "#f0edd8",
  500: "#ece8ce",
  600: "#bdbaa5",
  700: "#8e8b7c",
  800: "#5e5d52",
  900: "#2f2e29",
};

const primaryLightest = primary[50];
const primaryLighter = primary[300];
const primaryLight = primary[500];
const primaryMid = primary[600];
const primaryDark = primary[900];

const shadowNeuMdXOffset = defaultTheme.spacing[1];
const shadowNeuMdYOffset = defaultTheme.spacing[1];
const shadowNeuMdBlur = defaultTheme.spacing[3.5];
const shadowNeuMdSpread = defaultTheme.spacing[1];


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": primaryLight,
        "primary-dark": primaryDark,
      },
      boxShadow: {
        "neu-md": `${shadowNeuMdXOffset} ${shadowNeuMdYOffset}
                  ${shadowNeuMdBlur} ${shadowNeuMdSpread}
                  ${colors.hexToRGBA(primaryDark, 0.1)}, 
                  -${shadowNeuMdXOffset} -${shadowNeuMdYOffset}
                  ${shadowNeuMdBlur} ${shadowNeuMdSpread}
                  ${colors.hexToRGBA(primaryLightest, 0.4)}`,
        "neu-border-indent-md-primary": `inset 0 0 0 10px red,
        inset 0 0 0 15px orange,
        inset 0 0 0 20px yellow,
        inset 0 0 0 25px green,
        inset 0 0 0 30px blue`,
      },
    },
  },
  plugins: [],
};
