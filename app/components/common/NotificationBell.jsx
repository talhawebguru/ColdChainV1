import { FaBell } from "react-icons/fa";

const NotificationBell = () => {
    let count = 1;
  return (
    <div className="relative flex items-center justify-center w-14 h-14 bg-white border border-[#f3f3f3] rounded-full cursor-pointer">
    <FaBell size={25} />
    {count > 0 && (
      <div className="absolute flex items-center justify-center w-[26px] h-[26px] bg-[#074bd8] rounded-full -top-2 left-7">
        <p className="text-sm font-semibold text-white font-['Poppins']">{count}</p>
      </div>
    )}
  </div>
  )
}

export default NotificationBell