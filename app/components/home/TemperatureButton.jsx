
const TemperatureButton = ({ temperature }) => {
  return (
    <button className="w-[55px] h-[22px] px-2.5 py-[5px] bg-[#e63333] rounded-[48px] justify-center items-center gap-2.5 inline-flex text-white text-[10px] font-medium font-['Inter'] leading-3" aria-label={`Temperature: ${temperature}`}>
    {temperature} °c
  </button>
  )
}

export default TemperatureButton