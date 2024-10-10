"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import Tabs from "./Tabs";
import SearchInput from "./SearchInput";

const RightSideMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <>
      <div className="w-[437px] h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col   gap-8 ">
        <div className="flex justify-center items-center">
          <Tabs
            isActive={activeTab === "All"}
            label="All"
            onClick={handleTabClick}
          />
          <Tabs
            isActive={activeTab === "Vehicles"}
            label="Vehicles"
            onClick={handleTabClick}
          />
          <Tabs
            isActive={activeTab === "Stores"}
            label="Stores"
            onClick={handleTabClick}
          />
        </div>
        <SearchInput />
        <Cards
      trackerNumber="40376"
      trackerId="1644421181"
      driverName="Charles P."
      temperature={12}
      humidity={50}
      status="Active"
    />
      </div>
    </>
  );
};

export default RightSideMenu;
