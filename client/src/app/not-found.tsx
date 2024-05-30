import ErrorPageBody from "@/components/ErrorPageBody";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar/Navbar";

import Tabs from "@/components/Home/Tabs";
import React from "react";

type Props = {};

const Page = (props: Props) => {

  return (
    <>
      <div className="relative bg-white ">
        <title>Page Not Found | One Faster</title>
        <section
          id="heading"
          className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit"
        >
          <Header />
          <Navbar />
          <Tabs />
        </section>
        <ErrorPageBody/>
        <Footer />{" "}
      </div>
    </>
  );
};

export default Page;

