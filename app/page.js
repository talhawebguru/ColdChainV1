"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeftHeader from "./components/common/SideBar";
import MapLocation from "./components/home/MapLocation";
import RightSideMenu from "./components/home/RightSideMenu";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          key="home-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex"
        >
          <LeftHeader />
          <motion.div
            key="map-location"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-auto"
          >
            <MapLocation />
          </motion.div>
          <motion.div
            key="right-side-menu"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RightSideMenu />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
