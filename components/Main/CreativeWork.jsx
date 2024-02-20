import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CreativeWork(props) {
  const { work } = props;
  const trimChars = (s) => {
    if (s.length < 80) return s;
    return s.slice(0, 78) + "...";
  };
  return (
    <>
      <div
        className={`m-auto max-sm:flex-col-reverse max-sm:w-10/12 flex p-1 justify-center items-center sm:w-[485px] lg:w-1/3  text-primary ${styles["primary-card"]}`}
      >
        <div
          className={`flex flex-col gap-[6px] p-5 pl-6 capitalize justify-center items-start sm:w-1/2`}
        >
          <span
            className={`rounded-md px-3 py-1 pt-2 border ${styles["inset-icon"]} font-poppins font-semibold text-[10px]`}
          >
            Product Design
          </span>
          <span className="font-lexend text-[18px] font-bold h-[54px] mt-1 text-ellipsis overflow-hidden">
            {work.title}
          </span>
          <span className="h-[54px] text-pretty text-[12px] font-poppins font-normal text-gray-500 my-2  truncate overflow-hidden ...">
            {trimChars(work.desc)}
          </span>
          <button
            className={`my-3 py-2 px-4 ${
              work.active ? styles["secondary-btn"] : styles["primary-btn"]
            }`}
          >
            <Link href={work.url} target="_blank" className="flex gap-[6px]">
              <span
                className={`font-mulish text-xs font-extrabold ${styles.spacing}`}
              >
                Explore More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={work.active ? "white" : "rgb(10 10 104)"}
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </button>
        </div>
        <div className="flex justify-center items-center sm:w-1/2">
          <Image
            src={"/logo/contactCutout.png"}
            height={230}
            width={180}
            className="rounded-lg border object-cover"
            alt="work snap"
          />
        </div>
      </div>
    </>
  );
}
