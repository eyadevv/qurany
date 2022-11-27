import Side from "../Components/Side";
import Player from "../Components/Player";

const Layout = ({ children }) => {
  return (
    <main className="w-screen h-max bg-black text-white flex flex-row phone:flex-col ">
      <Side />
      <section className="w-full h-screen flex flex-col justify-between items-start bg-gradient-to-b from-red-700 to-black">
        <div className="w-full h-5/6  rounded-xl  ">{children}</div>
        <Player />
      </section>
    </main>
  );
};
export default Layout;
