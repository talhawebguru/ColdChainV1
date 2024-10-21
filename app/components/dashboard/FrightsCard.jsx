import React from "react";
import { motion } from "framer-motion";

const FrightsCard = ({ plateNumber, date, temperature, humidity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-green-500/10 h-[345px] rounded-3xl shadow border border-green-500 px-10 py-6"
    >
      <h1 className="text-[#232323] text-xl font-semibold font-['Inter'] leading-7 text-center">
        Plate number {plateNumber}
      </h1>
      <p className="text-[#7f7f7f] text-sm font-semibold font-['Inter'] leading-7 text-center">
        {date}
      </p>
      <hr className="border border-[#e8e8e8] mt-3" />
      <div className="flex items-center justify-between gap-8 mt-3">
        <div className="flex gap-2 items-center">
          <div className="w-[7px] h-[7px] bg-[#62cb12] rounded-full" />
          <p className="text-[#7f7f7f] text-base font-medium font-['Inter']">
            Temperature (°c)
          </p>
        </div>
        <p className="text-[#232323] text-base font-medium font-['Inter']">
          {temperature}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2 items-center">
          <div className="w-[7px] h-[7px] bg-[#199afb] rounded-full" />
          <p className="text-[#7f7f7f] text-base font-medium font-['Inter']">
            Humidity (%)
          </p>
        </div>
        <p className="text-[#232323] text-base font-medium font-['Inter']">
          {humidity}
        </p>
      </div>
      <div className="mt-8">
        Temperature Chart here at later
      </div>
    </motion.div>
  );
};


export default FrightsCard;
