import Link from "next/link"
import { AiFillHome, AiOutlineOrderedList, AiOutlineUser } from "react-icons/ai"
import { MdLeaderboard } from "react-icons/md"
const Item = ({ content, route, icon }) => {
  return (
    <Link
      href={route}
      className={`w-full h-16 rounded-lg  hover:bg-red-600 hover:cursor-pointer flex justify-center items-center m-1 p-2 pr-4 gap-2 phone:flex-nowrap phone:justify-center phone:p-0 phone:items-center`}
    >
      <div className="flex flex-row justify-start items-center  w-20 gap-2 phone:justify-center phone:w-max">
        {icon}

        <p className="phone:hidden">{content}</p>
      </div>
    </Link>
  )
}
const Side = () => {
  return (
    <side className="w-44 h-screen gap-4 bg-black flex flex-col justify-start items-center font-bold pt-8  phone:flex-row phone:w-full phone:h-24 phone:justify-center phone:p-0 phone:gap-0 flex-shrink-0">
      <Link href="/app/">
        <h2 className="phone:hidden">Quranly</h2>
      </Link>
      <div className="w-11/12 h-full flex justify-start items-center flex-col phone:flex-row phone:justify-center phone:h-8 ">
        <Item content="home" route="/app/" icon={<AiFillHome />} />
        <Item
          content="Playlist"
          route="/app/playlist"
          icon={<AiOutlineOrderedList />}
        />
        <Item content="Board" route="/app/board" icon={<MdLeaderboard />} />
        <Item content="Qari" route="/app/qari" icon={<AiOutlineUser />} />
      </div>
    </side>
  )
}
export default Side
