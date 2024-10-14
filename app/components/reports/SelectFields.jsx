

const SelectFields = ({ id, label, options }) => (
    <div className="flex flex-col gap-3 min-w-44 max-w-64 w-full">
      <label htmlFor={id} className="text-[#232323] text-base font-medium font-['Inter']">
        {label}
      </label>
      <select
        id={id}
        className="w-full h-12 p-2.5 pr-5 bg-[#e3e3e3] rounded border border-[#d3d3d3] focus:outline-none focus:border-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
export default SelectFields