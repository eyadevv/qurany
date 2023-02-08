import Side from "../Components/Side"
import Player from "../Components/Player"
import { PlayerProvider } from "../context/PlayerContext"
import { useState } from "react"
const Layout = ({ children }) => {
  const [showplayer, setshowplayer] = useState(false)
  return (
    <PlayerProvider>
      <main className="w-screen h-screen justify-between flex flex-row phone:flex-col overflow-clip ">
        <Side />
        <section className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-red-600 to-black phone:overflow-clip flex-shrink">
          <div className="w-full h-full overflow-auto phone:flex-shrink bg-green-900">
            {children}
          </div>
          <Player state={showplayer} />
        </section>
      </main>
    </PlayerProvider>
  )
}
export default Layout
