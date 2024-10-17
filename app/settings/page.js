import React from "react";
import SideBar from "../components/common/SideBar";
import MainPage from "../components/settings/MainPage";

const page = () => {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <MainPage/>
      </div>
    </>
  );
};

export default page;
