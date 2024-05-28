import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {};
//space-x-4 overflow-hidden justify-center align-middle
const Banners = (props: Props) => {
  return (
    // <div className="w-full text-center text-[2rem] font-semibold mb-4">Products company Banners</div>
    <div className="bg-gray-800 py-10 flex flex-col justify-center items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-5 gap-x-4 items-center">
          <section className="col-span-2"><h2 className=" text-center text-[2.2rem] font-extralight ">We cover a variety of brands and products</h2></section>
          <div className="col-span-3 gap-4 flex flex-col items-center w-full ">
          <Marquee pauseOnHover gradient gradientColor="#1f2937"> <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/autodesk.jpg"
                className="w-36 h-auto ml-2 "
                alt="Autodesk"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/winrar.png"
                className="w-36 h-auto ml-2"
                alt="WinRAR"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/ipvanish.png"
                className="w-36 h-auto ml-2" 
                alt="IPVanish"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/mcafee.png"
                className="w-36 h-auto ml-2" 
                alt="McAfee"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/autodesk.jpg"
                className="w-36 h-auto ml-3"
                alt="Autodesk"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/winrar.png"
                className="w-36 h-auto ml-3"
                alt="WinRAR"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/ipvanish.png"
                className="w-36 h-auto ml-3"
                alt="IPVanish"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/mcafee.png"
                className="w-36 h-auto ml-3"
                alt="McAfee"
              />
            </a>
            </Marquee>
          <Marquee pauseOnHover gradient gradientColor="#1f2937" gradientWidth={300} direction="right"> <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/autodesk.jpg"
                className="w-36 h-auto ml-3"
                alt="Autodesk"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/winrar.png"
                className="w-36 h-auto ml-3"
                alt="WinRAR"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/ipvanish.png"
                className="w-36 h-auto ml-3"
                alt="IPVanish"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/mcafee.png"
                className="w-36 h-auto ml-3"
                alt="McAfee"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/autodesk.jpg"
                className="w-36 h-auto ml-3"
                alt="Autodesk"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/winrar.png"
                className="w-36 h-auto ml-3"
                alt="WinRAR"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/ipvanish.png"
                className="w-36 h-auto ml-3"
                alt="IPVanish"
              />
            </a>
            <a
              href="/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/mcafee.png"
                className="w-36 h-auto ml-3"
                alt="McAfee"
              />
            </a>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
