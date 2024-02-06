import React from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";

export default function AboutScreen() {
  const handleClick = (e) => {
    console.log("button clicked");
  };

  return (
    <>
      <div className="flex flex-col mt-1 justify-center items-stretch bg-screen">
        <section className="flex flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex gap-8 text-sm font-bold font-inter tracking-widest">
              <button
                className={`py-2 px-5 ${styles["primary-btn"]} ${styles["spacing"]}`}
                onClick={(e) => handleClick(e)}
              >
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start p-5 w-1/2 border-spacing-1 border-red-800">
            <h1 className={`text-2xl font-inter font-bold text-secondary`}>
              About Nikhil
            </h1>
            <p className={`text-5xl font-bold text-balance ${styles.spacing}`}>
              2 Year&apos;s Experience on Web{" "}
              <span className="text-secondary">Development</span>{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              minus quo quibusdam impedit natus, veritatis corporis quasi sed
              eius perspiciatis!
            </p>
            <div className="flex gap-8 text-sm font-bold font-inter tracking-widest">
              <button
                className={`py-2 px-5 ${styles["secondary-btn"]} ${styles["spacing"]}`}
                onClick={(e) => handleClick(e)}
              >
                Main Skills
              </button>
              <button
                className={`py-2 px-5 ${styles["primary-btn"]} ${styles["spacing"]}`}
                onClick={(e) => handleClick(e)}
              >
                Awards
              </button>
              <button
                className={`py-2 px-5 ${styles["primary-btn"]} ${styles["spacing"]}`}
                onClick={(e) => handleClick(e)}
              >
                Education
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
