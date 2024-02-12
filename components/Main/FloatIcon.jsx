import React from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";

export default function FloatIcon(props) {
  return (
    <>
      <span
        className={`rounded-full p-[10px] border ${styles["primary-card"]} ${props.className}`}
        style={{ ...props.style }}
      >
        <Image
          src={props.src}
          height={100}
          width={100}
          style={{ height:"38px", width:"38px", ...props.logo }}
          className={props.logoClass}
          objectFit="fill"
          alt="loading"
        />
      </span>
    </>
  );
}
