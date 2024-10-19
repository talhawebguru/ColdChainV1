import React from "react";
import Image from "next/image";
import TruckIcon from "@/public/images/truckIcon.svg";
import StoreIcon from "@/public/images/storeIcon.svg";
import TemperatureButton from "./TemperatureButton";
import StatusBadge from "./StatusBadge";
import HumidityButton from "./HumidityButton";

const Cards = ({ trackerNumber, trackerId, driverName, temperature, humidity, status, type }) => {
  return (
    <div className="h-[200px] sm:h-[180px] p-6 bg-white rounded-lg shadow border border-[#e3e3e3] grid grid-cols-2">
      <div>
        <p className="text-[#232323] text-lg font-bold font-['Inter'] tracking-tight">
          {trackerNumber}
        </p>
        <p className="text-[#232323] text-sm font-medium font-['Inter'] tracking-tight mt-3">
          Tracker No: {trackerId}
        </p>
        <p className="text-[#7f7f7f] text-xs font-medium font-['Inter'] tracking-tight mt-1">
          {driverName}
        </p>
        <div className="mt-3 flex gap-3">
          <TemperatureButton temperature={temperature} />
          <HumidityButton humidity={humidity} />
        </div>
      </div>
      <div className="flex flex-col items-end gap-6">
        <StatusBadge status={status} />
        <div>
          {type === "vehicles" ? (
            <Image src={TruckIcon} alt="Truck Icon" loading="eager" priority />
          ) : (
            <Image src={StoreIcon} alt="Store Icon" loading="eager" priority />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
