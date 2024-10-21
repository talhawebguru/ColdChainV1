"use client";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { PiTruckLight } from "react-icons/pi";
import { LuStore } from "react-icons/lu";
import { LiaHospitalAltSolid } from "react-icons/lia";
import { TbMapPinPlus } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const HomeTabs = () => {
  // Define tabs and current tab state
  const [currentTab, setCurrentTab] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Tabs data
  const tabs = [
    { name: "All", icon: <RxDashboard size={22} /> },
    { name: "Frights", icon: <PiTruckLight size={24} /> },
    { name: "Stores", icon: <LuStore size={22} /> },
    { name: "Pharmacy", icon: <LiaHospitalAltSolid size={22} /> },
    { name: "Medical Center", icon: <TbMapPinPlus size={22} /> },
  ];

  // Handle the arrow click to show the next tab
  const nextTab = () => {
    setDirection(1);
    setScrollIndex((prev) => Math.min(prev + 1, tabs.length - 3));
  };

  // Handle the arrow click to show the previous tab
  const prevTab = () => {
    setDirection(-1);
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  // Determine the tabs to display
  const visibleTabs = tabs.slice(scrollIndex, scrollIndex + 3);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 h-[80px] rounded-lg shadow-md">
      {/* Previous arrow button */}
      {scrollIndex > 0 && (
        <div
          onClick={prevTab}
          className="flex justify-center items-center cursor-pointer transition-colors"
        >
          <IoIosArrowBack />
        </div>
      )}
      <div className="flex items-center justify-between w-full pr-2 overflow-hidden">
        {/* Tab navigation */}
        <AnimatePresence initial={false} custom={direction}>
          {visibleTabs.map((tab, index) => (
            <motion.div
              key={scrollIndex + index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeIn" }}
              onClick={() => setCurrentTab(scrollIndex + index)}
              className={`flex flex-col items-center w-full gap-2 cursor-pointer transition-colors duration-200 px-4 hover:text-blue-600 ${
                currentTab === scrollIndex + index
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-blue-600"
              } ${index < 2 ? "border-r border-[#e3e3e3]" : ""}`}
            >
              <span className={currentTab === scrollIndex + index ? "text-blue-600" : "text-[#a2a2a2]"}>
                {tab.icon}
              </span>
              <span className="text-center text-sm font-medium font-['Inter'] capitalize leading-[16.80px] w-full">
                {tab.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* Next arrow button */}
      {scrollIndex + 3 < tabs.length && (
        <div
          onClick={nextTab}
          className="flex justify-center items-center cursor-pointer transition-colors"
        >
          <IoIosArrowForward />
        </div>
      )}
    </div>
  );
};

export default HomeTabs;
