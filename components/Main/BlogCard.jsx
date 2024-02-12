import React from "react";
import styles from "@/styles/Utility.module.css";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard(props) {
  const { blog } = props;
  return (
    <>
      <div
        className={`flex flex-col gap-4 p-4 capitalize justify-center items-start min-w-56 max-w-60 text-primary ${styles["primary-card"]}`}
      >
        <Image
          height={200}
          width={200}
          src={"/logo/contactCutout.png"}
          style={{ objectFit: "contain", height: "200px", width: "200px", borderRadius:"6px" }}
          alt="loading blog"
        />
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center gap-2 text-[10px] font-medium text-gray-400 font-poppins">
            <span className={`rounded-full p-1 border ${styles["inset-icon"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
            </span>
            <p>Admin</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-[10px] font-medium text-gray-400 font-poppins">
            <span className={`rounded-full p-1 border ${styles["inset-icon"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p>5 Comments</p>
          </div>
        </div>
        <Link href={blog.url} target="_blank">
          <div className="font-lexend text-sm font-semibold text-ellipsis overflow-hidden h-10">
            {blog.title}
          </div>
        </Link>
      </div>
    </>
  );
}
