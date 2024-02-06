import React from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";

export default function HomeScreen() {
  const handleClick = (e) => {
    console.log("button clicked");
  };

  return (
    <>
      <div
        className="flex mt-1 h-96 justify-evenly items-center"
        style={{ backgroundImage: "linear-gradient(113deg, #ecf1f6, #ffffff)" }}
      >
        <div className="flex flex-col">
          <div className="flex gap-8 text-sm font-bold font-inter tracking-widest">
            <button
              className={`rounded-sm py-2 px-3 ${styles["primary-btn"]} ${styles["spacing"]}`}
              onClick={(e) => handleClick(e)}
            >
              Hire Me
            </button>
            <button
              className={`flex gap-2 items-center rounded-sm py-2 px-3 ${styles["primary-btn"]}  ${styles["spacing"]}`}
              onClick={(e) => handleClick(e)}
            >
              <span>Download CV</span>
              <Image src="/icons/downloadFile.svg" width={20} height={20} />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>ok</h1>
        </div>
      </div>
    </>
  );
}
