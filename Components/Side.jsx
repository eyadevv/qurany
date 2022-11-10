import Link from "next/link";
const Item = ({ content, route }) => {
  return (
    <Link
      href={route}
      className="w-full h-16 rounded-lg  hover:bg-red-600 hover:cursor-pointer flex justify-center items-center m-1 p-8"
    >
      {content}
    </Link>
  );
};
const Side = () => {
  return (
    <section className="w-44 h-screen bg-red-700 flex flex-col justify-baseline items-center pt-8 font-bold overflow-scroll phone:flex-row phone:w-full phone:h-24 phone:text-center phone:p-0 ">
      <Item content="home" route="/app/" />
      <Item content="Playlist" route="/app/playlist" />
      <Item content="Board" route="/app/board" />
    </section>
  );
};   
export default Side;
