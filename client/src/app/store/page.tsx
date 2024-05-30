import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar/Navbar";
import Tabs from "@/components/Home/Tabs";
import AllProducts from "@/components/Store/AllProducts";
import StoreFilterNav from "@/components/Store/StoreFilterNav";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <title>Store | One Faster</title>
      <div className="flex-column justify-center align-middle h-full">
        <section className="text-white bg-gradient-to-t from-gray-800 to-gray-900 w-full h-fit">
          <Header />
          <Navbar />
          <Tabs />
        </section>
        <section id="shop_container" className="flex flex-nowrap">
          <StoreFilterNav />
          <div className="container mx-auto">
            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
            <div className="mb-5 lg:mt-10 mt-5 flex justify-between">
              <div className="">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Store</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <p className="font-medium text-gray-600">
                   {/* totalProduct */} 24 Results
                </p>
              </div>
            </div>
          
              <AllProducts />
            
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
