import SideBar from "../components/common/SideBar"
import MainPage from "../components/reports/MainPage"

const page = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <MainPage/>
      </div>
    </>
  )
}

export default page