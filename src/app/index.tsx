import { AppProps } from "next/app";
import { ThemeProvider } from "@gravity-ui/uikit";

import { BaseLayout } from "@/widgets/layouts";
import "@gravity-ui/uikit/styles/fonts.css";
import "@gravity-ui/uikit/styles/styles.css";
import "./styles/index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme="light">
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}
