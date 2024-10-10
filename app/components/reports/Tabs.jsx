const Tabs = ({ isActive, label, onClick }) => (
    <div
      role="tab"
      aria-selected={isActive}
      onClick={() => onClick(label)}
      className={`min-w-[100px] w-full max-w-[200px] lg:min-w-[206px] h-[46px] px-2.5 py-[5px] flex justify-center items-center gap-2.5 text-base font-medium font-['Inter'] leading-tight cursor-pointer ${
        isActive ? "bg-[#074bd8] text-white" : "bg-[#e0e0e0] text-[#1c1c1c]"
      } ${isActive ? "rounded-tl-lg rounded-bl-lg" : "rounded-tl-lg rounded-bl-lg"} ${
        label === "Stores" ? "rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg" : ""
      }`}
    >
      <p>{label}</p>
    </div>
  );
  
  export default Tabs;
  