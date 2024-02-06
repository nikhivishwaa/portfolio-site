import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

// importing fonts
import { Exo, Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x3
2.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x1
6.png"
        />
      </Head>
      <main className={(inter.variable, poppins.variable, exo.variable)}>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
