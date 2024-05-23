import React from "react";
import Image from "next/image";

type Props = {};

const Banners = (props: Props) => {
  return (
    // <div className="w-full text-center text-[2rem] font-semibold mb-4">Products company Banners</div>
    <div className="bg-gray-800 py-10 flex flex-col justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 overflow-hidden justify-center align-middle">
            <a
              href="https://d5digital.net/product/autodesk-all-apps-subscription-price-in-bd/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/autodesk.jpg"
                className="w-36 h-auto"
                alt="Autodesk"
              />
            </a>
            <a
              href="https://d5digital.net/product/winrar-lifetime-license-key-price-in-bd/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/winrar.png"
                className="w-36 h-auto"
                alt="WinRAR"
              />
            </a>
            <a
              href="https://d5digital.net/product/ip-vanish-vpn-subscription-price-in-bd/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/ipvanish.png"
                className="w-36 h-auto"
                alt="IPVanish"
              />
            </a>
            <a
              href="https://d5digital.net/product-category/all-products/software/antivirus/"
              className="block"
            >
              <Image
                loading="lazy"
                decoding="async"
                width="244"
                height="150"
                src="/mcafee.png"
                className="w-36 h-auto"
                alt="McAfee"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
