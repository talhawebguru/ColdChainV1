import React from "react";

const InputFields = ({ id, label, type = "text", hasIcon = false, ...props }) => (
  <div className="flex flex-col gap-3">
    <label htmlFor={id} className="text-[#232323] text-base font-medium font-['Inter']">
      {label}
    </label>
    <input
      type={type}
      id={id}
      aria-label={label}
      className={`min-w-44 max-w-max relative h-12 p-2.5 ${hasIcon ? 'pl-9' : ''} bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500`}
      {...props}
    />
  </div>
);

export default InputFields;