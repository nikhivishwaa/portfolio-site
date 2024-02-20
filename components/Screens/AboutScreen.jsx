import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import Image from "next/image";
import TitleDescList from "../Main/TitleDescList";
import useSWR from "swr";
import SkillsScreen from "./SkillsScreen";
import HaveProject from "../Main/HaveProject";
import PortfolioScreen from "./PortfolioScreen";
import ContactmeScreen from "./ContactmeScreen";
import BlogScreen from "./BlogScreen";
import HomeScreen from "./HomeScreen";

const data = {
  "main skills": [
    {
      title: "Full Stack Development",
      desc: "I am working on that",
    },
    {
      title: "MERN Stack",
      desc: "I worked through the Scalable apps in Node.JS",
    },
    {
      title: "Next.JS Developer",
      desc: "I build this website using Next.JS and Tailwind CSS",
    },
  ],
  awards: [
    {
      title: "AADHAR Compition Winner",
      desc: "A Project Showcase Event held in SISTec Gandhinagar ",
    },
    {
      title: "IOT-COE Merrit Certification",
      desc: "Hands on Workshop on Arduino and Embebbed System at IOT-COE Bhopal ",
    },
    {
      title: "Next.JS Developer",
      desc: "I build this website using Next.JS and Tailwind CSS",
    },
  ],
  education: [
    {
      title: "B.Tech | CSE-AIDS - 2022-26 Batch",
      desc: "Sagar Institute of Science and Technology (SISTec), Gandhinagar, Bhopal, M.P. India (462036)",
    },
    {
      title: "Higher Secondary Education - 2022 (I Div)",
      desc: "Prerna Kiran Public School, Pipalner, Bhopal, M.P. India (462036)",
    },
    {
      title: "High Shcool Education - 2020 (I Div)",
      desc: "Prerna Kiran Public School, Pipalner, Bhopal, M.P. India (462036)",
    },
  ],
};

export default function AboutScreen() {
  const Informations = ["main skills", "awards", "education"];
  const [infoSection, setInfoSection] = useState(Informations[0]);
  const [dataList, setDataList] = useState(data["main skills"]);
  const handleInfoSection = (e) => {
    setInfoSection(e);
    setDataList(data[e]);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-stretch bg-screen">
        <section className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="flex flex-col justify-center items-center md:w-1/2">
            <div className="flex gap-8 text-sm font-bold font-mulish tracking-widest">
              <button
                className={`py-2 px-5 ${styles["primary-btn"]} ${styles["spacing"]}`}
              >
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center items-start p-5 md:w-1/2 border-spacing-1 border-red-800">
            <h1 className={`text-2xl font-mulish font-bold text-secondary`}>
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
            <div
              className={`flex gap-8 text-sm font-bold font-mulish tracking-widest ${styles.spacing}`}
            >
              {Informations.map((key, i) => (
                <button
                  className={`py-2 px-5 capitalize ${
                    key !== infoSection
                      ? styles["primary-btn"]
                      : `${styles["secondary-btn"]} text-white`
                  } ${styles["spacing"]}`}
                  onClick={() => handleInfoSection(key)}
                  key={i}
                >
                  {
                    key === infoSection
                      ? key
                      : <Image src={`/icons/${key!=="main skills"?key:"skills"}.svg`} alt={key} height={20} width={20}/>}
                </button>
              ))}
            </div>
            <TitleDescList dataList={dataList} />
            <button className="flex gap-2 py-2 px-5 text-sm font-bold font-lexend text-primary border-2 border-primary">
              <span className={styles.spacing}>Download CV</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
              </svg>
            </button>
          </div>
        </section>
        <section className="py-8">
          <SkillsScreen />
        </section>
        <section className="py-8 flex justify-center">
          <HaveProject />
        </section>
        <section className="pt-8 flex justify-center">
          <PortfolioScreen />
        </section>
        <section className="flex justify-center my-3">
          <hr className="border w-10/12" />
        </section>
        <section className="flex justify-center">
          <ContactmeScreen />
        </section>
        <section className="flex justify-center my-10">
          <hr className="border w-10/12" />
        </section>
        <section className="flex justify-center">
          <BlogScreen />
        </section>
      </div>
    </>
  );
}
