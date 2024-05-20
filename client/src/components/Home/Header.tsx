"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
//import brand01 from "@/public/images/brand Logo/01.jpg";
import Marquee from "react-fast-marquee";
//import axios from "axios";
//import { homepagemarqueeProps } from "@/app/interface";
//import { getMarquee } from "@/components/admin/Customize/HomeMarquee/GetHomeMarqueeAdmin";

export default function Header() {
  // const marqueedata: homepagemarqueeProps[] = await getMarquee();
 // const [homemarquee, setHomemarquee] = useState<homepagemarqueeProps[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedMarquee = await getMarquee();
  //       setHomemarquee(fetchedMarquee);
  //     } catch (error) {
  //       console.error("Error fetching marquee:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  // // console.log(homemarquee)
  const texts = [
    {text:"testing marquee"},
    {text:"testing marquee"},
    {text:"testing marquee"},
    {text:"testing marquee"},
    {text:"testing marquee"}
  ]
  return (
    <>
       <div className=" bg-slate-100 ">
      <div className=" py-1 ">

            <Marquee pauseOnHover>
              {texts.map((text, index) => (
                <p key={index} className=" text-sm font-medium border-l text-black px-24 border-blue-400">
                  {text.text}
                </p>
              ))}
            </Marquee>
 
      </div>
    </div>
    </>
  );
}
