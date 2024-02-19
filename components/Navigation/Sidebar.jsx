import NavContext from "@/Context/NavContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Sidebar(props) {
  const context = useContext(NavContext);
  const { pathList, sidebar, setSidebar } = context;
  const { asPath } = useRouter();

  return (
    <>
      <div
        className={`sticky px-5 py-3 top-[50px] gap-4 bg-[rgb(220 241 255)] h-full flex flex-col font-mulish font-bold z-10 text-base ${
          sidebar ? "" : "hidden"
        }`}
        onBlur={() => {
          setSidebar(false);
        }}
      >
        <span
          onClick={() => {
            setSidebar(false);
          }}
          className="flex justify-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </span>
        {Object.keys(pathList).map((key, i) => (
          <Link href={key} key={i}>
            <span
              className={`capitalize underline-offset-8 decoration-2 decoration-[red] ${
                asPath === key
                  ? "text-secondary border-bottom-2 border-pink-600"
                  : "text-primary"
              }`}
              onClick={() => setTimeout(() => setSidebar(false), 200)}
            >
              {pathList[key]}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
