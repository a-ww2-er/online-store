import React from "react";
import Cards from "./Cards";

type Props = {};

//This component should be a slideshow
const TopProducts = (props: Props) => {
  return (
    <div className="p-16 text-black">
      <span className=" mb-6 flex items-center w-full flex-no-wrap gap-3">
        <h1 className="font-semibold text-[2.2rem] tracking-tight text-nowrap ">
          Top Products
        </h1>
        <span className="border-t-2 border-t-slate-300 w-full"></span>
      </span>
      <div className="grid grid-cols-4 gap-x-6">
        <Cards
          title="Adobe Acrobat: definite edition 2019"
          price={200}
          img={6}
        />
        <Cards title="Microsoft Office suite 2020-23" price={1000} img={5} />
        <Cards
          title="Windows 11: Professional Fully licensed"
          price={500}
          img={6}
        />
        <Cards
          title="AutoDesk suites: All Home editions 2020-24"
          price={100}
          img={4}
        />
      </div>
    </div>
  );
};

export default TopProducts;
