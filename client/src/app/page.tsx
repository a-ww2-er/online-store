import Advert from "@/components/Home/Advert";
import Banners from "@/components/Home/Banners";
import Deals from "@/components/Home/Deals";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Footer from "@/components/Home/Footer/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import SlideShow from "@/components/Home/SlideShow";
import Tabs from "@/components/Home/Tabs";
import TopProducts from "@/components/Home/TopProducts";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import React from "react";
import Head from "next/head";
import Newsletter from "@/components/Home/Footer/Newsletter";

type Props = {};

const page = (props: Props) => {
  return (
    <>
    <title>Home | One Faster</title>
    <div className="relative text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
     
        <Header />
        <Navbar />
        <Tabs />
        <DropdownMenuSeparator className="w-full bg-slate-800 mt-3"/>
        <SlideShow />
      <section id="hero" className="bg-white">
         <Deals/>
      <TopProducts />
      <Advert />
      <FeaturedProducts/>
      <Banners /> 
      <Newsletter/>
      <Footer/></section>
    </div>
    </>
  );
};

export default page;
