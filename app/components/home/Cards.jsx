import React from "react";
import Image from "next/image";
import TruckIcon from "@/public/images/truckIcon.svg";
const Cards = () => {
  return (
    <>
      <div>
        <div className="h-[153px] p-6 bg-white rounded-lg shadow border border-[#e3e3e3] grid grid-cols-2 ">
          <div>
            <p className="text-[#232323] text-lg font-bold font-['Inter'] tracking-tight">
              40376
            </p>
            <p className="h-[18px] text-[#232323] text-sm font-medium font-['Inter'] tracking-tight mt-3">
              Tracker No: 1644421181
            </p>
            <p className="text-[#7f7f7f] text-xs font-medium font-['Inter'] tracking-tight mt-1">
              Charles P.
            </p>
            <div className="mt-3 flex gap-3">
              <button className="w-[55px] h-[22px] px-2.5 py-[5px] bg-[#e63333] rounded-[48px] justify-center items-center gap-2.5 inline-flex text-white text-[10px] font-medium font-['Inter'] leading-3">
                12 °c
              </button>
              <button className="h-[22px] px-2.5 py-[5px] bg-green-500 rounded-[48px] justify-center items-center gap-2.5 inline-flex text-white text-[10px] font-medium font-['Inter'] leading-3">
                50%
              </button>
            </div>
          </div>
          <div className="flex flex-col items-end  gap-6">
            <div>
              <div className="h-[22px] p-2.5 bg-[#f2f5fd] rounded-[37px] justify-center items-center gap-2.5 inline-flex text-[#61ca11] text-[11px] font-medium font-['Inter'] leading-[13.20px]">
                <p> Active</p>
              </div>
            </div>
            <div>
              <Image src={TruckIcon} alt="Truck Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
