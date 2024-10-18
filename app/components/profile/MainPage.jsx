"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileCard from "./ProfileCard";
import ProfileData from "./ProfileData";

// Example profile data, replace this with data fetched from the backend
const profile = {
  firstName: "Jordan",
  lastName: "Blake",
  userName: "Jordan125",
  password: "Jordan009B",
  email: "Jordan125@gmail.com",
  phoneNumber: "+123456789",
  address: "Street 09, South hall Service road, NY",
  notifications: true,
};

const MainPage = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-[#232323] text-2xl font-medium font-['Inter'] tracking-tight">
        Profile
      </h1>
      {/* Profile section start here */}
      <AnimatePresence>
        <motion.div
          key="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-12 gap-6 mt-6"
        >
          <motion.div
            key="profile-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="col-span-4"
          >
            <ProfileCard
              name={`${profile.firstName} ${profile.lastName}`}
              username={profile.userName}
              email={profile.email}
              phone={profile.phoneNumber}
              address={profile.address}
            />
          </motion.div>
          <motion.div
            key="profile-data"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="col-span-7"
          >
            <ProfileData profile={profile} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* Profile Section end here */}
    </div>
  );
};

export default MainPage;
