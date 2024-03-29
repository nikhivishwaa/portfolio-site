import React, { useRef, useState } from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";

export default function ContactTicket(props) {
  return (
    <>
      <div
        className={`max-xxs:w-[240px] max-xs:w-[290px] xs:max-w-96 xs:min-w-72 xs:pt-8 flex flex-col gap-3 font-mulish sm:h-[405px] ${styles.contact}`}
      >
        <Image
          src={"/logo/support.png"}
          height={250}
          width={350}
          className="mx-auto xs:mx-4 rounded-[6px] xs:w-[352px] aspect-[3/2] w-11/12 max-xs:hidden object-cover"
          alt="contact us"
        />

        <div
          className={`${styles["purple-card"]} flex justify-start items-center gap-4 p-4 py-6 max-xxs:px-0 max-xs:flex-col`}
        >
          <span className={`rounded-lg p-4 border ${styles["inset-icon"]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </span>
          <div className="flex flex-col justify-start font-medium text-base font-poppins max-xxs:text-sm  max-xs:items-center">
            <p>{props.data.phone}</p>
            <p>{props.data.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
