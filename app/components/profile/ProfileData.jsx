"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const ProfileData = ({ profile }) => {
  const [enabled, setEnabled] = useState(profile.notifications);

  const toggleSwitch = (event) => {
    event.preventDefault(); // Prevent form submission
    setEnabled(!enabled);
  };

  return (
    <div className="p-10 bg-white rounded shadow h-[77vh]">
      <form action="">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="firstName"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Jordan"
              defaultValue={profile.firstName}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="First Name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="lastName"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Blake"
              defaultValue={profile.lastName}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="Last Name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="userName"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Jordan125"
              defaultValue={profile.userName}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="User Name"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="password"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Jordan009B"
              autoComplete="on"
              defaultValue={profile.password}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="Password"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="email"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Jordan125@gmail.com"
              defaultValue={profile.email}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="Email"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="phoneNumber"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="+123456789"
              defaultValue={profile.phoneNumber}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="address"
              className="text-[#232323] text-base font-medium font-['Inter']"
            >
              Personal Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Street 09, South hall Service road, NY"
              defaultValue={profile.address}
              className="max-w-full p-2.5 bg-[#efefef] focus:outline-none focus:border-blue-500 rounded border border-[#d3d3d3]"
              aria-label="Personal Address"
            />
          </div>
        </div>

        <div className="flex gap-5 mt-11">
          <label
            htmlFor="notifications"
            className="text-[#232323] text-base font-medium font-['Inter']"
          >
            Notification
          </label>
          <motion.button
            onClick={toggleSwitch}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300`}
              layout
            />
          </motion.button>
        </div>
        <div className="flex gap-4 justify-end mt-8">
          <button
            type="button"
            className="w-36 h-12 p-2.5 rounded border border-[#074bd8] justify-center items-center gap-2.5 inline-flex text-[#074bd8] text-base font-medium font-['Inter'] capitalize"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-36 h-12 p-2.5 bg-[#074bd8] rounded justify-center items-center gap-2.5 inline-flex text-white text-base font-medium font-['Inter'] capitalize"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};


export default ProfileData;
