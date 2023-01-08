import Side from "../Components/Side"
import Player from "../Components/Player"
import { PlayerProvider } from "../context/PlayerContext"
import { useState } from "react"
const Layout = ({ children }) => {
  const [showplayer, setshowplayer] = useState(false)
  return (
    <PlayerProvider>
      <main className="w-screen h-screen flex flex-row">
        <Side />
        <section className="w-full h-full flex flex-col justify-between items-center bg-gradient-to-b from-red-600 to-black">
          <div className="w-full h-full overflow-auto">{children}</div>
          <Player state={showplayer} />
        </section>
      </main>
    </PlayerProvider>
  )
}
export default Layout
