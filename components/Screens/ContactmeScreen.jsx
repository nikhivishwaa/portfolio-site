import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import CreativeWork from "../Main/CreativeWork";
import ContactForm from "../Forms/ContactForm";
import ContactTicket from "../Main/ContactTicket";

export default function ContactmeScreen() {
  const [active, setActive] = useState("All Works");
  const [skills, setSkills] = useState([]);
  const chaneActive = (s) => {
    setActive(s);
  };
  return (
    <>
      <div className="flex flex-col p-5 bg-screen">
        <section className="flex flex-col gap-3 items-center justify-center">
          <span className="font-mulish text-[22px] font-bold text-secondary">
            Contact Me
          </span>
          <span
            className={`text-[34px] font-poppins font-bold text-center ${styles.spacing} text-wrap`}
          >
            Get in Touch With Me
          </span>
          <span
            className={`w-2/3 text-xs font-poppins text-gray-400 text-pretty font-medium text-center ${styles.spacing}`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            commodi dicta nesciunt perferendis nihil praesentium aliquid ullam
            hic expedita quia.
          </span>
          <div
            className={`my-4 flex justify-center-items-center font-mulish font-bold text-xs ${styles["joint-btn"]}`}
          ></div>
        </section>
        <section className="flex items-start mx-auto flex-col gap-2">
          <span className="font-mulish mt-2 text-[16px] font-bold text-secondary justify-self-start">
            Contact Me
          </span>
          {/* <div className="flex gap-10 my-2 justify-center items-center max-md:hidden">
            <span className="font-mulish text-[24px] font-bold w-96">
              Get in Touch With Me
            </span>
            <span className="font-mulish text-[12px] overflow-hidden text-ellipsis max-w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              ratione consequuntur nisi!
            </span>
          </div> */}
          <div className="flex gap-5 lg:gap-10 my-2 justify-center items-center flex-wrap xs:flex-col">
            <ContactForm />
            <ContactTicket />
          </div>
        </section>
        <section className="flex flex-col"></section>
      </div>
    </>
  );
}
