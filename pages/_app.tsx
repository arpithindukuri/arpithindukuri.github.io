import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "react-jss";
import { theme } from "../styles/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
