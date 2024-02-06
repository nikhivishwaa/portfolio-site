import Image from "next/image";
import Link from "next/link";
import chatIcon from "@/components/icons/chat.svg";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 w-full flex justify-evenly bg-secondary text-primary py-2 pt-3 text-lg items-center">
        <div className="flex text-primary rounded-md items-center justify-center gap-1">
          <Image height={35} width={35} src={"/logo.svg"} alt="logo" />
          <span className="font-semibold font-poppins text-xl">
            Nikhivishwa
          </span>
        </div>
        <div className="flex gap-7 font-exo text-base font-bold items-end">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Pricing</Link>
        </div>
        <div className="flex bg-[#0a0a68] text-white py-2 px-3 rounded-md items-center justify-center gap-1">
          <span className="font-medium font-exo text-base">Let's Chat</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="#0a0a68"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </div>
      </nav>
    </>
  );
}