import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import Head from "next/head";

// importing fonts
import { Lexend, Exo, Inter, Mulish, Mitr, Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import NavContext from "@/Context/NavContext";
import { useState } from "react";
import Sidebar from "@/components/Navigation/Sidebar";
import { useRouter } from "next/router";
import AdminNavigation from "@/components/Navigation/AdminNavigation";

const mitr = Mitr({
  subsets: ["latin"],
  variable: "--font-mitr",
  weight: ["400", "500"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const exo = Exo({ subsets: ["latin"], variable: "--font-exo" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  weight: ["400", "500"],
});

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();
  const [sidebar, setSidebar] = useState(false);
  const [pathList, setPathList] = useState({
    "/": "Home",
    "/about": "About",
    "/portfolio": "Portfolio",
    "/contact": "Contact",
    "/pricing": "Pricing",
    "/blog": "Blog",
  });
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
      <main
        className={[
          inter.variable,
          mitr.variable,
          exo.variable,
          lexend.variable,
          mulish.variable,
          poppins.variable,
        ].join(" ")}
      >
        {asPath.startsWith("/root") ? (
          <>
            <main className="flex w-full justify-between">
              <AdminNavigation />
              <main className="w-10/12 bg-screen overflow-y-scroll overflow-x-hidden h-[100vh]">
                <Component {...pageProps} />
              </main>
            </main>
          </>
        ) : (
          <>
            <NavContext.Provider value={{ sidebar, setSidebar, pathList }}>
              <main className="sticky top-0 w-full z-10">
                <Navbar />
              </main>
              <Sidebar />
              {/* <main className="flex w-full justify-center items-center bg-screen"> */}
              <Component {...pageProps} />
              {/* </main> */}
            </NavContext.Provider>
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
