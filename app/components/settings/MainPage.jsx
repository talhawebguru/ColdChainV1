"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReportsTables from "../reports/ReportsTables";
import Tabs from "../common/Tabs";

const MainPage = () => {
  const [activeTabSettings, setActiveTabSettings] = useState("Company");

  const handleTabClickSettings = (label) => {
    setActiveTabSettings(label);
  };
  const tabs = ["Company", "Branch","Vehicle", "Driver", "Sensors", ];

  return (
    <div className="p-6 w-full">
      {/* Top Tabs Start Here */}
      <div className="flex max-w-[800px]">
      {tabs.map((tab,index) => (
          <Tabs
            key={tab}
            isActive={activeTabSettings === tab}
            label={tab}
            onClick={handleTabClickSettings}
            isFirst={index === 0}
            isLast={index === tabs.length - 1}
          />
        ))}
      </div>
      {/* Top Tabs End here */}
      {/* Main Page Start here */}
      <AnimatePresence mode="wait">
        {activeTabSettings === "Company" && (
          <motion.div
          key="company"
          initial={{ opacity: 0, x: -20 ,y: 0}}
          animate={{ opacity: 1, x: 0,  y: 0}}
          exit={{ opacity: 0, x: 20 ,y: 0}}
          transition={{ duration: 0.3 }}
        >
            <h1 className="p-1 py-6 text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">{activeTabSettings}</h1>

             <ReportsTables/>
        </motion.div>

        )}
        {activeTabSettings === "Branch" && (
          <motion.div
          key="branch"
          initial={{ opacity: 0, x: -20 ,y: 0}}
          animate={{ opacity: 1, x: 0,  y: 0}}
          exit={{ opacity: 0, x: 20 ,y: 0}}
          transition={{ duration: 0.3 }}
        >
            <h1 className="p-1 py-6 text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">{activeTabSettings}</h1>
             <ReportsTables/>
        </motion.div>
        )}
        {activeTabSettings === "Vehicle" && (
          <motion.div
          key="vehicle"
          initial={{ opacity: 0, x: -20, y: 0 }}
          animate={{ opacity: 1, x: 0 , y: 0}}
          exit={{ opacity: 0, x: 20 , y: 0}}
          transition={{ duration: 0.3 }}
        >
            <h1 className="p-1 py-6 text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">{activeTabSettings}</h1>
             <ReportsTables/>
        </motion.div>
        )}
        {activeTabSettings === "Driver" && (
          <motion.div
          key="driver"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
            <h1 className="p-1 py-6 text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">{activeTabSettings}</h1>
             <ReportsTables/>
        </motion.div>
        )}
        {activeTabSettings === "Sensors" && (
          <motion.div
          key="sensors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
            <h1 className="p-1 py-6 text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">{activeTabSettings}</h1>
             <ReportsTables/>
        </motion.div>
        )}          
      </AnimatePresence>
      {/* Main Page End here */}
    </div>
  );
};

export default MainPage;
