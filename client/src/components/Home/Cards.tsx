import Image from "next/image";
import React from "react";
import img5 from "../../../public/img5.jpg";
import img4 from "../../../public/img4.png";
import img6 from "../../../public/img6.jpg";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { IoCart, IoCartOutline, IoCartSharp } from "react-icons/io5";

type Props = {
  title: string;
  price: number;
  img: number;
};

const Cards = (props: Props) => {
  return (
    <div className="flex flex-col min-h-[400px] rounded-md border border-slate-400 shadow-sm ">
      <section id="product_image" className="">
        <Image
          src={props.img == 4 ? img4 : props.img == 6 ? img6 : img5}
          alt="image"
          className="h-[300px] object-fit w-[300px]"
          width={300}
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
