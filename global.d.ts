declare global {
  namespace Jss {
    export interface Screens {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    }

    export interface ColorShades {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
    }

    export interface Colors {
      lightBackground: ColorShades;
      darkBackground: ColorShades;
      grey: ColorShades;
      red: ColorShades;
      orange: ColorShades;
      yellow: ColorShades;
      green: ColorShades;
      teal: ColorShades;
      blue: ColorShades;
      indigo: ColorShades;
      purple: ColorShades;
      pink: ColorShades;
    }

    export interface Spacing {
      px: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      13: string;
      14: string;
      15: string;
      16: string;
      20: string;
      22: string;
      24: string;
      28: string;
      32: string;
      40: string;
      48: string;
      56: string;
      64: string;
    }

    export interface BorderRadius {
      none: string;
      sm: string;
      default: string;
      lg: string;
      full: string;
    }

    export interface BorderWidth {
      default: string;
      0: string;
      2: string;
      4: string;
      8: string;
    }

    export interface BoxShadow {
      default: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      inner: string;
      outline: string;
      none: string;
    }

    export interface FontSize {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
    }

    export interface FontWeight {
      hairline: string;
      thin: string;
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
      black: string;
    }

    export interface LetterSpacing {
      tighter: string;
      tight: string;
      normal: string;
      wide: string;
      wider: string;
      widest: string;
    }

    export interface LineHeight {
      none: string;
      tight: string;
      snug: string;
      normal: string;
      relaxed: string;
      loose: string;
    }

    export interface Bezier {
      button: string;
    }

    export interface NeuShadow {
      indentedSm: string;
      indented: string;
      raisedXs: string;
      raisedSm: string;
      raised: string;
      simpleBorder: string;
      lightUpBorder: string;
      lightUpBorderHover: string;
      lightUpBorderActive: string;
    }

    export interface NeuBG {
      convex: {
        lightBackground: string;
        lightBackgroundDrop: string;
        orange: string;
      };
    }

    export interface Theme {
      screens: Screens;
      colors: Colors;
      spacing: Spacing;
      borderRadius: BorderRadius;
      borderWidth: BorderWidth;
      boxShadow: BoxShadow;
      fontSize: FontSize;
      fontWeight: FontWeight;
      letterSpacing: LetterSpacing;
      lineHeight: LineHeight;
      bezier: Bezier;
      neuShadow: NeuShadow;
      neuBG: NeuBG;
    }

    // type ThemeConfig = import("./styles/Theme");
    // export { ThemeConfig as Theme };
  }
}

export {};
