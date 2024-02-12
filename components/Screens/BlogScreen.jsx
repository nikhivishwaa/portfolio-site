import React, { useState } from "react";
import BlogCard from "../Main/BlogCard";
import styles from "@/styles/Utility.module.css";

export default function BlogScreen() {
  const [active, setActive] = useState(0);
  const [blogs, setBlogs] = useState([
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title:
        "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title:
        "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title:
        "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
    {
      title: "yes i am doibg this since my 2nd year",
      url: "/",
    },
  ]);
  const [blogslide, setBlogslide] = useState(blogs.slice(0, 4));
  const changeSlide = (i) => {
    setActive(i);
    const startIndex = i * 4;
    const endIndex =
      i * 4 + 4 <= blogs.length ? i * 4 + 4 : blogs.length;
    setBlogslide(blogs.slice(startIndex, endIndex));
    console.log(blogs.length, startIndex, endIndex)
  };
  return (
    <>
      <div className="flex flex-col p-5 bg-screen">
        <section className="flex flex-col gap-3 items-center justify-center">
          <span className="font-mulish text-[22px] font-bold text-secondary">
            Blog
          </span>
          <span
            className={`text-[34px] font-poppins font-bold text-center ${styles.spacing}`}
          >
            Our Latest News & Posts
          </span>
        </section>
        <section className="flex gap-10 my-12 justify-center items-center">
          {blogslide.map((blog, key) => (
            <BlogCard blog={blog} key={key} />
          ))}
        </section>
        <section className="flex gap-5 mb-5 justify-center items-center">
          {blogs
            .filter((blog, key) => key % 4 === 0)
            .map((blog, key) => (
              <div
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  active === key
                    ? styles["secondary-card"]
                    : styles["primary-card"]
                }`}
                key={key}
                onClick={() => changeSlide(key)}
              ></div>
            ))}
        </section>
      </div>
    </>
  );
}
