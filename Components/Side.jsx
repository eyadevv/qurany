import Link from "next/link";
import { AiFillHome, AiOutlineOrderedList } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
const Item = ({ content, route, icon }) => {
  return (
    <Link
      href={route}
      className={`  w-full h-16 rounded-lg  hover:bg-red-600 hover:cursor-pointer flex justify-center items-center m-1 p-8 gap-2 phone:p-1 flex-wrap-reverse`}
    >
      {icon}

      {content}
    </Link>
  );
};
const Side = () => {
  return (
    <section className="w-44 h-screen bg-black flex flex-col justify-baseline items-center pt-8 font-bold overflow-x-clip overflow-y-auto phone:flex-row phone:w-full phone:h-24 phone:text-center phone:p-0 phone:text-sm">
      <Item content="home" route="/app/" icon=<AiFillHome /> />
      <Item
        content="Playlist"
        route="/app/playlist"
        icon=<AiOutlineOrderedList />
      />
      <Item content="Board" route="/app/board" icon=<MdLeaderboard /> />
    </section>
  );
};
export default Side;
