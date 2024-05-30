import React from "react";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import Tabs from "@/components/Home/Tabs";
import Footer from "@/components/Home/Footer/Footer";
import AuthTabs from "@/components/Auth/authtabs";
import Image from "next/image";
import img2 from "../../../public/img3.png";
import img4 from "../../../public/img4.png";
import img1 from "../../../public/img1.png";

const page = () => {
  return (
    <>
      <title>Login | Register</title>
      <div className="flex-column justify-center align-middle h-full">
        <section className="text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
          <Header />
          <Navbar />
          <Tabs />
        </section>
        <section className="flex w-full my-10">
          <AuthTabs />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default page;
