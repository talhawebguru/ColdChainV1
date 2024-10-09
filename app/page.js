import LeftHeader from "./components/common/LeftHeader";
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
