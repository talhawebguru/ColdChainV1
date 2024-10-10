
const ReportItem = ({ icon: Icon, label, isActive }) => {
  return (
    <div
    className={`flex items-center gap-4 px-3 py-2 justify-between rounded-md w-full ${
      isActive ? "bg-[#084CD833]" : ""
    }`}
  >
    <Icon size={34} className={isActive ? "text-[#084CD8]" : "text-[#7f7f7f]"} aria-label={label} />
    <p className={isActive ? "text-[#084CD8]" : "text-[#7f7f7f]"}>{label}</p>
  </div>
  )
}

export default ReportItem