"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "../common/Tabs";
import FrightsList from "./FrightsList";
import StoresList from "./StoresList";

const MainPage = () => {
  const [activeTabDashboard, setActiveTabDashboard] = useState("Frights");

  const handleTabClickDashboard = (label) => {
    setActiveTabDashboard(label);
  };

  const tabs = ["Frights", "Stores", "Alerts",];

  return (
    <div className="p-6 w-full overflow-hidden ">
      {/* Top Tabs Start Here */}
      <div className="flex max-w-[400px]">
          {tabs.map((tab,index) => (
          <Tabs
            key={tab}
            isActive={activeTabDashboard === tab}
            label={tab}
            onClick={handleTabClickDashboard}
            isFirst={index === 0}
            isLast={index === tabs.length - 1}
          />
        ))}
      </div>
      {/* Top Tabs End here */}
      {/* Main Page Start here */}
      <AnimatePresence mode="wait">
        {activeTabDashboard === "Frights" && (
          <motion.div
            key="frights"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 "
          >
           <FrightsList/>
          </motion.div>
        )}
        {activeTabDashboard === "Stores" && (
          <motion.div
            key="stores"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-12"
          >
            <StoresList/>
          </motion.div>
        )}
        {activeTabDashboard === "Alerts" && (
          <motion.div
            key="alerts"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 mt-12"
          >
            <div className="col-span-2 min-h-[73vh]">
              {/* <StoreLeftSideBar /> */}
            </div>
            <div className="col-span-10 max-h-[67vh]">
              {/* <StoreRightSideBar /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Main Page End here */}
    </div>
  );
};

export default MainPage;
