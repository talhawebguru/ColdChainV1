import SideBar from "../components/common/SideBar";
import MainPage from "../components/dashboard/MainPage";

const page = () => {
  return (
    <>
      <div className="flex overflow-hidden">
        <SideBar/>
        <MainPage/>
      </div>
    </>
  );
};

export default page;
