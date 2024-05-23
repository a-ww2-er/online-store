import { ArrowBigRight, ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import img2 from "../../../public/img2.png";

type Props = {};

const Deals = (props: Props) => {
  return (
    <div className="grid grid-cols-2 text-black mt-8 py-8 px-16 items-center gap-x-12 ">
      <section id="left_deal_writeup" className="">
        <h2 className="font-semibold text-[1.3rem] mb-4"> Live Offers</h2>
        <p className="font-light text-[0.8rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          perspiciatis magni adipisci mollitia provident. Veniam fuga aspernatur
          incidunt sint quod deserunt et, tenetur aliquid, ipsa ratione
          temporibus aliquam commodi cumque nesciunt impedit animi maxime
          neque, blanditiis, expedita explicabo voluptatem dicta est numquam
          iure voluptates. Aperiam odit amet exercitationem unde similique.
          Rerum eum corrupti vero, molestias iusto natus rem facilis quaerat
          nesciunt in hic ratione sit asperiores voluptatum delectus eos eveniet
          libero aliquam velit praesentium? Alias illo perspiciatis modi
        </p>
        <span className="flex  gap-3 my-4 w-full  items-center">
          <span className="flex flex-col gap-2 items-center">
            <p className="font-bold text-[1.5rem]">7</p>
            <span className="">Days</span>
          </span>
          <span className="flex flex-col gap-2 items-center">
            <p className="font-bold text-[1.5rem]">14</p>
            <span className="">Hours</span>
          </span>
          <span className="flex flex-col gap-2 items-center">
            <p className="font-bold text-[1.5rem]">47</p>
            <span className="">Minutes</span>
          </span>
          <span className="flex flex-col gap-2 items-center">
            <p className="font-bold text-[1.5rem]">09</p>
            <span className="">Seconds</span>
          </span>
        </span>
        <Button className="flex gap-2 ">
          View Products <ArrowBigRight />
        </Button>
      </section>
      <section id="right_deal_image" className="p-8 py-4 bg-gray-200 justify-self-end flex w-fit">
        <Image src={img2} alt="" className="object-fit w-[340px] h-[300px] justify-self-end" />
        <aside className="w-fit p-0 flex flex-col justify-between">
            <h1 className="text-[2.0rem] text-right font-black">Microsoft office and Windows 11</h1>
            <p className="font-medium text-[1.8rem] text-right">Up to 200% Off</p>
            <p className="ml-[50%] w-fit bg-yellow-300 p-2 font-semibold "> BUY NOW</p>
        </aside>
      </section>
    </div>
  );
};

export default Deals;
