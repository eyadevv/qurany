import Link from "next/link";
import {
  AiFillHome,
  AiOutlineOrderedList,
  AiOutlineUser,
} from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
const Item = ({ content, route, icon }) => {
  return (
    <Link
      href={route}
      className={`w-full h-16 rounded-lg  hover:bg-red-600 hover:cursor-pointer flex justify-center items-center m-1 p-2 gap-2 phone:p-1 phone:flex-nowrap`}
    >
      {icon}

      <p className="phone:hidden">{content}</p>
    </Link>
  );
};
const Side = () => {
  return (
    <section className="w-44 h-screen bg-black flex flex-col justify-between items-center font-bold pt-8  phone:flex-row phone:w-full phone:h-24 phone:justify-center phone:p-0">
      <div className="w-11/12 h-full flex justify-start items-center flex-col phone:flex-row phone:justify-center phone:h-8">
        <Item content="home" route="/app/" icon={<AiFillHome />} />
        <Item
          content="Playlist"
          route="/app/playlist"
          icon={<AiOutlineOrderedList />}
        />
        <Item content="Board" route="/app/board" icon={<MdLeaderboard />} />
        <Item content="Qari" route="/app/qari" icon={<AiOutlineUser />} />
      </div>
      <div className="w-16 h-16 rounded-full bg-white phone:hidden"></div>
    </section>
  );
};
export default Side;
