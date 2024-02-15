import Link from "next/link";
import React from "react";

export default function Slidebar(props) {
  const { pathList, asPath, open } = props;
  console.log(open)
  return (
    <>
      <div className={`absolute right-0 bottom-0 p-5 gap-4 bg-screen h-full ${open ? "flex flex-col" : "hidden"}`}>
        <span className="border-bottom-2 border-pink-300 font-mulish text-sm">
          {Object.keys(pathList).map((key, i) => (
            <Link href={key} key={i}>
              <span
                className={`capitalize underline-offset-8 decoration-2 decoration-[red] ${
                  asPath === key ? "text-secondary" : "text-primary"
                }`}
              >
                {`${pathList[key]}`};
              </span>
            </Link>
          ))}
        </span>
      </div>
    </>
  );
}
