import Side from "../Components/Side";
import Player from "../Components/Player";
const Layout = ({ children }) => {
  return (
    <main className="w-screen h-max bg-black text-white flex flex-row phone:flex-col ">
      <Side />
      <section className="w-full h-screen flex flex-col justify-between items-start">
        <div className="w-11/12 h-5/6  rounded-xl m-4 p-4 ">{children}</div>
        <Player />
      </section>
    </main>
  );
};
export default Layout;
