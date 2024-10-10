
const HumidityButton = ({ humidity }) => {
  return (
    <button className="h-[22px] px-2.5 py-[5px] bg-green-500 rounded-[48px] justify-center items-center gap-2.5 inline-flex text-white text-[10px] font-medium font-['Inter'] leading-3" aria-label={`Humidity: ${humidity}`}>
    {humidity}%
  </button>
  )
}

export default HumidityButton