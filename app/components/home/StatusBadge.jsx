
const StatusBadge = ({ status }) => {
  return (
    <div className={`h-[22px] p-2.5 rounded-[37px] justify-center items-center gap-2.5 inline-flex text-[11px] font-medium font-['Inter'] leading-[13.20px] ${status === "Active" ? "bg-[#f2f5fd] text-[#61ca11]" : "bg-[#e3e3e3] text-[#7f7f7f]"}`}>
    <p>{status}</p>
  </div>
  )
}

export default StatusBadge