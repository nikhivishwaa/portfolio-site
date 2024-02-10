import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import PricingCard from "../Main/PricingCard";
import SkillCard from "../Main/SkillCard";

export default function SkillsScreen() {
  const [skills, setSkills] = useState([
    {
      active: false,
      skill: "web development",
      desc: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      active: false,
      skill: "app development",
      desc: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      active: false,
      skill: "data analysis",
      desc: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      active: false,
      skill: "ML | DL models",
      desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
      url: "/",
    },
  ]);
  return (
    <>
      <div className="flex flex-col p-5 bg-screen">
        <section className="flex flex-col gap-3 items-center justify-center">
          <span className="font-mulish text-[22px] font-bold text-secondary">
            What We Do
          </span>
          <span
            className={`w-1/2 text-[34px] font-poppins font-bold text-pretty text-center ${styles.spacing}`}
          >
            We are Optimist who Love to work{" "}
            <span className="text-secondary">Together</span>
            <span className="text-4xl font-black">.</span>
          </span>
        </section>
        <section className="flex gap-10 my-12 justify-center items-center">
          {skills.map((plan, key) => (
            <SkillCard skill={plan} key={key} />
          ))}
        </section>
      </div>
    </>
  );
}
