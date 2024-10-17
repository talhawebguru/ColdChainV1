"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import Tabs from "../common/Tabs";
import SearchInput from "./SearchInput";

const RightSideMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Vehicles","Stores"];

  const handleTabClick = (label) => {
    setActiveTab(label);
  };
  return (
    <>
      <div className="w-[437px] h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col   gap-8 ">
        <div className="flex justify-center items-center">
        {tabs.map((tab,index) => (
          <Tabs
            key={tab}
            isActive={activeTab === tab}
            label={tab}
            onClick={handleTabClick}
            isFirst={index === 0}
            isLast={index === tabs.length - 1}
          />
        ))}
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
