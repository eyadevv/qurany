import { createContext, useState } from "react"
const PlayerContext = createContext()
const PlayerProvider = ({ children }) => {
  const [surahslist, setsurahslist] = useState(null)
  const [active, setactive] = useState(0)
  const [showplayer, setshowplayer] = useState(false)

  return (
    <PlayerContext.Provider
      value={{
        surahslist,
        setsurahslist,
        active,
        setactive,
        showplayer,
        setshowplayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
export { PlayerContext, PlayerProvider }
