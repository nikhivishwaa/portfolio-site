import React from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";
import FloatIcon from "../Main/FloatIcon";
import Link from "next/link";

export default function HomeScreen(props) {
  const handleClick = (e) => {
    console.log("cv...");
  };

  return (
    <>
      <div
        className="flex justify-center items-center p-5 py-14 md:py-20 md:flex-nowrap flex-wrap-reverse gap-5"
        style={{ backgroundImage: "linear-gradient(113deg, #ecf1f6, #ffffff)" }}
      >
        <div
          className={`md:w-1/2 xl:w-4/12 flex font-poppins flex-col gap-1 font-bold justify-center md:items-start items-center ${styles.spacing}`}
        >
          <p className="text-3xl xxs:text-[42px]">
            Hi I&apos;m&nbsp;
            <span className="text-secondary">{props.data.name}</span>
          </p>
          <p className="xxs:text-2xl text-xl font-poppins">
            {props.data.profile}
          </p>
          <p className="text-xs py-3 font-poppins font-medium text-gray-500 overflow-hidden text-pretty text-ellipsis h-[44px] ">
            {props.data.bio}
          </p>
          <div className="flex py-4 gap-6 text-xs font-bold font-mulish flex-wrap-reverse justify-center items-center">
            <button
              className={`rounded-sm py-3 px-6 ${styles["secondary-btn"]} ${styles["spacing"]}`}
              onClick={(e) => handleClick(e)}
            >
              Hire Me
            </button>
            <Link href={props.data.cvUrl} target="_blank">
              <button
                className={`flex gap-1 items-center rounded-sm py-3 px-4 ${styles["primary-btn"]}  ${styles["spacing"]}`}
                onClick={(e) => handleClick(e)}
              >
                <span>Download CV</span>
                <Image
                  src="/icons/downloadFile.svg"
                  width={16}
                  height={16}
                  alt="download"
                />
              </button>
            </Link>
          </div>
          <div className="lg:flex justify-end w-full hidden">
            <FloatIcon src="/logo/NextJS.png" logoClass="rounded-full" />
          </div>
        </div>
        <div className="lg:w-1/2 relative xl:w-5/12 md:mt-12 flex justify-evenly items-center">
          <div
            className="relative rounded-full lg:w-[370px] md:w-[300px] w-[230px] aspect-[1/1]"
            style={{
              backgroundImage: "linear-gradient(51deg, #dfe8fc, white)",
              border: "12px solid white",
              boxShadow: "2px 2px 4px 1px #a99cff",
            }}
          >
            <Image
              src="/logo/photo.png"
              width={400}
              height={500}
              alt="profile"
              className="rounded-full absolute bottom-0 w-[100%] aspect-[4/5]"
            />
          </div>
          <div className="stack lg:flex flex-col justify-center items-center gap-5 hidden">
            <FloatIcon src="/logo/MongoDB.png" />
            <FloatIcon src="/logo/ExpressJS.png" />
            <FloatIcon src="/logo/ReactJS.png" />
            <FloatIcon src="/logo/NodeJS.png" />
          </div>
          <FloatIcon
            src="/logo/Django.png"
            className="absolute hidden lg:inline"
            style={{ bottom: "0px", left: "0px" }}
          />
        </div>
      </div>
    </>
  );
}
