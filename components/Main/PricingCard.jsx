import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import Link from "next/link";

export default function PricingCard(props) {
  const { plan, activateCard } = props;
  return (
    <>
      <div
        className={`flex flex-col gap-[6px] p-5 capitalize justify-center items-center min-w-64 max-w-72  ${
          plan.active
            ? `text-[white] ${styles["secondary-card"]}`
            : ` text-primary ${styles["primary-card"]}`
        }`}
        onClick={() => activateCard(plan.plan)}
      >
        <span className="font-inter text-2xl font-bold">
          <sup>&#36;</sup> <span className="text-3xl">{plan.pricing}</span>
        </span>
        <span className="font-lexend text-[22px] font-bold my-2">
          {plan.plan}
        </span>
        {plan.features.map((d, i) => (
          <p
            key={i}
            className={`font-semibold text-[13px] font-mulish ${styles.spacing}`}
          >
            {d}
          </p>
        ))}
        <button
          className={`my-3 py-2 px-4 ${
            plan.active ? styles["secondary-btn"] : styles["primary-btn"]
          }`}
        >
          <Link href={plan.buy} target="_blank" className="flex gap-2">
            <span className={`font-mulish text-sm font-bold ${styles.spacing}`}>
              Purchase Now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={plan.active ? "white" : "rgb(10 10 104)"}
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
