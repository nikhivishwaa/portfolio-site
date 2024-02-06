import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socials = [
    "Github",
    "Twitter",
    "Facebook",
    "Instagram",
    "Medium",
    "Youtube",
    "Linkedin",
    "Fiverr",
  ];
  const accounts = [
    "https://github.com/nikhivishwaa/",
    "https://twitter.com/nikhivishwa/",
    "https://Facebook.com/nikhilvishwakarma241dl/",
    "https://www.instagram.com/nikhilvishwakarma241dl/",
    "https://Medium.com/@nikhivishwa/",
    "http://www.youtube.com/@Logicalcoding01",
    "https://Linkedin.com/in/nikhivishwa/",
    "https://www.fiverr.com/nikhivishwa",
  ];
  return (
    <>
      <footer className="w-full flex bg-secondary bottom-0 pt-4 pb-3 flex-col">
        <div className="flex justify-center gap-7 my-4">
          {socials.map((i, key) => (
            <Link href={accounts[key]} target="_blank">
              <Image
                src={`/logo/${i}.webp`}
                alt={i}
                height={25}
                width={25}
                key={key}
              />
            </Link>
          ))}
        </div>
        <div className="flex-flex-col">
          <p className="text-[grey]  text-center">
            &copy;{`  Copyright 2023 - ${new Date().getFullYear()} `}| All
            Rights Reserved by Nikhil Vishwakarma
          </p>
        </div>
      </footer>
    </>
  );
}
