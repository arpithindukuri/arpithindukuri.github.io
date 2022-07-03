const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@tailwindcss/typography")],
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  variants: {},
  theme: {
    extend: {
      boxShadow: {
        "1-up":
          "0 -3px 8px -4px rgba(0, 0, 0, 0.08), 0 -4.5px 14px 0 rgba(0, 0, 0, 0.05), 0 -6px 24px 8px rgba(0, 0, 0, 0.03)",
        "1-down":
          "0 3px 8px -4px rgba(0, 0, 0, 0.08), 0 4.5px 14px 0 rgba(0, 0, 0, 0.05), 0 6px 24px 8px rgba(0, 0, 0, 0.03)",
        "1-left":
          "-6px 0 8px -8px rgba(0, 0, 0, 0.08), -4.5px 0 14px 0 rgba(0, 0, 0, 0.05), -6px 0 24px 8px rgba(0, 0, 0, 0.03)",
        "1-right":
          "6px 0 8px -8px rgba(0, 0, 0, 0.08), 4.5px 0 14px 0 rgba(0, 0, 0, 0.05), 6px 0 24px 8px rgba(0, 0, 0, 0.03)",
        2: "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 8px 0 rgba(0, 0, 0, 0.08), 0 4.5px 14px 8px rgba(0, 0, 0, 0.05)",
      },
      scale: {
        101: "1.01",
      },
      fontFamily: {
        defaultFont: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      neu: {
        shadow: {
          indentedSm: `inset 3px 4px 10px 2px rgba(0, 0, 0, 0.2), inset -3px -4px 10px 2px ${colors.neutral[100]}a0`,
          indented: `inset 5px 6px 14px 2px rgba(0, 0, 0, 0.2), inset -5px -6px 14px 2px ${colors.neutral[100]}a0`,
          raisedXs: `1px 2px 6px 1px rgba(0, 0, 0, 0.2), -1px -2px 6px 1px ${colors.neutral[100]}a0`,
          raisedSm: `3px 4px 10px 2px rgba(0, 0, 0, 0.2), -3px -4px 10px 2px ${colors.neutral[100]}a0`,
          raised: `5px 6px 14px 2px rgba(0, 0, 0, 0.2), -5px -6px 14px 2px ${colors.neutral[100]}a0`,
          simpleBorder: `inset 0 0 0 4px ${colors.neutral[500]},
                    inset 0 0 2px 6px rgba(0, 0, 0, 0.2)`,
          lightUpBorder: `inset 0 0 0 2px ${colors.neutral[500]},
                      inset 0 0 0 6px ${colors.neutral[700]},
                      inset 0 0 0 8px ${colors.neutral[500]},
                      inset 0 0 2px 10px rgba(0, 0, 0, 0.2)`,
          lightUpBorderHover: `inset 0 0 0 2px ${colors.neutral[500]},
                          inset 0 0 0 6px #ffffff,
                          inset 0 0 0 8px ${colors.neutral[500]},
                          inset 0 0 2px 10px rgba(0, 0, 0, 0.2),
                          0 0 80px 30px rgba(253, 252, 235, 0.8),
                          inset 0 0 25px 4px rgba(253, 252, 235, 0.1)`,
          lightUpBorderActive: `inset 0 0 0 2px ${colors.neutral[500]},
                            inset 0 0 0 6px ${colors.orange[600]},
                            inset 0 0 0 8px ${colors.neutral[500]},
                            inset 0 0 2px 12px rgba(0, 0, 0, 0.2),
                            0 0 200px 15px ${colors.orange[600]},
                            inset 0 0 25px 4px ${colors.orange[600]}`,
        },
      },
    },
  },
};
