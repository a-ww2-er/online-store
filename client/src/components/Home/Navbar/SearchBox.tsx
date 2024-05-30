"use client";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import SearchSuggestions from "./SearchSuggestions";

type Props = {};

const SearchBox = (props: Props) => {
  const [query, setQuery] = useState<string>("");
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="flex rounded-full gap-2 bg-white text-black p-4 py-2 w-[440px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="search products"
          className="bg-transparent border-none outline-none focus:border-none focus:outline-none w-full"
          onChange={(e) => setQuery(e.target.value)}
        />
      </span>
      <span className="relative  min-w-[50vw]">
        <SearchSuggestions query={query} />
      </span>
    </div>
  );
};

export default SearchBox;
