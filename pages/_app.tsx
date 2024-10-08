import type { AppProps } from "next/app";
import "styles/styles.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
