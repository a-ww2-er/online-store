"use client";
import { Checkbox } from "@/components/ui/checkbox";

import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { categoryProps } from "@/app/interface";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { filterData } from "@/redux/features/filterSlice";
// import {
//   getStyles,
//   getColors,
//   getSizes,
//   getCategory,
//   getTypes,
// } from "@/components/ApiRequests/ApiRequests";
import { Input } from "@/components/ui/input";
import { Check, CheckIcon } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";

interface priceRange {
  min: number;
  max: number;
}
interface props {
  category?: string;
}

export default function ShopFilterNav({ category }: props) {
  // const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [allTypes, setAllTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<priceRange[]>([]);
  const [allcategories, setAllCategories] = useState<{categoryname:string}[]>([]);
  const [allColors, setAllColors] = useState<string[]>([]);
  const [allStyles, setAllStyles] = useState<string[]>([]);
  const [allSizes, setAllSizes] = useState<string[]>([]);
 
  
  const toggleSidebar = () => {
    setShow(!show);
  };
  const handleSelectSize = (size: string) => {
    setSelectedSize((prevSize: string[]) =>
      prevSize.includes(size)
        ? prevSize.filter((c) => c !== size)
        : [...prevSize, size]
    );
  };

  const handleSelectedPrice = (price: priceRange) => {
    setSelectedPrice((prevPrices: any[]) =>
      prevPrices.find(
        (item) => item.min === price.min && item.max === price.max
      )
        ? prevPrices.filter(
            (item) => item.min !== price.min && item.max !== price.max
          )
        : [...prevPrices, price]
    );
  };
  const handleSelectColor = (color: string) => {
    setSelectedColor((prevColor: string[]) =>
      prevColor.includes(color)
        ? prevColor.filter((c) => c !== color)
        : [...prevColor, color]
    );
  };

  const handleSelectedStyle = (style: string) => {
    setSelectedStyle((prevStyle: string[]) =>
      prevStyle.includes(style)
        ? prevStyle.filter((c) => c !== style)
        : [...prevStyle, style]
    );
  };

  const handleSelectedCategory = (category: string) => {
    setSelectedCategories((prevCategories: string[]) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleSelectedTypes = (type: string) => {
    setSelectedTypes((prevTypes: string[] ) =>
      prevTypes?.includes(type)
        ? prevTypes.filter((typ) => typ !== type)
        : [...prevTypes, type]
    );
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fetchedCategories = await getCategory();
  //       setAllCategories(fetchedCategories);
  //       //move this to fetch function to anothe rpage and call it here pls
  //       const fetchedStyles: string[] = await getStyles();
  //       setAllStyles(fetchedStyles);
  //       const fetchedColors: string[] = await getColors();
  //       setAllColors(fetchedColors);
  //       const fetchedSizes: string[] = await getSizes() ;
  //       setAllSizes(fetchedSizes);
  //       const fetchedTypes: string[] = await getTypes();
  //       setAllTypes(fetchedTypes);
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);
  // useEffect(() => {
  //   axios
  //     .post("/api/filterproduct", {
  //       categories: selectedCategories,
  //       type: selectedTypes,
  //       size: selectedSize,
  //       price: selectedPrice,
  //       colors: selectedColor,
  //       styles: selectedStyle,
  //     })
  //     .then((response) => {
  //       dispatch(filterData(response.data));
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }, [
  //   selectedCategories,
  //   selectedTypes,
  //   selectedColor,
  //   selectedPrice,
  //   // selectedPrice,
  //   selectedSize,
  //   selectedStyle,
  // ]);

  // console.log(isMans, isWomans, isUnisex, selectedSize, selectedColor);

  return (
    <>
      <div className="">
        <div className=" w-72 border border-gray-200 md:h-full border-t-0 hidden sm:flex lg:pt-10 mt-0 container mx-auto">
          <div className="">
            <div className="">
              <p className=" text-2xl font-semibold flex items-center text-gray-800  mb-4">
               <IoFilterOutline className="mr-2"/> Filter
              </p>
              <div className=" flex gap-4 flex-wrap gap-y-">
                {/* Sizes buttons */}
                {allTypes?.map((sizeOption) => (
                  <div
                    key={sizeOption}
                    className={`border border-dedrock-blue rounded-md px-3 py-1.5 items-center justify-center cursor-pointer
                            ${
                              selectedTypes?.includes(sizeOption)
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }
                        `}
                    onClick={() => handleSelectedTypes(sizeOption)}
                  >
                    {sizeOption}
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-7" />
            <p className=" text-lg font-medium text-gray-800 mb-3">Prices</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-1">
                {/* this price ranges should be fetched from database instead */}
                <Checkbox
                  onCheckedChange={() =>
                    handleSelectedPrice({ min: 100, max: 500 })
                  }
                >
                  <Checkbox>
                    <Check />
                  </Checkbox>
                </Checkbox>
                <Label htmlFor="short description" className="pr-1">
                   $100 To  $500
                </Label>
              </div>

              <div className="flex items-center space-x-1">
                <Checkbox
                  onCheckedChange={() =>
                    handleSelectedPrice({ min: 500, max: 1599 })
                  }
                >
                  <Checkbox>
                    <Check />
                  </Checkbox>
                </Checkbox>
                <Label htmlFor="short description" className="pr-1">
                   $500 To  $1599
                </Label>
              </div>

              <div className="flex items-center space-x-1">
                <Checkbox
                  onCheckedChange={() =>
                    handleSelectedPrice({ min: 1599, max: 2599 })
                  }
                >
                  <Checkbox>
                    <Check />
                  </Checkbox>
                </Checkbox>
                <Label htmlFor="short description" className="pr-1">
                   $1599 To  $2599
                </Label>
              </div>

              <div className="flex items-center space-x-1">
                <Checkbox
                  onCheckedChange={() =>
                    handleSelectedPrice({ min: 2599, max: 3799 })
                  }
                >
                  <Checkbox>
                    <Check />
                  </Checkbox>
                </Checkbox>
                <Label htmlFor="short description" className="pr-1">
                   $2599 To  $3799
                </Label>
              </div>
              <div className="flex items-center space-x-1">
                <Checkbox
                  onCheckedChange={() =>
                    handleSelectedPrice({ min: 3599, max: 6899 })
                  }
                >
                  <Checkbox>
                    <Check />
                  </Checkbox>
                </Checkbox>
                <Label htmlFor="short description" className="pr-1">
                   $3599 To  $6899
                </Label>
              </div>
            </div>
            <hr className="mt-10 mb-5" />
            <div className="">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className=" mb-8">
                  <AccordionTrigger>
                    <p className="text-lg font-medium text-gray-800">
                      Category
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="">
                      {allcategories.length > 0 ? (
                        allcategories.map((category, index) => (
                          <div
                            key={index}
                            className={`cursor-pointer ${
                              selectedCategories.includes(category?.categoryname)
                                ? "underline"
                                : ""
                            }`}
                            onClick={() =>
                              handleSelectedCategory(category?.categoryname)
                            }
                          >
                            <li className="my-3 text-base hover:underline">
                              {category?.categoryname}
                            </li>
                          </div>
                        ))
                      ) : (
                        <p>No Styles</p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className=" mb-8">
                  <AccordionTrigger>
                    <div className=" text-lg font-medium">Styles</div>{" "}
                  </AccordionTrigger>
                  <Input
                    onChange={(e) => {
                      const styleArray = e.target.value.split(",");
                      setSelectedStyle(styleArray);
                    }}
                    // value={""}
                    type="text"
                    name="styles"
                    id="styles"
                    placeholder="Search Styles"
                  />
                  <AccordionContent>
                    <div className="gap-5 mt-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      {allStyles?.length > 0 ? (
                        allStyles?.map((style, index) => (
                          <span
                            key={index}
                            className={`py-3 flex rounded-lg border capitalize items-center text-center text-dedrock-blue justify-center cursor-pointer ${
                              selectedStyle.includes(style)
                                ? "bg-dedrock-blue text-white"
                                : ""
                            }`}
                            onClick={() => handleSelectedStyle(style)}
                          >
                            {style}
                          </span>
                        ))
                      ) : (
                        <p>No Styles</p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* <hr className="my-7" /> */}
            <div className="mt-7">
              <p className=" text-lg font-medium text-gray-800">Size</p>
              <div className="">
                <div className="mt-3 flex gap-7 grid grid-cols-3 gap-y-4">
                  {/* Sizes buttons */}
                  {allSizes.map((sizeOption) => (
                    <div
                      key={sizeOption}
                      className={`border border-dedrock-blue rounded-md w-14 h-8 flex items-center justify-center text-sm cursor-pointer
                            ${
                              selectedSize.includes(sizeOption)
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }
                        `}
                      onClick={() => handleSelectSize(sizeOption)}
                    >
                      {sizeOption}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr className="my-7" />
            <div className="">
              <p className=" text-lg font-medium text-gray-800">Color</p>
              <div className="">
                <div className="mt-3 flex gap-7 grid grid-cols-4 gap-y-2">
                  {/* Color boxes */}
                  {allColors.map((c: string) => (
                    <div
                      key={c}
                      className={`w-9 h-9 rounded-full cursor-pointer ${
                        selectedColor.includes(c)
                          ? " border-2 border-black"
                          : "border-2 border-white"
                      }`}
                      style={{
                        borderRadius: "100%",
                        backgroundColor: c,
                        display: "inline-block",
                        margin: "1px",
                      }}
                      onClick={() => handleSelectColor(c)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav Start */}
        <div
          className={`w-64 z-40 absolute border border-gray-200 container mx-auto bg-gray-50 md:h-full pb-7 flex-col justify-between sm:hidden transition duration-150 ease-in-out ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
          id="mobile-nav"
        >
          <div
            className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
            id="mobile-toggler"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
          <div className="">
            <div className="">
              <div className="">
                <p className=" text-lg font-semibold text-gray-800 mt-6">
                  Products
                </p>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Mans
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Womans
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Unisex
                  </label>
                </div>
              </div>
              <hr className="my-7" />
              <div className="">
                <p className=" text-lg font-semibold text-gray-800">
                  Collection
                </p>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Mans All For Mans
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Womans
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    All For Unisex
                  </label>
                </div>
              </div>
              <hr className="my-7" />
              <div className="">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <p className="text-lg font-semibold text-gray-800">
                        Category
                      </p>
                    </AccordionTrigger>

                    <AccordionContent>
                      <div className="">
                        {allcategories.length > 0 ? (
                          allcategories.map((category, index) => (
                            <div
                              key={index}
                              className={`cursor-pointer ${
                                selectedCategories.includes(
                                  category.categoryname
                                )
                                  ? "underline"
                                  : ""
                              }`}
                              onClick={() =>
                                handleSelectedCategory(category.categoryname)
                              }
                            >
                              <li className="my-3 text-base hover:underline">
                                {category.categoryname}
                              </li>
                            </div>
                          ))
                        ) : (
                          <p>No Styles</p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* <hr className="my-7" /> */}
              <div className="mt-7">
                <p className=" text-lg font-semibold text-gray-800">Size</p>
                <div className="">
                  <div className="mt-3 flex gap-7 grid grid-cols-3 gap-y-4">
                    {/* Sizes buttons */}
                    {allSizes.map((sizeOption: string) => (
                      <div
                        key={sizeOption}
                        className={`border border-dedrock-blue rounded-md w-14 h-8 flex items-center justify-center text-sm cursor-pointer
                            ${
                              selectedSize.includes(sizeOption)
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }
                        `}
                        onClick={() => handleSelectSize(sizeOption)}
                      >
                        {sizeOption}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr className="my-7" />
              <div className="">
                <p className=" text-lg font-semibold text-gray-800">Color</p>
                <div className="">
                  <div className="mt-3 flex gap-7 grid grid-cols-4 gap-y-2">
                    {/* Color boxes */}
                    {allColors.map((c: string) => (
                      <div
                        key={c}
                        className={`w-9 h-9 rounded-full cursor-pointer ${
                          selectedColor.includes(c)
                            ? " border-2 border-black"
                            : "border-2 border-white"
                        }`}
                        style={{
                          borderRadius: "100%",
                          backgroundColor: c,
                          display: "inline-block",
                          margin: "1px",
                        }}
                        onClick={() => handleSelectColor(c)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
