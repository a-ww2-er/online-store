"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuth from "@/app/customHooks/useAuth";
import React from "react";

type Props = {};

const tabLinks = [
  {
    tab: "Home",
    href: "/",
  },
  {
    tab: "Store",
    href: "/store",
  },
  {
    tab: "Windows",
    href: "/store/products/windows",
  },
  {
    tab: "Antivirus",
    href: "/store/products/antivirus",
  },
  {
    tab: "Autodesk",
    href: "/store/products/autodesk",
  },
  {
    tab: "Apple Softwares",
    href: "/store/products/apple-softwares",
  },
  {
    tab: "Microsoft",
    href: "/store/products/microsoft",
  },
];

const Tabs = (props: Props) => {
  const pathname = usePathname();

  const isAuthenticated = useAuth()?.user;
  //bg color bg-[#3b4863]
  return (
    <div className="py-2 px-16  ">
      <ul className="flex justify-between  text-[1.02rem]"> 
      {isAuthenticated && (
          <Link
            href={"/admin"}
            className={`flex flex-col items-center cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize
          ${pathname === "/admin" ? " font-semibold" : ""}
          `}
          >
            Admin
            {pathname === "/admin" ? (
              <span className="h-[2px] w-[40%]  bg-white rounded-md"></span>
            ) : (
              ""
            )}
          </Link>
        )}
        {tabLinks.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.href}
              className={`flex flex-col items-center cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize
            ${pathname === link.href ? " font-semibold" : ""}
            `}
            >
              {link.tab}
              {pathname === link.href ? (
                <span className="h-[2px] w-[40%]  bg-white rounded-md"></span>
              ) : (
                ""
              )}
            </Link>
          );
        })}
       
      </ul>
    </div>
  );
};

export default Tabs;
