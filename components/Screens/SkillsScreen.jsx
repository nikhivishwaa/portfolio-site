import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import PricingCard from "../Main/PricingCard";
import SkillCard from "../Main/SkillCard";

export default function SkillsScreen({ data }) {
  const [skills, setSkills] = useState(data);
  return (
    <>
      <div className="flex flex-col flex-wrap p-5 bg-screen">
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
        <section className="flex gap-10 my-12 flex-wrap justify-center items-center">
          {skills.map((plan, key) => (
            <SkillCard skill={plan} key={key} />
          ))}
        </section>
      </div>
    </>
  );
}
