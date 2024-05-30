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

type Props = {
  params:any
};

const page = (props: Props) => {
  const category = props.params.category
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
                      <BreadcrumbLink href="/store">Store</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/store">Product</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{category}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <p className="font-medium text-gray-600 mt-1">
                   {/* totalProduct */} 0 Results
                </p>
              </div>
            </div>
          
              {/* <AllProducts /> */}
           <h1 className="text-center  text-[1.2rem]">No {category} product available</h1> 
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
