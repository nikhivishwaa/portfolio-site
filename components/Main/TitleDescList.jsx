import Image from "next/image";
import React from "react";
import styles from "@/styles/Utility.module.css";

export default function TitleDescList(props) {
  const { dataList } = props;
  return (
    <>
      <div className="flex p-2 flex-col gap-1 items-start">
        {dataList.map((data, i) => (
          <setction className="flex gap-3 items-start" key={i}>
            <Image
              src="/icons/List.svg"
              height={18}
              width={18}
              alt="skills"
              className="py-[7px]"
            />
            <div
              className={`flex flex-col font-mulish ${styles.spacing} pt-1 items-start justify-center`}
            >
              <p className="capitalize font-bold text-[15px] text-primary">
                {data.title}
              </p>
              <p className="truncate font-medium text-sm text-gray-500">
                {data.desc}
              </p>
            </div>
          </setction>
        ))}
      </div>
    </>
  );
}
