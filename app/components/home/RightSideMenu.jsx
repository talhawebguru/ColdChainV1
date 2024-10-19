"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import Cards from "./Cards";
import Tabs from "../common/Tabs";

const RightSideMenu = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Vehicles", "Stores"];

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  const cardsData = [
    {
      trackerNumber: "40376",
      trackerId: "1644421181",
      driverName: "Charles P.",
      temperature: 12,
      humidity: 50,
      status: "Active",
      type: "vehicles",
    },
    {
      trackerNumber: "40377",
      trackerId: "1644421182",
      driverName: "John D.",
      temperature: 15,
      humidity: 55,
      status: "inactive",
      type: "stores",
    },
    {
      trackerNumber: "40377",
      trackerId: "1644421183",
      driverName: "John D.",
      temperature: 15,
      humidity: 55,
      status: "Active",
      type: "stores",
    },
    {
      trackerNumber: "40378",
      trackerId: "1644421184",
      driverName: "Alice M.",
      temperature: 10,
      humidity: 45,
      status: "Active",
      type: "vehicles",
    },
    // Add more card data as needed
  ];

  const filteredCards = cardsData.filter((card) => {
    if (activeTab === "All") return true;
    return card.type === activeTab.toLowerCase();
  });

  return (
    <>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="2xl:w-[437px] max-w-[420px] w-full h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col gap-8 overflow-y-scroll"
      >
        <div className="flex justify-center items-center">
          {tabs.map((tab, index) => (
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
        <AnimatePresence>
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.trackerId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Cards
                trackerNumber={card.trackerNumber}
                trackerId={card.trackerId}
                driverName={card.driverName}
                temperature={card.temperature}
                humidity={card.humidity}
                status={card.status}
                type={card.type}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default RightSideMenu;
