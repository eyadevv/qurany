import Side from "../Components/Side";
import Player from "../Components/Player";
import PlayerContext from "../Context/PlayerConext";
import { useState } from "react";

const Layout = ({ children }) => {
  const [player, setplayer] = useState(false);
  const value = { player, setplayer };
  return (
    <PlayerContext.Provider value={value}>
      <main className="w-screen h-screen bg-black text-white flex flex-row phone:flex-col ">
        <Side />
        <section className="w-full h-screen flex flex-col justify-between items-start bg-gradient-to-b from-red-700 to-black">
          <div className="w-full h-full  rounded-xl  ">{children}</div>
          {player ? <Player /> : null}
        </section>
      </main>
    </PlayerContext.Provider>
  );
};
export default Layout;
