import LeftHeader from "./components/common/SideBar";
import RightSideMenu from "./components/home/RightSideMenu";

export default function Home() {
  return (
   <>
   <div className="flex ">
   <LeftHeader/>
   <RightSideMenu/>
   </div>

   </>
  );
}
