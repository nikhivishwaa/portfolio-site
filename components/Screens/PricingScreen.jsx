import React, { useState } from "react";
import styles from "@/styles/Utility.module.css";
import PricingCard from "../Main/PricingCard";

export default function PricingScreen() {
  const [plans, setPlans] = useState([
    {
      active: false,
      pricing: 59,
      plan: "basic",
      features: [
        "1 home page",
        "2 home page design",
        "unlimited inner page",
        "50 elements",
        "support",
        "vector design",
      ],
      buy: "/",
    },
    {
      active: true,
      pricing: 99,
      plan: "standard",
      features: [
        "2 home page",
        "2 home page design",
        "unlimited inner page",
        "80 elements",
        "support",
        "vector design",
      ],
      buy: "/",
    },
    {
      active: false,
      pricing: 199,
      plan: "sigma",
      features: [
        "3 home page",
        "3 home page design",
        "unlimited inner page",
        "100 elements",
        "support",
        "vector design",
      ],
      buy: "/",
    },
  ]);
  const activateCard = (i) => {
    let changePlan = plans.map((e) => {
      if (e.plan === i) return { ...e, active: true };
      return { ...e, active: false };
    });
    setPlans(changePlan);
  };
  return (
    <>
      <div className="flex flex-col p-5 bg-screen">
        <section className="flex flex-col gap-3 items-center justify-center">
          <span className="font-mulish text-[22px] font-bold text-secondary">
            Pricing
          </span>
          <span
            className={`text-4xl font-inter
           font-bold ${styles.spacing}`}
          >
            Reasonable Pricing Plan
          </span>
          <span
            className={`w-1/2 text-sm font-mulish text-pretty text-center ${styles.spacing}`}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
            consequuntur rem, consectetur dolor deleniti nobis nemo nostrum
            voluptatum
          </span>
        </section>
        <section className="flex gap-10 my-12 justify-center items-center">
          {plans.map((plan, key) => (
            <PricingCard activateCard={activateCard} plan={plan} key={key} />
          ))}
          {/* <PricingCard />
          <PricingCard /> */}
        </section>
      </div>
    </>
  );
}
