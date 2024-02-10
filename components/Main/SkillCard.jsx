import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import Link from "next/link";

export default function SkillCard(props) {
  const { skill } = props;
  const trimChars = (s) => {
    if (s.length < 80) return s;
    return s.slice(0, 78) + "...";
  };
  return (
    <>
      <div
        className={`flex flex-col gap-[6px] p-5 pl-6 capitalize justify-center items-start min-w-56 max-w-60  ${
          skill.active
            ? `text-[white] ${styles["secondary-card"]}`
            : ` text-primary ${styles["primary-card"]}`
        }`}
      >
        <span className={`rounded-lg p-2 border ${styles["inset-icon"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </span>
        <span className="font-lexend text-[18px] font-bold">{skill.skill}</span>
        <span className="h-[54px] text-pretty text-[12px] font-poppins font-normal text-gray-500 my-3">
          {trimChars(skill.desc)}
        </span>
        <button
          className={`my-3 py-2 px-4 ${
            skill.active ? styles["secondary-btn"] : styles["primary-btn"]
          }`}
        >
          <Link href={skill.url} target="_blank" className="flex gap-2">
            <span className={`font-mulish text-sm font-bold ${styles.spacing}`}>
              Read More
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={skill.active ? "white" : "rgb(10 10 104)"}
              className="w-5 h-5"
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
    </>
  );
}
