"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const MainPage = () => {
  const [activeTabReports, setActiveTabReports] = useState("Frights");

  const handleTabClickReports = (label) => {
    setActiveTabReports(label);
  };
  const tabs = ["Frights", "Stores"];
  return (
    <>
      <div className="p-6 w-full">
        {/* Top Tabs Start Here */}
        <div className="flex">
        {tabs.map((tab) => (
          <Tabs
            key={tab}
            isActive={activeTabReports === tab}
            label={tab}
            onClick={handleTabClickReports}
          />
        ))}
        </div>
        {/* Top Tabs End here */}
        {/* Main Page Start here */}
        <div className="grid grid-cols-12 mt-12">
            <div className="col-span-2 min-h-[73vh]"><LeftSideBar/></div>
            <div className="col-span-10 max-h-[67vh]"><RightSideBar/></div>
        </div>
        {/* Main Page End here */}


      </div>
    </>
  );
};

export default MainPage;
