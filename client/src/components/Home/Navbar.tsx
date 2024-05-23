import React from "react";
import { CloudLightningIcon, SearchIcon, ShoppingCartIcon, UserCircle2Icon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between gap-3 items-center p-4 px-16">
      <section id="logo">
        <h1 className="capitalize font-bold text-[1.5rem] flex gap-2 items-center"><CloudLightningIcon className="text-blue-500 h-12 w-12"/>ONE FASTER</h1>
      </section>
      <section id="search"><span className="flex rounded-md gap-2 bg-white text-black p-4 py-2 w-[440px]"><SearchIcon/><input type="text" placeholder="search products" className="bg-transparent border-none outline-none focus:border-none focus:outline-none w-full"/></span></section>
      {/* <section id="cart_and_profile"><UserCircle2Icon className="text-blue-700"/></section> */}
       <section id="cart_and_profile" className="flex gap-4 items-center"><span className="relative cursor-pointer"><ShoppingCartIcon className="text-white h-6 w-6 relative"/><p className="absolute bg-blue-600 rounded-[50%] text-[0.8rem] p-1 h-fit py-0 w-fit top-[-8px] right-[-8px]">0</p></span><Button variant="link"><Link className="text-white" href="/auth">Sign In</Link> </Button></section> 
    </div>
  );
};

export default Navbar;
