import React from "react";
import { FiSearch } from "react-icons/fi";
import InputFields from "./InputFields";
import SelectFields from "./SelectFields";

const RightSideBar = () => {
  return (
    <>
      <h1 className="text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">
        Fright Report
      </h1>
      <div className="py-8 bg-white rounded-lg border w-full h-full mt-6">
        <h1 className="text-[#232323] pl-6 text-lg font-medium font-['Inter'] tracking-tight">
          Vehicles Report
        </h1>
        {/* Report Form Start Here */}
        <div className="px-6 mt-10">
          <form className="flex flex-wrap gap-4">
            <span className="relative">
              <FiSearch
                size={18}
                aria-label="Search Icon"
                className="absolute z-10 top-[71%] left-[8%] -translate-x-[50%] -translate-y-[50%]"
              />
              <InputFields id="search" label="Search Input" type="search" hasIcon />
            </span>
            <SelectFields
              id="company"
              label="Company"
              options={["Select", "Company 1", "Company 2", "Company 3"]}
            />
            <SelectFields
              id="branch"
              label="Branch"
              options={["Select", "Branch 1", "Branch 2", "Branch 3"]}
            />
            <SelectFields
              id="vehicle"
              label="Vehicle"
              options={["Select", "Vehicle 1", "Vehicle 2", "Vehicle 3"]}
            />
            <SelectFields
              id="period"
              label="Period"
              options={["Select", "Period 1", "Period 2", "Period 3"]}
            />
            <InputFields id="from-date" label="From :" type="date" />
            <InputFields id="to-date" label="To :" type="date" />
          </form>
        </div>
        {/* Vehicle Report end here */}
      <hr className="border mt-10" />
      {/* Data Report Show Here Start */}
      </div>
    </>
  );
};



export default RightSideBar;
