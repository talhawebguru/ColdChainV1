import React from "react";
import { FiSearch } from "react-icons/fi";

const RightSideBar = () => {
  return (
    <>
      <h1 className="text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">
        Fright Report
      </h1>
      <div className=" py-8 bg-white rounded-lg border w-full h-full mt-6 ">
        <h1 className="text-[#232323] pl-6 text-lg font-medium font-['Inter'] tracking-tight">
          Vehicles Report
        </h1>
        <div className="px-6 mt-10">
          <form className="flex gap-4">
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Search
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Company
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Company
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Company
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Company
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Search
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <label
                htmlFor="search"
                className="text-[#232323] text-base font-medium font-['Inter']"
              >
                Search
              </label>
              <div className=" w-full relative">
                <FiSearch
                  size={24}
                  className="absolute top-[50%] left-5 -translate-x-[50%] z-20 -translate-y-[50%] text-[#a2a2a2]"
                  aria-label="Search Icon"
                />
                <input
                  type="text"
                  id="search"
                  aria-label="Search Input"
                  className="w-44 relative h-12 p-2.5 pl-9 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
