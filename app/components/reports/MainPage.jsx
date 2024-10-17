"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import StoreLeftSideBar from "./StoreLeftSideBar";
import StoreRightSideBar from "./StoreRightSideBar";
import Tabs from "../common/Tabs";

const MainPage = () => {
  const [activeTabReports, setActiveTabReports] = useState("Frights");

  const handleTabClickReports = (label) => {
    setActiveTabReports(label);
  };

  const tabs = ["Frights", "Stores"];

  return (
    <div className="p-6 w-full">
      {/* Top Tabs Start Here */}
      <div className="flex max-w-[400px]">
          {tabs.map((tab,index) => (
          <Tabs
            key={tab}
            isActive={activeTabReports === tab}
            label={tab}
            onClick={handleTabClickReports}
            isFirst={index === 0}
            isLast={index === tabs.length - 1}
          />
        ))}
      </div>
      {/* Top Tabs End here */}
      {/* Main Page Start here */}
      <AnimatePresence mode="wait">
        {activeTabReports === "Frights" && (
          <motion.div
            key="frights"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 mt-12"
          >
            <div className="col-span-2 min-h-[73vh]">
              <LeftSideBar />
            </div>
            <div className="col-span-10 max-h-[67vh]">
              <RightSideBar />
            </div>
          </motion.div>
        )}
        {activeTabReports === "Stores" && (
          <motion.div
            key="stores"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-12 mt-12"
          >
            <div className="col-span-2 min-h-[73vh]">
              <StoreLeftSideBar />
            </div>
            <div className="col-span-10 max-h-[67vh]">
              <StoreRightSideBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Main Page End here */}
    </div>
  );
};

export default MainPage;
