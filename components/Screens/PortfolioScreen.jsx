import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import CreativeWork from "../Main/CreativeWork";

export default function PortfolioScreen(props) {
  const [active, setActive] = useState("All Works");
  const [skills, setSkills] = useState(props.data.projectList);
  const allSection = props.data.allSection;
  const chaneActive = (s) => {
    setActive(s);
  };
  return (
    <>
      <div className="flex flex-col p-5 bg-screen">
        <section className="flex flex-col gap-3 items-center justify-center">
          <span className="font-mulish text-[22px] font-bold text-secondary">
            Portfolio
          </span>
          <span
            className={`w-1/2 text-[34px] font-poppins font-bold text-pretty text-center ${styles.spacing}`}
          >
            My Creative Works
          </span>
          <div
            className={`max-sm:w-11/12 my-8 flex justify-center items-center font-mulish font-bold text-xs text-nowrap box-border ${styles["joint-btn"]} max-sm:overflow-x-scroll`}
          >
            {/* {allSection.map((s, i) => (
              <button
                key={i}
                className={`py-[10px] px-4 ${
                  active === s ? styles["primary-btn"] : ""
                }`}
                onClick={() => chaneActive(s)}
              >
                {s}
              </button>
            ))} */}
          </div>
        </section>
        <section className="flex gap-8 my-12 justify-center items-center flex-wrap">
          {skills.map((plan, key) => (
            <CreativeWork work={plan} key={key} />
          ))}
        </section>
      </div>
    </>
  );
}
