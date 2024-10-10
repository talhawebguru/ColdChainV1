import React from "react";
import { PiTruck, PiMapPinAreaLight, PiUniteSquareBold } from "react-icons/pi";
import { RiAlarmWarningLine } from "react-icons/ri";
import ReportItem from "./ReportItem";
const LeftSideBar = () => {
  return (
    <div className="w-[222px] h-full px-4 py-8 bg-white rounded-lg border flex flex-col items-center gap-4">
      <ReportItem icon={PiTruck} label="Vehicles Report" isActive={true} />
      <ReportItem icon={PiMapPinAreaLight} label="Location Report" />
      <ReportItem icon={PiUniteSquareBold} label="RFID Report" />
      <ReportItem icon={RiAlarmWarningLine} label="Alarm" />
    </div>
  );
};

export default LeftSideBar;
