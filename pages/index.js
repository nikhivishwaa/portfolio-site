import Image from "next/image";
import { Inter } from "next/font/google";
import AboutScreen from "@/components/Screens/AboutScreen";
import HomeScreen from "@/components/Screens/HomeScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <HomeScreen />
      </section>
      <AboutScreen />
    </>
  );
}
