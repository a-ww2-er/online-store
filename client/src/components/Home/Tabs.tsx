import Link from "next/link";
import React from "react";

type Props = {};

const Tabs = (props: Props) => {
  return (
    <div className="py-2 px-16  bg-gray-400">
      <ul className="flex justify-between  text-[1.02rem]">
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Home</li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize"><Link href={"/shop"}>Shop</Link></li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Windows</li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Antivirus</li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Autodesk</li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Apple Softwares</li>
        <li className="cursor-pointer hover:text-gray-600 transition-all duration-100 capitalize">Microsoft</li>

      </ul>
    </div>
  );
};

export default Tabs;
