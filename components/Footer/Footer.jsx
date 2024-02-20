import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = {
    Github: "https://github.com/nikhivishwaa/",
    Twitter: "https://twitter.com/nikhivishwa/",
    Facebook: "https://Facebook.com/nikhilvishwakarma241dl/",
    Instagram: "https://www.instagram.com/nikhilvishwakarma241dl/",
    Medium: "https://Medium.com/@nikhivishwa/",
    Youtube: "http://www.youtube.com/@Logicalcoding01",
    Linkedin: "https://Linkedin.com/in/nikhivishwa/",
    Fiverr: "https://www.fiverr.com/nikhivishwa",
  };

  return (
    <>
      <footer className="h-60 w-full flex bg-secondary bottom-0 py-4 flex-col gap-6 justify-center">
        <div className="flex gap-5 max-sm:gap-3 justify-center items-center">
          <hr style={{ border: "2px solid red" }} className="w-[135px] flex-shrink max-sm:w-20" />
          <span className="font-semibold text-primary w-[79px]">Contact Us</span>
          <hr style={{ border: "2px solid red" }} className="w-[135px] flex-shrink max-sm:w-20" />
        </div>
        <div className="flex justify-center max-sm:flex-wrap gap-4 md:gap-7 pt-3">
          {Object.keys(socials).map((key) => (
            <Link href={socials[key]} target="_blank" key={key}>
              <Image
                src={`/logo/${key}.webp`}
                alt={key}
                height={25}
                width={25}
              />
            </Link>
          ))}
        </div>
        <div className="flex-flex-col justify-self-end mt-5">
          <p className="text-[grey]  text-center text-sm font-inter">
            &copy;{`  Copyright 2023 - ${new Date().getFullYear()} `}| All
            Rights Reserved by Nikhil Vishwakarma
          </p>
        </div>
      </footer>
    </>
  );
}
