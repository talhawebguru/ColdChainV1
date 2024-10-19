"use client"
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import ProfileImg from "@/public/images/profile.svg";
import NotificationBell from "./NotificationBell";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const getPageName = () => {
    if (pathname === "/") {
      return "Home";
    }
    const name = pathname.substring(1);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="px-5 lg:px-10 2xl:px-[90px] bg-[#f8fafe] border-b border-[#e3e3e3]">
      <div className="flex justify-between items-center py-5">
        <div className="flex items-center">
          <div className="pr-4 border-r border-[#e3e3e3]">
            <Image src={Logo} alt="Company Logo" loading="eager" priority />
          </div>
          <div className="ml-4">
            <p className="text-sm font-normal leading-tight text-center text-[#1c1c1c]/40 font-['Inter'] w-10">
              {getPageName()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <NotificationBell />
          <Link href={"/profile"}> 
          <div className="w-14 h-14 border border-[#f3f3f3] rounded-full">
            <Image src={ProfileImg} alt="User Profile" priority />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;