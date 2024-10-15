import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import InputFields from "./InputFields";
import SelectFields from "./SelectFields";
import ReportsTables from "./ReportsTables";


const StoreRightSideBar = () => {
    const [formData, setFormData] = useState({
        search: "",
        company: "",
        branch: "",
        vehicle: "",
        period: "",
        fromDate: "",
        toDate: "",
      });
    
      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
      };
  return (
    <>
    <h1 className="text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">
      Stores Report
    </h1>
    <div className="py-8 bg-white rounded-lg border w-full h-full overflow-y-scroll mt-6">
      <h1 className="text-[#232323] pl-6 text-lg font-medium font-['Inter'] tracking-tight">
        Sensors Report
      </h1>
      {/* Report Form Start Here */}
      <div className="px-6 mt-10">
        <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
          <span className="relative">
            <FiSearch
              size={18}
              aria-label="Search Icon"
              className="absolute z-10 top-[71%] left-[8%] -translate-x-[50%] -translate-y-[50%]"
            />
            <InputFields
              id="search"
              label="Search Input"
              type="search"
              hasIcon
              value={formData.search}
              onChange={handleInputChange}
            />
          </span>
          <SelectFields
            id="company"
            label="Company"
            options={["Select", "Company 1", "Company 2", "Company 3"]}
            value={formData.company}
            onChange={handleInputChange}
          />
          <SelectFields
            id="branch"
            label="Branch"
            options={["Select", "Branch 1", "Branch 2", "Branch 3"]}
            value={formData.branch}
            onChange={handleInputChange}
          />
          <SelectFields
            id="vehicle"
            label="Vehicle"
            options={["Select", "Vehicle 1", "Vehicle 2", "Vehicle 3"]}
            value={formData.vehicle}
            onChange={handleInputChange}
          />
          <SelectFields
            id="period"
            label="Period"
            options={["Select", "Period 1", "Period 2", "Period 3"]}
            value={formData.period}
            onChange={handleInputChange}
          />
          <InputFields
            id="from-date"
            label="From :"
            type="date"
            value={formData.fromDate}
            onChange={handleInputChange}
          />
          <InputFields
            id="to-date"
            label="To :"
            type="date"
            value={formData.toDate}
            onChange={handleInputChange}
          />
        </form>
      </div>
      {/* Vehicle Report end here */}
      <hr className="border mt-10" />
      {/* Data Report Show Here Start */}
      <ReportsTables />
    </div>
  </>
  )
}

export default StoreRightSideBar