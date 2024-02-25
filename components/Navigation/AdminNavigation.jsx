import Image from "next/image";
import IconLabelButton from "../Main/IconLabelButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminNavigation() {
  const { asPath, replace } = useRouter();
  const token = true;
  

  const adminpath = [
    { icon: "/logo/Dashboard.svg", url: "/root", label: "dashboard" },
    { icon: "/logo/Messages.svg", url: "/root/message", label: "message" },
    { icon: "/logo/Orders.svg", url: "/root/order", label: "order" },
    { icon: "/logo/Payments.svg", url: "/root/payment", label: "payments" },
    { icon: "/logo/Clients.svg", url: "/root/client", label: "clients" },
    { icon: "/logo/DB.svg", url: "/root/db", label: "db" },
    { icon: "/logo/Profile.svg", url: "/root/profile", label: "profile" },
    { icon: "/logo/Logout.svg", url: "/root/logout", label: "logout" },
  ];
  return (
    <>
      <aside className="flex flex-col w-2/12 justify-start h-screen gap-4 bg-secondary p-3">
        <Link href={"/"}>
          <div className="flex text-primary rounded-md items-center justify-center gap-1 p-2">
            <Image
              height={35}
              width={35}
              src="/logo.svg"
              alt="logo"
              className="aspect-[1/1] w-[25px] md:w-[35px]"
            />
            <span className="font-semibold font-poppins text-base sm:text-xl">
              Nikhivishwa
            </span>
          </div>
        </Link>
        {token && (
          <nav className="flex flex-col gap-2 p-2">
            {adminpath.map((rootUrl, i) => (
              <div
                className={`flex justify-start px-3 py1 hover:bg-slate-300 rounded-md cursor-pointer ${
                  asPath === rootUrl.url
                    ? "bg-slate-300 font-bold"
                    : "font-semibold"
                }`}
                key={i}
                onClick={() => replace(rootUrl.url)}
              >
                <IconLabelButton
                  url={rootUrl.url}
                  icon={rootUrl.icon}
                  label={rootUrl.label}
                />
              </div>
            ))}
          </nav>
        )}
      </aside>
    </>
  );
}
