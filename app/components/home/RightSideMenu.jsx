import React from 'react'
import { FiSearch } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";

const RightSideMenu = () => {
  return (
    <>
    <div className="w-[437px] h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col   gap-8 ">

      <div className="flex justify-center items-center">
        <div className="w-full h-[46px] px-2.5 py-[5px] bg-[#074bd8] rounded-tl-lg rounded-bl-lg flex justify-center items-center gap-2.5  text-white text-base font-medium font-['Inter'] leading-tight"> 
          <p>All</p>
        </div>
        <div className="w-full h-[46px] px-2.5 py-[5px] bg-[#e0e0e0] border-l border-r border-white flex justify-center items-center gap-2.5  text-white text-base font-medium font-['Inter'] leading-tight"> 
          <p>Vehicles</p>
        </div>
        <div className="w-full h-[46px] px-2.5 py-[5px] bg-[#e0e0e0] rounded-tr-lg rounded-br-lg flex justify-center items-center gap-2.5  text-white text-base font-medium font-['Inter'] leading-tight"> 
          <p>Stores</p>
        </div>
      </div>
    <div>
      <div className=" w-full relative">
      <FiSearch size={24}  className="absolute top-[50%] left-5 -translate-x-[50%] -translate-y-[50%] text-[#E0E0E0]"/>
        <input type="text"  className="w-full p-2.5 px-10 rounded-md" placeholder="Search..."/>
        <VscSettings  size={24}  className="absolute top-[50%] left-[95%] -translate-x-[50%] -translate-y-[50%] text-[#E0E0E0]"/>

      </div>
    </div>
    <div>
      third things
    </div>

    </div>
    </>
  )
}

export default RightSideMenu