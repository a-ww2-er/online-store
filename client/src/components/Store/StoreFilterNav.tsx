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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
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
  // const pathname = usePathname();
  // const router = useRouter();
  const [show, setShow] = useState(false);
  const [allTypes, setAllTypes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedcompany, setSelectedcompany] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<priceRange[]>([]);
  const [allcategories, setAllCategories] = useState<
    { categoryname: string }[]
  >([]);
  const [allcompanys, setAllcompanys] = useState<string[]>([]);

  const toggleSidebar = () => {
    setShow(!show);
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

  const handleSelectedCategory = (category: string) => {
    setSelectedCategories((prevCategories: string[]) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const handleSelectedTypes = (type: string) => {
    setSelectedTypes((prevTypes: string[]) =>
      prevTypes?.includes(type)
        ? prevTypes.filter((typ) => typ !== type)
        : [...prevTypes, type]
    );
  };

  return (
    <>
      <div className="">
        <div className=" w-72 border border-gray-200 md:h-full border-t-0 hidden sm:flex lg:pt-10 mt-0 container mx-auto">
          <div className="">
            <div className="">
              <p className=" text-2xl font-semibold flex items-center text-gray-800  mb-4">
                <IoFilterOutline className="mr-2" /> Filter
              </p>
              <div className=" flex gap-4 flex-wrap gap-y-">
                {/* types buttons */}
                {allTypes?.map((typeOption) => (
                  <div
                    key={typeOption}
                    className={`border border-dedrock-blue rounded-md px-3 py-1.5 items-center justify-center cursor-pointer
                            ${
                              selectedTypes?.includes(typeOption)
                                ? "bg-black text-white"
                                : "bg-white text-black"
                            }
                        `}
                    onClick={() => handleSelectedTypes(typeOption)}
                  >
                    {typeOption}
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
                  $100 To $500
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
                  $500 To $1599
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
                  $1599 To $2599
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
                  $2599 To $3799
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
                  $3599 To $6899
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
                              selectedCategories.includes(
                                category?.categoryname
                              )
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
                        <p>No companys</p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className=" mb-8">
                  <AccordionTrigger>
                    <div className=" text-lg font-medium">Companies</div>{" "}
                  </AccordionTrigger>
                  <Input
                    onChange={(e) => {
                      const companyArray = e.target.value.split(",");
                      setSelectedcompany(companyArray);
                    }}
                    // value={""}
                    type="text"
                    name="companys"
                    id="companys"
                    placeholder="Search Companies"
                  />
                  <AccordionContent>
                    <div className="gap-5 mt-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      {allcompanys?.length > 0 ? (
                        allcompanys?.map((company, index) => (
                          <span
                            key={index}
                            className={`py-3 flex rounded-lg border capitalize items-center text-center text-dedrock-blue justify-center cursor-pointer ${
                              selectedcompany.includes(company)
                                ? "bg-dedrock-blue text-white"
                                : ""
                            }`}
                            // onClick={() => }
                          >
                            {company}
                          </span>
                        ))
                      ) : (
                        <p>No companys</p>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* <hr className="my-7" /> */}

            <hr className="my-7" />
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
                    OS license
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    Graphic Software
                  </label>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 pl-2 "
                  >
                    Antivirus
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
                    VPN
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
                          <p>No companys</p>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              {/* <hr className="my-7" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
