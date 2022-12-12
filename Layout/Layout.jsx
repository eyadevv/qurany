import Side from "../Components/Side";
import Player from "../Components/Player";
import { PlayerProvider } from "../context/PlayerContext";

const Layout = ({ children }) => {
  return (
    <PlayerProvider>
      <main className="w-screen h-screen flex flex-row text-white phone:flex-col ">
        <Side />
        <section className="w-full h-screen flex flex-col justify-between items-center bg-gradient-to-b from-red-600 to-black">
          <div className="w-full h-[80vh] overflow-scroll">{children}</div>
          <Player />
        </section>
      </main>
    </PlayerProvider>
  );
};
export default Layout;
