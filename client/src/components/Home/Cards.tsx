import Image from "next/image";
import React from "react";

import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { IoCart, IoCartOutline, IoCartSharp } from "react-icons/io5";

type Props = {
  title: string;
  price: number;
  img: number;
};

const Cards = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[360px] rounded-md border border-slate-400 shadow-sm ">
      <section id="product_image" className="">
        <Image
          src={props.img == 4 ? `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/img4.png` : props.img == 6 ? `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/img6.jpg` : `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/img5.jpg`}
          alt="image"
          className="h-[270px] object-fit w-[270px]"
          width={270}
        />
      </section>
      <section id="product_details" className="p-4  pt-7 flex flex-col h-full justify-between ">
        {" "}
        <h2 className="font-medium text-[0.9rem]">{props.title}</h2>
        <DropdownMenuSeparator className=" bg-slate-400"/>
       <span className="flex gap-2 items-center flex-no-wrap w-full justify-between"><span><p className="text-gray-400 line-through">$ {props.price + 154}</p> <p className="text-blue-700 text-[1.1rem] font-medium">$ {props.price}</p></span>  <IoCartOutline className="h-6 w-6"/></span>
      </section>
    </div>
  );
};

export default Cards;
