"use client";
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import SearchInput from "./SearchInput";
import Cards from "./Cards";
import Tabs from "../common/Tabs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HomeTabs from "./HomeTabs";

const RightSideMenu = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGraphDetails = async (deviceId) => {
    const graphResponse = await axios.get(`http://192.168.121.51:4000/getGraphDetails/${deviceId}`);
    return graphResponse.data;
  };

  const fetchData = async () => {
    try {
      const vehicleResponse = await axios.get("http://192.168.121.51:4000/getAllVehicleList");
      const vehicles = vehicleResponse.data;

      const vehicleDataWithGraphDetails = await Promise.all(
        vehicles.map(async (vehicle) => {
          const graphDetails = await fetchGraphDetails(vehicle.deviceId);
          const latestData = graphDetails.sort((a, b) => new Date(b.rtcTime) - new Date(a.rtcTime))[0];
          return {
            ...vehicle,
            temperature: latestData ? latestData.sensorTemperature : "N/A",
            humidity: latestData ? latestData.sensorHumidity : "N/A",
          };
        })
      );

      setCardsData(vehicleDataWithGraphDetails);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every 1 minute
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const filteredCards = useMemo(() => {
    return cardsData.filter((card) => {
      if (activeTab === "All") return true;
      return card.vehicleCategory.category.toLowerCase() === activeTab.toLowerCase();
    });
  }, [cardsData, activeTab]);

  if (loading) {
    return (
      <div className="2xl:w-[437px] max-w-[420px] w-full h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col gap-8 overflow-y-scroll">
        <Skeleton height={40} count={1} />
        <Skeleton height={40} count={1} />
        <Skeleton height={40} count={1} />
        <Skeleton height={40} count={1} />
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center items-center h-full">Error: {error.message}</div>;
  }

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="2xl:w-[437px] max-w-[420px] w-full h-[89.4vh] pt-6 px-6 bg-[#f8fafe] flex flex-col gap-8 overflow-y-scroll"
    >
      <div className="">
        <HomeTabs/>
      </div>
      <SearchInput />
      <AnimatePresence>
        {filteredCards.map((card) => (
          <motion.div
            key={card.deviceId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Cards
              trackerNumber={card.plateNumber}
              trackerId={card.trackerModel}
              driverName={card.mobileNumber}
              temperature={card.temperature}
              humidity={card.humidity}
              status={card.status}
              type={card.vehicleCategory.category}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default RightSideMenu;
