import Head from "next/head";
import "tailwindcss/tailwind.css";
import { MainContextProvider } from "../context/MainContext";
import Layout from "../layoutes/Layoute";

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContextProvider>
  );
}

export default MyApp;
