import React from "react";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar";
import Tabs from "@/components/Home/Tabs";
import Footer from "@/components/Home/Footer";
import AuthTabs from "@/components/Auth/authtabs";

const page = () => {
  return (
    <>
      <title>Login | Register</title>
      <div>
        <section className="text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
          <Header />
          <Navbar />
          <Tabs />
        </section>
        <AuthTabs/>
        <Footer/>
      </div>
    </>
  );
};

export default page;
