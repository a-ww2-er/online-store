"use client";
import { useSearchProductsQuery } from "@/redux/features/products/productSlice";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect ,useState} from "react";
import { ClipLoader } from "react-spinners";
import {SearchIcon} from 'lucide-react'

type Props = {
  query?: string;
};

const SearchSuggestions = ({ query }: Props) => {
    // const [prodData,setProdData]
    const [loading,setLoading]=useState<boolean>(false)
  const { data, isLoading, isFetching, error,isSuccess, refetch  } = useSearchProductsQuery(query);

  useEffect(() => {

    if (query) {
        setTimeout(() => {
             refetch();
        }, 2000);
     
    }
    if(error){
        setLoading(false)
        console.log(error)
    }
  }, [query]);

  if (!query) {
    return null;
  }
  
  let products = data?.data
  
  return (
    <div className="w-full border text-black h-fit absolute bg-white top-0  text-center rounded-md z-50 ">
      {isLoading || isFetching ? (
        <ClipLoader className="h-6 w-6 text-black" />
      ) : (
        <div className="flex flex-col  ">
            { products && products.length > 0 ? products.map((prod:any,index:number)=>{
            return (
                <Link href="/" key={index} className="flex cursor-pointer items-center justify-between gap-3 p-2 px-3">
                    <span className="min-w-6"> <SearchIcon className=" h-5 w-5 "/></span>
                   
                    <span className="flex flex-col items-start text-left text-[0.9rem] w-full">
                       <p className="font-medium line-clamp-1 "> {prod.name}</p>
                       
                        <p className="text-[0.8rem] font-light line-clamp-1">{prod.description}</p>
                        <p className="text-[0.8rem] font-light line-clamp-1 mt-1"> Category: <span className=" p-3 bg-blue-200 text-blue-400 rounded-md">{prod.category}</span></p></span>
                    <Image alt="img" src={`http://localhost:8000/public/images/${prod?.image}`} className="h-[100px] w-[100px] object-cover " width={100} height={100}/>
                </Link>
            )
        }) : "No results"}</div>
      )}
    </div>
  );
};

export default SearchSuggestions;
