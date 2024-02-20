import React from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";

export default function HaveProject() {
  return (
    <>
      <div
        className={`p-8 flex md:flex-nowrap flex-wrap-reverse justify-between w-2/3 ${styles["primary-card"]} relative`}
      >
        <div className="flex flex-col gap-3 font-bold font-mulish">
          <span className={`text-secondary text-base`}>Get It Touch</span>
          <span className="font-poppins text-4xl max-md:w-full max-lg:w-4/6 max-xl:w-5/6">
            Have a Project on Your Mind
          </span>
          <span>
            <button
              className={`flex gap-1 my-3 py-2 px-4 text-xs ${styles.spacing} ${styles["secondary-btn"]}`}
            >
              <span>Contact Me</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="border-2 max-md:hidden">
          <span
            className="absolute bottom-0 right-0 h-full w-1/3"
            style={{ backgroundImage: "url('/logo/contactDots.png')" }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "linear-gradient(101deg, #f8fafc, #ffffffb0)",
              }}
            ></div>
          </span>
          <Image
            src={"/logo/contactCutout.png"}
            width={200}
            height={277}
            className="absolute bottom-0 right-20 max-lg:right-5 drop-shadow"
            alt="contact us"
          />
        </div>
      </div>
    </>
  );
}
