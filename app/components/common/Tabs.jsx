import React from 'react'

const Tabs = ({ isActive, label, onClick, isFirst, isLast }) => (
    <div
    role="tab"
    aria-selected={isActive}
    onClick={() => onClick(label)}
    className={`w-full h-[46px] px-2.5 py-[5px] flex justify-center items-center rounded-none gap-2.5 text-base font-medium font-['Inter'] leading-tight cursor-pointer ${
      isActive ? "bg-[#074bd8] text-white" : "bg-[#e0e0e0] text-[#1c1c1c]"
    } ${
      isFirst ? "rounded-tl-lg rounded-bl-lg" : ""
    } ${isLast ? "rounded-tr-lg rounded-br-lg" : ""}`}
  >
    <p>{label}</p>
  </div>
  );
export default Tabs