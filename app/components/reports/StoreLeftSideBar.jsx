import React from "react";
import { MdOutlineSensors } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiAlarmWarningLine } from "react-icons/ri";
import ReportItem from "./ReportItem";

const StoreLeftSideBar = () => {
  return (
    <div className="w-[222px] h-full px-4 py-8 bg-white rounded-lg border flex flex-col items-center gap-4">
      <ReportItem icon={MdOutlineSensors } label="Sensors Report" isActive={true} />
      <ReportItem icon={TbReportAnalytics } label="Summary" />
      <ReportItem icon={RiAlarmWarningLine} label="Alarm" />
    </div>
  )
}

export default StoreLeftSideBar