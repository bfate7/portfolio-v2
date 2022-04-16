import "../styles/globals.css";
import DefaultLayout from "../layouts/DefaultLayout";
import { ThemeContextProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeContextProvider>
  );
}

export default MyApp;
