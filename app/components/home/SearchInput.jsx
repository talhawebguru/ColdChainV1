import React from "react";
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

const SearchInput = () => {
  return (
    <div className=" w-full relative">
      <FiSearch
        size={24}
        className="absolute top-[50%] left-5 -translate-x-[50%] -translate-y-[50%] text-[#E0E0E0]"
        aria-label="Search Icon"
      />
      <input
        type="text"
        className="w-full p-2.5 px-10 rounded-md"
        placeholder="Search..."
        aria-label="Search Input"
      />
      <VscSettings
        size={24}
        className="absolute top-[50%] left-[95%] -translate-x-[50%] -translate-y-[50%] text-[#E0E0E0]"
        aria-label="Settings Icon"
      />
    </div>
  );
};

export default SearchInput;
