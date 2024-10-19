"use client"
import { GoHomeFill } from "react-icons/go";
import { RiBarChartBoxLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { RxExit, RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <div className="min-w-20 h-[89.4vh] bg-white border-r border-[#e3e3e3] flex flex-col gap-8 pt-10">
      <NavItem href="/" icon={GoHomeFill} label="Home" />
      <NavItem href="/dashboard" icon={RxDashboard} label="Dashboard" />
      <NavItem href="/reports" icon={RiBarChartBoxLine} label="Reports" />
      <NavItem href="/settings" icon={IoSettingsOutline} label="Settings" />
      <NavItem href="/profile" icon={BsPerson} label="Profile" />
      <NavItem href="/logout" icon={RxExit} label="Logout" />
    </div>
  );
};

export default SideBar;
