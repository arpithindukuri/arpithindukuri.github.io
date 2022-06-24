import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "react-jss";
import { theme } from "../styles/Theme";
import Layout from "../components/Layout";
import injectSheet from "react-jss";

const style = {
  "@global": {
    body: {
      backgroundColor: theme.colors.lightBackground[500],
    },
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default injectSheet(style)(App);
