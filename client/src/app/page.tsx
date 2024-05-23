import Advert from "@/components/Home/Advert";
import Banners from "@/components/Home/Banners";
import Deals from "@/components/Home/Deals";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar";
import SlideShow from "@/components/Home/SlideShow";
import Tabs from "@/components/Home/Tabs";
import TopProducts from "@/components/Home/TopProducts";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
    <title>Home | One Faster</title>
    <div>
      <section id="hero" className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
        <Header />
        <Navbar />
        <Tabs />
        <SlideShow />
      </section>
      <Deals/>
      <TopProducts />
      <Advert />
      <Banners />
      <Footer/>
    </div>
    </>
  );
};

export default page